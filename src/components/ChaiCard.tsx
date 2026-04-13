import React from 'react'

interface ChaiCardProps {
  name: string
  price: number
  isSpecial?: boolean
}


const ChaiCard = ({name,price,isSpecial = false}: ChaiCardProps) => {
  return (
    <article>
      <h2>
        {name} {isSpecial && <span>STAR</span>}
      </h2>
      <p>{price}</p>
    </article>
  )
}

export default ChaiCard