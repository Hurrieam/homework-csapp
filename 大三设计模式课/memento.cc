// 20220621设计模式 备忘录模式

class save{
public:
	int exp, money, attack;

public:
	save(int exp, int money, int attack){
		this->exp;
		this->money = money;
		this->attack = attack;
	}
};

#include<vector>
#include<iostream>

class game_storage{
	std::vector<save*> saves;

public:
	void save_game(save* save){
		saves.push_back(save);
	}

	save* read_save(int num){
		if(num > saves.size()){
			std::cout << "无记录" << std::endl;
			return nullptr;
		}else{
			return saves[num-1];
		}
	}
};

class game{
	int exp, money, attack;

public:
	game():exp(10), money(100), attack(10){}

	void play_game(){
		this->exp *= 2;
		this->money *= 2;
		this->attack *= 2;
		::printf("exp=%d\tmoney=%d\tattack=%d\n", this->exp, this->money, this->attack);
	}

	save* save_game(){
		return new save(exp, money, attack);
	}

	bool restore_game(int num, game_storage* storage){
		save* s = storage->read_save(num);
		if(s == nullptr){
			return false;
		}
		exp = s->exp;
		money = s->money;
		attack = s->attack;
		return true;
	}
};

int main(int argc, char const *argv[])
{
	game *g = new game();
	g->play_game();
	game_storage* gs = new game_storage();
	gs->save_game(g->save_game());
	g->play_game();
	gs->save_game(g->save_game());
	g->play_game();
	gs->save_game(g->save_game());
	g->play_game();
	gs->save_game(g->save_game());
	g->play_game();
	gs->save_game(g->save_game());
	return 0;
}