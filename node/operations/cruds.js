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
        console.log(user);
        
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
        let { loggedInUser, eventUser } = req;

        return new Promise((resolve, reject) => {
            eventSchema.findOne({ user: eventUser }, (error, event) => {
                if (error) {
                    reject(error);
                } else {

                    event.registerUser.forEach(function(message) {
                        Object.keys(message).forEach(function(prop) {    
                            console.log(prop + " = " + message[prop]);
                        });
                    });



                    event.registerUser.forEach(function(element) {
                        if (element === loggedInUser) {
                            reject({ error: "already registered" });
                        }
                    });

                    event.registerUser.push(loggedInUser);
                    event.save((error, updatedUser) => {
                        if (error) {
                            reject(error);
                        } else {
                            console.log(updatedUser);
                            resolve(updatedUser);
                        }
                    });
                }
            });
        });
    }
    editEvent(req) {
        let { eventId } = req;
        console.log(eventId);
        return new Promise((resolve, reject) => {
            eventSchema.findOne({ _id: eventId }, (error, event) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(event);
                }
            });
        });
    }

    myEvents(req) {
        let { loggedInId,
        firstName,
    lastName } = req;

        return new Promise((resolve, reject) => {
            eventSchema.find({ user: loggedInId }, (error, event) => {
                console.log(event);
                
                resolve(event,firstName,lastName)
            });
        });
    }

    getEvents() {
        return new Promise((resolve, reject) => {
            const event = eventSchema.find().populate("user", "email");
            resolve(event);
        });
    }
}

module.exports = Operation;
