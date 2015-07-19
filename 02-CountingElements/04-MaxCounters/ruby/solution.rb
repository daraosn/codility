def solution(n, a)
    seq = Array.new(n, 0)
    max = 0
    a.each do |x|
        if x >= 1 and x <= n
            seq[x-1]+=1
            max=[max,seq[x-1]].max
        else
            seq = Array.new(n, max)
        end
    end
    seq
end