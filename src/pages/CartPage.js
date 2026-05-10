import React from "react";
import { Link } from "react-router-dom";

function CartPage({ cart, removeFromCart, updateQuantity }) {
 const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

 const handleQuantityChange = (id, newQuantity) => {
   if (newQuantity < 1) return;
   updateQuantity(id, newQuantity);
 };

 return (
   <div style={{
     padding: "40px",
     minHeight: "60vh",
     backgroundColor: "#f8f9fa",
     fontFamily: "Arial, sans-serif"
   }}>
     <div style={{ maxWidth: "800px", margin: "0 auto" }}>
       <h1 style={{
         textAlign: "center",
         marginBottom: "30px",
         color: "#333",
         fontSize: "2.5rem"
       }}>
         Your Cart
       </h1>

       {cart.length === 0 ? (
         <div style={{
           textAlign: "center",
           padding: "50px",
           backgroundColor: "white",
           borderRadius: "15px",
           boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
         }}>
           <h2 style={{ color: "#666", marginBottom: "20px" }}>Your cart is empty</h2>
           <Link to="/products">
             <button style={{
               padding: "12px 25px",
               background: "#007bff",
               color: "white",
               border: "none",
               borderRadius: "8px",
               cursor: "pointer",
               fontSize: "1rem"
             }}>
               Continue Shopping
             </button>
           </Link>
         </div>
       ) : (
         <>
           {cart.map(item => (
             <div key={item.id} style={{
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
               backgroundColor: "white",
               padding: "20px",
               margin: "15px 0",
               borderRadius: "10px",
               boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
             }}>
               <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
                 <img
                   src={item.image}
                   alt={item.name}
                   style={{
                     width: "80px",
                     height: "80px",
                     objectFit: "cover",
                     borderRadius: "8px",
                     marginRight: "20px"
                   }}
                 />
                 <div>
                   <h3 style={{ margin: "0 0 5px 0", color: "#333" }}>{item.name}</h3>
                   <p style={{ margin: "0", color: "#666" }}>₹{item.price}</p>
                 </div>
               </div>

               <div style={{
                 display: "flex",
                 alignItems: "center",
                 gap: "15px"
               }}>
                 {/* Quantity Selector */}
                 <div style={{
                   display: "flex",
                   alignItems: "center",
                   border: "1px solid #ddd",
                   borderRadius: "5px"
                 }}>
                   <button
                     onClick={() => handleQuantityChange(item.id, (item.quantity || 1) - 1)}
                     style={{
                       padding: "8px 12px",
                       background: "#f8f9fa",
                       border: "none",
                       cursor: "pointer",
                       fontSize: "1rem"
                     }}
                   >
                     −
                   </button>
                   <span style={{
                     padding: "8px 15px",
                     minWidth: "40px",
                     textAlign: "center",
                     background: "white"
                   }}>
                     {item.quantity || 1}
                   </span>
                   <button
                     onClick={() => handleQuantityChange(item.id, (item.quantity || 1) + 1)}
                     style={{
                       padding: "8px 12px",
                       background: "#f8f9fa",
                       border: "none",
                       cursor: "pointer",
                       fontSize: "1rem"
                     }}
                   >
                     +
                   </button>
                 </div>

                 {/* Item Total */}
                 <span style={{
                   fontWeight: "bold",
                   color: "#333",
                   minWidth: "80px",
                   textAlign: "right"
                 }}>
                   ₹{item.price * (item.quantity || 1)}
                 </span>

                 {/* Remove Button */}
                 <button
                   onClick={() => removeFromCart(item.id)}
                   style={{
                     padding: "8px 15px",
                     background: "#dc3545",
                     color: "white",
                     border: "none",
                     borderRadius: "5px",
                     cursor: "pointer"
                   }}
                 >
                   Remove
                 </button>
               </div>
             </div>
           ))}

           {/* Total Section */}
           <div style={{
             backgroundColor: "white",
             padding: "25px",
             borderRadius: "10px",
             boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
             marginTop: "30px"
           }}>
             <div style={{
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
               fontSize: "1.5rem",
               fontWeight: "bold",
               color: "#333"
             }}>
               <span>Total: ₹{total}</span>
               <Link to="/checkout">
                 <button style={{
                   padding: "15px 30px",
                   background: "#28a745",
                   color: "white",
                   border: "none",
                   borderRadius: "8px",
                   cursor: "pointer",
                   fontSize: "1.1rem",
                   fontWeight: "bold"
                 }}>
                   Proceed To Checkout
                 </button>
               </Link>
             </div>
           </div>
         </>
       )}
     </div>
   </div>
 );
}

export default CartPage;