import Image from "next/image";
import Link from "next/link";
import styles from "@/app/page.module.css";
import { players } from "@/app/lib/players";
import type { Player } from "@/app/types/player";
import "./hall_of_fame.css";
import Background from "../components/backgrounds/hall_of_fame";
import { GoldFrame } from "@/app/graphics/svgs/goldframe_dynamic";

function PlayerAvatar({ player }: { player: Player }) {
  if (!player.active || !player.retired) {
    return null;
  }
  
  return (
    <div className="player">
      <Link href={`/players/${player.id}`}>
        <GoldFrame width={220} height={260} fill_color={player.deck_color}>
          <div
            // className="avatar"
            // style={{ ["--avatar-color" as any]: player.deck_color }}
            className="goldframe"
          >
            <Image
              src={player.profile_picture}
              alt={player.name}
              width={128}
              height={128}
            />
          </div>
        </GoldFrame>
      </Link>

      <div className="playerName">{player.name}</div>
    </div>
  );
}


export default function Players() {
  return (
    <main>
      <div className={styles.main}>
        <Background />
        <div className={styles.content}>
          <div className="playersGrid">
            {players.map((p) => (
              <PlayerAvatar key={p.name} player={p} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
