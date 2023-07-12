import axios from "axios";
import Joi from "joi";
import { error } from "jquery";
import { useEffect, useState } from "react";

function Register() {
  // ----initial value
  let [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    age: 0,
    email: "",
    password: "",
  });

  let [errors, setValidationsErrors] = useState([]);

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
      first_name: Joi.string().min(3).max(10).required().messages({
        "string.empty": "first name required",
        "string.min": "should be more than 3 characters",
      }),
      last_name: Joi.string().min(3).max(10).required(),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: false },
        // ["com", "net"] -----replace with false if i want to allow spicify domains
      }),
      password: Joi.string().pattern(new RegExp(/^[a-z][A-Z]{3-8}$/)),
      age: Joi.number().min(16).max(50),
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
  async function register(e) {
    e.preventDefault();

    // check if validation fun is true or false before calling api
    if (validatForm()) {
      let { data } = await axios.post(
        `https://movies-api.routemisr.com/signup`,
        userData
      );
      console.log(data);
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
          <h3 className="mt-5 mb-4">Registration Form</h3>
          {/* {errors.map((error) => (
            <div className="alert alert-danger">{error.message}</div>
          ))} */}

          <form onSubmit={(e) => register(e)}>
            <div className="form-group mb-4">
              <label htmlFor="first_name">First Name</label>
              <input
                className="form-control"
                type="text"
                id="first_name"
                name="first_name"
                onChange={(e) => handleChange(e)}
              />
              {
                errors.filter((ele) => ele.context.label === "first_name")[0]
                  ?.message
              }
            </div>
            <div className="form-group mb-4">
              <label htmlFor="last_name">Last Name</label>
              <input
                className="form-control"
                type="text"
                id="last_name"
                name="last_name"
                onChange={(e) => handleChange(e)}
              />
              {
                errors.filter((ele) => ele.context.label === "last_name")[0]
                  ?.message
              }
            </div>
            <div className="form-group mb-4 ">
              <label htmlFor="age">Age</label>
              <input
                className="form-control"
                type="number"
                id="age"
                name="age"
                onChange={(e) => handleChange(e)}
              />
              {errors.filter((ele) => ele.context.label === "age")[0]?.message}
            </div>
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
            <button className="btn btn-info d-flex ms-auto pb-5">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
