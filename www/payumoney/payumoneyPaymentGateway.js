function submitForm() {	
	var form = document.getElementById('sendParam');
	var productinfo = getParameterByName('productinfo');

	var amt = getParameterByName('amt');
	var name = getParameterByName('name');
	var mobileNo = getParameterByName('mobileNo');
	var email = getParameterByName('email');
	var bookingId = getParameterByName('bookingId');
	var salt = getParameterByName('salt');
	var key = getParameterByName('key');
	var txnid = getParameterByName('txnid');

	document.getElementById('key').value = key;
	
	document.getElementById('amount').value = amt;
	document.getElementById('productinfo').value = productinfo;
	document.getElementById('amount').value = amt;
	document.getElementById('firstname').value = name;
	document.getElementById('phone').value = mobileNo;
	document.getElementById('email').value = email;
	document.getElementById('txnid').value = txnid;
	
	

        	var hash = getParameterByName('hash');
	document.getElementById('hash').value = hash;
	document.sendParam.submit();

}

function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
submitForm();