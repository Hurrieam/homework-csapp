clear;clc;close all;

% ¼������
x = [0, 1, 2, 3, 4];
y = [0, 1, 2, 3, 4];

% �����м��ԣ�x y��������ȣ������һ�����㼴�ɣ�
n = length(x);

% �ֱ����x y��ƽ��ֵ
ave_x = average(x);
ave_y = average(y);

% ����b�ķ�ĸ
b_1 = 0;
for i = 1:n
    b_1 = b_1 + x(i) * y(i);
end
b_1 = b_1 - n * ave_x * ave_y;

% ����b�ķ�ĸ
b_2 = 0;
for i = 1:n
    b_2 = b_2 + x(i)^2;
end
b_2 = b_2 - n * ave_x^2;

% ����b
b = b_1 / b_2;

% ����a
a = ave_y - b * ave_x;

% ������ս��
disp('y = ' + string(b) + "x + " + string(a));

% ��ͼ
for i = 1:length(x)
    plot(x(i), y(i),'.');
    hold on;
end
ezplot('y = ' + string(b) + ' * x + ' + string(a), [min(x) - 1, max(x) + 1, min(x) - 1, max(x) + 1]);