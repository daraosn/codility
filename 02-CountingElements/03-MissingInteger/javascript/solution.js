function solution(A) {
    var missing = {};
    for (var i = 1; i <= 100000; i++) {
        missing[i] = true;
    }
    for (var i in A) {
        var n = A[i];
        if (n >= 1 && n <= 100000) {
            missing[n] = false;
        }
    }
    var missingCount = 0;
    for (var i in missing) {
        if (missing[i])
            return +i;
        else
            missingCount++;
    }
    return missingCount == 100000 ? 100001 : 1;
}