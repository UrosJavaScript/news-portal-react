import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// styles
import styles from '../Header.module.scss'
// video
import VideoHeader from '../../../assets/video/header-video.mp4'

const VideoSection = () => {
  const [isOpenModal, setOpenModal] = useState(false)

  const CloseModal = () => {
    return setOpenModal(false)
  }

  const MyModal = () => {
    return (
      <>
        <div className={styles.modalWrapper}>
          <div className={styles.modalWrapper_modalContainer}>
            <video
              width="100%"
              height="auto"
              autoPlay
              muted
              src={VideoHeader}
              controls
              loop
            />
            <div className={styles.modalWrapper_modalClosebtn}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={CloseModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }

  useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = isOpenModal ? 'hidden' : 'auto'
  }, [isOpenModal])

  return (
    <>
      <div className={styles.headerWrapper__absoluteSection}>
        <Container>
          <Row>
            <Container>
              <div className={styles.headerWrapper__wrapperAbsSec}>
                <h2>We make digital buisiness simple</h2>

                <div className={styles.headerWrapper__absSecParagraph}>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. It is a long established fact that a reader will
                    be distracted by the readable content of a page when looking
                    at its layout.
                  </p>
                </div>

                <div className={styles.headerWrapper__wrappeBtnHeader}>
                  <Link to="/contact">
                    <button className="btn btn-outline-success text-light">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillrule-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                      &nbsp;CONTACT US
                    </button>
                  </Link>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setOpenModal(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-right-circle"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillrule-rule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                      />
                    </svg>
                    &nbsp; PLAY VIDEO
                  </button>
                </div>
              </div>
            </Container>
          </Row>
        </Container>
      </div>

      <div>{isOpenModal && <MyModal />}</div>
    </>
  )
}

export default VideoSection
