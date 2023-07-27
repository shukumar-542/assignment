
import './App.css'
import Card from './component/Card/Card'
import ContactUS from './component/ContactUS/ContactUS'
import Header from './component/Header/Header'
import Navbar from './component/Navbar/Navbar'
import OurService from './component/OurService/OurService'
import ReviewSection from './component/ReviewSection/ReviewSection'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Card></Card>
      <OurService></OurService>
      <ReviewSection></ReviewSection>
      <ContactUS></ContactUS>
    </>
  )
}

export default App
