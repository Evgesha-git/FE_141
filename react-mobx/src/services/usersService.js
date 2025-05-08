class UsersService {
  async findAll() {
    return await fetch('https://jsonplaceholder.typicode.com/users')
  }
}

const usersService = new UsersService()
export default usersService