
import React, { useState } from "react";
import { useForm } from "react-hook-form"
//////// register with use form//////////
function RegisterWithForm() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm()
  let [loading, setLoading] = useState(false)

  const onSubmit = (data) => {
    console.log(data)
  }


  return (
    <div className="container">
      <div className="mt-4 mx-auto w-75">
        <h3 className="mt-5">Register Form</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mt-3">
            <label htmlFor="firstName">First Name</label>
            <input className="form-control" defaultValue="" {...register("firstName", { required: true })} id="firstName" name="firstName" />
            {/* Display error messages */}
            {errors.firstName && errors.firstName.type === 'required' && (
              <p>This field is required.</p>
            )}
            {errors.firstName && errors.firstName.type === 'minLength' && (
              <p>Should be more than 3 characters.</p>
            )}
          </div>
          <div className="form-group mt-3">
            <label htmlFor="lastName">Last Name</label>
            <input className="form-control" defaultValue="" {...register("lastName", { required: true })} id="lastName" name="lastName" />
            {errors.lastName && <span>This field is required</span>}
          </div>
          <div className="form-group mt-3">
            <label htmlFor="age">Age</label>
            <input className="form-control" defaultValue="" {...register("age", { required: true, min: 18, max: 40 })} id="age" name="age" />
            {errors.age && errors.age.type === 'required' && (
              <p>This field is required.</p>
            )}
            {errors.age && errors.age.type === 'min' && (
              <p>Should be more than 18 & less than 40</p>
            )}
          </div>
          <div className="form-group mt-3">
            <label htmlFor="email">Email</label>
            <input className="form-control" defaultValue="" {...register("email", { required: true })} id="email" name="email" />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input className="form-control" defaultValue="" {...register("password", {
              required: true, minLength: 8,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/i
            })} id="password" name="password" />
            {errors.password && errors.password.type === 'required' && (
              <p>This field is required.</p>
            )}
            {errors.password && errors.password.type === 'minLength' && (
              <p>Password must be at least 8 characters long.</p>
            )}
            {errors.password && errors.password.type === 'pattern' && (
              <p>
                Password must contain at least one uppercase letter, one lowercase letter, and one digit.
              </p>
            )}
          </div>
          <button className="btn btn-info mt-3 mb-5 d-flex ms-auto">{loading ? <i className="fa fa-spinner fa-spin"></i> : "Register"}</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterWithForm
