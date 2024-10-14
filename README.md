# Kahf Landing Page

Welcome to the **Kahf Landing Page** repository! This project is a modern, responsive landing page built using **Next.js**, **React**, and various other technologies to showcase Kahf's premium range of men's grooming products. The landing page features product highlights, testimonials, FAQs, and seamless navigation to enhance user experience and drive conversions.

## Table of Contents

- [Kahf Landing Page](#kahf-landing-page)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Demo](#demo)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Usage](#usage)
    - [Building for Production](#building-for-production)
    - [Deployment](#deployment)
  - [Project Structure](#project-structure)
  - [Dependencies](#dependencies)
    - [Installed Packages](#installed-packages)
  - [Customization](#customization)
    - [Adding New Products](#adding-new-products)
    - [Updating Testimonials](#updating-testimonials)
    - [Styling](#styling)
    - [Adding New Sections](#adding-new-sections)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- **Responsive Design:** Optimized for desktop, tablet, and mobile devices.
- **Smooth Scrolling:** Navigate between sections effortlessly.
- **Product Carousel:** Showcase multiple products with images and videos.
- **Interactive Elements:** Animated components using Framer Motion.
- **FAQ Section:** Expandable questions for better user engagement.
- **Testimonials:** Display genuine customer feedback.
- **Social Proof:** Certifications, ratings, and influencer endorsements.
- **Call to Action (CTA):** Multiple CTAs to drive conversions.
- **SEO Optimized:** Structured for better search engine visibility.
- **Accessibility:** Built with accessibility best practices in mind.

## Demo

Check out the live demo [here](https://your-live-demo-link.com).

## Installation

Follow these steps to set up the project locally:

### Prerequisites

- **Node.js** (v14 or later)
- **npm** or **yarn**

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/kahf-landing-page.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd kahf-landing-page
   ```

3. **Install Dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

4. **Run the Development Server**

   Using npm:

   ```bash
   npm run dev
   ```

   Or using yarn:

   ```bash
   yarn dev
   ```

5. **Open in Browser**

   Visit [http://localhost:3000](http://localhost:3000) to view the landing page.

## Usage

### Building for Production

To build the project for production, run:

Using npm:

```bash
npm run build
```

Using yarn:

```bash
yarn build
```

Then, start the production server:

Using npm:

```bash
npm start
```

Using yarn:

```bash
yarn start
```

### Deployment

You can deploy the Next.js application to platforms like Vercel, Netlify, or any other hosting provider that supports Next.js.

## Project Structure

```
kahf-landing-page/
├── public/
│   ├── kahf-logo.png
│   ├── kahf-face-wash.png
│   ├── kahf-face-wash-2.jpg
│   ├── kahf-face-wash-3.jpg
│   ├── kahf-face-wash-4.jpg
│   ├── kahf-face-wash-twin.jpg
│   ├── kahf-eau-de-toilette.png
│   ├── kahf-sunscreen.jpg
│   ├── kahf-deodorant.png
│   ├── kahf-hero-image.jpg
│   └── testimonial.jpg
├── components/
│   └── (Optional: Reusable components)
├── pages/
│   └── index.tsx
├── styles/
│   ├── globals.css
│   └── (Optional: Additional CSS files)
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## Dependencies

The project utilizes the following main dependencies:

- **React & Next.js:** Core framework for building the landing page.
- **Framer Motion:** For animations and interactive UI elements.
- **React Slick:** Carousel component for showcasing products.
- **Lucide React:** Icon library for consistent and scalable icons.
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
- **Slick Carousel CSS:** Required styles for React Slick.

### Installed Packages

```json
{
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "framer-motion": "^6.2.8",
    "react-slick": "^0.29.0",
    "slick-carousel": "^1.8.1",
    "lucide-react": "^0.215.0",
    "tailwindcss": "^3.2.4"
  },
  "devDependencies": {
    "@types/react": "^18.0.28",
    "@types/node": "^18.11.18",
    "typescript": "^4.9.5"
  }
}
```

## Customization

### Adding New Products

To add new products to the landing page, update the `products` array in the `KahfLandingPage` component within `pages/index.tsx`. Each product object should include the following properties:

- `name`: Name of the product.
- `price`: Discounted price.
- `originalPrice`: Original price before discount.
- `sold`: Number of units sold.
- `rating`: Product rating.
- `reviews`: Number of reviews.
- `image`: Path to the product image.
- `link`: Purchase link.

Example:

```javascript
const products = [
  {
    name: "Kahf New Product 1",
    price: 50000,
    originalPrice: 55000,
    sold: "5 ribu+",
    rating: 4.8,
    reviews: 1500,
    image: "/kahf-new-product-1.png",
    link: "https://tokopedia.link/newproduct1"
  },
  // Add more products here
]
```

### Updating Testimonials

Modify the `testimonials` array in the `KahfLandingPage` component to add or update customer testimonials.

Example:

```javascript
const testimonials = [
  {
    name: "John Doe",
    role: "Entrepreneur",
    testimonial: "Kahf products have transformed my skincare routine!",
    image: "/john-doe.jpg"
  },
  // Add more testimonials here
]
```

### Styling

The project uses **Tailwind CSS** for styling. To customize styles, edit the `tailwind.config.js` file and `globals.css` in the `styles` directory.

### Adding New Sections

To add new sections to the landing page, create new `<section>` elements within the `KahfLandingPage` component and style them accordingly using Tailwind CSS and Framer Motion for animations.

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. **Fork the Repository**

2. **Create a New Branch**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit Your Changes**

   ```bash
   git commit -m "Add your feature"
   ```

4. **Push to the Branch**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a Pull Request**

## License

This project is licensed under the [MIT License](LICENSE).