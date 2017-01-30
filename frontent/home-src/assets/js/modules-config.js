var gModulesConfig = {
	paths : {
		jquery : '/assets/js/jquery-1.9.1.min',
		bootstrap3 : '/assets/bootstrap3/js/bootstrap.min',
		app : '/assets/js/app',
		dashboard : '/project/dashboard',
		'modal-dialog' : '/assets/plugins/modal-dialog',
		'format-validator' : '/assets/plugins/format-validator',
		
		dashboard : '/project/dashboard',
		'task-category' : '/project/task-category',
		'task-item' : '/project/task-item',
	},
	shim : {
		bootstrap3 : {
			deps : ['jquery'],
			exports : 'bootstrap3'
		}
	}
};