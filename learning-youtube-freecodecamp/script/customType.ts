type Address = {
  street: string;
  city: string;
  country: string;
};
// custom type
type Person = {
  name: string;
  age: number;
  student: boolean;
  // nested object, address is optional
  address?: Address;
};

// example
let person1: Person = {
  name: "joe",
  age: 42,
  student: false,
  address: {
    street: "Laxmimarge",
    city: "village",
    country: "Nepal",
  },
};
let person2: Person = {
  name: "joe",
  age: 42,
  student: false,
};

// typing arrays

let ages = [100, 101, "string"];
