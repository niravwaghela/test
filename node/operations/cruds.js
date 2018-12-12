const eventSchema = require("../models/events");
const userSchema = require("../models/user");

class Operation {
    registerEvent(value) {
        let {
            eventName,
            eventDescription,
            eventDuration,
            eventLocation,
            eventFees,
            user
        } = value;
        return new Promise((resolve, reject) => {
            let eventsmodel = new eventSchema();
            eventsmodel.eventName = eventName;
            eventsmodel.eventDescription = eventDescription;
            eventsmodel.eventDuration = eventDuration;
            eventsmodel.eventLocation = eventLocation;
            eventsmodel.eventFees = eventFees;
            eventsmodel.user = user;
            eventsmodel.save((error, eventsave) => {
                if (error) {
                    reject(error);
                    console.error(error);
                } else {
                    resolve({ success: true });
                }
            });
        });
    }

    registerUser(req) {
        let { user, email } = req;
        console.log(user , email)

        return new Promise((resolve, reject) => {
            eventSchema.find({  }, (error, user) => {
                console.log(user);
                
                // if (error) {
                //     reject(error);
                // } else {
                //     user.registerUser.push(email);
                //     user.save((error, updatedUser) => {
                //         if (error) {
                //             reject(error);
                //         } else {
                //             console.log(updatedUser);
                //             resolve(updatedUser);
                //         }
                //     });
                //     console.log(user);
                //     resolve(user.registerUser);
                // }
            });
        });
    }

    // logOut(){
    //     eventSchema.update(
    //         {user},
    //         {$set :{"isEditable":true}}
    //         ) , (error , user)

    // }

    getEvents() {
        return new Promise((resolve, reject) => {
            const event = eventSchema.find().populate("user", "email");
            resolve(event);
        })
    }
}

module.exports = Operation;
