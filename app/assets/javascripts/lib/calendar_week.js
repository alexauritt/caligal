Caligal.CalendarWeek = Ember.Object.extend({
  init: function() {
    this.days = [];
    var firstDay = this.date.beginningOfWeek();
    this.days.push(firstDay);
    for (var i = 1; i < 7; i++) {
      var nextDay = new Date(firstDay.getTime());
      nextDay.setDate(firstDay.getDate() + i);
      this.days.push(nextDay);
    }
  },
  firstDay: function() {
    return this.days[0];
  },
  lastDay: function() {
    return this.days[6];
  }
});