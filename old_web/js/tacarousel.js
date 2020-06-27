function TA_Carousel(elementCounter, contentArray, currentPosition)
{
///<summary>Creates a shell for the carousel</summary>
///<param name="elementCounter">Reference to the post fix value added to the targetted elements</param>
///<param name="contentArray">Array containing the JSON strings</param>
///<param name="currentPosition">Current position of the displayed item in the array</param>
    this.TypeOf = "TA_Carousel"
    this.ElementCounter = elementCounter;
    this.ContentArray = contentArray;
    this.StartIndex = 0;
    this.MaxPageCount = contentArray?contentArray.length-1:0;
    this.CurrentPosition = currentPosition?currentPosition:0;  
    this.PreloaderImageSRC = ""; 
}
TA_Carousel.prototype.Next = function()
{
///<summary>Move cursor to the next position</summary>
    var newPosition = this.CurrentPosition+1;
    if(newPosition <=this.MaxPageCount){
        this.CurrentPosition = newPosition;
    }else{
        this.CurrentPosition = this.StartIndex;
    }
    this.RequestContentUpdate();
}
TA_Carousel.prototype.Previous = function()
{
///<summary>Move cursor to the previous position</summary>
    var newPosition = this.CurrentPosition-1;
    if(newPosition >=this.StartIndex){
        this.CurrentPosition = newPosition;
    }else{
        this.CurrentPosition = this.MaxPageCount;
    }
    this.RequestContentUpdate();
}
TA_Carousel.prototype.Randomize = function()
{
///<summary>Move cursor to a random position between min and max</summary>
    var randomNum = Math.random() * (this.MaxPageCount-this.StartIndex); 
    this.CurrentPosition = (Math.round(randomNum) + this.StartIndex); 
}
 
TA_Carousel.prototype.RequestContentUpdate = function()
{
///<summary>Get content from either memory or request new content</summary>
    this.PushContentsToScreen();
}
TA_Carousel.prototype.PushContentsToScreen = function()
{
///<summary>Needs to be overridden - use to format the contentArray for the screen</summary>
    alert('You must provide a method for TACarousel.PushContentsToScreen()');
}

function TA_ImageCarouselNoPaging(elementCounter,contentArray,currentPosition)
{
///<summary>Inherits from TACarousel - creates a shell for the carousel without pagination requirements</summary>
///<param name="elementCounter">Reference to the post fix value added to the targetted elements</param>
///<param name="contentArray">Array containing the JSON strings</param>
///<param name="currentPosition">Current position of the displayed item in the array</param>
    this.TypeOf = "TA_ImageCarouselNoPaging"
    this.ElementCounter = elementCounter;
    this.ContentArray = contentArray;
    this.StartIndex = 0;
    this.MaxPageCount = contentArray.length-1;
    this.CurrentPosition = currentPosition?currentPosition:0;  
    this.PreloaderImageSRC = "";  
}
TA_ImageCarouselNoPaging.prototype = new TA_Carousel();
TA_ImageCarouselNoPaging.prototype.PushContentsToScreen = function()
{
///<summary>Formats the ContentArray based on the JSON data for the ImageCarousel</summary>
    var JSON = this.ContentArray[this.CurrentPosition];
    var objImage = document.getElementById("IGImageNP"+this.ElementCounter);
    objImage.src = JSON.SRC;
    objImage.alt = JSON.Caption; 
    objImage.style.visibility = 'visible';
 }

