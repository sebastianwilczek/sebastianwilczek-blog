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

import * as FakeTime from "./posts/FakeTime";

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

      <h2 className="homeTopicHeader">Blog</h2>

      {Object.keys(posts).length > 0 ? (
        Object.keys(posts).map((id) => {
          const Post = posts[id];
          return (
            <div className="blogPreview">
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

export default App;
