describe("Caligal.CalendarYear", function() {
  var y2013 = Caligal.CalendarYear.create({date: new Date(2013, 1)});
  var y2012 = Caligal.CalendarYear.create({year: 2012});

  it("initializes with date object", function() {
    expect(y2013.get('year')).toEqual(2013);
  });
  
  it('initializes with year', function() {
    expect(y2012.get('year')).toEqual(2012);
  });
});