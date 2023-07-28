
import './App.css'
import Card from './component/Card/Card'
import ContactUS from './component/ContactUS/ContactUS'
import Header from './component/Header/Header'
import Navbar from './component/Navbar/Navbar'
import OurService from './component/OurService/OurService'
import Slider from './component/Silder/Slider'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Card></Card>
      <OurService></OurService>
      <Slider></Slider>
      <ContactUS></ContactUS>
    </>
  )
}

export default App
