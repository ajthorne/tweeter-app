import Backbone from 'backbone';
import router from './router';
import $ from 'jquery';
import settings from './settings';
import session from './models/session';

$(document).ajaxSend(function(evt, xhrAjax, jqueryAjax) {
  if (session.get('authtoken')) {
    //if authtoken exists
    xhrAjax.setRequestHeader('Authorization', 'Kinvey ' + session.get('authtoken'));
    //Authorization pulls authtoken for that user from response
  } else {
    xhrAjax.setRequestHeader('Authorization', 'Basic ' + settings.baseAuth);
    //authorization needs user to login or sign up to get authtoken
  }
});

if (!session.username) {
  // router.navigate('login', {trigger: true});
  //not rerouting to login page

  location.hash = 'login';
  //correctly reroutes

  console.log('You need to be logged in to view content!');
}

Backbone.history.start();
//watches hashchange events
