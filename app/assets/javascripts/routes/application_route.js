Caligal.CalendarIndexRoute = Ember.Route.extend({
  redirect: function() {
    var today = new Date();
    var year = Caligal.CalendarYear.create({year: today.getFullYear()});
    var month = Caligal.CalendarMonth.create({date: today});
    this.transitionTo('month.index', year, month);
  }
});

Caligal.YearRoute = Ember.Route.extend({
  model: function(params) {
    return Caligal.CalendarYear.create({year: params.year});
  }
});

Caligal.MonthRoute = Ember.Route.extend({
  model: function(params) {
    var yearNumber = this.modelFor('year').id;
    var date = new Date(yearNumber, params.month - 1);
    return Caligal.CalendarMonth.create({date: date});
  },
  setupController: function(controller, model) {
    var yearNumber = model.yearOfPreviousMonth().id;
    var month = model.previousMonthNumber();
    var caliMonth = Caligal.CalendarMonth.create({year: yearNumber, month: month});    
    controller.set('previousMonth', caliMonth);
    
    year = model.yearOfNextMonth().year;
    month = model.nextMonthNumber();
    caliMonth = Caligal.CalendarMonth.create({year: year, month: month});
    controller.set('nextMonth', caliMonth);
    controller.set('year', model.year.id);
  },
  renderTemplate: function() {
    this.render('month', {
      into: 'application'
    });
  }
});