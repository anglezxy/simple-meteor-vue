import { Meteor } from 'meteor/meteor';
import { Messages } from '../../api/message/collections.js'

Meteor.methods({
  addMessage(message) {
    Messages.insert({
      message,
      date: new Date(),
    });
  },
  removeMessage(_id) {
    Messages.remove(_id);
  }
});
