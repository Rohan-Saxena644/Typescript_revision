
import './App.css'
import ChaiCard from './components/ChaiCard'
import ChaiList from './components/ChaiList'
import type { Chai } from './types'
import OrderForm from './components/OrderForm'
import Card from './components/Card'

const menu: Chai[] = [
  {id: 1, name: "Masala Chai", price: 25},
  {id: 2, name: "Ginger Chai", price: 30},
  {id: 3, name: "Cardamom Chai", price: 35},
]

function App() {

  return (
    <>
      <ChaiList items={menu}/>
      <OrderForm onSubmit={(order) => {
        console.log("Order received", order)
      }}/>

      <div>
        <Card title="Welcome to Chai House" footer={<button>Order Now</button>}>
          <p>Enjoy the best chai in town!</p>
        </Card>
      </div>
    </>
  )
}

export default App
