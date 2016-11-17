/*global jQuery:false */
jQuery(document).ready(function($) {
"use strict";

	//Contact
	$('form.contactForm').submit(function(){

		var f = $(this).find('.form-group'),
		ferror = false,
		emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

		f.children('input').each(function(){ // run all inputs

			var i = $(this); // current input
			var rule = i.attr('data-rule');
			var value = i.val().trim();

			if( rule !== undefined ){
			var ierror=false; // error flag for current input
			var pos = rule.indexOf( ':', 0 );
			if( pos >= 0 ){
				var exp = rule.substr( pos+1, rule.length );
				rule = rule.substr(0, pos);
			}else{
				rule = rule.substr( pos+1, rule.length );
			}

			switch( rule ){
				case 'required':
				if( value==='' ){ ferror=ierror=true; }
				break;

				case 'maxlen':
				if( value.length<parseInt(exp) ){ ferror=ierror=true; }
				break;

				case 'email':
				if( !emailExp.test(value) ){ ferror=ierror=true; }
				break;

				case 'checked':
				if( !i.attr('checked') ){ ferror=ierror=true; }
				break;

				case 'regexp':
				exp = new RegExp(exp);
				if( !exp.test(value) ){ ferror=ierror=true; }
				break;
			}
				i.next('.validation').html( ( ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '' ) ).show('blind');
			}
		});
		f.children('textarea').each(function(){ // run all inputs

			var i = $(this); // current input
			var rule = i.attr('data-rule');

			if( rule !== undefined ){
			var ierror=false; // error flag for current input
			var pos = rule.indexOf( ':', 0 );
			if( pos >= 0 ){
				var exp = rule.substr( pos+1, rule.length );
				rule = rule.substr(0, pos);
			}else{
				rule = rule.substr( pos+1, rule.length );
			}

			switch( rule ){
				case 'required':
				if( value==='' ){ ferror=ierror=true; }
				break;

				case 'maxlen':
				if( value.length<parseInt(exp) ){ ferror=ierror=true; }
				break;
			}
				i.next('.validation').html( ( ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '' ) ).show('blind');
			}
		});
		if( ferror ) return false;

      $(this).submit()
      return true;

      var str = $(this).serialize();
				$.ajax({
				type: "POST",
				url: "http://getsimpleform.com/messages?form_api_token=4125e0cea9f82860c201cc9681c83887",
				data: str,
				success: function(msg){
			$("#sendmessage").addClass("show");
			$("#errormessage").ajaxComplete(function(event, request, settings){

			if(msg == 'OK')
			{
				$("#sendmessage").addClass("show");
			}
			else
			{
				$("#sendmessage").removeClass("show");
				result = msg;
			}

			$(this).html(result);});}});
				return false;
	});

});
