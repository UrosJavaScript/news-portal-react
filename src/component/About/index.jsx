import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import styles from './About.module.scss'
import 'animate.css/animate.min.css'
import { ABOUT_ITEMS } from './AboutItem'
import HeaderAbout from './HeaderAbout'
import Footer from '../Footer'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeaderAbout />

      <div className={styles.containerAbout}>
        <Container>
          <Row>
            <Container>
              <div className={styles.containerAbout_wrapperFlexAbout}>
                {ABOUT_ITEMS.map((item) => {
                  return (
                    <AnimationOnScroll
                      iinitiallyVisible={true}
                      animateIn="animate__jello"
                      key={item.id}
                    >
                      <div className={styles.containerAbout_section}>
                        <div>
                          <h3>{item.title}</h3>
                        </div>
                        <div
                          style={{
                            backgroundImage: `url(${item.img})`,
                            height: '200px',
                            width: '50vh',
                            marginBottom: '40px',
                            borderRadius: '5px',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                          }}
                        ></div>

                        <p>{item.description}</p>
                      </div>
                    </AnimationOnScroll>
                  )
                })}
              </div>
            </Container>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  )
}

export default About
