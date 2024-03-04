import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import SignUpService from '../../services/authentication/SignUpService';
import '../authentication/SignUp.css'


export const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const saveEmployee = (e) => {
        e.preventDefault();
        const employee = { email, password }
        console.log("Employee recievd from form: ", employee)
        SignUpService.addEmployee(employee).then((response) => { console.log("Response recieved from save api : ", response) })
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

                <form action="" onSubmit={(e) => saveEmployee(e)}>
                    <h2>Sign Up</h2>
                    <br />
                    <span>E-mail</span>
                    <br /><br />
                    <input type="text" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
                    <br /><br />
                    <span>Password</span>
                    <br /><br />
                    <input type="password" name="" id="" placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />
                    <br /><br /><br />
                    <button type="submit">Sign Up</button>

                </form>

            </div>
            <div className="logo-top">
                <h5>ITAssets</h5>
                <span>Asset management system</span>
            </div>
        </div>
    )
}
