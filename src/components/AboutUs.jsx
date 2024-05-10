import { ABOUT_URL, GIT_URL} from "../utils/constants"
import Navbar from "./Navbar"
const AboutUs = () => {
  return (
    <div>
    <div className="fixed"><Navbar/></div>
    <div>
        <img 
        className="w-screen h-screen"
        src={ABOUT_URL} alt="about us"/>
        <img 
        className="absolute w-24 h-16"
        src={GIT_URL} alt="gitimage"/>
    </div>
    </div>
  )
}

export default AboutUs
