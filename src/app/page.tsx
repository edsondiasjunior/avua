import Image from "next/image";

export default function Home() {
  return (
    <section className="h-screen w-full flex items-center justify-center">
      <Image src={"/avua_logo.svg"} alt="Avuá Agency" height={168} width={116} />
    </section>
  );
}
