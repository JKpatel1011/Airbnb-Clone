const mongoose = require('mongoose');

const connectWithDB = () => {
  mongoose.set('strictQuery', false);
  mongoose
    .connect("mongodb://kakadiyaj66:Mogal@1011cluster0-shard-00-00.p7bfw.mongodb.net:27017,cluster0-shard-00-01.p7bfw.mongodb.net:27017,cluster0-shard-00-02.p7bfw.mongodb.net:27017/?replicaSet=atlas-qzsmey-shard-0&ssl=true&authSource=admin"
    )
    .then(console.log(`DB connected successfully`))
    .catch((err) => {
      console.log(`DB connection failed`);
      console.log(err);
      process.exit(1);
    });
};

module.exports = connectWithDB;
