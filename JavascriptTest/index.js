//Rondal Archer

function loadpage()
{
	// we're ging to create the labels as static items but hide an unhide them
	document.getElementById("invalidterm").style.visibility = "hidden";
	document.getElementById("invalidtype").style.visibility = "hidden"; 
	//restriction for the phrase textbox
	document.getElementById("inputTerm").maxLength = 50;
	document.getElementById("inputType").style.width= "174px";
}

 function resetform()
{
	document.getElementById("inputTerm").value = null;
	document.getElementById("inputType").selectedIndex = 0;
	document.getElementById("invalidterm").style.visibility = "hidden";
    document.getElementById("invalidtype").style.visibility = "hidden";
}	 
	
function TermError()
	{
		document.getElementById("invalidterm").style.visibility = "visible";
	}

function TypeError()
		{
		document.getElementById("invalidtype").style.visibility = "visible";
		}

// creates the phrase
function createItem()
{
var inputTerm = document.getElementById("inputTerm").value;	
var inputType = document.getElementById("inputType").selectedIndex;	
var item = document.createElement("li");
var x = document.createElement("button");	
item.appendChild(document.createTextNode(inputTerm));
item.style.color = "white";
x.appendChild(document.createTextNode("x")); 
item.appendChild(x);
x.style.color = "white"
x.style.border ="none";
x.style.float = "right"; 
    //displays the properties of the phrase 
    function display()
	{
	  document.getElementById("inputTerm").value = inputTerm ;
	  document.getElementById("inputType").selectedIndex = inputType;			
	}
	
	item.onclick = display;

	//places it in the correct location
    if(inputType == 1)
	{   
		   item.style.backgroundColor = "#00FF00";
		   x.style.backgroundColor = "#00FF00";
		   positivelist.appendChild(item); 
           	    	function remove()
					{
					positivelist.removeChild(item);
					}					
	}
	else
	{
			item.style.backgroundColor = "#FF0000";
			x.style.backgroundColor = "#FF0000";
			negativelist.appendChild(item); 
	           	    function remove()
					{
					negativelist.removeChild(item);
					}	
	}

   	x.onclick = remove;
	
}
function sortPos()
{
(function( $ ) {
	$(function() {
		$( "li", "#positivelist" ).sort(function( a, b ) {
			return $( a ).text() > $( b ).text(); 

		}).appendTo( "#positivelist" );

	});

})( jQuery );
}

function sortNeg()
{
(function( $ ) {
	$(function() {
		$( "li", "#negativelist" ).sort(function( a, b ) {
			return $( a ).text() > $( b ).text(); 

		}).appendTo( "#negativelist" );

	});

})( jQuery );
}

function AddTerm()
{   

    var positivelist = document.getElementById("positivelist");
    var negativelist = document.getElementById("negativelist");
	var inputTerm = document.getElementById("inputTerm").value;	
	var inputType = document.getElementById("inputType").selectedIndex;

    				
	if(inputTerm.length < 1)
	{
      TermError();
	}  
	else if(inputTerm.length > 50)
	{
		windows.alert("term/phrase is too long");
	}
    else if(inputType == 0)
    {
		TypeError();
	}
	else
	{   
    createItem()
	resetform();
    sortPos();
	sortNeg();
	}
}
