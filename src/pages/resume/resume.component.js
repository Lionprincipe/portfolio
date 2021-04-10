import React from 'react'
import { Icon, SkillRated } from '../../components'
import { data } from './resume.data'
import './resume.styles.scss'


export const Resume = () => {
  const { profile, resume, skills } = data
  return (
    <div>
      <section className="personal-info">
        <div className="profile-picture">
          <img src={profile.picture} alt="profile" width="25%" height="25%" />
        </div>

        <h1 className="headline">
          <div className="fullname">
            <span>{profile.firstName}</span>
            <span>{profile.lastName}</span>

          </div>
          <div className="job-title">
            {profile.jobName}
          </div>
        </h1>
      </section>
      <section className="resume">
        <h2 className="subtitle"> {resume.title}</h2>
        <p>{resume.description}</p>
      </section>
      <section className="skills">
        <h2 className="subtitle">
          {skills.title}
        </h2>
        {skills.articles.map(({ icon, title, description, languages }) => <article key={title}>
          <div className="article-wrapper">
            <div className="icon-box"><Icon name={icon} /></div>
            <div>
              <h3 className="title">
                <span> {title}</span>
              </h3>
              <p className="description">{description} </p>
            </div>

          </div>
          <div>
            <h3 className="title">{languages.title}</h3>
            <ul>
              {languages.items.map(({ label, rate }) => <li key={label}>
                <SkillRated label={label} rate={rate} />

                {/* <div className="progress-card">
                  <span className="rate">{rate}</span>
                  <span className="rate">{label}</span>
                </div> */}

              </li>
              )}
            </ul>
          </div>





        </article>
        )}
      </section>

    </div>
  )
}

