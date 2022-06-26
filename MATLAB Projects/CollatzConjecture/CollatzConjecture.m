function cnt = CollatzConjecture(num)

% 验证冰雹猜想

cnt = 1;

while num~=1
    x(cnt) = cnt;
    if mod(num,2)==0
        num = 0.5*num;
        y(cnt) = num;
    else
        num = 3*num+1;
        y(cnt) = num;
    end
    cnt=cnt+1;
end

plot(x,y);

end