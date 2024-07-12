"use strict";

const Product = use("App/Models/Product");

class ProductController {
  async newProduct({ request, response }) {
    const { title, price, quantity, description } = request.all();

    try {
      const product = await Product.create({
        title,
        price,
        quantity,
        description,
      });
      return response
        .status(201)
        .json({ message: "Product created successfully", product });
    } catch (error) {
      console.error("Error creating product:", error);
      return response
        .status(500)
        .json({ message: "Error creating product", error: error.message });
    }
  }

  async getAllProducts({ response }) {
    try {
      const products = await Product.all();
      return response.status(200).json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      return response
        .status(500)
        .json({ message: "Error fetching products", error: error.message });
    }
  }
}

module.exports = ProductController;
