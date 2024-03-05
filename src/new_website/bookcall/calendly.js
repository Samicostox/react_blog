import React, { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    // Append script to the body
    document.body.appendChild(script);

    const handleEventCompleted = (e) => {
      if (e.data.event && e.data.event === 'calendly.event_scheduled') {
        // Redirect user
        window.location.href = '/';
      }
    };

    // Listen for messages from Calendly iframe
    window.addEventListener('message', handleEventCompleted);

    // Clean up
    return () => {
      document.body.removeChild(script);
      window.removeEventListener('message', handleEventCompleted);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/sami-ribardiere-is/30min?primary_color=26746B"
      style={{ minWidth: '320px', height: '700px' }}
    ></div>
  );
};

export default CalendlyWidget;
