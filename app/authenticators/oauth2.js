import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: 'http://158.108.236.82:3000/oauth/token',
  serverTokenRevocationEndpoint: 'http://158.108.236.82:3000/oauth/revoke'
});
