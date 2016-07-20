import $ from 'jquery';
import Backbone from 'backbone';
import settings from '../settings';

let Tweet = Backbone.Model.extend({
  urlRoot: `https://baas.kinvey.com/appdata/${settings.appId}/tweetfeed`,
  idAttribute: '_id',
  default: {
    body: '',
  },

  parse: function(response) {
    var tempResp = response;
    tempResp.timestamp = response._kmd.lmt;
    tempResp.username = response.username;
        return tempResp;
      }
    });

export default Tweet;
