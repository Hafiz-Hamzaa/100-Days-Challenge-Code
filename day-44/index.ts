//========>>>> Then import in another file
import {add} from "./mathFunction"
console.log(add(3 , 8)); // Output 11

//=========>>> import in anotherfile like previous task
import { Person } from "./Person";
const ali = new Person("Ali")
ali.greet()

// Importing named exports:
import { utilOne, utilTwo } from "./utils";

// Importing a default export:
import Calculator from "./Calculator";


