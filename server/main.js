import { Meteor } from 'meteor/meteor';
import { Messages } from "../imports/api/message/collections";
import '../imports/startup/server/index.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('messages', function () {
  return Messages.find();
});
