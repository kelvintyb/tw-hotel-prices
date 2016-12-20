module.exports = {
  dateParser: (dateString) => {
    let date = new Date(dateString);
    let currentDay = date.getDay();
    let isWeekend = (currentDay === 0 || currentDay === 6) ? true : false;
    let dateType = isWeekend ? "weekend" : "weekday"
    return dateType;
  }
};
