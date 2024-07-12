const Route = use("Route");

Route.post("/products", "ProductController.newProduct");
Route.get("/products", "ProductController.getAllProducts");
