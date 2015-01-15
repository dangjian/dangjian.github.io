$( document ).ready(function() {

	/* Sidebar height set */
	$('.sidebar').css('min-height',$(document).height());
	$('.meta').tooltip();

	/* Secondary contact links */
	var scontacts = $('#contact-list-secondary');
	var contact_list = $('#contact-list');
	
	scontacts.hide();
	
	contact_list.mouseenter(function(){ scontacts.fadeIn(); });
	
	contact_list.mouseleave(function(){ scontacts.fadeOut(); });

});
