// Remova o primeiro restaurante que possua culinária do tipo Ice Cream, Gelato, Yogurt, Ices.
db.restaurants.deleteOne({ cuisine: "Ice Cream, Gelato, Yogurt, Ices" });

// Remova todos os restaurantes que possuem culinária do tipo American .
db.restaurants.deleteMany({ cuisine: "American" });
