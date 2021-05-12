import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useLocation,
} from "react-router-dom";

//import * as FakeTime from "./posts/FakeTime";

import "./App.css";

const posts = {
  //fakeTime: FakeTime,
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="content">
        <Switch>
          <Route path="/blog/:id">
            <BlogPost />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Home = () => {
  useEffect(() => {
    document.title = "Sebastian Wilczek, Software Engineer";
  }, []);

  return (
    <>
      <h1 className="homeHeader">{"_> sebastian.wilczek"}</h1>
      <h2 className="homeSubheader">Software Engineer.</h2>
      <h3 className="homeEmailHeader">sebastian.wilczek@protonmail.com</h3>

      <h2 className="homeTopicHeader">About</h2>
      <p className="paragraph">
        I am a software engineer interested in all things tech, efficiency,
        healthy life and human relationships. As you can probably imagine, this
        blog is about all that.
      </p>

      <Link className="aboutLink" to="/about">
        Read more...
      </Link>

      <h2 className="homeTopicHeader">Blog</h2>

      {Object.keys(posts).length > 0 ? (
        Object.keys(posts).map((id) => {
          const Post = posts[id];
          return (
            <div className="blogPreview" key={id}>
              <Link className="blogPreviewHeader" to={`/blog/${id}`}>
                {Post.title}
              </Link>
              <p className="blogPreviewInfo">
                <i>{Post.date}</i>
              </p>
              <Post.Preview />
            </div>
          );
        })
      ) : (
        <p className="paragraph">Coming soon.</p>
      )}
    </>
  );
};

const BlogPost = () => {
  let { id } = useParams();
  const Post = posts[id];

  useEffect(() => {
    document.title = `${Post?.title} - Sebastian Wilczek, Software Engineer`;
  }, [Post]);

  if (!Post) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Link className="goBack" to="/">
        {"< Go back"}
      </Link>
      <h1 className="header">{Post.title}</h1>
      <p className="info">
        by Sebastian Wilczek - <i>{Post.date}</i>
      </p>
      <Post.Content />
    </>
  );
};

const About = () => {
  useEffect(() => {
    document.title = `About the Author - Sebastian Wilczek, Software Engineer`;
  }, []);

  return (
    <>
      <Link className="goBack" to="/">
        {"< Go back"}
      </Link>
      <h1 className="aboutHeader">About the Author</h1>
      <div className="aboutSplit">
        <div className="aboutLeft">
          <p className="info">
            My name is Sebastian Wilczek. I am a Software Engineer with a
            passion for technology, efficiency, software (duh) and healthy life.
          </p>
          <p className="info">
            Consider this blog to be a direct feed of my brainwaves: I'll write
            about whatever comes to mind at the moment. This might sound random,
            but knowing myself, there will probably be patterns (at some point).
          </p>
          <h2 className="aboutSubheader">Contact</h2>
          <p className="info">
            Email: <i>sebastian.wilczek@protonmail.com</i>
          </p>
          <h2 className="aboutSubheader">Education</h2>
          <p className="info">
            2019 - 2020: <i>M.Sc. Security and Network Engineering</i>
          </p>
          <p className="info">
            2015 - 2019: <i>B.Sc. Software Engineering</i>
          </p>
          <h2 className="aboutSubheader">Career</h2>
          <p className="info">
            <i>{"2020 - present: Instana Inc. - Software Engineer"}</i>
          </p>
          <p className="info">
            <i>{"2020: Instana Inc. - Internship & Working Student"}</i>
          </p>
          <p className="info">
            <i>
              {"2017 - 2019: codecentric AG - Internship & Working Student"}
            </i>
          </p>
        </div>
        <div className="aboutRight">
          <img
            src="https://avatars.githubusercontent.com/u/38422130?v=4"
            alt="Sebastian Wilczek"
            className="aboutImage"
          />
        </div>
      </div>
    </>
  );
};

export default App;
