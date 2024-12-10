// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // Tuple
// } = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// Enum: default esetben indexel, növekvő sorrendben.
enum Role {
  ADMIN, // 1
  READ_ONLY = "2-lesz, de meg lehet adni stringet",
  AUTHOR = 7, // meg lehet adni számot
}

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
  role2: Role.ADMIN, // Itt használjuk az enum-ot
};

person.role.push("admin"); // Push-olni mindig lehet tuple type ok esetén.
// person.role[1] = 10; // Ezt viszont nem engedi.

// person.role = [0,"admin", "user"] // Ezt sem engedi.

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map());
}

if (person.role2 === Role.AUTHOR) {
  console.log("is read only");
}
