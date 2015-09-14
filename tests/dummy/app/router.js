import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('string-array');
  this.route('object-array');
  this.route('two-way-object-array');
  this.route('two-way-string-array');
  this.route('prompt-string-array');
  this.route('prompt-object-array');
});

export default Router;
