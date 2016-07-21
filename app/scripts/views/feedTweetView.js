import $ from 'jquery';
import Backbone from 'backbone';
import moment from 'moment';
import session from '../models/session';
import router from '../router';

const FeedTweetView = Backbone.View.extend({
  tagName: 'li',
  className: 'individual-tweet',
  template: function() {
    let deleteBtns = '';
    //shows as empty space unless it matches criteria below
    if (this.model.get('username') === session.get('username')) {
      //if user that is logged in equals the user who wrote it then...
      deleteBtns = `<input class="delete" type="button" value="Delete">
                    <input class="edit" type="button" value="Edit">`;
    }

    return `
    <span class="individual-author">${this.model.get('username')}</span>
    <time class="individual-timestamp">${moment(this.model.get('timestamp')).format('MMMM Do, YYYY h:mm a')}</time>
    <span class="individual-body">${this.model.get('body')}</span>
    <span class="options">${deleteBtns}</span>`;
  },

  events: {
    'click .delete': 'deleteFunction',
    'click .edit': 'editFunction'

  },

  deleteFunction: function () {
    this.model.destroy();
    //destroys tweet that was clicked on
    console.log('You deleted this tweet!');
  },

  editFunction: function (id) {
    router.navigate(`edittweet/${session.get('userId')}`, {trigger: true});
    //reroutes user to edit page
    //grabbing id of tweet which was stored when it was created through parse function
    console.log('Changing it up..');
  },

  render: function () {
    this.$el.html(this.template());
  }
});

export default FeedTweetView;
