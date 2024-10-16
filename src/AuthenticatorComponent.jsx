import React, { useEffect } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Hub } from 'aws-amplify';

const AuthenticatorComponent = () => {
  useEffect(() => {
    const handleAuthChange = (authState) => {
      console.log('Auth state changed:', authState);
      document.cookie = `authState=${authState}; path=/;`;
      
      if (window.onAuthStateChange) {
        window.onAuthStateChange(authState);
      }
    };

    const unsubscribe = Hub.listen('auth', (data) => {
      const { payload } = data;
      if (payload.event === 'signIn') {
        handleAuthChange('signedIn');
      } else if (payload.event === 'signOut') {
        handleAuthChange('signedOut');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div>
          <h1>Welcome, {user.username}</h1>
          <button onClick={signOut} className="sign-out-button">Sign out</button>
        </div>
      )}
    </Authenticator>
  );
};

export default AuthenticatorComponent;