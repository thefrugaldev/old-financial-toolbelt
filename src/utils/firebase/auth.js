import { auth } from './firebase'


/**
 * Create user session
 * @param {string} action - ex: createUser, signIn
 * @param {string} email 
 * @param {string} password 
 */
const userSession = (action, email, password) => {
    return auth[`${action}WithEmailAndPassword`](email, password);
}


/**
 * Destroy current user session
 */
const logout = () => auth.signOut();

export {
    userSession,
    logout
}