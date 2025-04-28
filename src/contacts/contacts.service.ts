import { Injectable } from '@nestjs/common';
import { ContactMysqlService } from './contacts.mysql.service';
import { ContactMongoService } from './contacts.mongo.service';
import { Contact } from './contacts.type';
import { ICreteContact } from './interfaces/ICreateContact';
import { IResponseContact } from './interfaces/IResponseContact';

@Injectable()
export class ContactService {
  constructor(
    private readonly contactMysqlService: ContactMysqlService,
    private readonly contactMongoService: ContactMongoService,
  ) {}

  private getService(storageType: string) {
    if (storageType === 'mongo') {
      return this.contactMongoService;
    }
    return this.contactMysqlService;
  }

  create(
    storageType: string,
    data: ICreteContact[],
  ): Promise<IResponseContact[]> {
    return this.getService(storageType).create(data);
  }

  findAll(storageType: string, limit: number, offset: number) {
    return this.getService(storageType).findAll(limit, offset);
  }

  findById(id: string, storageType: string) {
    return this.getService(storageType).findById(id);
  }

  update(id: string, storageType: string, updates: any) {
    return this.getService(storageType).update(id, updates);
  }

  delete(id: string, storageType: string) {
    return this.getService(storageType).delete(id);
  }
}
