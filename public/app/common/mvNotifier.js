/* loads the toastr middleware*/
angular.module('app').value('mvToastr', toastr);

/* Creates a basic notification function */
angular.module('app').factory('mvNotifier', function(mvToastr){
	return {
		notify: function(msg){
			mvToastr.success(msg);
			console.log(msg);
		},
		error: function(msg){
			mvToastr.error(msg);
			console.log(msg);
		}
	}
});