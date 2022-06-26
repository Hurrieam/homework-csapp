function [Chicken, Rabbit] = ChickenRabbit(Head, Feet)
    syms Chicken Rabbit;
    
    eq1 = Head == Chicken + Rabbit;
    eq2 = Feet == 2 * Chicken + 4 * Rabbit;
    
    [Chicken, Rabbit] = solve([eq1, eq2], [Chicken, Rabbit]);
end