import React, { type ReactEventHandler } from 'react'
import { useState } from 'react'

interface OrderFormProps {
    onSubmit(order: {name: string, quantity: number}): void
}

const OrderForm = ({onSubmit}:OrderFormProps) => {

    const [name,setName] = useState<string>("Masala Chai");
    const [cups,setCups] = useState<number>(1);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        onSubmit({name, quantity: cups})
    }

  return (
    // <form onSubmit={(e) => {
    //     e.preventDefault();
    //     onSubmit({name, quantity: cups})
    // }}>
    <form onSubmit={handleSubmit}>
        <label>
            Chai Name:
            <input type="text" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
        </label>
        <label>
            Cups:
            <input type="number" value={cups} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCups(Number(e.target.value) || 0)}/>
        </label>
        <button type="submit">Submit</button>
    </form>
  )
}

export default OrderForm