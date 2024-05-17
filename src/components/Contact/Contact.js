import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact Me</h2>
      <span className='section__subtitle'>657-340-0499 | charlienguyen688@yahoo.com</span>
      <br /><a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email Me
        </span>
      </a>
    </section>
  )
}

export default Contact
