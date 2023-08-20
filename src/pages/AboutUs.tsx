import { AboutUsIntro ,Counters, OurValue ,CommentSec, Layout  } from '../components/index'

const AboutUs = () => {
  return (
    <Layout>
      <AboutUsIntro />
      <Counters/>
      <OurValue/>
      <CommentSec/>
    </Layout>
  )
}

export { AboutUs }