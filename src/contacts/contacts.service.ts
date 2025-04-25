import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Contact } from './contacts.type';
import { Model } from 'mongoose';

@Injectable()
export class ContactsService {
  constructor(
    @InjectModel(Contact.name)
    private contactModel: Model<Contact>,
  ) {}

  async getContacts(): Promise<Contact[]> {
    return this.contactModel.find();
  }
}
