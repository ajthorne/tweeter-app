import $ from 'jquery';
import Backbone from 'backbone';
import tweetsCollection from '../collections/tweets';
import Tweet from '../models/tweet';

const EditTweet = Backbone.View.extend({
  //editing tweet should take user to that tweet id
  //user should edit the text area val
  //submitting the edit should put/update the tweet on the server
  initialize: function (id) {
    console.log(id);
    console.log(tweetsCollection.get(id));
    //coming up undefined --I don't understand why. the id is being passed through
  },
  tagName: 'form',
  className: 'edit-form',
  events: {
    'submit': 'submitEditFunction'
  },

  submitEditFunction: function () {

  },
  template: function () {
    // return `<h2>Edit a Tweet</h2>
    // <textarea class="tweet-body" placeholder="What's on your mind?">${this.model.get('body')}</textarea>
    // <input type="submit" value="Edit it!">`;
  },
  render: function () {
    this.$el.html(this.template());
    return this;
  }

});

export default EditTweet;
