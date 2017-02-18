$('#builder').queryBuilder({
	filters: [{
	    id: 'id',
	    label: 'ID',
	    type: 'integer',
	   	operators: ['equal', 'not_equal']
  	},
  	{
  		id: 'title',
  		label: 'Title',
  		type: 'string',
  		operators: ['equal', 'not_equal']
  	},
  	{
  		id: 'year',
  		label: 'Year',
  		type: 'integer',
  		operators: ['equal', 'not_equal']
  	},
  	{
  		id: 'director',
  		label: 'Director',
  		type: 'string',
  		operators: ['equal', 'not_equal']
  	}],
  	allow_groups: false
});


$('#builder').on('validationError.queryBuilder', function(e, rule, error, value) {
	// never display error for my custom filter
	console.log("YOU HAVE AN ERROR");
	e.preventDefault();
});

$('#btn-get-sql').on('click', function(event) {
	var result = $('#builder').queryBuilder('getSQL');

	// event.preventDefault();

	if (result.sql.length) {
		result = "select * from movies where " + result.sql;
		this.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(result);
	} 



	// TO-DO
	// disable saving query when no query available 

});