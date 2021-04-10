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
        Incidunt error nisi repudiandae veniam dolor ea qui quisquam hic sit. Nisi commodi doloremque, rerum saepe consequatur hic recusandae deserunt blanditiis sequi ipsam error. Ducimus enim excepturi aperiam eius dolore!
        Ea ipsum modi officiis accusamus inventore possimus quas voluptates nihil error aspernatur distinctio suscipit accusantium, voluptatem laborum delectus corrupti quae reprehenderit nisi deserunt? Quae aspernatur a dolorem. Aperiam, molestias? Sit.
        Labore culpa eius temporibus accusamus quia! Suscipit quaerat ipsum numquam dolore officia ab enim cum, esse eveniet itaque, labore nostrum rem iure est qui reiciendis! Vitae quasi veritatis voluptate nemo.`

  },
  skills: {
    title: 'Skills',
    articles: [

      {
        icon: 'front-end', title: 'Front-end', description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur nostrum ipsa, magni, saepe, id tempore in voluptates dolor quas delectus ullam deserunt necessitatibus! Odit voluptate similique consequuntur quia minus?`,
        languages: {
          title: 'Languages',
          items:
            [
              { label: 'HTML', rate: 80, }
            ]
        }
      }
    ]
  }

}