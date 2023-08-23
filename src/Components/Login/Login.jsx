// import axios from "axios";
// import Joi from "joi";
// import { useState } from "react"
// import { useNavigate } from "react-router-dom";

// function Login() {
//   let [user, setUser] = useState({
//     email: "",
//     password: ""
//   })
//   let [loading, isLoading] = useState(false)
//   let [apiErrors, setApiErrors] = useState(false)
//   let [errors, setValidationsErrors] = useState([]);
//   console.log(errors, "error");
//   console.log(apiErrors, "api");
//   let navigate = useNavigate()
//   async function handleLogin(e) {
//     e.preventDefault()
//     console.log(user);
//     let data = await axios.post(`https://movies-api.routemisr.com/signin`, user)
//     console.log(data.message, "data");
//     // if (validatForm()) {
//     //   isLoading(true)
//     //   let data = await axios.post(`https://movies-api.routemisr.com/signin`, user)
//     //   console.log(data);
//     //   if (data.message === "success") {
//     //     navigate("/home")
//     //     isLoading(false)
//     //     setApiErrors(null);
//     //   } else {
//     //     // calling api error
//     //     setApiErrors(data.message);
//     //     isLoading(false)
//     //   }
//     // }
//   }


//   function handleChange(e) {

//     let newUser = { ...user }
//     newUser[e.target.name] = e.target.value
//     setUser(newUser)
//   }
//   function validatForm() {
//     let schema = Joi.object({
//       email: Joi.string().email({
//         minDomainSegments: 2,
//         tlds: { allow: false },
//         // ["com", "net"] -----replace with false if i want to allow spicify domains
//       }),
//       password: Joi.string().pattern(new RegExp()),
//       age: Joi.number().min(16).max(50),
//     });
//     let result = schema.validate(user, { abortEarly: false });

//     // ---check if there error or not
//     if (result.error) {
//       setValidationsErrors(result.error.details);
//       return false;
//     } else {
//       return true;
//     }
//   }
//   return (
//     <div className="container">
//       <div className="w-75 mx-auto mt-5">
//         <h3>Login Form</h3>
//         {apiErrors && (
//           <div className="alert alert-danger">{apiErrors}</div>
//         )}
//         <form onSubmit={(e) => handleLogin(e)}>
//           <div className="form-group mt-3">
//             <label htmlFor="email">Email</label>
//             <input className="form-control" id="email" name="email" type="text" onChange={(e) => handleChange(e)} />
//             {
//               errors.filter((ele) => ele.context.label === "email")[0]
//                 ?.message
//             }
//           </div>
//           <div className="form-group mt-3">
//             <label htmlFor="password">Password</label>
//             <input className="form-control" id="password" name="password" type="text" onChange={(e) => handleChange(e)} />
//             {
//               errors.filter((ele) => ele.context.label === "password")[0]
//                 ?.message
//             }
//           </div>
//           <button className="btn btn-info mt-4 d-flex ms-auto">{loading ? <i className="fa fa-spinner fa-spin"></i> : "Login"}</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login
import axios from "axios";
import Joi from "joi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

///////// loginwith joi /////////

function Login(props) {
  let [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  let [errors, setValidationsErrors] = useState([]);
  let [apiErrors, setApiErrors] = useState(null);
  let [loading, setLoading] = useState(false);
  //to navigate to another page
  let navigate = useNavigate()

  // ----update data
  function handleChange(e) {
    let newUser = { ...userData };
    // ---we equal input name with his value ---should be the same prop name in the input
    newUser[e.target.name] = e.target.value;
    // newUser.last_name = e.target.value;
    setUserData(newUser);
  }

  // ----validate on inputs
  function validatForm() {
    let schema = Joi.object({
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: false },
        // ["com", "net"] -----replace with false if i want to allow spicify domains
      }),
      password: Joi.string().pattern(new RegExp()),
    });

    // {abortEarly:false} is an option to make joi send all errors not first error
    let result = schema.validate(userData, { abortEarly: false });
    console.log(result);

    // ---check if there error or not
    if (result.error) {
      setValidationsErrors(result.error.details);
      return false;
    } else {
      return true;
    }
  }

  // ---------post data on submit form
  async function login(e) {
    e.preventDefault();
    // check if validation fun is true or false before calling api
    if (validatForm()) {
      setLoading(true)
      let { data } = await axios.post(
        `https://movies-api.routemisr.com/signin`,
        userData
      );
      console.log(data);
      //navigate to another page => login
      if (data.message === "success") {
        localStorage.setItem("token", data.token)
        props.saveUser()
        navigate("/home")
        setLoading(false)
        setApiErrors(null);

      } else {
        // calling api error
        setApiErrors(data.message);
        setLoading(false)
      }
    }
  }
  // ------use effect to listen on data change
  // useEffect(() => {
  //   console.log(userData);
  // }, [userData]);
  return (
    <>
      <div className="container">
        <div className="mx-auto w-75">
          <h3 className="mt-5 mb-4">Login Form</h3>
          {apiErrors && (
            <div className="alert alert-danger">{apiErrors}</div>
          )}

          <form onSubmit={(e) => login(e)}>
            <div className="form-group mb-4 ">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                onChange={(e) => handleChange(e)}
              />
              {
                errors.filter((ele) => ele.context.label === "email")[0]
                  ?.message
              }
            </div>
            <div className="form-group mb-4">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                type="password"
                id="password"
                name="password"
                onChange={(e) => handleChange(e)}
              />
              {
                errors.filter((ele) => ele.context.label === "password")[0]
                  ?.message
              }
            </div>
            <button className="btn btn-info d-flex ms-auto">
              {loading ? <i className="fa fa-spinner fa-spin"></i> : "login"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}


export default Login

