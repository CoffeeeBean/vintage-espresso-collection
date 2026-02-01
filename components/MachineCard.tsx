import Image from "next/image";
import Link from "next/link";
import type { Machine } from "@/types";

interface MachineCardProps {
  machine: Machine;
  isItalian: boolean;
}

export default function MachineCard({ machine, isItalian }: MachineCardProps) {
  return (
    <div className="collection-machine-card">
      <div className="collection-machine-image">
        <Image
          src={machine.image}
          alt={isItalian ? machine.title_it : machine.title_en}
          width={400}
          height={500}
          unoptimized
        />
      </div>
      <div className="collection-machine-info">
        <h3>{isItalian ? machine.title_it : machine.title_en}</h3>
        <p>{isItalian ? machine.description_it : machine.description_en}</p>
        <Link href={`/machines/${machine.slug}`} className="btn btn-primary">
          {isItalian ? "Scopri di Più" : "Learn More"}
        </Link>
      </div>
    </div>
  );
}
