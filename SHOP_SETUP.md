# T-Shirt Shop - Setup & Configuration Guide

## 🎯 Overview
This is a complete single-page e-commerce checkout system with localStorage cart management, EmailJS integration, and payment deep links for Venmo, CashApp, and PayPal.

---

## 📋 Completed Features

✅ **Product Display** - 4 sample t-shirts with placeholder images, names, prices  
✅ **Size Selection** - S, M, L, XL sizes per product  
✅ **Shopping Cart** - Sidebar/modal with localStorage persistence  
✅ **Quantity Management** - Add, update, remove items  
✅ **Checkout Form** - Collects name, email, shipping address  
✅ **Payment Methods** - Venmo, CashApp, PayPal deep links  
✅ **Mobile Responsive** - Fully responsive design (mobile, tablet, desktop)  
✅ **Order Confirmation** - Post-submission success message  

---

## 🔧 EmailJS Setup (Required for Order Submission)

### Step 1: Create a Free EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com)
2. Click "Sign Up Free"
3. Register with email/Google/GitHub
4. Verify your email

### Step 2: Get Your Public Key
1. In EmailJS dashboard, go to **Account** → **API Keys**
2. Copy your **Public Key**
3. Open [src/pages/Shop/index.js](src/pages/Shop/index.js)
4. Replace `'YOUR_EMAILJS_PUBLIC_KEY'` on line 6:
```javascript
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');  // Replace with your actual public key
```

### Step 3: Create an Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Select your email provider (Gmail, Outlook, etc.) or use **EmailJS Service**
4. Follow prompts to connect/verify your email
5. Copy the **Service ID** (looks like: `service_abc123xyz`)

### Step 4: Create an Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Name it (e.g., "Order Confirmation")
4. Use this template:

```
Subject: Order Confirmation - {{customer_name}}

---

Hello {{customer_name}},

Thank you for your order! Here are the details:

PAYMENT METHOD USED: {{payment_method}}
⚠️ CHECK YOUR BALANCE TO VERIFY PAYMENT BEFORE FULFILLING

SHIPPING ADDRESS:
{{shipping_address}}

ORDER ITEMS:
{{order_details}}

PRICING:
Subtotal: ${{subtotal}}
Tax (8%): ${{tax}}
TOTAL: ${{total}}

We appreciate your business!

---
Sent from: T-Shirt Shop
```

**Important Variables to include:**
- `{{customer_name}}`
- `{{customer_email}}`
- `{{shipping_address}}`
- `{{order_details}}`
- `{{subtotal}}`
- `{{tax}}`
- `{{total}}`
- `{{payment_method}}` (will show "Venmo", "CashApp", or "PayPal")

5. Copy the **Template ID** (looks like: `template_abc123xyz`)

### Step 5: Update Shop Component
1. Open [src/pages/Shop/index.js](src/pages/Shop/index.js)
2. On line 6, add your Public Key:
```javascript
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');
```

3. Find the `handleSubmitOrder` function (around line 187)
4. Replace service and template IDs (around lines 206-209):
```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',      // Replace with your service ID
  'YOUR_TEMPLATE_ID',     // Replace with your template ID
  emailData
);
```

---

## 💳 Payment Method Setup

