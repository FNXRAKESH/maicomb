import CommonCause from '@/components/commonCause/page'
import AreaOfFocus from '../components/areaOfFocus/page'
import Concept from '../components/concept/page'
import Intro from './intro/page'
import ItchingProblem from './itchingProblem/page'
import Solution from './solution/page'

export default function Home() {
  return (
    <main>
      <Intro />
      <CommonCause />
      <Concept />
      <Solution />
      <ItchingProblem />
      {/* <Mission /> */}
      <AreaOfFocus />
      {/* <Treatment /> */}
      <div id="maiVideo" className="container pt-5">
        <video
          autoPlay
          muted
          loop
          style={{ width: "100%", height: "100%" }}
          controls
        >
          <source src={"/landingbottom.mp4"} type="video/mp4"></source>
        </video>
      </div>
    </main>
  );
}