function TA_ImageCarousel(elementCounter,contentArray,currentPosition)
{
///<summary>Inherits from TACarousel - creates a shell for the carousel</summary>
///<param name="elementCounter">Reference to the post fix value added to the targetted elements</param>
///<param name="contentArray">Array containing the JSON strings</param>
///<param name="currentPosition">Current position of the displayed item in the array</param>
    this.TypeOf = "TA_ImageCarousel"
    this.ElementCounter = elementCounter;
    this.ContentArray = contentArray;
    this.StartIndex = 0;
    this.MaxPageCount = contentArray.length-1;
    this.CurrentPosition = currentPosition?currentPosition:0;  
    this.PreloaderImageSRC = "";  

}
TA_ImageCarousel.prototype = new TA_Carousel();
TA_ImageCarousel.prototype.PushContentsToScreen = function()
{
///<summary>Formats the ContentArray based on the JSON data for the ImageCarousel</summary>

    var JSON = this.ContentArray[this.CurrentPosition];
    
    var objCategory = document.getElementById("IGCategory"+this.ElementCounter);
    if(objCategory)
    {
        objCategory.innerHTML = JSON.Category;
        objCategory.style.visibility = 'visible';
    }
    var objImage = document.getElementById("IGImage"+this.ElementCounter);
    if(objImage)
    {
        objImage.src = JSON.SRC;
        objImage.alt = JSON.Caption; 
        objImage.style.visibility = 'visible';
    }
    var objLink = document.getElementById("IGLink"+this.ElementCounter);
    var objZoom = document.getElementById("IGZoom"+this.ElementCounter);
    if(JSON.LargeSRC!=0)
    {    
        objLink.onclick = function(){ var win = window.open(JSON.LargeSRC,'TA_ImageGallery','width=500,height=500,scrollbars=1,resizable=yes');
                                if(win){win.focus();}
                            } 
        objLink.style.cursor = 'pointer';                            
        objLink.style.visibility = 'visible';        
        objZoom.style.visibility = 'visible';
    }else
    {
        objLink.onclick = function(){};
        objLink.style.cursor = 'default';
        objZoom.style.visibility = 'hidden';
    }        
    
    var objCaption = document.getElementById("IGCaption"+this.ElementCounter); 
    objCaption.innerHTML = JSON.Caption;
    objCaption.style.visibility = 'visible';
    
    var objPagination = document.getElementById("IGPagination"+this.ElementCounter);
    objPagination.innerHTML = (this.CurrentPosition+1)+ " / " + (this.MaxPageCount+1);     
    
    var objPaginationContainer = document.getElementById("IGPaginationContainer"+this.ElementCounter);
    objPaginationContainer.style.visibility = 'visible'; 
 }
function TA_AJAXImageCarousel(elementCounter, contentArray, currentPosition)
{
///<summary>Inherits from TACarousel - creates a shell for the carousel</summary>
///<param name="elementCounter">Reference to the post fix value added to the targetted elements</param>
///<param name="contentArray">Array containing the JSON strings</param>
///<param name="currentPosition">Current position of the displayed item in the array</param>
    this.TypeOf = "TA_AJAXImageCarousel"
    this.ElementCounter = elementCounter;
    this.ContentArray = contentArray;
    this.StartIndex = 0;
    this.MaxPageCount = contentArray.length-1;
    this.CurrentPosition = currentPosition?currentPosition:0;  
    this.PreloaderImageSRC = "";  
}
TA_AJAXImageCarousel.prototype = new TA_Carousel();
TA_AJAXImageCarousel.prototype.PopulateFromServer = function(URL)
{
///<summary>retrieve the contents of the URL </summary>
    TA_MakeRequest(this, URL+"?rand="+Math.random()); 
}
TA_AJAXImageCarousel.prototype.RequestContentUpdate = function()
{
///<summary>Calls PushContentsToScreen</summary>
    this.PushContentsToScreen();
}
TA_AJAXImageCarousel.prototype.EvaluateArrayListAndRandomiseUpdate = function(arrayStringFromFile)
{
///<summary>Evaluates the contents of the string (which must be an array with the same name as given to the this.ContentArray on instansiation)
///  returned from the AJAX call and sets up the array count</summary>
    eval(arrayStringFromFile);
    this.MaxPageCount = this.ContentArray.length-1;
    this.Randomize();
    this.RequestContentUpdate();
}
TA_AJAXImageCarousel.prototype.PushPreloaderToScreen = function()
{
///<summary>Sets up a temporary preloader image </summary>
    var objImage = document.getElementById("IGImage"+this.ElementCounter);
    objImage.src = this.PreloaderImageSRC;
}
TA_AJAXImageCarousel.prototype.PushContentsToScreen = function()
{
///<summary>Formats the ContentArray based on the JSON data for the TA_AJAXImageCarousel</summary>
    var JSON = this.ContentArray[this.CurrentPosition];
    var objCategory = document.getElementById("IGCategory"+this.ElementCounter);
    objCategory.innerHTML = JSON.Category;
    objCategory.style.visibility = 'visible';
    
    var objImage = document.getElementById("IGImage"+this.ElementCounter);
    
    objImage.src = JSON.SRC;
    objImage.alt = JSON.Caption; 
    objImage.style.visibility = 'visible';
    
    var objLink = document.getElementById("IGLink"+this.ElementCounter);
    var objZoom = document.getElementById("IGZoom"+this.ElementCounter);
    if(JSON.LargeSRC!=0)
    {    
        objLink.onclick = function(){ var win = window.open(JSON.LargeSRC,'TA_ImageGallery','width=500,height=500,scrollbars=1,resizable=yes');
                                if(win){win.focus();}
                            } 
        objLink.style.cursor = 'pointer';                            
        objLink.style.visibility = 'visible';        
        objZoom.style.visibility = 'visible';
    }else
    {
        objLink.onclick = function(){};
        objLink.style.cursor = 'default';
        objZoom.style.visibility = 'hidden';
    }
    var objCaption = document.getElementById("IGCaption"+this.ElementCounter); 
    objCaption.innerHTML = JSON.Caption;
    objCaption.style.visibility = 'visible';
    
    var objPagination = document.getElementById("IGPagination"+this.ElementCounter);
    objPagination.innerHTML = (this.CurrentPosition+1)+ " / " + (this.MaxPageCount+1);     
    
    var objPaginationContainer = document.getElementById("IGPaginationContainer"+this.ElementCounter);
    objPaginationContainer.style.visibility = 'visible';    
    
}

