import React from "react";


function Contact(){
    return(
      <div className="parent">
          <form className="form_login">
           <div className="form-group">
           <label for="exampleFormControlInput1">Email address</label>
           <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
           </div>

           <div className="form-group">
           <label for="exampleFormControlInput1">Your Name</label>
           <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
           </div>

           <div className="form-group">
           <label for="exampleFormControlTextarea1">Enter Your Message</label>
           <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
           </div>
</form>
      </div>
    );
}

export default Contact;