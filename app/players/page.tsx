import Image from "next/image";
import Link from "next/link";
import styles from "@/app/page.module.css";
import { players } from "@/app/lib/players";
import type { Player } from "@/app/types/player";
import "./player.css";

function PlayerAvatar({ player }: { player: Player }) {
  if (!player.active || player.retired) {
    return null;
  }
  
  return (
    <div className="player">
      <Link href={`/players/${player.id}`}>
        <div
          className="avatar"
          style={{ ["--avatar-color" as any]: player.deck_color }}
        >
          <Image
            src={player.profile_picture}
            alt={player.name}
            width={96}
            height={96}
          />
        </div>
      </Link>

      <div className="playerName">{player.name}</div>
    </div>
  );
}


export default function Players() {
  return (
    <main>
      <div className={styles.main}>
        {/* <Background /> */}
        <div className="playersGrid">
          {players.map((p) => (
            <PlayerAvatar key={p.name} player={p} />
          ))}
        </div>
      </div>
    </main>
  );
}
