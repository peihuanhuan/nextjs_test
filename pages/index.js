import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      {posts.hitokoto}
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://v1.hitokoto.cn/')
  const posts = await res.json()

  console.log(",,,,,,", posts)

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}
