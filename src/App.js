import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Container } from "reactstrap";
import { withRouter } from "react-router-dom";
import { routes } from "./config/routesConfig";
import RouteWithSubRoutes from "./helper/subRouteHandler";
import { connect } from "react-redux";

function Haptik(props) {

  useEffect(()=>{
    // redirect to the list componenet whenever refreshed
      props.history.push('/list')
  },[])

  return (
    <Container fluid style={{ overflowX: "hidden" }}>
      {/* Map through each route and will only serve the page based on its configuration */}
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={i} {...route} />;
      })}

      <ToastContainer />
    </Container>
  );
}



const _App = connect((state) => ({
  state: state,
}))(Haptik);

const App = withRouter(_App);

export default App;



