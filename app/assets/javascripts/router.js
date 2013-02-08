Caligal.Router.map(function() {
  this.resource("plan_book", function() {
    this.resource("calendar_month", { path: '/:year/:month'});
  });
});
