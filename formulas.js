const {
    map,
    reduce,
    filter,
    find,
    random
  } = require('lodash');


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
    console.log('*************** Reduce performace check ***************')
    
    let avg = 0;
    console.time('js reduce');
    avg = posts.reduce(p => avg+= (+p.downvotes+ +p.upvotes+ +p.commentCount)/3,0);
    avg = avg/posts.length;
    console.timeEnd('js reduce')

    avg = 0;
    console.time('for loop');
    for(let i=0; i<posts.length; i++) {
        avg += (+posts[i].upvotes + +posts[i].downvotes + +posts[i].commentCount)/3;
    }
    avg = avg/posts.length;
    console.timeEnd('for loop');

    avg = 0;
    console.time('for each');
    posts.forEach(element => {
        avg += (+element.upvotes + +element.downvotes + +element.commentCount)/3;
    });
    avg = avg/posts.length;
    console.timeEnd('for each');

    avg = 0;
    console.time('lodash reduce');
    avg = reduce(posts, p => avg+= (+p.downvotes+ +p.upvotes+ +p.commentCount)/3,0);
    avg = avg/posts.length;
    console.timeEnd('lodash reduce');
}

// modified all upvotes, add commentCounts to upvotes and divde by random number -> map
function mapPerformance(posts) {
    console.log('*************** Map performace check ***************')
    const divider = random(1,300);
    console.time('js map');
    posts.map(p => {
        p.upvotes = (p.upvotes+p.commentCount)/divider;
        return p;
    });
    console.timeEnd('js map')

    console.time('for loop');
    for(let i=0; i<posts.length; i++) {
        posts[i].upvotes = (+posts[i].upvotes + +posts[i].commentCount)/divider;
    }
    console.timeEnd('for loop');

    console.time('for each');
    posts.forEach(element => {
        element.upvotes = (+element.upvotes + +element.commentCount)/divider;
    });
    console.timeEnd('for each');

    avg = 0;
    console.time('lodash map');
    avg = map(posts, p => {
        p.upvotes = (p.upvotes+p.commentCount)/divider;
        return p;
    })
    console.timeEnd('lodash map');
}


// filter array with object that has an avg of (downvotes * 0.3, upvotes * 0.2,
// commentCounts*0.1) multiple by a weight and return  -> filter
function filterPerformance(posts) {
    console.log('*************** Filter performace check ***************')
    const fitlerValue = random(1,200);
    let newData = [];
    
    console.time('js filter');
    newData = posts.filter(p => (+p.upvotes*0.2 + +p.downvotes*0.3 +p.commentCount*0.1)/3 > fitlerValue);
    console.timeEnd('js filter')

    newData = [];
    console.time('for loop');
    for(let i=0; i<posts.length; i++) {
        if((+posts[i].upvotes*0.2 + +posts[i].downvotes*0.3 + +posts[i].commentCount*0.1)/3 > fitlerValue) {
            newData.push(posts[i]);
        }
    }
    console.timeEnd('for loop');

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
    avg = filter(posts, p => (+p.upvotes*0.2 + +p.downvotes*0.3 +p.commentCount*0.1)/3 > fitlerValue);
    console.timeEnd('lodash filter');
}


// find the last post 
function findPerformance(posts) {
    console.log('**************** Find performace check ***************')
    let obj = {};
    console.time('js find');
    obj = posts.find(p => p.id == posts.length);
    console.timeEnd('js find');

    obj = {};
    console.time('for');
    for(let i=0; i<posts.length; i++) {
        if(posts[i].id == posts.length) {
            obj = posts[i];
        }
    }
    console.timeEnd('for');

    obj = {};
    console.time('for each');
    posts.forEach(element => {
        if(element.id === posts.length) {
            obj = element
        }
    });
    console.timeEnd('for each');
    
    obj = {};
    console.time('lodash find');
    find(posts, p => p.id === posts.length)
    console.timeEnd('lodash find');
}