import style from './Post.module.css';

const Post = (props) => {
    return (
        <article className={style.post}>
            <article className={style.imgWrapper}>
                <img className={style.img} src="blue-origami-bird.png" alt="Origami-bird-folded" />
            </article>
            <p className={style.description}>{props.description}</p>
            <p className={style.author}>
                <small>
                    Author: <strong>{props.author}</strong>
                </small>
            </p>
        </article>


        ////if i send the whole object post: 
        // // <Post key={p.id}
        // //     post={p} />
        ////then this way:
        // <article className={style.post}>
        //     <article className={style.imgWrapper}>
        //         <img className={style.img} src="blue-origami-bird.png" alt="Origami-bird-folded" />
        //     </article>
        //     <p className={style.description}>{props.post.description}</p>
        //     <p className={style.author}>
        //         <small>
        //             Author: <strong>{props.post.author}</strong>
        //         </small>
        //     </p>
        // </article>
    )
};

export default Post;