// seed/enemySeed.js
const mongoose = require("mongoose");
const Enemy = require("../models/enemy");

const enemies = [
  {
    name: "Anemo Slime",
    family: "Slime",
    description:
      "A small monster created by the coalescing of Anemo dispersed throughout nature. It is able to float in the air due to the power of Anemo.",
    iconUrl:
      "https://res.cloudinary.com/dnoibyqq2/image/upload/v1621077122/genshin-app/enemies/slimes/anemo-slime.png",
    drops: []
  },
  // Tambah data enemy lain di sini
];

mongoose
  .connect("mongodb://localhost:27017/genshin", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    await Enemy.deleteMany({});
    await Enemy.insertMany(enemies);
    console.log("Enemy data seeded!");
    process.exit();
  })
  .catch((err) => console.error(err));
