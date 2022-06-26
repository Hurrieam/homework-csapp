load('forecast.mat');

table = forecast{:,3:242};

result = [];

for i = 1:44
    for j = 1:24
        result(i,j) = polyval(polyfit(1:240,table(i,:),15),j+240);
    end
end