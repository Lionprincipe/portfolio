import ProfilePicture from '../../assets/images/profile.jpg'

export const data = {
  profile: {
    picture: ProfilePicture,
    firstName: 'Lionel',
    lastName: 'Mouendou',
    jobName: '   Fullstack Web-developer'
  },
  resume: {
    title: 'resume',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, quos nam, ipsam saepe quibusdam cumque autem est inventore, dolorum eum ipsum aliquam fugit labore illo assumenda doloremque quae suscipit nobis!
     .`
  },
  skills: {
    title: 'Skills',
    articles: [

      {
        icon: 'front-end', title: 'Front-end', description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur nostrum ipsa, magni, saepe, id tempore in voluptates dolor quas delectus ullam deserunt necessitatibus! Odit voluptate similique consequuntur quia minus?`,
        languages: {
          title: 'languages & tools',
          items:
            [
              { label: 'React', rate: 80, },
              { label: 'redux', rate: 80, },
              { label: 'Javascript', rate: 75, },
              { label: 'Typescript', rate: 55, },
              { label: 'HTML', rate: 85, },
              { label: 'CSS', rate: 85, },
              { label: 'SASS', rate: 70, },]
        },

      },
      {
        icon: 'back-end', title: 'Back-end', description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur nostrum ipsa, magni, saepe, id tempore in voluptates dolor quas delectus ullam deserunt necessitatibus! Odit voluptate similique consequuntur quia minus?`,
        languages: {
          title: 'technologies',
          items:
            [
              { label: 'Rest API- Express', rate: 75, },
              { label: 'GraphQL', rate: 55, },
              { label: 'Mongodb', rate: 70, },
              { label: 'Sql', rate: 70, },
              { label: 'Mongoose', rate: 75, },
              { label: 'TypeOrm', rate: 60, },
              { label: 'Git', rate: 70, },
            ]
        },

      },
      {
        icon: 'ux-design', title: 'UX-design', description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur nostrum ipsa, magni, saepe, id tempore in voluptates dolor quas delectus ullam deserunt necessitatibus! Odit voluptate similique consequuntur quia minus?`,
        languages: {
          title: 'tools ',
          items:
            [
              { label: 'Adobe XD', rate: 75, },
              { label: 'Sketch', rate: 50, },
              { label: 'Adobe Illutrator', rate: 70, },
              { label: 'Adobe Photoshop', rate: 70, },
            ]
        },

      }
    ]
  }

}