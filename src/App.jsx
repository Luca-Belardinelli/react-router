// IMPORTO ELEENTI DELLA LIBRERIA DI GESTIONE DELLE ROTTE
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGINE
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";

// LISTA DEI BLOG
import BlogList from "./pages/BlogList";




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Blog" element={<BlogList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
