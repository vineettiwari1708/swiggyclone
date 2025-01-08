import { useEffect, useState } from "react";
import "../css/registration.css";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const Registration = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [mobileno, setmobileno] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [formname, setformname] = useState("");
  const [buttonname, setbuttonname] = useState("");
  const [formerror, setformerror] = useState("");
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const nameexpression = /^[a-zA-Z]{2,15}$/;
  const mobilenoexpression = /^[0-9]{10}$/;
  const emailexpression = /^(?=.*[a-z0-9])(?=.*[@])(?=.*[.])[a-z0-9@.]{2,25}$/;
  const passwordexpression =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}$/;

  useEffect(() => {
    if (location.pathname.split("/")[1] == "registration") {
      setformname("Registration form");
      setbuttonname("Registration");
    }
    if (location.pathname.split("/")[1] == "login") {
      setformname("Login form");
      setbuttonname("Login");
      setfirstname("abc");
      setlastname("abc");
      setmobileno("1234567890");
    }
    if (location.pathname.split("/")[1] == "edit") {
      setformname("Update form");
      setbuttonname("Update");
      axios
        .get("https://api.uncodecart.com/users/singleuserlist/" + params.id)
        .then((response) => {
          setfirstname(response.data.message[0].firstname);
          setlastname(response.data.message[0].lastname);
          setmobileno(response.data.message[0].mobileno);
          setemail(response.data.message[0].email);
          setpassword(response.data.message[0].password);
        });
    }
  }, []);
  const handlefirstname = (event) => {
    setfirstname(event.target.value);
  };
  const handlelastname = (event) => {
    setlastname(event.target.value);
  };
  const handlemobileno = (event) => {
    setmobileno(event.target.value);
  };
  const handleemail = (event) => {
    setemail(event.target.value);
  };
  const handlepassword = (event) => {
    setpassword(event.target.value);
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    let formData = {
      firstname: firstname,
      lastname: lastname,
      mobileno: mobileno,
      email: email,
      password: password,
    };
    if (firstname == "") {
      setformerror("Please Enter your First Name");
      return false;
    } else if (!firstname.match(nameexpression)) {
      setformerror("Please Enter only alphabets");
      return false;
    } else if (lastname == "") {
      setformerror("Please Enter your Last Name");
      return false;
    } else if (!lastname.match(nameexpression)) {
      setformerror("Please Enter only alphabets");
      return false;
    } else if (mobileno == "") {
      setformerror("Please Enter your Mobile Number");
      return false;
    } else if (!mobileno.match(mobilenoexpression)) {
      setformerror("Please Enter only 10 digits");
      return false;
    } else if (email == "") {
      setformerror("Please Enter your Email");
      return false;
    } else if (!email.match(emailexpression)) {
      setformerror("Please Enter valid Email");
      return false;
    } else if (password == "") {
      setformerror("Please Enter your Password");
      return false;
    } else if (!password.match(passwordexpression)) {
      setformerror("Please Enter valid Password");
      return false;
    } else if (location.pathname.split("/")[1] == "registration") {
      axios
        .post("https://api.uncodecart.com/users/registration", formData)
        .then((response) => {
          navigate("/login");
        });
    } else if (location.pathname.split("/")[1] == "edit") {
      axios
        .put(
          "https://api.uncodecart.com/users/updateuser/" + params.id,
          formData
        )
        .then((response) => {
          navigate("/userlist");
        });
    } else if (location.pathname.split("/")[1] == "login") {
      axios
        .post("https://api.uncodecart.com/users/login", formData)
        .then((response) => {
          if (response.data.message == "Either password or email is wrong") {
            setformerror("Either password or email is wrong");
          } else {
            localStorage.setItem("email", response.data.message[0].email);
            localStorage.setItem("firstname", response.data.message[0].firstname);
            localStorage.setItem("lastname", response.data.message[0].lastname);
            localStorage.setItem("userid", response.data.message[0].users_id);
            navigate("/profile");                                                              //navigate("/userlist");
          }
        });
    }
  };
  return (
    <>
      <div id="form-top-container">
        <div id="form-container">
          <div class="header-form">{formname} </div>
          <div class="formerror">{formerror}</div>
          <form class="form">
            {buttonname != "Login" && (
              <>
                <div class="input-box">
                  <label for="firstname">First name </label>
                  <input
                    type="text"
                    placeholder="First name"
                    value={firstname}
                    onChange={handlefirstname}
                  />
                </div>
                <div class="input-box">
                  <label for="lastname">Last name </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    value={lastname}
                    onChange={handlelastname}
                  />
                </div>
                <div class="input-box">
                  <label for="mobileno">Mobile no </label>
                  <input
                    type="text"
                    placeholder="Mobile no"
                    value={mobileno}
                    onChange={handlemobileno}
                  />
                </div>
              </>
            )}
            <div class="input-box">
              <label for="email">Email </label>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleemail}
              />
            </div>
            <div class="input-box">
              <label for="password">Password</label>
              <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={handlepassword}
              />
            </div>

            <input type="submit" value={buttonname} onClick={handlesubmit} />
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
