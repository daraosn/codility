function solution(A) {
    var passing = 0
    var east = 0;
    //var west = 0;
    for(var i in A) {
        if(A[i] == 0) {
            east++;
        } else {
            passing+=east;
        }
    }
    if(passing > 1000000000) passing = -1;
    return passing;
}

// It's possible to cumulate the passing cars from the east and reset the sum for west cars as shown in here:
// E: east cars, W: west cars, C: total passing cars (cumulative)
// 0,0,1,0,1,1
// 0: 1 * 0                 // E: 1, W: 0       , C: 0
// 1: 1 * 0 + 1 * 0         // E: 2, W: 0       , C: 0
// 2: 1 * 1 + 1 * 1         // E: 2, W: 1->0 (1), C: 2
// 3: 1 * 1 + 1 * 1 + 1 * 0 // E: 3, W: 0    (1), C: 2
// 4: 1 * 2 + 1 * 2 + 1 * 1 // E: 3, W: 1->0 (2), C:2+3 
// 5: 1 * 3 + 1 * 3 + 1 * 2 // E: 3, W: 1->0 (3), C:2+3+3