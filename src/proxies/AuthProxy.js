import Proxy from './Proxy';

class AuthProxy extends Proxy {
  /**
   * The constructor for the ArtistProxy.
   *
   * @param {Object} parameters The query parameters.
   */
  constructor(parameters = {}) {
    super('oauth', parameters);
  }

  /**
   * Method used to login.
   *
   * @param {String} username The username.
   * @param {String} password The password.
   *
   * @returns {Promise} The result in a promise.
   */
  login({ username, password }) {
    const data = {
      username,
      password,
      client_id: process.env.VUE_APP_API_CLIENT_ID,
      client_secret: process.env.VUE_APP_API_CLIENT_SECRET,
      grant_type: 'password',
      scope: '',
    };

    return this.submit('post', `${this.endpoint}/login`, data);
  }

  /**
   * Method used to register the user.
   *
   * @param {String} username The username.
   * @param {String} email The email.
   * @param {String} password The password.
   *
   * @returns {Promise} The result in a promise.
   */
  register({ username, email, password }) {
    const data = {
      username,
      email,
      password,
      grant_type: 'password',
      scope: '',
    };
    console.log(data);
    return this.submit('post', `${this.endpoint}/register`, data);
  }
}

export default AuthProxy;
