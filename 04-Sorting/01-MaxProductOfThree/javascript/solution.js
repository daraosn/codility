function solution(A) {
    A=A.sort(function(a,b) { return a-b; });
    n=A.length;
    return Math.max(A[0]*A[1]*A[2],A[0]*A[1]*A[n-1],A[0]*A[n-1]*A[n-2],A[n-1]*A[n-2]*A[n-3]);
}