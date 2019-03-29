/* eslint-disable */
import React from 'react'

import ResumePDF from '../img/helenvholmes_resume.pdf'

export const Resume = () => {
  const windowHeight = Math.max(
    document.documentElement["clientHeight"],
    document.body["scrollHeight"],
    document.documentElement["scrollHeight"],
    document.body["offsetHeight"],
    document.documentElement["offsetHeight"]
  );

  return (
    <embed width="100%" height={windowHeight} style={{minHeight: 800 + 'px'}} name="plugin" type="application/pdf" src="/static/helenvholmes_resume-7ee87fdb7cd91f46e94e2a6206a9ccee.pdf"></embed>
  )
}

export default Resume
