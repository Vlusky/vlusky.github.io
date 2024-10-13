// this was supposed to be for the discord images thing where you can put the
// resolution in the link... yea that's not gonna be helpful now.
// import { remToPixels } from "../scripts/unitConvertions";

interface image {
  src: string;
  alt: string;
  link?: string;
}

interface youtube {
  id: string;
  title: string;
}

export const illust: image[] = [
  {
    src: "https://s6.imgcdn.dev/HMs9o.md.png",
    alt: "Ryo Yamada with the Make Noise Shared System synthesizer.",
    link: "https://x.com/vlusky_husky/status/1845126516897955949"
  },
  {
    src: "https://s6.imgcdn.dev/Fneol.md.png",
    alt: "Miyamai Moca laying on a bed",
    link: "https://x.com/vlusky_husky/status/1842963625335791894"
  },
  {
    src: "https://s6.imgcdn.dev/LCYo0.md.png",
    alt: "Mira shows Tomori their rock collection",
    link: "https://x.com/vlusky_husky/status/1812150296724091172",
  },
  {
    src: "https://s6.imgcdn.dev/dg7Iy.md.png",
    alt: "Kano Yamanouchi in the Oshi no Ko opening",
    link: "https://x.com/vlusky_husky/status/1790697674897018985"
  },
  {
    src: "https://s6.imgcdn.dev/WAN48.md.png",
    alt: "Shizuru and Shimeji crossover",
    link: "https://twitter.com/vlusky_husky/status/1780264145545511287"
  },
  {
    src: "https://s6.imgcdn.dev/WTgT2.md.png",
    alt: "Inabakumori's Osage-chan in moody lighting",
    link: "https://twitter.com/vlusky_husky/status/1774251347547947432"
  },
  {
    src: "https://s6.imgcdn.dev/tEB5T.md.png",
    alt: "Kayo Fujikawa playing with the Arturia Polybrute analog synth",
    link: "https://twitter.com/vlusky_husky/status/1763953314407039321"
  },
  {
    src: "https://s6.imgcdn.dev/teW7O.md.png",
    alt: "Ryo Yamada wearing the Haneoka uniform",
    link: "https://twitter.com/vlusky_husky/status/1761267140940964090"
  },
  {
    src: "https://s6.imgcdn.dev/fyyXd.md.png",
    alt: "Shimeji and Majime in the Weather Station album art",
    link: "https://twitter.com/vlusky_husky/status/1743963244304490503"
  },
  {
    src: "https://s6.imgcdn.dev/VXSWe.md.png",
    alt: "Karin Natsuki the SynthV/CeVIO voice",
    link: "https://twitter.com/vlusky_husky/status/1736064640042586233",
  },
  {
    src: "https://s6.imgcdn.dev/VxtqL.md.png",
    alt: "Konoha Akisato in 16 bit Amiga style",
    link: "https://twitter.com/vlusky_husky/status/1733117472218493422"
  },
  {
    src: "https://s6.imgcdn.dev/VxVkB.md.png",
    alt: "Mikan Hinatsuki from Machikado Mazoku",
    link: "https://twitter.com/vlusky_husky/status/1732419241490739494"
  },
  {
    src: "https://s6.imgcdn.dev/Vx98q.md.png",
    alt: "Sasaki Tsuguko in anime style",
    link: "https://twitter.com/vlusky_husky/status/1728452226904113297"
  },
  {
    src: "https://s6.imgcdn.dev/Rowht.md.png",
    alt: "PA-san from Bocchi the Rock in leather jackets",
    link: "https://twitter.com/vlusky_husky/status/1728092756743188990"
  },
  {
    src: "https://s6.imgcdn.dev/Ro6PT.md.png",
    alt: "Umika Lagtrain",
    link: "https://twitter.com/vlusky_husky/status/1727504361377644666"
  },
  {
    src: "https://s6.imgcdn.dev/Rohdw.md.png",
    alt: "Umika and Ao switched uniforms",
    link: "https://twitter.com/vlusky_husky/status/1726259593075122463"
  },
  {
    src: "https://s6.imgcdn.dev/RoDuL.md.png",
    alt: "Umika plush",
    link: "https://twitter.com/umika_daily/status/1724420159316574409"
  },
  {
    src: "https://s6.imgcdn.dev/ZJEZy.md.png",
    alt: "Kazusa Kyouyama loose lineless artstyle",
    link: "https://twitter.com/vlusky_husky/status/1713774321116848607"
  },
  {
    src: "https://s6.imgcdn.dev/ZJLSL.md.png",
    alt: "Nadeshiko with a jacket and shirt uniform",
    link: "https://twitter.com/vlusky_husky/status/1710309600249966760"
  },
  {
    src: "https://s6.imgcdn.dev/ZJ3iu.md.png",
    alt: "Rin Shima with a blazer and shirt uniform",
    link: "https://twitter.com/vlusky_husky/status/1710309522873483424"
  },
  {
    src: "https://s6.imgcdn.dev/ZJbma.md.png",
    alt: "Rin Shima and Aoi Yukimura sitting beside a campfire",
    link: "https://twitter.com/vlusky_husky/status/1708508240970133752"
  },
  {
    src: "https://s6.imgcdn.dev/ZJmuw.md.png",
    alt: "Hifumi Takimoto wearing a uniform from Asteroid in Love",
    link: "https://twitter.com/vlusky_husky/status/1706332401667117350"
  },
  {
    src: "https://s6.imgcdn.dev/ZJqat.md.png",
    alt: "Honoka Kurosawa from Yama no Susume",
    link: "https://twitter.com/vlusky_husky/status/1701979899337343121"
  },
  {
    src: "https://s6.imgcdn.dev/ZJgK9.md.png",
    alt: "Bocchi in a more Rock and Roll kind outfit",
    link: "https://twitter.com/vlusky_husky/status/1696910929001337180"
  },
  {
    src: "https://s6.imgcdn.dev/ZJTGH.md.png",
    alt: "Raana Kaname from MyGO!!!!! as a student of Haneoka",
    link: "https://twitter.com/vlusky_husky/status/1695081974875213992"
  },
  {
    src: "https://s6.imgcdn.dev/ZJPQi.md.png",
    alt: "Only a spoonful with Nijika and Ryo",
    link: "https://twitter.com/vlusky_husky/status/1692575226616570212"
  },
  {
    src: "https://s6.imgcdn.dev/ZJ5g2.md.png",
    alt: "Raana Kaname lineless test",
    link: "https://twitter.com/vlusky_husky/status/1687793264190164992"
  },
  {
    src: "https://s6.imgcdn.dev/ZJyA8.md.png",
    alt: "Shiho Honami from Project Sekai",
    link: "https://twitter.com/vlusky_husky/status/1686405570843250688",
  },
  {
    src: "https://s6.imgcdn.dev/ZJs5y.md.png",
    alt: "Gabriel Tenma White as Saki Tenma",
    link: "https://twitter.com/vlusky_husky/status/1684972953300328448",
  },
  {
    src: "https://s6.imgcdn.dev/ZJnD9.md.png",
    alt: "Anon Chihaya from MyGO!!!!!",
    link: "https://twitter.com/vlusky_husky/status/1683881740241346561",
  },
  {
    src: "https://s6.imgcdn.dev/ZJQzT.md.png",
    alt: "Shian Inubousaki from Denonbu short animation",
    link: "https://twitter.com/vlusky_husky/status/1682415703981432833",
  },
  {
    src: "https://s6.imgcdn.dev/ZJNMt.md.png",
    alt: "Raana Kaname rough sketch",
    link: "https://twitter.com/vlusky_husky/status/1682055786439245824",
  },
  {
    src: "https://s6.imgcdn.dev/ZJCew.md.png",
    alt: "Kyu Kurarin Kita Ikuyo Parody",
    link: "https://twitter.com/vlusky_husky/status/1681697871027118080",
  },
  {
    src: "https://s6.imgcdn.dev/ZJ4Ga.md.png",
    alt: "Ako Udagawa birthday art",
    link: "https://twitter.com/vlusky_husky/status/1675555278081884160"
  },
  {
    src: "https://s6.imgcdn.dev/ZJuNL.md.png",
    alt: "Mira Konohata with very shiny eyes",
    link: "https://twitter.com/vlusky_husky/status/1668621894239809546"
  },
  {
    src: "https://s6.imgcdn.dev/ZJMgu.md.png",
    alt: "Aoba and Midori playtesting their game",
    link: "https://twitter.com/vlusky_husky/status/1665324045783498753"
  },
  {
    src: "https://s6.imgcdn.dev/ZJ6AB.md.png",
    alt: "Sasaki Tsuguko from Bocchi the Rock!",
    link: "https://twitter.com/vlusky_husky/status/1668263106936545285"
  },
  {
    src: "https://s6.imgcdn.dev/Z8WBS.md.png",
    alt: "Photon Maiden doing the pose from the Lost Umbrella album art",
    link: "https://twitter.com/vlusky_husky/status/1663892238525685761"
  },
  {
    src: "https://s6.imgcdn.dev/Z8dbC.md.png",
    alt: "Bocchi and Kita in the style of the key visual for Hoshikuzu Telepath",
    link: "https://twitter.com/vlusky_husky/status/1659586589297897473"
  },
  {
    src: "https://s6.imgcdn.dev/Z8L6e.md.png",
    alt: "Yuu Akeuchi from Hoshikuzu Telepath doing the pose from Alien Alien",
    link: "https://twitter.com/vlusky_husky/status/1657420559117062144"
  },
  {
    src: "https://s6.imgcdn.dev/Z8efM.md.png",
    alt: "Hifumi Takimoto from NEW GAME! wearing the costume of Hifumi Ajitani from Blue Archive",
    link: "https://twitter.com/vlusky_husky/status/1651593598553694208"
  },
  {
    src: "https://s6.imgcdn.dev/Z8mpd.md.png",
    alt: "Hifumi Ajitani from Blue Archive wearing the costume of Hifumi Takimoto from NEW GAME!",
    link: "https://twitter.com/vlusky_husky/status/1651593598553694208"
  },
  {
    src: "https://s6.imgcdn.dev/Z8HAh.md.png",
    alt: "Ao Manaka and Umika Konohoshi as the Shy Space Girls of Manga Time Kirara",
    link: "https://twitter.com/vlusky_husky/status/1648502445851701248"
  },
  {
    src: "https://s6.imgcdn.dev/Z8XXV.md.png",
    alt: "Miku (Purin) Suride wearing a uniform from Blue Archive",
    link: "https://twitter.com/vlusky_husky/status/1628400101331972098"
  },
  {
    src: "https://s6.imgcdn.dev/Z8ENK.md.png",
    alt: "Raimon Matataki from Hoshikuzu Telepath",
    link: "https://twitter.com/vlusky_husky/status/1626983719235092481"
  },
  {
    src: "https://s6.imgcdn.dev/Z88Bo.md.png",
    alt: "Lisa Imai wearing a Hanasakigawa sailor uniform",
    link: "https://twitter.com/vlusky_husky/status/1622260425864933377"
  },
  {
    src: "https://s6.imgcdn.dev/Z8JbO.md.png",
    alt: "Diamond from Houseki no Kuni in low poly style",
    link: "https://twitter.com/vlusky_husky/status/1619719736727830528"
  },
  {
    src: "https://s6.imgcdn.dev/Z8pMn.md.png",
    alt: "Nijika Ichiji doing the pose from Zettai Sengen",
    link: "https://twitter.com/vlusky_husky/status/1615721737198669824"
  },
  {
    src: "https://s6.imgcdn.dev/Z8bl0.md.png",
    alt: "Kita Ikuyo X Kasumi Toyama",
    link: "https://twitter.com/vlusky_husky/status/1611396327187054594"
  },
  {
    src: "https://s6.imgcdn.dev/ZJDlg.md.png",
    alt: "#BTRBandParody with Bocchi as Neil from the Lemon Demon - Spirit Phone album cover",
    link: "https://twitter.com/vlusky_husky/status/1591839994683195395"
  },
  {
    src: "https://s6.imgcdn.dev/ZJYfv.md.png",
    alt: "Ryo Yamada and Rin Shima",
    link: "https://twitter.com/vlusky_husky/status/1595789393721462788"
  },
  {
    src: "https://s6.imgcdn.dev/ZJjDN.md.png",
    alt: "Rei and Yua from the DIY Anime wearing the costumes of Ran and Moca from Bandori",
    link: "https://twitter.com/vlusky_husky/status/1598274944651390976"
  },
  {
    src: "https://s6.imgcdn.dev/ZJwyq.md.png",
    alt: "Cover art for CrunchyBagels's novel With Oasis",
    link: "https://www.honeyfeed.fm/novels/8699"
  },
]

