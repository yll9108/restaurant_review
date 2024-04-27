/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = "RESTAURANT_REVIEWS";

// Create a new database.
use(database);

// Create a new collection.
// db.createCollection(collection);
db.USERS.insertMany([
  {
    // _id: "0001",
    user_name: "masa",
    user_picture: "",
    user_email: "masa@gmail.com",
    user_password: "1111",
    user_favorite_restaurant: [{}],
  },
  {
    // _id: "0002",
    user_name: "yen",
    user_picture: "",
    user_email: "yen@gmail.com",
    user_password: "2222",
    user_favorite_restaurant: [{}],
  },
]);

db.USERS.findMany();
// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
