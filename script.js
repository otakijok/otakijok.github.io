let dom = document.querySelector('#root');
let element = React.createElement('div', {}, [
  React.createElement('h2', {}, "Hello!"),
  React.createElement('h3', {
    className: 'alert alert-primary'
  }, "React ｻﾝﾌﾟﾙ ㌻!"),
  React.createElement('ul', {
    className: 'list-group'
  }, [
    React.createElement('li', {
      className: 'list-group-item'
    }, "First ｱｲﾃﾑ."),
    React.createElement('li', {
      className: 'list-group-item'
    }, "Second ｱｲﾃﾑ."),
    React.createElement('li', {
      className: 'list-group-item'
    }, "Third ｱｲﾃﾑ.")
  ])
]);
ReactDOM.render(element, dom);