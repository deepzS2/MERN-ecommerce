/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		// Domínio de imagens
		// next/image src
		domains: [
			'images.pexels.com',
			'd3o2e4jr3mxnm3.cloudfront.net',
			'cdn.shopify.com',
			'www.prada.com',
			'www.burdastyle.com',
			'images.ctfassets.ne',
			'www.vintageindustries.nl',
			'images.ctfassets.net',
			'www.pngarts.com',
			'i.ibb.co',
		],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: { and: [/\.(js|ts)x?$/] },
			use: ['@svgr/webpack'],
		})

		return config
	},
}

module.exports = nextConfig
