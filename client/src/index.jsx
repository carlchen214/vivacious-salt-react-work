var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var IndexRoute = ReactRouter.IndexRoute;

var History = ReactRouter.History;
var BrowserHistory = ReactRouter.browserHistory;

console.log('loaded app');

class Base extends React.Component {
  render() {
    return (
      <div>
        <h1 className='center-align'>Welcome Challenger!</h1>   
      </div>
    );
  }
}

class Error extends React.Component {
  render() {
    return (
      <div className="center-align">
      {console.log('ERROR', this.props.params)}
        <h1>Error Cat 404</h1>
        <img className='circle responsive-img' src='//pixabay.com/static/uploads/photo/2014/05/23/12/06/cat-351926_960_720.jpg' />
      </div>
    );
  }
}

var routes = (
  <Router history={BrowserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Base}/>
      <Route path='*' component={Error}/>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('app'));


