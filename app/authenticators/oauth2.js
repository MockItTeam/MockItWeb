import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: 'http://10.2.16.165:3000/oauth/token',
  serverTokenRevocationEndpoint: 'http://10.2.16.165:3000/oauth/revoke'
});
