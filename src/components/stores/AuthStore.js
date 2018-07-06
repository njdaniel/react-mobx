import {observable, action, computed, values} from 'mobx';

class AuthStore {
    @observable username = 'admin';

    @action setUsername(username) {
        this.values.username = username;
    }
}

const user = new AuthStore;

export default user;