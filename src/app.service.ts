import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getVersion(): any {
    return { version: '0.0.1' };
  }
}
