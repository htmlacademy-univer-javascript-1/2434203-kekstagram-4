const polyndromCheck = (string) => (string.toLowerCase().replaceAll(' ', '') === string.toLowerCase().replaceAll(' ', '').reverse())

const lengthCheck = (string, length) => string.length >= length;

function checkWorkingTime(dayBegin, dayEnd, meetingBegin, duration) {
  const dayBeginTime = dayBegin.split(':');
  const dayEndTime = dayEnd.split(':');
  const meetingBeginTime = meetingBegin.split(':');
  const dayBeginMinutes = (+dayBeginTime[0]) * 60 + (+dayBeginTime[1]);
  const dayEndMinutes = (+dayEndTime[0]) * 60 + (+dayEndTime[1]);
  const meetingBeginMinutes = (+meetingBeginTime[0]) * 60 + (+meetingBeginTime[1]);
  return dayBeginMinutes <= meetingBeginMinutes && meetingBeginMinutes + duration <= dayEndMinutes;
};
