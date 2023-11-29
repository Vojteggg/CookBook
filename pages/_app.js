/**
 * Import your global css before MyApp
 */
import '../styles/variables.css'
import '../styles/global.css'

/**
 * Import theme component
 */
import ThemeToggle from '../components/theme.util'

/**
 * Defualt _app.jsx file
 */
export default function MyApp({ Component, pageProps }) {
	return (
		<>
		<ThemeToggle />
		<Component {...pageProps} />
		</>
	)
}