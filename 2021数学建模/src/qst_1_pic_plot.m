load('qst_1_pic_plot.mat');

class_A_num = class_A_data{:,3};
figure;
plot(1:20,class_A_num(1:20).*100,'o-black','LineWidth',1);
xlabel('排名');
ylabel('供应商供货量占比/%');
title('材料分类A前20名供应商供货量占比排名图');

class_B_num = class_B_data{:,3};
figure;
plot(1:20,class_B_num(1:20).*100,'o-black','LineWidth',1);
xlabel('排名');
ylabel('供应商供货量占比/%');
title('材料分类B前20名供应商供货量占比排名图');

class_C_num = class_C_data{:,3};
figure;
plot(1:20,class_C_num(1:20).*100,'o-black','LineWidth',1);
xlabel('排名');
ylabel('供应商供货量占比/%');
title('材料分类C前20名供应商供货量占比排名图');