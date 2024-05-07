import { CONTACT_URL } from "../utils/constants"
import Navbar from "./Navbar"
const ContactUs = () => {
  return (
      <div>
    <div className="fixed"><Navbar/></div>
    <div>
        <img 
        className="w-screen h-screen object-cover"
        src={CONTACT_URL} alt="about us"/>
    </div>
    </div>
  )
}
export default ContactUs