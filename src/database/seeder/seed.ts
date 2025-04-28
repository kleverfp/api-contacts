import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { seedUsers } from './create-user.seeder';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    await seedUsers(app);

    console.log('All seeds completed!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await app.close();
  }
}

bootstrap();
