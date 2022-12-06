import '../register.css';
import {signOn} from '../api/registerapi';



const RegisterPage =  () => {

    function handleSubmit(event) {
        // Prevent default behavior
        event.preventDefault();
    
        // let formData = new FormData(event.target);
    
        let registerData = {
        username: event.target.username.value,
        password: event.target.password.value,
        firstname: event.target.firstname.value,
        lastname: event.target.lastname.value,
        email: event.target.email.value,
        city: event.target.city.value,
        address: event.target.address.value
    };
     
        console.log("registerData: "+JSON.stringify(registerData));
    
        signOn(registerData)
           
      }



    
    return (
        <div className="Auth-form-container">
   
      <form className="Auth-form"  onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
                 id="username" 
                 name="username"
                 type="text"
               className="form-control mt-1"
               placeholder="Enter username, must be unique"
              />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
                 id="password" 
                 name="password"
                 type="text"
               className="form-control mt-1"
               placeholder="Enter password"
              />
          </div>
          <div className="form-group mt-3">
            <label>Firstname</label>
            <input
                 id="firstname" 
                 name="firstname"
                 type="text"
               className="form-control mt-1"
               placeholder="Enter firstname"
              />
          </div>
          <div className="form-group mt-3">
            <label>Lastname</label>
            <input
                   id="lastname" 
                   name="lastname"
                   type="text"
                 className="form-control mt-1"
                 placeholder="Enter lastname"
              />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
                   id="email" 
                   name="email"
                   type="text"
                 className="form-control mt-1"
                 placeholder="Enter email must be in correct format!"
              />
          </div>
          <div className="form-group mt-3">
            <label>City</label>
            <input
                   id="city" 
                   name="city"
                   type="text"
                 className="form-control mt-1"
                 placeholder="Enter city"
              />
          </div>
          <div className="form-group mt-3">
            <label>Address</label>
            <input
                   id="address" 
                   name="address"
                   type="text"
                 className="form-control mt-1"
                 placeholder="Enter Address"
              />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="/home">password?</a>
          </p>
        </div>
      </form>
      </div>
 
  )
}
export default RegisterPage;