var pup = document.getElementById("popup");
var wallArray = new Array();
	var tempX = 0;
	var tempY = 0;


	function getMouseXY(e) {
	   
	      tempX = e.pageX;
	      tempY = e.pageY;
	   

	    if (tempX < 0){tempX = 0;}
	    if (tempY < 0){tempY = 0;}  
		//window.alert(tempX);
	   pup.style.left=tempX+boxLeft-document.documentElement.scrollLeft+'px';
	   pup.style.top=tempY+boxTop-document.documentElement.scrollTop+'px';

    return true;
  }


document.onmousemove=getMouseXY;



function writeWall()
{
	document.write("<center><table align='center' cellpadding=0 cellspacing=0>");
	for(i=1;i<wallArray.length;i++)
	{
		if (wallArray[i]!=null)
		{
		document.write("<tr>");
		for(j=1;j<wallArray[i].length;j++)
		{
			if(wallArray[i][j]!=null)
			{
				document.write(wallArray[i][j]);		
			}
		}
		document.write("</tr>");
		}
	}
	document.write("</table></center>");
}

function wall(rowpos,colpos,imgurl,link,pname,txtval,colcode,fcolcode)
{
	if (wallArray[rowpos]==null)
	{
		wallArray[rowpos] = new Array();
	}
	
	if (imgurl != '')
	{
		wallArray[rowpos][colpos]= "<td><a href='"+link+"' class='memwall'><img src='" + imgurl + "' width='"+imageWidth+"px' height='"+imageHeight+"px' border='0' id='hunter_img' onmouseover='pup.style.display=&quot;&quot;;pup.innerHTML=&quot;<b>"+pname+"</b><br>"+ txtval + "&quot;;pup.style.backgroundColor=&quot;#"+colcode+"&quot;;pup.style.color=&quot;#"+fcolcode+"&quot;;' onmouseout='pup.style.display=&quot;none&quot;;pup.innerHTML=&quot;&quot;;'></a></td>";
	}
	else
	{	
		wallArray[rowpos][colpos]= "<td></td>";
	}
	
}