export const design: image[] = [
  {
    src: "https://s6.imgcdn.dev/ZJFWT.md.png",
    alt: "Humble motivational poster",
    link: "https://twitter.com/vlusky_husky/status/1700835788165128252"
  },
  {
    src: "https://s6.imgcdn.dev/ZJXhD.md.png",
    alt: "Somewhat brutalist design test",
    link: "https://twitter.com/vlusky_husky/status/1700835788165128252"
  },
  {
    src: "https://s6.imgcdn.dev/ZJSEh.md.png",
    alt: "Infographic about Iyashikei with Rin Shima",
    link: "https://twitter.com/vlusky_husky/status/1398990650368880646"
  },
  {
    src: "https://s6.imgcdn.dev/ZJGOl.md.png",
    alt: "Banner design with LOCK or Rokka Asahi",
    link: "https://twitter.com/vlusky_husky/status/1423091377139720196"
  },
  {
    src: "https://s6.imgcdn.dev/ZJB5d.md.png",
    alt: "Banner design with Tomoe Udagawa",
    link: "https://twitter.com/vlusky_husky/status/1571109157482434563"
  },
  {
    src: "https://s6.imgcdn.dev/ZJ7YM.md.png",
    alt: "Mindspace album art",
    link: "https://twitter.com/vlusky_husky/status/1488532010247520257"
  },
  {
    src: "https://s6.imgcdn.dev/ZJ1t0.md.png",
    alt: "Pastel dark",
    link: "https://twitter.com/vlusky_husky/status/1488532010247520257"
  },
  {
    src: "https://s6.imgcdn.dev/ZJaze.md.png",
    alt: "Crystals",
  },
  {
    src: "https://s6.imgcdn.dev/ZJzcC.md.png",
    alt: "Ruins"
  },
  {
    src: "https://s6.imgcdn.dev/ZJUeS.md.png",
    alt: "A grid of cubes that looks like a futuristic end crystal",
    link: "https://twitter.com/vlusky_husky/status/1369675439875125254"
  }
]

