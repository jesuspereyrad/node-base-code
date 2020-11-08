const {userService} = require('../services')


it('Get Users', () => {
    const result = await userService.getUsers()
    expect(result).toStrictEqual(
      [
        {
            "name": "jhon",
            "lastName": "Doe",
            "id": "0",
            "role": "user"
        },
        {
            "name": "Jane",
            "lastName": "Doe",
            "id": "1",
            "role": "admin"
        }
    ])
  });