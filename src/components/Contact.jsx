import {React,useState} from "react";
import "../components/forms.css";


function Contact(){
  

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [msg,setMsg]=useState("")

  const handlesubmit=(e)=>{
   e.preventDefault()
   const User={
     name:name,
     email:email,
     msg:msg
   }
   console.log(User)
   alert(`${name}(${email}), Your message has been Recorded`)
  }

    return(
      <form onSubmit={handlesubmit} className="form_login">
           <div className="form-group">
           <label
           className="form-label">Email address</label>
           <input type="email" value={email} className="form-control" onChange={(e)=>{
             setEmail(e.target.value)
           }} id="exampleFormControlInput1" placeholder="name@example.com" />
           </div>

           <div className="form-group">
           <label class="form-label" for="exampleFormControlInput1">Your Name</label>
           <input type="text" value={name} onChange={(e)=>{
             setName(e.target.value)
           }} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
           </div>

           <div className="form-group">
           <label className="form-label">Enter Your Message</label>
           <textarea value={msg}onChange={(e)=>{setMsg(e.target.value)}}  className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
           </div>
           <div>
           <button type="submit" class="btn btn-primary mb-2">Submit</button>
           </div>
</form>
      
    );
}

export default Contact;