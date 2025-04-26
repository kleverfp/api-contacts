import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsResolver } from './contacts.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Contact, ContactSchema } from '../schemas/contact.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Contact.name, schema: ContactSchema }]),
  ],
  providers: [ContactsResolver, ContactsService],
})
export class ContactsModule {}
