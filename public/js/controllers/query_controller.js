angular.module('queryController',[])

	.controller('mainController', function($scope,$http,Query) {
		$scope.formData = {};

		// when landing on the page, get all rows and show them
		// use the service to get all the rows
		Query.get()
			.success(function(data) {
				$scope.rows = data;
			});

		// when submitting the add form, send the text to the node API
		$scope.queryDatabase = function() {
			console.log("queryDatabase() called");
			console.log($scope.formData.query);
			$http.post('/query', $scope.formData)
			.success(function(data) {
				console.log(data);
				$scope.rows = data;
				$scope.formData = {};
			});


			//console.log("$scope.rows" + $scope.rows);
			
			// Query.get($scope.formData)
			// 	.success(function(data) {
			// 		$scope.formData = {};
			// 		$scope.rows = data;
			// 	})
			// 	.error(function(data) {
			// 		console.log('error: ' + data);
			// 	});
		};
	});