const Route = use("Route");

Route.post("/POST/products", "ProductController.newProduct");
Route.get("/products", "ProductController.getAllProducts");
