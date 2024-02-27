import Navbar from "@/components/Navbar";
import TopicList from "@/components/TopicLists";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full flex flex-col">
      <Navbar />
      <div className="flex-grow py-10 flex flex-col justify-center items-center">
        <TopicList />
        <TopicList />
      </div>
    </main>
  );
}
