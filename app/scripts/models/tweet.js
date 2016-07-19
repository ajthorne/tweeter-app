import $ from 'jquery';
import Backbone from 'backbone';

let Tweet = Backbone.Model.extend({
  urlRoot: `https://baas.kinvey.com/appdata/${settings.appId}/tweetfeed`,
  idAttribute: '_id',
  default: {
    body: ''
  },

  parse: function(response) {
        return {
          timestamp: response._kmd.lmt
        };
      }
    });

export default Tweet;
