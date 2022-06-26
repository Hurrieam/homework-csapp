clear;clc;close all;

% 录入数据
x = [0, 1, 2, 3, 4];
y = [0, 1, 2, 3, 4];

% 数据有几对（x y的数量相等，随便用一个计算即可）
n = length(x);

% 分别计算x y的平均值
ave_x = average(x);
ave_y = average(y);

% 计算b的分母
b_1 = 0;
for i = 1:n
    b_1 = b_1 + x(i) * y(i);
end
b_1 = b_1 - n * ave_x * ave_y;

% 计算b的分母
b_2 = 0;
for i = 1:n
    b_2 = b_2 + x(i)^2;
end
b_2 = b_2 - n * ave_x^2;

% 计算b
b = b_1 / b_2;

% 计算a
a = ave_y - b * ave_x;

% 输出最终结果
disp('y = ' + string(b) + "x + " + string(a));

% 画图
for i = 1:length(x)
    plot(x(i), y(i),'.');
    hold on;
end
ezplot('y = ' + string(b) + ' * x + ' + string(a), [min(x) - 1, max(x) + 1, min(x) - 1, max(x) + 1]);