import React, {useRef} from 'react'
import Button from 'react-bootstrap/Button'
import emailjs from '@emailjs/browser';
// props
const Contact = () => {
  const form = useRef()
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [body, setBody] = useState("");

   const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

 // const handleSubmit = (e) => {
   // e.preventDefault();
  //   ReactMail.send({
  //     from: "from@example.com",
  //     to: "dagreatcode@gmail.com",
  //     subject: subject,
  //     body: body,
  //   });
  //  };

  return (
    <>  
 {/* <form ref={form} onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
      <Button type="submit" className="container" style={{border: "15px solid", width: "auto", display: "flex", justifyContent: "center"}}>Send</Button>
    </form> */}

    {/* <div>
      <form ref={form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div> */}
    
      <form ref={form} onSubmit={handleSubmit}> 
    <div className="container jumbotron" style={{}}>
      <div className="display-4" style={{textAlign: "center", margin: "30px"}}>Contact Us</div>
   
      <div className="row" style={{textAlign: "center"}}>
      <div className="">Contact</div>
            <div className="mb-3">
        <label type="text" name="user_name" htmlFor="exampleFormControlInput1" className="form-label">Name</label>
        <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Name"/>
      </div>
      <div className="mb-3">
        <label type="text" name="user_email" htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Let us know what you need.</label>
        <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
 
      </div>  
      <Button type="submit" value="Send" className="container" style={{border: "15px solid", width: "auto", display: "flex", justifyContent: "center"}}>Send</Button>
    </div>
    </form> 
    </>
  )
}

// Contact.propTypes = {}

export default Contact