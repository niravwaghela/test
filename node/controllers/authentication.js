const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

class Controls {
    generatePassword(password) {
        return bcrypt.hash(password, 10);
    }

    login(value) {
        let userData = value;
        return new Promise((resolve, reject) => {
            User.findOne({ email: userData.email }, (error, user) => {
                if (error) {
                    console.log(error);
                    reject({
                        status: "error",
                        message: error
                    });
                } else {
                    if (!user) {
                        reject({
                            meassage: "invalid email"
                        });
                    } else {
                        let cnpass = bcrypt.compareSync(
                            userData.password,
                            user.password
                        );
                        if (cnpass) {
                             let payload = {subject: user._id }
                             let token = jwt.sign(payload, 'itiswhatitis')
                            resolve({
                                "id": user._id,
                                success: true,
                                token
                            });
                        } else {
                            reject({
                                success: false,
                                message: "password did not match"
                            });
                        }
                    }
                }
            });
        });
    }

    signUp(value) {
        let { firstName, lastName, email, password } = value;
        return new Promise((resolve, reject) => {
            User.countDocuments({ email }, (err, count) => {
                if (count > 0) {
                    reject({
                        message: "user already exists"
                    });
                } else {
                    let user = new User();
                    user.firstName = firstName;
                    user.lastName = lastName;
                    user.email = email;
                    this.generatePassword(password)
                        .then(hash => {
                            user.password = hash;
                            return user;
                        })
                        .then(user => {
                            user.save((error, registeredUser) => {
                                if (error) {
                                    reject(error);
                                    console.error(error);
                                } else {
                                    //  let payload = { subject: registeredUser._id };
                                    //  let token = jwt.sign(payload, "itiswhatitis");
                                    resolve({
                                        success: true
                                    });
                                }
                            });
                        });
                }
            });
        });
    }
}
module.exports = Controls;
