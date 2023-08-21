import React from 'react'
import { Card } from 'react-bootstrap'
import { CUSTOMER_CARDS } from '../ItemCards'
import styles from './CustomerList.module.scss'

const OurCustomerList = () => {
  return (
    <>
      <div className={styles.wrapCardInside}>
        {CUSTOMER_CARDS.map((item) => {
          return (
            <Card className={styles.wrapCardInside_widthCard} key={item.id}>
              <div className="card-body">
                <div className={styles.wrapCardInside_iconTextCard}>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-optical-audio"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                      <path d="M4.5 9a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM8 6.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
                      <path d="M2 14.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-3.05a2.5 2.5 0 0 0 0-4.9V4.5a.5.5 0 0 0-.146-.354l-2-2A.5.5 0 0 0 11.5 2h-7a.5.5 0 0 0-.354.146l-2 2A.5.5 0 0 0 2 4.5v2.05a2.5 2.5 0 0 0 0 4.9v3.05Zm1-.5v-3a.5.5 0 0 0-.5-.5 1.5 1.5 0 1 1 0-3A.5.5 0 0 0 3 7V4.707L4.707 3h6.586L13 4.707V7a.5.5 0 0 0 .5.5 1.5 1.5 0 0 1 0 3 .5.5 0 0 0-.5.5v3H3Z" />
                    </svg>
                  </span>
                  &nbsp;
                  <h5 className="card-title">{item.title}</h5>
                </div>
                <p className={styles.wrapCardInside_textCardBottom}>
                  {item.description}
                </p>
              </div>
            </Card>
          )
        })}
      </div>
    </>
  )
}

export default OurCustomerList
