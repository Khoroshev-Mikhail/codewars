let user = {
    name: "John",
    surname: "Smith"
  };
  Object.defineProperty(user, 'names', {
    get() {
      return `${this.name} ${this.surname}`;
    },
  
    set(value) {
      [this.name, this.surname] = value.split(" ");
    }
  });
user.names = 'asd sdasdddd'
console.log(user.names)