class App extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper red">
              <Link to='/' className="brand-logo center">NewsChallenger</Link>
            </div>
          </nav>
        </div>
        <div className='grey-text text-darken-2'>
          {this.props.children || 'Welcome to NewChallenger!!!'}
        </div>
      </div>  
    );
  }
}