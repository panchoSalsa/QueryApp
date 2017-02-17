angular.module('queryService',[])

	.factory('Query', function($http) {
		return {
			get : function() {
				return $http.get('/all');
			}
		}
	});