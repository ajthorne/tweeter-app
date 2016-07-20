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
    if (this.model.get('username') === session.get('username')) {
      // console.log(this.model.get('username'));
      deleteBtns = `<input class="delete" type="button" value="Delete">
                    <input class="edit" type="button" value="Edit">`;
    }

    return `
    <span class="individual-body">${this.model.get('body')}</span>
    <span class="individual-author">${this.model.get('username')}</span>
    <time class="individual-timestamp">${moment(this.model.get('timestamp')).format('MMMM Do, YYYY h:mm a')}</time>
    <span class="options">${deleteBtns}</span>`;
  },

  events: {
    'click .delete': 'deleteFunction',
    'click .edit': 'editFunction'

  },

  deleteFunction: function () {
    this.model.destroy();
    console.log('You deleted this tweet!');
  },

  editFunction: function () {
    router.navigate('edittweet', {trigger: true});
    console.log('Changing it up..');

  },

  render: function () {
    this.$el.html(this.template());
  }
});

export default FeedTweetView;
