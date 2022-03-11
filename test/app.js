// function test(i) {
//     setTimeout(()=> console.log(i),2000);
// }
// function func2(){
//     for(var i = 0; i < 3; i++){
//         test(i)
//   }
//   }
//   func2(); 
  // 3,3,3

//   const obj = {
//       name:"John",
//       method: function(){
//         var _self = this;
//         console.log(this.name);  // john
//         // (function(){
//         //   console.log(this.name); // undefined
//         //   console.log(_self.name); //
//         // })();
//         function test() {
//             console.log(this.name); // undefined
//             console.log(_self.name); // john
//         }
//         test();
//       }
//     }
    
//     obj.method(); 
  
  let a = {name:'rahul'}
  let b = {name:"sharma"}

  const name = 'name';
  const fullName = {
      name: a[name] + ' ' + b[name],
  }
// const name = Object.assign({}, )