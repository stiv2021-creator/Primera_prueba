import { useState } from 'react'
//import './shared/styles/App.css'
import { Header } from './features/layout/components/header'
import { Content } from './features/layout/components/Content'
import { Footer } from './features/layout/components/footer'
import {Props} from './features/layout/components/props'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Content></Content>}></Route>
          <Route path='/Props' element={<Props></Props>} ></Route>
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
