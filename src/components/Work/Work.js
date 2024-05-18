import uniqid from 'uniqid'
import { work } from '../../portfolio'
import './Work.css'
import bannerImage from './banner.png'

const Work = () => {
  if (!work.length) return null

  return (
    <section className='section work-experience' id='work'>
      <h2 className='section__title'>Work Experience</h2>
      <ul className='work-experience__list'>
        {work.map((experience) => (
          <li key={uniqid()} className='work-experience__list-item'>
            <h3 className='work-experience__role'>{experience.role}</h3>
            <p className='work-experience__company'>{experience.company}</p>
            <p className='work-experience__duration'>{experience.duration}</p>
            <br /><p className='work-experience__description'>{experience.description}</p>
            <br />
            <a href="https://www.ocvector.org/" target="_blank" rel="noopener noreferrer">
              <img src={bannerImage} alt="Banner" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Work