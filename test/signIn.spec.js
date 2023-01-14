import { login } from '../src/app/signin.js';
import { auth, signInWithEmailAndPassword } from '../src/app/firebase.js';

jest.mock('../src/app/firebase.js', () => {
  return {
    auth: jest.fn(() => ({ auth: 'Test' })),

    signInWithEmailAndPassword: jest.fn((auth, email, password) => {
      if (!email || !password) {
        throw new Error('ERROR');
      }
      Promise.resolve({
        user: 'meet',
      });
    }),
  };
});

describe('the user should be able to log in with his email and password', () => {
  const email = 'meet@gmail.com';
  const password = '123456';
  it('debería llamar signInWithEmailAndPassword', async () => {
    await login(email, password);
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });
  it('debería llamar signInWithEmailAndPassword with arguments', async () => {
    await login(email, password);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password);
  });
  it('Llamar el error si sus parametros están vacios', async () => {
    try {
      await login();
    } catch (error) {
      expect(error).toMatch('Error');
    }
  });
  it('login debería ser una funcion', () => {
    expect(typeof login).toBe('function');
  });
});
