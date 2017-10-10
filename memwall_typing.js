var pup = $("#popup");
var wallArray = new Array();
	var tempX = 0;
	var tempY = 0;

	
	function getMouseXY(e) {
	   
	      tempX = e.pageX;
	      tempY = e.pageY;
	   

	    if (tempX < 0){tempX = 0;}
	    if (tempY < 0){tempY = 0;}  
	
	   $(pup).css("left", tempX+boxLeft-document.documentElement.scrollLeft+'px');
	   $(pup).css("top", tempY+boxTop-document.documentElement.scrollTop+'px');

    return true;
  }


document.onmousemove=getMouseXY;



function writeWall()
{
	document.write("<center>");
	for(i=1;i<wallArray.length;i++)
	{
		if (wallArray[i]!=null)
		{
		document.write("<table align='center'><tr>");
		for(j=1;j<wallArray[i].length;j++)
		{
			if(wallArray[i][j]!=null)
			{
				document.write(wallArray[i][j]);		
			}
		}
		document.write("</tr></table>");
		}
	}
	document.write("</center>");
	
	$(".memwall img").mouseover(onMouseOver);
	$(".memwall img").mouseout(onMouseOut);
}
var test = null;
function onMouseOver() {
        test = this;
   	var pname = $(this).data("pname");
	var txtVal = $(this).data("txtval");
	var colcode = $(this).data("colcode");
	var fcolcode = $(this).data("fcolcode");
	$(pup).show();
	$(pup).css("background-color", "#"+colcode);
	$(pup).find(".extText, .p-name").css("color", "#"+fcolcode);
	var playerName = "";
	var txtValue = "";
	var pi = 0;
	var ti = 0;
	function typePlayer(obj) {
                if (!$(test).is(obj)) return;
		playerName = pname.slice(0, ++pi);
		
		$(pup).find(".p-name").html(playerName);
                if (playerName === pname) return;
		setTimeout(typePlayer, 80, obj);
	}
	function typeTxt(obj) {
                if (!$(test).is(obj)) return;
		txtValue = txtVal.slice(0, ++ti);
		
		$(pup).find(".extText").html(txtValue);
                if (txtValue === txtVal) return;
		setTimeout(typeTxt, 80, obj);
	}
	
	typePlayer(this);
	typeTxt(this);
}

function onMouseOut() {
	$(pup).hide();
	$(pup).find(".p-name").text("");
	$(pup).find(".extText").text("");
}

function wall(rowpos,colpos,imgurl,link,pname,txtval,colcode,fcolcode)
{
	if (wallArray[rowpos]==null)
	{
		wallArray[rowpos] = new Array();
	}
	
	wallArray[rowpos][colpos]= "<td><a href='"+link+"' class='memwall'><img src='" + imgurl + "' width='"+imageWidth+"px' height='"+imageHeight+"px' border='0' id='hunter_img' data-pname='" + pname + "' data-txtval='" + txtval + "' data-colcode='" + colcode + "' data-fcolcode='" + fcolcode + "'></a></td>";
	
}