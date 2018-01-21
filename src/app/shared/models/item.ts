export class Item {
  name: string;
  email: string;
  value: number;
  values: number[] = [];
  result: boolean;
  constructor(name, email, value, values, result) {
    this.name = name;
    this.email = email;
    this.value = value;
    this.values = values;
    this.result = result;
  }
}
