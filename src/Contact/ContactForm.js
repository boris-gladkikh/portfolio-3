import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { postEmail } from '../APIHelper';
import './ContactForm.css';

const defaultData = {
  originSite: "portfolio-site"
}

function ContactForm() {
  let [formData, setFormData] = useState({ ...defaultData });
  let [submitMsg, setSubmitMsg] = useState("");
  let [msgClass, setMsgClass] = useState("pos");
  let [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(function handleFomSubmit() {

    async function postEmailToServer() {
      try {
        await postEmail(formData);
        setSubmitMsg("Successfully Submitted");
      }
      catch (err) {
        console.log("API Error:", err);
        setMsgClass("neg")
        setSubmitMsg(err.message);
      }
      finally {
        setIsSubmitting(false);
      }
    }
    if (isSubmitting) {
      postEmailToServer();
    }

  }, [isSubmitting, formData])



  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("this is form data on submit", formData)
    setIsSubmitting(true);

  };

  function handleChange(evt) {
    let { name, value } = evt.target
    setFormData(currentData => (
      {
        ...currentData,
        [name]: value
      }
    ));
  };


  return (
    <>
      <Form onSubmit={handleSubmit} className="pt-5 text-white form-style">

        <Form.Group>
          <Form.Label htmlFor="name"></Form.Label>
          <Form.Control required onChange={handleChange} name="name" type="text" placeholder="NAME"></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="email"></Form.Label>
          <Form.Control required onChange={handleChange} name="email" type="text" placeholder="EMAIL"></Form.Control>
          <Form.Text>I will never share your Email address with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group>
              <Form.Label htmlFor="subject"></Form.Label>
              <Form.Control required onChange={handleChange} name="subject" type="subject" placeholder="SUBJECT"></Form.Control>
            </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="body"></Form.Label>
          <Form.Control required onChange={handleChange} name="body" as="textarea" rows="5" placeholder="BODY"></Form.Control>
        </Form.Group>

        <div>
          <h4 className={msgClass}>{submitMsg}</h4>
        </div>
        <Button type="submit" className="mt-5" variant="dark">SUBMIT</Button>

      </Form>
    </>
  )
}

export default ContactForm