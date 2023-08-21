import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Container, Row } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
import './pagination.scss'
import styles from './News.module.scss'
import { NewsContext } from '../../context-api'
import HeaderNews from './HeaderNews'
import LoadingSpinner from './LoadingSpinner'
import Footer from '../Footer'
// import CategoryNews from './SortingCategoryNews'
import BgImage from '../../assets/images/News/walppaer-news.png'

const News = () => {
  const { data } = useContext(NewsContext)
  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 6

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(data?.articles.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(data?.articles.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, data])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const HandlePage = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.articles.length
    setItemOffset(newOffset)
  }

  return (
    <>
      <HeaderNews />

      {/* <CategoryNews /> */}

      <Container>
        <Row style={{ gap: '20px', display: 'flex', justifyContent: 'center' }}>
          {currentItems ? (
            currentItems?.map((news) => {
              let apiDate = news.publishedAt
              let date = new Date(apiDate)
              let dateFormating = date.toString().slice(0, -42)
              return (
                <Card
                  key={news.url}
                  style={{
                    width: '300px',
                    padding: '10px',
                    boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
                    borderRadius: '15px',
                    textDecoration: 'none',
                  }}
                >
                  <Link
                    to={`/news/${news.publishedAt}`}
                    className={styles.cardNews_img}
                  >
                    <img
                      className="card-img-top"
                      src={news.urlToImage ? news.urlToImage : BgImage}
                      alt="Cardimage"
                      style={{
                        width: '100%',
                      }}
                    />
                  </Link>
                  <div className="card-body">
                    <p className="card-title">
                      <span className={styles.cardNews_Date}>
                        {dateFormating}
                      </span>
                    </p>
                    <Link
                      to={`/news/${news.publishedAt}`}
                      className={styles.cardNews_Title}
                    >
                      <p className="card-text">{news.title}</p>
                    </Link>
                    <p className={styles.cardNews_Author}>
                      {news.author ? news.author : 'Unkown'}
                    </p>
                  </div>
                </Card>
              )
            })
          ) : (
            <LoadingSpinner />
          )}
        </Row>

        {/* pagination */}
        <Row
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '100px',
            marginBottom: '50px',
          }}
        >
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageCount={pageCount}
            onPageChange={HandlePage}
            containerClassName={'paginationBtn'}
            previousLinkClassName={'previousBtn'}
            nextLinkClassName={'nextBtn'}
            disabledClassName={'paginationDisabled'}
            activeClassName={'paginationActive'}
          />
        </Row>
      </Container>

      <Footer />
    </>
  )
}

export default News
