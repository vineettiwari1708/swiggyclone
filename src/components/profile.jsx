import "../css/profile.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Profile = () => {
  const navigate = useNavigate();
  var email = localStorage.getItem("email");
  var firstname = localStorage.getItem("firstname");
  var lastname = localStorage.getItem("lastname");
  var userid = localStorage.getItem("userid");
  console.log(email);
  useEffect(() => {}, []);
  const handlelogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <div class="body">
        <div class="profile">User Profile
        <div class="profile-container">
          <div class="img">
           
          </div>
          <div class="details">
            <ul>
              <li>User Id : {userid}</li>
              <li>Name : {firstname.toUpperCase()} {lastname.toUpperCase()}</li>
              <li>Email : {email}</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
