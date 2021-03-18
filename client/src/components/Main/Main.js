import React from 'react';
import { Fragment } from 'react';

import style from './Main.module.css';

import Post from './Post/Post';

//with functional Component:
const Main = (props) => {
    return (
        <main className={style.mainWrapper}>
            <h1>Some heading of this very important site</h1>
            <section className={style.posts}>
                {
                    props.posts.map((p) => {
                        return (
                            <Post key={p.id}
                                description={p.description}
                                author={p.author} />

                            // <Post key={p.id}
                            //     post={p} />
                        )
                    })
                }
            </section>
        </main>
    )
};

//// with class component:
// class Main extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <main className={style.mainWrapper}>
//                 <h1>Some heading of this very important site</h1>
//                 <section className={style.posts}>
//                     {
//                         this.props.posts.map((p) => {
//                             return (
//                                 <Post description={p.description} author={p.author} />)
//                         })
//                     }
//                 </section>
//             </main>
//         )
//     }
// };

export default Main;