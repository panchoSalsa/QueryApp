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
		};

		$('#btn-run-query').on('click', function() {
			var result = $('#builder').queryBuilder('getSQL');

			if (result.sql.length) {
				$scope.formData.query = "select * from movies where " + result.sql;
				$scope.queryDatabase();
				
			}
		});
	});