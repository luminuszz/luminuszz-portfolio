/* eslint-disable jsx-a11y/anchor-is-valid */
import fs from 'fs';
import matter from 'gray-matter';
import { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { uuid } from 'uuidv4';

import '../../styles/blog/blog.scss';

type Blog = {
  id: string;
  slug: string;
  title: string;
  date: string;
};

interface Props {
  blogs: Blog[];
}
const Blog: NextPage<Props> = ({ blogs }) => {
  return (
    <main className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="post-list">
            <div className="title">
              <h2 className="is-size-2 has-text-white	">Posts</h2>
            </div>

            {blogs.map(blog => (
              <Link href={`/blog/${blog.slug}`}>
                <div className="link-content" key={blog.id}>
                  <a className="is-size-3" href="">
                    {blog.title}
                  </a>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(`${process.cwd()}/posts`, 'utf-8');
  const blogs = files
    .filter(item => item.endsWith('.md'))
    .map(blog => {
      const path = `${process.cwd()}/posts/${blog}`;
      const rawContent = fs.readFileSync(path, {
        encoding: 'utf-8',
      });
      const { data } = matter(rawContent);

      return { ...data, id: uuid() };
    });

  return {
    props: { blogs },
  };
};
export default Blog;

/*

*/
