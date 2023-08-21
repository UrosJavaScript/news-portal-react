import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Container, Nav, Navbar, NavItem, Row } from 'react-bootstrap'
import HeaderAnimation from '../ContactAnimation'
import ContactForm from '../ContactAbsoluteForm'
// styles
import styles from './HeaderContact.module.scss'
// helpers
import NavData from '../../../helper/navItem.json'
// images
import Logo from '../../../assets/images/icons/logo.png'

const HeaderContact = () => {
  // active class for page
  const location = useLocation()
  const [url, setUrl] = useState(null)

  // change nav color when scrolling
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  useEffect(() => {
    setUrl(location.pathname)
  }, [location])

  return (
    <>
      <div className={styles.headerWrapper}>
        <div className={styles.headerWrapper__imgBg}></div>
        <div
          className={
            color ? styles.headerWrapper__bgNav : styles.headerWrapper__content
          }
        >
          <Container>
            <Row>
              <div className="navbar navbar-expand-lg">
                <Container>
                  <Navbar.Brand
                    className="navbar-brand text-light d-flex"
                    as={Link}
                    to="/"
                  >
                    <img
                      src={Logo}
                      alt="logo"
                      className={styles.headerWrapper__logoImg}
                    />
                    <span>&nbsp;|&nbsp;</span>
                    <span>company</span>
                  </Navbar.Brand>

                  <Navbar.Toggle
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    className={styles.headerWrapper__toggle}
                  >
                    <span className="navbar-toggler-icon"></span>
                  </Navbar.Toggle>

                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <div className="navbar-nav ms-auto">
                      <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
                        {NavData.map((item) => (
                          <NavItem
                            className={styles.headerWrapper__navItem}
                            key={item.id}
                          >
                            <Link
                              to={item.link}
                              className={
                                'nav-link' +
                                (url === `${item.link}` ? ' active' : '')
                              }
                            >
                              {item.name}
                            </Link>
                          </NavItem>
                        ))}

                        <NavItem className={styles.headerWrapper__navItem}>
                          <button
                            className="btn btn-outline-light"
                            type="submit"
                          >
                            +123456789
                          </button>
                        </NavItem>
                      </Nav>
                    </div>
                  </div>
                </Container>
              </div>
            </Row>
          </Container>
        </div>

        <ContactForm />

        <HeaderAnimation />
      </div>
    </>
  )
}

export default HeaderContact
