import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '이 X 현 : 일해라 Mr. RightNow';
  }
}