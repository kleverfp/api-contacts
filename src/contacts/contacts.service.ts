import { Injectable } from '@nestjs/common';
import { ContactMysqlService } from './contacts.mysql.service';
import { ContactMongoService } from './contacts.mongo.service';

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

  create(storageType: string, name: string, phone: string) {
    return this.getService(storageType).create(name, phone);
  }

  findAll(storageType: string) {
    return this.getService(storageType).findAll();
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
