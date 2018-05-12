# Performance-analysis
Javascript array methods map,reduce,filter,find vs for loop vs vs for each vs lodash methods for basic operations and heavy data manipulations, to analyze the execution speed.

# To run 
 1. Run npm install
 2. For small data set performance report `npm run t:s`
 3. For large data set, Generate Run `npm run seed 10000`, here 10000 is size of array, default is 100000
 4. For large data set performance report `npm run t:l`

    
# Results for small data set of array size 5 - 1000 
![small_data_set_result](./small_data_set_result.png)

# Results for mid data set of array size 3000 - 20000
![mid_data_set_result](./mid_data_set_result.png)

# Results for large data set of array size 50000 - 1000000
![large_data_set_result](./large_data_set_result.png)

# Note
    To test your own function create them in formulas file 
