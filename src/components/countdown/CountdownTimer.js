import React from 'react';
import { useCountdown } from './useCountdown';

const CountdownTimer = ({ targetDate }) => {


  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  const ExpiredNotice = () => {
    return (
   
        <header className="major">
          <h1 >Today is the day!</h1>
        </header>

    );
  };


  const DateTimeDisplay = ({ value, type, isDanger }) => {
    return (
      <div className={isDanger ? 'countdown danger' : 'countdown'}>
        <p>{value}</p>
        <span>{type}</span>
      </div>
    );
  };

  const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="show-counter">
          <DateTimeDisplay value={days} type={'Days'} isDanger={days==0} />
          <p>:</p>
          <DateTimeDisplay value={hours} type={'Hours'} isDanger={hours==0} />
          <p>:</p>
          <DateTimeDisplay value={minutes} type={'Mins'} isDanger={minutes==0} />
          <p>:</p>
          <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={seconds==0 && minutes==0} />
      </div>
    );
  };

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
