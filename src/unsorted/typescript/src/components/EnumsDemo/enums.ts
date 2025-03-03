export const FakeEnum = {
  "SECONDS": "seconds",
  "MINUTES": "minutes",
  "HOURS": "hours",
  "DAYS": "days",
  "WEEKS": "weeks",
  "MONTHS": "months",
  "YEARS": "years"
};

export enum CorrectEnum {
  SECONDS = 'seconds',
  MINUTES = 'minutes',
  HOURS = 'hours',
  DAYS = 'days',
  WEEKS = 'weeks',
  MONTHS = 'months',
  YEARS = 'years'
}

export var TranspiledEnum: any;
(function (o) {
    o["SECONDS"] = "seconds";
    o["MINUTES"] = "minutes";
    o["HOURS"] = "hours";
    o["DAYS"] = "days";
    o["WEEKS"] = "weeks";
    o["MONTHS"] = "months";
    o["YEARS"] = "years";
})(TranspiledEnum || (TranspiledEnum = {}));
