const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// GET all products
router.get("/", async (req, res) => {
  try {
    let products = await Product.find();
    
    // If no products exist, create sample products
    if (products.length === 0) {
      const sampleProducts = [
        { name: "Mobile", price: 15000, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop" },
        { name: "Laptop", price: 45000, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop" },
        { name: "Headphones", price: 2000, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop" },
        { name: "Smart Watch", price: 8000, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop" },
        { name: "Camera", price: 35000, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=300&fit=crop" },
        { name: "Tablet", price: 25000, image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=300&h=300&fit=crop" }
      ];
      
      await Product.insertMany(sampleProducts);
      products = await Product.find();
    }
    
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
