import { AboutUsIntro ,Counters, OurValue ,CommentSec, Layout, SwiperCard } from '../components/index'

const AboutUs = () => {
  return (
    <Layout>
      <AboutUsIntro />
      <Counters/>
      <OurValue/>
      {/* <CommentSec/> */}
      <SwiperCard/>
    </Layout>
  )
}

export { AboutUs }