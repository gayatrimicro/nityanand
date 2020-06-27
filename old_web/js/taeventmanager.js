function TA_EventManager()
{
    this.onloadArray = new Array();
    this.OnloadFired = false;
}
TA_EventManager.prototype.AddToOnLoad = function(method)
{
    this.onloadArray[this.onloadArray.length] = method;
}
TA_EventManager.prototype.EvaluateOnLoad = function()
{
    if(!this.OnloadFired)
    {
        for(var i=0; i<=this.onloadArray.length-1; i++)
        {
            eval(this.onloadArray[i]);
        }
        this.OnloadFired = true;
    }
}
window.onpageshow =  function()
{
    TA_eventManager.EvaluateOnLoad();
}
TA_eventManager = new TA_EventManager();
//alert(window.addEventListener);
//alert(window.attachEvent);