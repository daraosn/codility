def solution(a)
    a.sort!
    # sort the array and then, due to negatives present in the arrays, we must check the extremes: (-) * (-) * (+) = (+)
    [a[0]*a[1]*a[2], a[0]*a[1]*a[-1], a[0]*a[-1]*a[-2], a[-1]*a[-2]*a[-3]].max
end