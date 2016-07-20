import $ from 'jquery';
import Backbone from 'backbone';
import nav from './views/nav';
import Login from './views/login';
import Signup from './views/signup';
import session from './models/session';
import settings from './settings';
import NewTweet from './views/newTweet';
import Feed from './views/feed';

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
    //new instance of constructor
    $('.container').empty().append(signup.render().$el);

  },

  logoutFunction() {
    session.save(null, {
      url: `https://baas.kinvey.com/user/${settings.appId}/_logout`,
      success: () => {
        session.clear();
        this.navigate('login', {trigger: true});
        console.log('You are logged out. Goodbye!');
      },
      error: () => {
        console.log('You failed to log out!');
      }
    });
    //move to nav view?
  },

  newTweetFunction() {
    let addTweet = new NewTweet();
    $('.container').empty().append(nav.render().$el).append(addTweet.render().$el);
    //renders nav element and appends to container

  },

  editTweetFunction() {
    $('.container').empty().append(nav.render().$el);

  },

  feedFunction() {
    let tweetsView = new Feed();
    $('.container').empty().append(nav.render().$el).append(tweetsView.render().$el);

  }

});

const router = new Router();

export default router;
