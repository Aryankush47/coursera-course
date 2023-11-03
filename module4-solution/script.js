var names=new Array();
names[0]="Axel";
names[1]="John";
names[2]="Jenny";
names[3]="Jason";
names[4]="Paul";
names[5]="Franky";
names[6]="Alice";
names[7]="Rex";
names[8]="Jimmy";
names[9]="Eddy";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}