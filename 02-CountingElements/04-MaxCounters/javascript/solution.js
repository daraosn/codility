function solution(N, A) {
    var sequence = createSequence(N, 0);
    var nextCounter = 0;
    for(var k in A) {
        var X = A[k];
        if(X >= 1 && X <= N) {
            sequence[X-1]++;
            nextCounter = Math.max(nextCounter, sequence[X-1]);
        } else {
            sequence = createSequence(N, nextCounter);
        }
    }
    return sequence;
}

function createSequence(lenght, initial) {
    var sequence = [];
    while(lenght--) {
        sequence[lenght]=initial;
    }
    return sequence;
}