var haslo = new Array(30)

haslo[0] = "Fortuna kołem się toczy";
haslo[1] = "Trafiło się ślepej kurze ziarno";
haslo[2] = "Niedaleko pada jabłko od jabłoni";
haslo[3] = "kropla drąży skałę";
haslo[4] = "Szewc bez butów chodzi";
haslo[5] = "Mądry Polak po szkodzie";
haslo[6] = "Fryderyk Chopin";
haslo[7] = "stanisław małachowski";
haslo[8] = "Sigmund Freud";
haslo[9] = "jakub błaszczykowski";
haslo[10] = "wisława szymborska";
haslo[11] = "mikołaj kopernik";
haslo[12] = "piłka ręczna";
haslo[13] = "tenis stołowy";
haslo[14] = "rzut dyskiem";
haslo[15] = "badminton";
haslo[16] = "skoki narciarskie";
haslo[17] = "bieg przez płotki";
haslo[18] = "lot nad kukułczym gniazdem";
haslo[19] = "skazani na shawshank";
haslo[20] = "forrest gump";
haslo[21] = "ojciec chrzestny";
haslo[22] = "pulp fiction";
haslo[23] = "władca pierścieni";
haslo[24] = "szarlotka z lodami";
haslo[25] = "kogel mogel";
haslo[26] = "zmywarka do naczyń";
haslo[27] = "gofry z bitą śmietaną";
haslo[28] = "pieczenie ciasta";



var cyfra = Math.floor(Math.random()*30);

haslo[cyfra] = haslo[cyfra].toUpperCase();

var haslo1 = "";

var dlugosc = haslo[cyfra].length;

var yes = new Audio("muzyka/yes.wav");
var no = new Audio("muzyka/no.wav");
var win = new Audio("muzyka/win.wav");
var loss = new Audio("muzyka/loss.wav");

var ile_skuch = 0;

for(i=0;i<dlugosc;i++)
{
	if (haslo[cyfra].charAt(i)==" ") haslo1 = haslo1 + " ";
	else haslo1 = haslo1 + "-";
}

function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML = haslo1;
	if (cyfra <= 5) document.getElementById("kategoria").innerHTML = "PRZYSŁOWIE";
	if (cyfra >=6 && cyfra <=11) document.getElementById("kategoria").innerHTML = "ZNANA  POSTAĆ";
	if (cyfra >=12 && cyfra <=17) document.getElementById("kategoria").innerHTML = "SPORT";
	if (cyfra >=18 && cyfra <=23) document.getElementById("kategoria").innerHTML = "FILM";
	if (cyfra >=24) document.getElementById("kategoria").innerHTML = "KUCHNIA";


}

window.onload = start;

var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";


function start()
{
	var tresc_diva = "";
	
	for(i=0;i<=34;i++)
	{
		var element = "lit" + i;
		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')"id="'+element+'">'+litery[i]+'</div>';
		if ((i+1)%7==0) tresc_diva = tresc_diva + '<div style="clear: both;"></div>';
	}
	
	document.getElementById("alfabet").innerHTML = tresc_diva;
	
	
	wypisz_haslo()
}

String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}

function sprawdz(nr)
{
	
	var trafiona = false;
	
	for(i=0; i<dlugosc; i++)
	{
		if (haslo[cyfra].charAt(i) == litery[nr]) 
		{
			trafiona = true;
			haslo1 = haslo1.ustawZnak(i,litery[nr]);
		}
	}
	if (trafiona == true)
	{
		yes.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		
		wypisz_haslo();
	}
	else
	{
		no.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";
		
		document.getElementById(element).setAttribute("onclick",";");
		
		//skucha
		ile_skuch++;
		var obraz = "img/s"+ile_skuch+".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" />'
	}
	
	//wygrana
	if(haslo[cyfra] == haslo1)
	{
		win.play();
		document.getElementById("alfabet").innerHTML = '<div class="wygrana">Tak jest!</div> Podano prawidłowe hasło: <span style = "font-size: 36px;">'+haslo[cyfra]+'</span><br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>' 
	}
	
	//przegrana
	if (ile_skuch>=8)
	{
		loss.play();
		document.getElementById("alfabet").innerHTML = '<div class="przegrana">Przegrana!</div> Prawidłowe hasło: <span style="font-size: 36px;">'+haslo[cyfra]+'</span><br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>' 
	}
	
}








