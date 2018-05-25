# Performance-Analysis
Comparing native JavaScript array methods map, reduce, filter, and find against for loop, forEach loop and lodash methods. The analysis uses basic operations and heavy data manipulation to analyze the execution speed of each method.

### To run 
 1. Run `npm install`
 2. Generate the [data](data.js) for the tests by running `npm run seed`. 
    - The default array is 10000 elements in length. You can create an array of a custom length by passing the desired size as an arugment, like so `npm run seed 100000`.
 2. For a small data set performance report run `npm run t:s`. 
    - This runs the analysis on the first 5 elements of the array.
 4. For a performance report on the whole array run `npm run t:l`

 To test your own function create them in the [formulas.js](formulas.js) file.
    
### Results for small data set of array size 5 - 1000 
![small_data_set_result](./small_data_set_result.png)

### Results for mid data set of array size 3000 - 20000
![mid_data_set_result](./mid_data_set_result.png)

### Results for large data set of array size 50000 - 1000000
![large_data_set_result](./large_data_set_result.png)

### Coming Soon
1. Ramda.js test
2. Caching (inline, warm) considerations
3. GC considerations

### Note
1. These results are computed using Node V8 v5.8.283.41
2. These result does not consider the JIT, inline caching, hidden classes, deoptimizations, garbage collection, pretenuring etc.
3. Result may vary as per env's.
4. Red colour highlight in the above images is just for reference, will soon change.

### Discussion/Posts
1. [https://news.ycombinator.com/item?id=17050798](https://news.ycombinator.com/item?id=17050798)
2. [https://medium.com/@ideepak.jsd/javascript-performance-test-for-vs-for-each-vs-map-reduce-filter-find-32c1113f19d7](https://medium.com/@ideepak.jsd/javascript-performance-test-for-vs-for-each-vs-map-reduce-filter-find-32c1113f19d7)



