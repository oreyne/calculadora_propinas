import { useCallback } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotal({order, tip, placeOrder} : OrderTotalProps) {

    const subTotalAmount = useCallback(() => order.reduce((total, item) => total + (item.price * item.quantity), 0  ), [order])
    const tipAmount = useCallback(() => subTotalAmount() * tip, [tip, order])
    const total = useCallback(() => tipAmount() + subTotalAmount(), [tip, order])

  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Total y Propina:</h2>
            <p>Subtotal a pagar: {''}
                <span className="font-bold">{formatCurrency(subTotalAmount())}</span>
            </p>
            <p>Propinas: {''}
                <span className="font-bold">{formatCurrency(tipAmount())}</span>
            </p>
            <p>Total a pagar: {''}
                <span className="font-bold">{formatCurrency(total())}</span>
            </p>
        </div>
        <button
            className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
            disabled={total() === 0}
            onClick={placeOrder}>
            Guardar orden   
        </button>
    </>
  )
}
