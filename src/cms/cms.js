import CMS from 'netlify-cms'

import WorkPagePreview from './preview-templates/WorkPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
// import { ProjectControl, ProjectPreview } from "./projectWidget";

CMS.registerPreviewTemplate('work', WorkPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('index', IndexPagePreview)

// CMS.registerWidget(
//   "projectWidget", // Widget name
//   ProjectControl, //Editor component
//   ProjectPreview // Preview component (optional)
// );
