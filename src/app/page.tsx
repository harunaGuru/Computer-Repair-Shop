import Link from "next/link";


export default function Home() {
  return (
    <div className="w-full bg-black bg-home-img bg-cover bg-center ">
      <main className="flex flex-col h-dvh justify-center text-center max-w-5xl mx-auto">
        <div className="w-4/5 bg-black/90 gap-6 p-12 rounded-xl text-white flex flex-col sm:max-w-96 sm:text-2xl mx-auto">
        <h1 className="text-3xl">Haroon&apos;s Computer Repair Shop</h1>
        <address>
          House no 211 <br />
          Dutse city, Abuja
        </address>
        <p>Open: 9am - 6pm</p>
        <Link href='tel: 09022132610' className="hover:underline">
          090-2213-2610
        </Link>
        </div>
      </main>
      </div>
  );
}
