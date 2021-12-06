import React,{useState} from 'react';
import "./login.css"

 function Login() {


  const [email,setEmail] =useState("")
  const [password,setPassword] =useState("")

  
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // const { email, password } = user;
  const loginSubmit = (e) => {
    e.preventDefault();
    console.log(email,password)
  };


    return (
        <div>
            
      <div className="container">
        <div className="screen">
       <div className="screen__content">
            <form className="login" onSubmit={loginSubmit} >
              <div className="login__field">
                <i className="login__icon fas fa-user" />

                <input type="text" 
                value={email}                   
                onChange={(e) => setEmail(e.target.value)}
                className="login__input" placeholder="User name " />

              </div>

              <div className="login__field">
                <i className="login__icon fas fa-lock" />
                <input type="password"
                 onChange={(e) => setPassword(e.target.value)}
                value={password}
                 className="login__input" placeholder="Password" />
              </div>
              <button className="button login__submit">
                <span className="button__text">Log In Now</span>
                <i className="button__icon fas fa-chevron-right" />
              </button>				
            </form>
           
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4" />
            <span className="screen__background__shape screen__background__shape3" />		
            <span className="screen__background__shape screen__background__shape2" />
            <span className="screen__background__shape screen__background__shape1" />
          </div>		
        </div>
      </div>

        </div>
    )
}

export default Login