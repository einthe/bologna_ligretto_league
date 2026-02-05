import Image from "next/image";
import styles from "@/app/page.module.css";
import Background from "@/app/components/backgrounds/background3";
import { players } from "@/app/lib/players";
import type { Player } from "@/app/types/player";
import "./player.css";

function PlayerAvatar({ player }: { player: Player }) {
  return (
    <div className="player">
      <div
        className="avatar"
        style={{ ["--avatar-color" as any]: player.deck_color }}
        title={player.name}
      >
        <Image
          src={player.profile_picture}
          alt={player.name}
          width={96}
          height={96}
        />
      </div>

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
