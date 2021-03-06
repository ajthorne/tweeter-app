import Backbone from 'backbone';
import $ from 'jquery';

const Nav = Backbone.View.extend({
  tagName: 'nav',
  template: function () {
    return `
    <i class="fa fa-twitter" id="twitter-icon"></i>
    <a href="#newtweet">Compose Tweet</a> |
    <a href="#tweetfeed">See all Tweets</a> |
    <a class="logout" href="#logout">Logout</a>`;
  },
  render: function () {
    this.$el.html(this.template());
    return this;
  }
  //set logout function --currently in router constructor
});

let nav = new Nav();

export default nav;
