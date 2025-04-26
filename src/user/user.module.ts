import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Contact } from 'src/models/contact.model';
import { User } from 'src/models/user.model';

@Module({
  imports: [SequelizeModule.forFeature([Contact, User])],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
