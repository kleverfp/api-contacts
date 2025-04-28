import { INestApplicationContext } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { uuid } from 'uuidv4';

export async function seedUsers(app: INestApplicationContext) {
  const userService = app.get(UserService);

  const users = [
    {
      name: 'Macapa',
      client_key: uuid(),
      description: 'Rede de supermercados macapa',
      storage_type: 'mysql',
    },
    {
      name: 'Varejao',
      client_key: uuid(),
      description: 'Rede de supermercados varejao',
      storage_type: 'mongo',
    },
  ];

  await Promise.all(users.map((user) => userService.create(user)));

  console.log(' Users seeded!');
}
