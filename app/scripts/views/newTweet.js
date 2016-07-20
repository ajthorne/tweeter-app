import $ from 'jquery';
import Backbone from 'backbone';
import tweetsCollection from '../collections/tweets';
import router from '../router';
import session from '../models/session';

const NewTweet = Backbone.View.extend({
    tagName: 'form',
    className: 'new-tweet',
    template: function() {
        return `
    <h2>Compose a Tweet</h2>
    <textarea class="tweet-body" placeholder="What's on your mind?"></textarea>
    <input type="submit" value="Tell it!">`;
    },

    events: {
      'submit': 'submitTweetFunction'
      //when user clicks submit or presses enter
    },

    submitTweetFunction: function(evt) {
      evt.preventDefault();
      let body = this.$('.tweet-body').val();

      tweetsCollection.create({
        //adds new tweet to collection
          body: body,
          username: session.get('username')
      }, {
          success: function(response) {
              console.log('Yay, new tweet added!');
              router.navigate('tweetfeed', {
                  trigger: true
              });
          },
          error: function() {
              console.log('Boo! New tweet failed to post');
          }
      });
    },

    render: function() {
        this.$el.html(this.template());
        return this;
    }
});

export default NewTweet;
