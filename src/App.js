import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            {/* without 'exact', this route would work for every single link on the page. This way it works only for exact match of '/' */}
            <Route exact path="/" >
              <Home />
            </Route>
            <Route path="/create" >
              <Create />
            </Route>
            {/* ':id' is used as a placeholder implicating that there will be x amount of sublinks from /blogs. 'id' is just a name, for easier recognition, but it can be anything else */}
            <Route path="/blogs/:id" >
              <BlogDetails />
            </Route>
            {/* '*' mathes ANY string. This goes to the very bottom of the routing section, because it would match any link, thus some pages would not be displayed as intended */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>    
      </div>
    </Router>
  );
}

export default App;
