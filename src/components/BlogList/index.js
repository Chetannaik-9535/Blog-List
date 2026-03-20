// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = ({blogsList}) => (
  <div className="BlogList-container">
    {blogsList.map(blog => (
      <BlogItem key={blog.id} blogItemDetails={blog} />
    ))}
  </div>
)

export default BlogList
