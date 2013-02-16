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
    var yearNumber = model.yearNumberOfPreviousMonth();
    var monthNumber = model.previousMonthNumber();
    var month = Caligal.CalendarMonth.create({year: yearNumber, month: monthNumber});    
    controller.set('previousMonth', month);
    
    yearNumber = model.yearNumberOfNextMonth();
    monthNumber = model.nextMonthNumber();
    month = Caligal.CalendarMonth.create({year: yearNumber, month: monthNumber});
    controller.set('nextMonth', month);

    // controller.set('year', model.year.id);
  },
  renderTemplate: function() {
    this.render('month', {
      into: 'application'
    });
  }
});