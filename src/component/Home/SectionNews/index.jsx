import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Card, Container } from 'react-bootstrap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './SNews.module.scss'
import './slickSlider.scss'
import { NewsContext } from '../../../context-api'
import { settings } from './SettingsSlider'
import BgImage from '../../../assets/images/News/walppaer-news.png'

const SectionNews = () => {
  const { data } = useContext(NewsContext)

  return (
    <>
      <div className={styles.sectionNewsWrapper}>
        <Container>
          <div className={styles.sectionNewsWrapper_headingTop}>
            <h2>News and trends</h2>
          </div>

          <Slider
            {...settings}
            className={styles.sectionNewsWrapper_sliderSlick}
          >
            {data?.articles.map((news) => {
              let apiDate = news.publishedAt
              let date = new Date(apiDate)
              let dateFormating = date.toString().slice(0, -42)
              return (
                <Card key={news.url}>
                  <Link to={`/news/${news.publishedAt}`}>
                    <img
                      className="card-img-top"
                      src={news.urlToImage ? news.urlToImage : BgImage}
                      alt="Cardimage"
                      style={{
                        width: '100%',
                        height: '30vh',
                      }}
                    />
                  </Link>

                  <div className="card-body">
                    <p className="card-title">
                      <span className={styles.sectionNewsWrapper_cardDate}>
                        {dateFormating}
                      </span>
                    </p>

                    <Link
                      to={`/news/${news.publishedAt}`}
                      className={styles.sectionNewsWrapper_cardTitle}
                    >
                      <p className="card-text">{news.title}</p>
                    </Link>
                    <p className={styles.sectionNewsWrapper_cardAuthor}>
                      {news.author ? news.author : 'Unkown'}
                    </p>
                  </div>
                </Card>
              )
            })}
          </Slider>
        </Container>
      </div>
    </>
  )
}

export default SectionNews
