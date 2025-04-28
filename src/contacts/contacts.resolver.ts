import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Contact } from './contacts.type';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/guards/gql-auth.guard';
import { ContactService } from './contacts.service';
import { IRequestPayload } from './interfaces/IRequestPayload';
import { IResponseContact } from './interfaces/IResponseContact';
import { InputContact } from './input.contact.type';
import { UpdateContact } from './update.contact.type';

@Resolver()
export class ContactsResolver {
  constructor(private readonly contactService: ContactService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => [Contact])
  createContacts(
    @Args({ name: 'input', type: () => [InputContact] })
    input: InputContact[],
    @Context() context: IRequestPayload,
  ): Promise<IResponseContact[]> {
    const { storage_type } = context.req.user.toJSON();

    return this.contactService.create(storage_type, input);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Contact])
  async getContacts(
    @Args('limit', { type: () => Number, defaultValue: 10 }) limit: number,
    @Args('offset', { type: () => Number, defaultValue: 0 }) offset: number,
    @Context() context: IRequestPayload,
  ) {
    const { storage_type } = context.req.user.toJSON();
    return this.contactService.findAll(storage_type, limit, offset);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => Contact)
  async getContactById(
    @Args('id') id: string,
    @Context() context: IRequestPayload,
  ) {
    const { storage_type } = context.req.user.toJSON();
    return this.contactService.findById(id, storage_type);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Contact)
  async updateContact(
    @Args('id') id: string,
    @Args({ name: 'input', type: () => UpdateContact })
    input: UpdateContact,
    @Context() context: IRequestPayload,
  ) {
    const { phone, name } = input;
    const updates = { phone, name };
    const { storage_type } = context.req.user.toJSON();
    return this.contactService.update(id, storage_type, updates);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean)
  async deleteContact(
    @Args('id') id: string,
    @Context() context: IRequestPayload,
  ) {
    const { storage_type } = context.req.user.toJSON();
    return this.contactService.delete(id, storage_type);
  }
}
