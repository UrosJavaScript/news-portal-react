import React, { useEffect } from 'react'
import HeaderContact from './HeaderContact'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeaderContact />
    </>
  )
}

export default Contact
