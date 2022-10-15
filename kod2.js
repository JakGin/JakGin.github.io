window.onload = function(){

	
	document.getElementById('button2').onclick = przycisk2Click;
	document.getElementById('button1').onclick = przycisk1Click;

	var flaga= false;
	var locker = true;
	var canvas = document.getElementById("cv1");
	var ctx = canvas.getContext("2d");
	canvas.addEventListener("click", handleClick, false);
	var x, y;
    var kod = [], stan = [], i, n_kod = 5, liczba_wierszy = 8, j, podpowiedz = [];
    var xp = 310, yp = 40;
	x1 = Math.floor(Math.random()*800);
	y1 = Math.floor(Math.random()*600);

    for(i=0;i<n_kod;i++)
    {
        kod[i] = Math.floor(Math.random()*6 + 1);
    }

    for(i=0;i<liczba_wierszy;i++)
    {
        stan[i] = [];
    }

    for(i=0;i<liczba_wierszy;i++)
    {
        for(j=0;j<n_kod;j++)
        {
            stan[i][j] = 0;
        }
    }

    
	kolor1 = "#FF00FF";
	kolor2 = "#0000FF";
	kolor3 = "#00FF00";
	kolor4 = "#FF0000";
	kolor5 = "#FFFF00";
	kolor6 = "#00FFFF";
	kolor7 = "#50330e";
	kolor = kolor1;

	poz = 0;

    kolorramka = "#FFFFFF";

    bok = 100;
    xk = 10;
    yk = 10;
    
    
    ctx.beginPath();
    ctx.fillStyle = kolor1;
    ctx.fillRect(xk,yk,bok,bok);
    ctx.strokeStyle = kolorramka;
    ctx.rect(xk,yk,bok,bok);
    ctx.stroke(); 

    ctx.fillStyle = kolor2;
    ctx.fillRect(xk + bok,yk,bok,bok);
    ctx.strokeStyle = kolorramka;
    ctx.rect(xk + bok,yk,bok,bok);
    ctx.stroke(); 

    ctx.fillStyle = kolor3;
    ctx.fillRect(xk,yk + bok,bok,bok);
    ctx.strokeStyle = kolorramka;
    ctx.rect(xk,yk + bok,bok,bok);
    ctx.stroke(); 

    ctx.fillStyle = kolor4;
    ctx.fillRect(xk + bok,yk + bok,bok,bok);
    ctx.strokeStyle = kolorramka;
    ctx.rect(xk + bok,yk + bok,bok,bok);
    ctx.stroke(); 

    ctx.fillStyle = kolor5;
    ctx.fillRect(xk,yk + 2 * bok,bok,bok);
    ctx.strokeStyle = kolorramka;
    ctx.rect(xk,yk + 2 * bok,bok,bok);
    ctx.stroke(); 

    ctx.fillStyle = kolor6;
    ctx.fillRect(xk + bok,yk + 2 * bok,bok,bok);
    ctx.strokeStyle = kolorramka;
    ctx.rect(xk + bok,yk + 2 * bok,bok,bok);
    ctx.stroke(); 


    ctx.fillStyle = kolor;
    ctx.fillRect(xk,yk + 3.5 * bok,2 * bok,2 * bok);
    ctx.strokeStyle = kolorramka;
    ctx.rect(xk,yk + 3.5 * bok,2 * bok, 2 * bok);

    ctx.stroke();   
    ctx.closePath();
    plansza();
	

/*
	ctx.lineWidth = 1;
	ctx.strokeStyle = "blue";
	ctx.fillStyle = kolor1;

	ctx.rect(x,y,100,100);
	ctx.font = "20pt Arial";
	ctx.fillText("To jest napis!",50,27);
	ctx.stroke(); 


	ctx.beginPath();
	ctx.moveTo(x1, y1);
	x = Math.floor(Math.random()*800);
	y = Math.floor(Math.random()*600);
	ctx.lineTo(x,y);
	x = Math.floor(Math.random()*800);
	y = Math.floor(Math.random()*600);
	ctx.lineTo(x,y);
	ctx.lineTo(x1,y1);
	ctx.fill();
	ctx.closePath();

	ctx.stroke(); 
	ctx.beginPath();
	ctx.arc(200, 200, 50, 0, Math.PI);

	ctx.closePath();
	ctx.stroke(); 
	//ctx.fillStyle = "#ffffff";
	//ctx.fill();
*/


    function plansza()
    {
        ctx.beginPath();
        ctx.fillStyle = "#b49772";
        ctx.strokeStyle = "#50330e";
        ctx.fillRect(xp,yp,480,500);
        ctx.rect(xp,yp,480,500);


	for(j=0;j<n_kod;j++)
	{
                if(kod[j]==1)ctx.fillStyle = kolor7;
                if(kod[j]==2)ctx.fillStyle = kolor7;
                if(kod[j]==3)ctx.fillStyle = kolor7;
                if(kod[j]==4)ctx.fillStyle = kolor7;
                if(kod[j]==5)ctx.fillStyle = kolor7;
                if(kod[j]==6)ctx.fillStyle = kolor7;

		ctx.fillRect(xp+40+j*50,yp+10,30,30);
                ctx.strokeStyle = "#50330e";
		ctx.rect(xp+40+j*50,yp+10,30,30);
	}

        for(i=0;i<liczba_wierszy;i++)
        {
            for(j=0;j<n_kod;j++)
            {
                if(stan[i][j]==0)
                {
                    ctx.rect(xp+40+j*50,yp+450-i*55,30,30);
                }
                else
                {
                    if(stan[i][j]==1)ctx.fillStyle = kolor1;
                    if(stan[i][j]==2)ctx.fillStyle = kolor2;
                    if(stan[i][j]==3)ctx.fillStyle = kolor3;
                    if(stan[i][j]==4)ctx.fillStyle = kolor4;
                    if(stan[i][j]==5)ctx.fillStyle = kolor5;
                    if(stan[i][j]==6)ctx.fillStyle = kolor6;
                    
                    ctx.fillRect(xp+40+j*50,yp+450-i*55,30,30);
                    ctx.strokeStyle = "#50330e";
                    ctx.rect(xp+40+j*50,yp+450-i*55,30,30);
                }
            }
		
	    sprawdzaj(i);
	    for(j=0;j<n_kod;j++)
	    {	
			if(i>=poz)
			{
				ctx.rect(xp+40+270+j*30,yp+450+8-i*55,15,15);
			}
			else
			{
				if(podpowiedz[j]==2) ctx.fillStyle = "#000000";
			     	if(podpowiedz[j]==1) ctx.fillStyle = "#ffffff";
				
				if(podpowiedz[j]==1 || podpowiedz[j]==2)
				{
	                    		ctx.fillRect(xp+40+270+j*30,yp+450+8-i*55,15,15);
				}
		            	ctx.strokeStyle = "#50330e";
			    	ctx.rect(xp+40+270+j*30,yp+450+8-i*55,15,15);
			}
	    }
        }
        
        ctx.font = "10pt Arial";
        ctx.fillStyle = "#50330e";
        for(i=1;i<=liczba_wierszy;i++)
        {
    	    ctx.fillText(""+i,xp+22,yp+470-(i-1)*55);
        }

        ctx.closePath();
        ctx.stroke();	
    }
	function przycisk1Click() {

		var j;
		
		znak = 1;
		for(j=0;j<5;j++)
		{
			if(stan[poz][j]==0) znak = 0;
		}
				
		if(poz<8 && znak==1) 
		{
			if(poz==7)
			{
				flaga=true;
			}
			poz++;
			plansza();
		}

		if(flaga==true)
		{
			for(j=0;j<n_kod;j++)
			{
			if(kod[j]==1)ctx.fillStyle = kolor1;
			if(kod[j]==2)ctx.fillStyle = kolor2;
	        if(kod[j]==3)ctx.fillStyle = kolor3;
	        if(kod[j]==4)ctx.fillStyle = kolor4;
	        if(kod[j]==5)ctx.fillStyle = kolor5;
	        if(kod[j]==6)ctx.fillStyle = kolor6;

	        ctx.fillRect(xp+40+j*50,yp+10,30,30);
	                ctx.strokeStyle = "#50330e";
			ctx.rect(xp+40+j*50,yp+10,30,30);
			}
			locker = false;
		}
	};

	function przycisk2Click() {

		location.reload();
	}

	
	

		function handleClick(e){
		  var x = e.offsetX;
		  var y = e.offsetY;

	        if(x>xk && x<xk+bok && y>yk && y<yk+bok) kolor = kolor1;
	        if(x>xk+bok && x<xk+2*bok && y>yk && y<yk+bok) kolor = kolor2;
	        if(x>xk && x<xk+bok && y>yk+bok && y<yk+2*bok) kolor = kolor3;
	        if(x>xk+bok && x<xk+2*bok && y>yk+bok && y<yk+2*bok) kolor = kolor4;
	        if(x>xk && x<xk+bok && y>yk+2*bok && y<yk+3*bok) kolor = kolor5;
	        if(x>xk+bok && x<xk+2*bok && y>yk+2*bok && y<yk+3*bok) kolor = kolor6;


	        if(x>xp+40 && x<xp+40+30 && y>yp+450-poz*55 && y<yp+450+30-poz*55)
	        {
	            stan[poz][0] = kolorliczba(kolor);
	        }

	        if(x>xp+40+50 && x<xp+40+30+50 && y>yp+450-poz*55 && y<yp+450+30-poz*55)
	        {
	            stan[poz][1] = kolorliczba(kolor);
	        }

	        if(x>xp+40+100 && x<xp+40+30+100 && y>yp+450-poz*55 && y<yp+450+30-poz*55)
	        {
	            stan[poz][2] = kolorliczba(kolor);
	        }

	        if(x>xp+40+150 && x<xp+40+30+150 && y>yp+450-poz*55 && y<yp+450+30-poz*55)
	        {
	            stan[poz][3] = kolorliczba(kolor);
	        }

	        if(x>xp+40+200 && x<xp+40+30+200 && y>yp+450-poz*55 && y<yp+450+30-poz*55)
	        {
	            stan[poz][4] = kolorliczba(kolor);
	        }

	        if(locker == true)
	        {
		        ctx.fillStyle = kolor;
		        ctx.fillRect(xk,yk + 3.5 * bok,2 * bok,2 * bok);
		        ctx.strokeStyle = kolorramka;
		        ctx.rect(xk,yk + 3.5 * bok,2 * bok, 2 * bok);
		        ctx.stroke(); 

		        
	    		plansza();
    		}
	    	
		}
	


    function kolorliczba(kolor)
    {
        if(kolor==kolor1) return 1;
        if(kolor==kolor2) return 2;
        if(kolor==kolor3) return 3;
        if(kolor==kolor4) return 4;
        if(kolor==kolor5) return 5;
        if(kolor==kolor6) return 6;
    }
    
    function sprawdzaj(wiersz)
    {
	var pozycja = 0, j, kod_pom = [], k, wiersz_pom = [], liczba=0;
	


	for(j=0;j<n_kod;j++)
	{
		podpowiedz[j] = 0;
		kod_pom[j] = kod[j];
		wiersz_pom[j] = stan[wiersz][j];
	}

	for(j=0;j<n_kod;j++)
	{
		if(kod_pom[j]==wiersz_pom[j])
		{
			podpowiedz[pozycja] = 2;
			kod_pom[j] = 0;
			wiersz_pom[j] = 0;
			pozycja++;
			liczba++;
		}
	}

	if(liczba==5)
	{
		flaga=true;
	}

	for(j=0;j<n_kod;j++)
	{
		for(k=0;k<n_kod;k++)
		{
			if(kod_pom[j]==wiersz_pom[k] && kod_pom[j]!=0)
			{
				podpowiedz[pozycja] = 1;
				kod_pom[j] = 0;
				wiersz_pom[k] = 0;
				pozycja++;
			}
		}
	}

    }	
}
 