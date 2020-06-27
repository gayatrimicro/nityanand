$(document).ready(function() {
    $(window).load(function(){

        $("span.redDotText").each(function(i)
        {
            $(this).prev("a").css({zIndex:"999",position:"relative"});
        });

        if ($.browser.msie)
        {
            placeElement($("#header"),$("#selLanguage"),752,5);
        }
        else if ($.browser.safari)
        {
            placeElement($("#header"),$("#selLanguage"),728,7);
        }
        else
        {
            placeElement($("#header"),$("#selLanguage"),738,5);
        }    
    });
    
    $(window).resize(function(){  
               
        if ($.browser.msie)
        {
            placeElement($("#header"),$("#selLanguage"),752,5);
        }
        else if ($.browser.safari)
        {
            placeElement($("#header"),$("#selLanguage"),728,7);
        }
        else
        {
            placeElement($("#header"),$("#selLanguage"),738,5);
        }
        
    });
    
    $("ul#headerNav li:first").css({paddingLeft: "0px", background: "none" });
    if ($.browser.msie && (jQuery.browser.version <= 7))
    {
        //IE workaround for last nav item in header
        $("ul#headerNav li:last").css({zIndex:"300", top:"-1px" });
    }
    $("ul#topNav li:first").css({paddingLeft: "0px", background: "none" });
    if ($.browser.msie && (jQuery.browser.version <= 7))
    {
        //IE workaround for first nav item in top nav
        $("ul#topNav li:first").css({paddingTop:"1px"});
    }
    if ($.browser.msie && (jQuery.browser.version <= 7))
    {
        //IE workaround for first last item in top nav
        $("ul#topNav li:last").css({paddingTop:"1px"});
    }
    $("ul#breadcrumbs li:first").css({paddingLeft: "0px" });
    $("ul#breadcrumbs li:last").css({ background: "none" });

    
    $(".homeMainNav li:last").css({marginRight: "0px"});
    $(".mainNav li:last").css({marginRight: "0px"});
    $(".mainNavLarge li:last").css({marginRight: "0px"});
    
    $("ul.specials li:last").css({background: "none"});    
    $("ul.specials li:last").css({background: "none"});    
    $("#footer ul li:last").css({background: "none"});    

    $(window).load(function(){
        $("ul.expandable").each(function(i){
            $(this).children("li:eq(0)").children("div:eq(0)").slideDown("slow",function(){
                $(this).prev("p").addClass("clicked");
            });
        });    
    });

    $("select.selCountry").change(function(){
        createCookie("country",$(this).children("option:selected").val(),"365");
        location.reload(true);            
    });
    
    
    $("ul.expandable li p").toggle(
        function () {
            if ($(this).hasClass("clicked"))
            {
                $(this).next("div").slideUp("slow",function(){
                    $(this).prev("p").removeClass("clicked");
                });
            }
            else
            {
                $(this).parent().siblings().each(function(){
                    if ($(this).children("p").hasClass("clicked"))
                    {
                        $(this).children("div").slideUp("slow",function(){
                            $(this).prev("p").removeClass("clicked");
                        });
                    }
                });
                
                $(this).next("div").slideDown("slow",function(){                    
                    $(this).prev("p").addClass("clicked");
                });
            }        
        },
        function () {
            if ($(this).hasClass("clicked"))
            {
                $(this).next("div").slideUp("slow",function(){
                    $(this).prev("p").removeClass("clicked");
                });
            }
            else
            {
                $(this).parent().siblings().each(function(){
                    if ($(this).children("p").hasClass("clicked"))
                    {
                        $(this).children("div").slideUp("slow",function(){
                            $(this).prev("p").removeClass("clicked");
                        });
                    }
                });
                
                $(this).next("div").slideDown("slow",function(){
                    $(this).prev("p").addClass("clicked");
                });
            }        
        }
    );   

    if ($("#fldSearch").val() == "")
    {
        $("#fldSearch").val("Search site");
    }
    
    
    $("#fldSearch").focus(function () {
        if ($(this).val() == "Search site")
        {
            $(this).val("");
        }
    });
    $("#fldSearch").blur(function () {
        if ($(this).val() == "")
        {
            $(this).val("Search site");
        }
    });
    
    /*Function places passed element (movingEl) to X(extraX) & Y(extraY) coords relative to a positioned element (relEl)*/
    function placeElement(relEl,movingEl,extraX,extraY)
    {
        if ((movingEl.attr("id") != undefined) && (relEl.attr("id") != undefined))
        {
            var xPos = (relEl.offset().left + extraX);
            var yPos = (relEl.offset().top + extraY);        
            movingEl.css({ left: xPos+"px", top: yPos+"px" });
        }
    }
    
    
    if ($.browser.msie)
    {
        $("#fldSearch").attr({style:"margin:4px 1px 0 0"});
    }
    else
    {
        $("#fldSearch").attr({style:"margin:5px 1px 0 0"});
    }
    
    
    if ($.browser.msie && (jQuery.browser.version < 7))
    {
        $("#container").attr({style:"filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='',sizingMethod='scale')"});
        $("#homeNavReflection").attr({style:"filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='strucimages/navReflection.png',sizingMethod='scale')"});
        $(".brownTopBar").attr({style:"filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='strucimages/brownBarBg.png',sizingMethod='scale')"});
        $(".maroonTopBar").attr({style:"filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='strucimages/maroonBarBg.png',sizingMethod='scale')"});
        $(".mahoganyTopBar").attr({style:"filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='strucimages/mahoganyBarBg.png',sizingMethod='scale')"});
        
        $(".redTopBar").attr({style:"filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='strucimages/redBarBg.png',sizingMethod='scale')"});
        $(".blueTopBar").attr({style:"filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='strucimages/blueBarBg.png',sizingMethod='scale')"});
        
        $(".blueArea").attr({style:"filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='strucimages/blueAreaBg.png',sizingMethod='scale')"});
        $(".brownCharcoalBottom").attr({style:"filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='strucimages/charcoalBottomBrownBg.png',sizingMethod='scale')"});
        $(".destinationMain .brownCharcoalBottom, .experienceMain .brownCharcoalBottom").attr({style:"filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='strucimages/charcoalBottomBrownGeneralInfoBg.png',sizingMethod='scale')"});
        $(".aboutMain .brownCharcoalBottom").attr({style:"filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='strucimages/charcoalBottomBrownAboutBg.png',sizingMethod='scale')"});

        $(".maroonCharcoalBottom").attr({style:"filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='strucimages/charcoalBottomMaroonBg.png',sizingMethod='scale')"});
        $(".mahoganyCharcoalBottom").attr({style:"filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='strucimages/charcoalBottomMahoganyBg.png',sizingMethod='scale')"});
        
        $(".redCharcoalBottom").attr({style:"filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='strucimages/charcoalBottomRedBg.png',sizingMethod='scale')"});
        $(".eventsMain .redCharcoalBottom").attr({style:"filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='strucimages/charcoalBottomRedEventsBg.png',sizingMethod='scale')"});

        $(".blueCharcoalBottom").attr({style:"filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='strucimages/charcoalBottomBlueBg.png',sizingMethod='scale')"});
        $(".mapCharcoalBottom").attr({style:"filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='strucimages/charcoalBottomMapBg.png',sizingMethod='scale')"});
                
        /*
        $(".homeSubTop").attr({style:"filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='strucimages/homeSubLeftTopBg.png',sizingMethod='scale')"});
        $(".homeSubMid").attr({style:"filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='strucimages/homeSubLeftBg.png',sizingMethod='scale')"});
        $(".homeSubBottom").attr({style:"filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='strucimages/homeSubLeftBottomBg.png',sizingMethod='scale')"});    
        */

        $(".paginationDark").attr({style:"filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='strucimages/paginationDarkFade.png',sizingMethod='scale')"});

    }
    else
    {
        $("#container").attr({style:"background: url() repeat-y"});
        $("#homeNavReflection").attr({style:"background: url(strucimages/navReflection.png) no-repeat"});
        $(".brownTopBar").attr({style:"background: url(strucimages/brownBarBg.png) no-repeat top left"});
        $(".maroonTopBar").attr({style:"background: url(strucimages/maroonBarBg.png) no-repeat top left"});
        $(".mahoganyTopBar").attr({style:"background: url(strucimages/mahoganyBarBg.png) no-repeat top left"});
        
        $(".redTopBar").attr({style:"background: url(strucimages/redBarBg.png) no-repeat top left"});
        $(".blueTopBar").attr({style:"background: url(strucimages/blueBarBg.png) no-repeat top left"});        
        
        $(".blueArea").attr({style:"background: url(strucimages/blueAreaBg.png) repeat-y"});
        $(".brownCharcoalBottom").attr({style:"background: url(strucimages/charcoalBottomBrownBg.png) no-repeat"});
        $(".destinationMain .brownCharcoalBottom, .experienceMain .brownCharcoalBottom").attr({style:"background: url(strucimages/charcoalBottomBrownGeneralInfoBg.png) no-repeat"});
        $(".aboutMain .brownCharcoalBottom").attr({style:"background: url(strucimages/charcoalBottomBrownAboutBg.png) no-repeat"});

        $(".maroonCharcoalBottom").attr({style:"background: url(strucimages/charcoalBottomMaroonBg.png) no-repeat"});
        $(".mahoganyCharcoalBottom").attr({style:"background: url(strucimages/charcoalBottomMahoganyBg.png) no-repeat"});
        
        $(".redCharcoalBottom").attr({style:"background: url(strucimages/charcoalBottomRedBg.png) no-repeat"});
        $(".eventsMain .redCharcoalBottom").attr({style:"background: url(strucimages/charcoalBottomRedEventsBg.png) no-repeat"});

        $(".blueCharcoalBottom").attr({style:"background: url(strucimages/charcoalBottomBlueBg.png) no-repeat"});
        $(".mapCharcoalBottom").attr({style:"background: url(strucimages/charcoalBottomMapBg.png) no-repeat"});
        
        /*        
        $(".homeSubTop").attr({style:"background: url(strucimages/homeSubLeftTopBg.png) no-repeat top right"});
        $(".homeSubMid").attr({style:"background: url(strucimages/homeSubLeftBg.png) repeat-y top right"});
        $(".homeSubBottom").attr({style:"background: url(strucimages/homeSubLeftBottomBg.png) repeat-y top right"});        
        */

        $(".paginationDark").attr({style:"background: url(strucimages/paginationDarkFade.png) no-repeat top left"});
    }
        
    
    function assessDiffX(mainEl,shadowEl)
    {
        var areaX = mainEl.offset().left;
        var areaShadowX = shadowEl.offset().left;
        
        var diffX = areaX - areaShadowX;
        return diffX;
    }
    
    function assessDiffY(mainEl,shadowEl)
    {
        var areaY = mainEl.offset().top;
        var areaShadowY = shadowEl.offset().top;
        
        var diffY = areaY - areaShadowY;
        return diffY;
    }
    
    function showPos(e,mainEl,shadowEl)
    {
        if (debug) 
        {
            var areaX = mainEl.offset().left;
            var areaY = mainEl.offset().top;
            var areaShadowX = shadowEl.offset().left;
            var areaShadowY = shadowEl.offset().top;
            
            var diffX = assessDiffX(mainEl,shadowEl);
            var diffY = assessDiffY(mainEl,shadowEl);
            
          /*  $("#debugInfo").html($("#debugInfo").html() + "<p><strong>"+e+"</strong><br />"+mainEl.attr("id")+" X["+ areaX+"]<br />"+mainEl.attr("id")+" Y["+areaY+"]<br />"+shadowEl.attr("id")+" X["+areaShadowX+"]<br />"+shadowEl.attr("id")+" Y["+areaShadowY+"]<hr />Diff X["+diffX+"]<br />Diff Y["+diffY+"]</p>");*/
        }
    }
    
    $("#toggleDebugText").toggle(
        function () {
            $("#debugInfo").slideUp();
            $(this).text("+");
        },
        function () {
            $("#debugInfo").slideDown();
            $(this).text("-");
        }
    );
    
    $("ul#eventsTabs li").click(function (){
      if (!$(this).hasClass("active"))
        {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            if ($(this).attr("id") == "listViewTab")
            {
                $("#listView").css({display:"block"});
                $("#mapView").css({display:"none"});
            }
            else
            {
                $("#listView").css({display:"none"});
                $("#mapView").css({display:"block"});
                   if(($("input#hdnMapLoad").val() != 0) && ($("input#hdnMapLoad").val() != null))
                {
                    loadMaps();
                }
            }
        }
    });
    $("ul#agentsTabs li").click(function (){
      if (!$(this).hasClass("active"))
        {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            if ($(this).attr("id") == "listViewTab")
            {
                $("#listView").css({display:"block"});
                $("#mapView").css({display:"none"});
            }
            else
            {
                $("#listView").css({display:"none"});
                $("#mapView").css({display:"block"});
                if(($("input#hdnMapLoad").val() != 0) && ($("input#hdnMapLoad").val() != null))
                {
                    loadMaps();
                }            }
        }
    });

    $("ul#accommodationTabs li").click(function (){
      if (!$(this).hasClass("active"))
        {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            if ($(this).attr("id") == "listViewTab")
            {
                $("#listView").css({display:"block"});
                $("#mapView").css({display:"none"});
            }
            else
            {
                $("#listView").css({display:"none"});
                $("#mapView").css({display:"block"});
                if(($("input#hdnMapLoad").val() != 0) && ($("input#hdnMapLoad").val() != null))
                {
                    loadMaps();
                }            }
        }
    });

    
    if ($("#mapCanvas").attr("id") != undefined)
    {
        loadMaps();
    }
    
    
    $(".resultsText").truncate({max_length: 200});
        
        $(".toggleAddress").each(function(i)
        {
            $(this).after("<a href=\"#\" class=\"toggleAddressSpan\">more contact details</a>");
        });
        
            $(".toggleAddressSpan").toggle(
                function () {
              $(this).prev("span.toggleAddress").show();
                    $(this).text("less contact details");
                },
                function () {                
              $(this).prev("span.toggleAddress").hide();
                    $(this).text("more contact details");
                }
        );    

        $("li#location, li#language").hover(
            function(){
                $(this).children("ul").show();
            },
            function(){                
                $(this).children("ul").hide();
            }
        );
        
        $("table#tblLocation a, table#tblLanguage a").hover(
        function(){
                $(this).parent("td").css({background:"#5f493e"});
            },
            function(){                
                $(this).parent("td").css({background:"none"});
            }
        );    
});