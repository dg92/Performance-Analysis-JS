# Performance-analysis
Javascript array methods map,reduce,filter,find vs for loop vs vs for each vs lodash vs ramda methods for basic operations and heavy data manipulations, to analyze the execution speed.

## Note: These results are from practical world scenario's i.e how we write js on daily basis rather than the writing the best optimized code / better techinque of execution etc.

### To run 
 1. Run npm install
 2. For small data set performance report `npm run t:s`
 3. For large data set, Generate Run `npm run seed 10000`, here 10000 is size of array, default is 100000
 4. For large data set performance report `npm run t:l`
 4. For Warm cache result use `npm run c:r 5`, here 5 is the size of array 

 To test your own function create them in formulas file 
    
### Results for small data set of array size 5 - 1000 
![small_data_set_result](./small_data_set_result.png)

### Results for mid data set of array size 3000 - 20000
![mid_data_set_result](./mid_data_set_result.png)

### Results for large data set of array size 50000 - 1000000
![large_data_set_result](./large_data_set_result.png)

### Coming soon
1. process.hrtime() for node.js instead of console.time
2. for..of and for..in comparison addition
3. Complexity of degree 2 formulas i.e n^2 and their comparision.
4. Better optimization technique to write fast javascript loop code's
5. jsPerf — link for all formulas as test cases.


### Note
1. These results are computed using Node V8 v5.8.283.41
2. These result does consider inline caching, warm cache, some of GC stuff.
3. These result does not consider optimized code, hidden classes.
4. Result may vary as per env's.

### Discussion/Posts
1. https://news.ycombinator.com/item?id=17050798
2. https://medium.com/@ideepak.jsd/javascript-performance-test-for-vs-for-each-vs-map-reduce-filter-find-32c1113f19d7


