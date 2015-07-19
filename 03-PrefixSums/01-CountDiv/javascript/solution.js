function solution(A, B, K) {
    var result = ((B/K)<< 0) - ((A/K)<<0);
    if((A%K==0)) result++;
    return result
}