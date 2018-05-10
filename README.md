# Performance-analysis
Javascript array methods map,reduce,filter,find vs for loop vs vs for each vs lodash methods for basic operations and heavy data manipulations, to analyze the execution speed.

# To run 
 1. Run npm install
 2. For small data set run `npm run t:s`
 3. For large data set, Run `npm run seed`, which will generate 100000 posts in an array and then, Run `npm run t:l`
    

# For small data set 
# Reduce performace check
1. js reduce: 0.200ms
2. for loop: 0.024ms
3. for each: 0.138ms
4. lodash reduce: 0.200ms
# Map performace check 
1. js map: 0.123ms
2. for loop: 0.014ms
3. for each: 0.036ms
4. lodash map: 0.099ms
# Filter performace check 
1. js filter: 0.157ms
2. for loop: 0.013ms
3. for each: 0.041ms
4. lodash filter: 0.067ms
# Find performace check 
1. js find: 0.109ms
2. for: 0.009ms
3. for each: 0.033ms
4. lodash find: 0.236ms

# For large data set - result vary according to the size of data, the atomic operations +,-,*,/.
