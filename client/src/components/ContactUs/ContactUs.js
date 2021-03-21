import style from './ContactUs.module.css';
import globalStyle from '../../App.module.css'

// const ContactUs = () => {
//     return (
//         <section className={globalStyle.sectionPageWrapper}>
//             <h1>Contact us page</h1>
//         </section>
//     )
// }

// const ContactUs = () => (
//     <section className={globalStyle.sectionPageWrapper}>
//         <h1>Contact us page</h1>
//     </section>
// )

const ContactUs = ({
    match,
    location,
    history
}) => {
    console.log(location);
    return (
        <section className={globalStyle.sectionPageWrapper}>
            <h1>Contact us page</h1>
        </section>
    )
}

export default ContactUs;