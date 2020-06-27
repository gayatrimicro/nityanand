<?php
$title=$_POST['ddlTitle'];
$fname=$_POST['txtFirstname'];
$lname=$_POST['txtLastname'];
$org=$_POST['txtOrganisation'];
$jobtitle=$_POST['txtJobtitle'];
$email=$_POST['txtEmail'];
$country=$_POST['ddlCountry'];
$newsletter=$_POST['ddlNewsletter'];
$msg=$_POST['S1'];

$to = "linux@gayatrimicrosystems.com";
$subject = "Feedback";
$message = "
Title : $title\n
First Name : $fname\n
Last Name : $lname\n
Organization : $org\n
Job Title : $jobtitle\n
Email : $email\n
Country : $country\n
News Letter : $newsletter\n
Message: $msg
";
$from = $email;
$headers = "From: $from";
mail($to,$subject,$message,$headers);

?> 

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<script language="javascript">
  
   function validate()
  {
	var err='';
	if(document.f1.ddlTitle.value=="")
	err+="* Select Title\n";

	if(document.f1.txtFirstname.value=="")
	err+="* Enter First Name\n";

	if(document.f1.txtLastname.value=="")
	err+="* Enter Last Name\n";

	if(document.f1.txtOrganisation.value=="")
	err+="* Enter Organization\n";

	if(document.f1.txtJobtitle.value=="")
	err+="* Enter JobTitle\n";

	if(document.f1.txtEmail.value=="")
	err+="* Enter Email\n";

	if(document.f1.txtEmail.value!="")
	{
	if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.f1.txtEmail.value)))
	err+="* Invalid E-mail Address! Please re-enter\n";
	}

	if(document.f1.ddlCountry.value=="")
	err+="* Enter Country\n";

	if(document.f1.ddlNewsletter.value=="")
	err+="* Select Newsletter Country\n";

	if(err!='')
	{
		alert("Please correct the following error:\n"+err);
		return false;
	}
	
  }
  
</script>
<meta name="title" content="" />
<meta name="description" content="" />
<meta name="keywords" content="" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /
><link type="text/css" rel="stylesheet" media="screen" href="css/layout.css" />
<link type="text/css" rel="stylesheet" media="screen" href="css/homeStyle.css" />
<link type="text/css" rel="stylesheet" media="screen" href="css/style.css" />
<link type="text/css" rel="stylesheet" media="screen" href="css/thickBox.css" />
<link type="text/css" rel="stylesheet" media="print" href="css/print.css" />
<!--[if IE 6]><link rel="stylesheet" type="text/css" href="css/ie6.css" media="" />
<![endif]-->
<!--[if IE 7]><link rel="stylesheet" type="text/css" href="css/ie7.css" media="" />
<![endif]-->

<script type="text/javascript" src="js/jquery-1.2.6.js"></script>   
<!-- JQUERY -->
</script>
<!-- <script language="javascript">  
//function banner(){  
  // var thediv=document.getElementById("banner");  
  // var imgarray = new Array("mainpic01.jpg", "mainpic00.jpg","mainpic02.jpg","mainpic03.jpg","mainpic04.jpg","mainpic05.jpg","mainpic06.jpg","mainpic07.jpg","mainpic08.jpg","mainpic09.jpg");  
  // var spot =Math.floor(Math.random()* imgarray.length);  
  // thediv.style.background="url("+imgarray[spot]+") no-repeat top center" ;
  // thediv.style.width="100%";
   //thediv.style.align="center";
   //  width:100%;height:440px;background:url(mainpic01.jpg) no-repeat top center;
//}  
</script> -->

<script type="text/javascript" src="call.js"></script>

<script type="text/javascript" src="js/jquery.thickBox.js"></script>
<script type="text/javascript" src="js/jquery.truncate.js"></script>
 
<title>
	Welcome to the abode of Bhagawan Nityananda :: Official site for Shree Bhimeshwar Sadguru Nityanand Sanstha</title></head>





<body onload="">






<div id="isHome"></div>
<!--START: Header Container--> 
<div id="headerContainer">
 <!--START: Header-->
    <div id="header" class="dark clearfix">
      <div class="floatLeft" style="width:65%;">
      <ul id="headerNav">
       
<li> <a href="temple.htm" >Temple</a></li><li>
 <a href="trip.htm" >Plan a Yatra</a></li><li> 
 <a href="facilities.htm" >Facilities</a></li><li>
  <a href="trust.htm" >Trust</a></li>
 <li>
  <a href="contact.htm" >Help Desk</a></li>

      </ul>
    </div>
        <div class="floatRight paddingTopFive" style="width:35%;">
        

<div id="topGeneralSearch_ValidationSummary1" style="color:Red;display:none;">

</div>
<div id="topGeneralSearch_pnlTopSearch" >
	
    <div class="floatRight" style="padding-right:5px; padding-left:1px;">
        &nbsp;</div>

</div>


        
<div class="floatRight">







   </div>

        </div>
  </div>
   <DIV id=topNavArea>
