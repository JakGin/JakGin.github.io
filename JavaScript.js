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
	}
	else if (locker==false)
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
	}
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
	}
	else if(click == 10 && flaga != true)
	{
		document.getElementById("footer").innerHTML = '<div>REMIS</div> <div id="reset" onclick="location.reload()">ZAGRAJ PONOWNIE</div>';
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
