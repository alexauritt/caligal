Caligal.Router.map(function() {
  this.resource("calendar", function() {
    this.resource("year", function() {
      this.route("month");
    });
  });
});
