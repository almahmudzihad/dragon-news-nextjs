import { redirect } from "next/dist/server/api-utils";


const defaultCatagory = "01";
export default async function Home() {
  redirect(`/category/${defaultCatagory}`);
  );
}
