$(document).ready(function() {
	$('.content').hide();
	toggle("#ICPC");
	toggle("#IMARX");
	toggle("#IBSERC");
	toggle("#IDRUGU");
	toggle("#ICML");
	toggle("#iUNSC");
	toggle("#iHPH");
});
function toggle(elem) {
	$(elem).on('click', function(event) {
		var target = $(event.currentTarget).siblings(0);
		switch (elem) {
			case '#ICPC':
				$(target[0]).slideToggle(700);
				break;
			case '#IMARX':
				$(target[2]).slideToggle(700);
				break;
			case '#IBSERC':
				$(target[4]).slideToggle(700);
				break;
			case '#IDRUGU':
				$(target[6]).slideToggle(700);
				break;
			case '#ICML':
				$(target[8]).slideToggle(700);
				break;
			case '#iUNSC':
				$(target[10]).slideToggle(700);
				break;
			case '#iHPH':
				$(target[12]).slideToggle(700);
				break;
			default:
				break;
		}
	});
}

/*
#ICPC
#IMARX 
#IBSERC
#IDRUGU
#IPUN
#iUNSC {

*/