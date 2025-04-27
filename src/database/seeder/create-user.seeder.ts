import { INestApplicationContext } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { randomUUID } from 'crypto';

export async function seedUsers(app: INestApplicationContext) {
  const userService = app.get(UserService);

  const users = [
    {
      name: 'Macapa',
      client_key: randomUUID(),
      description: 'Rede de supermercados macapa',
      storage_type: 'mysql',
    },
    {
      name: 'Varejao',
      client_key: randomUUID(),
      description: 'Rede de supermercados varejao',
      storage_type: 'mongo',
    },
  ];

  await Promise.all(users.map((user) => userService.create(user)));

  console.log(' Users seeded!');
}
