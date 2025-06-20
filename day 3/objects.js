

function getDetails() {
  let person = {
    name: "John Doe",
    age: 25,
    role: "developer",
    company: "ABC Pvt Ltd",
    isMarried: false,
    salary: 2.5,
  };
  return person;
}

let person = {
  name: "John Doe",
  age: 25,
};
let newDetails = {
  ...person,
  role: "developer",
  company: "ABC Pvt Ltd",
  isMarried: false,
  salary: 2.5,
};

console.log(newDetails);
