describe("Caligal.CalendarMonth", function() {
  var feb2013 = Caligal.CalendarMonth.create({date: new Date(2013, 1)});
  var march2012 = Caligal.CalendarMonth.create({year: 2012, month: 3});
  var jan2000 = Caligal.CalendarMonth.create({year: 2000, month: 1});
  
  describe("initialization by date object", function() {
    it("returns correct year", function() {
      expect(feb2013.get('year')).toEqual(2013);
    });
    
    it('returns correct month', function() {
      expect(feb2013.get('month')).toEqual(2);
    });
  });
  
  describe("initialization by month and year", function() {
    it('returns correct year', function() {
      expect(march2012.get('year')).toEqual(2012);
    });
  });
  
  describe('previousMonth', function() {
    it('works for march', function() {
      expect(march2012.previousMonth()).toEqual(2);
    });
    
    it('works for jan', function() {
      expect(jan2000.previousMonth()).toEqual(12);
    });
  });
  
  describe('yearOfPreviousMonth', function() {
    it('works for jan', function() {
      expect(jan2000.yearOfPreviousMonth()).toEqual(1999);
    });
    
    it('works for march', function() {
      expect(march2012.yearOfPreviousMonth()).toEqual(2012);
    });
  });
});