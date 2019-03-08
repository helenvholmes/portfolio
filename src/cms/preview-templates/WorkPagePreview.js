import React from 'react'
import PropTypes from 'prop-types'
import { WorkPageTemplate } from '../../templates/work-page'

const WorkPagePreview = ({ entry, widgetFor, getAsset }) => (
  <WorkPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    project1={{
      image1: {
        image: getAsset(entry.getIn(['data', 'main', 'image1', 'image'])),
        alt: entry.getIn(['data', 'main', 'image1', 'alt']),
      },
      background1: {
        background1: entry.getIn(['data', 'background1']),
      }
    }}
  />
)

WorkPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WorkPagePreview
