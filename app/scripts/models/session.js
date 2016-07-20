import Backbone from 'backbone';
import settings from '../settings';

const Session = Backbone.Model.extend({
    urlRoot: `https://baas.kinvey.com/user/${settings.appId}/login`,
    defaults: {
        username: '',
    },
    parse: function(response) {
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

export default session;
