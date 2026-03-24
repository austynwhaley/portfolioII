import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './style.css';
import hood from '../../images/hoodshirt.jpg';
import creation from '../../images/createsweat.jpg';
import 'dotenv/config';
// Initialize EmailJS - replace with your public key
emailjs.init(process.env.EMAILJS_PUBLIC_KEY);

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedSize, setSelectedSize] = useState({});
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [expandedImage, setExpandedImage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: ''
  });

  // Product data
  const products = [
    {
    // shirt 
      id: 1,
      name: "Hood Gon' Love it",
      price: 25.00,
      image: hood,
      inventory: {
        S: 1,
        M: 2,
        L: 5,
        XL: 0,
        '2XL': 0,
        '3XL': 1
      }
    },
    {
      id: 2,
      name: "Gods Creation",
      price: 40.00,
      image: creation,
      inventory: {
        S: 1,
        M: 0,
        L: 4,
        XL: 0,
        '2XL': 1,
        '3XL': 2
      }
    },
  ];

  const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL'];

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('tshirtCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('tshirtCart', JSON.stringify(cart));
  }, [cart]);

  // Add to cart handler
  const handleAddToCart = (product) => {
    const size = selectedSize[product.id] || 'M';
    
    // Check inventory
    if (product.inventory[size] <= 0) {
      alert(`${product.name} in size ${size} is out of stock`);
      return;
    }
    
    const cartItemId = `${product.id}-${size}`;
    
    const existingItem = cart.find(item => item.cartItemId === cartItemId);
    
    if (existingItem) {
      setCart(cart.map(item =>
        item.cartItemId === cartItemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([
        ...cart,
        {
          cartItemId,
          id: product.id,
          name: product.name,
          price: product.price,
          size,
          image: product.image,
          quantity: 1
        }
      ]);
    }
    
    // Reset size selector
    setSelectedSize({ ...selectedSize, [product.id]: 'M' });
  };

  // Remove from cart handler
  const handleRemoveFromCart = (cartItemId) => {
    setCart(cart.filter(item => item.cartItemId !== cartItemId));
  };

  // Update quantity
  const handleUpdateQuantity = (cartItemId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(cartItemId);
      return;
    }
    
    // Find the product and size to check inventory
    const cartItem = cart.find(item => item.cartItemId === cartItemId);
    if (cartItem) {
      const product = products.find(p => p.id === cartItem.id);
      const maxAvailable = product.inventory[cartItem.size];
      
      if (newQuantity > maxAvailable) {
        alert(`Only ${maxAvailable} ${cartItem.name} (Size ${cartItem.size}) available in stock`);
        return;
      }
    }
    
    setCart(cart.map(item =>
      item.cartItemId === cartItemId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  // Handle form input changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle payment button clicks
  const handlePaymentClick = async (method) => {
    // Validate form
    if (!formData.name || !formData.email || !formData.street || !formData.city || !formData.state || !formData.zip) {
      alert('Please fill in all shipping information before proceeding to payment');
      return;
    }

    if (cart.length === 0) {
      alert('Your cart is empty');
      return;
    }

    const orderDetails = cart
      .map(item => `${item.quantity}x ${item.name} (Size ${item.size}) - $${(item.price * item.quantity).toFixed(2)}`)
      .join('\n');

    const orderSummary = cart
      .map(item => `${item.quantity}x ${item.name} (${item.size})`)
      .join(', ');

    let paymentUrl = '';
    const amount = total.toFixed(2);
    let paymentMethodName = '';

    switch (method) {
      case 'venmo':
        paymentMethodName = 'Venmo';
        paymentUrl = `https://venmo.com/Austyn-Whaley?txn=request&amount=${amount}&note=${encodeURIComponent(`Payment for: ${orderSummary}`)}`;
        break;
      case 'cashapp':
        paymentMethodName = 'CashApp';
        paymentUrl = `https://cash.app/$AustynWhaley/${amount}`;
        break;
      case 'paypal':
        paymentMethodName = 'PayPal';
        paymentUrl = `https://paypal.me/AustynWhaley/${amount}`;
        break;
      default:
        break;
    }

    if (paymentUrl && paymentUrl.includes('USERNAME')) {
      alert(`Update the ${method.toUpperCase()} username in the code before using this payment method`);
      return;
    }

    // Send email with payment method info
    const emailData = {
      to_email: formData.email,
      customer_name: formData.name,
      customer_email: formData.email,
      shipping_address: `${formData.street}, ${formData.city}, ${formData.state} ${formData.zip}`,
      order_details: orderDetails,
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      total: total.toFixed(2),
      payment_method: paymentMethodName
    };

    try {
      // Send email immediately
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        emailData
      );

      // Clear cart and show confirmation
      setCart([]);
      setFormData({ name: '', email: '', street: '', city: '', state: '', zip: '' });
      setOrderSubmitted(true);

      // Hide confirmation after 5 seconds
      setTimeout(() => setOrderSubmitted(false), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Error submitting order. Please try again.');
      return;
    }

    // Open payment link in new window
    window.open(paymentUrl, '_blank');
  };

  return (
    <div className="shop-container">
      {/* Header */}
      <header className="shop-header">
        <button className="cart-toggle" onClick={() => setShowCart(!showCart)}>
          🛒 Cart ({cart.length})
        </button>
      </header>

      {/* Image Expansion Modal */}
      {expandedImage && (
        <div className="image-modal" onClick={() => setExpandedImage(null)}>
          <div className="image-modal-content" onClick={e => e.stopPropagation()}>
            <button className="image-modal-close" onClick={() => setExpandedImage(null)}>✕</button>
            <img src={expandedImage} alt="Expanded view" />
          </div>
        </div>
      )}

      <div className="shop-layout">
        {/* Main Content */}
        <main className="shop-main">
          {orderSubmitted && (
            <div className="confirmation-message">
              <h2>✅ Order Submitted Successfully!</h2>
              <p>Thank you for your purchase. A confirmation email has been sent to {formData.email}.</p>
              <p>We appreciate your business!</p>
              <button 
                className="continue-shopping-btn"
                onClick={() => setOrderSubmitted(false)}
              >
                Continue Shopping
              </button>
            </div>
          )}

          {/* Products Section */}
          <section className="products-section">
            <div className="products-grid">
              {products.map(product => (
                <div key={product.id} className="product-card">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    onClick={() => setExpandedImage(product.image)}
                    style={{ cursor: 'pointer' }}
                  />
                  <h3>{product.name}</h3>
                  <p className="price">${product.price.toFixed(2)}</p>
                  
                  <div className="size-selector">
                    <label>Size:</label>
                    <div className="sizes">
                      {sizes.map(size => {
                        const inStock = product.inventory[size] > 0;
                        return (
                          <button
                            key={size}
                            className={`size-btn ${selectedSize[product.id] === size ? 'selected' : ''} ${!inStock ? 'out-of-stock' : ''}`}
                            onClick={() => inStock && setSelectedSize({ ...selectedSize, [product.id]: size })}
                            disabled={!inStock}
                            title={!inStock ? `${size} is out of stock` : ''}
                          >
                            {size} {!inStock && <span className="stock-label">✗</span>}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  
                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Checkout Form */}
          {cart.length > 0 && (
            <section className="checkout-section">
              <h2>Checkout</h2>
              <div className="checkout-notice">
                <p>📬 Select a payment method below. Details will be emailed to the sender. Once payment is confirmed, your order will be processed.</p>
              </div>
              <div>
                {/* Shipping Information */}
                <fieldset className="form-fieldset">
                  <legend>Shipping Information</legend>
                  
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="street">Street Address *</label>
                    <input
                      type="text"
                      id="street"
                      name="street"
                      value={formData.street}
                      onChange={handleFormChange}
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="city">City *</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleFormChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="state">State *</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleFormChange}
                        maxLength="2"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="zip">ZIP Code *</label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        value={formData.zip}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                  </div>
                </fieldset>

                {/* Payment Methods */}
                <fieldset className="form-fieldset">
                  <legend>Payment Method</legend>
                  <div className="payment-buttons">
                    <button
                      type="button"
                      className="payment-btn venmo"
                      onClick={() => handlePaymentClick('venmo')}
                    >
                      💳 Pay with Venmo
                    </button>
                    <button
                      type="button"
                      className="payment-btn cashapp"
                      onClick={() => handlePaymentClick('cashapp')}
                    >
                      💰 Pay with CashApp
                    </button>
                    <button
                      type="button"
                      className="payment-btn paypal"
                      onClick={() => handlePaymentClick('paypal')}
                    >
                      🅿️ Pay with PayPal
                    </button>
                  </div>
                </fieldset>
              </div>
            </section>
          )}

          {cart.length === 0 && !orderSubmitted && (
            <div className="empty-cart-message">
              <p>Your cart is empty. Start shopping to see products here!</p>
            </div>
          )}
        </main>

        {/* Cart Sidebar */}
        <aside className={`cart-sidebar ${showCart ? 'open' : ''}`}>
          <div className="cart-header">
            <h2>Shopping Cart</h2>
            <button className="close-cart" onClick={() => setShowCart(false)}>✕</button>
          </div>

          <div className="cart-items">
            {cart.length === 0 ? (
              <p className="empty-cart">Your cart is empty</p>
            ) : (
              cart.map(item => (
                <div key={item.cartItemId} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p className="item-size">Size: {item.size}</p>
                    <p className="item-price">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="item-quantity">
                    <button
                      onClick={() => handleUpdateQuantity(item.cartItemId, item.quantity - 1)}
                      className="qty-btn"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleUpdateQuantity(item.cartItemId, item.quantity + 1)}
                      className="qty-btn"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item.cartItemId)}
                    className="remove-btn"
                  >
                    🗑️
                  </button>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Tax (8%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default Shop;
