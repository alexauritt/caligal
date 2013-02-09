Caligal.YearRoute = Ember.Route.extend({
  model: function(params) {
    return { year: params.year };
  }
});

Caligal.MonthRoute = Ember.Route.extend({
  model: function(params) {
    return { month: params.month };
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