### Venmo
1. Open [src/pages/Shop/index.js](src/pages/Shop/index.js)
2. Find the `handlePaymentClick` function
3. Replace `USERNAME` in this line (around line 164):
```javascript
paymentUrl = `https://venmo.com/USERNAME?txn=request&amount=${amount}&note=...`;
```
Replace `USERNAME` with your Venmo username.

**Example:**
```javascript
paymentUrl = `https://venmo.com/john-smith?txn=request&amount=${amount}&note=...`;
```

### CashApp
1. Find this line in `handlePaymentClick` (around line 169):
```javascript
paymentUrl = `https://cash.app/USERNAME/${amount}/...`;
```
Replace `USERNAME` with your CashApp handle (without the $).

**Example:**
```javascript
paymentUrl = `https://cash.app/johnsmith/${amount}/...`;
```

### PayPal
1. Find this line in `handlePaymentClick` (around line 174):
```javascript
paymentUrl = `https://paypal.me/USERNAME/${amount}`;
```
Replace `USERNAME` with your PayPal.me username.

**Example:**
```javascript
paymentUrl = `https://paypal.me/johnsmith/${amount}`;
```

---

## 🚀 How to Use

### Access the Shop
1. Add a link to the Shop page in your Navbar or navigation
2. Route: `/shop/`
3. Component: Already imported in [src/App.js](src/App.js)

### User Flow
1. **Browse Products** - View 4 t-shirts with images and prices
2. **Select Size** - Choose S, M, L, or XL
3. **Add to Cart** - Click "Add to Cart" button
4. **View Cart** - Click cart button in header or scroll to sidebar
5. **Manage Items** - Update quantities or remove items
6. **Enter Shipping** - Fill in checkout form (name, email, address)
7. **Choose Payment** - Click one of three payment buttons
8. **Complete Payment** - Opens payment app with total pre-filled
9. **Submit Order** - Click "I've Completed Payment" button
10. **Confirmation** - See success message; customer receives email

---

## 💾 localStorage Details

Cart data is automatically saved to browser localStorage under the key `tshirtCart`. 

- **Persists** across page refreshes and browser sessions
- **Format**: Array of cart items with id, name, price, size, quantity
- **Clears** after successful order submission

To test/clear:
```javascript
// In browser console:
localStorage.removeItem('tshirtCart');  // Clear cart
localStorage.getItem('tshirtCart');      // View cart data
```

---

## 🎨 Customization

### Change Product Details
Edit the `products` array in [src/pages/Shop/index.js](src/pages/Shop/index.js) (around line 29):
```javascript
const products = [
  {
    id: 1,
    name: 'Your T-Shirt Name',
    price: 29.99,
    image: 'https://your-image-url.jpg'
  },
  // ... more products
];
```

### Change Colors/Styling
Edit CSS variables in [src/pages/Shop/style.css](src/pages/Shop/style.css):
```css
:root {
  --primary-color: #2c3e50;        /* Header/main color */
  --secondary-color: #3498db;      /* Buttons/accents */
  --success-color: #27ae60;        /* Confirmation message */
  /* ... more variables ... */
}
```

### Adjust Tax Rate
In [src/pages/Shop/index.js](src/pages/Shop/index.js), line 107:
```javascript
const tax = subtotal * 0.08;  // Change 0.08 to your tax rate (e.g., 0.10 for 10%)
```

---

## 📱 Responsive Design

- **Desktop (1024px+)** - Full sidebar cart, product grid
- **Tablet (769-1023px)** - Sidebar stacks below content
- **Mobile (480-768px)** - Toggle cart modal, 2-column product grid
- **Small Mobile (<480px)** - Single column, optimized spacing

---

## ⚠️ Important Notes

1. **EmailJS Free Tier** - Allows 200 emails/month. Upgrade for more.
2. **Payment Links** - Open in new window; customer completes payment independently
3. **SSL/HTTPS** - EmailJS requires HTTPS in production
4. **Cross-Origin** - EmailJS handles CORS automatically
5. **Testing** - Use dummy data before deploying to production

---

## 🐛 Troubleshooting

### "EmailJS is not defined"
- Make sure `@emailjs/browser` is installed: `npm install @emailjs/browser --legacy-peer-deps`
- Verify import in Shop/index.js: `import emailjs from '@emailjs/browser';`

### Emails not sending
- Verify Service ID and Template ID in code
- Check EmailJS dashboard for service status
- Ensure your email provider is verified in EmailJS
- Check browser console for error messages

### Cart not persisting
- Check browser localStorage is enabled
- Verify no browser extensions are blocking it
- Clear browser cache and try again

### Payment links not opening
- Update usernames in handlePaymentClick function
- Ensure URLs are properly formatted
- Test links manually in browser first

### Form validation errors
- All fields are required before payment
- Email must be valid format
- ZIP code can be any format

---

## 📝 Environment Variables (Optional)

For added security in production, you can use environment variables:

Create `.env.local` in project root:
```
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
```

Then update Shop/index.js:
```javascript
emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

// In handleSubmitOrder:
await emailjs.send(
  process.env.REACT_APP_EMAILJS_SERVICE_ID,
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  emailData
);
```

---

## 🎉 You're All Set!

Your t-shirt shop is ready to use. Visit `/shop/` to start selling!

For questions, visit:
- [EmailJS Docs](https://www.emailjs.com/docs/)
- [EmailJS Dashboard](https://dashboard.emailjs.com/)
