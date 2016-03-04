import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sessions.new', {path: ''});
  this.route('editor');

  this.route('projects', function() {
    this.route('index', {path: ''});
  });
});

export default Router;
