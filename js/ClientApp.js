import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
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
