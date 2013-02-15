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
    this.year = d.getFullYear();
    this.id = parseInt(d.getMonth()) + 1;      
  },
  previousMonth: function() {
   if (this.month === 1) {
     return 12;
   }
   return this.month - 1;
  },
  nextMonth: function() {
    if (this.month === 12) {
      return 1;
    }
    return this.month + 1;
  },
  yearOfPreviousMonth: function() {
    if (this.month === 1) {
      return this.year - 1;
    }
    return this.year;
  },
  yearOfNextMonth: function() {
    if (this.month === 12) {
      return this.year + 1;
    }
    return this.year;
  }
});
