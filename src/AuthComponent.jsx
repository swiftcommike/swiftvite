import React, { useEffect, useState } from 'react';
import { Amplify, Hub } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import NewsletterForm from './NewsletterForm';
import UserInfoForm from './UserInfoForm';
import HeadlineList from './HeadlineList';

// Configure Amplify
Amplify.configure({
  Auth: {
    mandatorySignIn: false,
    region: 'us-west-2',
    userPoolId: 'us-west-2_i3wjFy9vc',
    userPoolWebClientId: 's12edm6otcvdr0le10aojt4bc'
  }
});

console.log('Amplify configured'); // Debug log

const AuthComponent = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    console.log('AuthComponent mounted'); // Debug log

    const handleAuthChange = (authState) => {
      console.log('Auth state changed:', authState); // Debug log
      document.cookie = `authState=${authState}; path=/;`;
      
      if (window.onAuthStateChange) {
        window.onAuthStateChange(authState);
      }
    };

    const unsubscribe = Hub.listen('auth', (data) => {
      console.log('Auth event:', data); // Debug log
      const { payload } = data;
      if (payload.event === 'signIn') {
        handleAuthChange('signedIn');
      } else if (payload.event === 'signOut') {
        handleAuthChange('signedOut');
        setUserInfo(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleUserInfoSubmit = (info) => {
    setUserInfo(info);
    console.log('User info submitted:', info);
    // Here you would typically send this data to your backend
    alert('User information saved!');
  };

  return (
    <Authenticator>
      {({ signOut, user }) => {
        console.log('User:', user); // Debug log
        return (
          <div className="auth-container">
            <h1>Welcome, {user.username}</h1>
            {!userInfo && (
              <UserInfoForm user={user} onSubmit={handleUserInfoSubmit} />
            )}
            {userInfo && (
              <>
                <HeadlineList />
                <NewsletterForm user={user} />
                <button onClick={signOut} className="sign-out-button">Sign out</button>
              </>
            )}
          </div>
        );
      }}
    </Authenticator>
  );
};

export default AuthComponent;