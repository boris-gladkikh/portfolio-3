import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { postEmail } from './APIHelper';
import './ContactForm.css';

const defaultData = {
  originSite: "portfolio-site"
}

function ContactForm() {
  let [formData, setFormData] = useState({ ...defaultData });
  let [submitMsg, setSubmitMsg] = useState("");
  let [msgClass, setMsgClass] = useState("pos");
  let [isSubmitting, setIsSubmitting] = useState(false);

  //uses API call to post email to server, setting submit msg. if error occurs, neg submit msg is set.

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
      <Form onSubmit={handleSubmit} className="pt-5 text-white form-style m-auto">

        <Row>
          <Col sm="12" md="6">
            <Form.Group>
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.Control required onChange={handleChange} name="name" type="text" placeholder="Ex: Korben Dallas"></Form.Control>
            </Form.Group>
          </Col>
          <Col sm="12" md="6">
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control required onChange={handleChange} name="email" type="text" placeholder="Ex: Leeloo@gmail.com"></Form.Control>
              <Form.Text>I will never share your Email address with anyone else.</Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group>
              <Form.Label htmlFor="subject">Subject</Form.Label>
              <Form.Control required onChange={handleChange} name="subject" type="subject" placeholder="Ex: I want a website!"></Form.Control>
            </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="body">Body</Form.Label>
          <Form.Control required onChange={handleChange} name="body" as="textarea" rows="5" placeholder="Be Descriptive!"></Form.Control>
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