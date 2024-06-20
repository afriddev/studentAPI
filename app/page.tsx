'use client'
import Link from "next/link";
import { FaGithubAlt } from "react-icons/fa6";

export default function Home() {
  return (
    <main>
      <section>
        <div className="flex flex-col  gap-10 w-[100vw] h-[100vh] justify-center items-center">
          <label className="text-sm max-w-[50vw] text-center">StudentsAPI will helps you in your developement for testing and other purposes</label>
        <div className="flex items-center gap-2">
        <FaGithubAlt />
        <Link href={"https://github.com/afriddev/studentAPI/blob/main/README.md"}  className="text-xs border-b border-slate-800">Read docs</Link>
        </div>
        
        </div>



      </section>
    </main>
  )
}
