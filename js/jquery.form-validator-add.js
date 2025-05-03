$(document).ready(function(){
	addValidateclass('','');
});

function addValidateclass(what,groups){	
	if(groups==""){
	
		$('.required').valAttr('','required').valAttr('error-msg','Required');
		$('.number').valAttr('','number').valAttr('error-msg','Number Only');
		$('.email').valAttr('','email').valAttr('error-msg','Enter Valid Email');
		$('.date').valAttr('','date').valAttr('format','dd-mm-yyyy').valAttr('error-msg','Please check date format is dd-mm-yyyy');
		$('.url').valAttr('','url').valAttr('error-msg','Please add http://');
		$('.alpha').valAttr('','alphabet').valAttr('error-msg','Alphabets Only');
		$('.alphan').valAttr('','alphanumeric').valAttr('error-msg','Alphabets and Numebers only');
		$('.qtysmall').valAttr('qty','1-5').valAttr('error-msg','Quantity 1-5');
		$('.file').valAttr('','mime size').valAttr('error-msg','Max Size 3MB').valAttr('max-size','3M');
		
		$('.optional').valAttr('optional','true');
		$('.float').valAttr('allowing','float');
		$('.floatneg').valAttr('allowing','float,negative');
		
		
		$('.pincode').valAttr('','number length').valAttr('length','1-6').valAttr('error-msg','Pincode - Number and Length is 6');
		$('.mobile').valAttr('','number length').valAttr('length','10-10').valAttr('error-msg','Mobile Number and Length is 10');
		$('.phone').valAttr('','number length').valAttr('length','10-13').valAttr('error-msg','Phone/Mobile Number and Length is 10-13');
		$('.csv').valAttr('allowing','xls, xlsx, csv');
		
	}else if(what=="optional"){
	
		$.each(groups, function( index, value ) {
			$(value).valAttr('optional','true');
		});
		
	}else if(what=="remove"){
	
		$.each(groups, function( index, value ) {
			$(value).removeAttr('data-validation-optional');
		});
		
	}
}