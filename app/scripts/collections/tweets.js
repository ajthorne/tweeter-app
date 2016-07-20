import Backbone from 'backbone';
import $ from 'jquery';
import Tweet from '../models/tweet';
import settings from '../settings';


const Tweets = Backbone.Collection.extend({
  url: `https://baas.kinvey.com/appdata/${settings.appId}/tweetfeed`,
  model: Tweet
});

let tweetsCollection = new Tweets();

export default tweetsCollection;
