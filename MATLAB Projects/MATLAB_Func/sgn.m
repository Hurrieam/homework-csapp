function y = sgn(x)
    if x > 0
        y = 1;
    elseif x == 0
        y = 0;
    elseif x < 0
        y = -1;
    end
end