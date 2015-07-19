function solution(A) {
    var N = A.length + 1;
    var total = (N * (N+1)) / 2;
    for(var i in A) {
        total -= A[i];
    }
    return total;
}