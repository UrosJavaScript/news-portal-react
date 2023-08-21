import React, { useEffect } from 'react'
import SectionNews from './SectionNews'
import OurFocus from './SectionOurFocus'
import SSubscribeEmail from './SectionSubcsribe'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <OurFocus />

      <SectionNews />

      <SSubscribeEmail />
    </>
  )
}

export default Home
