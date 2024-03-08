import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { faCircleCheck,faBell } from "@fortawesome/free-regular-svg-icons";
import { faVideo,faNewspaper} from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  const  link = [
    {
      name: "Summary FrontEnd",
      url: "/summary",
      icon: faCircleCheck,
      color: "#FB6F92"
    },
    {
      name: "Notification FrontEnd",
      url: "/",

      icon: faBell

    },
    {
      name: "Netflix frontEnd",
      url: "/netflix",
      icon: faVideo


    },
    {
      name: "Proximamente",
      url: "/reto4",
      icon: faNewspaper
    },
  ]
  return (
    <main className="bg-[#181B1F] flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" border rounded-3xl h-[800px] w-[400px] bg-gradient-to-t from-[#5f5f70] to-[#3a3a3a]">
        <h1 className="text-white text-3xl font-bold text-center py-5">Retos FrontEnd</h1>
        <div className="flex flex-col gap-4 items-center">
          {
            link.map((item, index) => {
              return (
                <Link href={item.url} key={index} className={`bg-gray-200 rounded-xl w-[250px] flex justify-center `}>
                  <div className="flex">
                    <FontAwesomeIcon icon={item.icon} className="text-[#000] w-10 py-4 px-2" />
                    <p className="  text-gray-600 py-4 w-[180px]">{item.name}</p>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </main>
  );
}
