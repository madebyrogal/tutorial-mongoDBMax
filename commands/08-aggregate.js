db.friends.aggregate([
  { $project: { _id: 0, examScore: { $slice: [ '$examScore', 1 ] } } }
]).pretty();
