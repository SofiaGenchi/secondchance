import './App.css'
import About from './components/about/About'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Products from './components/products/Products'

function App() {

  return (
    <>
      <div>
        <Nav />
        <Header />
      </div>
      <About />
      <Products />
    </>
  )
}

export default App
