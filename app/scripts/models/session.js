import Backbone from 'backbone';
import settings from '../settings';

const Session = Backbone.Model.extend({
    urlRoot: `https://baas.kinvey.com/user/${settings.appId}/login`,
    defaults: {
        username: '',
        authtoken: '',
        name: '',
    },
    parse: function(response) {
      return {
        authtoken: response._kmd.authtoken,
        username: response.username,
        userId: response._id,
      };
    }
});

let session = new Session();

export default session;
