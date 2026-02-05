import type { Player } from "@/app/types/player";

export const andrea: Player = {
  name: "Andrea",
  age: 112,
  height: 147,
  nationality: "Norway",
  deck_color: "Purple",
  reaction_speed: 320,
  card_touchdown_force: 0.1,
  FU_rate: 45,
  profile_picture: "/graphics/images/profiles/person_icon.png",
  flag_svg: "",
  active: true,
  retired: false
};

export const einar: Player = {
  name: "Einar",
  age: 23,
  height: 180,
  nationality: "Norway",
  deck_color: "Green",
  reaction_speed: 250,
  card_touchdown_force: 50000,
  FU_rate: 32,
  profile_picture: "/graphics/images/profiles/person_icon.png",
  flag_svg: "",
  active: true,
  retired: false
};

export const kaisla: Player = {
  name: "Kaisla",
  age: 23,
  height: 168,
  nationality: "Finland",
  deck_color: "Pink",
  reaction_speed: 300,
  card_touchdown_force: 10,
  FU_rate: 2,
  profile_picture: "/graphics/images/profiles/person_icon.png",
  flag_svg: "",
  active: true,
  retired: false
};

export const neal: Player = {
  name: "Neal",
  age: 21,
  height: 178,
  nationality: "Great Britain",
  deck_color: "Brown",
  reaction_speed: 300,
  card_touchdown_force: 5000,
  FU_rate: 36,
  profile_picture: "/graphics/images/profiles/person_icon.png",
  flag_svg: "",
  active: true,
  retired: false
};

export const shiori: Player = {
  name: "Shiori",
  age: 21,
  height: 161,
  nationality: "Japan",
  deck_color: "Red",
  reaction_speed: 220,
  card_touchdown_force: 300,
  FU_rate: 8,
  profile_picture: "/graphics/images/profiles/person_icon.png",
  flag_svg: "",
  active: true,
  retired: false
};

export const zhangjia: Player = {
  name: "Zhangjia",
  age: 20,
  height: 160,
  nationality: "China",
  deck_color: "Black",
  reaction_speed: 600,
  card_touchdown_force: 5,
  FU_rate: -102,
  profile_picture: "/graphics/images/profiles/person_icon.png",
  flag_svg: "",
  active: true,
  retired: false
};

export const players: Player[] = [
  andrea,
  einar,
  kaisla,
  neal,
  shiori,
  zhangjia,
];