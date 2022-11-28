/**
 * converts the given date into UTC timezone date format and removes the time.
 * @param {Date} date
 * @returns UTC Date in JSON string format.
 */
export function toUTCDate(date = new Date()) {
  date = new Date(date);
  return new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
  ).toJSON();
}

/**
 * converts the given date into UTC timezone date format and removes the time.
 * @param {Date} date
 * @returns UTC Date.
 */
export function toUTCDateInDate(date = new Date()) {
  date = new Date(date);
  return new Date(
    date.getTime() + new Date().getTimezoneOffset() * 60000
  );
}

/**
 * converts the given date into UTC timezone date format. This method preserves both the date and time.
 * @param {Date} date
 * @returns UTC Date in JSON string format.
 */
export function toUTCDateTime(date = new Date()) {
  date = new Date(date);
  date = new Date(
    Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds()
    )
  );
  return new Date(
    date.getTime() - new Date().getTimezoneOffset() * 60000
  ).toJSON();
}

/**
 * converts the given UTC date into the local timezone date format.
 * @param {Date} date
 * @returns Date in UTC string format.
 */
export function fromUTCDate(date = new Date()) {
  date = new Date(date);
  return new Date(date.getTime() + new Date().getTimezoneOffset() * 60000);
}

// Date time format function for showing time and date of scheduled appointment to the counselor or doctor.
export function toReadableDateFormat(receviedAppointmentDateTime) {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const appointmentDateTime = fromUTCDate(receviedAppointmentDateTime);

  const month = appointmentDateTime.getMonth();
  const day = appointmentDateTime.getDay();

  const finalDateTime =
    days[day] +
    ", " +
    appointmentDateTime.getDate() +
    " " +
    months[month] +
    " " +
    appointmentDateTime.getFullYear() +
    ", " +
    appointmentDateTime.toLocaleTimeString();
  return finalDateTime;
}


export const toStartHourDate = (date) => {
  return new Date(toUTCDateInDate(new Date(date)).setHours(0, 0, 0, 0)).getTime();
}

export const toEndHourDate = (date) => {
  return new Date(toUTCDateInDate(new Date(date)).setHours(23, 59, 59, 999)).getTime();
}

export const getMonthName = (month) => {
  var months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[month];
}

export const getDayName = (day) => {
  var days = [
    "Sun",
    "Mon",
    "Tue",
    "wed",
    "Thu",
    "Fri",
    "Sat",

  ];

  return days[day];
}

export const getLastDayOfMonth = (currentMonth) => {
  const lastDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);

  return lastDay;
}

export const toBirthDateFormat = (date) => {
  date = new Date(date);
  return `${date.getFullYear()}-${String(date.getMonth()).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}