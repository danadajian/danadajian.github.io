import './Blog.css';
import * as React from 'react';
import { Links } from '../Links/Links';
import { Navbar } from '../Navbar/Navbar';
import { StringParam, useQueryParams } from 'use-query-params';
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom';
import Test from './Test.md';
import Test2 from './Test2.md';
import { getTitleFromMarkdown } from '../../utils/getMarkdownTitle';
import { kebabCase } from 'lodash';

const BLOGS = [
  Test,
  Test2
];

export const Blog = () => {
  const [{ title: titleParam }] = useQueryParams({ title: StringParam });
  const [currentBlog, setCurrentBlog] = React.useState<string>();
  const [blogs, setBlogs] = React.useState<string[]>();

  React.useEffect(() => {
    Promise.all(BLOGS.map(markdown => fetch(markdown).then(response => response.text())))
      .then(blogs => setBlogs(blogs))
  }, []);

  return (
    <>
      <div className="Header">
        <Navbar initialState={'Blog'} />
      </div>
      <div className="Container">
        {titleParam ? <BlogPost blog={currentBlog}/> : <BlogLinks blogs={blogs} setCurrentBlog={setCurrentBlog}/>}
      </div>
      <Links />
    </>
  );
};

const BlogPost = ({ blog }: { blog?: string }) => (
  <>
    <Link to="/blog">Back to Blogs</Link>
    {blog && <ReactMarkdown children={blog}/>}
  </>
)

const BlogLinks = ({blogs, setCurrentBlog}: { blogs?: string[]; setCurrentBlog: (blog: string) => void; }) => (
  <div className="Blog">
    {blogs?.map(blog => {
      const title = getTitleFromMarkdown(blog);
      return (
        <section>
          {<Link to={`/blog?title=${kebabCase(title)}`} onClick={() => setCurrentBlog(blog)}>{title}</Link>}
        </section>
      )
    })}
  </div>
);
