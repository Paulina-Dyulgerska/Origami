import React from 'react';

import * as postService from './services/postService';

import style from './App.module.css';
import Header from './components/Header/Header';
//ako e s index.js:
// import Header from './components/Header'
import AsideMenu from './components/AsideMenu/AsideMenu';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

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
      posts: []
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

  render() {
    return (
      <section className={style.container}>
        <section className={style.app}>
          <Header />
          <AsideMenu />
          <Main posts={this.state.posts} />
          <Footer />
        </section>
      </section>
    )
  }
}

export default App;
