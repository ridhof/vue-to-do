/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import Vue from 'vue';
import store from '@/store';
import * as types from './mutation-types';
import AuthProxy from '../../../proxies/AuthProxy';

export const check = ({ commit }) => {
  commit(types.CHECK);
};

export const register = ({ commit }, payload) => {
  new AuthProxy()
    .register(payload)
    .then(() => {
      commit(types.REGISTER, payload);
      Vue.router.push({
        name: 'login.index',
      });
    })
    .catch(() => {
      console.log('Request failed...');
    });
};

export const login = ({ commit }, payload) => {
  new AuthProxy()
    .login(payload)
    .then((response) => {
      commit(types.LOGIN, response);
      store.dispatch('account/find');
      Vue.router.push({
        name: 'home.index',
      });
    })
    .catch((response) => {
      console.log('Request failed...');
      console.log(response.errorMessage);
    });
};

export const logout = ({ commit }) => {
  commit(types.LOGOUT);
  Vue.router.push({
    name: 'login.index',
  });
};

export default {
  check,
  register,
  login,
  logout,
};
