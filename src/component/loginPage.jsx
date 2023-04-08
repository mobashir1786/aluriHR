import React, { useState } from 'react';
import "./login.css";

function LoginPage() {
    let [eye, setEye] = useState("show");
    let [passText, setPassText] = useState("password");
    const handleLogin = (e) => {
        e.preventDefault();
        const id = e.target[0].value;
        const password = e.target[1].value;
        console.log(id,password)
    }
    const showhide = () => {
        if (eye === "show") {
            setEye(eye = "hide");
            setPassText(passText = "text");
        }
        else {
            setEye(eye = "show");
            setPassText(passText = "password");
        }
    }
    return (
        <div className="loginpage">
            <div className="logincontent">
                <div className="loginContentLeft"></div>
                <div className="loginContentRight">
                    <div className="ExistUser">
                        <div className="existuserhead">
                            <div className="alredyMember">ALREADY MEMBERS</div>
                            <span className="needhelp">Need help?</span>
                        </div><br />
                        <form onSubmit={handleLogin}>
                            <input type="text" placeholder='Enter Your ID' /><br /><br />
                            <input type={passText} placeholder='Enter Your Password' />
                            <span onClick={showhide} className='eyeicon'>{eye}</span><br /> <br />
                            <button type='submit' className='loginbtn'>SIGN IN</button><br />
                        </form>
                    </div><br />
                    <div className="newuser">
                        <div className="dontHaveAcc">Don't have an account yet?</div>
                        <span className='createaccount'>Create an account</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;