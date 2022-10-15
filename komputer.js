var click = 0;
var circle = '<img src="img/circle.png">';
var cross = '<img src="img/cross.png">';
var flaga = false;
var locker = false;
var znak = false;


function sprawdz(nr)
{
	if(click%2 == 0 && locker==false)
	{
		document.getElementById(nr).innerHTML = cross;
		document.getElementById(nr).setAttribute("onclick",";");
		click++;
		wynik_cross();
		if(flaga==true)
		{
			document.getElementById("footer").innerHTML = '<div style="margin-right:20px; display: inline-block;">WYGRAŁ</div> KRZYŻYK ! <div id="reset" onclick="location.reload()">ZAGRAJ PONOWNIE</div>';
			locker = true;
		}
		remis();
		if(locker==false)
		{
			//ruch_komputera();
			setTimeout(function() { ruch_komputera() }, 100);
		}
	}
	/*else if (locker==false)
	{
		document.getElementById(nr).innerHTML = circle;
		document.getElementById(nr).setAttribute("onclick",";");
		click++;
		wynik_circle();
		if(flaga==true)
		{
			document.getElementById("footer").innerHTML = '<div style="margin-right:20px; display: inline-block;">WYGRAŁO</div> KÓŁKO ! <div id="reset" onclick="location.reload()">ZAGRAJ PONOWNIE</div>';
			locker = true;
		}
		remis();
		if(dodatek == true)
		{
			setTimeout(function() { ruch_komputera() }, 350);
			click++;
			wynik_cross();
			if(flaga==true)
			{
				document.getElementById("footer").innerHTML = '<div style="margin-right:20px; display: inline-block;">WYGRAŁ</div> KRZYŻYK ! <div id="reset" onclick="location.reload()">ZAGRAJ PONOWNIE</div>';
				locker = true;
			}
			remis();
		}
	}*/
}

function kto_zaczyna(argument,kolor)
{
	if(click==0 || click==1)
	{
		if(kolor == 7 && click==0)
		{
			document.getElementById("kolko").style.background = "#209781";
			document.getElementById("krzyzyk").style.background = "#26282E";
		}

		if(kolor == 8)
		{
			document.getElementById("krzyzyk").style.background = "#209781";
			document.getElementById("kolko").style.background = "#26282E";
		}
	}

	if(click==0 || click==1)
	{
		if(argument == 0 && znak == false && click == 0) 
		{
			click++;
			znak = true;
		}	
		else if(znak == true && argument == 1)
		{
			click--;
			znak = false;
		}
	}
}

function remis()
{
	if(click == 9 && znak == false && flaga != true)
	{
		document.getElementById("footer").innerHTML = '<div>REMIS</div> <div id="reset" onclick="location.reload()">ZAGRAJ PONOWNIE</div>';
		locker = true;
	}
	else if(click == 10 && flaga != true)
	{
		document.getElementById("footer").innerHTML = '<div>REMIS</div> <div id="reset" onclick="location.reload()">ZAGRAJ PONOWNIE</div>';
		locker = true;
	}
}

