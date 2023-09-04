import * as React from "react";
import Svg, { G, Path } from "react-native-svg"

const ExploreIcon = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 2000 2000"
      // {...props}
    >
      <G>
        <Path d="M1704 1728c-6,0 -11,-2 -16,-7l-215 -215c-22,-22 11,-55 33,-33l215 215c15,15 4,40 -17,40zm-891 -249c-171,0 -341,-65 -471,-195 -260,-259 -260,-682 0,-942 260,-261 682,-261 942,0 208,208 254,525 119,781l50 50c29,29 29,76 0,105l-27 27 42 41c31,-11 67,-5 92,20l268 267c34,35 34,91 0,125l-70 69c-35,35 -90,35 -125,1l-267 -267c-25,-25 -31,-62 -20,-93l-42 -41c-25,25 -42,48 -79,48 -19,0 -38,-7 -52,-22l-50 -50c-97,51 -204,76 -310,76zm566 -314c-54,86 -128,161 -214,214l41 41c10,11 28,11 38,0l176 -175c11,-11 11,-28 0,-39l-41 -41zm-566 -972c-166,0 -321,65 -438,182 -242,242 -242,635 0,876 207,208 526,237 765,89 337,-211 396,-681 111,-965 -117,-117 -273,-182 -438,-182zm0 1142c-288,0 -522,-234 -522,-522 0,-288 234,-521 522,-521 288,0 521,233 521,521 0,288 -233,522 -521,522zm0 -997c-262,0 -475,213 -475,475 0,262 212,475 475,475 262,0 475,-212 475,-475 0,-262 -213,-475 -475,-475zm658 1060l-72 71c-16,17 -16,42 0,58l267 268c16,15 43,15 59,0l69 -70c16,-16 16,-42 0,-58l-267 -268c-15,-15 -40,-16 -56,-1zm-134 -4l36 35 56 -56 -36 -35 -56 56z" />
      </G>

    </Svg>
  )
}
export default ExploreIcon;
