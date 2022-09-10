import React from 'react'

import Section from '../../Components/Section'
import ProjectsSection from './ProjectsSection'
import About from './About'
import Contact from './Contact'
import { WorkFlowCards, Services } from '../../Components/workflow'
import { WorkCards } from '../../Components/WorkExperiences'

export default (): JSX.Element => (
  <main>
    <Section component={<About />} name="Who I am" sectionId="about" title="About My Profession" />
    <Section
      component={<WorkCards />}
      name="Experiences"
      sectionId="work"
      title="Work History & Education"
    />
    <Section
      component={<ProjectsSection />}
      name="Projects"
      sectionId="portfolio"
      title="Project Contributions"
    />
    <Section component={<Services />} name="Technology" sectionId="tech" title="My TechStack" />
    <Section
      component={<WorkFlowCards />}
      name="Work Flow"
      sectionId="work-flow"
      title="Way of Working"
    />
    <Section component={<Contact />} name="Contact Me" sectionId="contact" title="Get In Touch" />
  </main>
)
