// ============================================================
// DU LIEU HOC TAP - TIENG ANH LOP 3 (theo Global Success)
// Moi Unit gom: tu vung co ban, mau cau, tu vung mo rong,
// meo ngu phap, doan doc hieu nang cao, quiz co ban, quiz nang cao
// ============================================================

const UNITS = [
  {
    id: "starter",
    group: 1,
    icon: "\u2708\uFE0F",
    titleEn: "Starter",
    titleVi: "Lam quen",
    core: [
      { en: "one", vi: "s\u1ed1 1", icon: "1\uFE0F\u20E3" },
      { en: "two", vi: "s\u1ed1 2", icon: "2\uFE0F\u20E3" },
      { en: "three", vi: "s\u1ed1 3", icon: "3\uFE0F\u20E3" },
      { en: "four", vi: "s\u1ed1 4", icon: "4\uFE0F\u20E3" },
      { en: "five", vi: "s\u1ed1 5", icon: "5\uFE0F\u20E3" },
      { en: "six", vi: "s\u1ed1 6", icon: "6\uFE0F\u20E3" },
      { en: "seven", vi: "s\u1ed1 7", icon: "7\uFE0F\u20E3" },
      { en: "eight", vi: "s\u1ed1 8", icon: "8\uFE0F\u20E3" },
      { en: "nine", vi: "s\u1ed1 9", icon: "9\uFE0F\u20E3" },
      { en: "ten", vi: "s\u1ed1 10", icon: "\uD83D\uDD1F" },
    ],
    patterns: [
      { en: "How many apples? Five apples.", vi: "C\u00f3 bao nhi\u00eau qu\u1ea3 t\u00e1o? N\u0103m qu\u1ea3 t\u00e1o." },
      { en: "A, B, C, D...", vi: "B\u1ea3ng ch\u1eef c\u00e1i ti\u1ebfng Anh." },
    ],
    ext: [
      { en: "eleven", vi: "s\u1ed1 11", icon: "\uD83D\uDD22" },
      { en: "twelve", vi: "s\u1ed1 12", icon: "\uD83D\uDD22" },
      { en: "twenty", vi: "s\u1ed1 20", icon: "\uD83D\uDD22" },
      { en: "alphabet", vi: "b\u1ea3ng ch\u1eef c\u00e1i", icon: "\uD83D\uDD24" },
    ],
    grammar: {
      title: "S\u1ed1 \u0111\u1ebfm 1-10",
      explain: "Ti\u1ebfng Anh d\u00f9ng one, two, three... \u0111\u1ec3 \u0111\u1ebfm s\u1ed1 l\u01b0\u1ee3ng. Sau s\u1ed1 \u0111\u1ebfm t\u1eeb 2 tr\u1edf l\u00ean, danh t\u1eeb th\u01b0\u1eddng th\u00eam \u0111u\u00f4i -s.",
      example: "one book, two books, three books",
    },
    reading: {
      title: "My classroom",
      text: "Look at my classroom. I can see one board, two doors and ten desks. I can count from one to ten in English!",
      questions: [
        { q: "How many doors are there?", options: ["One", "Two", "Ten"], answer: 1 },
        { q: "What can the writer count?", options: ["Numbers", "Colours", "Animals"], answer: 0 },
      ],
    },
    quizCore: [
      { q: "5 l\u00e0 s\u1ed1 g\u00ec trong ti\u1ebfng Anh?", options: ["four", "five", "six"], answer: 1 },
      { q: "'Nine' ngh\u0129a l\u00e0 s\u1ed1 m\u1ea5y?", options: ["7", "8", "9"], answer: 2 },
      { q: "Ch\u1ecdn t\u1eeb \u0111\u00fang cho s\u1ed1 10", options: ["ten", "tea", "ten n"], answer: 0 },
      { q: "'Three' l\u00e0 s\u1ed1 m\u1ea5y?", options: ["2", "3", "4"], answer: 1 },
    ],
    quizExt: [
      { q: "'Twelve' l\u00e0 s\u1ed1 m\u1ea5y?", options: ["11", "12", "20"], answer: 1 },
      { q: "B\u1ea3ng ch\u1eef c\u00e1i ti\u1ebfng Anh ti\u1ebfng Anh g\u1ecdi l\u00e0 g\u00ec?", options: ["alphabet", "number", "letter box"], answer: 0 },
      { q: "'Twenty' l\u00e0 s\u1ed1 m\u1ea5y?", options: ["12", "20", "02"], answer: 1 },
    ],
  },

  {
    id: "u1",
    group: 1,
    icon: "\uD83D\uDC4B",
    titleEn: "Unit 1: Hello",
    titleVi: "Xin ch\u00e0o",
    core: [
      { en: "hello", vi: "xin ch\u00e0o", icon: "\uD83D\uDC4B" },
      { en: "hi", vi: "ch\u00e0o (th\u00e2n m\u1eadt)", icon: "\uD83D\uDC4B" },
      { en: "goodbye", vi: "t\u1ea1m bi\u1ec7t", icon: "\uD83D\uDC4B" },
      { en: "bye", vi: "t\u1ea1m bi\u1ec7t (ng\u1eafn)", icon: "\uD83D\uDC4B" },
      { en: "good morning", vi: "ch\u00e0o bu\u1ed5i s\u00e1ng", icon: "\uD83C\uDF05" },
      { en: "good afternoon", vi: "ch\u00e0o bu\u1ed5i chi\u1ec1u", icon: "\u2600\uFE0F" },
      { en: "good evening", vi: "ch\u00e0o bu\u1ed5i t\u1ed1i", icon: "\uD83C\uDF07" },
      { en: "Miss", vi: "c\u00f4 (gi\u00e1o vi\u00ean n\u1eef)", icon: "\uD83D\uDC69\u200D\uD83C\uDFEB" },
    ],
    patterns: [
      { en: "Hello! I'm Mai.", vi: "Xin ch\u00e0o! T\u1edb l\u00e0 Mai." },
      { en: "Goodbye, Miss Hoa!", vi: "T\u1ea1m bi\u1ec7t c\u00f4 Hoa!" },
    ],
    ext: [
      { en: "nice to meet you", vi: "r\u1ea5t vui \u0111\u01b0\u1ee3c g\u1eb7p b\u1ea1n", icon: "\uD83E\uDD1D" },
      { en: "good night", vi: "ch\u00fac ng\u1ee7 ngon", icon: "\uD83C\uDF19" },
      { en: "see you later", vi: "h\u1eb9n g\u1eb7p l\u1ea1i", icon: "\uD83D\uDC4B" },
    ],
    grammar: {
      title: "'I'm' l\u00e0 vi\u1ebft t\u1eaft c\u1ee7a 'I am'",
      explain: "Trong giao ti\u1ebfp h\u00e0ng ng\u00e0y, ng\u01b0\u1eddi b\u1ea3n ng\u1eef th\u01b0\u1eddng n\u00f3i t\u1eaft I am th\u00e0nh I'm.",
      example: "I am Nam. -> I'm Nam.",
    },
    reading: {
      title: "A new friend",
      text: "It is morning. Mai says: 'Good morning!' to her teacher. Then she sees Tom and says: 'Hi Tom! I'm Mai.' Tom says: 'Nice to meet you!'",
      questions: [
        { q: "What does Mai say to her teacher?", options: ["Good morning", "Goodbye", "Good night"], answer: 0 },
        { q: "What does Tom say to Mai?", options: ["Bye", "Nice to meet you", "Hello Miss"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "Bu\u1ed5i s\u00e1ng g\u1eb7p c\u00f4 gi\u00e1o, em n\u00f3i g\u00ec?", options: ["Good morning", "Good night", "Bye"], answer: 0 },
      { q: "'Goodbye' ngh\u0129a l\u00e0 g\u00ec?", options: ["Xin ch\u00e0o", "T\u1ea1m bi\u1ec7t", "C\u1ea3m \u01a1n"], answer: 1 },
      { q: "Ch\u00e0o bu\u1ed5i t\u1ed1i n\u00f3i l\u00e0 gi?", options: ["Good evening", "Good afternoon", "Hello"], answer: 0 },
      { q: "'Hi' d\u00f9ng khi n\u00e0o?", options: ["Ch\u00e0o th\u00e2n m\u1eadt", "T\u1ea1m bi\u1ec7t", "Xin l\u1ed7i"], answer: 0 },
    ],
    quizExt: [
      { q: "'Nice to meet you' ngh\u0129a l\u00e0 g\u00ec?", options: ["T\u1ea1m bi\u1ec7t nh\u00e9", "R\u1ea5t vui \u0111\u01b0\u1ee3c g\u1eb7p b\u1ea1n", "Ch\u00fac ng\u1ee7 ngon"], answer: 1 },
      { q: "Tr\u01b0\u1edbc khi \u0111i ng\u1ee7 ta n\u00f3i g\u00ec?", options: ["Good night", "Good morning", "Hello"], answer: 0 },
      { q: "'I'm' l\u00e0 vi\u1ebft t\u1eaft c\u1ee7a c\u1ee5m n\u00e0o?", options: ["I am", "I are", "I is"], answer: 0 },
    ],
  },

  {
    id: "u2",
    group: 1,
    icon: "\uD83C\uDFF7\uFE0F",
    titleEn: "Unit 2: Our names",
    titleVi: "T\u00ean c\u1ee7a ch\u00fang ta",
    core: [
      { en: "name", vi: "t\u00ean", icon: "\uD83C\uDFF7\uFE0F" },
      { en: "spell", vi: "\u0111\u00e1nh v\u1ea7n", icon: "\uD83D\uDD24" },
      { en: "letter", vi: "ch\u1eef c\u00e1i", icon: "\uD83D\uDD24" },
      { en: "first name", vi: "t\u00ean g\u1ecdi", icon: "\uD83D\uDCDB" },
      { en: "last name", vi: "h\u1ecd", icon: "\uD83D\uDCDB" },
      { en: "boy", vi: "b\u1ea1n nam", icon: "\uD83D\uDC66" },
      { en: "girl", vi: "b\u1ea1n n\u1eef", icon: "\uD83D\uDC67" },
    ],
    patterns: [
      { en: "What's your name? My name is Linh.", vi: "T\u00ean b\u1ea1n l\u00e0 g\u00ec? T\u00ean t\u1edb l\u00e0 Linh." },
      { en: "How do you spell your name?", vi: "B\u1ea1n \u0111\u00e1nh v\u1ea7n t\u00ean m\u00ecnh nh\u01b0 th\u1ebf n\u00e0o?" },
    ],
    ext: [
      { en: "nickname", vi: "bi\u1ec7t danh", icon: "\uD83D\uDE0E" },
      { en: "full name", vi: "h\u1ecd v\u00e0 t\u00ean \u0111\u1ea7y \u0111\u1ee7", icon: "\uD83D\uDCDD" },
      { en: "classmate", vi: "b\u1ea1n c\u00f9ng l\u1edbp", icon: "\uD83E\uDDD1\u200D\uD83E\uDDD1" },
    ],
    grammar: {
      title: "T\u1eeb \u0111\u1ec3 h\u1ecfi What",
      explain: "What d\u00f9ng \u0111\u1ec3 h\u1ecfi v\u1ec1 s\u1ef1 v\u1eadt, t\u00ean g\u1ecdi. C\u1ea5u tr\u00fac: What + is/'s + ch\u1ee7 ng\u1eef?",
      example: "What's your name? -> My name is Nam.",
    },
    reading: {
      title: "Meet Phong",
      text: "Hi, my name is Phong. P-H-O-N-G, Phong. I am a boy. My best friend is Lan. She is a girl. We are classmates.",
      questions: [
        { q: "How do you spell Phong's name?", options: ["P-H-O-N-G", "F-O-N-G", "P-O-N-G"], answer: 0 },
        { q: "Who is Lan?", options: ["Phong's teacher", "Phong's classmate", "Phong's sister"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'What's your name?' ngh\u0129a l\u00e0 g\u00ec?", options: ["B\u1ea1n bao nhi\u00eau tu\u1ed5i?", "T\u00ean b\u1ea1n l\u00e0 g\u00ec?", "B\u1ea1n \u1edf \u0111\u00e2u?"], answer: 1 },
      { q: "\u0110\u00e1nh v\u1ea7n ti\u1ebfng Anh l\u00e0 t\u1eeb n\u00e0o?", options: ["spell", "name", "letter"], answer: 0 },
      { q: "'Boy' ngh\u0129a l\u00e0 g\u00ec?", options: ["b\u1ea1n n\u1eef", "b\u1ea1n nam", "gi\u00e1o vi\u00ean"], answer: 1 },
      { q: "'Girl' ngh\u0129a l\u00e0 g\u00ec?", options: ["b\u1ea1n nam", "b\u1ea1n n\u1eef", "b\u1ea1n th\u00e2n"], answer: 1 },
    ],
    quizExt: [
      { q: "'Nickname' ngh\u0129a l\u00e0 g\u00ec?", options: ["bi\u1ec7t danh", "h\u1ecd", "l\u1edbp h\u1ecdc"], answer: 0 },
      { q: "'Classmate' ngh\u0129a l\u00e0 g\u00ec?", options: ["b\u1ea1n c\u00f9ng l\u1edbp", "th\u1ea7y gi\u00e1o", "anh trai"], answer: 0 },
      { q: "Ch\u1ecdn c\u00e2u \u0111\u00fang khi h\u1ecfi c\u00e1ch \u0111\u00e1nh v\u1ea7n t\u00ean", options: ["How do you spell your name?", "What colour is it?", "Where are you?"], answer: 0 },
    ],
  },

  {
    id: "u3",
    group: 1,
    icon: "\uD83E\uDD1D",
    titleEn: "Unit 3: Our friends",
    titleVi: "B\u1ea1n b\u00e8 c\u1ee7a ch\u00fang ta",
    core: [
      { en: "friend", vi: "b\u1ea1n b\u00e8", icon: "\uD83E\uDD1D" },
      { en: "he", vi: "anh \u1ea5y / c\u1eadu \u1ea5y", icon: "\uD83D\uDC66" },
      { en: "she", vi: "c\u00f4 \u1ea5y / c\u1eadu \u1ea5y", icon: "\uD83D\uDC67" },
      { en: "tall", vi: "cao", icon: "\uD83D\uDCCF" },
      { en: "short", vi: "th\u1ea5p", icon: "\uD83D\uDCCF" },
      { en: "thin", vi: "g\u1ea7y, m\u1ea3nh mai", icon: "\uD83D\uDC64" },
      { en: "strong", vi: "kh\u1ecfe m\u1ea1nh", icon: "\uD83D\uDCAA" },
    ],
    patterns: [
      { en: "Who's that? He's my friend.", vi: "\u0110\u00f3 l\u00e0 ai v\u1eady? \u0110\u00f3 l\u00e0 b\u1ea1n c\u1ee7a t\u1edb." },
      { en: "This is Nam. He is tall.", vi: "\u0110\u00e2y l\u00e0 Nam. C\u1eadu \u1ea5y cao." },
    ],
    ext: [
      { en: "best friend", vi: "b\u1ea1n th\u00e2n nh\u1ea5t", icon: "\uD83D\uDC96" },
      { en: "kind", vi: "t\u1ed1t b\u1ee5ng", icon: "\uD83D\uDE0A" },
      { en: "funny", vi: "vui t\u00ednh", icon: "\uD83D\uDE04" },
    ],
    grammar: {
      title: "\u0110\u1ea1i t\u1eeb He / She + is",
      explain: "D\u00f9ng He cho b\u1ea1n nam, She cho b\u1ea1n n\u1eef, theo sau l\u00e0 is khi mi\u00eau t\u1ea3.",
      example: "He is tall. / She is kind.",
    },
    reading: {
      title: "My best friend",
      text: "This is Huy. He is my best friend. He is tall and strong. He is very funny too. I like playing with him.",
      questions: [
        { q: "Is Huy tall or short?", options: ["Tall", "Short", "Thin"], answer: 0 },
        { q: "What does the writer like doing?", options: ["Reading with Huy", "Playing with Huy", "Singing with Huy"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'Friend' ngh\u0129a l\u00e0 g\u00ec?", options: ["b\u1ea1n b\u00e8", "gia \u0111\u00ecnh", "th\u1ea7y c\u00f4"], answer: 0 },
      { q: "Dùng t\u1eeb n\u00e0o cho b\u1ea1n nam?", options: ["She", "He", "It"], answer: 1 },
      { q: "'Tall' ngh\u0129a l\u00e0 g\u00ec?", options: ["th\u1ea5p", "cao", "g\u1ea7y"], answer: 1 },
      { q: "'Short' tr\u00e1i ngh\u0129a v\u1edbi t\u1eeb n\u00e0o?", options: ["tall", "thin", "strong"], answer: 0 },
    ],
    quizExt: [
      { q: "'Best friend' ngh\u0129a l\u00e0 g\u00ec?", options: ["b\u1ea1n th\u00e2n nh\u1ea5t", "b\u1ea1n c\u00f9ng b\u00e0n", "ng\u01b0\u1eddi l\u1ea1"], answer: 0 },
      { q: "'Funny' ngh\u0129a l\u00e0 g\u00ec?", options: ["bu\u1ed3n", "vui t\u00ednh", "gi\u1eadn d\u1eef"], answer: 1 },
      { q: "Ch\u1ecdn c\u00e2u \u0111\u00fang", options: ["She is tall.", "She am tall.", "She tall is."], answer: 0 },
    ],
  },

  {
    id: "u4",
    group: 1,
    icon: "\uD83E\uDDCD",
    titleEn: "Unit 4: Our bodies",
    titleVi: "C\u01a1 th\u1ec3 c\u1ee7a ch\u00fang ta",
    core: [
      { en: "head", vi: "\u0111\u1ea7u", icon: "\uD83D\uDE00" },
      { en: "hair", vi: "t\u00f3c", icon: "\uD83D\uDC71" },
      { en: "eyes", vi: "m\u1eaft", icon: "\uD83D\uDC40" },
      { en: "nose", vi: "m\u0169i", icon: "\uD83D\uDC43" },
      { en: "mouth", vi: "mi\u1ec7ng", icon: "\uD83D\uDC44" },
      { en: "ears", vi: "tai", icon: "\uD83D\uDC42" },
      { en: "hands", vi: "b\u00e0n tay", icon: "\uD83D\uDD90\uFE0F" },
      { en: "legs", vi: "ch\u00e2n", icon: "\uD83E\uDDB5" },
    ],
    patterns: [
      { en: "Touch your nose.", vi: "Ch\u1ea1m v\u00e0o m\u0169i c\u1ee7a b\u1ea1n." },
      { en: "This is my hand.", vi: "\u0110\u00e2y l\u00e0 tay c\u1ee7a t\u1edb." },
    ],
    ext: [
      { en: "shoulders", vi: "vai", icon: "\uD83D\uDC64" },
      { en: "fingers", vi: "ng\u00f3n tay", icon: "\u270B" },
      { en: "toes", vi: "ng\u00f3n ch\u00e2n", icon: "\uD83E\uDDB6" },
    ],
    grammar: {
      title: "C\u00e2u m\u1ec7nh l\u1ec7nh (Imperative)",
      explain: "D\u00f9ng \u0111\u1ed9ng t\u1eeb nguy\u00ean m\u1eabu \u0111\u1ee9ng \u0111\u1ea7u c\u00e2u \u0111\u1ec3 y\u00eau c\u1ea7u ai \u0111\u00f3 l\u00e0m g\u00ec.",
      example: "Touch your head. Close your eyes.",
    },
    reading: {
      title: "Simon says",
      text: "In the game, the teacher says: 'Touch your nose! Touch your ears! Touch your toes!' The children listen and touch the right body part.",
      questions: [
        { q: "Who says the instructions?", options: ["The teacher", "A friend", "The mother"], answer: 0 },
        { q: "What do the children do?", options: ["Sing a song", "Touch body parts", "Draw pictures"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'Eyes' ngh\u0129a l\u00e0 g\u00ec?", options: ["m\u0169i", "m\u1eaft", "tai"], answer: 1 },
      { q: "'Mouth' ngh\u0129a l\u00e0 g\u00ec?", options: ["mi\u1ec7ng", "tay", "ch\u00e2n"], answer: 0 },
      { q: "'Hair' ngh\u0129a l\u00e0 g\u00ec?", options: ["t\u00f3c", "tai", "\u0111\u1ea7u"], answer: 0 },
      { q: "'Legs' ngh\u0129a l\u00e0 g\u00ec?", options: ["tay", "ch\u00e2n", "vai"], answer: 1 },
    ],
    quizExt: [
      { q: "'Shoulders' ngh\u0129a l\u00e0 g\u00ec?", options: ["vai", "ng\u00f3n tay", "ng\u00f3n ch\u00e2n"], answer: 0 },
      { q: "'Fingers' ngh\u0129a l\u00e0 g\u00ec?", options: ["ng\u00f3n tay", "ng\u00f3n ch\u00e2n", "b\u00e0n tay"], answer: 0 },
      { q: "C\u00e2u m\u1ec7nh l\u1ec7nh b\u1eaft \u0111\u1ea7u b\u1eb1ng g\u00ec?", options: ["Ch\u1ee7 ng\u1eef", "\u0110\u1ed9ng t\u1eeb", "T\u00ednh t\u1eeb"], answer: 1 },
    ],
  },

  {
    id: "u5",
    group: 1,
    icon: "\u26BD",
    titleEn: "Unit 5: My hobbies",
    titleVi: "S\u1edf th\u00edch c\u1ee7a t\u00f4i",
    core: [
      { en: "reading", vi: "\u0111\u1ecdc s\u00e1ch", icon: "\uD83D\uDCDA" },
      { en: "drawing", vi: "v\u1ebd tranh", icon: "\uD83C\uDFA8" },
      { en: "singing", vi: "h\u00e1t", icon: "\uD83C\uDFA4" },
      { en: "dancing", vi: "nh\u1ea3y m\u00fal", icon: "\uD83D\uDC83" },
      { en: "swimming", vi: "b\u01a1i l\u1ed9i", icon: "\uD83C\uDFCA" },
      { en: "cycling", vi: "\u0111\u1ea1p xe", icon: "\uD83D\uDEB2" },
      { en: "playing football", vi: "ch\u01a1i b\u00f3ng \u0111\u00e1", icon: "\u26BD" },
    ],
    patterns: [
      { en: "What's your hobby? My hobby is reading.", vi: "S\u1edf th\u00edch c\u1ee7a b\u1ea1n l\u00e0 g\u00ec? S\u1edf th\u00edch c\u1ee7a t\u1edb l\u00e0 \u0111\u1ecdc s\u00e1ch." },
      { en: "I like swimming.", vi: "T\u1edb th\u00edch b\u01a1i l\u1ed9i." },
    ],
    ext: [
      { en: "collecting stamps", vi: "s\u01b0u t\u1ea7m tem", icon: "\uD83D\uDCEE" },
      { en: "playing chess", vi: "ch\u01a1i c\u1edd", icon: "\u265F\uFE0F" },
      { en: "gardening", vi: "l\u00e0m v\u01b0\u1eddn", icon: "\uD83E\uDEB4" },
    ],
    grammar: {
      title: "\u0110\u1ed9ng t\u1eeb th\u00eam -ing sau like",
      explain: "Khi n\u00f3i v\u1ec1 s\u1edf th\u00edch, \u0111\u1ed9ng t\u1eeb theo sau like/hobby is th\u01b0\u1eddng th\u00eam \u0111u\u00f4i -ing.",
      example: "I like swimming. My hobby is drawing.",
    },
    reading: {
      title: "Lan's free time",
      text: "In her free time, Lan likes reading books. She also likes singing. On Sundays, she goes swimming with her father. She is very happy.",
      questions: [
        { q: "What does Lan like doing?", options: ["Reading and singing", "Cycling and dancing", "Drawing and cooking"], answer: 0 },
        { q: "Who does Lan go swimming with?", options: ["Her mother", "Her friend", "Her father"], answer: 2 },
      ],
    },
    quizCore: [
      { q: "'Swimming' ngh\u0129a l\u00e0 g\u00ec?", options: ["b\u01a1i l\u1ed9i", "\u0111\u1ea1p xe", "v\u1ebd tranh"], answer: 0 },
      { q: "'Reading' ngh\u0129a l\u00e0 g\u00ec?", options: ["\u0111\u1ecdc s\u00e1ch", "h\u00e1t", "nh\u1ea3y m\u00fal"], answer: 0 },
      { q: "'What's your hobby?' h\u1ecfi v\u1ec1 \u0111i\u1ec1u g\u00ec?", options: ["T\u00ean b\u1ea1n", "S\u1edf th\u00edch", "Tu\u1ed5i"], answer: 1 },
      { q: "'Cycling' ngh\u0129a l\u00e0 g\u00ec?", options: ["\u0111\u1ea1p xe", "ch\u01a1i b\u00f3ng", "b\u01a1i l\u1ed9i"], answer: 0 },
    ],
    quizExt: [
      { q: "'Collecting stamps' ngh\u0129a l\u00e0 g\u00ec?", options: ["s\u01b0u t\u1ea7m tem", "ch\u01a1i c\u1edd", "l\u00e0m v\u01b0\u1eddn"], answer: 0 },
      { q: "Sau 'like' \u0111\u1ed9ng t\u1eeb th\u01b0\u1eddng th\u00eam g\u00ec?", options: ["-s", "-ing", "-ed"], answer: 1 },
      { q: "'Gardening' ngh\u0129a l\u00e0 g\u00ec?", options: ["l\u00e0m v\u01b0\u1eddn", "n\u1ea5u \u0103n", "may v\u00e1"], answer: 0 },
    ],
  },

  {
    id: "u6",
    group: 2,
    icon: "\uD83C\uDFEB",
    titleEn: "Unit 6: Our school",
    titleVi: "Tr\u01b0\u1eddng h\u1ecdc c\u1ee7a ch\u00fang ta",
    core: [
      { en: "classroom", vi: "ph\u00f2ng h\u1ecdc", icon: "\uD83C\uDFEB" },
      { en: "playground", vi: "s\u00e2n ch\u01a1i", icon: "\uD83C\uDFDE\uFE0F" },
      { en: "library", vi: "th\u01b0 vi\u1ec7n", icon: "\uD83D\uDCDA" },
      { en: "gym", vi: "ph\u00f2ng th\u1ec3 d\u1ee5c", icon: "\uD83C\uDFCB\uFE0F" },
      { en: "canteen", vi: "c\u0103ng tin", icon: "\uD83C\uDF7D\uFE0F" },
      { en: "gate", vi: "c\u1ed5ng tr\u01b0\u1eddng", icon: "\uD83D\uDEAA" },
      { en: "garden", vi: "v\u01b0\u1eddn tr\u01b0\u1eddng", icon: "\uD83C\uDF33" },
    ],
    patterns: [
      { en: "Where's the library? It's near the classroom.", vi: "Th\u01b0 vi\u1ec7n \u1edf \u0111\u00e2u? N\u00f3 \u1edf g\u1ea7n ph\u00f2ng h\u1ecdc." },
    ],
    ext: [
      { en: "principal's office", vi: "ph\u00f2ng hi\u1ec7u tr\u01b0\u1edfng", icon: "\uD83C\uDFE2" },
      { en: "computer room", vi: "ph\u00f2ng vi t\u00ednh", icon: "\uD83D\uDCBB" },
      { en: "music room", vi: "ph\u00f2ng \u00e2m nh\u1ea1c", icon: "\uD83C\uDFB5" },
    ],
    grammar: {
      title: "Gi\u1edbi t\u1eeb ch\u1ec9 v\u1ecb tr\u00ed: near, next to",
      explain: "near = g\u1ea7n, next to = ngay b\u00ean c\u1ea1nh. D\u00f9ng \u0111\u1ec3 n\u00f3i v\u1ec1 v\u1ecb tr\u00ed c\u1ee7a m\u1ed9t n\u01a1i.",
      example: "The library is next to the classroom.",
    },
    reading: {
      title: "My school",
      text: "My school is big. There is a playground, a library and a gym. The canteen is next to the gym. I love my school.",
      questions: [
        { q: "What is next to the gym?", options: ["The library", "The canteen", "The gate"], answer: 1 },
        { q: "How is the school?", options: ["Small", "Big", "Old"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'Library' ngh\u0129a l\u00e0 g\u00ec?", options: ["th\u01b0 vi\u1ec7n", "c\u0103ng tin", "s\u00e2n ch\u01a1i"], answer: 0 },
      { q: "'Playground' ngh\u0129a l\u00e0 g\u00ec?", options: ["s\u00e2n ch\u01a1i", "ph\u00f2ng h\u1ecdc", "c\u1ed5ng tr\u01b0\u1eddng"], answer: 0 },
      { q: "'Canteen' ngh\u0129a l\u00e0 g\u00ec?", options: ["c\u0103ng tin", "th\u01b0 vi\u1ec7n", "v\u01b0\u1eddn"], answer: 0 },
      { q: "'Gate' ngh\u0129a l\u00e0 g\u00ec?", options: ["c\u1ed5ng tr\u01b0\u1eddng", "ph\u00f2ng h\u1ecdc", "s\u00e2n"], answer: 0 },
    ],
    quizExt: [
      { q: "'Principal's office' l\u00e0 g\u00ec?", options: ["ph\u00f2ng hi\u1ec7u tr\u01b0\u1edfng", "ph\u00f2ng y t\u1ebf", "th\u01b0 vi\u1ec7n"], answer: 0 },
      { q: "'Next to' ngh\u0129a l\u00e0 g\u00ec?", options: ["ngay b\u00ean c\u1ea1nh", "xa", "\u1edf tr\u00ean"], answer: 0 },
      { q: "'Computer room' ngh\u0129a l\u00e0 g\u00ec?", options: ["ph\u00f2ng vi t\u00ednh", "ph\u00f2ng nh\u1ea1c", "ph\u00f2ng th\u1ec3 d\u1ee5c"], answer: 0 },
    ],
  },

  {
    id: "u7",
    group: 2,
    icon: "\uD83D\uDCE2",
    titleEn: "Unit 7: Classroom instructions",
    titleVi: "M\u1ec7nh l\u1ec7nh trong l\u1edbp",
    core: [
      { en: "stand up", vi: "\u0111\u1ee9ng l\u00ean", icon: "\uD83D\uDEB6" },
      { en: "sit down", vi: "ng\u1ed3i xu\u1ed1ng", icon: "\uD83E\uDE91" },
      { en: "open your book", vi: "m\u1edf s\u00e1ch ra", icon: "\uD83D\uDCD6" },
      { en: "close your book", vi: "g\u1eadp s\u00e1ch l\u1ea1i", icon: "\uD83D\uDCD5" },
      { en: "listen", vi: "l\u1eafng nghe", icon: "\uD83D\uDC42" },
      { en: "look", vi: "nh\u00ecn", icon: "\uD83D\uDC40" },
      { en: "be quiet", vi: "gi\u1eef tr\u1eadt t\u1ef1", icon: "\uD83E\uDD2B" },
    ],
    patterns: [
      { en: "Stand up, please.", vi: "M\u1eddi em \u0111\u1ee9ng l\u00ean." },
      { en: "Open your book, please.", vi: "M\u1eddi em m\u1edf s\u00e1ch ra." },
    ],
    ext: [
      { en: "work in pairs", vi: "l\u00e0m vi\u1ec7c theo c\u1eb7p", icon: "\uD83D\uDC65" },
      { en: "line up", vi: "x\u1ebfp h\u00e0ng", icon: "\uD83D\uDEB6" },
      { en: "put up your hand", vi: "gi\u01a1 tay", icon: "\u270B" },
    ],
    grammar: {
      title: "C\u00e2u m\u1ec7nh l\u1ec7nh l\u1ecbch s\u1ef1 v\u1edbi please",
      explain: "Th\u00eam please v\u00e0o cu\u1ed1i c\u00e2u m\u1ec7nh l\u1ec7nh \u0111\u1ec3 c\u00e2u n\u00f3i l\u1ecbch s\u1ef1 h\u01a1n.",
      example: "Sit down, please. Be quiet, please.",
    },
    reading: {
      title: "In the classroom",
      text: "The teacher says: 'Stand up, please.' All the students stand up. Then she says: 'Open your books, please.' Everyone listens and works quietly.",
      questions: [
        { q: "What do the students do first?", options: ["Sit down", "Stand up", "Open books"], answer: 1 },
        { q: "What does the teacher ask next?", options: ["Close your books", "Open your books", "Line up"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'Stand up' ngh\u0129a l\u00e0 g\u00ec?", options: ["\u0111\u1ee9ng l\u00ean", "ng\u1ed3i xu\u1ed1ng", "\u0111i ra"], answer: 0 },
      { q: "'Listen' ngh\u0129a l\u00e0 g\u00ec?", options: ["nh\u00ecn", "l\u1eafng nghe", "n\u00f3i"], answer: 1 },
      { q: "'Be quiet' ngh\u0129a l\u00e0 g\u00ec?", options: ["gi\u1eef tr\u1eadt t\u1ef1", "h\u00e1t to", "ch\u1ea1y nhanh"], answer: 0 },
      { q: "'Close your book' ngh\u0129a l\u00e0 g\u00ec?", options: ["m\u1edf s\u00e1ch", "g\u1eadp s\u00e1ch l\u1ea1i", "\u0111\u1ecdc s\u00e1ch"], answer: 1 },
    ],
    quizExt: [
      { q: "'Line up' ngh\u0129a l\u00e0 g\u00ec?", options: ["x\u1ebfp h\u00e0ng", "ng\u1ed3i xu\u1ed1ng", "gi\u01a1 tay"], answer: 0 },
      { q: "'Put up your hand' ngh\u0129a l\u00e0 g\u00ec?", options: ["gi\u01a1 tay", "\u0111\u1ee9ng l\u00ean", "vi\u1ebft b\u00e0i"], answer: 0 },
      { q: "Th\u00eam t\u1eeb n\u00e0o \u0111\u1ec3 c\u00e2u m\u1ec7nh l\u1ec7nh l\u1ecbch s\u1ef1 h\u01a1n?", options: ["please", "very", "and"], answer: 0 },
    ],
  },

  {
    id: "u8",
    group: 2,
    icon: "\u270F\uFE0F",
    titleEn: "Unit 8: My school things",
    titleVi: "\u0110\u1ed3 d\u00f9ng h\u1ecdc t\u1eadp",
    core: [
      { en: "pen", vi: "b\u00fat m\u1ef1c", icon: "\uD83D\uDD8A\uFE0F" },
      { en: "pencil", vi: "b\u00fat ch\u00ec", icon: "\u270F\uFE0F" },
      { en: "ruler", vi: "th\u01b0\u1edbc k\u1ebb", icon: "\uD83D\uDCCF" },
      { en: "rubber", vi: "c\u1ee5c t\u1ea9y", icon: "\uD83E\uDDFD" },
      { en: "book", vi: "s\u00e1ch", icon: "\uD83D\uDCD8" },
      { en: "bag", vi: "c\u1eb7p s\u00e1ch", icon: "\uD83C\uDF92" },
      { en: "pencil case", vi: "h\u1ed9p b\u00fat", icon: "\uD83D\uDC5D" },
    ],
    patterns: [
      { en: "What's in your bag? There's a book in my bag.", vi: "Trong c\u1eb7p b\u1ea1n c\u00f3 g\u00ec? C\u00f3 m\u1ed9t quy\u1ec3n s\u00e1ch trong c\u1eb7p c\u1ee7a t\u1edb." },
    ],
    ext: [
      { en: "notebook", vi: "v\u1edf ghi ch\u00e9p", icon: "\uD83D\uDCD3" },
      { en: "glue stick", vi: "keo d\u00e1n", icon: "\uD83E\uDDF4" },
      { en: "highlighter", vi: "b\u00fat d\u1ea1 quang", icon: "\uD83D\uDD8D\uFE0F" },
    ],
    grammar: {
      title: "There is / There are",
      explain: "There is d\u00f9ng v\u1edbi danh t\u1eeb s\u1ed1 \u00edt, There are d\u00f9ng v\u1edbi danh t\u1eeb s\u1ed1 nhi\u1ec1u.",
      example: "There is a pen in my bag. There are two rulers on the desk.",
    },
    reading: {
      title: "My pencil case",
      text: "This is my pencil case. There is a pen, a pencil and a rubber in it. There are also two rulers. I keep it very tidy.",
      questions: [
        { q: "What is in the pencil case?", options: ["A pen, a pencil, a rubber", "A book and a bag", "A ruler only"], answer: 0 },
        { q: "How many rulers are there?", options: ["One", "Two", "Three"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'Ruler' ngh\u0129a l\u00e0 g\u00ec?", options: ["th\u01b0\u1edbc k\u1ebb", "c\u1ee5c t\u1ea9y", "b\u00fat ch\u00ec"], answer: 0 },
      { q: "'Rubber' ngh\u0129a l\u00e0 g\u00ec?", options: ["c\u1ee5c t\u1ea9y", "quy\u1ec3n s\u00e1ch", "c\u1eb7p s\u00e1ch"], answer: 0 },
      { q: "'Pencil case' ngh\u0129a l\u00e0 g\u00ec?", options: ["h\u1ed9p b\u00fat", "c\u1eb7p s\u00e1ch", "quy\u1ec3n v\u1edf"], answer: 0 },
      { q: "'Bag' ngh\u0129a l\u00e0 g\u00ec?", options: ["c\u1eb7p s\u00e1ch", "b\u00fat m\u1ef1c", "s\u00e1ch"], answer: 0 },
    ],
    quizExt: [
      { q: "'Notebook' ngh\u0129a l\u00e0 g\u00ec?", options: ["v\u1edf ghi ch\u00e9p", "b\u00fat ch\u00ec", "th\u01b0\u1edbc"], answer: 0 },
      { q: "D\u00f9ng There is hay There are v\u1edbi 'two rulers'?", options: ["There is", "There are", "There am"], answer: 1 },
      { q: "'Glue stick' ngh\u0129a l\u00e0 g\u00ec?", options: ["keo d\u00e1n", "b\u00fat d\u1ea1", "c\u1ee5c t\u1ea9y"], answer: 0 },
    ],
  },

  {
    id: "u9",
    group: 2,
    icon: "\uD83C\uDFA8",
    titleEn: "Unit 9: Colours",
    titleVi: "M\u00e0u s\u1eafc",
    core: [
      { en: "red", vi: "m\u00e0u \u0111\u1ecf", icon: "\uD83D\uDD34" },
      { en: "blue", vi: "m\u00e0u xanh d\u01b0\u01a1ng", icon: "\uD83D\uDD35" },
      { en: "yellow", vi: "m\u00e0u v\u00e0ng", icon: "\uD83D\uDFE1" },
      { en: "green", vi: "m\u00e0u xanh l\u00e1", icon: "\uD83D\uDFE2" },
      { en: "orange", vi: "m\u00e0u cam", icon: "\uD83D\uDFE0" },
      { en: "purple", vi: "m\u00e0u t\u00edm", icon: "\uD83D\uDFE3" },
      { en: "pink", vi: "m\u00e0u h\u1ed3ng", icon: "\uD83D\uDC97" },
      { en: "black", vi: "m\u00e0u \u0111en", icon: "\u26AB" },
      { en: "white", vi: "m\u00e0u tr\u1eafng", icon: "\u26AA" },
    ],
    patterns: [
      { en: "What colour is it? It's red.", vi: "N\u00f3 m\u00e0u g\u00ec? N\u00f3 m\u00e0u \u0111\u1ecf." },
    ],
    ext: [
      { en: "brown", vi: "m\u00e0u n\u00e2u", icon: "\uD83D\uDFE4" },
      { en: "grey", vi: "m\u00e0u x\u00e1m", icon: "\u26AB" },
      { en: "light blue", vi: "xanh nh\u1ea1t", icon: "\uD83D\uDD35" },
    ],
    grammar: {
      title: "T\u00ednh t\u1eeb \u0111\u1ee9ng tr\u01b0\u1edbc danh t\u1eeb",
      explain: "Trong ti\u1ebfng Anh, t\u00ednh t\u1eeb ch\u1ec9 m\u00e0u s\u1eafc \u0111\u1ee9ng tr\u01b0\u1edbc danh t\u1eeb, kh\u00e1c v\u1edbi ti\u1ebfng Vi\u1ec7t.",
      example: "a red apple (m\u1ed9t qu\u1ea3 t\u00e1o \u0111\u1ecf), a blue pen",
    },
    reading: {
      title: "My kite",
      text: "I have a kite. It is red and yellow. My friend's kite is blue and green. We fly our kites in the park every weekend.",
      questions: [
        { q: "What colour is the writer's kite?", options: ["Red and yellow", "Blue and green", "Purple and pink"], answer: 0 },
        { q: "Where do they fly kites?", options: ["At school", "In the park", "At home"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'Red' ngh\u0129a l\u00e0 g\u00ec?", options: ["m\u00e0u \u0111\u1ecf", "m\u00e0u xanh", "m\u00e0u v\u00e0ng"], answer: 0 },
      { q: "'Green' ngh\u0129a l\u00e0 g\u00ec?", options: ["m\u00e0u xanh l\u00e1", "m\u00e0u \u0111en", "m\u00e0u tr\u1eafng"], answer: 0 },
      { q: "'Yellow' ngh\u0129a l\u00e0 g\u00ec?", options: ["m\u00e0u v\u00e0ng", "m\u00e0u t\u00edm", "m\u00e0u cam"], answer: 0 },
      { q: "'Purple' ngh\u0129a l\u00e0 g\u00ec?", options: ["m\u00e0u t\u00edm", "m\u00e0u h\u1ed3ng", "m\u00e0u n\u00e2u"], answer: 0 },
    ],
    quizExt: [
      { q: "'Brown' ngh\u0129a l\u00e0 g\u00ec?", options: ["m\u00e0u n\u00e2u", "m\u00e0u x\u00e1m", "m\u00e0u \u0111en"], answer: 0 },
      { q: "T\u00ednh t\u1eeb m\u00e0u s\u1eafc \u0111\u1ee9ng \u1edf \u0111\u00e2u so v\u1edbi danh t\u1eeb?", options: ["Tr\u01b0\u1edbc danh t\u1eeb", "Sau danh t\u1eeb", "Kh\u00f4ng li\u00ean quan"], answer: 0 },
      { q: "'Grey' ngh\u0129a l\u00e0 g\u00ec?", options: ["m\u00e0u x\u00e1m", "m\u00e0u tr\u1eafng", "m\u00e0u \u0111en"], answer: 0 },
    ],
  },

  {
    id: "u10",
    group: 2,
    icon: "\uD83E\uDE80",
    titleEn: "Unit 10: Break time activities",
    titleVi: "Ho\u1ea1t \u0111\u1ed9ng gi\u1edd ra ch\u01a1i",
    core: [
      { en: "skipping rope", vi: "nh\u1ea3y d\u00e2y", icon: "\uD83E\uDE80" },
      { en: "playing marbles", vi: "ch\u01a1i b\u1eafn bi", icon: "\uD83D\uDD35" },
      { en: "chatting", vi: "tr\u00f2 chuy\u1ec7n", icon: "\uD83D\uDDE8\uFE0F" },
      { en: "playing hide and seek", vi: "ch\u01a1i tr\u1ed1n t\u00ecm", icon: "\uD83D\uDE48" },
      { en: "running", vi: "ch\u1ea1y", icon: "\uD83C\uDFC3" },
      { en: "jumping", vi: "nh\u1ea3y", icon: "\uD83E\uDE82" },
    ],
    patterns: [
      { en: "What are you doing? I'm skipping rope.", vi: "B\u1ea1n \u0111ang l\u00e0m g\u00ec? T\u1edb \u0111ang nh\u1ea3y d\u00e2y." },
    ],
    ext: [
      { en: "playing tag", vi: "ch\u01a1i \u0111u\u1ed5i b\u1eaft", icon: "\uD83C\uDFC3" },
      { en: "blowing bubbles", vi: "th\u1ed5i b\u00f3ng b\u00f3ng x\u00e0 ph\u00f2ng", icon: "\uD83E\uDEE7" },
    ],
    grammar: {
      title: "Th\u00ec hi\u1ec7n t\u1ea1i ti\u1ebfp di\u1ec5n",
      explain: "D\u00f9ng \u0111\u1ec3 n\u00f3i v\u1ec1 vi\u1ec7c \u0111ang di\u1ec5n ra ngay l\u00fac n\u00f3i. C\u1ea5u tr\u00fac: am/is/are + V-ing.",
      example: "I am running. She is jumping.",
    },
    reading: {
      title: "At break time",
      text: "It is break time. Nam is running with his friends. Lan is skipping rope. Two boys are playing marbles near the tree. Everyone is happy.",
      questions: [
        { q: "What is Nam doing?", options: ["Running", "Skipping rope", "Playing marbles"], answer: 0 },
        { q: "Who is skipping rope?", options: ["Nam", "Lan", "Two boys"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'Running' ngh\u0129a l\u00e0 g\u00ec?", options: ["ch\u1ea1y", "nh\u1ea3y", "tr\u00f2 chuy\u1ec7n"], answer: 0 },
      { q: "'Skipping rope' ngh\u0129a l\u00e0 g\u00ec?", options: ["nh\u1ea3y d\u00e2y", "b\u1eafn bi", "tr\u1ed1n t\u00ecm"], answer: 0 },
      { q: "'Chatting' ngh\u0129a l\u00e0 g\u00ec?", options: ["tr\u00f2 chuy\u1ec7n", "ch\u1ea1y", "nh\u1ea3y"], answer: 0 },
      { q: "'What are you doing?' h\u1ecfi v\u1ec1 \u0111i\u1ec1u g\u00ec?", options: ["Vi\u1ec7c \u0111ang l\u00e0m", "T\u00ean", "S\u1edf th\u00edch"], answer: 0 },
    ],
    quizExt: [
      { q: "'Playing tag' ngh\u0129a l\u00e0 g\u00ec?", options: ["ch\u01a1i \u0111u\u1ed5i b\u1eaft", "ch\u01a1i tr\u1ed1n t\u00ecm", "nh\u1ea3y d\u00e2y"], answer: 0 },
      { q: "Th\u00ec hi\u1ec7n t\u1ea1i ti\u1ebfp di\u1ec5n d\u00f9ng \u0111\u1ed9ng t\u1eeb th\u00eam g\u00ec?", options: ["-ing", "-ed", "-s"], answer: 0 },
      { q: "'Blowing bubbles' ngh\u0129a l\u00e0 g\u00ec?", options: ["th\u1ed5i b\u00f3ng b\u00f3ng x\u00e0 ph\u00f2ng", "ch\u01a1i bi", "nh\u1ea3y d\u00e2y"], answer: 0 },
    ],
  },

  {
    id: "u11",
    group: 3,
    icon: "\uD83D\uDC6A",
    titleEn: "Unit 11: My family",
    titleVi: "Gia \u0111\u00ecnh c\u1ee7a t\u00f4i",
    core: [
      { en: "father", vi: "b\u1ed1", icon: "\uD83D\uDC68" },
      { en: "mother", vi: "m\u1eb9", icon: "\uD83D\uDC69" },
      { en: "brother", vi: "anh/em trai", icon: "\uD83D\uDC66" },
      { en: "sister", vi: "ch\u1ecb/em g\u00e1i", icon: "\uD83D\uDC67" },
      { en: "grandfather", vi: "\u00f4ng", icon: "\uD83D\uDC74" },
      { en: "grandmother", vi: "b\u00e0", icon: "\uD83D\uDC75" },
      { en: "uncle", vi: "ch\u00fa/c\u1eadu/b\u00e1c trai", icon: "\uD83D\uDC68" },
      { en: "aunt", vi: "c\u00f4/d\u00ec/b\u00e1c g\u00e1i", icon: "\uD83D\uDC69" },
    ],
    patterns: [
      { en: "Who's this? This is my mother.", vi: "\u0110\u00e2y l\u00e0 ai? \u0110\u00e2y l\u00e0 m\u1eb9 c\u1ee7a t\u1edb." },
      { en: "How many people are there in your family?", vi: "Gia \u0111\u00ecnh b\u1ea1n c\u00f3 bao nhi\u00eau ng\u01b0\u1eddi?" },
    ],
    ext: [
      { en: "cousin", vi: "anh ch\u1ecb em h\u1ecd", icon: "\uD83E\uDDD1" },
      { en: "nephew", vi: "ch\u00e1u trai", icon: "\uD83D\uDC66" },
      { en: "niece", vi: "ch\u00e1u g\u00e1i", icon: "\uD83D\uDC67" },
    ],
    grammar: {
      title: "S\u1edf h\u1eefu c\u00e1ch 's",
      explain: "Th\u00eam 's sau danh t\u1eeb/t\u00ean ng\u01b0\u1eddi \u0111\u1ec3 ch\u1ec9 s\u1ef1 s\u1edf h\u1eefu.",
      example: "This is Nam's father. My mother's name is Hoa.",
    },
    reading: {
      title: "My big family",
      text: "There are six people in my family: my grandfather, my grandmother, my father, my mother, my sister and me. We live together and we are very happy.",
      questions: [
        { q: "How many people are there in the family?", options: ["Four", "Five", "Six"], answer: 2 },
        { q: "Who lives with the writer?", options: ["Grandparents, parents, sister", "Only parents", "Only grandparents"], answer: 0 },
      ],
    },
    quizCore: [
      { q: "'Father' ngh\u0129a l\u00e0 g\u00ec?", options: ["b\u1ed1", "m\u1eb9", "anh trai"], answer: 0 },
      { q: "'Grandmother' ngh\u0129a l\u00e0 g\u00ec?", options: ["b\u00e0", "\u00f4ng", "c\u00f4"], answer: 0 },
      { q: "'Sister' ngh\u0129a l\u00e0 g\u00ec?", options: ["ch\u1ecb/em g\u00e1i", "anh/em trai", "b\u00e1c"], answer: 0 },
      { q: "'How many people are there in your family?' h\u1ecfi v\u1ec1 g\u00ec?", options: ["S\u1ed1 ng\u01b0\u1eddi trong gia \u0111\u00ecnh", "T\u00ean gia \u0111\u00ecnh", "N\u01a1i \u1edf"], answer: 0 },
    ],
    quizExt: [
      { q: "'Cousin' ngh\u0129a l\u00e0 g\u00ec?", options: ["anh ch\u1ecb em h\u1ecd", "ch\u00e1u trai", "ch\u00e1u g\u00e1i"], answer: 0 },
      { q: "Th\u00eam g\u00ec \u0111\u1ec3 th\u1ec3 hi\u1ec7n s\u1edf h\u1eefu?", options: ["'s", "-ing", "-s"], answer: 0 },
      { q: "'Niece' ngh\u0129a l\u00e0 g\u00ec?", options: ["ch\u00e1u g\u00e1i", "ch\u00e1u trai", "em g\u00e1i"], answer: 0 },
    ],
  },

  {
    id: "u12",
    group: 3,
    icon: "\uD83D\uDC69\u200D\u2695\uFE0F",
    titleEn: "Unit 12: Jobs",
    titleVi: "Ngh\u1ec1 nghi\u1ec7p",
    core: [
      { en: "teacher", vi: "gi\u00e1o vi\u00ean", icon: "\uD83D\uDC69\u200D\uD83C\uDFEB" },
      { en: "doctor", vi: "b\u00e1c s\u0129", icon: "\uD83D\uDC69\u200D\u2695\uFE0F" },
      { en: "nurse", vi: "y t\u00e1", icon: "\uD83D\uDC69\u200D\u2695\uFE0F" },
      { en: "farmer", vi: "n\u00f4ng d\u00e2n", icon: "\uD83D\uDC68\u200D\uD83C\uDF3E" },
      { en: "worker", vi: "c\u00f4ng nh\u00e2n", icon: "\uD83D\uDC77" },
      { en: "driver", vi: "t\u00e0i x\u1ebf", icon: "\uD83D\uDE97" },
      { en: "cook", vi: "\u0111\u1ea7u b\u1ebfp", icon: "\uD83D\uDC68\u200D\uD83C\uDF73" },
    ],
    patterns: [
      { en: "What does your father do? He's a doctor.", vi: "B\u1ed1 b\u1ea1n l\u00e0m ngh\u1ec1 g\u00ec? Anh \u1ea5y l\u00e0 b\u00e1c s\u0129." },
    ],
    ext: [
      { en: "engineer", vi: "k\u1ef9 s\u01b0", icon: "\uD83D\uDC77" },
      { en: "pilot", vi: "phi c\u00f4ng", icon: "\u2708\uFE0F" },
      { en: "dentist", vi: "nha s\u0129", icon: "\uD83E\uDDB7" },
    ],
    grammar: {
      title: "C\u00e2u h\u1ecfi v\u1edbi What + do/does",
      explain: "D\u00f9ng do v\u1edbi I/you/we/they, does v\u1edbi he/she/it \u0111\u1ec3 h\u1ecfi v\u1ec1 ngh\u1ec1 nghi\u1ec7p ho\u1eb7c h\u00e0nh \u0111\u1ed9ng th\u01b0\u1eddng xuy\u00ean.",
      example: "What does she do? She is a nurse.",
    },
    reading: {
      title: "My parents' jobs",
      text: "My father is a doctor. He works at a hospital. My mother is a teacher. She works at a primary school. I am proud of them.",
      questions: [
        { q: "What is the father's job?", options: ["Doctor", "Teacher", "Farmer"], answer: 0 },
        { q: "Where does the mother work?", options: ["Hospital", "Primary school", "Farm"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'Doctor' ngh\u0129a l\u00e0 g\u00ec?", options: ["b\u00e1c s\u0129", "gi\u00e1o vi\u00ean", "y t\u00e1"], answer: 0 },
      { q: "'Teacher' ngh\u0129a l\u00e0 g\u00ec?", options: ["gi\u00e1o vi\u00ean", "n\u00f4ng d\u00e2n", "t\u00e0i x\u1ebf"], answer: 0 },
      { q: "'Farmer' ngh\u0129a l\u00e0 g\u00ec?", options: ["n\u00f4ng d\u00e2n", "\u0111\u1ea7u b\u1ebfp", "c\u00f4ng nh\u00e2n"], answer: 0 },
      { q: "'What does your father do?' h\u1ecfi v\u1ec1 g\u00ec?", options: ["Ngh\u1ec1 nghi\u1ec7p", "S\u1edf th\u00edch", "Tu\u1ed5i"], answer: 0 },
    ],
    quizExt: [
      { q: "'Engineer' ngh\u0129a l\u00e0 g\u00ec?", options: ["k\u1ef9 s\u01b0", "phi c\u00f4ng", "nha s\u0129"], answer: 0 },
      { q: "D\u00f9ng do hay does v\u1edbi 'she'?", options: ["do", "does", "did"], answer: 1 },
      { q: "'Dentist' ngh\u0129a l\u00e0 g\u00ec?", options: ["nha s\u0129", "b\u00e1c s\u0129", "y t\u00e1"], answer: 0 },
    ],
  },

  {
    id: "u13",
    group: 3,
    icon: "\uD83C\uDFE0",
    titleEn: "Unit 13: My house",
    titleVi: "Nh\u00e0 c\u1ee7a t\u00f4i",
    core: [
      { en: "living room", vi: "ph\u00f2ng kh\u00e1ch", icon: "\uD83D\uDECB\uFE0F" },
      { en: "kitchen", vi: "nh\u00e0 b\u1ebfp", icon: "\uD83C\uDF73" },
      { en: "bathroom", vi: "ph\u00f2ng t\u1eafm", icon: "\uD83D\uDEBF" },
      { en: "bedroom", vi: "ph\u00f2ng ng\u1ee7", icon: "\uD83D\uDECF\uFE0F" },
      { en: "garden", vi: "khu v\u01b0\u1eddn", icon: "\uD83C\uDF3B" },
      { en: "yard", vi: "s\u00e2n", icon: "\uD83C\uDFE1" },
      { en: "roof", vi: "m\u00e1i nh\u00e0", icon: "\uD83C\uDFE0" },
      { en: "door", vi: "c\u1eeda ra v\u00e0o", icon: "\uD83D\uDEAA" },
    ],
    patterns: [
      { en: "Where do you live? I live in a small house.", vi: "B\u1ea1n s\u1ed1ng \u1edf \u0111\u00e2u? T\u1edb s\u1ed1ng trong m\u1ed9t ng\u00f4i nh\u00e0 nh\u1ecf." },
      { en: "How many rooms are there?", vi: "C\u00f3 bao nhi\u00eau ph\u00f2ng?" },
    ],
    ext: [
      { en: "balcony", vi: "ban c\u00f4ng", icon: "\uD83C\uDFE2" },
      { en: "staircase", vi: "c\u1ea7u thang", icon: "\uD83E\uDE9C" },
      { en: "fence", vi: "h\u00e0ng r\u00e0o", icon: "\uD83E\uDDF1" },
    ],
    grammar: {
      title: "There is/are v\u1edbi c\u00e1c ph\u00f2ng trong nh\u00e0",
      explain: "D\u00f9ng There is/are \u0111\u1ec3 mi\u00eau t\u1ea3 c\u00e1c ph\u00f2ng, \u0111\u1ed3 v\u1eadt trong nh\u00e0.",
      example: "There are three bedrooms in my house.",
    },
    reading: {
      title: "My new house",
      text: "My new house has three bedrooms, a living room and a kitchen. There is a small garden in front of the house. I love my new house.",
      questions: [
        { q: "How many bedrooms are there?", options: ["Two", "Three", "Four"], answer: 1 },
        { q: "Where is the garden?", options: ["Behind the house", "In front of the house", "Inside the kitchen"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'Kitchen' ngh\u0129a l\u00e0 g\u00ec?", options: ["nh\u00e0 b\u1ebfp", "ph\u00f2ng ng\u1ee7", "ph\u00f2ng kh\u00e1ch"], answer: 0 },
      { q: "'Bathroom' ngh\u0129a l\u00e0 g\u00ec?", options: ["ph\u00f2ng t\u1eafm", "ph\u00f2ng ng\u1ee7", "s\u00e2n"], answer: 0 },
      { q: "'Living room' ngh\u0129a l\u00e0 g\u00ec?", options: ["ph\u00f2ng kh\u00e1ch", "nh\u00e0 b\u1ebfp", "m\u00e1i nh\u00e0"], answer: 0 },
      { q: "'Door' ngh\u0129a l\u00e0 g\u00ec?", options: ["c\u1eeda", "c\u1eeda s\u1ed5", "m\u00e1i nh\u00e0"], answer: 0 },
    ],
    quizExt: [
      { q: "'Balcony' ngh\u0129a l\u00e0 g\u00ec?", options: ["ban c\u00f4ng", "c\u1ea7u thang", "h\u00e0ng r\u00e0o"], answer: 0 },
      { q: "'Staircase' ngh\u0129a l\u00e0 g\u00ec?", options: ["c\u1ea7u thang", "s\u00e2n", "m\u00e1i nh\u00e0"], answer: 0 },
      { q: "'Fence' ngh\u0129a l\u00e0 g\u00ec?", options: ["h\u00e0ng r\u00e0o", "ban c\u00f4ng", "c\u1eeda"], answer: 0 },
    ],
  },

  {
    id: "u14",
    group: 3,
    icon: "\uD83D\uDECF\uFE0F",
    titleEn: "Unit 14: My bedroom",
    titleVi: "Ph\u00f2ng ng\u1ee7 c\u1ee7a t\u00f4i",
    core: [
      { en: "bed", vi: "gi\u01b0\u1eddng", icon: "\uD83D\uDECF\uFE0F" },
      { en: "wardrobe", vi: "t\u1ee7 qu\u1ea7n \u00e1o", icon: "\uD83D\uDEAA" },
      { en: "desk", vi: "b\u00e0n h\u1ecdc", icon: "\uD83D\uDCDA" },
      { en: "chair", vi: "gh\u1ebf", icon: "\uD83E\uDE91" },
      { en: "lamp", vi: "\u0111\u00e8n", icon: "\uD83D\uDCA1" },
      { en: "window", vi: "c\u1eeda s\u1ed5", icon: "\uD83E\uDE9F" },
      { en: "shelf", vi: "gi\u00e1 s\u00e1ch", icon: "\uD83D\uDCDA" },
    ],
    patterns: [
      { en: "What's in your bedroom? There's a bed in my bedroom.", vi: "Trong ph\u00f2ng ng\u1ee7 c\u1ee7a b\u1ea1n c\u00f3 g\u00ec? C\u00f3 m\u1ed9t chi\u1ebfc gi\u01b0\u1eddng." },
    ],
    ext: [
      { en: "bookshelf", vi: "k\u1ec7 s\u00e1ch", icon: "\uD83D\uDCDA" },
      { en: "curtain", vi: "r\u00e8m c\u1eeda", icon: "\uD83E\uDE9F" },
      { en: "mirror", vi: "g\u01b0\u01a1ng", icon: "\uD83E\uDE9E" },
    ],
    grammar: {
      title: "Gi\u1edbi t\u1eeb v\u1ecb tr\u00ed on / under / in",
      explain: "on = tr\u00ean, under = d\u01b0\u1edbi, in = trong. D\u00f9ng \u0111\u1ec3 n\u00f3i v\u1ecb tr\u00ed \u0111\u1ed3 v\u1eadt.",
      example: "The book is on the desk. The shoes are under the bed.",
    },
    reading: {
      title: "My tidy room",
      text: "My bedroom is small but tidy. There is a bed, a desk and a wardrobe. My books are on the shelf. My lamp is on the desk.",
      questions: [
        { q: "Where are the books?", options: ["On the shelf", "Under the bed", "In the wardrobe"], answer: 0 },
        { q: "Where is the lamp?", options: ["On the bed", "On the desk", "Under the desk"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'Bed' ngh\u0129a l\u00e0 g\u00ec?", options: ["gi\u01b0\u1eddng", "gh\u1ebf", "b\u00e0n"], answer: 0 },
      { q: "'Wardrobe' ngh\u0129a l\u00e0 g\u00ec?", options: ["t\u1ee7 qu\u1ea7n \u00e1o", "gi\u00e1 s\u00e1ch", "c\u1eeda s\u1ed5"], answer: 0 },
      { q: "'Desk' ngh\u0129a l\u00e0 g\u00ec?", options: ["b\u00e0n h\u1ecdc", "gi\u01b0\u1eddng", "\u0111\u00e8n"], answer: 0 },
      { q: "'Window' ngh\u0129a l\u00e0 g\u00ec?", options: ["c\u1eeda s\u1ed5", "c\u1eeda ra v\u00e0o", "t\u01b0\u1eddng"], answer: 0 },
    ],
    quizExt: [
      { q: "'Mirror' ngh\u0129a l\u00e0 g\u00ec?", options: ["g\u01b0\u01a1ng", "r\u00e8m c\u1eeda", "k\u1ec7 s\u00e1ch"], answer: 0 },
      { q: "'On the desk' ngh\u0129a l\u00e0 g\u00ec?", options: ["tr\u00ean b\u00e0n", "d\u01b0\u1edbi b\u00e0n", "trong b\u00e0n"], answer: 0 },
      { q: "'Curtain' ngh\u0129a l\u00e0 g\u00ec?", options: ["r\u00e8m c\u1eeda", "g\u01b0\u01a1ng", "\u0111\u00e8n"], answer: 0 },
    ],
  },

  {
    id: "u15",
    group: 3,
    icon: "\uD83C\uDF7D\uFE0F",
    titleEn: "Unit 15: At the dining table",
    titleVi: "Tr\u00ean b\u00e0n \u0103n",
    core: [
      { en: "rice", vi: "c\u01a1m", icon: "\uD83C\uDF5A" },
      { en: "chicken", vi: "th\u1ecbt g\u00e0", icon: "\uD83C\uDF57" },
      { en: "fish", vi: "c\u00e1", icon: "\uD83D\uDC1F" },
      { en: "vegetables", vi: "rau c\u1ee7", icon: "\uD83E\uDD66" },
      { en: "chopsticks", vi: "\u0111\u0169a", icon: "\uD83E\uDE79" },
      { en: "spoon", vi: "th\u00eca", icon: "\uD83E\uDD44" },
      { en: "bowl", vi: "b\u00e1t", icon: "\uD83C\uDF5C" },
      { en: "plate", vi: "\u0111\u0129a", icon: "\uD83C\uDF7D\uFE0F" },
    ],
    patterns: [
      { en: "What would you like? I'd like some rice.", vi: "B\u1ea1n mu\u1ed1n \u0103n g\u00ec? T\u1edb mu\u1ed1n m\u1ed9t \u00edt c\u01a1m." },
    ],
    ext: [
      { en: "noodles", vi: "m\u00ec/b\u00fan", icon: "\uD83C\uDF5C" },
      { en: "soup", vi: "canh", icon: "\uD83C\uDF72" },
      { en: "fork", vi: "n\u0129a", icon: "\uD83C\uDF74" },
    ],
    grammar: {
      title: "D\u00f9ng 'some' v\u1edbi danh t\u1eeb kh\u00f4ng \u0111\u1ebfm \u0111\u01b0\u1ee3c",
      explain: "V\u1edbi \u0111\u1ed3 \u0103n kh\u00f4ng \u0111\u1ebfm \u0111\u01b0\u1ee3c nh\u01b0 rice, water, ta d\u00f9ng some thay v\u00ec s\u1ed1 \u0111\u1ebfm.",
      example: "I'd like some rice. Can I have some soup?",
    },
    reading: {
      title: "Family dinner",
      text: "It is dinner time. There is rice, fish and vegetables on the table. Everyone uses chopsticks. The food is delicious and the family is happy together.",
      questions: [
        { q: "What is on the table?", options: ["Rice, fish, vegetables", "Bread and milk", "Noodles and soup"], answer: 0 },
        { q: "What do they use to eat?", options: ["Forks", "Chopsticks", "Spoons only"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'Rice' ngh\u0129a l\u00e0 g\u00ec?", options: ["c\u01a1m", "c\u00e1", "th\u1ecbt g\u00e0"], answer: 0 },
      { q: "'Chopsticks' ngh\u0129a l\u00e0 g\u00ec?", options: ["\u0111\u0169a", "th\u00eca", "b\u00e1t"], answer: 0 },
      { q: "'Vegetables' ngh\u0129a l\u00e0 g\u00ec?", options: ["rau c\u1ee7", "tr\u00e1i c\u00e2y", "th\u1ecbt"], answer: 0 },
      { q: "'Bowl' ngh\u0129a l\u00e0 g\u00ec?", options: ["b\u00e1t", "\u0111\u0129a", "th\u00eca"], answer: 0 },
    ],
    quizExt: [
      { q: "'Noodles' ngh\u0129a l\u00e0 g\u00ec?", options: ["m\u00ec/b\u00fan", "canh", "c\u01a1m"], answer: 0 },
      { q: "D\u00f9ng t\u1eeb g\u00ec v\u1edbi danh t\u1eeb kh\u00f4ng \u0111\u1ebfm \u0111\u01b0\u1ee3c?", options: ["some", "a", "an"], answer: 0 },
      { q: "'Soup' ngh\u0129a l\u00e0 g\u00ec?", options: ["canh", "c\u00e1", "rau"], answer: 0 },
    ],
  },

  {
    id: "u16",
    group: 4,
    icon: "\uD83D\uDC36",
    titleEn: "Unit 16: My pets",
    titleVi: "Th\u00fa c\u01b0ng c\u1ee7a t\u00f4i",
    core: [
      { en: "dog", vi: "con ch\u00f3", icon: "\uD83D\uDC36" },
      { en: "cat", vi: "con m\u00e8o", icon: "\uD83D\uDC31" },
      { en: "fish", vi: "con c\u00e1", icon: "\uD83D\uDC20" },
      { en: "bird", vi: "con chim", icon: "\uD83D\uDC26" },
      { en: "rabbit", vi: "con th\u1ecf", icon: "\uD83D\uDC30" },
      { en: "hamster", vi: "chu\u1ed9t hamster", icon: "\uD83D\uDC39" },
      { en: "turtle", vi: "con r\u00f9a", icon: "\uD83D\uDC22" },
    ],
    patterns: [
      { en: "Do you have a pet? Yes, I have a dog.", vi: "B\u1ea1n c\u00f3 th\u00fa c\u01b0ng kh\u00f4ng? C\u00f3, t\u1edb c\u00f3 m\u1ed9t con ch\u00f3." },
      { en: "What can it do? It can swim.", vi: "N\u00f3 c\u00f3 th\u1ec3 l\u00e0m g\u00ec? N\u00f3 c\u00f3 th\u1ec3 b\u01a1i." },
    ],
    ext: [
      { en: "guinea pig", vi: "chu\u1ed9t l\u00ecnh", icon: "\uD83D\uDC39" },
      { en: "goldfish", vi: "c\u00e1 v\u00e0ng", icon: "\uD83D\uDC20" },
      { en: "parrot", vi: "v\u1eb9t", icon: "\uD83E\uDD9C" },
    ],
    grammar: {
      title: "\u0110\u1ed9ng t\u1eeb khi\u1ebft can",
      explain: "Can d\u00f9ng \u0111\u1ec3 n\u00f3i v\u1ec1 kh\u1ea3 n\u0103ng. Sau can l\u00e0 \u0111\u1ed9ng t\u1eeb nguy\u00ean m\u1eabu, kh\u00f4ng th\u00eam -s.",
      example: "A fish can swim. A bird can fly.",
    },
    reading: {
      title: "Tom's pet",
      text: "Tom has a pet dog. Its name is Rex. Rex can run very fast and can catch a ball. Tom plays with Rex every afternoon.",
      questions: [
        { q: "What is the dog's name?", options: ["Tom", "Rex", "Max"], answer: 1 },
        { q: "What can Rex do?", options: ["Swim", "Run fast and catch a ball", "Fly"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'Rabbit' ngh\u0129a l\u00e0 g\u00ec?", options: ["con th\u1ecf", "con m\u00e8o", "con chim"], answer: 0 },
      { q: "'Turtle' ngh\u0129a l\u00e0 g\u00ec?", options: ["con r\u00f9a", "con c\u00e1", "con chu\u1ed9t"], answer: 0 },
      { q: "'Do you have a pet?' h\u1ecfi v\u1ec1 g\u00ec?", options: ["Th\u00fa c\u01b0ng", "Gia \u0111\u00ecnh", "\u0110\u1ed3 ch\u01a1i"], answer: 0 },
      { q: "'Bird' ngh\u0129a l\u00e0 g\u00ec?", options: ["con chim", "con c\u00e1", "con ch\u00f3"], answer: 0 },
    ],
    quizExt: [
      { q: "'Goldfish' ngh\u0129a l\u00e0 g\u00ec?", options: ["c\u00e1 v\u00e0ng", "chu\u1ed9t l\u00ecnh", "v\u1eb9t"], answer: 0 },
      { q: "Sau 'can' d\u00f9ng d\u1ea1ng \u0111\u1ed9ng t\u1eeb n\u00e0o?", options: ["Nguy\u00ean m\u1eabu", "Th\u00eam -s", "Th\u00eam -ing"], answer: 0 },
      { q: "'Parrot' ngh\u0129a l\u00e0 g\u00ec?", options: ["v\u1eb9t", "th\u1ecf", "r\u00f9a"], answer: 0 },
    ],
  },

  {
    id: "u17",
    group: 4,
    icon: "\uD83E\uDDF8",
    titleEn: "Unit 17: Our toys",
    titleVi: "\u0110\u1ed3 ch\u01a1i c\u1ee7a ch\u00fang ta",
    core: [
      { en: "doll", vi: "con b\u00fap b\u00ea", icon: "\uD83E\uDE86" },
      { en: "ball", vi: "qu\u1ea3 b\u00f3ng", icon: "\u26BD" },
      { en: "kite", vi: "con di\u1ec1u", icon: "\uD83E\uDE81" },
      { en: "robot", vi: "ng\u01b0\u1eddi m\u00e1y", icon: "\uD83E\uDD16" },
      { en: "teddy bear", vi: "g\u1ea5u b\u00f4ng", icon: "\uD83E\uDDF8" },
      { en: "toy car", vi: "\u00f4 t\u00f4 \u0111\u1ed3 ch\u01a1i", icon: "\uD83D\uDE97" },
      { en: "blocks", vi: "kh\u1ed1i x\u1ebfp h\u00ecnh", icon: "\uD83E\uDDF1" },
    ],
    patterns: [
      { en: "What toys do you have? I have a robot.", vi: "B\u1ea1n c\u00f3 nh\u1eefng \u0111\u1ed3 ch\u01a1i n\u00e0o? T\u1edb c\u00f3 m\u1ed9t ng\u01b0\u1eddi m\u00e1y." },
    ],
    ext: [
      { en: "puzzle", vi: "tr\u00f2 ch\u01a1i x\u1ebfp h\u00ecnh", icon: "\uD83E\uDDE9" },
      { en: "board game", vi: "tr\u00f2 ch\u01a1i c\u1edd b\u00e0n", icon: "\uD83C\uDFB2" },
      { en: "yo-yo", vi: "con quay yo-yo", icon: "\uD83E\uDE80" },
    ],
    grammar: {
      title: "Danh t\u1eeb s\u1ed1 nhi\u1ec1u th\u00eam -s",
      explain: "Ph\u1ea7n l\u1edbn danh t\u1eeb s\u1ed1 nhi\u1ec1u th\u00eam \u0111u\u00f4i -s v\u00e0o cu\u1ed1i t\u1eeb.",
      example: "one doll -> two dolls, one ball -> three balls",
    },
    reading: {
      title: "My toy box",
      text: "I have a big toy box. There are two dolls, a robot and many blocks in it. My favourite toy is my teddy bear. I sleep with it every night.",
      questions: [
        { q: "How many dolls are there?", options: ["One", "Two", "Three"], answer: 1 },
        { q: "What is the writer's favourite toy?", options: ["Robot", "Teddy bear", "Blocks"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'Doll' ngh\u0129a l\u00e0 g\u00ec?", options: ["con b\u00fap b\u00ea", "g\u1ea5u b\u00f4ng", "ng\u01b0\u1eddi m\u00e1y"], answer: 0 },
      { q: "'Kite' ngh\u0129a l\u00e0 g\u00ec?", options: ["con di\u1ec1u", "qu\u1ea3 b\u00f3ng", "\u00f4 t\u00f4"], answer: 0 },
      { q: "'Teddy bear' ngh\u0129a l\u00e0 g\u00ec?", options: ["g\u1ea5u b\u00f4ng", "b\u00fap b\u00ea", "ng\u01b0\u1eddi m\u00e1y"], answer: 0 },
      { q: "'Blocks' ngh\u0129a l\u00e0 g\u00ec?", options: ["kh\u1ed1i x\u1ebfp h\u00ecnh", "qu\u1ea3 b\u00f3ng", "\u00f4 t\u00f4"], answer: 0 },
    ],
    quizExt: [
      { q: "'Puzzle' ngh\u0129a l\u00e0 g\u00ec?", options: ["tr\u00f2 x\u1ebfp h\u00ecnh", "c\u1edd b\u00e0n", "con quay"], answer: 0 },
      { q: "Danh t\u1eeb s\u1ed1 nhi\u1ec1u th\u01b0\u1eddng th\u00eam g\u00ec?", options: ["-s", "-ing", "-ed"], answer: 0 },
      { q: "'Board game' ngh\u0129a l\u00e0 g\u00ec?", options: ["tr\u00f2 ch\u01a1i c\u1edd b\u00e0n", "b\u00fap b\u00ea", "di\u1ec1u"], answer: 0 },
    ],
  },

  {
    id: "u18",
    group: 4,
    icon: "\uD83C\uDFB8",
    titleEn: "Unit 18: Playing and doing",
    titleVi: "Ch\u01a1i v\u00e0 l\u00e0m",
    core: [
      { en: "play football", vi: "ch\u01a1i b\u00f3ng \u0111\u00e1", icon: "\u26BD" },
      { en: "play badminton", vi: "ch\u01a1i c\u1ea7u l\u00f4ng", icon: "\uD83C\uDFF8" },
      { en: "play chess", vi: "ch\u01a1i c\u1edd", icon: "\u265F\uFE0F" },
      { en: "do homework", vi: "l\u00e0m b\u00e0i t\u1eadp v\u1ec1 nh\u00e0", icon: "\uD83D\uDCDD" },
      { en: "do the dishes", vi: "r\u1eeda b\u00e1t", icon: "\uD83C\uDF7D\uFE0F" },
      { en: "ride a bike", vi: "\u0111\u1ea1p xe \u0111\u1ea1p", icon: "\uD83D\uDEB2" },
    ],
    patterns: [
      { en: "What do you do after school? I do my homework.", vi: "Sau gi\u1edd h\u1ecdc b\u1ea1n l\u00e0m g\u00ec? T\u1edb l\u00e0m b\u00e0i t\u1eadp v\u1ec1 nh\u00e0." },
    ],
    ext: [
      { en: "do exercise", vi: "t\u1eadp th\u1ec3 d\u1ee5c", icon: "\uD83E\uDD38" },
      { en: "play the piano", vi: "ch\u01a1i \u0111\u00e0n piano", icon: "\uD83C\uDFB9" },
    ],
    grammar: {
      title: "K\u1ebft h\u1ee3p play v\u00e0 do",
      explain: "D\u00f9ng play v\u1edbi c\u00e1c m\u00f4n th\u1ec3 thao/nh\u1ea1c c\u1ee5, d\u00f9ng do v\u1edbi c\u00f4ng vi\u1ec7c nh\u00e0/vi\u1ec7c v\u1eb7t.",
      example: "play football, play the piano / do homework, do the dishes",
    },
    reading: {
      title: "After school",
      text: "After school, Nam plays football with his friends. Then he does his homework. In the evening, he helps his mother do the dishes.",
      questions: [
        { q: "What does Nam do first after school?", options: ["Plays football", "Does homework", "Rides a bike"], answer: 0 },
        { q: "What does Nam do in the evening?", options: ["Plays chess", "Does the dishes", "Plays badminton"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'Do homework' ngh\u0129a l\u00e0 g\u00ec?", options: ["l\u00e0m b\u00e0i t\u1eadp v\u1ec1 nh\u00e0", "ch\u01a1i b\u00f3ng", "r\u1eeda b\u00e1t"], answer: 0 },
      { q: "'Ride a bike' ngh\u0129a l\u00e0 g\u00ec?", options: ["\u0111\u1ea1p xe", "ch\u1ea1y b\u1ed9", "b\u01a1i"], answer: 0 },
      { q: "'Play chess' ngh\u0129a l\u00e0 g\u00ec?", options: ["ch\u01a1i c\u1edd", "ch\u01a1i c\u1ea7u l\u00f4ng", "ch\u01a1i b\u00f3ng"], answer: 0 },
      { q: "'Do the dishes' ngh\u0129a l\u00e0 g\u00ec?", options: ["r\u1eeda b\u00e1t", "n\u1ea5u c\u01a1m", "qu\u00e9t nh\u00e0"], answer: 0 },
    ],
    quizExt: [
      { q: "\u0110\u1ed9ng t\u1eeb n\u00e0o \u0111i v\u1edbi 'the piano'?", options: ["play", "do", "go"], answer: 0 },
      { q: "\u0110\u1ed9ng t\u1eeb n\u00e0o \u0111i v\u1edbi 'homework'?", options: ["do", "play", "go"], answer: 0 },
      { q: "'Do exercise' ngh\u0129a l\u00e0 g\u00ec?", options: ["t\u1eadp th\u1ec3 d\u1ee5c", "ch\u01a1i \u0111\u00e0n", "\u0111\u1ea1p xe"], answer: 0 },
    ],
  },

  {
    id: "u19",
    group: 4,
    icon: "\uD83C\uDFD5\uFE0F",
    titleEn: "Unit 19: Outdoor activities",
    titleVi: "Ho\u1ea1t \u0111\u1ed9ng ngo\u00e0i tr\u1eddi",
    core: [
      { en: "flying a kite", vi: "th\u1ea3 di\u1ec1u", icon: "\uD83E\uDE81" },
      { en: "fishing", vi: "c\u00e2u c\u00e1", icon: "\uD83C\uDFA3" },
      { en: "camping", vi: "c\u1eafm tr\u1ea1i", icon: "\u26FA" },
      { en: "picnicking", vi: "\u0111i d\u00e3 ngo\u1ea1i", icon: "\uD83E\uDDFA" },
      { en: "cycling", vi: "\u0111\u1ea1p xe", icon: "\uD83D\uDEB2" },
      { en: "planting trees", vi: "tr\u1ed3ng c\u00e2y", icon: "\uD83C\uDF31" },
    ],
    patterns: [
      { en: "What are you going to do? I'm going to go camping.", vi: "B\u1ea1n s\u1ebd l\u00e0m g\u00ec? T\u1edb s\u1ebd \u0111i c\u1eafm tr\u1ea1i." },
    ],
    ext: [
      { en: "going hiking", vi: "\u0111i b\u1ed9 \u0111\u01b0\u1eddng d\u00e0i", icon: "\uD83E\uDDBE" },
      { en: "birdwatching", vi: "ng\u1eafm chim", icon: "\uD83D\uDD2D" },
    ],
    grammar: {
      title: "Th\u00ec t\u01b0\u01a1ng lai g\u1ea7n: going to",
      explain: "D\u00f9ng am/is/are + going to + \u0111\u1ed9ng t\u1eeb nguy\u00ean m\u1eabu \u0111\u1ec3 n\u00f3i v\u1ec1 d\u1ef1 \u0111\u1ecbnh trong t\u01b0\u01a1ng lai.",
      example: "I am going to fly a kite this weekend.",
    },
    reading: {
      title: "Weekend plan",
      text: "This weekend, my family is going to go camping. We are going to go fishing and plant some trees. I am very excited about the trip.",
      questions: [
        { q: "What is the family going to do?", options: ["Go camping", "Go swimming", "Go shopping"], answer: 0 },
        { q: "How does the writer feel?", options: ["Bored", "Excited", "Tired"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'Fishing' ngh\u0129a l\u00e0 g\u00ec?", options: ["c\u00e2u c\u00e1", "b\u01a1i l\u1ed9i", "th\u1ea3 di\u1ec1u"], answer: 0 },
      { q: "'Camping' ngh\u0129a l\u00e0 g\u00ec?", options: ["c\u1eafm tr\u1ea1i", "d\u00e3 ngo\u1ea1i", "\u0111\u1ea1p xe"], answer: 0 },
      { q: "'Flying a kite' ngh\u0129a l\u00e0 g\u00ec?", options: ["th\u1ea3 di\u1ec1u", "c\u00e2u c\u00e1", "tr\u1ed3ng c\u00e2y"], answer: 0 },
      { q: "'I'm going to' d\u00f9ng \u0111\u1ec3 n\u00f3i v\u1ec1 \u0111i\u1ec1u g\u00ec?", options: ["D\u1ef1 \u0111\u1ecbnh t\u01b0\u01a1ng lai", "\u0110i\u1ec1u \u0111\u00e3 x\u1ea3y ra", "Th\u00f3i quen"], answer: 0 },
    ],
    quizExt: [
      { q: "'Going hiking' ngh\u0129a l\u00e0 g\u00ec?", options: ["\u0111i b\u1ed9 \u0111\u01b0\u1eddng d\u00e0i", "c\u00e2u c\u00e1", "c\u1eafm tr\u1ea1i"], answer: 0 },
      { q: "'Birdwatching' ngh\u0129a l\u00e0 g\u00ec?", options: ["ng\u1eafm chim", "th\u1ea3 di\u1ec1u", "tr\u1ed3ng c\u00e2y"], answer: 0 },
      { q: "C\u1ea5u tr\u00fac going to l\u00e0 g\u00ec?", options: ["am/is/are + going to + V", "will + V", "V-ed"], answer: 0 },
    ],
  },

  {
    id: "u20",
    group: 4,
    icon: "\uD83E\uDD81",
    titleEn: "Unit 20: At the zoo",
    titleVi: "\u1de6 s\u1edf th\u00fa",
    core: [
      { en: "tiger", vi: "con h\u1ed5", icon: "\uD83D\uDC2F" },
      { en: "lion", vi: "con s\u01b0 t\u1eed", icon: "\uD83E\uDD81" },
      { en: "elephant", vi: "con voi", icon: "\uD83D\uDC18" },
      { en: "monkey", vi: "con kh\u1ec9", icon: "\uD83D\uDC12" },
      { en: "giraffe", vi: "con h\u01b0\u01a1u cao c\u1ed5", icon: "\uD83E\uDD92" },
      { en: "zebra", vi: "con ng\u1ef1a v\u1eb1n", icon: "\uD83E\uDD93" },
      { en: "bear", vi: "con g\u1ea5u", icon: "\uD83D\uDC3B" },
      { en: "peacock", vi: "con c\u00f4ng", icon: "\uD83E\uDD9A" },
    ],
    patterns: [
      { en: "What can you see? I can see a tiger.", vi: "B\u1ea1n c\u00f3 th\u1ec3 nh\u00ecn th\u1ea5y g\u00ec? T\u1edb c\u00f3 th\u1ec3 th\u1ea5y m\u1ed9t con h\u1ed5." },
      { en: "What's it doing? It's climbing a tree.", vi: "N\u00f3 \u0111ang l\u00e0m g\u00ec? N\u00f3 \u0111ang tr\u00e8o c\u00e2y." },
    ],
    ext: [
      { en: "crocodile", vi: "con c\u00e1 s\u1ea5u", icon: "\uD83D\uDC0A" },
      { en: "kangaroo", vi: "chu\u1ed9t t\u00fai", icon: "\uD83E\uDD98" },
      { en: "panda", vi: "g\u1ea5u tr\u00fac", icon: "\uD83D\uDC3C" },
    ],
    grammar: {
      title: "\u00d4n t\u1eadp: can v\u00e0 th\u00ec hi\u1ec7n t\u1ea1i ti\u1ebfp di\u1ec5n",
      explain: "D\u00f9ng can \u0111\u1ec3 n\u00f3i kh\u1ea3 n\u0103ng nh\u00ecn th\u1ea5y/l\u00e0m g\u00ec, d\u00f9ng am/is/are+V-ing \u0111\u1ec3 n\u00f3i vi\u1ec7c \u0111ang di\u1ec5n ra.",
      example: "I can see a monkey. It is climbing a tree.",
    },
    reading: {
      title: "A day at the zoo",
      text: "Last Sunday, my class visited the zoo. We saw tigers, elephants and monkeys. The monkeys were climbing trees. It was a wonderful day.",
      questions: [
        { q: "What animals did they see?", options: ["Tigers, elephants, monkeys", "Only tigers", "Fish and birds"], answer: 0 },
        { q: "What were the monkeys doing?", options: ["Sleeping", "Climbing trees", "Eating"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'Tiger' ngh\u0129a l\u00e0 g\u00ec?", options: ["con h\u1ed5", "con s\u01b0 t\u1eed", "con voi"], answer: 0 },
      { q: "'Elephant' ngh\u0129a l\u00e0 g\u00ec?", options: ["con voi", "con kh\u1ec9", "con g\u1ea5u"], answer: 0 },
      { q: "'Monkey' ngh\u0129a l\u00e0 g\u00ec?", options: ["con kh\u1ec9", "con ng\u1ef1a v\u1eb1n", "con c\u00f4ng"], answer: 0 },
      { q: "'What can you see?' h\u1ecfi v\u1ec1 g\u00ec?", options: ["\u0110i\u1ec1u nh\u00ecn th\u1ea5y \u0111\u01b0\u1ee3c", "T\u00ean con v\u1eadt y\u00eau th\u00edch", "N\u01a1i \u1edf"], answer: 0 },
    ],
    quizExt: [
      { q: "'Crocodile' ngh\u0129a l\u00e0 g\u00ec?", options: ["c\u00e1 s\u1ea5u", "chu\u1ed9t t\u00fai", "g\u1ea5u tr\u00fac"], answer: 0 },
      { q: "'Panda' ngh\u0129a l\u00e0 g\u00ec?", options: ["g\u1ea5u tr\u00fac", "s\u01b0 t\u1eed", "h\u01b0\u01a1u cao c\u1ed5"], answer: 0 },
      { q: "'Kangaroo' ngh\u0129a l\u00e0 g\u00ec?", options: ["chu\u1ed9t t\u00fai", "c\u00e1 s\u1ea5u", "ng\u1ef1a v\u1eb1n"], answer: 0 },
    ],
  },
];

// Cac chan review sau moi 5 unit
const REVIEWS = [
  { id: "r1", afterGroup: 1, titleVi: "\u00d4n t\u1eadp 1", units: ["starter", "u1", "u2", "u3", "u4", "u5"] },
  { id: "r2", afterGroup: 2, titleVi: "\u00d4n t\u1eadp 2", units: ["u6", "u7", "u8", "u9", "u10"] },
  { id: "r3", afterGroup: 3, titleVi: "\u00d4n t\u1eadp 3", units: ["u11", "u12", "u13", "u14", "u15"] },
  { id: "r4", afterGroup: 4, titleVi: "\u00d4n t\u1eadp 4", units: ["u16", "u17", "u18", "u19", "u20"] },
];

const GROUP_NAMES = {
  1: "\u0110\u1ea3o Kh\u1edfi \u0111\u1ea7u",
  2: "\u0110\u1ea3o Tr\u01b0\u1eddng h\u1ecdc",
  3: "\u0110\u1ea3o Gia \u0111\u00ecnh",
  4: "\u0110\u1ea3o Kh\u00e1m ph\u00e1",
};
