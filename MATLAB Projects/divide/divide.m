function divide(a, b)
    num_integer = floor(a/b); % 取a/b的整数部分
    num_mod = mod(a, b); % 取a/b的余数
    if(num_mod == 0)
        % 余数为零
        disp(string(a) + " ÷ " + string(b) + " = " + string(num_integer));
    else
        % 余数不为零
        disp(string(a) + " ÷ " + string(b) + " = " + string(num_integer) + " …… " + string(num_mod));
    end
end

% 版权所有 Copyright ? 快速的飓风. 2020