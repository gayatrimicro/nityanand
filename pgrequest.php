<?php include("pgconfig.php"); ?>
<html>
<?php

$perform=$_POST["perform"];
$currencyCode=$_POST["currency_code"];
$amount=$_POST["amount"]*100;
$merchantReferenceNo=$_POST["merchant_reference_no"];
$orderDesc=$_POST["order_desc"];

$messageHash = $pgInstanceId."|".$merchantId."|".$perform."|".$currencyCode."|".$amount."|".$merchantReferenceNo."|".$hashKey."|";
$message_hash = "CURRENCY:7:".base64_encode(sha1($messageHash, true));
?>
<head><title>Processing..</title>
<script language="javascript">
function onLoadSubmit() {
	document.merchantForm.submit();
}
</script>
</head>

<body onLoad="onLoadSubmit();">
	<br />&nbsp;<br />
	<center><font size="5" color="#3b4455">Transaction is being processed,<br/>Please wait ...</font></center>
	<form name="merchantForm" method="post" action="https://<? echo $pgdomain;?>/AccosaPG/verify.jsp">

	<input type="hidden" name="pg_instance_id" value="<? echo $pgInstanceId;?>" />
	<input type="hidden" name="merchant_id" value="<? echo $merchantId;?>" />
	
	<input type="hidden" name="perform" value="<? echo $perform;?>" />
	<input type="hidden" name="currency_code" value="<? echo $currencyCode;?>" />
	<input type="hidden" name="amount" value="<? echo $amount;?>" />
	<input type="hidden" name="merchant_reference_no" value="<? echo $merchantReferenceNo;?>" />
	<input type="hidden" name="order_desc" value="<? echo $orderDesc;?>" />

	<input type="hidden" name="message_hash" value="<? echo $message_hash;?>" />

	<noscript>
		<br />&nbsp;<br />
		<center>
		<font size="3" color="#3b4455">
		JavaScript is currently disabled or is not supported by your browser.<br />
		Please click Submit to continue the processing of your transaction.<br />&nbsp;<br />
		<input type="submit" />
		</font>
		</center>
	</noscript>
	</form>
</body>
</html>
