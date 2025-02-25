// IMPORTO ELEENTI DELLA LIBRERIA DI GESTIONE DELLE ROTTE
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGINE
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";

// LISTA DEI BLOG
import BlogList from "./pages/BlogList";
import AddBlog from "./pages/AddBlog";



// LAYOUT
import DefaultLayout from "./layouts/DefaultLayout";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />} >
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/Blogs" element={<BlogList />} />
          <Route path="/Blogs/create" element={<AddBlog />} />
        </Route>
      </Routes>

    </BrowserRouter >
  )
}

export default App
