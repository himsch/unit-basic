class UserClient {
  login(id, password) {
    return fetch('http://example.com/login/id+password')
      .then(rep => rep.json());
  }
}

module.exports = UserClient;