Caligal.CalendarMonth = Ember.Object.extend({
  init: function() {
    var d = this.get('date');
    
    // if no date is specifed, define by year and month
    if (d === undefined) {
      this.month = this.get('month');
      this.year = this.get('year');
      d = this.date = new Date(this.year, parseInt(this.month) - 1), 1;
    }
    else {
      d.setDate(1);
      this.month = parseInt(d.getMonth()) + 1;
      this.year = d.getFullYear();
    }
    
    this.firstDisplayed = d.beginningOfMonth().beginningOfWeek();
    this.monthName = d.monthName();
    this.year = Caligal.CalendarYear.create({year: d.getFullYear()});
    this.id = parseInt(d.getMonth()) + 1;
    
    this.weeks = this.buildCalendarWeeks();
  },
  previousMonthNumber: function() {
   if (this.month === 1) {
     return 12;
   }
   return this.month - 1;
  },
  nextMonthNumber: function() {
    if (this.month === 12) {
      return 1;
    }
    return this.month + 1;
  },
  yearNumberOfPreviousMonth: function() {
    if (this.month === 1) {
      return this.year.id - 1;
    }
    return this.year.id;
  },
  yearNumberOfNextMonth: function() {
    if (this.month === 12) {
      return this.year.id + 1;
    }
    return this.year.id;
  },
  buildCalendarWeeks: function() {
    var currentWeekStartDay = this.firstDisplayed;
    var currentMonth = this.date.getMonth();
    var weekList = [];

    while(currentWeekStartDay.getMonth() != (this.nextMonthNumber() - 1)) {
      weekList.push(Caligal.CalendarWeek.create({date: currentWeekStartDay}));
      currentWeekStartDay.setDate(currentWeekStartDay.getDate() + 7);
    }
    
    return weekList;
  }
});