function solution(N) {
    if(N==1) return 4;
    var i = 1;
    var j = i;
    var p = N*N;
    while(i * i <= N) {
        if(N % i == 0) {
            j = N / i;
            p = Math.min(p, 2 * (i + j));
        }
        i++;
    }
    return p;
}