// Make DB for lookUpData
// Users collections
db.users.insertMany([
  {
    name: 'John Doe' //ObjectId("5f06c05395c1bb3d6fda3cf8")
  },
  {
    name: 'Mark Zuckerberg' //ObjectId("5f06c05395c1bb3d6fda3cf9")
  },
  {
    name: 'Johnny Deep' //ObjectId("5f06c05395c1bb3d6fda3cfa")
  },
]);

db.products.insertMany([
  {
    name: 'Ball' //ObjectId("5f06c0b595c1bb3d6fda3cfb")
  },
  {
    name: 'Car' //ObjectId("5f06c0b595c1bb3d6fda3cfc")
  },
  {
    name: 'Game' //ObjectId("5f06c0b595c1bb3d6fda3cfd")
  },
]);

db.orders.insertMany([
  { //ObjectId("5f06c17d95c1bb3d6fda3cfe")
    userId: ObjectId("5f06c05395c1bb3d6fda3cf8"),
    productId: ObjectId("5f06c0b595c1bb3d6fda3cfb"),
  },
  { //ObjectId("5f06c17d95c1bb3d6fda3cff")
    userId: ObjectId("5f06c05395c1bb3d6fda3cf9"),
    productId: ObjectId("5f06c0b595c1bb3d6fda3cfc"),
  },
]);


db.orders.aggregate([
  {
    $lookup: {
      from: 'users',
      localField: 'userId',
      foreignField: '_id',
      as: 'user',
    },
  },
  {
    $lookup: {
      from: 'products',
      localField: 'productId',
      foreignField: '_id',
      as: 'product',
    },
  },
]).pretty();

