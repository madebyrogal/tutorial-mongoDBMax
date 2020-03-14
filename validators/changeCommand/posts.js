db.runCommand({
  collMod: "posts",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "text", "creator", "comments"],
      properties: {
        title: {
          bsonType: "string",
          description: "Must be a string and it is required"
        },
        text: {
          bsonType: "string",
          description: "Must be a string and it is required"
        },
        creator: {
          bsonType: "objectId",
          description: "Must be an objectId and it is required"
        },
        comments: {
          bsonType: "array",
          description: "Must be an array and it is required",
          items: {
            bsonType: "object",
            required: ["text", "author"],
            properties: {
              text: {
                bsonType: "string",
                description: "Must be a string and it is required",
              },
              author: {
                bsonType: "objectId",
                description: "Must be an objectId and it is required",
              }
            }
          }
        }
      }
    }
  },
  validationAction: "warn"
});
