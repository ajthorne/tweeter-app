import $ from 'jquery';
import Backbone from 'backbone';
import tweetsCollection from '../collections/tweets';
import FeedTweetView from './feedTweetView';

const Feed = Backbone.View.extend({
    initialize: function () {
      tweetsCollection.fetch({
        data: {resolve: 'creator'}
      });
      // console.log(tweetsCollection);
      tweetsCollection.on('update ', () => {
        this.render();
        //tweets are fetched but need to be added to view since page has rendered
      });
    },
    tagName: 'div',
    className: 'feed-container',
    template: function() {
        return `
    <h2>What's happening?</h2>
    <ul class="feed-list">
    </ul>`;
    },
    render: function() {
        this.$el.html(this.template());

        //forEach function for all tweets posted
        tweetsCollection.forEach((tweet) => {
          // console.log(tweet);
            let feedTweet = new FeedTweetView({
              //new instance of individual tweet view
                model: tweet
                //model is being passed through params
            });

            feedTweet.render();
            this.$('.feed-list').append(feedTweet.$el);
        });
        return this;
    }
});

export default Feed;
