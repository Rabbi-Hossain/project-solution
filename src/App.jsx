import './App.css'
import LabelList from './components/LabelList/LabelList'
import LineCart from './components/LineCart/LineCart'
import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'



function App() {


  return (
    <>


    <NavBar></NavBar>
      <h2 className='text-3xl font-bold'>Price solution</h2>
      <PriceOptions></PriceOptions>
      <LineCart></LineCart>

      <LabelList></LabelList>

      <Phones></Phones>
    </>
  )
}

export default App
