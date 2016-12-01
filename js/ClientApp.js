import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      <div> 
        <MyTitle title='props are cool' color='rebeccapurple' />
        <MyTitle title='get used to it' color='dodgerblue' />
        <MyTitle title='im cool too. awesome stuff' color='mediumaquamarine' />
      </div>
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
