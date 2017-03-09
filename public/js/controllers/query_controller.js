angular.module('queryController',[])

	.controller('mainController', function($scope,$http,Query) {
		$scope.formData = {};

		// when landing on the page, get all rows and show them
		// use the service to get all the rows
		Query.get()
			.success(function(data) {
				$scope.rows = data;
			});


		$scope.importQuery = function() {
			$('#builder').queryBuilder('setRulesFromSQL', $scope.formData.query);
			$scope.queryDatabase();
		}

		$scope.queryDatabase = function() {
			Query.post_query($scope.formData)
				.success(function(data) {
					$scope.rows = data;
					$scope.formData = {};
				});
		};

		// fetch records as rule values get updated in front-end
		$('#builder').on('afterUpdateRuleValue.queryBuilder', function(e, rule) {
			// only hit API if rule value is not empty
			if (rule.value) {
				DisplayRecords();
			}
		});

		$('#builder').on('afterDeleteRule.queryBuilder', function(e, rule) {

			if ($('#builder').queryBuilder('validate')) {
				DisplayRecords();
			} else {
				// must call $apply in order to display 0 rows in the view
				// if $apply is not used, then the view will not be updated
				$scope.$apply(function() {
					$scope.rows = [];
				});
			}
		});

		function DisplayRecords() {
				var result = $('#builder').queryBuilder('getSQL');
				// must set formData before calling $scope.queryDatabase() because 
				// a post request is sent using formData as the parameter
				$scope.formData.query = result.sql;
				$scope.queryDatabase();
		}


		$('#export-btn').on('click', function(event) {

			var text = "id_records,\n";
			var rows = $scope.rows.length;
			
			if (rows > 0) {
				var i; 
				
				for (i = 0; i < rows - 1; ++i) {
					text += $scope.rows[i].record_id + ',\n';
				}

				text += $scope.rows[i].record_id;

				this.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(text);
			} else {
				event.preventDefault();
			}
		});

		$('#save-btn').on('click', function(event) {
			if ($('#builder').queryBuilder('validate')) {
				var result = $('#builder').queryBuilder('getSQL');

				if (result.sql.length) {
					var timestamp = GetTimestamp();
					$(this).attr('download', 'Query ' + timestamp + '.txt');
					this.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(result.sql);
				}
			} else {
				event.preventDefault();
				return;
			}
		});

	});


function GetTimestamp() {
	var date = new Date();
    var months = [ "January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December" ];
	var timestamp = months[(date.getMonth())] + " " + date.getDate() + ", " + date.getFullYear();

	return timestamp;
}