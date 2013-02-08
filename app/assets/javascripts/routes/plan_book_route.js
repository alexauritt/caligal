Caligal.PlanBookRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('currentDay', new Date());
    // controller.set('currentDay', model.get('date'));
    // controller.set('content', model);
  }
});