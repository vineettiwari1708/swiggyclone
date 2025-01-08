import { useNavigate } from "react-router-dom";
import "../css/header.css";
import { useEffect } from "react";
const Header = () => {
  const navigate = useNavigate();
  var email = localStorage.getItem("email");
  var firstname = localStorage.getItem("firstname");
  console.log(email);
  useEffect(() => {}, []);
  const handlelogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <div id="navbar-parent">
        <div id="logo">
          <a
            onClick={() => {
              navigate("/");
            }}
          >
            Uncodemy
          </a>
        </div>
        <ul class="nav-links">
          <input type="checkbox" id="checkbox-toggle" />
          <label for="checkbox-toggle" class="hamburger">
            &#9776;
          </label>
          <div class="menu">
            <li>
              <a
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </a>
            </li>
            <li class="services">
              <a href="services.html">Services</a>{" "}
              <i class="ri-arrow-up-s-fill"></i>
              <i class="ri-arrow-down-s-fill"></i>
              <ul class="dropdown">
                <li>
                  <a href="react.html">React Js</a>
                </li>
                <li>
                  <a href="node.html">NodeJs</a>
                </li>
              </ul>
            </li>
            {email == null && (
              <>
                <li>
                  <a
                    onClick={() => {
                      navigate("/registration");
                    }}
                  >
                    Registration
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      navigate("/redux");
                    }}
                  >
                    Reactredux
                  </a>
                </li>
              </>
            )}
            {email != null && (
              <>
                <li>
                  <a
                    onClick={() => {
                      navigate("/userlist");
                    }}
                  >
                    Userlist
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      handlelogout();
                    }}
                  >
                    {firstname.toUpperCase()} (Logout)
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      navigate("/profile");
                    }}
                  >
                    Profile
                  </a>
                </li>
              </>
            )}
            <li>
              <a href="react.html">Contact</a>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};
export default Header;