function wynik_cross()
{
	if(document.getElementById(0).innerHTML == cross && document.getElementById(3).innerHTML == cross && document.getElementById(6).innerHTML == cross)
	{
		flaga = true;
		document.getElementById(0).style.background = "#FAFAD2";
		document.getElementById(3).style.background = "#FAFAD2";
		document.getElementById(6).style.background = "#FAFAD2";
	}
	else if(document.getElementById(1).innerHTML == cross && document.getElementById(4).innerHTML == cross && document.getElementById(7).innerHTML == cross)
	{
		flaga = true;
		document.getElementById(1).style.background = "#FAFAD2";
		document.getElementById(4).style.background = "#FAFAD2";
		document.getElementById(7).style.background = "#FAFAD2";
	}
	else if(document.getElementById(2).innerHTML == cross && document.getElementById(5).innerHTML == cross && document.getElementById(8).innerHTML == cross)
	{
		flaga = true;
		document.getElementById(2).style.background = "#FAFAD2";
		document.getElementById(5).style.background = "#FAFAD2";
		document.getElementById(8).style.background = "#FAFAD2";
	}
	else if(document.getElementById(0).innerHTML == cross && document.getElementById(1).innerHTML == cross && document.getElementById(2).innerHTML == cross)
	{
		flaga = true;
		document.getElementById(0).style.background = "#FAFAD2";
		document.getElementById(1).style.background = "#FAFAD2";
		document.getElementById(2).style.background = "#FAFAD2";
	}
	else if(document.getElementById(3).innerHTML == cross && document.getElementById(4).innerHTML == cross && document.getElementById(5).innerHTML == cross)
	{
		flaga = true;
		document.getElementById(3).style.background = "#FAFAD2";
		document.getElementById(4).style.background = "#FAFAD2";
		document.getElementById(5).style.background = "#FAFAD2";
	}
	else if(document.getElementById(6).innerHTML == cross && document.getElementById(7).innerHTML == cross && document.getElementById(8).innerHTML == cross)
	{
		flaga = true;
		document.getElementById(6).style.background = "#FAFAD2";
		document.getElementById(7).style.background = "#FAFAD2";
		document.getElementById(8).style.background = "#FAFAD2";
	}
	else if(document.getElementById(0).innerHTML == cross && document.getElementById(4).innerHTML == cross && document.getElementById(8).innerHTML == cross)
	{
		flaga = true;
		document.getElementById(0).style.background = "#FAFAD2";
		document.getElementById(4).style.background = "#FAFAD2";
		document.getElementById(8).style.background = "#FAFAD2";
	}
	else if(document.getElementById(2).innerHTML == cross && document.getElementById(4).innerHTML == cross && document.getElementById(6).innerHTML == cross)
	{
		flaga = true;
		document.getElementById(2).style.background = "#FAFAD2";
		document.getElementById(4).style.background = "#FAFAD2";
		document.getElementById(6).style.background = "#FAFAD2";
	}
}

function wynik_circle()
{
	if(document.getElementById(0).innerHTML == circle && document.getElementById(3).innerHTML == circle && document.getElementById(6).innerHTML == circle)
	{
		flaga = true;
		document.getElementById(0).style.background = "#FAFAD2";
		document.getElementById(3).style.background = "#FAFAD2";
		document.getElementById(6).style.background = "#FAFAD2";
	}
	else if(document.getElementById(1).innerHTML == circle && document.getElementById(4).innerHTML == circle && document.getElementById(7).innerHTML == circle)
	{
		flaga = true;
		document.getElementById(1).style.background = "#FAFAD2";
		document.getElementById(4).style.background = "#FAFAD2";
		document.getElementById(7).style.background = "#FAFAD2";
	}
	else if(document.getElementById(2).innerHTML == circle && document.getElementById(5).innerHTML == circle && document.getElementById(8).innerHTML == circle)
	{
		flaga = true;
		document.getElementById(2).style.background = "#FAFAD2";
		document.getElementById(5).style.background = "#FAFAD2";
		document.getElementById(8).style.background = "#FAFAD2";
	}
	else if(document.getElementById(0).innerHTML == circle && document.getElementById(1).innerHTML == circle && document.getElementById(2).innerHTML == circle)
	{
		flaga = true;
		document.getElementById(0).style.background = "#FAFAD2";
		document.getElementById(1).style.background = "#FAFAD2";
		document.getElementById(2).style.background = "#FAFAD2";
	}
	else if(document.getElementById(3).innerHTML == circle && document.getElementById(4).innerHTML == circle && document.getElementById(5).innerHTML == circle)
	{
		flaga = true;
		document.getElementById(3).style.background = "#FAFAD2";
		document.getElementById(4).style.background = "#FAFAD2";
		document.getElementById(5).style.background = "#FAFAD2";
	}
	else if(document.getElementById(6).innerHTML == circle && document.getElementById(7).innerHTML == circle && document.getElementById(8).innerHTML == circle)
	{
		flaga = true;
		document.getElementById(6).style.background = "#FAFAD2";
		document.getElementById(7).style.background = "#FAFAD2";
		document.getElementById(8).style.background = "#FAFAD2";
	}
	else if(document.getElementById(0).innerHTML == circle && document.getElementById(4).innerHTML == circle && document.getElementById(8).innerHTML == circle)
	{
		flaga = true;
		document.getElementById(0).style.background = "#FAFAD2";
		document.getElementById(4).style.background = "#FAFAD2";
		document.getElementById(8).style.background = "#FAFAD2";
	}
	else if(document.getElementById(2).innerHTML == circle && document.getElementById(4).innerHTML == circle && document.getElementById(6).innerHTML == circle)
	{
		flaga = true;
		document.getElementById(2).style.background = "#FAFAD2";
		document.getElementById(4).style.background = "#FAFAD2";
		document.getElementById(6).style.background = "#FAFAD2";
	}
}

