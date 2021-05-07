/* eslint-disable jsx-a11y/anchor-is-valid */
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ops this page not found</title>
      </Head>
      <main className="hero main-404">
        <div className="hero-body">
          <div className="container">
            <div className="content-404">
              <div className="title">
                <h2>Ops...</h2>
                <h3 className="subtitle">Parece que eu me perdi....</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Custom404;
