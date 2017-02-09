import { Meteor } from 'meteor/meteor';

ServiceConfiguration.configurations.upsert(
  { service: "twitter" },
  { $set: { consumerKey: Meteor.settings.private.oAuth.twitter.consumerKey, secret: Meteor.settings.private.oAuth.twitter.secret } }
);

ServiceConfiguration.configurations.upsert(
  { service: "facebook" },
  { $set: { appId: Meteor.settings.private.oAuth.facebook.appId, secret: Meteor.settings.private.oAuth.facebook.secret } }
);

ServiceConfiguration.configurations.upsert(
  { service: "google" },
  { $set: { clientId: Meteor.settings.private.oAuth.google.clientId, secret: Meteor.settings.private.oAuth.google.secret } }
);
