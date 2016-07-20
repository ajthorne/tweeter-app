import Backbone from 'backbone';
import settings from '../settings';

const Session = Backbone.Model.extend({
    urlRoot: `https://baas.kinvey.com/user/${settings.appId}/login`,
    defaults: {
        username: '',
    },
    parse: function(response) {
      //parses through response to store data below to keep and access for later if needed
      if (response) {
      return {
        authtoken: response._kmd.authtoken,
        username: response.username,
        userId: response._id,
        name: response.name
      };
    }
  }
});

let session = new Session();
//only one session at a time so instance of constructor should be built here

//build localstorage

export default session;
