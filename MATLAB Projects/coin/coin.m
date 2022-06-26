close all; clc; clear;

% 设置模拟投硬币次数
count = 10086;

% 设置结果矩阵
result = zeros(count, 2);

%设置次数
count_positive = 0;
count_negative = 0;

for i = 1:count
    % 随机生成本次投硬币的结果
    % 1为正 0为反
    rand_num = floor(rand()*2);
    if rand_num == 0
        % disp('第 ' + string(i) + ' 次投硬币的结果为 反');
        count_negative = count_negative + 1;
        result(i, 1) = i;
        result(i, 2) = count_positive/count;
    elseif rand_num == 1
        % disp('第 ' + string(i) + ' 次投硬币的结果为 正');
        count_positive = count_positive + 1;
        result(i, 1) = i;
        result(i, 2) = count_positive/count;
    end
end

% 计算频率
positive = count_positive/count;
negative = count_negative/count;

disp('试验结束。')

disp('正面出现' + string(count_positive) + "次，频率为" + string(positive))
disp('反面出现' + string(count_negative) + "次，频率为" + string(negative))

plot(result(1:count, 1), result(1:count, 2));