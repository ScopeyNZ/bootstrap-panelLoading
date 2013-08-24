$(document).ready(function(){
	$('#main_content').on('click', 'div.demo-pane .my-btn', function(){
		$(this).parents('div.demo-pane').panelLoading();
		setTimeout(function(){
			$(this).parents('div.demo-pane').panelLoading();
		}, 10000);
	});
});