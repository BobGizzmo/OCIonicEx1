
export class Cd {

  author: string;
  created_at: string;
  isLend: boolean;
  cover: string;
  owner: string;

  constructor(public title: string) {
    this.isLend = false;
  }
}
