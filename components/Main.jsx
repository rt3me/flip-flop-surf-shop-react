import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import CampsiteInfo from "./CampsiteInfoComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

class Main extends Component {
  componentDidMount() {}

  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/directory" render={() => <Directory campsites={this.props.campsites} />} />
              <Route exact path="/contact" render={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
              <Route exact path="/about" render={() => <About partners={this.props.partners} isLoading={this.props.partners.isLoading} ErrMess={this.props.partners.errMess} />} />
              <Redirect to="/" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Main);