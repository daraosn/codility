function solution(N) {
    var i = 0;
    var divisors = 0;
    while(i * i < N) {
        if(N % i == 0)
            divisors+=2;
        i++;
    }
    if(i * i == N) divisors++;
    return divisors;
}