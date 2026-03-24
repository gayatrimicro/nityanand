<?php include("pgconfig.php"); ?>

<?php 
$transactionTypeCode=$_POST["transaction_type_code"];
$installments=$_POST["installments"];
$transactionId=$_POST["transaction_id"];

$amount=$_POST["amount"];
$exponent=$_POST["exponent"];
$currencyCode=$_POST["currency_code"];
$merchantReferenceNo=$_POST["merchant_reference_no"];

$status=$_POST["status"];
$eci=$_POST["3ds_eci"];
$pgErrorCode=$_POST["pg_error_code"];

$pgErrorDetail=$_POST["pg_error_detail"];
$pgErrorMsg=$_POST["pg_error_msg"];

$messageHash=$_POST["message_hash"];


$messageHashBuf=$pgInstanceId."|".$merchantId."|".$transactionTypeCode."|".$installments."|".$transactionId."|".$amount."|".$exponent."|".$currencyCode."|".$merchantReferenceNo."|".$status."|".$eci."|".$pgErrorCode."|".$hashKey."|";

$messageHashClient = "13:".base64_encode(sha1($messageHashBuf, true));

$hashMatch=false;

if ($messageHash==$messageHashClient){
  $hashMatch=true;
} else {
  $hashMatch=false;
} 
?>



<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->
<html lang="en">
<!--<![endif]-->
<head>
<meta charset="utf-8">
<title>Nityananda</title>
<meta name="description" content="">
<meta name="author" content="">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

<!-- CSS
  ================================================== -->
<link rel="stylesheet" href="wp-content/themes/nityanand/stylesheets/base.css">
<link rel="stylesheet" href="wp-content/themes/nityanand/stylesheets/skeleton.css">
<link rel="stylesheet" href="wp-content/themes/nityanand/stylesheets/btn.css">
<link rel="stylesheet" href="wp-content/themes/nityanand/stylesheets/flexslider.css">
<link rel="stylesheet" href="wp-content/themes/nityanand/stylesheets/superfish.css">
<link rel="stylesheet" href="wp-content/themes/nityanand/stylesheets/prettyPhoto.css">
<link rel="stylesheet" href="wp-content/themes/nityanand/js/jPlayer/css/style.css">
<link rel="stylesheet" href="wp-content/themes/nityanand/style.css" type="text/css" media="screen" />

<!-- Google Fonts -->

<link href='http://fonts.googleapis.com/css?family=Copse|Courgette|Oswald:400,300,700|Droid+Serif:400,700,400italic,700italic|Droid+Sans:400,700|Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Lato:100,300' rel='stylesheet' type='text/css'>

<!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<!-- Favicons================================================== -->
<link rel="shortcut icon" href="images/favicon.ico">
<link rel='stylesheet' id='contact-form-7-css'  href='wp-content/plugins/contact-form-7/includes/css/styles.css?ver=3.3.1' type='text/css' media='all' />
<link rel='stylesheet' id='taxonomy-image-plugin-public-css'  href='wp-content/plugins/taxonomy-images/style.css?ver=0.7.3' type='text/css' media='screen' />
<script type='text/javascript' src='wp-includes/js/jquery/jquery.js?ver=1.8.3'></script>
<script type='text/javascript' src='wp-content/themes/nityanand/js/script.js?ver=3.5'></script>
<script type='text/javascript' src='wp-content/themes/nityanand/js/jquery.prettyPhoto.js?ver=3.5'></script>
<script type='text/javascript' src='wp-content/themes/nityanand/js/jPlayer/js/jquery.jplayer.min.js?ver=3.5'></script>
<script type='text/javascript' src='wp-content/themes/nityanand/js/superfish.js?ver=3.5'></script>
<script type='text/javascript' src='wp-content/themes/nityanand/js/jquery.flexslider-min.js?ver=3.5'></script>
<script type='text/javascript' src='wp-content/themes/nityanand/js/jquery.fitvids.js?ver=3.5'></script>
<style type="text/css">
.recentcomments a {
	display:inline !important;
	padding:0 !important;
	margin:0 !important;
}
table td {
color: #8B847C;
    font-family: 'Open Sans','Helvetica Neue',Helvetica,sans-serif;
    font-size: 15px;
    line-height: 25px;
    padding-right: 30px;
    text-shadow: 1px 1px 0 #FFFFFF;	
}
</style>

