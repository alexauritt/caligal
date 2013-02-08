Caligal.CalendarMonth = Ember.Object.extend({
  init: function() {
    this.firstDisplayed = this.get('date').beginningOfMonth().beginningOfWeek();
  }
});