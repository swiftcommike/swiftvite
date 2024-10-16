import React from 'react';
import ReactDOM from 'react-dom/client';
import { Amplify } from 'aws-amplify';
import AuthenticatorComponent from './AuthenticatorComponent';
import NewsletterComponent from './NewsletterComponent';
import HeadlineComponent from './HeadlineComponent';
import OnboardingComponent from './OnboardingComponent';
import './index.css';

// Configure Amplify 
Amplify.configure({
  Auth: {
    mandatorySignIn: false,
    region: 'us-west-2',
    userPoolId: 'us-west-2_i3wjFy9vc',
    userPoolWebClientId: 's12edm6otcvdr0le10aojt4bc'
  }
});

const renderComponent = (Component, elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    ReactDOM.createRoot(element).render(
      <React.StrictMode>
        <Component />
      </React.StrictMode>
    );
  }
};

renderComponent(AuthenticatorComponent, 'loginhere');
renderComponent(NewsletterComponent, 'newsletters');
renderComponent(HeadlineComponent, 'bookmarks');
renderComponent(OnboardingComponent, 'onboardme');