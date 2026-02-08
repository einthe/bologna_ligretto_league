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
    <div
      className={styles.main}
      style={{ ["--player-deck-color" as any]: player.deck_color }}
    >
      <img
        src={player.flag_svg}
        alt={`${player.nationality} flag`}
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 1,
          pointerEvents: "none",
        }}
      />
      <div className={styles.infoColumn} style={{ position: "relative", zIndex: 1 }}>
        <h1>{player.name}</h1>
        <p>Age: {player.age}</p>
        <p>Nationality: {player.nationality}</p>
        <p>Reaction speed: {player.reaction_speed}</p>
      </div>
    </div>
  );
}
