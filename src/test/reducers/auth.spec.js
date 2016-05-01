import expect from 'expect';
import { auth } from 'reducers/auth';

const initialState = {
  token: null,
  userName: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null
};

describe('Auth reducer:', () => {
  it('should return the initial state', () => {
    expect(
      auth(initialState, {})
    ).toEqual(initialState);
  });

  it('should handle a login user request', () => {
    const initialState = {
      isAuthenticating: false,
      statusText: null
    };


    const stateAfter = {
      isAuthenticating: true,
      statusText: null
    }

    expect(
      auth(initialState, {
        type: "LOGIN_USER_REQUEST",
      })
      ).toEqual(stateAfter);
  });

  it('should handle user login failure', () => {
    const stateAfter = {
      token: null,
      userName: null,
      isAuthenticated: false,
      isAuthenticating: false,
      statusText: 'Authentication Error: 408 Request Timeout'
    }

    expect(
      auth(initialState, {
        type: 'LOGIN_USER_FAILURE',
        status : '408',
        statusText : 'Request Timeout'
      })
    ).toEqual(stateAfter);
  });

  //Used Random token I found Online 
  it('should handle user login success', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJma' +
        'XJzdE5hbWUiLCJsYXN0TmFtZSI6Imxhc3ROYW1lIiwiY29tbWl0dGVlIjoiY29tbWl0dGV'+
        'lIiwidXNlckxldmVsIjoidXNlckxldmVsIiwic2Nob29sIjoic2Nob29sIn0.5Zkm' +
        '5yaMi85kCiu6oBRZTaqhO0_pVPeAMK1q2C7ed7I';

    const initState = {
      token: null,
      isAuthenticated: false,
      isAuthenticating: false,
      "firstName": null,
      "lastName": null,
      "committee": null,
      "userLevel": null,
      "school": null,
      statusText: null
    };

    const stateAfter = {
        'isAuthenticating': false,
        'isAuthenticated': true,
        'token': token,
        "firstName": "firstName",
        "lastName": "lastName",
        "committee": "committee",
        "userLevel": "userLevel",
        "school": "school",
        'statusText': 'You have been successfully logged in.'
    }

    expect(
        auth(initState, {
          type: 'LOGIN_USER_SUCCESS',
          token: token
        })
      ).toEqual(stateAfter);

  });

  it('should handle logging a user out', () => {
    const initialState = {
      token: null,
      userName: null,
      isAuthenticated: false,
      statusText: null
    };


    const stateAfter = {
        'isAuthenticated': false,
        'token': null,
        'userName': null,
        'statusText': 'You have been successfully logged out.'
    };

    expect(
      auth(initialState, {
        type : 'LOGOUT_USER'
      })
      ).toEqual(stateAfter);
  })
});