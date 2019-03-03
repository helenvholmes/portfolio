import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, widgetFor }) => {
  return (
    <IndexPageTemplate
      title={entry.getIn(['data', 'title'])}
      intro={widgetFor('intro')}
    />
  )
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default IndexPagePreview
