import type { Player } from "@/app/types/player";

const colors: { [key: string]: string} = {
    // red: "#b94f4f",
    // red: "#b72424",
    red: "#b73737",
    blue: "#144068",
    green: "#86BD51",
    pink: "#F851B0",
    brown: "#79482F",
    black: "#161616",
    purple: "#52389C",
    light_red: "#bf909f",
    light_blue: "#7bb8dd",
    gray: "#53595f",
    orange: "#c57775",
    yellow: "#ddb515"
}

export const andrea: Player = {
  id: "andrea",
  name: "Andrea",
  age: 112,
  height: 147,
  nationality: "Norway",
  deck_color: colors.purple,
  reaction_speed: 320,
  card_touchdown_force: 0.1,
  FU_rate: 45,
  profile_picture: "/graphics/images/profiles/person_icon.png",
  flag_svg: "/graphics/svgs/flags/Flag_of_Norway.svg",
  active: true,
  retired: false
};

export const einar: Player = {
  id: "einar",
  name: "Einar",
  age: 23,
  height: 180,
  nationality: "Norway",
  deck_color: colors.green,
  reaction_speed: 250,
  card_touchdown_force: 50000,
  FU_rate: 32,
  profile_picture: "/graphics/images/profiles/person_icon.png",
  flag_svg: "/graphics/svgs/flags/Flag_of_Norway.svg",
  active: true,
  retired: false
};

export const kaisla: Player = {
  id: "kaisla",
  name: "Kaisla",
  age: 23,
  height: 168,
  nationality: "Finland",
  deck_color: colors.pink,
  reaction_speed: 300,
  card_touchdown_force: 10,
  FU_rate: 2,
  profile_picture: "/graphics/images/profiles/person_icon.png",
  flag_svg: "/graphics/svgs/flags/Flag_of_Finland.svg",
  active: true,
  retired: false
};

export const marieke: Player = {
  id: "marieke",
  name: "Marieke",
  age: 23,
  height: 177,
  nationality: "Netherland",
  deck_color: colors.pink,
  reaction_speed: 200,
  card_touchdown_force: 3000,
  FU_rate: 40,
  profile_picture: "/graphics/images/profiles/person_icon.png",
  flag_svg: "/graphics/svgs/flags/Flag_of_the_Netherlands.svg",
  active: true,
  retired: true
};

export const neal: Player = {
  id: "neal",
  name: "Neal",
  age: 21,
  height: 178,
  nationality: "Great Britain",
//   deck_color: "#2c1810",
//   deck_color: "#422812",
  deck_color: colors.brown,
  reaction_speed: 300,
  card_touchdown_force: 5000,
  FU_rate: 36,
  profile_picture: "/graphics/images/profiles/person_icon.png",
  flag_svg: "/graphics/svgs/flags/Flag_of_the_United_Kingdom.svg",
  active: true,
  retired: false
};

export const nicolo: Player = {
  id: "nicolo",
  name: "Nicolo",
  age: 21,
  height: 175,
  nationality: "Italy",
  deck_color: colors.black,
  reaction_speed: 400,
  card_touchdown_force: 4000,
  FU_rate: 10,
  profile_picture: "/graphics/images/profiles/person_icon.png",
  flag_svg: "/graphics/svgs/flags/Flag_of_Italy.svg",
  active: true,
  retired: true
};

export const shiori: Player = {
  id: "shiori",
  name: "Shiori",
  age: 21,
  height: 161,
  nationality: "Japan",
  deck_color: colors.red,
  reaction_speed: 220,
  card_touchdown_force: 300,
  FU_rate: 8,
  profile_picture: "/graphics/images/profiles/person_icon.png",
  flag_svg: "/graphics/svgs/flags/Flag_of_Japan.svg",
  active: true,
  retired: false
};

export const zhangjia: Player = {
  id: "zhangjia",
  name: "Zhangjia",
  age: 20,
  height: 160,
  nationality: "China",
  deck_color: colors.black,
  reaction_speed: 600,
  card_touchdown_force: 5,
  FU_rate: -102,
  profile_picture: "/graphics/images/profiles/person_icon.png",
  flag_svg: "/graphics/svgs/flags/Flag_of_the_PRC.svg",
  active: true,
  retired: false
};

export const players: Player[] = [
  andrea,
  einar,
  kaisla,
  marieke,
  neal,
  nicolo,
  shiori,
  zhangjia,
];

export function getPlayerById(id?: string) {
  if (!id) return undefined;
  const normalized = id.trim().toLowerCase();
  return players.find(
    (p) =>
      p.id.toLowerCase() === normalized ||
      p.name.toLowerCase() === normalized
  );
}
