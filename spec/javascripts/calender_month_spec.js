describe("Caligal.CalendarMonth", function() {
  var feb2013 = Caligal.CalendarMonth.create({date: new Date(2013, 1, 10)});
  var march2012 = Caligal.CalendarMonth.create({year: 2012, month: 3});
  var jan2000 = Caligal.CalendarMonth.create({year: 2000, month: 1});
  var nov2010 = Caligal.CalendarMonth.create({year: 2010, month: 11});
  var dec2007 = Caligal.CalendarMonth.create({date: new Date(2007, 11)});
  var dec2009 = Caligal.CalendarMonth.create({year: 2009, month: 12});
  var feb2009 = Caligal.CalendarMonth.create({year: 2009, month: 2});
  
  describe("initialization by date object", function() {
    describe('date object', function() {
      it('is not null', function() {
        expect(feb2013.date).not.toBe(null);
      });
      
      it('is set to the first of the month', function() {
        expect(feb2013.date.getDate()).toEqual(1);
      });
    });
    
    it("returns correct year", function() {
      expect(feb2013.get('year').id).toEqual(2013);
    });
    
    it('returns correct month', function() {
      expect(feb2013.get('month')).toEqual(2);
    });
  });
  
  describe("initialization by month and year", function() {
    describe('date object', function() {
      it('is not null', function() {
        expect(march2012.date).not.toBe(undefined);
        expect(march2012.date).not.toBe(null);
      });
      
      it('is set to the first of the month', function() {
        expect(march2012.date.getDate()).toEqual(1);        
      });
    });

    it('returns correct year', function() {
      expect(march2012.get('year').id).toEqual(2012);
    });
  });
  
  describe('previousMonthNumber', function() {
    it('works for march', function() {
      expect(march2012.previousMonthNumber()).toEqual(2);
    });
    
    it('works for jan', function() {
      expect(jan2000.previousMonthNumber()).toEqual(12);
    });
  });
  
  describe('yearNumberOfPreviousMonth', function() {
    it('works for jan', function() {
      expect(jan2000.yearNumberOfPreviousMonth()).toEqual(1999);
    });
    
    it('works for march', function() {
      expect(march2012.yearNumberOfPreviousMonth()).toEqual(2012);
    });
  });
  
  describe('nextMonthNumber', function() {
    it('works for nov', function() {
      expect(nov2010.nextMonthNumber()).toEqual(12);
    });
    
    it('works for dec', function() {
      expect(dec2009.nextMonthNumber()).toEqual(1);
    });
  });
  
  describe('yearNumberOfNextMonth', function() {
    it('works for jan', function() {
      expect(jan2000.yearNumberOfNextMonth()).toEqual(2000);
    });
    
    it('works for dec', function() {
      expect(dec2009.yearNumberOfNextMonth()).toEqual(2010);
    });
  });
  
  describe('weeks', function() {
    it('sets first week correctly', function() {
      var feb26 = march2012.weeks[0].firstDay();
      expect(feb26.getDate()).toEqual(26);
      expect(feb26.getMonth()).toEqual(1);
    });
    
    it('initializes expected number of weeks for the month', function() {
      expect(march2012.weeks.length).toEqual(5);
      expect(jan2000.weeks.length).toEqual(6);

      expect(dec2007.weeks.length).toEqual(6); // test december because of year end monthNumber wrapping
      expect(dec2009.weeks.length).toEqual(5);
      
      expect(feb2009.weeks.length).toEqual(4); // test a weird 4 week month
    });
  });
});