// example 1
db.scores.find(
  { results: { $elemMatch: { $gte: 80, $lt: 85 } } }
);

// example 2
db.survey.find(
  { results: { $elemMatch: { product: "xyz", score: { $gte: 8 } } } }
);

// example 3
db.survey.find(
  { results: { $elemMatch: { product: "xyz" } } }
);

db.survey.find(
  { "results.product": "xyz" }
);