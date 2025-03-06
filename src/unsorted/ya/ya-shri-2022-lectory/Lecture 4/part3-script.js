const links = 
  process.env.LINKS_TYPE === "prod"
  ? {
      music: "https://music.yandex.ru/album/7375892/track/52396212",
      map: "https://yandex.ru/maps/org/yandeks/1124715036/?ll=37.570552%2C55.738210",
      tr: "https://translate.yandex.ru/?lang=en-ru&text=hello%20world",
      video1: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      video2: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
    }
  : {
      music: "https://music.yandex.ru/",
      map: "https://yandex.ru/maps/",
      tr: "https://translate.yandex.ru/",
    };

const alias = process.argv[2];

console.log(process.argv);
console.log(process.env.LINKS_TYPE);
console.log(links[alias]);
