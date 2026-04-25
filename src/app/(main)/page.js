import { redirect } from "next/navigation";

const defaultCatagory = '01';
const HomePage = () => {
  redirect(`/category/${defaultCatagory}`)
}

export default HomePage