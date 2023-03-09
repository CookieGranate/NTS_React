import { useState } from 'react';
// components
import Navbar from './components/Navbar';
// pages
import Home from './pages/Home';

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
  }

  return (
    <main>
      <>
        <Navbar />
        {PageComponent}
      </>
    </main>
  )
}

export default App
