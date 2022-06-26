close all;clear;clc;

a = 1;
b = 1;

disp('a1 = ' + string(a));
disp('a2 = ' + string(b));

for i = 3:50
    c = a + b;
    disp('a' + string(i) + " = " + c);
    a = b;
    b = c;
end

% Copyright ? 快速的飓风. 2020