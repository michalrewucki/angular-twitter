export class Tweet {
  id: number;
  name: string;
  text: string;
  date: Date;

  constructor(user: string, message: string) {
    this.name = user;
    this.text = message;
  }
}
