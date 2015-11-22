var ReactDOM = require('react-dom');

function generateData (iterations) {
    var res = [],
        template  = {
          Id: '',
          Name: 'UserName',
          Position: 'position',
          Location: 'Lviv',
          SomeField: 'Some text',
          SomeField2: 'Some text'
        };

    for (var i = 0; i < iterations; i++){
      var targetObj = Object.create(template);
      targetObj.Id = i;
      targetObj.Name += i;
      targetObj.Location += i;
      res.push(targetObj);
    }

    return res;
}

var data = {
    autoBind: true,
    dataSource: {
      data: generateData(30),
      pageSize: 10,
      serverPaging: false,
      serverFiltering: false,
      serverSorting: false
    },
    scrollable: true,
    resizable: true,
    reorderable: true,
    filterable: {
      extra: false,
      operators: {
        string: {
          contains: "Contains"
        }
      }
    },
    sortable: true,
    pageable: {
      input: true,
      numeric: true
    },
    columns: [
      {
        field: "Id",
        title: "Employee ID",
        width: 100,
        locked: true,
        lockable: true,
        filterable: {
          operators: {
            string: {
              eq: "Equal to"
            }
          },
          ui: function (element) {
            element.kendoNumericTextBox({
              format: '#',
              decimals: 0
            });
          }
        }
      },
      {
        field: "Name",
        title: "Name",
        width: 200,
        attributes: {
          class: "table-cell",
          style: "color: blue"
        },
        template: "<a href='./\\#/'>#: Name # </a>",
        sortable: true,
        filterable: true,
        locked: true,
        lockable: true
      },
      {
        field: "Position",
        title: "Position",
        width: 250,
        lockable: true
      },
      {
        field: "Location",
        title: "Location",
        width: 250
      },
      {
        field: "SomeField",
        title: "Some field",
        width: 250
      },
      {
        field: "SomeField2",
        title: "Some field2",
        width: 250
      }
    ]
};


module.exports = React.createClass({
    componentDidMount() {
        // Init kendo UI grid widget
        var grid = $(ReactDOM.findDOMNode(this.refs.Grid));
        grid.kendoGrid(data);
    },
    render() {
        return <div ref="Grid"></div>
    }
})
