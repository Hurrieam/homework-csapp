interface IShow{
	show():void;
}

class Model implements IShow{
	show():void{
		console.log("模特展示");
	}
}

// 装饰类的基类
class Finery extends Model implements IShow{
	model:IShow;

	// 初始化模特在构造函数，或者专门的方法中初始化模特
	// 打扮
	makeup(show:IShow){
		this.model=show;
	}

	// 包装留给Finery子类Short进行
	show():void{
		this.model.show();
	}
}

// 短裤
class Shorts extends Finery{

	// 先展示自己 再展示父类
	show():void{
		console.log("短裤");
		super.show();
	}
}

// 长裤
class Pants extends Finery{

	// 先展示自己 再展示父类
	show():void{
		console.log("长裤");
		super.show();
	}
}

// 眼睛
class Sunglasses extends Finery{

	// 先展示自己 再展示父类
	show():void{
		console.log("太阳眼镜");
		super.show();
	}
}

function main(){
	const model:Model = new Model();
	const short1:Finery = new Shorts();
	const pants:Finery = new Pants();
	const sunglasses:Finery = new Sunglasses();

	short1.makeup(model);
	pants.makeup(short1);
	sunglasses.makeup(pants);
	sunglasses.show();
}
main();