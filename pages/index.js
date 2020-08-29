import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsdata }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd} >
        <p>Hi! I am a developer , a data science enthusiast and a guitarist</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`} >
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list} > 
          {allPostsdata.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id} >
              <Link href="/posts/[id]" as={`posts/${id}`}>
              <a>
              {title}
              </a>
              </Link>
              <br />
              <small className={utilStyles.lightText} >
                <Date dateString={date} />
              </small> 
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsdata = getSortedPostsData()
  return {
    props: {
      allPostsdata
    }
  }
}