import { Route, Routes } from 'react-router-dom'
import Layout from './component/Layout'
import Home from './component/Home'
import About from './component/About'
import News from './component/News'
import Contact from './component/Contact'
import NewsDetails from './component/NewsDetails'
import NotFound from './component/NotFound'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:publishedAt" element={<NewsDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
