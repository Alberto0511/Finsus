class Autentication {
  constructor() {
    this.storageServie = storageService;
    this.storageKey = 'authToken';
  }

  setAuthToken(token, dataUser, customerSelect, email) {
    const authData = { token, dataUser, customerSelect, email };
    this.storageServie.setStorage(this.storageKey, JSON.stringify(authData));
  }
}