function ruch_komputera()
{
	//atak
	if(document.getElementById(0).innerHTML == circle && document.getElementById(1).innerHTML == circle && document.getElementById(2).innerHTML == "")
	{
		document.getElementById(2).innerHTML = circle;
		document.getElementById(2).setAttribute("onclick",";");
	}
	else if(document.getElementById(3).innerHTML == circle && document.getElementById(4).innerHTML == circle && document.getElementById(5).innerHTML == "")
	{
		document.getElementById(5).innerHTML = circle;
		document.getElementById(5).setAttribute("onclick",";");
	}
	else if(document.getElementById(6).innerHTML == circle && document.getElementById(7).innerHTML == circle && document.getElementById(8).innerHTML == "")
	{
		document.getElementById(8).innerHTML = circle;
		document.getElementById(8).setAttribute("onclick",";");
	}
	else if(document.getElementById(1).innerHTML == circle && document.getElementById(2).innerHTML == circle && document.getElementById(0).innerHTML == "")
	{
		document.getElementById(0).innerHTML = circle;
		document.getElementById(0).setAttribute("onclick",";");
	}
	else if(document.getElementById(4).innerHTML == circle && document.getElementById(5).innerHTML == circle && document.getElementById(3).innerHTML == "")
	{
		document.getElementById(3).innerHTML = circle;
		document.getElementById(3).setAttribute("onclick",";");
	}
	else if(document.getElementById(7).innerHTML == circle && document.getElementById(8).innerHTML == circle && document.getElementById(6).innerHTML == "")
	{
		document.getElementById(6).innerHTML = circle;
		document.getElementById(6).setAttribute("onclick",";");
	}
	else if(document.getElementById(0).innerHTML == circle && document.getElementById(3).innerHTML == circle && document.getElementById(6).innerHTML == "")
	{
		document.getElementById(6).innerHTML = circle;
		document.getElementById(6).setAttribute("onclick",";");
	}
	else if(document.getElementById(1).innerHTML == circle && document.getElementById(4).innerHTML == circle && document.getElementById(7).innerHTML == "")
	{
		document.getElementById(7).innerHTML = circle;
		document.getElementById(7).setAttribute("onclick",";");
	}
	else if(document.getElementById(2).innerHTML == circle && document.getElementById(5).innerHTML == circle && document.getElementById(8).innerHTML == "")
	{
		document.getElementById(8).innerHTML = circle;
		document.getElementById(8).setAttribute("onclick",";");
	}
	else if(document.getElementById(6).innerHTML == circle && document.getElementById(3).innerHTML == circle && document.getElementById(0).innerHTML == "")
	{
		document.getElementById(0).innerHTML = circle;
		document.getElementById(0).setAttribute("onclick",";");
	}
	else if(document.getElementById(4).innerHTML == circle && document.getElementById(7).innerHTML == circle && document.getElementById(1).innerHTML == "")
	{
		document.getElementById(1).innerHTML = circle;
		document.getElementById(1).setAttribute("onclick",";");
	}
	else if(document.getElementById(8).innerHTML == circle && document.getElementById(5).innerHTML == circle && document.getElementById(2).innerHTML == "")
	{
		document.getElementById(2).innerHTML = circle;
		document.getElementById(2).setAttribute("onclick",";");
	}
	else if(document.getElementById(0).innerHTML == circle && document.getElementById(4).innerHTML == circle && document.getElementById(8).innerHTML == "")
	{
		document.getElementById(8).innerHTML = circle;
		document.getElementById(8).setAttribute("onclick",";");
	}
	else if(document.getElementById(8).innerHTML == circle && document.getElementById(4).innerHTML == circle && document.getElementById(0).innerHTML == "")
	{
		document.getElementById(0).innerHTML = circle;
		document.getElementById(0).setAttribute("onclick",";");
	}
	else if(document.getElementById(2).innerHTML == circle && document.getElementById(4).innerHTML == circle && document.getElementById(6).innerHTML == "")
	{
		document.getElementById(6).innerHTML = circle;
		document.getElementById(6).setAttribute("onclick",";");
	}
	else if(document.getElementById(6).innerHTML == circle && document.getElementById(4).innerHTML == circle && document.getElementById(2).innerHTML == "")
	{
		document.getElementById(2).innerHTML = circle;
		document.getElementById(2).setAttribute("onclick",";");
	}
	else if(document.getElementById(0).innerHTML == circle && document.getElementById(6).innerHTML == circle && document.getElementById(3).innerHTML == "")
	{
		document.getElementById(3).innerHTML = circle;
		document.getElementById(3).setAttribute("onclick",";");
	}
	else if(document.getElementById(1).innerHTML == circle && document.getElementById(7).innerHTML == circle && document.getElementById(4).innerHTML == "")
	{
		document.getElementById(4).innerHTML = circle;
		document.getElementById(4).setAttribute("onclick",";");
	}
	else if(document.getElementById(2).innerHTML == circle && document.getElementById(8).innerHTML == circle && document.getElementById(5).innerHTML == "")
	{
		document.getElementById(5).innerHTML = circle;
		document.getElementById(5).setAttribute("onclick",";");
	}
	else if(document.getElementById(0).innerHTML == circle && document.getElementById(2).innerHTML == circle && document.getElementById(1).innerHTML == "")
	{
		document.getElementById(1).innerHTML = circle;
		document.getElementById(1).setAttribute("onclick",";");
	}
	else if(document.getElementById(3).innerHTML == circle && document.getElementById(5).innerHTML == circle && document.getElementById(4).innerHTML == "")
	{
		document.getElementById(4).innerHTML = circle;
		document.getElementById(4).setAttribute("onclick",";");
	}
	else if(document.getElementById(6).innerHTML == circle && document.getElementById(8).innerHTML == circle && document.getElementById(7).innerHTML == "")
	{
		document.getElementById(7).innerHTML = circle;
		document.getElementById(7).setAttribute("onclick",";");
	}
	else if(document.getElementById(0).innerHTML == circle && document.getElementById(8).innerHTML == circle && document.getElementById(4).innerHTML == "")
	{
		document.getElementById(4).innerHTML = circle;
		document.getElementById(4).setAttribute("onclick",";");
	}
	else if(document.getElementById(2).innerHTML == circle && document.getElementById(6).innerHTML == circle && document.getElementById(4).innerHTML == "")
	{
		document.getElementById(4).innerHTML = circle;
		document.getElementById(4).setAttribute("onclick",";");
	}
	//obrona
	else if(document.getElementById(0).innerHTML == cross && document.getElementById(1).innerHTML == cross && document.getElementById(2).innerHTML == "")
	{
		document.getElementById(2).innerHTML = circle;
		document.getElementById(2).setAttribute("onclick",";");
	}
	else if(document.getElementById(3).innerHTML == cross && document.getElementById(4).innerHTML == cross && document.getElementById(5).innerHTML == "")
	{
		document.getElementById(5).innerHTML = circle;
		document.getElementById(5).setAttribute("onclick",";");
	}
	else if(document.getElementById(6).innerHTML == cross && document.getElementById(7).innerHTML == cross && document.getElementById(8).innerHTML == "")
	{
		document.getElementById(8).innerHTML = circle;
		document.getElementById(8).setAttribute("onclick",";");
	}
	else if(document.getElementById(1).innerHTML == cross && document.getElementById(2).innerHTML == cross && document.getElementById(0).innerHTML == "")
	{
		document.getElementById(0).innerHTML = circle;
		document.getElementById(0).setAttribute("onclick",";");
	}
	else if(document.getElementById(4).innerHTML == cross && document.getElementById(5).innerHTML == cross && document.getElementById(3).innerHTML == "")
	{
		document.getElementById(3).innerHTML = circle;
		document.getElementById(3).setAttribute("onclick",";");
	}
	else if(document.getElementById(7).innerHTML == cross && document.getElementById(8).innerHTML == cross && document.getElementById(6).innerHTML == "")
	{
		document.getElementById(6).innerHTML = circle;
		document.getElementById(6).setAttribute("onclick",";");
	}
	else if(document.getElementById(0).innerHTML == cross && document.getElementById(3).innerHTML == cross && document.getElementById(6).innerHTML == "")
	{
		document.getElementById(6).innerHTML = circle;
		document.getElementById(6).setAttribute("onclick",";");
	}
	else if(document.getElementById(1).innerHTML == cross && document.getElementById(4).innerHTML == cross && document.getElementById(7).innerHTML == "")
	{
		document.getElementById(7).innerHTML = circle;
		document.getElementById(7).setAttribute("onclick",";");
	}
	else if(document.getElementById(2).innerHTML == cross && document.getElementById(5).innerHTML == cross && document.getElementById(8).innerHTML == "")
	{
		document.getElementById(8).innerHTML = circle;
		document.getElementById(8).setAttribute("onclick",";");
	}
	else if(document.getElementById(6).innerHTML == cross && document.getElementById(3).innerHTML == cross && document.getElementById(0).innerHTML == "")
	{
		document.getElementById(0).innerHTML = circle;
		document.getElementById(0).setAttribute("onclick",";");
	}
	else if(document.getElementById(4).innerHTML == cross && document.getElementById(7).innerHTML == cross && document.getElementById(1).innerHTML == "")
	{
		document.getElementById(1).innerHTML = circle;
		document.getElementById(1).setAttribute("onclick",";");
	}
	else if(document.getElementById(8).innerHTML == cross && document.getElementById(5).innerHTML == cross && document.getElementById(2).innerHTML == "")
	{
		document.getElementById(2).innerHTML = circle;
		document.getElementById(2).setAttribute("onclick",";");
	}
	else if(document.getElementById(0).innerHTML == cross && document.getElementById(4).innerHTML == cross && document.getElementById(8).innerHTML == "")
	{
		document.getElementById(8).innerHTML = circle;
		document.getElementById(8).setAttribute("onclick",";");
	}
	else if(document.getElementById(8).innerHTML == cross && document.getElementById(4).innerHTML == cross && document.getElementById(0).innerHTML == "")
	{
		document.getElementById(0).innerHTML = circle;
		document.getElementById(0).setAttribute("onclick",";");
	}
	else if(document.getElementById(2).innerHTML == cross && document.getElementById(4).innerHTML == cross && document.getElementById(6).innerHTML == "")
	{
		document.getElementById(6).innerHTML = circle;
		document.getElementById(6).setAttribute("onclick",";");
	}
	else if(document.getElementById(6).innerHTML == cross && document.getElementById(4).innerHTML == cross && document.getElementById(2).innerHTML == "")
	{
		document.getElementById(2).innerHTML = circle;
		document.getElementById(2).setAttribute("onclick",";");
	}
	else if(document.getElementById(0).innerHTML == cross && document.getElementById(6).innerHTML == cross && document.getElementById(3).innerHTML == "")
	{
		document.getElementById(3).innerHTML = circle;
		document.getElementById(3).setAttribute("onclick",";");
	}
	else if(document.getElementById(1).innerHTML == cross && document.getElementById(7).innerHTML == cross && document.getElementById(4).innerHTML == "")
	{
		document.getElementById(4).innerHTML = circle;
		document.getElementById(4).setAttribute("onclick",";");
	}
	else if(document.getElementById(2).innerHTML == cross && document.getElementById(8).innerHTML == cross && document.getElementById(5).innerHTML == "")
	{
		document.getElementById(5).innerHTML = circle;
		document.getElementById(5).setAttribute("onclick",";");
	}
	else if(document.getElementById(0).innerHTML == cross && document.getElementById(2).innerHTML == cross && document.getElementById(1).innerHTML == "")
	{
		document.getElementById(1).innerHTML = circle;
		document.getElementById(1).setAttribute("onclick",";");
	}
	else if(document.getElementById(3).innerHTML == cross && document.getElementById(5).innerHTML == cross && document.getElementById(4).innerHTML == "")
	{
		document.getElementById(4).innerHTML = circle;
		document.getElementById(4).setAttribute("onclick",";");
	}
	else if(document.getElementById(6).innerHTML == cross && document.getElementById(8).innerHTML == cross && document.getElementById(7).innerHTML == "")
	{
		document.getElementById(7).innerHTML = circle;
		document.getElementById(7).setAttribute("onclick",";");
	}
	else if(document.getElementById(0).innerHTML == cross && document.getElementById(8).innerHTML == cross && document.getElementById(4).innerHTML == "")
	{
		document.getElementById(4).innerHTML = circle;
		document.getElementById(4).setAttribute("onclick",";");
	}
	else if(document.getElementById(2).innerHTML == cross && document.getElementById(6).innerHTML == cross && document.getElementById(4).innerHTML == "")
	{
		document.getElementById(4).innerHTML = circle;
		document.getElementById(4).setAttribute("onclick",";");
	}
	else if(document.getElementById(4).innerHTML == "")
	{
		document.getElementById(4).innerHTML = circle;
		document.getElementById(4).setAttribute("onclick",";");
	}
	else if(document.getElementById(4).innerHTML == cross && document.getElementById(0).innerHTML == "" && document.getElementById(1).innerHTML == "" && document.getElementById(2).innerHTML == "" && document.getElementById(3).innerHTML == "" && document.getElementById(5).innerHTML == "" && document.getElementById(6).innerHTML == "" && document.getElementById(7).innerHTML == "" && document.getElementById(8).innerHTML == "")
	{
		document.getElementById(0).innerHTML = circle;
		document.getElementById(0).setAttribute("onclick",";");
	}
	else if(document.getElementById(4).innerHTML == cross && document.getElementById(0).innerHTML == circle && document.getElementById(1).innerHTML == "" && document.getElementById(2).innerHTML == "" && document.getElementById(3).innerHTML == "" && document.getElementById(5).innerHTML == "" && document.getElementById(6).innerHTML == "" && document.getElementById(7).innerHTML == "" && document.getElementById(8).innerHTML == cross)
	{
		document.getElementById(2).innerHTML = circle;
		document.getElementById(2).setAttribute("onclick",";");
	}
	else if(document.getElementById(4).innerHTML == circle && document.getElementById(0).innerHTML == "" && document.getElementById(1).innerHTML == cross && document.getElementById(2).innerHTML == "" && document.getElementById(3).innerHTML == "" && document.getElementById(5).innerHTML == "" && document.getElementById(6).innerHTML == "" && document.getElementById(7).innerHTML == "" && document.getElementById(8).innerHTML == cross)
	{
		document.getElementById(3).innerHTML = circle;
		document.getElementById(3).setAttribute("onclick",";");
	}
	else if(document.getElementById(4).innerHTML == circle && document.getElementById(0).innerHTML == "" && document.getElementById(1).innerHTML == "" && document.getElementById(2).innerHTML == "" && document.getElementById(3).innerHTML == cross && document.getElementById(5).innerHTML == "" && document.getElementById(6).innerHTML == "" && document.getElementById(7).innerHTML == "" && document.getElementById(8).innerHTML == cross)
	{
		document.getElementById(1).innerHTML = circle;
		document.getElementById(1).setAttribute("onclick",";");
	}
	else if(document.getElementById(0).innerHTML == "" && document.getElementById(1).innerHTML == cross && document.getElementById(2).innerHTML == "" && document.getElementById(3).innerHTML == "" && document.getElementById(4).innerHTML == circle && document.getElementById(5).innerHTML == "" && document.getElementById(6).innerHTML == cross && document.getElementById(7).innerHTML == "" && document.getElementById(8).innerHTML == "")
	{
		document.getElementById(5).innerHTML = circle;
		document.getElementById(5).setAttribute("onclick",";");
	}
	else if(document.getElementById(0).innerHTML == "" && document.getElementById(1).innerHTML == "" && document.getElementById(2).innerHTML == "" && document.getElementById(3).innerHTML == "" && document.getElementById(4).innerHTML == circle && document.getElementById(5).innerHTML == cross && document.getElementById(6).innerHTML == cross && document.getElementById(7).innerHTML == "" && document.getElementById(8).innerHTML == "")
	{
		document.getElementById(1).innerHTML = circle;
		document.getElementById(1).setAttribute("onclick",";");
	}
	else if(document.getElementById(0).innerHTML == cross && document.getElementById(1).innerHTML == "" && document.getElementById(2).innerHTML == "" && document.getElementById(3).innerHTML == "" && document.getElementById(4).innerHTML == circle && document.getElementById(5).innerHTML == cross && document.getElementById(6).innerHTML == "" && document.getElementById(7).innerHTML == "" && document.getElementById(8).innerHTML == "")
	{
		document.getElementById(7).innerHTML = circle;
		document.getElementById(7).setAttribute("onclick",";");
	}
	else if(document.getElementById(0).innerHTML == cross && document.getElementById(1).innerHTML == "" && document.getElementById(2).innerHTML == "" && document.getElementById(3).innerHTML == "" && document.getElementById(4).innerHTML == circle && document.getElementById(5).innerHTML == "" && document.getElementById(6).innerHTML == "" && document.getElementById(7).innerHTML == cross && document.getElementById(8).innerHTML == "")
	{
		document.getElementById(5).innerHTML = circle;
		document.getElementById(5).setAttribute("onclick",";");
	}
	else if(document.getElementById(0).innerHTML == "" && document.getElementById(1).innerHTML == "" && document.getElementById(2).innerHTML == cross && document.getElementById(3).innerHTML == "" && document.getElementById(4).innerHTML == circle && document.getElementById(5).innerHTML == "" && document.getElementById(6).innerHTML == "" && document.getElementById(7).innerHTML == cross && document.getElementById(8).innerHTML == "")
	{
		document.getElementById(3).innerHTML = circle;
		document.getElementById(3).setAttribute("onclick",";");
	}
	else if(document.getElementById(0).innerHTML == "" && document.getElementById(1).innerHTML == "" && document.getElementById(2).innerHTML == cross && document.getElementById(3).innerHTML == cross && document.getElementById(4).innerHTML == circle && document.getElementById(5).innerHTML == "" && document.getElementById(6).innerHTML == "" && document.getElementById(7).innerHTML == "" && document.getElementById(8).innerHTML == "")
	{
		document.getElementById(7).innerHTML = circle;
		document.getElementById(7).setAttribute("onclick",";");
	}
	else if(document.getElementById(0).innerHTML == cross && document.getElementById(1).innerHTML == "" && document.getElementById(2).innerHTML == "" && document.getElementById(3).innerHTML == "" && document.getElementById(4).innerHTML == circle && document.getElementById(5).innerHTML == "" && document.getElementById(6).innerHTML == "" && document.getElementById(7).innerHTML == "" && document.getElementById(8).innerHTML == cross)
	{
		document.getElementById(1).innerHTML = circle;
		document.getElementById(1).setAttribute("onclick",";");
	}
	else if(document.getElementById(0).innerHTML == "" && document.getElementById(1).innerHTML == "" && document.getElementById(2).innerHTML == cross && document.getElementById(3).innerHTML == "" && document.getElementById(4).innerHTML == circle && document.getElementById(5).innerHTML == "" && document.getElementById(6).innerHTML == cross && document.getElementById(7).innerHTML == "" && document.getElementById(8).innerHTML == "")
	{
		document.getElementById(1).innerHTML = circle;
		document.getElementById(1).setAttribute("onclick",";");
	}
	else if(document.getElementById(0).innerHTML == "" && document.getElementById(1).innerHTML == "" && document.getElementById(2).innerHTML == "" && document.getElementById(3).innerHTML == cross && document.getElementById(4).innerHTML == circle && document.getElementById(5).innerHTML == "" && document.getElementById(6).innerHTML == "" && document.getElementById(7).innerHTML == cross && document.getElementById(8).innerHTML == "")
	{
		document.getElementById(6).innerHTML = circle;
		document.getElementById(6).setAttribute("onclick",";");
	}
	else if(document.getElementById(0).innerHTML == "" && document.getElementById(1).innerHTML == cross && document.getElementById(2).innerHTML == "" && document.getElementById(3).innerHTML == "" && document.getElementById(4).innerHTML == circle && document.getElementById(5).innerHTML == cross && document.getElementById(6).innerHTML == "" && document.getElementById(7).innerHTML == "" && document.getElementById(8).innerHTML == "")
	{
		document.getElementById(2).innerHTML = circle;
		document.getElementById(2).setAttribute("onclick",";");
	}
	else if(document.getElementById(0).innerHTML == "" && document.getElementById(1).innerHTML == "" && document.getElementById(2).innerHTML == "" && document.getElementById(3).innerHTML == "" && document.getElementById(4).innerHTML == circle && document.getElementById(5).innerHTML == cross && document.getElementById(6).innerHTML == "" && document.getElementById(7).innerHTML == cross && document.getElementById(8).innerHTML == "")
	{
		document.getElementById(8).innerHTML = circle;
		document.getElementById(8).setAttribute("onclick",";");
	}
	else if(document.getElementById(0).innerHTML == "" && document.getElementById(1).innerHTML == cross && document.getElementById(2).innerHTML == "" && document.getElementById(3).innerHTML == cross && document.getElementById(4).innerHTML == circle && document.getElementById(5).innerHTML == "" && document.getElementById(6).innerHTML == "" && document.getElementById(7).innerHTML == "" && document.getElementById(8).innerHTML == "")
	{
		document.getElementById(0).innerHTML = circle;
		document.getElementById(0).setAttribute("onclick",";");
	}

	else
	{
		var niemampomyslu = false;
		while(niemampomyslu == false)
		{
			var x1 = Math.floor(Math.random()*9);
			if(document.getElementById(x1).innerHTML == "")
			{
				document.getElementById(x1).innerHTML = circle;
				niemampomyslu = true;
			}
		}
	}

	if(click<9) click++;
	wynik_circle();
	if(flaga==true)
	{
		document.getElementById("footer").innerHTML = '<div style="margin-right:20px; display: inline-block;">WYGRAŁO</div> KÓŁKO ! <div id="reset" onclick="location.reload()">ZAGRAJ PONOWNIE</div>';
		locker = true;
	}
	remis();
}