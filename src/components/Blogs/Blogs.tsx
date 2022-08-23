import './Blogs.css';
import * as React from 'react';
import { Links } from '../Links/Links';
import { Navbar } from '../Navbar/Navbar';
import ReactMarkdown from 'react-markdown';
import { Link, useSearchParams } from 'react-router-dom';
import { getTitleFromMarkdown } from '../../utils/getMarkdownTitle';
import { kebabCase } from 'lodash';
import Blog1 from './Code-Coverage.md';

const BLOGS = [Blog1];

export const Blogs = () => {
  const [searchParams] = useSearchParams();
  const titleParam = searchParams.get('title');
  const [currentBlog, setCurrentBlog] = React.useState<string>();
  const [blogs, setBlogs] = React.useState<string[]>();

  React.useEffect(() => {
    Promise.all(BLOGS.map(markdown => fetch(markdown).then(response => response.text()))).then(blogs => setBlogs(blogs));
  }, []);

  const blogToRender =
    currentBlog ??
    blogs?.map(blog => ({ title: kebabCase(getTitleFromMarkdown(blog)), blog })).find(({ title }) => title === titleParam)?.blog;

  return (
    <>
      <div className="Header">
        <Navbar initialState={'Blogs'} />
      </div>
      <div className="Container">
        {titleParam ? <BlogPost blog={blogToRender} /> : <BlogLinks blogs={blogs} setCurrentBlog={setCurrentBlog} />}
      </div>
      <Links />
    </>
  );
};

const BlogPost = ({ blog }: { blog?: string }) => {
  if (!blog) {
    return null;
  }

  return (
    <>
      <ReactMarkdown children={blog} className="Blog" />
    </>
  );
};

const BlogLinks = ({ blogs, setCurrentBlog }: { blogs?: string[]; setCurrentBlog: (blog: string) => void }) => (
  <>
    {blogs?.map(blog => {
      const title = getTitleFromMarkdown(blog);
      return (
        <h2>
          <Link to={`/blogs?title=${kebabCase(title)}`} onClick={() => setCurrentBlog(blog)}>
            {title}
          </Link>
        </h2>
      );
    })}
  </>
);
