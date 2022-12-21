
import { useRouter } from 'next/router'

export default function Home({ posts }) {
  const router = useRouter()
  const { pp } = router.query
  return (
    <div>
      PP  { pp }
    </div>
  )
}


// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const res = await fetch('https://v1.hitokoto.cn/')
  const posts = await res.json()

  console.log("getStaticPaths 执行", posts)

  return {
    paths: [{ params: { pp: '1' } }, { params: { pp: '2' } }],
    fallback: false, // can also be true or 'blocking'
  }
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
