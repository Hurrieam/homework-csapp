% 0-1规划

clear;

load('qst_3_backup.mat');
qst_3_table = qst_3_data{:,3:242};

% 以10为区间取平均
for i = 1:50
    for j = 1:10:240
        qst_3_avg_1(i,j) = mean(qst_3_table(i,j:j+9));
    end
end
qst_3_avg_1(:,all(qst_3_avg_1==0))=[];

% 全部取平均
for i = 1:50
    qst_3_avg_2(i,1) = mean(qst_3_table(i,:));
end

f  = ones(1,50);
ic = 1:50;
a_list = [5 10 15 17 18 20 21 23 26 27 28 30 31 34 37 42 43 50]; % A出现过的行号
b_list = [1 3 4 8 9 12 13 14 22 35 36 38 39 40 41 46 48]; % B出现过的行号
c_list = [2 6 7 11 16 19 24 25 29 32 33 44 45 47 49]; % C出现过的行号
Week = 23; % 第几周
for i = 1:18
    Xa(i) = qst_3_avg_1(a_list(i),Week);
    A(a_list(i)) = Xa(i);
end
for i = 1:17
    Xb(i) = qst_3_avg_1(b_list(i),Week);
    A(b_list(i)) = Xb(i);
end
for i = 1:15
    Xc(i) = qst_3_avg_1(c_list(i),Week);
    A(c_list(i)) = Xc(i);
end
% A  = [Xa.*(1/0.6) Xb.*(1/0.66) Xc.*(1/0.72)];
for i = 1:50
    if strcmp(qst_3_data{i,2},'A')
        A(i) = A(i)*(1/0.6);
    end
    if strcmp(qst_3_data{i,2},'B')
        A(i) = A(i)*(1/0.66);
    end
    if strcmp(qst_3_data{i,2},'C')
        A(i) = A(i)*(1/0.72);
    end
end
A = -A;
b  = -28200;
lb = zeros(50,1);
ub = ones(50,1);
[x,fval,flag]=intlinprog(f,ic,A,b,[],[],lb,ub);
x