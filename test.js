const posts = [
    {id: 1, upVotes: 2},
    {id: 2, upVotes: 18},
    {id: 3, upVotes: 1},
    {id: 4, upVotes: 30},
    {id: 5, upVotes: 50}
  ];

let sum = 0;
console.log('**************** Reduce performace check ***************')

sum = 0;
console.time('for loop');
for(let i=0; i<posts.length; i++) {
    sum += posts[i].upVotes;
}
console.timeEnd('for loop');

sum = 0;
console.time('for each');
posts.forEach(element => {
    sum += element.upVotes;
});
console.timeEnd('for each');

sum = 0;
console.time('reduce');
sum = posts.reduce((s, i)=> s+=i.upVotes,0);
console.timeEnd('reduce')

console.log('**************** Map performace check ***************')
let newArray = [];

console.time('map');
newArray = posts.map(d => d.id+1);
console.timeEnd('map')

newArray = [];
console.time('for loop');
for(let i=0; i<posts.length; i++) {
    newArray.push(posts[i].id+1)
}
console.timeEnd('for loop');

newArray = [];
console.time('for each');
posts.forEach(element => {
    newArray.push(element.id+1)
});
console.timeEnd('for each');

console.log('**************** Filter performace check ***************')

newArray = [];

console.time('filter');
newArray = posts.filter(d => d.upVotes >= 2);
console.timeEnd('filter')

newArray = [];
console.time('for loop');
for(let i=0; i<posts.length; i++) {
    if(posts[i].upVotes >= 2) {
        newArray.push(posts[i])
    }
}
console.timeEnd('for loop');

newArray = [];
console.time('for each');
posts.forEach(element => {
    if(element.upVotes >= 2) {
        newArray.push(element)
    }
});
console.timeEnd('for each');

console.log('**************** Find performace check ***************')
let obj = {};
console.time('find');
obj = posts.find(p => p.id == 5);
console.timeEnd('find');

console.time('for');
for(let i=0; i<posts.length; i++) {
    if(posts[i].id == 5) {
        obj = posts[i];
    }
}
console.timeEnd('for');

console.time('for each');
posts.forEach(element => {
    if(element.id >= 2) {
        obj = element
    }
});
console.timeEnd('for each');

console.log('**************** Wining List Of Performance***************')
console.log('for > foreach > map/reduce/filter/find');