// youtubeID
// https://www.youtube.com/watch?v=_#######
// maybe setup an api to grab the title? ... nah probably not.
export const motion: youtube[] = [
  { id: "R04cm3knpD8", title: "inabakumori - Secret Elementary School Student" },
  { id: "Po9oDclaPPg", title: "MyGO!!!!! - Utakotoba" },
  { id: "0ZVfpLwgPGA", title: "inabakumori - SAKASAMA SHOUJOKAN short animation" },
  { id: "2-SAIdE9mvM", title: "inabakumori - Lost Umbrella (yugiot remix)" },
  { id: "_llL0D8Jbr4", title: "Lyrical Lily - Maihime but Bocchi the Rock!" },
  { id: "kmiwqzMF6F8", title: "Roselia - Sanctuary" },
  { id: "XUYi3lpncOg", title: "Happy Around! - GURU GURU DJ TURN!!" },
  { id: "L_iHuC7Wvo8", title: "Photon Maiden - 4 Challenges" },
  { id: "HXeW1cCc_mE", title: "Afterglow - SENSENFUKOKU" },
  { id: "v5QcY46pDkU", title: "False Noise - Collapse Theme" }, // False Noise - Collapse Theme Motion Graphics test
  { id: "Lfl2LHf-4Jw", title: "Aoba, Kou - Sayonara Hikoukigumo" },
  { id: "iEPy-1KcIZo", title: "Gawr Gura - Reflect" }
]


