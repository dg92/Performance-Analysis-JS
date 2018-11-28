const {
    map,
    reduce,
    filter,
    find,
    random
} = require('lodash');
let i = 0;

exports.checkPerformance = (posts) => {
    return Promise.all([
        reducePerformance(posts),
        mapPerformance(posts),
        filterPerformance(posts),
        findPerformance(posts)
    ])
}
 
// find the avg. of all downvotes, upvotes, commentCounts -> reduce
function reducePerformance(posts) {
    console.log('*************** Reduce performance check ***************')
    const length = posts.length;
    let avg = 0;
    
    console.time('js reduce');
    avg = posts.reduce((acc, p) => acc+= (+p.downvotes+ +p.upvotes+ +p.commentCount)/3,0);
    avg = avg/length;
    console.timeEnd('js reduce')

    avg = 0;
    console.time('for loop');
    for(i=0; i<length; i++) {
        avg += (+posts[i].upvotes + +posts[i].downvotes + +posts[i].commentCount)/3;
    }
    avg = avg/length;
    console.timeEnd('for loop');

    avg = 0;
    console.time('for of loop');
    for(post of posts) {
        avg += (+post.upvotes + +post.downvotes + +post.commentCount)/3;
    }
    avg = avg/length;
    console.timeEnd('for of loop');

    avg = 0;
    console.time('for each');
    posts.forEach(element => {
        avg += (+element.upvotes + +element.downvotes + +element.commentCount)/3;
    });
    avg = avg/length;
    console.timeEnd('for each');

    avg = 0;
    console.time('lodash reduce');
    avg = reduce(posts, (acc, p) => acc+= (+p.downvotes+ +p.upvotes+ +p.commentCount)/3,0);
    avg = avg/length;
    console.timeEnd('lodash reduce');
}

// modified all upvotes, add commentCounts to upvotes and divde by random number -> map
function mapPerformance(posts) {
    console.log('*************** Map performance check ***************')
    const divider = random(1,300);
    const length = posts.length;
    let newData = [];
    
    console.time('js map');
    newData = posts.map(p => {
        return {
            id: p.id,
            upvotes: (+p.upvotes + +p.commentCount)/divider,
            downvotes: p.downvotes,
            commentCount: p.commentCount
        };
    });
    console.timeEnd('js map')
    
    newData=[];
    console.time('for loop');
    for(i=0; i<length; i++) {
        newData.push({
            id: posts[i].id,
            upvotes: (+posts[i].upvotes + +posts[i].commentCount)/divider,
            downvotes: posts[i].downvotes,
            commentCount: posts[i].commentCount
        });
    }
    console.timeEnd('for loop');

    newData=[];
    console.time('for of loop');
    for (p of posts) {
        newData.push({
            id: p.id,
            upvotes: (+p.upvotes + +p.commentCount)/divider,
            downvotes: p.downvotes,
            commentCount: p.commentCount
        });
    }
    console.timeEnd('for of loop');

    newData=[];
    console.time('for each');
    posts.forEach(element => {
        newData.push({
            id: element.id,
            upvotes: (+element.upvotes + +element.commentCount)/divider,
            downvotes: element.downvotes,
            commentCount: element.commentCount
        });
    });
    console.timeEnd('for each');
    
    newData=[];
    console.time('lodash map');
    newData = map(posts, p => {
        return {
            id: p.id,
            upvotes: (+p.upvotes + +p.commentCount)/divider,
            downvotes: p.downvotes,
            commentCount: p.commentCount
        };
    })
    console.timeEnd('lodash map');
}


// filter array with object that has an avg of (downvotes * 0.3, upvotes * 0.2,
// commentCounts*0.1) multiple by a weight and return  -> filter
function filterPerformance(posts) {
    console.log('*************** Filter performance check ***************')
    const fitlerValue = random(1,50);
    const length = posts.length;
    let newData = [];
    
    console.time('js filter');
    newData = posts.filter(p => (+p.upvotes*0.2 + +p.downvotes*0.3 +p.commentCount*0.1)/3 > fitlerValue);
    console.timeEnd('js filter')
    
    newData = [];
    console.time('for loop');
    for(i=0; i<length; i++) {
        if((+posts[i].upvotes*0.2 + +posts[i].downvotes*0.3 + +posts[i].commentCount*0.1)/3 > fitlerValue) {
            newData.push(posts[i]);
        }
    }
    console.timeEnd('for loop');

    newData = [];
    console.time('for of loop');
    for(p of posts) {
        if((+p.upvotes*0.2 + +p.downvotes*0.3 + +p.commentCount*0.1)/3 > fitlerValue) {
            newData.push(p);
        }
    }
    console.timeEnd('for of loop');

    newData = [];
    console.time('for each');
    posts.forEach(element => {
        if((+element.upvotes*0.2 + +element.downvotes*0.3 + +element.commentCount*0.1)/3 > fitlerValue) {
            newData.push(element);
        }
    });
    console.timeEnd('for each');

    newData = [];
    console.time('lodash filter');
    newData = filter(posts, p => (+p.upvotes*0.2 + +p.downvotes*0.3 +p.commentCount*0.1)/3 > fitlerValue);
    console.timeEnd('lodash filter');
}


// find the last post 
function findPerformance(posts) {
    console.log('**************** Find performance check ***************')
    const randomFind = random(0, posts.length-1);
    const length = posts.length;

    let obj = {};
    console.time('js find');
    obj = posts.find(p => p.id == randomFind);
    console.timeEnd('js find');

    obj = {};
    console.time('for');
    for(i=0; i<length; i++) {
        if(posts[i].id == randomFind) {
            obj = posts[i];
        }
    }
    console.timeEnd('for');

    obj = {};
    console.time('for of');
    for(p of posts) {
        if(p.id == randomFind) {
            obj = p;
        }
    }
    console.timeEnd('for of');

    obj = {};
    console.time('for each');
    posts.forEach(element => {
        if(element.id == randomFind) {
            obj = element
        }
    });
    console.timeEnd('for each');
    
    obj = {};
    console.time('lodash find');
    obj = find(posts, p => p.id === randomFind)
    console.timeEnd('lodash find');
    
}