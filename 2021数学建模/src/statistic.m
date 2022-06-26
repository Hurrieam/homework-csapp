A_sailor = {'S229','S282','S275','S329','S348','S352','S143','S201','S307','S395','S114','S273','S292','S189','S208','S078','S291','S151'};
% 这些商家均为A类原材料供应商

B_sailor = {'S140','S108','S340','S139','S131','S308','S330','S031','S040','S338','S364','S367','S055','S346','S088','S216','S324'};
% 这些商家均为B类原材料供应商

C_sailor = {'S361','S151','S356','S268','S306','S194','S247','S037','S374','S126','S284','S365','S080','S294','S086'};
% 这些商家均为C类原材料供应商

% 分别统计这些商家对于每类原材料的供货量

load('statistic.mat');
statistic_given_table = statistic_given{:,3:242};

total_A = 0;
for i = 1:18
    total_A = total_A + sum(statistic_given_table(find(strcmp(statistic_given{:,1},A_sailor{i})),:));
end

total_B = 0;
for i = 1:17
    total_B = total_B + sum(statistic_given_table(find(strcmp(statistic_given{:,1},B_sailor{i})),:));
end

total_C = 0;
for i = 1:15
    total_C = total_C + sum(statistic_given_table(find(strcmp(statistic_given{:,1},C_sailor{i})),:));
end