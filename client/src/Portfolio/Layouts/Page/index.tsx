import React from 'react'

import Section from '../../Components/Section'
import ProjectsSection from './ProjectsSection'

export default (): JSX.Element => (
  <main>
    <Section name="About Me" sectionId="about" title="About My Profession" />
    <Section name="Studies" sectionId="education" title="My Education & Certificates" />
    <Section name="Experiences" sectionId="experience" title="My Work History" />
    <Section
      component={<ProjectsSection />}
      name="My Projects"
      sectionId="portfolio"
      title="My Projects Portfolio"
    />
    <Section name="Skills" sectionId="skills" title="My Tech Stack" />
    <Section name="Contact Me" sectionId="contact" title="Reach Out to Me For Hiring" />
  </main>
)
