// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
//import ThemeToggle from './components/ThemeToggle/ThemeToggle'
//import Home from './pages/Home'
//import Contact from './pages/Contact'
import './styles/global.css'

function App() {
	return (
		<ThemeProvider>
			<Router>
				<Header />
				<main>
					<Routes>
						{/* The Home component contains sections with classes like .page__main, .page__skills, etc.
                so that smooth scrolling from the Header works as expected. */}
						<Route
							path='/'
							element={
								<div>
									<h1>Contact</h1>
									<p>Get in touch with us!</p>
								</div>
							}
						/>
					</Routes>
				</main>
				<Footer />
			</Router>
		</ThemeProvider>
	)
}

export default App