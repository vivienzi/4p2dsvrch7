var dataSet = [{"IMEI number":"567895678", "KPI1":"", "KPI2":"", "KPI3":"", "KPI4":"", "KPI5":"", "KPI6":"", "KPI7":"", "KPI8":""},
{"IMEI number":"567895678", "KPI1":"", "KPI2":"", "KPI3":"", "KPI4":"", "KPI5":"", "KPI6":"", "KPI7":"", "KPI8":""},
{"IMEI number":"567895678", "KPI1":"", "KPI2":"", "KPI3":"", "KPI4":"", "KPI5":"", "KPI6":"", "KPI7":"", "KPI8":""},
{"IMEI number":"567895678", "KPI1":"", "KPI2":"", "KPI3":"", "KPI4":"", "KPI5":"", "KPI6":"", "KPI7":"", "KPI8":""},
{"IMEI number":"567895678", "KPI1":"", "KPI2":"", "KPI3":"", "KPI4":"", "KPI5":"", "KPI6":"", "KPI7":"", "KPI8":""},
{"IMEI number":"567895678", "KPI1":"", "KPI2":"", "KPI3":"", "KPI4":"", "KPI5":"", "KPI6":"", "KPI7":"", "KPI8":""},
{"IMEI number":"567895678", "KPI1":"", "KPI2":"", "KPI3":"", "KPI4":"", "KPI5":"", "KPI6":"", "KPI7":"", "KPI8":""},
{"IMEI number":"567895678", "KPI1":"", "KPI2":"", "KPI3":"", "KPI4":"", "KPI5":"", "KPI6":"", "KPI7":"", "KPI8":""},
{"IMEI number":"567895678", "KPI1":"", "KPI2":"", "KPI3":"", "KPI4":"", "KPI5":"", "KPI6":"", "KPI7":"", "KPI8":""},
{"IMEI number":"567895678", "KPI1":"", "KPI2":"", "KPI3":"", "KPI4":"", "KPI5":"", "KPI6":"", "KPI7":"", "KPI8":""},
{"IMEI number":"567895678", "KPI1":"", "KPI2":"", "KPI3":"", "KPI4":"", "KPI5":"", "KPI6":"", "KPI7":"", "KPI8":""},
{"IMEI number":"567895678", "KPI1":"", "KPI2":"", "KPI3":"", "KPI4":"", "KPI5":"", "KPI6":"", "KPI7":"", "KPI8":""},
{"IMEI number":"567895678", "KPI1":"", "KPI2":"", "KPI3":"", "KPI4":"", "KPI5":"", "KPI6":"", "KPI7":"", "KPI8":""},
{"IMEI number":"567895678", "KPI1":"", "KPI2":"", "KPI3":"", "KPI4":"", "KPI5":"", "KPI6":"", "KPI7":"", "KPI8":""},
{"IMEI number":"567895678", "KPI1":"", "KPI2":"", "KPI3":"", "KPI4":"", "KPI5":"", "KPI6":"", "KPI7":"", "KPI8":""},
{"IMEI number":"567895678", "KPI1":"", "KPI2":"", "KPI3":"", "KPI4":"", "KPI5":"", "KPI6":"", "KPI7":"", "KPI8":""},
{"IMEI number":"567895678", "KPI1":"", "KPI2":"", "KPI3":"", "KPI4":"", "KPI5":"", "KPI6":"", "KPI7":"", "KPI8":""},
{"IMEI number":"567895678", "KPI1":"", "KPI2":"", "KPI3":"", "KPI4":"", "KPI5":"", "KPI6":"", "KPI7":"", "KPI8":""},
{"IMEI number":"567895678", "KPI1":"", "KPI2":"", "KPI3":"", "KPI4":"", "KPI5":"", "KPI6":"", "KPI7":"", "KPI8":""},
{"IMEI number":"567895678", "KPI1":"", "KPI2":"", "KPI3":"", "KPI4":"", "KPI5":"", "KPI6":"", "KPI7":"", "KPI8":""}
];

var columns = [];
for(key in dataSet[0]){
  columns.push(key);
}

function tabulate(data, columns) {
    var table = d3.select('.volte').append('table').
        attr('class','table table-striped table-bordered .volte_table');
    var thead = table.append('thead')
    var tbody = table.append('tbody');

    // append the header row
    thead.append('tr')
        .selectAll('th')
        .data(columns).enter()
        .append('th')
        .text(function(column) {
            return column;
        });

    // create a row for each object in the data
    var rows = tbody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr');

    // create a cell in each row for each column
    var cells = rows.selectAll('td')
        .data(function(row) {
            return columns.map(function(column) {
                return {
                    column: column,
                    value: row[column]
                };
            });
        })
        .enter()
        .append('td')
        .attr('class', function(d,i){ return "col_" + i; })
        .text(function(d) {
            return d.value;
        })
        .on("click", function(d) {
          location.href = 'details.html'}
        );



    // return table;
}



// render the table(s) pagination
$(document).ready(function() {
			$('.volte_table').dataTable({
				"sPaginationType": "bs_normal"
			});
			$('.datatable').each(function(){
				var datatable = $(this);
				// SEARCH - Add the placeholder for Search and Turn this into in-line form control
				var length_sel = datatable.closest('.dataTables_wrapper').find('div[id$=_length] select');
				length_sel.addClass('form-control input-sm');
			});
		});
tabulate(dataSet, columns); // 2 column table
