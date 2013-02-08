Caligal.PlanBookRoute = Ember.Route.extend({
  model: function() {
    var day = new Date();
    return Caligal.CalendarMonth.create({date: day});
  },
  setupController: function(controller, model) {
    controller.set('currentDay', model.get('date'));
    controller.set('content', model);
  }
});