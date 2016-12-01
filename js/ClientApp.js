var div = React.DOM.div;
var h1 = React.DOM.h1; 

var MyTitle = React.createClass({
  render: function() {
    return (
      div(null, h1({ style: {color: this.props.color} }, this.props.title))
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
      render: function() {
        return (
          div(null, [
            MyTitleFactory({title: 'Props are great!', color: 'rebeccapurple'}),
            MyTitleFactory({title: 'Props are great!', color: 'dodgerblue'}),
            MyTitleFactory({title: 'Use props everywhere!', color: 'mediumaquamarine'}),
            MyTitleFactory({title: 'Props are the best!', color: 'peru'})
            ]
          )
        )
      }
    })

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))