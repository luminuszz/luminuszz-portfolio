import fs from 'fs';
import matter from 'gray-matter';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import high from 'remark-highlight.js';
import html from 'remark-html';
import markdown from 'remark-parse';
import unified from 'unified';

import '../../styles/blog/blog.scss';

type Post = {
  slug: string;
  title: string;
  date: string;
  content: string;
};

interface Props {
  post: Post;
}

const Post: NextPage<Props> = ({ post }) => {
  // eslint-disable-next-line react/no-danger
  return (
    <main className="hero section-post">
      <div className="hero-body">
        <div className="container">
          <div className="post-content">
            <h2 className="title has-text-centered is-size-3  is-family-primary">
              {post.title}
            </h2>
            <div className="content has-text-justified">
              <section dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const path = `${process.cwd()}/posts`;

  const files = fs.readdirSync(path, 'utf-8');

  const markdownFileNames = files
    .filter(item => item.endsWith('.md'))
    .map(item => item.replace('md', '').replace('.', ''));

  const staticPaths = markdownFileNames.map(slug => ({
    params: { slug },
  }));

  return {
    paths: staticPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  console.log(slug);
  const path = `${process.cwd()}/posts/${slug}.md`;

  const rawContent = fs.readFileSync(path, { encoding: 'utf8' });

  const { data, content } = matter(rawContent);

  const result = await unified()
    .use(markdown)
    .use(high)
    .use(html)
    .process(content);

  return {
    props: {
      post: {
        ...data,
        content: result.toString(),
      },
    },
  };
};

export default Post;
