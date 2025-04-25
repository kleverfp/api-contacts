import { Resolver } from '@nestjs/graphql';
import { ContactsService } from './contacts.service';

@Resolver()
export class ContactsResolver {
  constructor(private readonly contactsService: ContactsService) {}
}
