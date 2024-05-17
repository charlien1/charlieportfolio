import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact Me</h2>
      <span className='section__subtitle'>Phone: 657-340-0499 | Email: charlienguyen688@yahoo.com | Discord: chaarii</span>
      <br /><a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email Me
        </span>
      </a>
    </section>
  )
}

export default Contact
