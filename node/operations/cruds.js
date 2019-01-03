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
                            resolve(updatedUser);
                        }
                    });
                }
            });
        });
    }

    deleteEvent(req) {
        let { eventId } = req;
        return new Promise((resolve, reject) => {
            eventSchema.deleteOne({ _id: eventId }, (error, event) => {
                if (error) {
                    reject(error);
                } else {

                    resolve({success:true, message:"Event Deleted Successfully"});
                }
            });
        });
    }

    editEvent(req) {
        let { eventId } = req;
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
        let { loggedInId } = req;

        return new Promise((resolve, reject) => {
            eventSchema.find({ user: loggedInId }, (error, event) => {

                resolve(event);
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
