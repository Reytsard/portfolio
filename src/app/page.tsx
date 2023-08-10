import Image from "next/image";
import Pfp from "../images/1.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Ronald De Mesa</h1>
      <Image
        alt="Ronald De Mesa Profile Picture"
        src={Pfp}
        height={72}
        width={72}
      />
    </main>
  );
}
