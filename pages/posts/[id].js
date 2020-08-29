import Layout from '../../components/layout'
import { getAllPostsIds, getPostsData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return (
  <Layout>
    <Head>
      {postData.title}
    </Head>
    <article>
    <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />  
    </article>
  </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostsIds();
  return {
    paths, 
    fallback: false
  }
}
export async function getStaticProps({ params }) {
  const postData = await getPostsData(params.id)
  return {
    props: {
      postData
    }
  }
}