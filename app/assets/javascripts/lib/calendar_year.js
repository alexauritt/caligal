Caligal.CalendarYear = Ember.Object.extend({
  init: function() {
    var d = this.get('date');

    // if no date is specifed, define by year
    if (d === undefined) {
      this.year = this.get('year');
      d = new Date(this.year, 1);
    }
    else {
      this.year = d.getFullYear();
    }
    this.id = parseInt(d.getFullYear());
  }
});