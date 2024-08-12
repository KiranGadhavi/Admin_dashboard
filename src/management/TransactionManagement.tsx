import { useState } from "react"
import AdminSidebar from "../components/AdminSidebar"
import shoesImg from "../assets/shoes.jpeg"
import { Link } from "react-router-dom"
import {OrderItemType,OrderType} from "../styles/type.ts"

const orderItems: OrderItemType[] =[
  {
    name: "Nike Shoes",
    photo: shoesImg,
    _id: "ferfre",
    quantity: 4,
    price:2000,
  }
]
const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "Charles Babbage",
    address:" Kilderkin Court",
    city: 'Coventry',
    country: "UK",
    pinCode: "CV5 9UG",
    status: "Processing",
    subtotal: 5000,
    discount: 1400,
    shippingCharges: 0,
    tax: 300,
    total: 5000 + 300 + 0 - 1400,
    orderItems,
    _id: "ddsfssfdf",
  });
  const {name,address,city,country,pinCode,
    status,subtotal,discount,
    shippingCharges,tax,total} = order;

 const updateHandler = () => {
setOrder((prev) => ({
  ...prev,
  status: prev.status === "Processing" ? "Shipped" : "Delivered",
}))
 }
    return (
    <div className="adminContainer">
      <AdminSidebar/>
      <main className="product-management">
        <section 
        style={{padding:"2rem"}}>
          <h2>Order Items</h2>
          {
            order.orderItems.map((i) =>(
              <ProductCard
              name = {i.name}
              photo = {i.photo}
              _id ={i._id}
              quantity ={i.quantity}
              price = {i.price}
              />
            ))}
        </section>
        <article className="shipping-info-card">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>Adress: {`${address}, ${city}, ${country}, ${pinCode},`}</p>
          <h5>Amount Info</h5>
          <p>Subtotal: {subtotal}</p>
          <p>Shipping Charges: {shippingCharges}</p>
          <p>Tax: {tax}</p>
          <p>Discount: {discount}</p>
          <p>Total: {total}</p>

          <h5>Status Info</h5>
          <p>
            Status:
            <span 
            className = {status ==="Delivered"
            ? "purple"
            : status === "Shipped" 
            ? "green"
            : "red"
          }
          >
            {status}
          </span>
          </p>
          <button onClick={updateHandler}>Process Status</button>
        </article>
      </main>
    </div>
  )
}
const ProductCard =({name, photo, price, quantity, _id,}: OrderItemType) =>(
  <div className="transaction-product-card">
    <img src={photo} alt={name} />\
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>
      ${price} X {quantity} = ${price * quantity}
    </span>
  </div>
)

export default TransactionManagement
