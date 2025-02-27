import React, { useState, useEffect } from 'react';

const CountdownCard = ({ targetDate }) => {
  const targetTime = new Date(targetDate).getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime]);

  const getResponsiveStyles = () => {
    const width = window.innerWidth;
    if (width >= 768 && width <= 991) {
      return {
        container: {
          width: '100%',
          height: 'auto',
          flexDirection: 'column',
          padding: '1em',
        },
        textContainer: { width: '100%', textAlign: 'center', margin: '0.5em' },
        countdownItem: { textAlign: 'center', margin: '0.5em' },
        text: { fontSize: '1.25em', lineHeight: '27.24px' },
        countdownNumber: { fontSize: '2rem', fontWeight: 700, color: '#000000' },
        countdownLabel: { fontSize: '1rem', fontWeight: 400, color: '#000000' },
      };
    } else if (width <= 767) {
      return {
        container: {
          flexDirection: 'column',
          alignItems: 'center',
          height: '150px',
          justifyContent: 'center',
          padding: '1em',
        },
        textContainer: { width: '100%', textAlign: 'center', margin: '0 0' },
        countdownItem: { width: '100%', textAlign: 'center', margin: '0.5em 0' },
        text: { fontSize: '.8rem' },
        countdownNumber: { fontSize: '1.5rem', fontWeight: 700, color: '#000000' },
        countdownLabel: { fontSize: '1rem', fontWeight: 400, color: '#000000' },
      };
    } else {
      return {
        container: {
          width: '100%',
          height: '130px',
          flexDirection: 'row',
          padding: '0.5em',
        },
        textContainer: { width: '15em', textAlign: 'center' },
        countdownItem: { textAlign: 'center' },
        text: { fontSize: '1em', lineHeight: '27.24px' },
        countdownNumber: { fontSize: '40px', fontWeight: 700, color: '#000000', marginRight: '.8em' },
        countdownLabel: { fontSize: '18px', fontWeight: 400, color: '#000000', marginRight: '.8em' },
      };
    }
  };

  const styles = getResponsiveStyles();

  return (
    <div className="parent-container" style={{ position: 'relative', width: '100%' }}>
      <div
        className='mb-4'
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: '#FCB541',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          position: 'relative',
          bottom: '60px',
          width: "100%",
          ...styles.container,
        }}
      >
        {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 ? (
          <div style={{ textAlign: 'center', padding: '2em', color: '#000' }}>
            <p style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.5em' }}>
              No Events Currently Ongoing
            </p>
            <p style={{ fontSize: '1rem', fontFamily: 'Open Sans' }}>
              Stay tuned for upcoming events!
            </p>
          </div>
        ) : (
          <>
            <div style={{ ...styles.textContainer }}>
              <p style={{
                fontFamily: 'Open Sans',
                fontWeight: 600,
                ...styles.text
              }}>
                Count every second until our next Event
              </p>
            </div>
            <div className='d-flex justify-content-evenly' style={{
              fontFamily: 'Open Sans',
              ...styles.textContainer
            }}>
              <div style={{ ...styles.countdownItem }}>
                <span style={{ ...styles.countdownNumber }}>{timeLeft.days}</span><br />
                <span style={{ ...styles.countdownLabel }}>Days</span>
              </div>
              <div style={{ ...styles.countdownItem }}>
                <span style={{ ...styles.countdownNumber }}>{timeLeft.hours}</span><br />
                <span style={{ ...styles.countdownLabel }}>Hours</span>
              </div>
              <div style={{ ...styles.countdownItem }}>
                <span style={{ ...styles.countdownNumber }}>{timeLeft.minutes}</span><br />
                <span style={{ ...styles.countdownLabel }}>Minutes</span>
              </div>
              <div style={{ ...styles.countdownItem }}>
                <span style={{ ...styles.countdownNumber }}>{timeLeft.seconds}</span><br />
                <span style={{ ...styles.countdownLabel }}>Seconds</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CountdownCard;