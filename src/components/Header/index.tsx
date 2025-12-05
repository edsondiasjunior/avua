import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="flex items-center justify-center px-4 py-5">
      <div className=" w-full flex justify-between items-center ">
        <Link href="/" >
          <Image src={"/avua_logo.svg"} alt="Avuá Agency" height={168} width={116} />
        </Link>
        <nav>
            <span>MENU</span>
        </nav>
      </div>
    </header>
  );
}
