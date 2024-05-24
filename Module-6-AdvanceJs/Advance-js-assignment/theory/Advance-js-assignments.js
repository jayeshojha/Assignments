//  alert('this is alert message');
//  document.write( "apple" > "pineapple")
//  document.write("2" > "12");
//    document.write(undefined == null);
//    document.write(undefined === null)
//    document.write(null == "\n0\n")
//    document.write(null === "\n0\n")
//    if ("0") { alert( 'Hello'); }
// alert( null || 2 || undefined )
  
// function CheckAge(age){
//     if (age> 18) { return true; }
//     else{
//         return confirm('did parents allow you?');
//     }
// }
//  CheckAge(17);

//  function ask(question, yes, no)
// { if (confirm(question))yes();
// else
// no();
// }
// ask("Do you agree?", function()
// { alert("You agreed."); },
// function() {
// alert("You canceled the execution."); })


// let ask = (question, yes, no)=>{
//      if(confirm(question)){
//           yes();
//      }else{
//          no();
//      }
// }

// ask('do you agree?',()=>{
//     alert("You agreed.");  
// },()=>{
//     alert("You canceled the execution."); 
// })

// let obj = {}
// obj.name = 'jhon'
// obj.surname = "Smith"
// obj.name = 'pete'
// delete obj.name
// console.log(obj);

// let fruits = ["Apples", "Pear", "Orange"];
// let ShopingCarts = fruits;
// ShopingCarts.push('Banana')
// console.log(fruits.length)

// let john = { name: "John", age: 25 }; 
// let pete = { name: "Pete", age: 30 }; 
// let mary ={ name: "Mary", age: 28 }; 
// let users = [ john, pete, mary ]; 
// let names = users.map((e,i)=>{
//       return e.name
// })
//  alert( names ); 

// let john = { name: "John", surname: "Smith", id: 1 }; 
// let pete = { name: "Pete",surname: "Hunt", id: 2 };
//  let mary = { name: "Mary", surname: "Key", id: 3 };
//   let users = [ john, pete, mary ]; 
// let i = 1;
// let usersMapped = users.map((e,r)=>{
//        e.fullName = `${e.name} ${e.surname}`
//        delete e.name
//        delete e.surname
//        delete e.id;
//        e.id = `${i}`;
//        i++
//        return e;
// })
// alert( usersMapped[0].id )
// alert( usersMapped[0].fullName) 

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//     };
//     function SumSalaries(abc){
//         let arr = Object.values(abc);
//         let sum = 0
//     console.log(arr);
//    for (const i of arr) {
//        sum = sum+i;
//     }
//     return sum
// }
// alert(SumSalaries(salaries));

// let user = { name: "John", years: 30};
// let {name} = user;
// console.log(name);
// let {years: age} = user;
// console.log(user);
// let { isAdmin = false } = user;

// user = { name: "John Smith", age: 35};
// let userJSON = JSON.stringify(user);
// console.log(userJSON);
// let anotherUser = JSON.parse(userJSON);
// console.log(anotherUser);

// let Mypromise = new Promise((resolve,reject)=>{
//     console.log('promise resolved')
//     resolve('success')
// }).then((data)=>{
//       console.log(data)
// },(err)=>{
//     console.log(err);
// })


let data1 = document.getElementById('data');
let button1 = document.getElementById('button1');

button1.addEventListener('click',()=>{
    let url = 'https://fakestoreapi.com/products'
       fetch(url).then((res)=>{
           return res.json();
       }).then((data)=>{
         data1.innerText = data[Math.round(Math.random()*10)].title
       })
})