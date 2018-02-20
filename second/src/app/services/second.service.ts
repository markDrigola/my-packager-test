import { Injectable } from '@angular/core';

@Injectable()
export class SecondService {

  countNumber = 0;

  constructor() {
    console.log('Im second service');
  }

  startTimer() {
    this.countNumber = this.countNumber + 1;

    return this.countNumber;
  }

}
