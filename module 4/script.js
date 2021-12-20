var names=new Array();
names[0]="yashu";
names[1]="Jaggu";
names[2]="Jareena";
names[3]="janson";
names[4]="preethi";
names[5]="fahad";
names[6]="lucky";
names[7]="pavan";
names[8]="lalith";
names[9]="jishita";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}