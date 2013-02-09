Caligal.YearRoute = Ember.Route.extend({
  model: function(params) {
    return { year: params.year };
  },
  setupController: function(controller, model) {
    controller.set('year', model.year);
  }
});

Caligal.YearIndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('name', 'alex');
  }
});

// Caligal.ApplicationRoute = Ember.Route.extend({
// });
// 
// Caligal.CalendarRoute = Ember.Route.extend({
//   // redirect: function() {
//   //   this.transitionTo("year.month", {id:3});
//   // }
// });
// 
// Caligal.CalendarYearRoute = Ember.Route.extend({
//   model: function(params) {
//     return {
//       id: params.year
//     };
//   }
// });
// 
// Caligal.YearMonthRoute = Ember.Route.extend({
//   model: function(params) {
//     return {
//       id: params.month
//     };
//   }
// });