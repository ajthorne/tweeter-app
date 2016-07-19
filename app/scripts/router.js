import $ from 'jquery';
import Backbone from 'backbone';
import nav from './views/nav';
import Login from './views/login';
import Signup from './views/signup';

const Router = Backbone.Router.extend({
  routes: {
    login: 'loginFunction',
    signup: 'signUpFunction',
    logout: 'logoutFunction',
    newtweet: 'newTweetFunction',
    edittweet: 'editTweetFunction',
    tweetfeed: 'feedFunction',
    '/*': 'loginFunction'
  },

  loginFunction() {
    let login = new Login();
    $('.container').empty().append(login.render().$el);

  },

  signUpFunction() {
    let signup = new Signup();
    $('.container').empty().append(signup.render().$el);

  },

  logoutFunction() {

  },

  newTweetFunction() {
    $('.container').empty().append(nav.render().$el);

  },

  editTweetFunction() {
    $('.container').empty().append(nav.render().$el);

  },

  feedFunction() {
    $('.container').empty().append(nav.render().$el);

  }

});

const router = new Router();

export default router;
