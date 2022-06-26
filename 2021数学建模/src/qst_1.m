load('qst_1.mat');

summary_needed_table = summary_needed{:,3:242};
summary_given_table = summary_given{:,3:242};

% 企业订货量 分别求A B C总额
needed_total_A = 0;
needed_total_B = 0;
needed_total_C = 0;
for i = 1:402
    if strcmp(summary_needed{i,2},'A')
        needed_total_A = needed_total_A + sum(summary_needed_table(i,:));
    end
    if strcmp(summary_needed{i,2},'B')
        needed_total_B = needed_total_B + sum(summary_needed_table(i,:));
    end
    if strcmp(summary_needed{i,2},'C')
        needed_total_C = needed_total_C + sum(summary_needed_table(i,:));
    end
end

% 供应商供货量 分别求A B C总额
given_total_A = 0;
given_total_B = 0;
given_total_C = 0;
for i = 1:402
    if strcmp(summary_given{i,2},'A')
        given_total_A = given_total_A + sum(summary_given_table(i,:));
    end
    if strcmp(summary_given{i,2},'B')
        given_total_B = given_total_B + sum(summary_given_table(i,:));
    end
    if strcmp(summary_given{i,2},'C')
        given_total_C = given_total_C + sum(summary_given_table(i,:));
    end
end
% 供应商供货量占比
given_rate_A = [];
given_rate_B = [];
given_rate_C = [];
for i = 1:402
    if strcmp(summary_given{i,2},'A')
        given_rate_A(i,1) = sum(summary_given_table(i,:))/given_total_A;
    end
    if strcmp(summary_given{i,2},'B')
        given_rate_B(i,1) = sum(summary_given_table(i,:))/given_total_B;
    end
    if strcmp(summary_given{i,2},'C')
        given_rate_C(i,1) = sum(summary_given_table(i,:))/given_total_C;
    end
end
given_rate_A(all(given_rate_A==0,2),:) = [];
given_rate_A = sort(given_rate_A,'descend');
given_rate_B(all(given_rate_B==0,2),:) = [];
given_rate_B = sort(given_rate_B,'descend');
given_rate_C(all(given_rate_C==0,2),:) = [];
given_rate_C = sort(given_rate_C,'descend');