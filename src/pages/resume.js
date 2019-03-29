import React from 'react'

import ResumePDF from '../img/helenvholmes_resume.pdf'

export const Resume = () => {
  console.log(ResumePDF);

  return (
    <embed width="100%" height="100vh" name="plugin" type="application/pdf" src="/static/helenvholmes_resume-7ee87fdb7cd91f46e94e2a6206a9ccee.pdf"></embed>
  )
}

export default Resume
