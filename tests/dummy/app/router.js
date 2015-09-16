import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('strings', function() {
    this.route('one-way');
    this.route('two-way');
    this.route('prompt');
  });
  this.route('objects', function() {
    this.route('one-way');
    this.route('two-way');
    this.route('prompt');
  });
});

export default Router;
