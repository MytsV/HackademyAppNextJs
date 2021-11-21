const emailKey = 'email';
const passwordKey = 'password';

let isAuthenticated = (): boolean => {
    if (process.browser) {
        return localStorage.getItem(emailKey) != null && localStorage.getItem(passwordKey) != null;
    } else {
        return false;
    }
};

export let authenticate = (email: string, password: string): void => {
    if (process.browser) {
        localStorage.setItem(emailKey, email);
        localStorage.setItem(passwordKey, password);
    }
};

export default isAuthenticated;
