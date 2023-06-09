import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import Popup from "reactjs-popup";
const PopUp = () => {
    const [isOpen,setIsOpen] = useState(false);
    const [isShown]= useState(false);
    const [id, setId] = useState(true);
    const [idt, setIdt] = useState(1);
    const openPopup = () => {
        setIsOpen(!isOpen);
    }
    const handleClose = () => {
        setIsOpen(false);
    }
    const handleChange = () => {
        setId(false);
        setIdt(2);
    }
    const handleChangeagain = () => {
        setId(true);
        setIdt(1);
    }
    const [error,setError] = useState({
        status: false,
        msg: "",
        type: ""
    })
    const [open] = React.useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e) =>{      
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get('email'),
            password: data.get('password'),
        }
        if(actualData.email && actualData.password){
        console.log(actualData);
        document.getElementById('login-form').reset()
        setError({ status: true, msg: "login success", type: 'success'})
        navigate('/user/dashboard' )
        setIsOpen(false); 
        }
        else{
            setError({status: true,
            msg: "All fileds are required",
            type: 'error'
        })
        }
    }
    return (
        <>

                <div className="right-header__login">
                    <a title="Login" className="open-login" href="#login" onClick={openPopup}>Login</a>
                </div>
                <div className="right-header__button btn">
                    <a title="Sign Up" className="open-signup" href="#" onClick={openPopup}>
                        <span>Sign up</span>
                    </a>
                </div>
                {isOpen && 
                <div className="popup-wrp">
                    <div className="popup popup-form open">
                        <a title="Close" href="#" className="popup__close" onClick={handleClose}>
                            <i className="las la-times la-24-black"></i>
                        </a>
                        <ul className="choose-form">
                            <li className="nav-signup">
                                <a title="Sign Up" href="#signup" onClick={handleChangeagain} className={`${(idt == 1) ? "active" : ""}`}>Sign Up</a>
                            </li>
                            <li className="nav-login">
                                <a title="Log In" href="#login" onClick={handleChange} className={`${(idt == 2) ? "active" : ""}`}>Log In</a>
                            </li>
                        </ul>
                        <p className="choose-more">Continue with <a title="Facebook" href="#" className="fb">Facebook</a> or <a title="Google" href="#" classNameName="gg">Google</a></p>
                        <p className="choose-or"><span >Or</span></p>


                        <div className="popup-content">
                            {id ?
                                <form action="#" className="form-sign form-content" id="signup">
                                    <div className="field-inline">
                                        <div className="field-input">
                                            <input type="text" placeholder="First Name" name="first_name" />
                                        </div>
                                        <div className="field-input">
                                            <input type="text" placeholder="Last Name" name="last_name" />
                                        </div>
                                    </div>
                                    <div className="field-input">
                                        <input type="email" placeholder="Email" name="email" />
                                    </div>
                                    <div className="field-input">
                                        <input type="password" placeholder="Password" value="" name="password" />
                                    </div>
                                    <div className="field-check">
                                        <label htmlFor="accept">
                                            <input type="checkbox" id="accept" value="" />
                                            Accept the <a title="Terms" className="alo" href="#">Terms</a> and <a title="Privacy Policy"
                                                href="#">Privacy Policy</a>
                                            <span className="checkmark">
                                                <i className="fa-solid fa-check"></i>
                                            </span>
                                        </label>
                                    </div>
                                    <input type="submit" name="submit" value="Sign Up" />
                                </form>
                                :
                                <form action="#" id="login-form" className="form-log form-content" onSubmit={handleSubmit}>
                                    <div className="field-input">
                                        <input type="email" placeholder="Username or Email" name="email" id="email"/>
                                    </div>
                                    <div className="field-input">
                                        <input type="password" placeholder="Password" name="password" id="password"/>
                                    </div>
                                    <a title="Forgot password" href="#" className="forgot_pass">Forgot password</a>
                                    <button type="submit" variant='contained' className="Login-btn">Login</button>
                                    {error.status ? <h3 severity={error.type}>{error.msg}</h3>:''}
                                </form>}
                        </div>
                    </div>
                </div>
}
        </>
    )
}
export default PopUp;