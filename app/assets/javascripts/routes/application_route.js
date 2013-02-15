Caligal.CalendarIndexRoute = Ember.Route.extend({
  redirect: function() {
    var today = new Date();
    var year = Ember.Object.create({id: today.getFullYear()});
    var month = Ember.Object.create({id: parseInt(today.getMonth()) + 1});
    this.transitionTo('month.index', year, month);
  }
});


Caligal.YearRoute = Ember.Route.extend({
  model: function(params) {
    return { id: params.year };
  }
});

Caligal.MonthRoute = Ember.Route.extend({
  model: function(params) {
    return { id: params.month };
  },
  renderTemplate: function() {
    this.render('month', {
      into: 'application'
    });
  }
});

// Caligal.MonthIndexRoute = Ember.Route.extend({
//   model: function(params) {
//     return { 
//       anotherMonth: Ember.Object.create({id: 20}),
//       anotherYear: Ember.Object.create({id: 2012})
//     };
//   }  
// });
