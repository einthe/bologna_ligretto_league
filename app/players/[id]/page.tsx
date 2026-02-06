import { notFound } from "next/navigation";
import { getPlayerById, players } from "@/app/lib/players";
import styles from "./page.module.css";


export function generateStaticParams() {
  return players.map((player) => ({ id: player.id }));
}


export default async function PlayerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const player = getPlayerById(id);

  if (!player) notFound();

  return (
    <div className={styles.main}>
      <div className={styles.infoColumn}>
        <h1>{player.name}</h1>
        <p>Age: {player.age}</p>
        <p>Nationality: {player.nationality}</p>
        <p>Reaction speed: {player.reaction_speed}</p>
      </div>
    </div>
  );
}
