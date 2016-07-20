import $ from 'jquery';
import Backbone from 'backbone';
import router from '../router';
import session from '../models/session';

const Login = Backbone.View.extend({
    tagName: 'form',
    className: 'login-form',
    events: {
        'submit': 'submitFunction'
    },
    submitFunction: function(evt) {
        evt.preventDefault();
        let username = this.$('.username').val();
        let pw = this.$('.password').val();
        //grabs value of inputs

        session.save({
            username: username,
            password: pw
            //saves data to session model
            //POST ajax request
        }, {
            success: function(model, response) {
                model.unset('password');
                //tells model to forget password info so it is not shown

                console.log('Hello! You successfully logged in!');
                router.navigate('tweetfeed', {
                    trigger: true
                });
            }
        });
    },
    template: function() {
      //holds what element will be 'stuffed' with
        return `
            <h2>Tweet the World</h2>
            <input class="username" type="text" placeholder="Enter your username">
            <input class="password" type="password" placeholder="Enter your password">
            <input class="submit" type="submit" value="Login">
    `;
  },
  render: function () {
    this.$el.html(this.template());
    //renders template into the element assigned above
    return this;
  }
});

export default Login;
