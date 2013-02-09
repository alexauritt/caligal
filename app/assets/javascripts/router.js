Caligal.Router.map(function() {
  this.resource("calendar", function() {
    this.resource("year", { path: "/:year" }, function() {
      this.resource("month", { path: "/:month" }, function() {
        this.route("index");
      });
    });
  });
});
