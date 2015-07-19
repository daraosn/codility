function solution(A) {
    var minimum = Infinity;
    var rightSum = 0;
    for(var i=1; i<A.length; i++)
        rightSum += A[i];
    leftSum = A[0];
    for(var p = 1; p < A.length; p++) {
        minimum = Math.min(minimum, Math.abs(leftSum - rightSum));
        rightSum -= A[p];
        leftSum += A[p];
    }
    return minimum;
}