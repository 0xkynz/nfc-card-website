/* eslint-disable no-undef */
import React from 'react';
import Router from 'next/router';
import { getAppCookies, verifyToken } from '../../utils/token';
import { getTokenKey, getToken } from '../../utils/auth';

const login = '/auth/login?redirected=true'; // Define your login route address.

/**
 * Check user authentication and authorization
 * It depends on you and your auth service provider.
 * @returns {{auth: null}}
 */
const checkUserAuthentication = async (req) => {
  let token = '';
  if (process.browser) {
    token = getToken();
  } else {
    const cookies = getAppCookies(req);
    const { [getTokenKey()]: tmpToken } = cookies;
    token = tmpToken;
  }
  if (token) {
    let sessionID = token.split(' ')[1];
    if (sessionID) {
      const user = verifyToken(sessionID);

      if (user) {
        return { auth: { isUser: true } };
      }
    }
  }
  return { auth: null }; // change null to { isAdmin: true } for test it.
};

const withPrivateRoute = (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async (context) => {
    const { req } = context;
    const userAuth = await checkUserAuthentication(req);

    // Are you an authorized user or not?
    if (!userAuth.auth) {
      // Handle server-side and client-side rendering.
      if (context.res) {
        context.res.writeHead(302, {
          Location: login,
        });
        context.res.end();
      } else {
        Router.replace(login);
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({
        ...context,
        auth: userAuth,
      });
      return { ...wrappedProps, userAuth };
    }

    return { userAuth };
  };

  return hocComponent;
};

export default withPrivateRoute;
