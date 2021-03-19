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
      selectedPost: this.state.posts.filter(p => p.id == id)
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
          <AsideMenu onMenuItemClick={this.onMenuItemClick.bind(this)}/>
          {/* for posts take the function this.getPosts() and execute it!!!! Zatowa imam () nakraq, a 
          ne prosto da podawam referenciq kym this.getPosts, kakto shteshe da e, ako nqmashe ()!!!!
          Towa dolu e syshtoto kato towa  <Main posts={this.state.selectedPost ?? this.state.posts} /> */}
          <Main posts={this.getPosts()} />
          <Footer />
        </section>
      </section>
    )
  }
}

export default App;
