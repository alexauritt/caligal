Caligal.CalendarIndexRoute = Ember.Route.extend({
  redirect: function() {
    var today = new Date();
    var year = Ember.Object.create({id: today.getFullYear()});
    var month = Caligal.CalendarMonth.create({date: today});
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
  setupController: function(controller, model) {
    var year = model.yearOfPreviousMonth().year;
    var month = model.previousMonth();
    var caliMonth = Caligal.CalendarMonth.create({year: year, month: month});
    controller.set('previousMonth', caliMonth);
  },
  renderTemplate: function() {
    this.render('month', {
      into: 'application'
    });
  }
});