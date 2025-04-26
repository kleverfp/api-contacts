import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Contact } from 'src/models/contact.model';

@Injectable()
export class ContactMysqlService {
  constructor(
    @InjectModel(Contact)
    private contactModel: typeof Contact,
  ) {}

  create(name: string, phone: string) {
    return this.contactModel.create({
      name,
      phone,
    });
  }

  findAll() {
    return this.contactModel.findAll();
  }

  findById(id: string) {
    return this.contactModel.findOne({ where: { id } });
  }

  async update(id: string, updates: any) {
    const contact = await this.findById(id);
    if (!contact) throw new Error('Contact not found');
    await contact.update(updates);
    return contact;
  }

  async delete(id: string) {
    const contact = await this.findById(id);
    if (!contact) throw new Error('Contact not found');
    await contact.destroy();
    return true;
  }
}
