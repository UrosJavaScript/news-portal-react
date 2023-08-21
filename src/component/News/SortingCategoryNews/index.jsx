/*
 **I tried to display and sort by category,
 **however I am using a free API that has limited requests for 24 hours,
 **so I was not able to complete this functionality
 **/

import React, { useEffect, useState } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import '../../News/pagination.scss'

import styles from './Category.module.scss'
import BgImage from '../../../assets/images/News/walppaer-news.png'
import ReactPaginate from 'react-paginate'
import LoadingSpinner from '../LoadingSpinner'

const CategoryNews = () => {
  const [category, setCategory] = useState()
  const [filtered, setFiltered] = useState()
  const [activeCategory, setActiveCategory] = useState('general')
  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 10

  console.log('state currentItems: ', category)

  const apiKey = '13331f17b4ee48f4b5c8a8ac65ba607a'

  useEffect(() => {
    fetchCategory()
  })
  useEffect(() => {
    if (activeCategory === 'general') {
      setFiltered(category)
      return
    } else if (activeCategory === 'business') {
      setFiltered(category)
      return
    } else if (activeCategory === 'entertainment') {
      setFiltered(category)
      return
    } else if (activeCategory === 'technology') {
      setFiltered(category)
      return
    } else if (activeCategory === 'sports') {
      setFiltered(category)
      return
    } else {
      return undefined
    }
  }, [category, activeCategory])
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(filtered?.articles.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(filtered?.articles.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, filtered])

  const fetchCategory = async () => {
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?category=${activeCategory}&apiKey=${apiKey}`
    )
    const categoryData = await data.json()
    setCategory(categoryData)
    setFiltered(categoryData)
  }

  // useEffect(() => {

  // }, [activeCategory, category])
  const HandlePage = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % filtered?.articles.length
    setItemOffset(newOffset)
  }
  return (
    <>
      <Container>
        <Row>
          <Container>
            <h2>Sorting Category News</h2>
            <Row>
              <div className={styles.wrapperCategory}>
                <button
                  type="button"
                  className={
                    'btn bg-info' +
                    (activeCategory === 'general' ? 'btn bg-warning' : '')
                  }
                  onClick={() => {
                    setActiveCategory('general')
                  }}
                >
                  general
                </button>
                <button
                  type="button"
                  className={
                    'btn' +
                    (activeCategory === 'business' ? 'btn bg-warning' : '')
                  }
                  onClick={() => {
                    setActiveCategory('business')
                  }}
                >
                  business
                </button>
                <button
                  type="button"
                  className={
                    'btn' +
                    (activeCategory === 'entertainment' ? 'btn bg-warning' : '')
                  }
                  onClick={() => {
                    setActiveCategory('entertainment')
                  }}
                >
                  entertainment
                </button>
                <button
                  type="button"
                  className={
                    'btn' +
                    (activeCategory === 'technology' ? 'btn bg-warning' : '')
                  }
                  onClick={() => {
                    setActiveCategory('technology')
                  }}
                >
                  technology
                </button>
                <button
                  type="button"
                  className={
                    'btn' +
                    (activeCategory === 'sports' ? 'btn bg-warning' : '')
                  }
                  onClick={() => {
                    setActiveCategory('sports')
                  }}
                >
                  sport
                </button>
              </div>
            </Row>
          </Container>
        </Row>
      </Container>

      <Container>
        <Row style={{ gap: '20px', display: 'flex', justifyContent: 'center' }}>
          {/* <Container> */}
          {currentItems ? (
            currentItems?.map((item) => {
              let apiDate = item.publishedAt
              let date = new Date(apiDate)
              let dateFormating = date.toString().slice(0, -42)
              return (
                <Card
                  key={item.url}
                  style={{
                    width: '300px',
                    padding: '10px',
                    boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
                    borderRadius: '15px',
                    textDecoration: 'none',
                  }}
                >
                  <Link
                    to={`/news/${item.publishedAt}`}
                    className={styles.cardNews_img}
                  >
                    <img
                      className="card-img-top"
                      src={item.urlToImage ? item.urlToImage : BgImage}
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
                      to={`/news/${item.publishedAt}`}
                      className={styles.cardNews_Title}
                    >
                      <p className="card-text">{item.title}</p>
                    </Link>
                    <p className={styles.cardNews_Author}>
                      {item.author ? item.author : 'Unkown'}
                    </p>
                  </div>
                </Card>
              )
            })
          ) : (
            <LoadingSpinner />
          )}
          {/* </Container> */}
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
      <hr />
    </>
  )
}

export default CategoryNews
