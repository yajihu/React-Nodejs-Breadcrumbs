import React from 'react';


class App extends React.Component {

  /**
   * constructor
   *
   * @object  @props  parent props
   * @object  @state  component state
   */
  constructor(props) {

    super(props);

    this.state = {
      items: [],
      isLoaded: false
    }

  }

  /**
   * componentDidMount
   *
   * Fetch json array of objects from given url and update state.
   */
  
  componentDidMount() {

    var url = 'http://localhost:5000'+window.location.pathname;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          items: data,
          isLoaded: true,
        })
      }).catch((err) => {
        console.log(err);
      });

  }

  /**
   * render
   *
   * Render UI
   */
  render() {

    const { isLoaded, items } = this.state;
    
    if (!isLoaded)
      return <div>Loading...</div>;

    return (
      <div className="App">
        {window.location.pathname.split( '/' ).map(path => (
            <span key={path.id}>
              <a  href= {"//"+window.location.hostname+":"+window.location.port+"/"+ window.location.pathname.split( '/' ).slice(1, window.location.pathname.split( '/' ).indexOf(path)+1).join("/")}>{path}</a>
              <span>&gt;</span>
          
            </span>
          ))}

        

          {items.map(item => (
            <div key={item.id}>
              {(item.type==="dir")?<a href={window.location.href.replace(/\/+$/, '')+"/"+item.name}>{item.name}</a>:<p>{item.name}</p>}
            </div>
          ))}
      </div>
    );

  }
}

export default App;