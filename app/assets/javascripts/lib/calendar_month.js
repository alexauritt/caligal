Caligal.CalendarMonth = Ember.Object.extend({
  init: function() {
    var d = this.get('date');
    this.firstDisplayed = d.beginningOfMonth().beginningOfWeek();
    this.monthName = d.monthName();
    this.year = d.getFullYear();
    this.id = parseInt(d.getMonth()) + 1;
  }
});
