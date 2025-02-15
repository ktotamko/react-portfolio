// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
//import Contact from './pages/Contact/Contact'
import './styles/global.css'

function App() {
	return (
		<ThemeProvider>
			<Router basename='/react-portfolio'>
				<Layout>
					<Header />
					<main>
						<Routes>
							<Route path='/' element={<Home />} />
							{/*<Route path='/contact' element={<Contact />} />*/}
						</Routes>
					</main>
					<Footer />
				</Layout>
			</Router>
		</ThemeProvider>
	)
}

export default App
