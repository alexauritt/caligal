Caligal.CalendarWeek = Ember.Object.extend({
  firstDay: function() {
    return this.date.beginningOfWeek();
  }
});