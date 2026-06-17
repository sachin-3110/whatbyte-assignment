export const products = [
  {
    id: "running-shoes",
    title: "Running Shoes",
    price: 99,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&auto=format&fit=crop&q=85",
    description: "Premium athletic running shoes designed for maximum comfort, stability, and durability. Features a breathable mesh upper and a high-performance cushioned sole.",
    rating: 4.5,
    reviews: [
      { id: 1, name: "Alex Johnson", rating: 5, comment: "Super comfortable and light! Highly recommend.", date: "2026-05-12" },
      { id: 2, name: "Sarah Smith", rating: 4, comment: "Great running shoes. They fit true to size.", date: "2026-06-01" }
    ]
  },
  {
    id: "wireless-headphones",
    title: "Wireless Headphones",
    price: 99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=85",
    description: "Immersive over-ear wireless headphones with advanced active noise cancellation (ANC), deep bass, and up to 40 hours of battery life.",
    rating: 4.2,
    reviews: [
      { id: 1, name: "Michael Chen", rating: 4, comment: "Decent battery life and good sound quality.", date: "2026-04-15" },
      { id: 2, name: "Emma Watson", rating: 5, comment: "Noise cancellation works perfectly. Love the dark finish.", date: "2026-05-20" }
    ]
  },
  {
    id: "backpack",
    title: "Backpack",
    price: 129,
    category: "Home",
    image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=600&auto=format&fit=crop&q=85",
    description: "Minimalist urban backpack crafted from water-resistant fabric. Includes a padded laptop sleeve (fits up to 16 inches) and multiple smart compartments.",
    rating: 4.7,
    reviews: [
      { id: 1, name: "John Doe", rating: 5, comment: "Very spacious and looks sleek.", date: "2026-03-10" },
      { id: 2, name: "Clara Oswald", rating: 4, comment: "Strong straps, though it could use a water bottle side pocket.", date: "2026-04-02" }
    ]
  },
  {
    id: "smartwatch",
    title: "Smortwatch",
    price: 249,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=85",
    description: "Keep track of your health, fitness, and notifications with this premium smartwatch featuring a bright AMOLED display, blood oxygen monitoring, and 5 ATM water resistance.",
    rating: 4.6,
    reviews: [
      { id: 1, name: "Lucas Miller", rating: 4, comment: "Accurate health tracking. Interface is snappy.", date: "2026-05-25" },
      { id: 2, name: "Sophia Martinez", rating: 5, comment: "Love the custom watch faces. Battery lasts a full week!", date: "2026-06-11" }
    ]
  },
  {
    id: "sunglasses",
    title: "Sunglasses",
    price: 149,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&auto=format&fit=crop&q=85",
    description: "Classic black polarized sunglasses offering 100% UV protection. Designed with a premium acetate frame and scratch-resistant lenses.",
    rating: 4.4,
    reviews: [
      { id: 1, name: "David Beck", rating: 4, comment: "Fits perfectly. Very stylish.", date: "2026-05-02" },
      { id: 2, name: "Jessica Alba", rating: 5, comment: "Sturdy frame, very clear polarized view.", date: "2026-06-08" }
    ]
  },
  {
    id: "digital-camera",
    title: "Digital Camera",
    price: 499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&auto=format&fit=crop&q=85",
    description: "Compact digital camera featuring a 24.2 MP APS-C sensor, fast hybrid autofocus, and 4K video recording. Perfect for travel photography and vlogging.",
    rating: 4.8,
    reviews: [
      { id: 1, name: "Oliver Queen", rating: 5, comment: "Amazing quality for such a compact size.", date: "2026-04-30" },
      { id: 2, name: "Barry Allen", rating: 4, comment: "Excellent focus speed. Low light performance is clean.", date: "2026-05-18" }
    ]
  },
  {
    id: "t-shirt",
    title: "T-shirt",
    price: 29,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&auto=format&fit=crop&q=85",
    description: "Everyday crewneck t-shirt made of 100% organic cotton. Pre-shrunk, super-soft feel, and tailored fit for maximum comfort.",
    rating: 4.3,
    reviews: [
      { id: 1, name: "Bruce Wayne", rating: 4, comment: "Good quality cotton, didn't shrink in the wash.", date: "2026-05-05" },
      { id: 2, name: "Diana Prince", rating: 5, comment: "Extremely soft. Will buy in more colors.", date: "2026-05-29" }
    ]
  },
  {
    id: "smartphone",
    title: "Smartphone",
    price: 699,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=85",
    description: "Lorem ipsum dolor amet, conssectetur euisagend.",
    rating: 4.0, // 4 filled stars, 1 empty star as shown in the screenshot
    reviews: [
      { id: 1, name: "Tony Stark", rating: 4, comment: "Good features, clean screen, conssectetur euisagend indeed.", date: "2026-06-02" },
      { id: 2, name: "Peter Parker", rating: 4, comment: "Camera is neat, screen looks very modern.", date: "2026-06-14" }
    ],
    isFeatured: true // To render in double-width on desktop
  }
];
