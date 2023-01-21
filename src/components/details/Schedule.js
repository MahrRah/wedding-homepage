import React from 'react';
import { useTranslation } from "react-i18next";
import '../../assets/css/main.css'

function Schedule() {
  const { t } = useTranslation(["common", "details"]);
  let schedule = [
    {
      text: t("details:programWhat1"),
      date: t("details:programWhen1"),
      location: t("details:programWhere1"),

    },
    {
      text: t("details:programWhat2"),
      date: t("details:programWhen2"),
      location: t("details:programWhere2"),
    },
    {
      text: t("details:programWhat3"),
      date: t("details:programWhen3"),
      location: t("details:programWhere3"),
    },
    {
      text: t("details:programWhat4"),
      date: t("details:programWhen4"),
      location: t("details:programWhere4"),
    },
    {
      text: t("details:programWhat5"),
      date: t("details:programWhen5"),
      location: t("details:programWhere5"),
    }
  ];

  const TimelineItem = ({ data }) => (
    <div className="timeline-item">
      <div className="timeline-item-content" >
        <time>{data.date}</time>
        <div className='location'>{data.location}</div>
        <p style={{textAlign:"left",textJustify: "unset"}}>{data.text}</p>
        <span className="circle" />
      </div>
    </div>
  );

  const Timeline = () =>
    schedule.length > 0 && (
      <div className="timeline-container">
        {schedule.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </div>
    );


  return (
    <Timeline />
  );
}

export default Schedule;