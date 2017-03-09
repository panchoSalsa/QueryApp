angular.module('queryService',[])

	.factory('Query', function($http) {
		return {
			get : function() {
				return $http.get('/all');
			},
			post_query : function(data) {
				return $http.post('/query', data);
			} 
		}
	});