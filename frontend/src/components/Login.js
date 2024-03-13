import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
// import necessary packages

const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""}) // setting up the state for the user's credentials
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // getting data from the backend
        const response = await fetch("http://localhost:5000/api/auth/login", { // fetching the data from the backend
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password}) // sending the user's credentials to the backend
        });
        const json = await response.json()
        // const response = ...
        // const json = ... 
        console.log(json);
        if (json.success){ // if the user is successfully logged in 
            localStorage.setItem('token', json.authtoken); 
            history.push("/"); // redirects the user to the home page 
        }
        else{
            alert("Invalid credentials");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return ( // ask the user to input information: email and passwords 
        <div>
            <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    {/* const [credentials, setCredentials] = useState({email: "", password: ""}) ->  credentials.email */}
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    {/* const [credentials, setCredentials] = useState({email: "", password: ""}) ->  credentials.password */}
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
