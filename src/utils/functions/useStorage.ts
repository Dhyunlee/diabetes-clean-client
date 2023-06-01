class UseStorage {
  getStorage(key: string) {
    return localStorage.getItem(key);
  }
  setStorage(key: string, token: string) {
    localStorage.setItem(key, token);
  }
  removeStorage(key: string) {
    localStorage.removeItem(key);
  }
}
export default new UseStorage();
