import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main>
      <Link href="/users">Users</Link>
      <h1 className="font-bold text-2xl pb-5">Home page!</h1>
      <ProductCard/>
    </main>
  );
}
