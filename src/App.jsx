import './App.css'
import Outfit from './components/Outfit'
import OutfitList from './components/OutfitList'
import OutfitCategory  from './components/OutfitCategory/OutfitCategory'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import OutfitContent from './pages/content/OutfitContent'

function App() {
  return (
    <div className='App'>
      {/* <OutfitCategory/> 
      <Navbar/>
      <OutfitCategory/>
      <OutfitList/>
      <Footer/>
      */}
      <Navbar/>
      <OutfitContent/>
    </div>
  )
}

export default App
