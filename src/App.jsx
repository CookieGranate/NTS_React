import { useState } from 'react';
// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// pages
import Home from './pages/Home';
import Partners from './pages/Partners';

function App() {
  const [count, setCount] = useState(0)

  let PageComponent 
  switch (window.location.pathname) {
    case '/':
      PageComponent = <Home />
      break;
      case '/download':
        // PageComponent = <Download />
        break;
        case '/partnerships':
          PageComponent = <Partners />
          break;
  }

  return (
    <main>
      <>
        <Navbar />
        {PageComponent}
        <Footer />
      </>
    </main>
  )
}

export default App
