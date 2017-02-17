angular.module('queryService',[])

	.factory('Query', function($http) {
		return {
			get : function() {
				return $http.get('/all');
			}
			// get : function(queryData) {
			// 	console.log("inside post service");
			// 	$http.get('/query');
			// 	return "one";
			// 	// return $http.post('/query',queryData);
			// }
		}
	});