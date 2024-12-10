// Ha nem tudjuk hogy mi lesz, akkor az unkown jobb mint az any, mert a typescript még ellenirz dolgokat a unkown-esetében.
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
userInput = "valami";

if (typeof userInput === "string") {
  userName = userInput;
}
// Azok a függvények amik soha nem returnolnek (error) jobb ha never-t kapnak.
function generateError(message: string, code: number): never {
  throw {
    message: message,
    errorCode: code,
  };
}

const result = generateError("An error occured", 500);
console.log(result);
