import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./page/Inicio"
import Error404 from "./page/Error404"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Paises from "./page/Paises"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/paises" element={<Paises />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App