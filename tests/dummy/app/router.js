import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
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
