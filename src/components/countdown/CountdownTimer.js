import React from 'react';
import { useCountdown } from './useCountdown';
import { useTranslation } from "react-i18next";

const CountdownTimer = ({ targetDate, targetMessage }) => {

  const { t } = useTranslation(["common"]);
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  const ExpiredNotice = () => {
    return (

      <header className="major">
        <h1 >{targetMessage}</h1>
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
        <DateTimeDisplay value={days} type={t("common:days")} isDanger={days == 0} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={t("common:hours")} isDanger={hours == 0} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={t("common:minutes")} isDanger={minutes == 0} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={t("common:seconds")} isDanger={seconds == 0 && minutes == 0} />
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
