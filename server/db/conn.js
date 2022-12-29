const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const uri = process.env.ATLAS_URI;

module.exports = {
  connectToServer: function () {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log('Successfully connected to MongoDB.')
      })
      .catch(err => {
        console.error(err)
      })
  },
};