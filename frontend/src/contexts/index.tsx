import { ToastContainer } from 'react-toastify'

import { QueryClientProvider } from './query'
import ThemeContext from './theme'

import 'react-toastify/dist/ReactToastify.css'

const ContextsProviders: React.FC = ({ children }) => {
	return (
		<>
			<ToastContainer />
			<QueryClientProvider>
				<ThemeContext>{children}</ThemeContext>
			</QueryClientProvider>
		</>
	)
}

export default ContextsProviders
