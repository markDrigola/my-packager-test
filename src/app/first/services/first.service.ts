import { Injectable } from '@angular/core';

@Injectable()
export class FirstService {
  countNumber = 0;

  constructor() {
    console.log('Im first service');
  }

  startTimer() {
    this.countNumber = this.countNumber + 1;

    return this.countNumber;
  }

}
