import React from 'react';
import '../../assets/css/main.css'

function Schedule() {
  let schedule = [
    {
      text: 'Start',
      date: '12:00 Uhr',
      category: {
        tag: 'Social',
        color: '#C7D5CF'
      }
    },
    {
      text: 'Zeremonie',
      date: '13:00 Uhr',
      category: {
        tag: 'medium',
        color: '#018f69'
      }
    },
    {
      text: 'Apero',
      date: '14:00 Uhr',
      category: {
        tag: 'medium',
        color: '#018f69'
      }
    },
    {
      text: 'Boot tour',
      date: '15:00 Uhr',
      category: {
        tag: 'medium',
        color: '#018f69'
      }
    },
    {
      text: 'Start Abend programm',
      date: '16:00 Uhr',
      category: {
        tag: 'medium',
        color: '#018f69'
      }
    },
    {
      text: 'Dinner',
      date: '16:00 Uhr',
      category: {
        tag: 'medium',
        color: '#018f69'
      }
    }
  ];

  const TimelineItem = ({ data }) => (
    <div className="timeline-item">
      <div className="timeline-item-content">
        {/* <span className="tag" style={{ background: data.category.color }}>
          {data.category.tag}
        </span> */}
        <time>{data.date}</time>
        <p>{data.text}</p>
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