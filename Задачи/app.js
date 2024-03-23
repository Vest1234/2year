
 let names = [{name:'Ivan',
                index: 1},
               {name: 'Maria',
                index: 2},
               {name:'Anton',
                index: 3},
               {name:'Anna',
                index: 4}];


let filteredNames = names.filter((post) => post.index !== 2);
names = filteredNames
console.log(filteredNames);
console.log(names)