// https://www.youtube.com/watch?v=Z1UXpUNsf08&t=1604s
// at some point i wish to implement an API for these so I don't have to get the titles manually but This Will Do
export const video: youtube[] = [
  { id: "6OqkvUwYMjI", title: "Angsty Girl Bands Bonanza" },
  { id: "uQdF0BrZV6A", title: "How Stardust Telepath Portrays Anxiety" },
  { id: "QkIsD8EAcS0", title: "The Cursed Episodes of Roselia" },
  { id: "JnhJbK2Ximg", title: "The Girl I Like Forgot Her Glasses: A Technical Analysis" },
  { id: "9tvETGLM6Os", title: "OSHI NO KO's Peculiar Origins" },
  { id: "Z1UXpUNsf08", title: "CG Anime Battle Royale" },
  { id: "kOr9n-Y-WW0", title: "Bocchi vs Her Contemporaries" },
  { id: "UQXPOKUt7zQ", title: "Digging the Dig Delight Direct Drive" },
  { id: "F2pAsfzGbk8", title: "Establish Life, Establish Dominance" },
  { id: "e73JIsjQffI", title: "I did not care for K-ON" },
  { id: "TADtZYJVc4k", title: "BanG Dream! and the Bangers it had within" },
  { id: "wqoURmKBVMI", title: "Hands down, the best CGDCT in town" },
  { id: "C6KhZTJDZcM", title: "Netflix Furry Starter Pack" },
]

// soundcloud API song/playlist ID
// api.soundcloud.com/[tracks|playlists]/##########
// (it's hidden somewhere inside the "share embed")

export const songs = [
  "1398023656", // radiopassive
  "1246708291", // loquacious
  "1148013934", // isshokenmei
  "1188342196", // sunset forest
  "1167044617", // lonely night
  "972780034",  // in and out of stasis
];
