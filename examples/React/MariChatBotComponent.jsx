import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const MariaChatBotComponent = () => {
  useEffect(() => {
    // Create a script element and append it to the body
    const script = document.createElement('script');
    script.src = 'https://<companyName>-chatbot.redacta.me/embedMaria.js?id=dK7xP9fQ3mR2nL8yT4wZ6bH1vC5jS0gA';
    script.type = 'module';
    document.body.appendChild(script);

    // Auto-login script
    const autoLoginScript = document.createElement('script');
    autoLoginScript.innerHTML = `
      setTimeout(() => {
        window.mariaWebChat.login({ email: 'demo@redacta.me', password: 'demopass' });
      }, 2000);
    `;
    document.body.appendChild(autoLoginScript);

    // Cleanup function to remove the scripts when the component unmounts
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(autoLoginScript);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="https://<companyName>-chatbot.redacta.me/style.css" />
      </Helmet>
    </div>
  );
};

export default MariaChatBotComponent;