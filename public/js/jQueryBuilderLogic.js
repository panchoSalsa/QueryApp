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
  	}]
});

$('#btn-get-sql').on('click', function() {
	var result = $('#builder').queryBuilder('getSQL');

	// TO-DO
	// disable saving query when no query available 

	if (result.sql.length) {
		result = "select * from movies where " + result.sql;
		this.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(result);
	}
});