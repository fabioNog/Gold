const restful = require('node-restful')
const mongoose = restful.mongoose
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,

  },
  password: {
    type: String,
    required: true,
  }
});

// Bycrypt para encriptar a senha
UserSchema.pre("save", function (next) {
  var user = this;
  bcrypt.genSalt(12, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

// UserSchema.methods.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.password);  
// };


// UserSchema.statics.authenticate = function (email, password, callback) {
//   User.findOne({ email: email })
//     .exec(function (err, user) {
//       if (err) {
//         return callback(err)
//       } else if (!user) {
//         var err = new Error('User not found.');
//         err.status = 401;
//         return callback(err);
//       }
//       bcrypt.compare(password, user.password, function (err, result) {
//         if (result === true) {
//           return callback(null, user);
//         } else {
//           return callback();
//         }
//       })
//     });
// }


module.exports = restful.model('UserCollections', UserSchema);
