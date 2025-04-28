import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Contact } from 'src/models/contact.model';
import { ICreteContact } from './interfaces/ICreateContact';
import { IResponseContact } from './interfaces/IResponseContact';
import { SequelizeHelper } from 'src/helpers/sequelize.helper';

@Injectable()
export class ContactMysqlService {
  constructor(
    @InjectModel(Contact)
    private contactModel: typeof Contact,
  ) {}

  async create(data: ICreteContact[]) {
    const contacts = await this.contactModel.bulkCreate(data as any, {
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
