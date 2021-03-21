import React from 'react';
import { Route, NavLink, Switch, Link, Redirect, Router } from 'react-router-dom';

import * as postService from './services/postService';

import style from './App.module.css';
import Header from './components/Header/Header';
//ako e s index.js:
// import Header from './components/Header'
import AsideMenu from './components/AsideMenu/AsideMenu';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';

// function App() {
//   return (
//     <section className={style.container}>
//       <section className={style.app}>
//         <Header/>
//         <AsideMenu/>
//         <Main/>
//         <Footer/>
//       </section>
//     </section>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      selectedPost: null,
    }
  }

  componentDidMount() {
    postService.getAll()
      .then(newPosts => {
        // console.log(newPosts);
        //poneje ne obnovqwam state, moga directno da go setna prez obekta {posts}, a ne da polzwam function.
        this.setState(() => ({
          posts: newPosts
        }))
      })
  }

  onMenuItemClick(id) {
    this.setState(() => ({
      selectedPost: this.state.posts.filter(p => p.id === id)
    }))
  }

  getPosts() {
    return this.state.selectedPost ?? this.state.posts;
  }

  render() {
    return (
      <section className={style.container}>
        <section className={style.app}>
          <Header />

          <AsideMenu onMenuItemClick={this.onMenuItemClick.bind(this)} />

          <Switch>
            <Route path="/" exact>
              {/* for posts take the function this.getPosts() and execute it!!!! Zatowa imam () nakraq, a 
                ne prosto da podawam referenciq kym this.getPosts, kakto shteshe da e, ako nqmashe ()!!!!
                Towa dolu e syshtoto kato towa  <Main posts={this.state.selectedPost ?? this.state.posts} /> */}
              <Main posts={this.getPosts()} />
            </Route>
            <Route path="/about/:name" component={About} />

            <Route path="/about" component={About} />

            <Route path="/contact-us" render={ContactUs} />

            <Route path="/contact-us" render={(props) => <ContactUs />} />

            <Route path="/products" render={(props) => (<section className={style.sectionPageWrapper}>
              <h1 >Products</h1>
            </section>)} />

            {/* default route */}
            <Route>
              <Main posts={this.getPosts()} />
            </Route>

          </Switch>

          <Footer />
        </section>
      </section>
    )
  }
}

export default App;
