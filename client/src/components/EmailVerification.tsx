import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const EmailVerification: React.FC = () => {
  
  const { isAuthenticated, user, isLoading, logOut } = useAuth(); // Destructure to get isAuthenticated

  const navigate = useNavigate();

  if (isLoading){
    return <div>Loading...</div>
  }

  const resendEmail = async () => {
    try{
        const token = localStorage.getItem('access');

        const response = await fetch('http://localhost:8000/acc/resend_email',{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({token})
        })

        if(response.ok){
            alert("Email sent successfully")
        }else{
            const data = await response.json();
            console.log(data.error);
        }
    }catch(error) {
        console.log("Something wrong with resending email:", error)
    }

  }

  console.log()
  return (
    <div>
      <h1>Please verify your email, Email: {user.email}</h1>
      <button onClick={resendEmail}>Resend Email</button>
    </div>
  );
};

export default EmailVerification;
