db.friends.aggregate([
  {
    $project: {
      _id: 0,
      scores: {
        $filter: {
          input: '$examScores',
          as: 'item',
          cond: { $gt: ['$$item.score', 60] }
        }
      }
    }
  }
]).pretty();
