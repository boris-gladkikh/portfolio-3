import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const defaultData = {
  originSite: "portfolio-site"
}

function ContactForm() {
  let [formData, setFormData] = useState({ ...defaultData });
  let [submitMsg, setSubmitMsg] = useState("");
  let [msgClass, setMsgClass] = useState("");
  let [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(function postEmail(){},[isSubmitting, formData, setFormData])



  function handleSubmit(evt) {
    evt.preventDefault();
    setIsSubmitting(true);

   };

  function handleChange(evt) {
    let {name, value} = evt.target
    setFormData(currentData => (
      {
        ...currentData, 
        [name]:value
      }
    ));
   };
  return (
    <>
      <Form onSubmit={handleSubmit} className=" w-75 m-auto">
      <Form.Group>
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Control required onChange={handleChange} name="name" type="text" placeholder="Ex: Korben Dallas"></Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="email">E-mail Address</Form.Label>
        <Form.Control required onChange={handleChange} name="email" type="email" placeholder="Ex: Leeloo@gmail.com"></Form.Control>
        <Form.Text>I will never share your E-mail address with anyone else.</Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="body">Details</Form.Label>
        <Form.Control required onChange={handleChange} name="body" as="textarea" rows="5" placeholder="Be Descriptive!"></Form.Control>
      </Form.Group>
      <div className={msgClass}>
        <h4>{submitMsg}</h4>
      </div>
      <Button className="mt-5" variant="dark">SUBMIT</Button>

      </Form>
    </>
  )
}

export default ContactForm