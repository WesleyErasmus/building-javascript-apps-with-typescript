import { returnGreeting } from "./greetings_module";
import * as allGreetingFunctions from "./greetings_module.js";
import { returnGreeting as returnGreetingLength } from "./greetings_utilities_module";

returnGreeting("Hello!");
allGreetingFunctions.returnGreeting("Hi there!");
returnGreetingLength("Ciao!");