function TA_DidYouKnowCarousel(elementCounter,contentArray,currentPosition)
{
///<summary>Inherits from TACarousel - creates a shell for the carousel</summary>
///<param name="elementCounter">Reference to the post fix value added to the targetted elements</param>
///<param name="contentArray">Array containing the JSON strings</param>
///<param name="currentPosition">Current position of the displayed item in the array</param>
    this.TypeOf = "TA_DidYouKnowCarousel"
    this.ElementCounter = elementCounter;
    this.ContentArray = contentArray;
    this.StartIndex = 0;
    this.MaxPageCount = contentArray.length-1;
    this.CurrentPosition = currentPosition?currentPosition:0; 
    this.PreloaderImageSRC = "";   
}
TA_DidYouKnowCarousel.prototype = new TA_Carousel();
TA_DidYouKnowCarousel.prototype.PushContentsToScreen = function()
{
///<summary>Formats the ContentArray based on the JSON data for the DidYouKnow carousel</summary>
    var JSON = this.ContentArray[this.CurrentPosition];
    if(JSON)
    {
        var objImageContainer = document.getElementById("DYKImageContainer"+this.ElementCounter);  
      
        var objImage = document.getElementById("DYKImage"+this.ElementCounter);
        if(objImage && objImageContainer)
        {
            if(JSON.SRC!="")
            {
                objImage.src = JSON.SRC;
                //objImage.alt = JSON.Title;
                objImage.onclick = function(){ location.href= JSON.HREF };
                objImage.style.cursor = 'pointer';
                objImageContainer.style.display = 'block';
            }
            else
            {
                objImageContainer.style.display = 'none';
            }
        }
        var objCategory = document.getElementById("DYKCategory"+this.ElementCounter);
        objCategory.innerHTML = JSON.Category;
        
        var objTitle = document.getElementById("DYKTitle"+this.ElementCounter);
        objTitle.innerHTML = JSON.Title;
        
        var objLink = document.getElementById("DYKLink"+this.ElementCounter);
        objLink.href = JSON.HREF;
        
        var objPagination = document.getElementById("DYKPagination"+this.ElementCounter);
        objPagination.innerHTML = (this.CurrentPosition+1)+ " / " + (this.MaxPageCount+1);
    }
}

function TA_MakeRequest(obj, URL)
{
///<summary>Makes a HttpXMLRequest using GET</summary>
///<param name="obj">Obj must support the "PushContentsToScreen(string)" function</param>
    var request = null;
    if (typeof XMLHttpRequest != "undefined") {
        request =  new XMLHttpRequest();
    } else if (typeof ActiveXObject != "undefined") {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    } else {
        alert("Browser is not compatible: XMLHttpRequest not supported");
    }
    if(request!=null){
        request.open("GET", URL, true);
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status!=404) {
                obj.EvaluateArrayListAndRandomiseUpdate(request.responseText);
            }
        }
        request.send(null);
    }
}