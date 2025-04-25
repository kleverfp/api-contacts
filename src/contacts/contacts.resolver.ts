import { Query, Resolver } from '@nestjs/graphql';
import { ContactsService } from './contacts.service';
import { Contact } from './contacts.type';

@Resolver()
export class ContactsResolver {
  constructor(private readonly contactsService: ContactsService) {}

  @Query(() => [Contact])
  getContacts() {}
}
