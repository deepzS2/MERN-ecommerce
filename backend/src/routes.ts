import express from 'express'

import {
	verifyTokenAndAdmin,
	verifyTokenAndAuthorization,
	verifyToken,
} from '@/middlewares/verifyToken'
import AuthController from '@controllers/AuthController'
import CartsController from '@controllers/CartsController'
import OrdersController from '@controllers/OrdersController'
import ProductsController from '@controllers/ProductsController'
import UsersController from '@controllers/UsersController'

const router = express.Router()

// Authentication
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)

// Users
router.get('/users', verifyTokenAndAdmin, UsersController.index)
router.get('/users/stats', verifyTokenAndAdmin, UsersController.stats)
router.get('/users/:id', verifyTokenAndAdmin, UsersController.find)
router.put('/users/:id', verifyTokenAndAuthorization, UsersController.update)
router.delete('/users/:id', verifyTokenAndAuthorization, UsersController.delete)

// Products
router.get('/products', ProductsController.index)
router.get('/products/:id', ProductsController.find)
router.post('/products', verifyTokenAndAdmin, ProductsController.create)
router.put('/products/:id', verifyTokenAndAdmin, ProductsController.update)
router.delete('/products/:id', verifyTokenAndAdmin, ProductsController.delete)

// Carts
router.get('/carts', verifyTokenAndAdmin, CartsController.index)
router.get('/carts/:userId', verifyTokenAndAuthorization, CartsController.find)
router.post('/carts', verifyToken, CartsController.create)
router.put('/carts/:id', verifyToken, CartsController.update)
router.delete('/carts/:id', verifyToken, CartsController.delete)

// Orders
router.get('/orders', verifyTokenAndAdmin, OrdersController.index)
router.get('/orders/income', verifyTokenAndAdmin, OrdersController.income)
router.get(
	'/orders/:userId',
	verifyTokenAndAuthorization,
	OrdersController.find
)
router.post('/orders', verifyToken, OrdersController.create)
router.put('/orders/:id', verifyTokenAndAdmin, OrdersController.update)
router.delete('/orders/:id', verifyTokenAndAdmin, OrdersController.delete)

export default router
