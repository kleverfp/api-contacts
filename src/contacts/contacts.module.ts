import { Module } from '@nestjs/common';
import { ContactService } from './contacts.service';
import { ContactsResolver } from './contacts.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Contact, ContactSchema } from '../schemas/contact.schema';
import { SequelizeModule } from '@nestjs/sequelize';
import { ContactMysqlService } from './contacts.mysql.service';
import { ContactMongoService } from './contacts.mongo.service';
import { Contact as ContactModel } from '../models/contact.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Contact.name, schema: ContactSchema }]),
    SequelizeModule.forFeature([ContactModel]),
  ],
  providers: [
    ContactsResolver,
    ContactService,
    ContactMysqlService,
    ContactMongoService,
  ],
  exports: [ContactService],
})
export class ContactsModule {}
