import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/homepage.js";
import Registrationpage from "./pages/registrationpage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Editpage from "./pages/editpage.js";
import Userlistpage from "./pages/userlistpage.js";
import Loginpage from "./pages/loginpage.js";
import Profilepage from "./pages/profilepage.js";
import Reactreduxpage from "./pages/reactreduxpage.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/registration" element={<Registrationpage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/edit/:id" element={<Editpage />} />
          <Route path="/userlist" element={<Userlistpage />} />
          <Route path="/profile" element={<Profilepage />} />
          <Route path="/redux" element={<Reactreduxpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
