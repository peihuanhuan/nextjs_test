import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({ data }) {
  return (
      <>
        <div className={styles.container}>
          {/*{posts.hitokoto}*/}
        </div>
        <div className={styles.container}>
          {data.hitokoto}
        </div>
      </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://v1.hitokoto.cn/')
  const data = await res.json()

  console.log("getServerSideProps ", data)

  return {
    props: {
      data,
    },
  }
}


// export async function getStaticProps() {
//   // Call an external API endpoint to get posts
//   const res = await fetch('https://v1.hitokoto.cn/')
//   const posts = await res.json()
//
//   console.log("getStaticProps ", posts)
//
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }
