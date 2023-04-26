/*
The withRouter function returns a new function called ComponentWithRouterProp, 
which sets the location, navigate, and params properties of React Router as 
props on the component that it wraps. So in a way, you can think of it as a 
function that sets the props of a React component based on the current React 
Router context.

React Router is a library that defines how the React app reacts to changes in
url.
*/

import { useLocation, useNavigate, useParams } from "react-router-dom";

export const withRouter = (Component) => { //exporting a function that 
  //returns a function that sets props
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
};