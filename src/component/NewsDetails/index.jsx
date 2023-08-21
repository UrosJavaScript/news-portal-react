import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Container, Row } from 'react-bootstrap'
import styled from './NewsDetails.module.scss'
import { NewsContext } from '../../context-api'
import HeaderNewsDetails from './HeaderNewsDetails'
import SectionNews from '../Home/SectionNews'
import Footer from '../Footer'

import BgImage from '../../assets/images/News/walppaer-news.png'
import Avatar from '../../assets/images/News/user-avatar.png'
import IconTop from '../../assets/images/News/topIcon.png'

const NewsDetails = () => {
  const { publishedAt } = useParams()
  const { data } = useContext(NewsContext)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)

    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false)
    }
    window.addEventListener('scroll', handleScrollButtonVisibility)
    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisibility)
    }
  }, [])

  const singleNews = data?.articles.filter(
    (news) => news.publishedAt === publishedAt
  )

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <HeaderNewsDetails />

      <div className={styled.newsDetailsWrapper}>
        <Container>
          <Row>
            <Container>
              {singleNews?.map((item) => {
                let apiDate = item.publishedAt
                let date = new Date(apiDate)
                let dateFormating = date.toString().slice(0, -42)

                return (
                  <div
                    className={styled.newsDetailsWrapper_flexWrapperDetails}
                    key={item.url}
                  >
                    <div className={styled.newsDetailsWrapper_h2Details}>
                      <h1>{item.title}</h1>
                    </div>

                    <div className={styled.newsDetailsWrapper_imgBg}>
                      <img
                        src={item.urlToImage ? item.urlToImage : BgImage}
                        alt="img"
                      />
                    </div>

                    <div className={styled.newsDetailsWrapper_authorWrapper}>
                      <span>
                        <img src={Avatar} alt="avatar" />
                      </span>
                      <p>{item.author ? item.author : 'Unkown'}</p>
                      <span className={styled.newsDetailsWrapper_lineUp}>
                        |
                      </span>
                      <span className={styled.newsDetailsWrapper_date}>
                        {dateFormating}
                      </span>
                    </div>

                    <div
                      className={styled.newsDetailsWrapper_contentDescription}
                    >
                      <p>{item.description}</p>
                    </div>

                    <div className={styled.newsDetailsWrapper_linkRead}>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={
                          item.url
                            ? item.url
                            : 'https://status.search.google.com/'
                        }
                      >
                        Read the whole news
                      </a>
                    </div>
                  </div>
                )
              })}
              {showButton && (
                <div className={styled.topButtonWrapper}>
                  <button onClick={handleScrollToTop}>
                    <img src={IconTop} alt="icon" />
                  </button>
                </div>
              )}
            </Container>
          </Row>

          <SectionNews />
        </Container>
      </div>

      <Footer />
    </>
  )
}

export default NewsDetails
