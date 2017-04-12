export class User {
  id: number;
  name: string;
  username: string;
  locked: boolean;

  constructor(name: string, username: string) {
    this.name = name;
    this.username = username;
  };
}
