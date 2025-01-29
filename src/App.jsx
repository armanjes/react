import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* dynamic routing */}
        <Route path="/Profile/:id" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
export default App;

/*
What is react-router-dom?
It is a **library* used for handing **client side navigation* in react apps. It does **reload* the page. It updates UI dynamically based on the URL(Uniform Resource Locator).

Routes -> Wraps multiple route component.
Route -> Defines the route or path for the page.
path="*" -> catches all unknown errors.
*/
