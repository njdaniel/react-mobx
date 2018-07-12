import {observable, action, computed, values} from 'mobx';

class AuthStore {
    @observable username = '';
    @observable password = '';
    @observable isAuthenticated = false;

    @action setUsername(username) {
        this.username = username;
    }

    @action setPassword(password) {
        this.password = password;
    }
    @action reset() {
        this.username = '';
        this.password = '';
    }

    @action Authenticated() {
        this.isAuthenticated = true;
    }

    @action Logout() {
        this.isAuthenticated = false;
    }
}

const user = new AuthStore;

export default user;