<DIV id=logoArea>
<H1 class=logo>&nbsp;</H1></DIV>
<DIV id=topNavHolder>
<UL class=crumbsAbout id=topNav>
  <LI><A href="index.htm">Home</A> </LI>
  <LI class=selected><A 
  href="temple.htm">About The Temple  </A></LI>
  <LI><A href="ganeshpuri.htm">About Ganeshpuri</A></LI>
  <LI><A 
  href="destinations.htm">Destinations 
  </A></LI>
  <LI><A href="events.htm">Events </A></LI>
  <LI><A href="trip.htm">Plan your 
  Trip</A> </LI></UL>
<UL class=clear id=breadcrumbs>
  <LI><A href="index.htm">Home</A></LI>
  <LI>About The Temple</A> </LI></UL></DIV></DIV>
</div>
<!--END: Header Container--> 
  
 

<!--START: Banner Area-->
  

<DIV id=banner title="About us" 
style="BACKGROUND: url(hubhero_about.jpg) no-repeat center top; WIDTH: 100%; HEIGHT: 360px"></DIV>

 
  
<!--END: Banner Area-->
 
     

<!--START: Body Container-->
<DIV id=bodyContainer><!--START: nav area-->
<DIV class=placeable id=landingNavArea>
<UL class=mainNavLarge id=aboutNav><!--START: Nav Item-->
  <LI >
  <DIV class=navImage><IMG alt="Temple's History" 
  src="aboutHistory.jpg"></DIV>
  <DIV class=navText><A 
  href="temple.htm">Temple's 
  history</A></DIV></LI>
  <LI>
  <DIV class=navImage><IMG alt="Donation" 
  src="aboutCulture.jpg"></DIV>
  <DIV class=navText><A 
  href="donation.htm">Donation</A></DIV></LI>
  <LI>
  <DIV class=navImage><IMG alt="Darshan" 
  src="aboutFacts.jpg"></DIV>
  <DIV class=navText><A 
  href="darshan.htm">Darshan</A></DIV></LI>
  <LI>
  <DIV class=navImage><IMG alt="Aarti, Poojan 
 , Prasad & Offerings " 
  src="aboutFilmsBooks.jpg"></DIV>
  <DIV class=navText><A href="aarti.htm">Aarti, Poojan 
 , Prasad & Offerings 
  </A></DIV><!--END: Nav Item--></LI></UL>
<DIV id=navReflection></DIV></DIV><!--END: nav area--><!--START: Main content area-->
<DIV class=aboutMain id=mainContent><!--START: left column area-->
<DIV class=leftColumn>
<DIV class=colTop>
<DIV class="floatLeft headerHolder">
<H2 class=title>Feedback</H2></DIV>
<DIV class="floatRight marginRightTwenty marginTopFifteen"></DIV></DIV><!--START: Mid Column Area-->
<DIV class=colMid><!--START: Picture Column-->
<!--END: Picture Column--><!--START: Text column-->
<DIV class=textCol>
<P><br>
Our eNewsletter is an information service developed specifically for the business events industry.
 
It is designed for meeting and incentive planners to keep you in the &quot;know&quot; by 
receiving advanced notification of any event. 

<P>Thank you for your feedback.<P>&nbsp;<P></P>
<P></P></DIV><!--END: Text column--></DIV><!--END: Mid Column Area-->
<DIV class=colBottom></DIV></DIV><!--END: left column area--><!--START: right column area-->
<DIV class=rightColumn><!--START: plan holiday-->
<div id="planHoliday"    >
  
    <div class="brownTopBar">
    <p class="arrow">Plan your Trip</p></div>
    <div class="charcoalArea">
      <ul class="plan">
        <li><a href="gettingthere.htm" class="gettingTo">Getting to Ganeshpuri</a></li>
        <li><a href="around.htm" class="gettingAround">Getting around Ganeshpuri</a></li>
        <li><a href="accomodation.htm" class="accommodation">Accommodation</a></li>
        <li><a href="contact.htm" class="findAgent">Contact Us</a></li>
      </ul>
    </div>
 
    <div class="charcoalBottom brownCharcoalBottom"><a href="trip.htm">More...</a></div>
  </div><!--END: plan holiday--></DIV><!--END: right column area--></DIV><!--END: Main content area--><!--START: footer-->
<div id="footer">
    <ul>
          
<li><a href="sitemap.htm" >Sitemap</a></li>
<li><a href="policy.htm" >Privacy Policy</a></li>
<li><a href="terms.htm" >Terms and Conditions</a></li>
<li><a href="about.htm" >About Sanstha</a></li>
<li><a href="feedback.htm" >Feedback</a></li>

    </ul>
    <br /><br />
    Ganeshpuri, Dist. Thane, Pin - 401 206. Maharashtra. INDIA. Tel.: +91 02522 261231 / 261523
<br/>
Designed by <a target=_blank  href="http://www.gayatimicrosystems.com">
	<font color="#0d557d"><span style="text-decoration: none">Gayatri Microsystems</span></font></a><BR>
  </div><!--END: footer--></DIV>
<!--END: Body Container-->







</body>
</html>