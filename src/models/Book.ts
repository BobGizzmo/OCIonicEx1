
export class Book {

  description: string;
  author: string;
  cover: string;
  isLend: boolean;
  owner: string;

  constructor(public title: string) {
    this.isLend = false;
  }

}
