import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('index', {path: ''});
  this.route('sessions.new', {path: '/signin'});
  this.route('editor');

  this.route('projects', function() {
    this.route('index', {path: '/'});
    this.route('new', {path: '/new'});
    this.route('detail', {path: '/:project_id'});
  });
});

export default Router;
