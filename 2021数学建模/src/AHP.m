function [W, Lmax, CI, CR] = AHP(A)

% 层次分析法
% A    成对比较矩阵
% W    权重向量
% Lmax 最大特征值
% CI   一致性指标
% CR   一致性比率

% 最大特征值及其位置
[V,D] = eig(A);
[Lmax,ind] = max(diag(D));

% 最大特征值对应特征向量标准化
W = V(:,ind) / sum(V(:,ind));

% 最大特征值
Lmax = mean((A * W) ./ W);

% 矩阵行数
n = size(A, 1);

% 一致性指标
CI = (Lmax - n) / (n - 1);

% 一致性比率
RI = [0 0 0.58 0.90 1.12 1.24 1.32 1.41 1.45 1.49 1.51]; 
CR = CI / RI(n);

end