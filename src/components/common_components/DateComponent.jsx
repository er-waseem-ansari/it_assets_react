import React from 'react';
import './DateComponent.css'
const DateComponent = () => {
  const currentDate = new Date();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDay = days[currentDate.getDay()];
  const today = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  var myCalender = []
  myCalender.push(new Date(currentYear, currentMonth, today-1))

  for (let i = 0; i < 6; i++) {
    const tempDate = new Date(currentYear, currentMonth, today + i);
    myCalender.push(tempDate);
  }

  return (
    <div className="">
      <h6>Current Date</h6>
      <div className="calender">
      {myCalender.map((date, index) => (
        <div key={index} className={`date-block ${index === 1 ? 'second-date-block' : ''}`}>
          <div>{days[date.getDay()]}</div>
          <div>{date.getDate()}</div>
        </div>
      ))}
      </div>
      
    </div>
  );
};

export default DateComponent;