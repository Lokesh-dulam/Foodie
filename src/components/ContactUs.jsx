import { CONTACT_URL, GIT_URL, LINKED_IN_URL, TWITTER_URL, } from "../utils/constants"
import Navbar from "./Navbar"

const ContactUs = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <a href="https://github.com/Lokesh-dulam/foodie" target="_blank">
          <img src={GIT_URL} className="absolute h-52 w-52 rounded-lg ml-[600px] mt-[235px]" alt="image"/>
        </a>
        <a href="https://www.linkedin.com/in/lokesh-dulam" target="_blank">
            <img src={LINKED_IN_URL} className="absolute h-52 w-52 rounded-lg ml-[170px] mt-[285px] p-4" alt="image"/>
        </a>
        <a href="https://x.com/Loki_162" target="_blank">
          <img src={TWITTER_URL} className="absolute h-52 w-52 rounded-lg ml-[1000px] mt-[260px] p-4" alt="image"/>
        </a>
          <img src={CONTACT_URL} className="h-svh w-full object-cover" alt="bg_contact"/>
      </div>
    </div>
  )
}

export default ContactUs