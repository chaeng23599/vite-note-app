import './App.css'
import Header from './component/Header'
import { db } from './firebase'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import List from './page/List'
import Write from './page/Write'
import Edit from './page/Edit'

export default function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<List />} />
          <Route path='/write' element={<Write />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
