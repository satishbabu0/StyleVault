import React, { useState } from "react";
import { Link } from "react-router-dom";

function CheckoutPage({ cart }) {
  const [paymentDone, setPaymentDone] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  const handlePaymentDone = () => {
    setPaymentDone(true);
    setTimeout(() => {
      alert('Thank you for your purchase! Order confirmed.');
      // Clear cart after successful payment
      localStorage.removeItem('stylevault-cart');
      window.location.href = '/';
    }, 1000);
  };

  if (cart.length === 0) {
    return (
      <div style={{
        padding: "40px",
        minHeight: "60vh",
        textAlign: "center",
        backgroundColor: "#1a1a1a",
        color: "white"
      }}>
        <h1>Your cart is empty</h1>
        <Link to="/products">
          <button style={{
            padding: "12px 25px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            marginTop: "20px",
            cursor: "pointer"
          }}>
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{
      padding: "40px",
      minHeight: "100vh",
      backgroundColor: "#1a1a1a",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        maxWidth: "600px",
        width: "100%",
        backgroundColor: "#2d2d2d",
        borderRadius: "15px",
        padding: "30px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
      }}>
        <h1 style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#fff",
          fontSize: "2.5rem"
        }}>
          Checkout
        </h1>

        {/* Cart Summary */}
        <div style={{
          marginBottom: "30px",
          padding: "20px",
          backgroundColor: "#3d3d3d",
          borderRadius: "10px"
        }}>
          <h3 style={{ marginBottom: "15px", color: "#fff" }}>Order Summary</h3>
          {cart.map(item => (
            <div key={item.id} style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 0",
              borderBottom: "1px solid #555"
            }}>
              <div>
                <h4 style={{ margin: "0", color: "#fff" }}>{item.name}</h4>
                <p style={{ margin: "5px 0", color: "#ccc" }}>
                  Quantity: {item.quantity || 1} × ₹{item.price}
                </p>
              </div>
              <span style={{ color: "#fff", fontWeight: "bold" }}>
                ₹{item.price * (item.quantity || 1)}
              </span>
            </div>
          ))}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 0",
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#fff"
          }}>
            <span>Total Amount:</span>
            <span>₹{total}</span>
          </div>
        </div>

        {/* Payment Section */}
        <div style={{
          textAlign: "center",
          padding: "30px",
          backgroundColor: "#3d3d3d",
          borderRadius: "15px"
        }}>
          <h2 style={{
            color: "#fff",
            marginBottom: "20px",
            fontSize: "2rem"
          }}>
            Scan & Pay
          </h2>

          <div style={{
            marginBottom: "20px",
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "10px",
            display: "inline-block"
          }}>
            <img
              src="/images/phonepe-qr.png"
              alt="PhonePe QR Code"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "10px"
              }}
            />
          </div>

          <p style={{
            color: "#ccc",
            margin: "20px 0",
            fontSize: "1.1rem"
          }}>
            PhonePe / Google Pay / Paytm
          </p>

          <button
            onClick={handlePaymentDone}
            disabled={paymentDone}
            style={{
              padding: "15px 40px",
              background: paymentDone ? "#28a745" : "#007bff",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              cursor: paymentDone ? "default" : "pointer",
              transition: "all 0.3s ease",
              marginTop: "20px"
            }}
          >
            {paymentDone ? "✅ Payment Done" : "Payment Done"}
          </button>

          <p style={{
            color: "#888",
            marginTop: "20px",
            fontSize: "0.9rem"
          }}>
            Scan the QR code with your preferred UPI app and complete the payment
          </p>
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link to="/cart">
            <button style={{
              padding: "10px 20px",
              background: "transparent",
              color: "#007bff",
              border: "1px solid #007bff",
              borderRadius: "8px",
              cursor: "pointer",
              marginRight: "10px"
            }}>
              ← Back to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;