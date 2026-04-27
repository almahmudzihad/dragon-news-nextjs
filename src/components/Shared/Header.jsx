import logo from "@/assets/logo.png"
import Image from "next/image"
import { format } from "date-fns";
function Header() {
  return (
    <div className="text-center py-8 space-y-2">
        <Image src={logo} alt="logo" height={200} width={200} className="mx-auto"/>
        <p>Journalism Without Fear or Favour</p>
        <p>{format(new Date(), "EEEE, MMMM d, yyyy")}</p>
    </div>
  )
}

export default Header