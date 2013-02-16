describe("Caligal.CalendarWeek", function() {
  var weekOfMay_14_2013 = Caligal.CalendarWeek.create({date: new Date(2013, 4, 14)});
  var weekOfMarch_1_2012 = Caligal.CalendarWeek.create({date: new Date(2013, 2)});

  describe('firstDay', function() {
    it('should be previous sunday', function() {
      var firstDay = weekOfMay_14_2013.firstDay();
      
      expect(firstDay.getDay()).toEqual(0); // should be a sunday
      expect(firstDay.getDate()).toEqual(12); // 14th is Tues, so last Sunday was 12th
    });
  });
});
