import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Contact } from 'src/models/contact.model';
import { ICreteContact } from './interfaces/ICreateContact';
import { IResponseContact } from './interfaces/IResponseContact';
import { SequelizeHelper } from 'src/helpers/sequelize.helper';
import PhoneMask from 'src/utils/phone-mask';

@Injectable()
export class ContactMysqlService {
  constructor(
    @InjectModel(Contact)
    private contactModel: typeof Contact,
  ) {}

  async create(data: ICreteContact[]) {
    const formatedData = data.map((item) => ({
      name: item.name.toUpperCase(),
      phone: PhoneMask.formatPhoneNumber(item.phone),
    }));
    const contacts = await this.contactModel.bulkCreate(formatedData as any, {
      returning: true,
    });

    return SequelizeHelper.toJSONList(contacts) as IResponseContact[];
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
