close all; clc; clear;

% ����ģ��ͶӲ�Ҵ���
count = 10086;

% ���ý������
result = zeros(count, 2);

%���ô���
count_positive = 0;
count_negative = 0;

for i = 1:count
    % ������ɱ���ͶӲ�ҵĽ��
    % 1Ϊ�� 0Ϊ��
    rand_num = floor(rand()*2);
    if rand_num == 0
        % disp('�� ' + string(i) + ' ��ͶӲ�ҵĽ��Ϊ ��');
        count_negative = count_negative + 1;
        result(i, 1) = i;
        result(i, 2) = count_positive/count;
    elseif rand_num == 1
        % disp('�� ' + string(i) + ' ��ͶӲ�ҵĽ��Ϊ ��');
        count_positive = count_positive + 1;
        result(i, 1) = i;
        result(i, 2) = count_positive/count;
    end
end

% ����Ƶ��
positive = count_positive/count;
negative = count_negative/count;

disp('���������')

disp('�������' + string(count_positive) + "�Σ�Ƶ��Ϊ" + string(positive))
disp('�������' + string(count_negative) + "�Σ�Ƶ��Ϊ" + string(negative))

plot(result(1:count, 1), result(1:count, 2));