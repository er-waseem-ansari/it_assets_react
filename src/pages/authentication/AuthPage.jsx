import React, { useContext, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './AuthPage.css'
import AuthContext from '../../context/AuthContext';
import AuthService from '../../services/authentication/AuthService';
import { useNavigate } from 'react-router-dom';


export const AuthPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [account, setAccount] = useState("login");

    const {setAuth} = useContext(AuthContext)
    const navigate = useNavigate()
    
    const submitFormDetails = (e) => {
        e.preventDefault();
        const employee = { email, password }
        console.log("Employee recievd from form: ", employee)

        if(account==="signup"){
            AuthService.addEmployee(employee)
            .then((response) => { 
                console.log("Response recieved from save api : ", response);
             })
             .catch((error) => {
                console.error("Error occured during signup: ", error);
             });
        }
        else{
            AuthService.employeeLogin(employee)
            .then((response)=>{
                console.log('response from login API : '+JSON.stringify(response.data))
                const jwtToken = response.data.jwtToken
                const role = response.data.role
                const email = response.data.email
                const firstName = response.data.firstName
                const lastName = response.data.lastName
                const employeeId = response.data.employeeId
                setAuth({jwtToken, role, email, firstName, lastName, employeeId});
                navigate('/')
            })
        }

        setEmail("")
        setPassword("")
        
        
    }

    const changeForm = (e) => {
        e.preventDefault();
        account === 'signup' ? setAccount('login') : setAccount('signup');
        setEmail("");
        setPassword("");
    }

    return (
        // <div>
        <div className="outer">
            <div className="left">
                <img src="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866844.jpg?w=996&t=st=1709186916~exp=1709187516~hmac=d1587d0a25a7f05d15961e6cec7e7e9b732642d1b46ef281bb5dd0339a929139" alt="" className='left-image' />
                <h3>Track and Manage</h3>
                <h3>Assets with Ease</h3>
                <h6>Be updated with your assets and manage them effectively</h6>
            </div>
            <div className="right">

                <form action="" onSubmit={(e) => submitFormDetails(e)}>
                    <h2>{account==="login"? "Login" : "Sign Up"}</h2>
                    <br />
                    <span>E-mail</span>
                    <br /><br />
                    <input type="text" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br /><br />
                    <span>Password</span>
                    <br /><br />
                    <input type="password" value={password} name="" id="" placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />
                    <br /><br /><br />
                    <button className='form-submit-button' type="submit">{account==="login"? "Login" : "Sign Up"}</button>
                    
                    <p>{account==="login"?"Don't have an account?" : "Already have an account?" }<button className='form-change-button' type='' onClick={(e)=>changeForm(e)}>{account==="login"? "Sign Up": "Login" }</button></p>
                </form>
                

            </div>
            
            <div className="logo-top">
                <h5>ITAssets</h5>
                <span>Asset management system</span>
            </div>
        </div>
    )
}
