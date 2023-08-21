import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.wrapperFooter}>
      <Container>
        <Row>
          <Container>
            <div className="d-flex flex-column h-100">
              <footer className="w-100 py-4 flex-shrink-0">
                <Container className="py-4">
                  <Row className="gy-4 gx-5">
                    <div className="col-lg-4 col-md-6">
                      <h1 className={styles.wrapperFooter_h1}>COMPANY.</h1>
                      <p className={styles.wrapperFooter_p}>
                        Conact Us. <br />
                        Let's Talk.
                      </p>
                      <div className={styles.wrapperFooter_copyright}>
                        &copy; Copyrights. All rights reserved. &nbsp;
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.google.com/"
                        >
                          company.com
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-2 col-md-6">
                      <h5 className={styles.wrapperFooter_columnTwoTitle}>
                        Quick links
                      </h5>
                      <ul className="list-unstyled">
                        <li className={styles.wrapperFooter_columnTwoLink}>
                          <Link to="/">Home</Link>
                        </li>

                        <li className={styles.wrapperFooter_columnTwoLink}>
                          <Link to="/about">About</Link>
                        </li>

                        <li className={styles.wrapperFooter_columnTwoLink}>
                          <Link to="/news">News</Link>
                        </li>

                        <li className={styles.wrapperFooter_columnTwoLink}>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-2 col-md-6">
                      <h5 className={styles.wrapperFooter_columnThreeh1}>
                        Where we are?
                      </h5>
                      <div
                        className={styles.wrapperFooter_columnTwoThreeAddress}
                      >
                        <span className="mb-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-geo-alt"
                            viewBox="0 0 16 16"
                          >
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                          </svg>
                          &nbsp;Michelz Schrint
                        </span>
                        <span>263/8 - Mynchen</span>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <h5 className={styles.wrapperFooter_columnFourh1}>
                        Our Contact info
                      </h5>
                      <div className={styles.wrapperFooter_columnFourAddress}>
                        <span className="mb-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-telephone-forward"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z" />
                          </svg>
                          &nbsp;+123456789
                        </span>

                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-envelope-at"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                            <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                          </svg>
                          &nbsp;company@gmail.com
                        </span>
                      </div>
                    </div>
                  </Row>
                </Container>
              </footer>
            </div>
          </Container>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
