import React, { useRef, useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import 'animate.css/animate.min.css'
import styles from './Subscribe.module.scss'

const SSubscribeEmail = () => {
  const form = useRef()

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [msg, setMsg] = useState('')

  const emailRegex = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    'gm'
  )

  const sendEmail = (e) => {
    e.preventDefault()

    if (email !== '') {
      setMsg('Thank you for subscribing ' + email)
      setTimeout(() => {
        setMsg('')
      }, 3000)
      emailjs
        .sendForm(
          'service_60mnjm7',
          'template_grztksi',
          form.current,
          'mmz6tvuxdiIGSDN2z'
        )
        .then(
          (result) => {
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
          }
        )
    } else {
      setError("SET EMAIL ADDRESS CAN'T BLANK")
      setTimeout(() => {
        setError('')
      }, 3000)
    }
  }

  const checkEmail = (e) => {
    setEmail(e.target.value)

    if (emailRegex.test(email) === false) {
      setError('please eneter valida email address')
    } else {
      setError('')
      return true
    }
  }

  return (
    <>
      <div className={styles.wraperSubscribesEmail}>
        <Container>
          <div className={styles.wraperSubscribesEmail_sectionFlex}>
            <div className={styles.wraperSubscribesEmail_titleWrapper}>
              <AnimationOnScroll
                initiallyVisible={true}
                duration={2}
                animateIn="animate__swing"
              >
                <h2>
                  Subscribe to our <br /> <b>Newsletter!</b>
                </h2>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
              </AnimationOnScroll>
            </div>

            <div className={styles.wraperSubscribesEmail_formContainer}>
              <Form
                className={styles.wraperSubscribesEmail_formWrapper}
                ref={form}
                onSubmit={sendEmail}
              >
                <div className="mb-3 ">
                  <input
                    type="email"
                    className="form-control "
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Your Email"
                    onChange={checkEmail}
                  />
                  <p className="text-info mt-3">{error}</p>
                </div>

                <div className={styles.wraperSubscribesEmail_formBtn}>
                  <button
                    type="submit"
                    className="btn btn-warning text-light m-auto"
                  >
                    Subscribe
                  </button>
                </div>
                <div>
                  <p className="text-info mt-3">{msg}</p>
                </div>
              </Form>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default SSubscribeEmail
