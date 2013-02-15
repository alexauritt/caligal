describe("Date extensions", function() {
  var feb23_2001 = new Date(2001, 1, 23);
  var feb_2004 = new Date(2004, 1, 12);

  var march1900 = new Date(1900, 2, 23);
  var april2000 = new Date(2000, 3, 21);
  var may2100 = new Date(2100, 4, 11);
  var june2400 = new Date(2400, 5, 10);
  
  describe("daysInMonth", function() {
    it("determines days in standard month", function() {
      var jan20_2000 = new Date(2000, 0, 20);
      var april15_2000 = new Date(2000, 3, 15);
      var nov30_2042 = new Date(2042, 10, 30);

      expect(jan20_2000.daysInMonth()).toEqual(31);
      expect(april15_2000.daysInMonth()).toEqual(30);
      expect(nov30_2042.daysInMonth()).toEqual(30);
    });

    it("determines days in february", function() {
      expect(feb23_2001.daysInMonth()).toEqual(28);
      expect(feb_2004.daysInMonth()).toEqual(29);
    });    
  });
  
  describe("isGregorianLeapYear", function() {
    it("identifies gregorian leap years", function() {
      expect(feb23_2001.isGregorianLeapYear()).toBeFalsy();
      expect(feb_2004.isGregorianLeapYear()).toBeTruthy();
      expect(march1900.isGregorianLeapYear()).toBeFalsy();
      expect(april2000.isGregorianLeapYear()).toBeTruthy();
      expect(may2100.isGregorianLeapYear()).toBeFalsy();
      expect(june2400.isGregorianLeapYear()).toBeTruthy();
    });    
  });
  
  describe("endOfMonth", function() {
    it('picks correct date for march', function() {
      expect(march1900.endOfMonth().getDate()).toBe(31);
      expect(april2000.endOfMonth().getDate()).toBe(30);
      expect(feb_2004.endOfMonth().getDate()).toBe(29);
      expect(feb23_2001.endOfMonth().getDate()).toBe(28);
    });
  });
  
  describe("monthName", function() {
    it('displays march', function() {
      expect(march1900.monthName()).toBe('March');
      expect(march1900.monthName('short')).toBe('Mar');      
    });
  });

  describe("dayName", function() {
    it('displays thursday', function() {
      expect(feb_2004.dayName()).toBe('Thursday');
      expect(feb_2004.dayName('short')).toBe('Thur');      
    });
  })
  
});