'use strict';

/*
Tu strašlivě vypadající funkci níže v komentáři budeš potřebovat později
Funkce zjistí, zda se protínají dva obdélníky. To se hodí například
ve chvíli, kdy chceš zjistit, zda se dotýkají dva objekty na obrazovce,
třeba. ve chvíli, kdy má panáček sebrat minci.

Pokud tě to nezajímá (omg, proč ne?!??), tak buď v klidu. Prostě to jen
ve správnou chvíli použijeme.

Zajímavé je, že tento problém se občas používá u pohovorů v zahraničních
firmách. Neboj, při pohovoru na juniorskou pozici se s ním asi nesetkáš :)

function kolize(a, b) {
	return (!( a.x + a.sirka < b.x
		|| b.x + b.sirka < a.x
		|| a.y + a.vyska < b.y
		|| b.y + b.vyska < a.y));
}
*/





const panacek = {
	x: 200,
	y: 100,
	sirka: 64,
vyska:70,
element: document.querySelector('#panacek')
};


umisti();
//volám funkci


document.addEventListener('keydown',posunPanacka);

function posunPanacka(e){

//posun doprava panáčka

if (e.code==='ArrowRight'){
	panacek.x +=10;
	if(panacek.x + panacek.sirka > window.innerWidth){
		panacek.x= window.innerWidth-panacek.sirka;
		
	}
panacek.element.src = 'images/panacek-vpravo.png';


	//umisti();
//umisti nemusím všude psát, hodně kódu

}else if (e.code ==='ArrowLeft'){
	panacek.x -=10;
	//umisti();
	if(panacek.x<0){
		panacek.x=0;
		
	}
panacek.element.src = 'images/panacek-vlevo.png';

//window.innerWidth souřadnice vpavo okna
//window.innerHeight	


}else if (e.code ==='ArrowUp'){
	panacek.y -=10;
	if(panacek.y<0){
		panacek.y=0;
//	umisti();
	}
panacek.element.src = 'images/panacek-nahoru.png';


}if (e.code ==='ArrowDown'){
		panacek.y +=10;
		if(panacek.y + panacek.vyska>window.innerHeight){
			panacek.y=window.innerHeight-panacek.vyska;

			
		}
		panacek.element.src = 'images/panacek-dolu.png';
		umisti();
}
}


//vyberu panáčka z css proto style
function umisti(){
panacek.element.style.left= `${panacek.x}px `;
panacek.element.style.top= `${panacek.y}px `;
}