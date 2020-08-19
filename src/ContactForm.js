import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { postEmail } from './APIHelper';

const defaultData = {
  originSite: "portfolio-site"
}

function ContactForm() {
  let [formData, setFormData] = useState({ ...defaultData });
  let [submitMsg, setSubmitMsg] = useState("");
  let [msgClass, setMsgClass] = useState("");
  let [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(function () {
    async function postEmailToServer(formData) {
      try {
        let response = await postEmail();
        setMsgClass("pos");
        setSubmitMsg("Successfully Submitted");
        console.log("formData", formData)
        console.log("API success", response)
      }
      catch (err) {
        console.log("API Error:", err);
        setSubmitMsg(messages => (
          [...messages, ...err.message]
        ));
        setMsgClass("neg")
      }
      finally {
        setIsSubmitting(false);
      }
    }
    if (isSubmitting) {
      postEmailToServer();
    }
  }, [isSubmitting, formData, setFormData])



  function handleSubmit(evt) {
    evt.preventDefault();
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
      <Form onSubmit={handleSubmit} className="form-width m-auto">

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
              <Form.Control required onChange={handleChange} name="email" type="email" placeholder="Ex: Leeloo@gmail.com"></Form.Control>
              <Form.Text>I will never share your E-mail address with anyone else.</Form.Text>
            </Form.Group>
          </Col>
        </Row>

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