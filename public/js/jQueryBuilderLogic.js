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