


//types
type User = {
  name: string;
  age: number;
  email: string;
  password: string;
};

//interfaces

interface IUser {
  name: string;
  age: number;
  email: string;
  password: string;
}

//arrays
const arr=[1,2,3]
// console.log(arr)

function maxi(arr:number[]){
    let max=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}
// console.log(maxi(arr))

const users:User[]=[
  {
    name:"John",
    age:15,
    email:"john@j.com",
    password:"1234"
  },
  {
    name:"Jane",
    age:30,
    email:"jane@j.com",
    password:"1234"
  }
]

function isLegal(users: User[]): User[] {
  return users.filter(user => user.age > 18);
}


// console.log(isLegal(users))


//enums

enum keyPress{
  Up,
  Down,
  Left,
  Right
}

// console.log(keyPress)
// console.log(keyPress.Up)
// console.log(keyPress.Down)
// console.log(keyPress.Left)
// console.log(keyPress.Right)

//generics

// function firstEle(arr:(string|number)[]){
//   return arr[0]
// }

// const arr1=[1,2,3]
// const arr2=["a","b","c"]
// console.log(firstEle(arr1))
// console.log(firstEle(arr2))

// const el = firstEle(["harkiratSingh", "ramanSingh"]);
// console.log(el.toLowerCase()) 
//unable to infer the type of el because el is of type string | number

//Solution is generics

function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement<string>(["harkiratSingh", "ramanSingh"]);
console.log(el.toLowerCase())


