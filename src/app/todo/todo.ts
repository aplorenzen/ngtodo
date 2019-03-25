export class Todo {

  task: string;
  done = false;
  _id: string;

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
