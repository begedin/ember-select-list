import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
    return ['Item A', 'Item B', 'Item C'];
  }
});
