Caligal.CalendarMonth = Ember.Object.extend({
  init: function() {
    var d = this.get('date');
    
    // if no date is specifed, define by year and month
    if (d === undefined) {
      this.month = this.get('month');
      this.year = this.get('year');
      d = new Date(this.year, parseInt(this.month) - 1);
    }
    else {
      this.month = parseInt(d.getMonth()) + 1;
      this.year = d.getFullYear();
    }
    
    this.firstDisplayed = d.beginningOfMonth().beginningOfWeek();
    this.monthName = d.monthName();
    this.year = Caligal.CalendarYear.create({year: d.getFullYear()});
    this.id = parseInt(d.getMonth()) + 1;      
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
  }
});