<!--[if IE 8]>
<style type="text/css">
   
   .button-big, .button-small, .portfolio_cats a, .pagination a, .pagination .current, .portfolio_previous a, .portfolio_next a  { color: #fff !important; }
   .main ul li a .description { font-size: 12px; }
   
</style>
<![endif]-->

<!--[if IE 7]>
<style type="text/css">
   
	 .button-big, .button-small, .portfolio_cats a, .pagination a, .pagination .current, .portfolio_previous a, .portfolio_next a  { color: #fff !important; }
   .main ul li a .description { font-size: 12px; }
    
   }
   
</style>
<![endif]-->

<!--[if IE 6]>
<style type="text/css">
   
	 .button-big, .button-small, .portfolio_cats a, .pagination a, .pagination .current, .portfolio_previous a, .portfolio_next a  { color: #fff !important; }
   .main ul li a .description { font-size: 12px; }
   }
   
</style>
<![endif]-->

<style>
.pageContent a {
 color:;
}
.pageContent a:hover {
 color:;
}
table td {

text-align: left;
}
</style>
</head>

<body data-spy="scroll" data-target=".subnav" data-offset="50" class="home blog">
<header>
  <div class="navBg"></div>
  <div class="container">
    <div class="logo"><a href="index.html"><img src="files/logo.png" /></a></div>
    <nav class="mainNav">
      <ul id="menu-main" class="nav sf-menu sf-js-enabled sf-shadow">
        <li id="menu-item-149" class="menu-item menu-item-type-post_type menu-item-object-page" style="margin-left:0px"><a href="history.html"><span class="title">The Temple</span></a>
          <ul class="sub-menu">
            <li  class="menu-item menu-item-type-custom menu-item-object-custom"><a href="history.html">History</a></li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="daily.html">Daily Schedule</a></li>
             <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="poojan.html">Poojan</a></li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="trustees.html">Trustees</a></li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="ganeshpuri.html">About Ganeshpuri</a></li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="performance-report.html">Performance Report</a></li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="green-revolution.html">Green Revolution </a></li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="women-empowerment.html">Women's Empowerment</a></li>
          </ul>
        </li>
        <li id="menu-item-137" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="accomodation.html"><span class="title">Facilities & Accomodations</span></a>
          <ul class="sub-menu">
          
            <li  class="menu-item menu-item-type-custom menu-item-object-custom"><a href="accomodation.html">Accommodations</a></li>
            <li  class="menu-item menu-item-type-custom menu-item-object-custom"><a href="refreshment.html">Refreshment Units</a></li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="medical.html">Medical Facility</a></li>
            <li  class="menu-item menu-item-type-custom menu-item-object-custom"><a href="basics.html">Basics</a></li>
            <li  class="menu-item menu-item-type-custom menu-item-object-custom"><a href="ambiance.html">Ambience</a></li>
            <li  class="menu-item menu-item-type-custom menu-item-object-custom"><a href="activity.html">The Children's Programme and Activities
</a></li>
         
          </ul>
        </li>
        <li class="menu-item menu-item-type-post_type menu-item-object-page "><a href="about.html"><span class="title">About Baba</span></a>
          <ul class="sub-menu">
            <li  class="menu-item menu-item-type-custom menu-item-object-custom"><a href="about.html">Biography</a></li>
            <li  class="menu-item menu-item-type-custom menu-item-object-custom"><a href="spiritual.html">Socio-Spiritual Work</a></li>
          </ul>
        </li>
        <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="gallery.html"><span class="title">Gallery</span></a></li>
        <li  class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-95 current_page_item"><a href="donate.html"><span class="title">Donate</span></a></li>
        <li  class="menu-item menu-item-type-post_type menu-item-object-page"><a href="contact.html"><span class="title">Contact</span></a></li>
      </ul>
      <div class="container mobileNav">
        <div class="sixteen columns"></div>
      </div>
    </nav>
  </div>
</header>
<div class="topModule clearfix">
  <div class="container headerImg"> <img alt="" src="images/donate.jpg" /> </div>
  <div class="container pageContent clearfix">
    <div>
      <div class="sixteen columns">
       <div class="textCol">
<p>
<font color="#EF7837" style=" text-transform:uppercase;">
<b>Thank you for your donation. </b></font>
</p>



<table>
	<tr> 
		<td valign="top" align="left">
			<?
				if("50020"==$status) {
					?><font color="#339900"><b>Transaction Passed</b></font><?
				} else if("50097"==$status) {
					?><font color="#339900"><b>Transaction Passed</b></font><?
				} else {
					?><font color="#FF0000"><b>Transaction Failed</b></font><?
				}
			?>
		</td>
	</tr>
	<tr> 
		<td valign="top" class="mainText">
			<table border="1" width="400" align="left">	
			
			
								 
			</table>
		</td>
	</tr>
	<tr> 
		<td valign="top" align="left">
			<a href="donate.html">Donate Again</a>
		</td>
	</tr>
	</table>

</div>
      </div>
      
      
    </div>
  </div>
</div>
<footer>
  <div class="container">
    <div class="four columns">
      <div class="churchLocation clearfix">
        <h3 class="locationIcon">OUR LOCATION</h3>
        <div class="churchInfoDetails"><span></span> <span>At Post - Ganeshpuri, Tal-Bhiwandi</span><span>Dist. Thane, Pin - 401 206. </span> <span>Maharashtra. INDIA.</span><!-- <span>Rakesh Yadav (Chief Manager & PRO)</span> --><span>Tel - +91 9823522126 / 9167401134</span></div>
      </div>
    </div>
    <div class="twelve columns">
      <h3>BHAGWAN NITYANAND</h3>
      <img alt="" style="float: left; margin: 15px 20px 20px 0;" src="images/assets/1.png" />
      <p style="margin-top: 35px;">The great guru Swami Nityanand sanctified Ganeshpuri. The place is so beautiful - so tranquil and serene that as soon as you enter the temple you feel the world slipping away and calm &amp; serenity descending on you.</p>
      <p><b>Nitya-Eternal, Ananda-Bliss</b> - Eternal Bliss took a body and was known as Bhagwan Nityanand.</p>
    </div>
  </div>
</footer>
<div class="smallFooter">
  <div class="container">
    <div class="eight columns smallFooterLeft">SHREE BHIMESHWAR SADGURU NITYANAND SANSTHA 2013. ALL RIGHTS RESERVED.</div>
    <div class="eight columns smallFooterRight">RESPONSIVE WEB DESIGN BY <a href="http://gayatrimicrosystems.com" target="blank"> Gayatri Microsystems</a></div>
  </div>
</div>
<script type="text/javascript">
 
    jQuery(window).load(function(){
      jQuery('.flexslider').flexslider({
        animation: "fade",
        controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
directionNav: true, 
slideshow: false,
        start: function(slider){
          jQuery('body').removeClass('loading');
        }
      });
	   
	  
	  
    });

  </script> 
<script type='text/javascript' src='wp-content/plugins/contact-form-7/includes/js/jquery.form.min.js?ver=3.18'></script> 
<script type='text/javascript' src='wp-content/plugins/contact-form-7/includes/js/scripts.js?ver=3.3.1'></script> 
<script type='text/javascript' src='wp-includes/js/hoverIntent.min.js?ver=r6'></script>
</body>
</html>

