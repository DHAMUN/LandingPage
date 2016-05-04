import expect from 'expect';
import chai from 'chai';
import { auth } from 'reducers/auth';

var assert = chai.assert;

const initialState = {
  token: null,
  userName: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null 
};

describe('Auth reducer:', () => {
  it.only('should return the initial state', () => {

    const resultState = JSON.stringify(auth(initialState, {type : "Omar is a Jew :P"}));
    const initState = JSON.stringify(initialState);
    
    assert.equal(initState, resultState);
  });

  it.only('should handle a login user request', () => {
    const initialState = {
      isAuthenticating: false,
      statusText: null
    };


    const stateAfter = JSON.stringify({
      isAuthenticating: true,
      statusText: null
    });

    const finalState = JSON.stringify(auth(initialState, {type: "LOGIN_USER_REQUEST"}));

    assert.equal(finalState, stateAfter)
  });

  it('should handle user login failure', () => {
    const stateAfter = JSON.stringify({
      token: null,
      userName: null,
      isAuthenticated: false,
      isAuthenticating: false,
      statusText: 'Authentication Error: 408 Request Timeout'
    })

    const finalState = JSON.stringify(auth(initialState, {
      type: 'LOGIN_USER_FAILURE',
      status : '408',
      statusText : 'Request Timeout'
    }));

    assert.equal(finalState, stateAfter);
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

    const stateAfter = JSON.stringify({
      'isAuthenticating': false,
      'isAuthenticated': true,
      'token': token,
      "firstName": "firstName",
      "lastName": "lastName",
      "committee": "committee",
      "userLevel": "userLevel",
      "school": "school",
      'statusText': 'You have been successfully logged in.'
    });


    const resultState = JSON.stringify(auth(initState, {
      type: 'LOGIN_USER_SUCCESS',
      token: token
    }));

    assert.expect(stateAfter, resultState);
  });

  it('should handle logging a user out', () => {
    const initialState = {
      token: null,
      userName: null,
      isAuthenticated: false,
      statusText: null
    };


    const stateAfter = JSON.stringify({
      'isAuthenticated': false,
      'token': null,
      'userName': null,
      'statusText': 'You have been successfully logged out.'
    });

    const finalState = JSON.stringify(auth(initialState, {
      type : 'LOGOUT_USER'
    }));

    assert.expect(finalState, stateAfter);
  })
});