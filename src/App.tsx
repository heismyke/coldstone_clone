import Header from './components/Header'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './shared/Footer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
