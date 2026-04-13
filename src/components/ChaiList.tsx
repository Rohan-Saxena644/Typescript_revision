import type { Chai } from "../types"
import ChaiCard from "./ChaiCard"

interface ChaiListProps {
    items: Chai[]
}

const ChaiList = ({items}:ChaiListProps) => {
  return (
    <div>
        {items.map((item) => (
            // <div key={item.id}>
            //     <h2>{item.name}</h2>  
            //     <p>{item.price}</p>
            // </div>
            <ChaiCard key={item.id} name={item.name} price={item.price} isSpecial={item.price>30}/>
        ))}
    </div>    
  )
}

export default ChaiList