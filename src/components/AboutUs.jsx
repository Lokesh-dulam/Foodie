import { ABOUT_URL} from "../utils/constants"
import Navbar from "./Navbar"
const AboutUs = () => {
  return (
    <div>
    <div className="fixed"><Navbar/></div>
    <div>
        <img 
        className="w-screen h-screen"
        src={ABOUT_URL} alt="about us"/>
    </div>
    </div>
  )
}

export default AboutUs
