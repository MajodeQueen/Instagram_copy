import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      username: 'John',
      fullname:'John Doe',
      email: 'john@example.com',
      password: bcrypt.hashSync('john123'),
    },
    {
      username: 'Jane',
      fullname:'Jane Doe',
      email: 'jane@example.com',
      password: bcrypt.hashSync('jane123'),
    },
  ]
}
export default data;