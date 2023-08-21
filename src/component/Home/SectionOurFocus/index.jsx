import React from 'react'
import { Link } from 'react-router-dom'
import { CardGroup, Container, Row } from 'react-bootstrap'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import 'animate.css/animate.min.css'
import styles from './OurFocus.module.scss'
import { FOCUS_ITEM_CARD } from './ItemCards'
import OurCustomerList from './OurCustomerList'

// images
import IconBg from '../../../assets/images/OurFocusSection/icons.png'
import ComputerBg from '../../../assets/images/OurFocusSection/computer-bg.png'

const OurFocus = () => {
  return (
    <>
      <div className={styles.ourFocusWrapper}>
        <Container>
          <div className={styles.ourFocusWrapper_headingTop}>
            <h2>Our Focus</h2>
          </div>

          <Row
            style={{
              justifyContent: 'space-around',
              display: 'flex',
              alignItems: 'center',
              gap: '15px 83px',
            }}
          >
            {FOCUS_ITEM_CARD.map((item) => (
              <CardGroup
                key={item.id}
                style={{
                  width: '300px',
                  marginTop: '25px',
                  backgroundImage: `url(${item.img})`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  opacity: '0.8',
                }}
                className="h-100 overflow-hidden text-white rounded-3 shadow-lg"
              >
                <AnimationOnScroll animateIn="animate__bounceIn">
                  <div className="d-flex flex-column h-100 text-white text-shadow-1">
                    <h2 className="mt-5 mb-4 display-6 lh-1 fw-bold">
                      {item.title}
                    </h2>
                    <div>{item.description}</div>
                    <div className="mt-2 mb-5">
                      <Link to="/about">
                        <button className="btn btn-light text-dark">
                          {item.buttonTxt}
                          &nbsp;{' '}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-right"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                            />
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                </AnimationOnScroll>
              </CardGroup>
            ))}
          </Row>

          <div className={styles.ourFocusWrapper_bottomSection}>
            <div className={styles.ourFocusWrapper_containerBottomS}>
              <div className={styles.ourFocusWrapper_wrapperImgRelative}>
                <>
                  <AnimationOnScroll
                    initiallyVisible={true}
                    duration={3}
                    animateIn="animate__swing"
                  >
                    <div
                      style={{
                        backgroundImage: `url(${IconBg})`,
                        width: '250px',
                        height: '250px',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundImage: `url(${ComputerBg})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                      }}
                      className={styles.ourFocusWrapper_wrapperImgAbsolute}
                    ></div>
                  </AnimationOnScroll>
                </>
              </div>

              <div className={styles.ourFocusWrapper_flexCardWrapper}>
                <div>
                  <div className={styles.ourFocusWrapper_cardTop}>
                    <h2>
                      Impressing our <br /> customers
                    </h2>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Lorem ipsum dolor <br /> sit amet consectetur adipisicing
                      elit
                    </p>
                  </div>
                </div>

                <OurCustomerList />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default OurFocus
