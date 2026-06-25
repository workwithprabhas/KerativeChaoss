import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Gallery from './pages/Gallery.jsx'
import Landing from './pages/Landing.jsx'
import ComingSoon from './pages/ComingSoon.jsx'

// Shared chrome (grain overlay, nav, footer) wraps every routed page.
function Layout() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* section routes render Home and scroll to the section (no # in URL) */}
          <Route path="/rooms" element={<Home />} />
          <Route path="/who-belongs" element={<Home />} />
          <Route path="/a-day-here" element={<Home />} />
          <Route path="/visit" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/belong/:slug" element={<ComingSoon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
