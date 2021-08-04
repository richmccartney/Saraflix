export function seedDatabase(firebase) {
  function getUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const piece = (Math.random() * 16) | 0;
      const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
      return elem.toString(16);
    });
  }

  /* friends
    ============================================ */
  // friends
  firebase.firestore().collection("messages").add({
    id: getUUID(),
    title: "The one from the Opera singer",
    description:
      "A birthday message from Jonathan",
    genre: "canada",
    maturity: "18",
    slug: "jonathan",
  });

  firebase.firestore().collection("messages").add({
    id: getUUID(),
    title: "The one from the Pink lady",
    description:
      "A birthday message from Bou",
    genre: "canada",
    maturity: "18",
    slug: "bou",
  });

  firebase.firestore().collection("messages").add({
    id: getUUID(),
    title: "The one from the Friend of old",
    description:
      "A birthday message from Jess and Andrew",
    genre: "canada",
    maturity: "18",
    slug: "jess-and-andrew",
  });

  firebase.firestore().collection("messages").add({
    id: getUUID(),
    title: "The one from Fish breath",
    description:
      "A birthday message from Felicity",
    genre: "vancouver",
    maturity: "18",
    slug: "felicity",
  });

  firebase.firestore().collection("messages").add({
    id: getUUID(),
    title: "The one from Cupid",
    description:
      "A birthday message from Amber",
    genre: "eastbourne",
    maturity: "18",
    slug: "amber",
  });

  firebase.firestore().collection("messages").add({
    id: getUUID(),
    title: "The one from one of the Best Men",
    description:
      "A birthday message from Peebs",
    genre: "eastbourne",
    maturity: "18",
    slug: "peebs",
  });

  firebase.firestore().collection("messages").add({
    id: getUUID(),
    title: "The one from the New Forrest",
    description:
      "A birthday message from Ester",
    genre: "london",
    maturity: "18",
    slug: "ester",
  });

  firebase.firestore().collection("messages").add({
    id: getUUID(),
    title: "The one from the Scouser",
    description:
      "A birthday message from Hannah",
    genre: "london",
    maturity: "18",
    slug: "hannah",
  });

  firebase.firestore().collection("messages").add({
    id: getUUID(),
    title: "The one from the Block",
    description:
      "A birthday message from Jenny",
    genre: "london",
    maturity: "18",
    slug: "jenny",
  });

  firebase.firestore().collection("messages").add({
    id: getUUID(),
    title: "The one from Essex",
    description:
      "A birthday message from Nikki",
    genre: "london",
    maturity: "18",
    slug: "nikki",
  });

  firebase.firestore().collection("messages").add({
    id: getUUID(),
    title: "The one from the Bobbi",
    description:
      "A birthday message from Maeve",
    genre: "london",
    maturity: "18",
    slug: "maeve",
  });

  firebase.firestore().collection("messages").add({
    id: getUUID(),
    title: "The one from the Bobbi.. Italian style",
    description:
      "A birthday message from Alice",
    genre: "london",
    maturity: "18",
    slug: "alice",
  });

  firebase.firestore().collection("messages").add({
    id: getUUID(),
    title: "The one who moved to the States",
    description:
      "A birthday message from Angelica",
    genre: "canada",
    maturity: "18",
    slug: "angelica",
  });

  firebase.firestore().collection("messages").add({
    id: getUUID(),
    title: "The one from the Toronto Party friends",
    description:
      "A birthday message from Hylda and Sanoja",
    genre: "canada",
    maturity: "18",
    slug: "hylda-and-sanoja",
  });

  firebase.firestore().collection("messages").add({
    id: getUUID(),
    title: "The one from the Friend Who You Lived With",
    description:
      "A birthday message from Awex",
    genre: "canada",
    maturity: "18",
    slug: "awex",
  });

  firebase.firestore().collection("messages").add({
    id: getUUID(),
    title: "The one from Home",
    description:
      "A birthday message from the whole D'Aliesio family",
    genre: "canada",
    maturity: "18",
    slug: "home",
  });

  firebase.firestore().collection("messages").add({
    id: getUUID(),
    title: "The one from just the Ladies",
    description:
      "A birthday message from Mom and Val",
    genre: "canada",
    maturity: "18",
    slug: "mom-and-val",
  });

  firebase.firestore().collection("messages").add({
    id: getUUID(),
    title: "The one from the Auntie",
    description:
      "A birthday message from Erm",
    genre: "canada",
    maturity: "18",
    slug: "erm",
  });

  firebase.firestore().collection("messages").add({
    id: getUUID(),
    title: "The one from the Uncle",
    description:
      "A birthday message from Rob",
    genre: "canada",
    maturity: "18",
    slug: "rob",
  });

  firebase.firestore().collection("messages").add({
    id: getUUID(),
    title: "The one from Eastbourne",
    description:
      "A birthday message from the whole McCartney family",
    genre: "eastbourne",
    maturity: "18",
    slug: "mccartney",
  });

  firebase.firestore().collection("messages").add({
    id: getUUID(),
    title: "The one from Annington road",
    description:
      "A birthday message from the whole Collins family",
    genre: "eastbourne",
    maturity: "18",
    slug: "collins",
  });

  firebase.firestore().collection("messages").add({
    id: getUUID(),
    title: "The one from the other Bride To Be",
    description:
      "A birthday message from Danielle",
    genre: "eastbourne",
    maturity: "18",
    slug: "danielle",
  });

  firebase.firestore().collection("messages").add({
    id: getUUID(),
    title: "The one from the Spurs Supporter",
    description:
      "A birthday message from Michael",
    genre: "eastbourne",
    maturity: "18",
    slug: "brown",
  });
}
