import { Inject } from './injector';

@Inject(['barService'])
export default class MyService {

  constructor(barService) {
    console.log(barService);
    this.name = 'hi, this is my service' + barService.name;
  }
}
