
//import componenets
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


//import pages
import Home from './pages/Home/Home'
import PropertyDetails from './pages/PropertyDetails/PropertyDetails'


import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
        
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App;
