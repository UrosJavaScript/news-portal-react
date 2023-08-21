import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const NewsContext = createContext()

export const ContextNewsProvider = (props) => {
  const [data, setData] = useState()

  const apiKey = 'cb6d0109e62243789ad3656deb99381b'

  const GetNews = async () => {
    return await axios
      .get(`https://newsapi.org/v2/everything?q=new&apiKey=${apiKey}`)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error.message))
  }

  useEffect(() => {
    GetNews()
  }, [])

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  )
}
