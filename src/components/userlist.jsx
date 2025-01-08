import axios from "axios";
import { useEffect, useState } from "react";
import "../css/userlist.css";
import { useNavigate } from "react-router-dom";

const Userlist = () => {
  const [userdata, setuserdata] = useState("");
  useEffect(() => {
    getuserlist();
  }, []);
  const navigate = useNavigate();
  const getuserlist = () => {
    axios.get("https://api.uncodecart.com/users/userlist").then((response) => {
      setuserdata(response.data.message);
    });
  };
  const handleDelete = (id) => {
    axios
      .delete("https://api.uncodecart.com/users/deleteuser/" + id)
      .then((response) => {
        getuserlist();
      });
  };
  const handleEdit = (id) => {
    navigate("/edit/" + id);
  };
  return (
    <>
      <table border={1}>
        <tr>
          <th>Id</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        {userdata &&
          userdata.map((users) => (
            <tr>
              <td>{users.users_id}</td>
              <td>{users.firstname}</td>
              <td>{users.lastname}</td>
              <td>{users.email}</td>
              <td>
                <input
                  type="button"
                  value="Delete"
                  onClick={() => {
                    handleDelete(users.users_id);
                  }}
                />
                <input
                  type="button"
                  value="Edit"
                  onClick={() => {
                    handleEdit(users.users_id);
                  }}
                />
              </td>
            </tr>
          ))}
      </table>
    </>
  );
};
export default Userlist;
