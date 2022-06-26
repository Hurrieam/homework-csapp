load('qst_2.mat');

% T1除零外中位数
T1_excepts_zero = qst_2_data(1,:);
T1_excepts_zero(find(T1_excepts_zero==0)) = [];
T1_median = median(T1_excepts_zero);

% T2除零外中位数
T2_excepts_zero = qst_2_data(2,:);
T2_excepts_zero(find(T2_excepts_zero==0)) = [];
T2_median = median(T2_excepts_zero);

% T3除零外中位数
T3_excepts_zero = qst_2_data(3,:);
T3_excepts_zero(find(T3_excepts_zero==0)) = [];
T3_median = median(T3_excepts_zero);

% T4除零外中位数
T4_excepts_zero = qst_2_data(4,:);
T4_excepts_zero(find(T4_excepts_zero==0)) = [];
T4_median = median(T4_excepts_zero);

% T5除零外中位数
T5_excepts_zero = qst_2_data(5,:);
T5_excepts_zero(find(T5_excepts_zero==0)) = [];
T5_median = median(T5_excepts_zero);

% T6除零外中位数
T6_excepts_zero = qst_2_data(6,:);
T6_excepts_zero(find(T6_excepts_zero==0)) = [];
T6_median = median(T6_excepts_zero);

% T7除零外中位数
T7_excepts_zero = qst_2_data(7,:);
T7_excepts_zero(find(T7_excepts_zero==0)) = [];
T7_median = median(T7_excepts_zero);

% T8除零外中位数
T8_excepts_zero = qst_2_data(8,:);
T8_excepts_zero(find(T8_excepts_zero==0)) = [];
T8_median = median(T8_excepts_zero);

[T1_median;T2_median;T3_median;T4_median;T5_median;T6_median;T7_median;T8_median]

figure;
for i = 1:4
    subplot(2,2,i);
    plot(1:240,qst_2_data(i,:),'-black');
    title(['T' num2str(i)]);
    xlabel('周数');
    ylabel('运输损耗率/%');
end

figure;
for i = 1:4
    subplot(2,2,i);
    plot(1:240,qst_2_data(i+4,:),'-black');
    title(['T' num2str(i+4)]);
    xlabel('周数');
    ylabel('运输损耗率/%');
end