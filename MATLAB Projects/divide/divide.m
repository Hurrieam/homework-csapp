function divide(a, b)
    num_integer = floor(a/b); % ȡa/b����������
    num_mod = mod(a, b); % ȡa/b������
    if(num_mod == 0)
        % ����Ϊ��
        disp(string(a) + " �� " + string(b) + " = " + string(num_integer));
    else
        % ������Ϊ��
        disp(string(a) + " �� " + string(b) + " = " + string(num_integer) + " ���� " + string(num_mod));
    end
end

% ��Ȩ���� Copyright ? ���ٵ�쫷�. 2020