import { remToPixels } from "../scripts/unitConvertions";

interface image {
  src: string;
  alt: string;
  link?: string;
}

// ! change the src to the scaled down javascript version

export const illust: image[] = [
  {
    src: "https://media.discordapp.net/attachments/857200469695922216/1076544212167835798/raimon_skirt_rev.png",
    alt: "Raimon Matataki from Hoshikuzu Telepath",
  },
  {
    src: "https://media.discordapp.net/attachments/1027882514548789279/1078613899521310760/FlzUZgnaAAE8g0o.png",
    alt: "Kita Ikuto with Kasumi Toyama's costume and guitar",
  },
  {
    src: "https://media.discordapp.net/attachments/1027882514548789279/1078614467249713232/Fi42aQ_aYAAGq9Z.png",
    alt: "Yua and Rei with the BanG Dream! MocaRan Afterglow costume",
    link: "https://twitter.com/vlusky_husky/status/1598274944651390976?s=20",
  },
  {
    src: "https://media.discordapp.net/attachments/857200469695922216/1076544212167835798/raimon_skirt_rev.png",
    alt: "Raimon Matataki from Hoshikuzu Telepath",
  },
  {
    src: "https://media.discordapp.net/attachments/1027882514548789279/1078613899521310760/FlzUZgnaAAE8g0o.png",
    alt: "Kita Ikuto with Kasumi Toyama's costume and guitar",
  },
  {
    src: "https://media.discordapp.net/attachments/1027882514548789279/1078614467249713232/Fi42aQ_aYAAGq9Z.png",
    alt: "Yua and Rei with the BanG Dream! MocaRan Afterglow costume",
    link: "https://twitter.com/vlusky_husky/status/1598274944651390976?s=20",
  },
  {
    src: "https://media.discordapp.net/attachments/857200469695922216/1076544212167835798/raimon_skirt_rev.png",
    alt: "Raimon Matataki from Hoshikuzu Telepath",
  },
  {
    src: "https://media.discordapp.net/attachments/1027882514548789279/1078613899521310760/FlzUZgnaAAE8g0o.png",
    alt: "Kita Ikuto with Kasumi Toyama's costume and guitar",
  },
  {
    src: "https://media.discordapp.net/attachments/1027882514548789279/1078614467249713232/Fi42aQ_aYAAGq9Z.png",
    alt: "Yua and Rei with the BanG Dream! MocaRan Afterglow costume",
    link: "https://twitter.com/vlusky_husky/status/1598274944651390976?s=20",
  },
  {
    src: "https://media.discordapp.net/attachments/964733786417934416/1077959110374465556/purin_trinity.png",
    alt: "Miku (Purin) Suride using a uniform from Blue Archive",
  },
  {
    src: "https://media.discordapp.net/attachments/857200469695922216/1017785714932449321/unknown.png",
    alt: "test",
  },
  {
    src: "https://media.discordapp.net/attachments/857200469695922216/1004712435128746134/tomo_chin.png",
    alt: "test2",
  },
  {
    src: "https://media.discordapp.net/attachments/857200469695922216/1006085637335695432/IMG_20220808_131901.jpg",
    alt: "aaa",
  },
]

export const design: image[] = [
  {
    src: "https://media.discordapp.net/attachments/1027882514548789279/1027882863984652289/pastel-dark.png",
    alt: "Pastel Dark",
  },
  {
    src: "https://media.discordapp.net/attachments/1027882514548789279/1027882865020645396/ruins.png",
    alt: "Ruins",
  },
  {
    src: "https://media.discordapp.net/attachments/1027882514548789279/1027882863984652289/pastel-dark.png",
    alt: "Pastel Dark",
  },
  {
    src: "https://media.discordapp.net/attachments/1027882514548789279/1027882865020645396/ruins.png",
    alt: "Ruins",
  },
  {
    src: "https://media.discordapp.net/attachments/1027882514548789279/1027882863984652289/pastel-dark.png",
    alt: "Pastel Dark",
  },
  {
    src: "https://media.discordapp.net/attachments/1027882514548789279/1027882865020645396/ruins.png",
    alt: "Ruins",
  },
  {
    src: "https://media.discordapp.net/attachments/1027882514548789279/1027882863984652289/pastel-dark.png",
    alt: "Pastel Dark",
  },
  {
    src: "https://media.discordapp.net/attachments/1027882514548789279/1027882865020645396/ruins.png",
    alt: "Ruins",
  },
]

// youtubeID
// https://www.youtube.com/watch?v=_##########

export const motion = [
  "_llL0D8Jbr4",
  "kmiwqzMF6F8",
  "XUYi3lpncOg",
  "L_iHuC7Wvo8",
  "HXeW1cCc_mE",
  "v5QcY46pDkU", // False Noise - Collapse Theme Motion Graphics test
]

export const video = [
  "kOr9n-Y-WW0",
  "UQXPOKUt7zQ",
  "F2pAsfzGbk8",
  "e73JIsjQffI",
  "TADtZYJVc4k",
  "wqoURmKBVMI",
  "C6KhZTJDZcM",
]

// soundcloud API song/playlist ID
// api.soundcloud.com/[tracks|playlists]/##########
// (it's hidden somewhere inside the "share embed")
/*
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1246708291&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/vlusky-husky" title="Vlusky" target="_blank" style="color: #cccccc; text-decoration: none;">Vlusky</a> · <a href="https://soundcloud.com/vlusky-husky/loquacious" title="Loquacious" target="_blank" style="color: #cccccc; text-decoration: none;">Loquacious</a></div>
*/
export const songs = [
  "1398023656", // radiopassive
  "1246708291", // loquacious
  "1148013934", // isshokenmei
];
