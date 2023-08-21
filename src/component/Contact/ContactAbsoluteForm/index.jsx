import React, { useState } from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import styles from './Form.module.scss'

const ContactForm = (props) => {
  const [formStatus, setFormStatus] = useState('Send')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const changedName = (event) => {
    setName(event.target.value)
  }
  const changedSurname = (event) => {
    setSurname(event.target.value)
  }
  const changedEmail = (event) => {
    setEmail(event.target.value)
  }
  const changedSubject = (event) => {
    setSubject(event.target.value)
  }
  const changedMessage = (event) => {
    setMessage(event.target.value)
  }

  const submitForm = (e) => {
    e.preventDefault()
    if (name !== '') {
      setFormStatus('Submiting....')

      setTimeout(() => {
        setFormStatus('Thank you!')
      }, 1000)

      setTimeout(() => {
        setFormStatus('finish')
      }, 2000)
    } else {
      alert('Empty Name')
    }
  }

  return (
    <>
      <div className={styles.formWrapper}>
        <Container>
          {formStatus !== 'finish' ? (
            <div className={styles.formWrapper_formFlexWrapper}>
              <Container className="my-5">
                <Row className="justify-content-center">
                  <div className="col-lg-9">
                    <h1 className="mb-3 text-light">Get in Touch</h1>
                    <Form>
                      <Row className="g-3">
                        <div className="col-md-6">
                          <label
                            htmlFor="name"
                            className="form-label text-light"
                          >
                            Your Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            required
                            onChange={changedName}
                          />
                        </div>

                        <div className="col-md-6">
                          <label
                            htmlFor="surname"
                            className="form-label text-light"
                          >
                            Your Surname
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="surname"
                            name="surname"
                            required
                            onChange={changedSurname}
                          />
                        </div>

                        <div className="col-md-6">
                          <label
                            htmlFor="email"
                            className="form-label text-light"
                          >
                            Your Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            required
                            onChange={changedEmail}
                          />
                        </div>

                        <div className="col-md-6">
                          <label
                            htmlFor="subject"
                            className="form-label text-light"
                          >
                            Your Subject
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="subject"
                            name="subject"
                            onChange={changedSubject}
                          />
                        </div>
                        <div className="col-12">
                          <label
                            htmlFor="message"
                            className="form-label text-light"
                          >
                            Your Message
                          </label>
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows="5"
                            required
                            onChange={changedMessage}
                          ></textarea>
                        </div>
                        <div className="col-12">
                          <div className="row">
                            <div className="col-md-12">
                              <button
                                type="submit"
                                className="btn btn-primary w-100 fw-bold"
                                onClick={submitForm}
                              >
                                {formStatus}
                              </button>
                            </div>
                          </div>
                        </div>
                      </Row>
                    </Form>
                  </div>
                </Row>
              </Container>
            </div>
          ) : (
            <div className={styles.formWrapper_resultSubmit}>
              <Container className="my-5">
                <Row className="justify-content-center">
                  <div className="col-lg-9">
                    <Row className="g-3">
                      <p className="text-light">
                        <span className="text-info">Name: &nbsp; </span>
                        {name !== '' ? name : ''}
                      </p>

                      <p className="text-light">
                        <span className="text-info">Surname:&nbsp;</span>
                        {surname !== '' ? surname : ''}
                      </p>

                      <p className="text-light">
                        <span className="text-info">Email:&nbsp;</span>
                        {email !== '' ? email : ''}
                      </p>

                      <p className="text-light">
                        <span className="text-info">Subject:&nbsp;</span>
                        {subject !== '' ? subject : ''}
                      </p>

                      <p className="text-light">
                        <span className="text-info">Message:&nbsp;</span>
                        {message !== '' ? message : ''}
                      </p>
                    </Row>
                  </div>
                </Row>
              </Container>
            </div>
          )}
        </Container>
      </div>
    </>
  )
}

export default ContactForm
