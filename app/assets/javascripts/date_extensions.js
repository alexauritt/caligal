// intended public
Date.prototype.daysInMonth = function daysInMonth() {
  if ((this.getMonth() == 1) && (this.isGregorianLeapYear())) {
    return 29;
  }
  return this.standardMonthDayCount();
}

Date.prototype.beginningOfMonth = function beginningOfMonth() {
  var firstDay = new Date();
  firstDay.setYear(this.getFullYear());
  firstDay.setMonth(this.getMonth());
  firstDay.setDate(1);
  firstDay.clearTime();
  return firstDay;
}

Date.prototype.endOfMonth = function endOfMonth() {
  var lastDay = new Date();
  lastDay.setYear(this.getFullYear());
  lastDay.setMonth(this.getMonth());
  lastDay.setDate(this.daysInMonth());
  lastDay.clearTime();
  return lastDay;  
}

Date.prototype.beginningOfWeek = function beginningOfWeek() {
  var weekStart = new Date();
  weekStart.setYear(this.getFullYear());
  weekStart.setMonth(this.getMonth());
  weekStart.setDate(this.getDate() - this.getDay());
  weekStart.clearTime();
  return weekStart;
}

// intended private
Date.prototype.standardMonthDayCount = function standardMonthDayCount() {
  switch(this.getMonth()) {
    case 1:
      return 28;
    case 3:
    case 5:
    case 8:
    case 10:
      return 30;
    default:
      return 31;
  }
}

Date.prototype.isGregorianLeapYear = function isGregorianLeapYear() {
  var yearValue = this.getFullYear();
  if (yearValue % 4 != 0) {
    return false;
  }
  else {
    if (yearValue % 100 == 0) {
      if (yearValue % 400 == 0) {
        return true;
      }
      return false;
    }
    else {
      return true;
    }
  }
  return false;  
}

Date.prototype.clearTime = function clearTime() {
  this.setHours(0);
  this.setMinutes(0);
  this.setSeconds(0);
  this.setMilliseconds(0);
}


