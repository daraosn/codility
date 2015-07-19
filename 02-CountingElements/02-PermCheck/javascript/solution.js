function solution(A) {
    var N = A.length;
    var sum = (N * (N+1)) / 2;
    var tap = [];
    for (var i in A) {
        sum-=A[i];
        if(tap[A[i]]) {
            return 0;
        }
        tap[A[i]] = true;
    }
    return +(sum==0);
}