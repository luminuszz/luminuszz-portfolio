/* eslint-disable jsx-a11y/anchor-is-valid */
import fs from 'fs';
import matter from 'gray-matter';
import { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { uuid } from 'uuidv4';

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
    <div>
      {blogs.map(blog => (
        <Link href={`/blog/${blog.slug}`}>
          <a key={blog.id}>
            <li>{blog.title}</li>
          </a>
        </Link>
      ))}
    </div>
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
