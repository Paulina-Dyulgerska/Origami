import style from './About.module.css'
import globalStyle from '../../App.module.css'
import { Redirect, useHistory, withRouter, Route, Switch } from 'react-router-dom';
import ContactUs from '../ContactUs/ContactUs';

// //s nedestructuriran props:
// const About = (props) => {
//     console.log()
//     return (
//         <section className={globalStyle.sectionPageWrapper}>
//             <h1>About page for {props.match.params.name}</h1>
//         </section>
//     )
// }

const About = ({
    match,
    location,
    history,
}) => {
    // const historyHook = useHistory();
    // if (Math.random() > 0.5) {
    //     // return <Redirect to="/" />
    //     historyHook.push('/');
    //     return null;
    // }

    // if (Math.random() > 0.5) {
    //     return <Redirect to="/" />
    // }

    console.log(match)
    return (
        <section className={globalStyle.sectionPageWrapper}>
            <h1>About page for {match.params.name}</h1>
            <Switch>
                {/* the Route is activated only by this URL: http://localhost:3001/about/Pesho/theBestMatch */}
                <Route path={match.url + '/theBestMatch'} render={() => <h1>Pesho is the BEST!!!</h1>} />                    
            </Switch>
        </section>
    )
}

export default About;