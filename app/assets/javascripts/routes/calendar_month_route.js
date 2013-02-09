// Caligal.CalendarMonthRoute = Ember.Route.extend({
//   buildDateFrom: function(params) {
//     return new Date(parseInt(params.year), parseInt(params.month) - 1, 1, 0, 0, 0, 0);
//   },
//   model: function(params) {
//     return Caligal.CalendarMonth.create({ date: this.buildDateFrom(params) });
//   }
// });