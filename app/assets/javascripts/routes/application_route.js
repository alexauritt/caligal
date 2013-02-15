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
    var year = this.modelFor('year').id;
    var d = new Date(year, params.month - 1);
    return Caligal.CalendarMonth.create({date: d});
  },
  renderTemplate: function() {
    this.render('month', {
      into: 'application'
    });
  }
});