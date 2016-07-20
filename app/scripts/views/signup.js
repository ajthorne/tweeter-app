import $ from 'jquery';
import Backbone from 'backbone';
import router from '../router';
import session from '../models/session';
import settings from '../settings';

const Signup = Backbone.View.extend({
    tagName: 'form',
    className: 'signup-form',
    events: {
        'submit': 'submitFunction'
    },
    submitFunction: function(evt) {
        evt.preventDefault();
        let name = this.$('.name').val();
        let username = this.$('.username').val();
        let password = this.$('.password').val();
        //grabs value of inputs

        session.save({
            name: name,
            username: username,
            password: password
            //saves data to session model
            //POST ajax request
        },
        { url: `https://baas.kinvey.com/user/${settings.appId}/`,
            success: function(model, response) {
                model.unset('password');
                console.log('Welcome! You successfully signed up.');
                //tells model to forget password info so it is not shown
                router.navigate('tweetfeed', {
                    trigger: true
                });
            }
        });
    },
    template: function() {
        return `
            <h2>Tweet the World</h2>
            <input class="name" type="text" placeholder="Enter a name">
            <input class="username" type="text" placeholder="Enter a username">
            <input class="password" type="password" placeholder="Enter a password">
            <input class="submit" type="submit" value="Sign Up">
    `;
  },
  render: function () {
    this.$el.html(this.template());
    return this;
  }
});

export default Signup;
