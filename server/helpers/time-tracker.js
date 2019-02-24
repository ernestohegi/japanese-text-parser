const moment = require("moment");

let START_DATE;

const recordTime = () => (START_DATE = moment());

module.exports = {
  init() {
    recordTime();
  },
  track(message) {
    if (START_DATE === undefined) {
      console.warn(
        "Time Tracker: init() needs to be called before time tracking."
      );
      return false;
    }

    console.log(message, moment().diff(START_DATE, "miliseconds"));
    recordTime();
  }
};
