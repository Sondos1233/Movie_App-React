import { useState } from "react";

export default function Form() {
  const [user, setUser] = useState({
    Name:"",
    Email: "",
    UserName: "",
    Passward:"",
    confirmPassward:""
  });

  
  const [errors, setErrors] = useState({
    NameErrors:null,
    EmailErrors: null,
    userNameErrors: null,
    passwardErrors:null,
    confPasswardErrors:null
  });
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    const patteren = new RegExp("^[a-zA-Z0-9]+@[a-z]{5,7}.[a-z]{3,5}$");
    const patteren2= new RegExp("^[A-Za-z0-9]{3,}$");
    const patteren3 =new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$")
    if (e.target.name == "Email") {
      setErrors({
        ...errors,
        EmailErrors:
          e.target.value.length == 0
            ? "this field is required"
            : !patteren.test( e.target.value)
            ? "Invalid Email Format!"
            : null
      });
    }else if (e.target.name == "UserName") {
      setErrors({
        ...errors,
        userNameErrors:
          e.target.value.length == 0
            ? "this field is required"
            : !patteren2.test( e.target.value)
            ? "Invalid UserName Format!"
            : null
      });
    }else if (e.target.name == "Passward") {
      setErrors({
        ...errors,
        passwardErrors:
          e.target.value.length == 0
            ? "this field is required"
            : !patteren3.test( e.target.value)
            ? "Invalid Passward Format!"
            : null
      });
    }
    else if (e.target.name == "confirmPassward") {
      setErrors({
        ...errors,
        confPasswardErrors:
          e.target.value.length == 0
            ? "this field is required"
            : (e.target.value != user.Passward)
            ? "Not Equal Passward!"
            : null
      });
    }
    else if (e.target.name == "Name") {
      setErrors({
        ...errors,
        NameErrors:
          e.target.value.length == 0
            ? "this field is required"
            : null
      });
    }

  }  

  return (
    <>
      <div className="container mt-5">
        <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name 
            </label>
            <input
              type="text"
              class="form-control"
              name="Name"
              id="exampleInputEmail1"
              value={user.Name}
              aria-describedby="emailHelp"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <small className="text-danger">{errors.NameErrors}</small>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email 
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              name="Email"
              value={user.Email}
              aria-describedby="emailHelp"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          <small className="text-danger">{errors.EmailErrors}</small>

            
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              User Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              name="UserName"
              value={user.UserName}
              aria-describedby="emailHelp"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <small className="text-danger">{errors.userNameErrors}</small>
            
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              name="Passward"
              value={user.Passward}
              required
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <small className="text-danger">{errors.passwardErrors}</small>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              name="confirmPassward"
              value={user.confirmPassward}
              id="exampleInputPassword1"
              required
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <small className="text-danger">{errors.confPasswardErrors}</small>
          </div>
    
          <button type="submit" class="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
