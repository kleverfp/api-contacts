import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact, ContactDocument } from 'src/schemas/contact.schema';

@Injectable()
export class ContactMongoService {
  constructor(
    @InjectModel(Contact.name)
    private contactModel: Model<ContactDocument>,
  ) {}

  create(name: string, phone: string) {
    return this.contactModel.create({
      name,
      phone,
    });
  }

  findAll() {
    return this.contactModel.find();
  }

  findById(id: string) {
    return this.contactModel.findOne({ _id: id });
  }

  async update(id: string, updates: any) {
    const contact = await this.findById(id);
    if (!contact) throw new Error('Contact not found');
    Object.assign(contact, updates);
    await contact.save();
    return contact;
  }

  async delete(id: string) {
    const result = await this.contactModel.deleteOne({ _id: id });
    return result.deletedCount > 0;
  }
}
