import React, { useContext, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './AuthPage.css'
import AuthContext from '../../context/AuthContext';
import AuthService from '../../services/authentication/AuthService';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthPage = () => {

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    const [account, setAccount] = useState("login");

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);
    const [isFirstNameValid, setIsFirstNameValid] = useState(true)
    const [isLastNameValid, setIsLastNameValid] = useState(true)

    const [firstNameValidationMessage, setFirstNameValidationMessage] = useState("")
    const [lastNameValidationMessage, setLastNameValidationMessage] = useState("")
    const [emailValidationMessage, setEmailValidationMessage] = useState("")
    const [passwordValidationMessage, setPasswordValidationMessage] = useState("")
    const [confirmPasswordValidationMessage, setConfirmPasswordValidationMessage] = useState("")
    const [formValidationMessage, setFormValidationMessage] = useState("")


    const { setAuth } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (firstName.length > 2 || firstName.length == 0) {
            setIsFirstNameValid(true);
            setFirstNameValidationMessage("")
        }
        else {
            setIsFirstNameValid(false)
            setFirstNameValidationMessage("Invalid first name")
        }

    }, [firstName]);

    useEffect(() => {
        if (lastName.length > 2 || lastName.length == 0) {
            setIsLastNameValid(true);
            setLastNameValidationMessage("")
        }
        else {
            setIsLastNameValid(false)
            setLastNameValidationMessage("Invalid last name")
        }

    }, [lastName]);

    useEffect(() => {
        if (emailRegex.test(email) || email.length == 0) {
            setIsEmailValid(true);
            setEmailValidationMessage("")
        }
        else {
            setIsEmailValid(false)
            setEmailValidationMessage("Invalid email")
        }

    }, [email]);

    useEffect(() => {
        if (passwordRegex.test(password) || password.length == 0) {
            setIsPasswordValid(true)
            setPasswordValidationMessage("")
        }
        else {
            setIsPasswordValid(false)
            setPasswordValidationMessage("Invalid password")
        }
    })

    useEffect(() => {
        if ((passwordRegex.test(confirmPassword) && confirmPassword === password) || confirmPassword.length == 0) {
            setIsConfirmPasswordValid(true)
            setConfirmPasswordValidationMessage("")
        }
        else {
            setIsConfirmPasswordValid(false)
            setConfirmPasswordValidationMessage("Invalid confirm password")
        }
    })
    const signupValidation = (e) => {
        e.preventDefault();
        if (
            isEmailValid && isPasswordValid && isConfirmPasswordValid && isFirstNameValid && isLastNameValid
            && email.length > 0 && password.length > 0 && confirmPassword.length > 0 && firstName.length > 0 && lastName.length > 0

        ) {
            return true
        }
        return false

    }

    const loginValidation = (e) => {
        e.preventDefault();
        if (isEmailValid && isPasswordValid && email.length > 0 && password.length > 0) {
            return true
        }
        return false
    }

    const submitFormDetails = (e) => {
        // e.preventDefault();
        const employee = { firstName, lastName, email, password }
        console.log("Employee recievd from form: ", employee)

        if (account === "signup") {
            if (!signupValidation(e)) {
                setFormValidationMessage("Enter correct details")
                return
            }
            AuthService.addEmployee(employee)
                .then((response) => {
                    console.log("Response recieved from save api : ", response);
                    notify(e);
                })
                .catch((error) => {
                    console.error("Error occured during signup: ", error);
                });
        }
        else {
            if (!loginValidation(e)) {
                setFormValidationMessage("Enter correct details")
                return
            }
            AuthService.employeeLogin(employee)
                .then((response) => {
                    console.log('response from login API : ' + JSON.stringify(response.data))
                    const jwtToken = response.data.jwtToken
                    const role = response.data.role
                    const email = response.data.email
                    const firstName = response.data.firstName
                    const lastName = response.data.lastName
                    const employeeId = response.data.employeeId
                    setAuth({ jwtToken, role, email, firstName, lastName, employeeId });
                    navigate('/')
                })
        }

        setEmail("")
        setPassword("")
        setFirstName("")
        setLastName("")
        setConfirmPassword("")


    }

    const changeForm = (e) => {
        e.preventDefault();
        account === 'signup' ? setAccount('login') : setAccount('signup')
        setEmail("");
        setPassword("");
        setFirstName("")
        setLastName("")
        setConfirmPassword("")
    }
    toast.configure;
    const notify = () => toast.success("Account creation successful! Please Login", { autoClose: 3000 });
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
                    <h2>{account === "login" ? "Login" : "Sign Up"}</h2><br />

                    <div style={{ display: account === "login" ? "none" : "block" }}>
                        
                        <span>First Name</span><br />
                        <input type="text" placeholder='Enter first name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <span className='validation-message' style={{ display: 'inline-block' }}>{firstNameValidationMessage}</span>
                        <br /><br style={{ display: isFirstNameValid ? "block" : "none" }} />

                        <span>Last Name</span><br />
                        <input type="text" placeholder='Enter last name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        <span className='validation-message' style={{ display: 'inline-block' }}>{lastNameValidationMessage}</span>
                        <br /><br style={{ display: isLastNameValid ? "block" : "none" }} />

                    </div>

                    <span >E-mail</span>
                    <br /><br style={{ display: account === "login" ? "block" : "none" }} />
                    <input type="text" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <span className='validation-message' >{emailValidationMessage}</span>
                    <br /><br style={{ display: isEmailValid ? "block" : "none" }} />


                    <span>Password</span>
                    <br /><br style={{ display: account === "login" ? "block" : "none" }} />
                    <input type="password" value={password} placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />
                    <span className='validation-message'>{passwordValidationMessage}</span>
                    <br /><br style={{ display: isPasswordValid ? "block" : "none" }} />

                    <div style={{ display: account === "login" ? "none" : "block" }}>
                        <span>Confirm Password</span>
                        <br /><br style={{ display: account === "login" ? "block" : "none" }} />
                        <input type="password" value={confirmPassword} placeholder='Enter password' onChange={(e) => setConfirmPassword(e.target.value)} />
                        <span className='validation-message'>{confirmPasswordValidationMessage}</span>
                        <br /><br style={{ display: isConfirmPasswordValid ? "block" : "none" }} />
                    </div>

                    <br />

                    <button className='form-submit-button' type="submit">{account === "login" ? "Login" : "Sign Up"}</button>
                    
                    <span className='validation-message'>{formValidationMessage}</span>
                    
                    <p>{account === "login" ? "Don't have an account?" : "Already have an account?"}<button className='form-change-button' type='' onClick={(e) => changeForm(e)} style={{ color: 'blue' }}>{account === "login" ? "Sign Up" : "Login"}</button></p>
                
                </form>

                <ToastContainer/>


            </div>

            <div className="logo-top">
                <h5>ITAssets</h5>
                <span>Asset management system</span>
            </div>
        </div>
    )
}
