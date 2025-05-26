// Basic types
let age: number = 30;
let name: string = "John Doe";
let isEmployed: boolean = true;
let unknownValue: any = "can be anything";

// Array types
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];
let mixedArray: (number | string)[] = [1, "two", 3];

// Tuple type
let person: [string, number, boolean] = ["Jane Doe", 25, false];

// Object type
let employee: { id: number; name: string } = { id: 101, name: "Mike" };

// Interface
interface Product {
  id: number;
  name: string;
  price: number;
}
let item: Product = { id: 1, name: "Laptop", price: 1200 };

// Type alias
type Point = { x: number; y: number };
let origin: Point = { x: 0, y: 0 };

// Enum
enum Status {
  Pending,
  Approved,
  Rejected,
}
let requestStatus: Status = Status.Approved;

// Function type
type MathOperation = (x: number, y: number) => number;
const add: MathOperation = (x, y) => x + y;

// Union type
let result: string | number;
result = "Success";
result = 100;

// Literal types
type Direction = "north" | "south" | "east" | "west";
let move: Direction = "north";

// Generic type
function identity<T>(arg: T): T {
  return arg;
}
let value: number = identity<number>(42);
let text: string = identity<string>("Hello");