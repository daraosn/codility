function solution(X, A) {
    var sum = 0;
    var expected = (X * (X + 1)) / 2;
    var positions = [];
    for (var i in A) {
        var current = A[i];
        if(!positions[current]) {
            positions[current] = true;
            sum += current;
            if (sum == expected) {
                return +i;
            }
        }
    }
    return -1;
}