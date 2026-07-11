// ============================================================
// DU LIEU HOC TAP - TIENG ANH LOP 3 (bam sat SGK Global Success)
// Nguon: Sach hoc sinh Tap 1 (Unit 1-10) va Tap 2 (Unit 11-20)
// Tu vung "core" lay dung theo Bookmap chinh thuc cua sach.
// Tu vung "ext" (mo rong/nang cao) do Claude bien soan them,
// khong co trong SGK, phu hop chu de va trinh do lop 3.
// ============================================================

const UNITS = [
  {
    id: "starter",
    group: 1,
    icon: "✈️",
    titleEn: "Starter",
    titleVi: "Làm quen",
    core: [
      { en: "one", vi: "số 1", icon: "1️⃣" },
      { en: "two", vi: "số 2", icon: "2️⃣" },
      { en: "three", vi: "số 3", icon: "3️⃣" },
      { en: "four", vi: "số 4", icon: "4️⃣" },
      { en: "five", vi: "số 5", icon: "5️⃣" },
      { en: "six", vi: "số 6", icon: "6️⃣" },
      { en: "seven", vi: "số 7", icon: "7️⃣" },
      { en: "eight", vi: "số 8", icon: "8️⃣" },
      { en: "nine", vi: "số 9", icon: "9️⃣" },
      { en: "ten", vi: "số 10", icon: "🔟" },
    ],
    patterns: [
      { en: "How many apples? Five apples.", vi: "Có bao nhiêu quả táo? Năm quả táo." },
      { en: "A, B, C, D...", vi: "Bảng chữ cái tiếng Anh." },
    ],
    ext: [
      { en: "eleven", vi: "số 11", icon: "🔢" },
      { en: "twelve", vi: "số 12", icon: "🔢" },
      { en: "twenty", vi: "số 20", icon: "🔢" },
      { en: "alphabet", vi: "bảng chữ cái", icon: "🔤" },
    ],
    grammar: {
      title: "Số đếm 1-10",
      explain: "Tiếng Anh dùng one, two, three... để đếm số lượng. Sau số đếm từ 2 trở lên, danh từ thường thêm đuôi -s.",
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
      { q: "5 là số gì trong tiếng Anh?", options: ["four", "five", "six"], answer: 1 },
      { q: "'Nine' nghĩa là số mấy?", options: ["7", "8", "9"], answer: 2 },
      { q: "Chọn từ đúng cho số 10", options: ["ten", "tea", "tenn"], answer: 0 },
      { q: "'Three' là số mấy?", options: ["2", "3", "4"], answer: 1 },
    ],
    quizExt: [
      { q: "'Twelve' là số mấy?", options: ["11", "12", "20"], answer: 1 },
      { q: "Bảng chữ cái tiếng Anh gọi là gì?", options: ["alphabet", "number", "letter box"], answer: 0 },
      { q: "'Twenty' là số mấy?", options: ["12", "20", "02"], answer: 1 },
    ],
  },

  {
    id: "u1",
    group: 1,
    icon: "👋",
    titleEn: "Unit 1: Hello",
    titleVi: "Xin chào",
    core: [
      { en: "hello", vi: "xin chào", icon: "👋" },
      { en: "hi", vi: "chào (thân mật)", icon: "👋" },
      { en: "goodbye", vi: "tạm biệt", icon: "👋" },
      { en: "bye", vi: "tạm biệt (ngắn)", icon: "👋" },
      { en: "fine", vi: "khỏe", icon: "😊" },
      { en: "how", vi: "như thế nào", icon: "❓" },
      { en: "thank you", vi: "cảm ơn", icon: "🙏" },
      { en: "you", vi: "bạn", icon: "🧑" },
    ],
    patterns: [
      { en: "Hello! I'm Mai.", vi: "Xin chào! Tớ là Mai." },
      { en: "Hi. How are you? – Fine, thank you.", vi: "Chào cậu. Cậu khỏe không? – Tớ khỏe, cảm ơn." },
      { en: "Goodbye! / Bye!", vi: "Tạm biệt!" },
    ],
    ext: [
      { en: "nice to meet you", vi: "rất vui được gặp bạn", icon: "🤝" },
      { en: "good night", vi: "chúc ngủ ngon", icon: "🌙" },
      { en: "see you later", vi: "hẹn gặp lại", icon: "👋" },
    ],
    grammar: {
      title: "'I'm' là viết tắt của 'I am'",
      explain: "Trong giao tiếp hàng ngày, người bản ngữ thường nói tắt I am thành I'm.",
      example: "I am Nam. -> I'm Nam.",
    },
    reading: {
      title: "A new friend",
      text: "It is morning. Mai says: 'Hello!' to her friend. Then she asks: 'How are you?' Her friend says: 'Fine, thank you.'",
      questions: [
        { q: "What does Mai say first?", options: ["Hello", "Goodbye", "Bye"], answer: 0 },
        { q: "How does the friend feel?", options: ["Tired", "Fine", "Sad"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "Gặp bạn buổi sáng, em có thể nói gì?", options: ["Hello", "Goodbye", "Bye"], answer: 0 },
      { q: "'Goodbye' nghĩa là gì?", options: ["Xin chào", "Tạm biệt", "Cảm ơn"], answer: 1 },
      { q: "'Fine' nghĩa là gì?", options: ["Khỏe", "Buồn", "Mệt"], answer: 0 },
      { q: "'Thank you' nghĩa là gì?", options: ["Cảm ơn", "Xin lỗi", "Tạm biệt"], answer: 0 },
    ],
    quizExt: [
      { q: "'Nice to meet you' nghĩa là gì?", options: ["Tạm biệt nhé", "Rất vui được gặp bạn", "Chúc ngủ ngon"], answer: 1 },
      { q: "Trước khi đi ngủ ta nói gì?", options: ["Good night", "Hello", "Fine"], answer: 0 },
      { q: "'I'm' là viết tắt của cụm nào?", options: ["I am", "I are", "I is"], answer: 0 },
    ],
  },

  {
    id: "u2",
    group: 1,
    icon: "🏷️",
    titleEn: "Unit 2: Our names",
    titleVi: "Tên của chúng ta",
    core: [
      { en: "name", vi: "tên", icon: "🏷️" },
      { en: "my", vi: "của tôi", icon: "🙋" },
      { en: "your", vi: "của bạn", icon: "🫵" },
      { en: "old", vi: "tuổi (nhiều tuổi)", icon: "🎂" },
      { en: "what", vi: "cái gì", icon: "❓" },
      { en: "how", vi: "như thế nào", icon: "❓" },
    ],
    patterns: [
      { en: "What's your name? – My name is Linh.", vi: "Tên bạn là gì? – Tên tớ là Linh." },
      { en: "How old are you? – I'm eight years old.", vi: "Bạn bao nhiêu tuổi? – Tớ tám tuổi." },
    ],
    ext: [
      { en: "nickname", vi: "biệt danh", icon: "😎" },
      { en: "full name", vi: "họ và tên đầy đủ", icon: "📝" },
      { en: "classmate", vi: "bạn cùng lớp", icon: "🧑‍🤝‍🧑" },
    ],
    grammar: {
      title: "Hỏi tên và tuổi: What's...? / How old...?",
      explain: "What's your name? dùng để hỏi tên. How old are you? dùng để hỏi tuổi, trả lời bằng I'm + số tuổi + years old.",
      example: "What's your name? – My name is Nam. How old are you? – I'm nine years old.",
    },
    reading: {
      title: "Meet Phong",
      text: "Hi, my name is Phong. I am nine years old. What's your name? How old are you?",
      questions: [
        { q: "What is the boy's name?", options: ["Phong", "Nam", "Linh"], answer: 0 },
        { q: "How old is he?", options: ["Eight", "Nine", "Ten"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'What's your name?' nghĩa là gì?", options: ["Bạn bao nhiêu tuổi?", "Tên bạn là gì?", "Bạn ở đâu?"], answer: 1 },
      { q: "'Old' trong 'How old are you?' liên quan đến điều gì?", options: ["Tuổi", "Tên", "Màu sắc"], answer: 0 },
      { q: "'My' nghĩa là gì?", options: ["của tôi", "của bạn", "của cậu ấy"], answer: 0 },
      { q: "'Your' nghĩa là gì?", options: ["của bạn", "của tôi", "của họ"], answer: 0 },
    ],
    quizExt: [
      { q: "'Nickname' nghĩa là gì?", options: ["biệt danh", "họ", "lớp học"], answer: 0 },
      { q: "'Classmate' nghĩa là gì?", options: ["bạn cùng lớp", "thầy giáo", "anh trai"], answer: 0 },
      { q: "Trả lời 'How old are you?' đúng cách là câu nào?", options: ["I'm eight years old.", "My name is Nam.", "Fine, thank you."], answer: 0 },
    ],
  },

  {
    id: "u3",
    group: 1,
    icon: "🤝",
    titleEn: "Unit 3: Our friends",
    titleVi: "Bạn bè của chúng ta",
    core: [
      { en: "friend", vi: "bạn bè", icon: "🤝" },
      { en: "this", vi: "đây (gần)", icon: "👉" },
      { en: "that", vi: "kia (xa)", icon: "👆" },
      { en: "it", vi: "nó", icon: "🔹" },
      { en: "yes", vi: "đúng vậy", icon: "✅" },
      { en: "no", vi: "không", icon: "❌" },
      { en: "Mr", vi: "ông/thầy (dùng trước tên nam)", icon: "👨" },
      { en: "Ms", vi: "cô/bà (dùng trước tên nữ)", icon: "👩" },
      { en: "teacher", vi: "giáo viên", icon: "👩‍🏫" },
    ],
    patterns: [
      { en: "This is Nam. / That's my friend.", vi: "Đây là Nam. / Kia là bạn của tớ." },
      { en: "Is this your teacher? – Yes, it is. / No, it isn't.", vi: "Đây có phải là giáo viên của bạn không? – Đúng vậy. / Không phải." },
    ],
    ext: [
      { en: "best friend", vi: "bạn thân nhất", icon: "💖" },
      { en: "kind", vi: "tốt bụng", icon: "😊" },
      { en: "funny", vi: "vui tính", icon: "😄" },
    ],
    grammar: {
      title: "This (ở gần) và That (ở xa)",
      explain: "Dùng This để chỉ người/vật ở gần, That để chỉ người/vật ở xa. Is this/that...? dùng để hỏi xác nhận, trả lời Yes, it is./No, it isn't.",
      example: "This is my friend. That's Mr Long.",
    },
    reading: {
      title: "My best friend",
      text: "This is Huy. He is my friend. Is this your teacher? No, it isn't. This is Ms Hoa, my teacher.",
      questions: [
        { q: "Who is Huy?", options: ["The writer's friend", "The teacher", "Ms Hoa"], answer: 0 },
        { q: "Who is Ms Hoa?", options: ["A friend", "The teacher", "A student"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'Friend' nghĩa là gì?", options: ["bạn bè", "gia đình", "thầy cô"], answer: 0 },
      { q: "Dùng từ nào cho người/vật ở gần?", options: ["This", "That", "It"], answer: 0 },
      { q: "'Teacher' nghĩa là gì?", options: ["giáo viên", "bạn học", "học sinh"], answer: 0 },
      { q: "'Yes, it is.' trả lời cho câu hỏi dạng nào?", options: ["Is this/that...?", "What's this?", "How old...?"], answer: 0 },
    ],
    quizExt: [
      { q: "'Best friend' nghĩa là gì?", options: ["bạn thân nhất", "bạn cùng bàn", "người lạ"], answer: 0 },
      { q: "'Funny' nghĩa là gì?", options: ["buồn", "vui tính", "giận dữ"], answer: 1 },
      { q: "Chọn câu đúng khi giới thiệu người ở xa", options: ["That's my friend.", "This am my friend.", "That friend is."], answer: 0 },
    ],
  },

  {
    id: "u4",
    group: 1,
    icon: "🧑",
    titleEn: "Unit 4: Our bodies",
    titleVi: "Cơ thể của chúng ta",
    core: [
      { en: "face", vi: "khuôn mặt", icon: "😊" },
      { en: "hair", vi: "tóc", icon: "👱" },
      { en: "eye", vi: "mắt", icon: "👀" },
      { en: "nose", vi: "mũi", icon: "👃" },
      { en: "mouth", vi: "miệng", icon: "👄" },
      { en: "ear", vi: "tai", icon: "👂" },
      { en: "hand", vi: "bàn tay", icon: "🖐️" },
      { en: "touch", vi: "chạm vào", icon: "👆" },
      { en: "open", vi: "mở", icon: "🔓" },
    ],
    patterns: [
      { en: "What's this? – It's my nose.", vi: "Đây là gì? – Đây là mũi của tớ." },
      { en: "Touch your ear. Open your mouth.", vi: "Chạm vào tai của bạn. Mở miệng ra." },
    ],
    ext: [
      { en: "shoulders", vi: "vai", icon: "🧑" },
      { en: "fingers", vi: "ngón tay", icon: "✋" },
      { en: "toes", vi: "ngón chân", icon: "🦶" },
    ],
    grammar: {
      title: "Câu mệnh lệnh (Imperative)",
      explain: "Dùng động từ nguyên mẫu đứng đầu câu để yêu cầu ai đó làm gì, ví dụ với touch (chạm) và open (mở).",
      example: "Touch your nose. Open your eyes.",
    },
    reading: {
      title: "Simon says",
      text: "In the game, the teacher says: 'Touch your ear! Open your mouth! Touch your nose!' The children listen and touch the right part.",
      questions: [
        { q: "Who gives the instructions?", options: ["The teacher", "A friend", "The mother"], answer: 0 },
        { q: "What do the children do?", options: ["Sing a song", "Touch body parts", "Draw pictures"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'Eye' nghĩa là gì?", options: ["mũi", "mắt", "tai"], answer: 1 },
      { q: "'Mouth' nghĩa là gì?", options: ["miệng", "tay", "chân"], answer: 0 },
      { q: "'Hair' nghĩa là gì?", options: ["tóc", "tai", "mặt"], answer: 0 },
      { q: "'Touch' nghĩa là gì?", options: ["mở", "chạm vào", "nhìn"], answer: 1 },
    ],
    quizExt: [
      { q: "'Shoulders' nghĩa là gì?", options: ["vai", "ngón tay", "ngón chân"], answer: 0 },
      { q: "'Fingers' nghĩa là gì?", options: ["ngón tay", "ngón chân", "bàn tay"], answer: 0 },
      { q: "Câu mệnh lệnh bắt đầu bằng gì?", options: ["Chủ ngữ", "Động từ", "Tính từ"], answer: 1 },
    ],
  },

  {
    id: "u5",
    group: 1,
    icon: "🎨",
    titleEn: "Unit 5: My hobbies",
    titleVi: "Sở thích của tôi",
    core: [
      { en: "cooking", vi: "nấu ăn", icon: "🍳" },
      { en: "dancing", vi: "nhảy múa", icon: "💃" },
      { en: "drawing", vi: "vẽ tranh", icon: "🎨" },
      { en: "painting", vi: "vẽ màu", icon: "🖌️" },
      { en: "running", vi: "chạy bộ", icon: "🏃" },
      { en: "singing", vi: "hát", icon: "🎤" },
      { en: "swimming", vi: "bơi lội", icon: "🏊" },
      { en: "walking", vi: "đi bộ", icon: "🚶" },
    ],
    patterns: [
      { en: "What's your hobby? – It's swimming.", vi: "Sở thích của bạn là gì? – Đó là bơi lội." },
      { en: "What's your hobby? – I like singing.", vi: "Sở thích của bạn là gì? – Tớ thích hát." },
    ],
    ext: [
      { en: "collecting stamps", vi: "sưu tầm tem", icon: "📮" },
      { en: "playing chess", vi: "chơi cờ", icon: "♟️" },
      { en: "gardening", vi: "làm vườn", icon: "🪴" },
    ],
    grammar: {
      title: "Động từ thêm -ing khi nói về sở thích",
      explain: "Khi nói về sở thích, động từ thường ở dạng thêm đuôi -ing (V-ing), đứng sau like hoặc làm chủ ngữ của câu.",
      example: "I like swimming. My hobby is drawing.",
    },
    reading: {
      title: "Lan's free time",
      text: "In her free time, Lan likes cooking. She also likes singing. On Sundays, she goes swimming with her father. She is very happy.",
      questions: [
        { q: "What does Lan like doing?", options: ["Cooking and singing", "Running and walking", "Drawing and dancing"], answer: 0 },
        { q: "Who does Lan go swimming with?", options: ["Her mother", "Her friend", "Her father"], answer: 2 },
      ],
    },
    quizCore: [
      { q: "'Swimming' nghĩa là gì?", options: ["bơi lội", "đi bộ", "vẽ tranh"], answer: 0 },
      { q: "'Cooking' nghĩa là gì?", options: ["nấu ăn", "hát", "nhảy múa"], answer: 0 },
      { q: "'What's your hobby?' hỏi về điều gì?", options: ["Tên bạn", "Sở thích", "Tuổi"], answer: 1 },
      { q: "'Walking' nghĩa là gì?", options: ["đi bộ", "chạy bộ", "bơi lội"], answer: 0 },
    ],
    quizExt: [
      { q: "'Collecting stamps' nghĩa là gì?", options: ["sưu tầm tem", "chơi cờ", "làm vườn"], answer: 0 },
      { q: "Sau 'like' động từ thường thêm gì?", options: ["-s", "-ing", "-ed"], answer: 1 },
      { q: "'Gardening' nghĩa là gì?", options: ["làm vườn", "nấu ăn", "may vá"], answer: 0 },
    ],
  },

  {
    id: "u6",
    group: 2,
    icon: "🏫",
    titleEn: "Unit 6: Our school",
    titleVi: "Trường học của chúng ta",
    core: [
      { en: "school", vi: "trường học", icon: "🏫" },
      { en: "classroom", vi: "phòng học", icon: "🏫" },
      { en: "playground", vi: "sân chơi", icon: "🏞️" },
      { en: "library", vi: "thư viện", icon: "📚" },
      { en: "gym", vi: "phòng thể dục", icon: "🏋️" },
      { en: "art room", vi: "phòng mỹ thuật", icon: "🎨" },
      { en: "music room", vi: "phòng âm nhạc", icon: "🎵" },
      { en: "computer room", vi: "phòng vi tính", icon: "💻" },
    ],
    patterns: [
      { en: "Is this our classroom? – Yes, it is. / No, it isn't.", vi: "Đây có phải là phòng học của chúng ta không? – Đúng vậy. / Không phải." },
      { en: "Let's go to the library. – OK, let's go.", vi: "Hãy đến thư viện đi. – Được, đi thôi." },
    ],
    ext: [
      { en: "principal's office", vi: "phòng hiệu trưởng", icon: "🏢" },
      { en: "staff room", vi: "phòng giáo viên", icon: "👩‍🏫" },
      { en: "canteen", vi: "căng tin", icon: "🍽️" },
    ],
    grammar: {
      title: "Let's + động từ nguyên mẫu (rủ ai làm gì)",
      explain: "Dùng Let's + động từ để rủ người khác cùng làm gì. Trả lời đồng ý bằng OK, let's go.",
      example: "Let's go to the gym. – OK, let's go.",
    },
    reading: {
      title: "My school",
      text: "My school is big. There is a playground, a library and a gym. Let's go to the art room. It is next to the music room.",
      questions: [
        { q: "What is next to the music room?", options: ["The library", "The art room", "The gym"], answer: 1 },
        { q: "How is the school?", options: ["Small", "Big", "Old"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'Library' nghĩa là gì?", options: ["thư viện", "căng tin", "sân chơi"], answer: 0 },
      { q: "'Playground' nghĩa là gì?", options: ["sân chơi", "phòng học", "cổng trường"], answer: 0 },
      { q: "'Gym' nghĩa là gì?", options: ["phòng thể dục", "thư viện", "vườn"], answer: 0 },
      { q: "'Computer room' nghĩa là gì?", options: ["phòng vi tính", "phòng học", "sân"], answer: 0 },
    ],
    quizExt: [
      { q: "'Principal's office' là gì?", options: ["phòng hiệu trưởng", "phòng y tế", "thư viện"], answer: 0 },
      { q: "'Staff room' nghĩa là gì?", options: ["phòng giáo viên", "phòng học", "phòng vi tính"], answer: 0 },
      { q: "'Canteen' nghĩa là gì?", options: ["căng tin", "phòng nhạc", "phòng mỹ thuật"], answer: 0 },
    ],
  },

  {
    id: "u7",
    group: 2,
    icon: "📢",
    titleEn: "Unit 7: Classroom instructions",
    titleVi: "Mệnh lệnh trong lớp",
    core: [
      { en: "stand up", vi: "đứng lên", icon: "🚶" },
      { en: "sit down", vi: "ngồi xuống", icon: "🪑" },
      { en: "close", vi: "đóng lại", icon: "📕" },
      { en: "come in", vi: "đi vào", icon: "🚪" },
      { en: "go out", vi: "đi ra", icon: "🚪" },
      { en: "speak", vi: "nói", icon: "🗣️" },
    ],
    patterns: [
      { en: "Stand up, please!", vi: "Mời em đứng lên." },
      { en: "May I come in? – Yes, you can. / No, you can't.", vi: "Em có thể vào không ạ? – Được. / Không được." },
    ],
    ext: [
      { en: "work in pairs", vi: "làm việc theo cặp", icon: "👥" },
      { en: "line up", vi: "xếp hàng", icon: "🚶" },
      { en: "put up your hand", vi: "giơ tay", icon: "✋" },
    ],
    grammar: {
      title: "May I...? (xin phép làm gì)",
      explain: "Dùng May I + động từ để lịch sự xin phép làm việc gì đó. Trả lời Yes, you can. hoặc No, you can't.",
      example: "May I go out? – Yes, you can.",
    },
    reading: {
      title: "In the classroom",
      text: "The teacher says: 'Stand up, please.' All the students stand up. Then a student asks: 'May I come in?' The teacher says: 'Yes, you can.'",
      questions: [
        { q: "What do the students do first?", options: ["Sit down", "Stand up", "Speak"], answer: 1 },
        { q: "What does the student ask?", options: ["May I come in?", "May I go out?", "May I sit down?"], answer: 0 },
      ],
    },
    quizCore: [
      { q: "'Stand up' nghĩa là gì?", options: ["đứng lên", "ngồi xuống", "đi ra"], answer: 0 },
      { q: "'Speak' nghĩa là gì?", options: ["nhìn", "nói", "nghe"], answer: 1 },
      { q: "'Close' nghĩa là gì?", options: ["đóng lại", "mở ra", "cầm lên"], answer: 0 },
      { q: "'Come in' nghĩa là gì?", options: ["đi vào", "đi ra", "đứng lên"], answer: 0 },
    ],
    quizExt: [
      { q: "'Line up' nghĩa là gì?", options: ["xếp hàng", "ngồi xuống", "giơ tay"], answer: 0 },
      { q: "'Put up your hand' nghĩa là gì?", options: ["giơ tay", "đứng lên", "viết bài"], answer: 0 },
      { q: "Dùng cụm từ nào để xin phép lịch sự?", options: ["May I...?", "What's this?", "How old...?"], answer: 0 },
    ],
  },

  {
    id: "u8",
    group: 2,
    icon: "✏️",
    titleEn: "Unit 8: My school things",
    titleVi: "Đồ dùng học tập",
    core: [
      { en: "book", vi: "sách", icon: "📘" },
      { en: "pen", vi: "bút mực", icon: "🖊️" },
      { en: "pencil", vi: "bút chì", icon: "✏️" },
      { en: "ruler", vi: "thước kẻ", icon: "📏" },
      { en: "eraser", vi: "cục tẩy", icon: "🧽" },
      { en: "notebook", vi: "vở ghi chép", icon: "📓" },
      { en: "pencil case", vi: "hộp bút", icon: "👝" },
      { en: "school bag", vi: "cặp sách", icon: "🎒" },
    ],
    patterns: [
      { en: "I have a ruler.", vi: "Tớ có một cây thước." },
      { en: "Do you have a pencil case? – Yes, I do. / No, I don't.", vi: "Bạn có hộp bút không? – Có. / Không." },
    ],
    ext: [
      { en: "glue stick", vi: "keo dán", icon: "🧴" },
      { en: "highlighter", vi: "bút dạ quang", icon: "🖍️" },
      { en: "calculator", vi: "máy tính bỏ túi", icon: "🧮" },
    ],
    grammar: {
      title: "Do you have...? – Yes, I do./No, I don't.",
      explain: "Dùng Do you have...? để hỏi ai đó có vật gì không, trả lời bằng Yes, I do. hoặc No, I don't.",
      example: "Do you have a book? – Yes, I do.",
    },
    reading: {
      title: "My pencil case",
      text: "This is my pencil case. I have a pen, a pencil and an eraser. Do you have a ruler? Yes, I do. I keep it very tidy.",
      questions: [
        { q: "What is in the pencil case?", options: ["A pen, a pencil, an eraser", "A book and a bag", "A ruler only"], answer: 0 },
        { q: "Does the writer have a ruler?", options: ["Yes", "No", "Not mentioned"], answer: 0 },
      ],
    },
    quizCore: [
      { q: "'Ruler' nghĩa là gì?", options: ["thước kẻ", "cục tẩy", "bút chì"], answer: 0 },
      { q: "'Eraser' nghĩa là gì?", options: ["cục tẩy", "quyển sách", "cặp sách"], answer: 0 },
      { q: "'Pencil case' nghĩa là gì?", options: ["hộp bút", "cặp sách", "quyển vở"], answer: 0 },
      { q: "'School bag' nghĩa là gì?", options: ["cặp sách", "bút mực", "sách"], answer: 0 },
    ],
    quizExt: [
      { q: "'Glue stick' nghĩa là gì?", options: ["keo dán", "bút dạ", "cục tẩy"], answer: 0 },
      { q: "'Calculator' nghĩa là gì?", options: ["máy tính bỏ túi", "thước kẻ", "vở ghi"], answer: 0 },
      { q: "'Highlighter' nghĩa là gì?", options: ["bút dạ quang", "keo dán", "cục tẩy"], answer: 0 },
    ],
  },

  {
    id: "u9",
    group: 2,
    icon: "🎨",
    titleEn: "Unit 9: Colours",
    titleVi: "Màu sắc",
    core: [
      { en: "colour", vi: "màu sắc", icon: "🎨" },
      { en: "red", vi: "màu đỏ", icon: "🔴" },
      { en: "blue", vi: "màu xanh dương", icon: "🔵" },
      { en: "yellow", vi: "màu vàng", icon: "🟡" },
      { en: "green", vi: "màu xanh lá", icon: "🟢" },
      { en: "orange", vi: "màu cam", icon: "🟠" },
      { en: "black", vi: "màu đen", icon: "⚫" },
      { en: "white", vi: "màu trắng", icon: "⚪" },
    ],
    patterns: [
      { en: "What colour is it? – It's red.", vi: "Nó màu gì? – Nó màu đỏ." },
      { en: "What colour are they? – They're blue.", vi: "Chúng màu gì? – Chúng màu xanh dương." },
    ],
    ext: [
      { en: "brown", vi: "màu nâu", icon: "🟤" },
      { en: "grey", vi: "màu xám", icon: "⚫" },
      { en: "pink", vi: "màu hồng", icon: "💗" },
    ],
    grammar: {
      title: "It's (một vật) và They're (nhiều vật)",
      explain: "Dùng What colour is it? cho một vật (số ít), What colour are they? cho nhiều vật (số nhiều). Trả lời tương ứng It's.../They're...",
      example: "What colour is it? It's green. What colour are they? They're red.",
    },
    reading: {
      title: "My kite",
      text: "I have a kite. What colour is it? It's yellow and orange. My friend's kite is blue and green. We fly our kites in the park.",
      questions: [
        { q: "What colour is the writer's kite?", options: ["Yellow and orange", "Blue and green", "Black and white"], answer: 0 },
        { q: "Where do they fly kites?", options: ["At school", "In the park", "At home"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'Red' nghĩa là gì?", options: ["màu đỏ", "màu xanh", "màu vàng"], answer: 0 },
      { q: "'Green' nghĩa là gì?", options: ["màu xanh lá", "màu đen", "màu trắng"], answer: 0 },
      { q: "'Yellow' nghĩa là gì?", options: ["màu vàng", "màu tím", "màu cam"], answer: 0 },
      { q: "'Colour' nghĩa là gì?", options: ["màu sắc", "hình dạng", "kích thước"], answer: 0 },
    ],
    quizExt: [
      { q: "'Brown' nghĩa là gì?", options: ["màu nâu", "màu xám", "màu đen"], answer: 0 },
      { q: "'Pink' nghĩa là gì?", options: ["màu hồng", "màu tím", "màu cam"], answer: 0 },
      { q: "'Grey' nghĩa là gì?", options: ["màu xám", "màu trắng", "màu đen"], answer: 0 },
    ],
  },

  {
    id: "u10",
    group: 2,
    icon: "🏸",
    titleEn: "Unit 10: Break time activities",
    titleVi: "Hoạt động giờ ra chơi",
    core: [
      { en: "break time", vi: "giờ ra chơi", icon: "⏰" },
      { en: "football", vi: "bóng đá", icon: "⚽" },
      { en: "basketball", vi: "bóng rổ", icon: "🏀" },
      { en: "badminton", vi: "cầu lông", icon: "🏸" },
      { en: "table tennis", vi: "bóng bàn", icon: "🏓" },
      { en: "chess", vi: "cờ vua", icon: "♟️" },
      { en: "chat", vi: "trò chuyện", icon: "🗨️" },
      { en: "word puzzles", vi: "trò chơi ô chữ", icon: "🧩" },
    ],
    patterns: [
      { en: "I play football at break time.", vi: "Tớ chơi bóng đá vào giờ ra chơi." },
      { en: "What do you do at break time? – I play chess.", vi: "Bạn làm gì vào giờ ra chơi? – Tớ chơi cờ vua." },
    ],
    ext: [
      { en: "playing tag", vi: "chơi đuổi bắt", icon: "🏃" },
      { en: "skipping rope", vi: "nhảy dây", icon: "🪢" },
      { en: "hide and seek", vi: "trốn tìm", icon: "🙈" },
    ],
    grammar: {
      title: "Thì hiện tại đơn diễn tả thói quen",
      explain: "Dùng thì hiện tại đơn để nói về việc thường làm vào giờ ra chơi. Với I/you, động từ giữ nguyên dạng.",
      example: "I play football at break time. I chat with my friends.",
    },
    reading: {
      title: "At break time",
      text: "It is break time. Nam plays football with his friends. Lan plays chess. Two girls chat near the tree. Everyone is happy.",
      questions: [
        { q: "What does Nam play?", options: ["Football", "Chess", "Badminton"], answer: 0 },
        { q: "What does Lan play?", options: ["Football", "Chess", "Table tennis"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'Football' nghĩa là gì?", options: ["bóng đá", "bóng rổ", "cầu lông"], answer: 0 },
      { q: "'Chess' nghĩa là gì?", options: ["cờ vua", "bóng bàn", "trò chuyện"], answer: 0 },
      { q: "'Chat' nghĩa là gì?", options: ["trò chuyện", "chạy", "nhảy"], answer: 0 },
      { q: "'Break time' nghĩa là gì?", options: ["giờ ra chơi", "giờ học", "giờ ăn"], answer: 0 },
    ],
    quizExt: [
      { q: "'Playing tag' nghĩa là gì?", options: ["chơi đuổi bắt", "chơi trốn tìm", "nhảy dây"], answer: 0 },
      { q: "'Skipping rope' nghĩa là gì?", options: ["nhảy dây", "bắn bi", "trốn tìm"], answer: 0 },
      { q: "'Hide and seek' nghĩa là gì?", options: ["trốn tìm", "đuổi bắt", "nhảy dây"], answer: 0 },
    ],
  },

  {
    id: "u11",
    group: 3,
    icon: "👪",
    titleEn: "Unit 11: My family",
    titleVi: "Gia đình của tôi",
    core: [
      { en: "father", vi: "bố", icon: "👨" },
      { en: "mother", vi: "mẹ", icon: "👩" },
      { en: "brother", vi: "anh/em trai", icon: "👦" },
      { en: "sister", vi: "chị/em gái", icon: "👧" },
      { en: "eleven", vi: "số 11", icon: "🔢" },
      { en: "fifteen", vi: "số 15", icon: "🔢" },
      { en: "twenty", vi: "số 20", icon: "🔢" },
    ],
    patterns: [
      { en: "Who's this? – It's my brother.", vi: "Đây là ai? – Đây là anh trai của tớ." },
      { en: "How old is he? – He's twelve.", vi: "Anh ấy bao nhiêu tuổi? – Anh ấy 12 tuổi." },
    ],
    ext: [
      { en: "grandfather", vi: "ông", icon: "👴" },
      { en: "grandmother", vi: "bà", icon: "👵" },
      { en: "uncle", vi: "chú/cậu/bác trai", icon: "👨" },
      { en: "aunt", vi: "cô/dì/bác gái", icon: "👩" },
    ],
    grammar: {
      title: "Số đếm 11-20 và hỏi tuổi người khác",
      explain: "Dùng How old is he/she? để hỏi tuổi người khác, trả lời He's/She's + số tuổi (11 đến 20: eleven, twelve... twenty).",
      example: "How old is she? – She's fifteen.",
    },
    reading: {
      title: "My big family",
      text: "This is my brother. He is twelve. This is my sister. She is eleven. My father and mother love us very much.",
      questions: [
        { q: "How old is the brother?", options: ["Eleven", "Twelve", "Fifteen"], answer: 1 },
        { q: "How old is the sister?", options: ["Eleven", "Twelve", "Twenty"], answer: 0 },
      ],
    },
    quizCore: [
      { q: "'Father' nghĩa là gì?", options: ["bố", "mẹ", "anh trai"], answer: 0 },
      { q: "'Sister' nghĩa là gì?", options: ["chị/em gái", "anh/em trai", "bác"], answer: 0 },
      { q: "'Eleven' là số mấy?", options: ["10", "11", "12"], answer: 1 },
      { q: "'How old is he?' hỏi về điều gì?", options: ["Tuổi của anh ấy", "Tên của anh ấy", "Nơi ở"], answer: 0 },
    ],
    quizExt: [
      { q: "'Grandfather' nghĩa là gì?", options: ["ông", "bà", "chú"], answer: 0 },
      { q: "'Aunt' nghĩa là gì?", options: ["cô/dì/bác gái", "chú/cậu", "ông"], answer: 0 },
      { q: "'Uncle' nghĩa là gì?", options: ["chú/cậu/bác trai", "bà", "chị gái"], answer: 0 },
    ],
  },

  {
    id: "u12",
    group: 3,
    icon: "👩‍⚕️",
    titleEn: "Unit 12: Jobs",
    titleVi: "Nghề nghiệp",
    core: [
      { en: "job", vi: "nghề nghiệp", icon: "💼" },
      { en: "teacher", vi: "giáo viên", icon: "👩‍🏫" },
      { en: "doctor", vi: "bác sĩ", icon: "👩‍⚕️" },
      { en: "nurse", vi: "y tá", icon: "👩‍⚕️" },
      { en: "farmer", vi: "nông dân", icon: "👨‍🌾" },
      { en: "worker", vi: "công nhân", icon: "👷" },
      { en: "driver", vi: "tài xế", icon: "🚗" },
      { en: "cook", vi: "đầu bếp", icon: "👨‍🍳" },
      { en: "singer", vi: "ca sĩ", icon: "🎤" },
    ],
    patterns: [
      { en: "What's his job? – He's a doctor.", vi: "Nghề nghiệp của anh ấy là gì? – Anh ấy là bác sĩ." },
      { en: "Is she a nurse? – Yes, she is. / No, she isn't.", vi: "Cô ấy là y tá phải không? – Đúng vậy. / Không phải." },
    ],
    ext: [
      { en: "engineer", vi: "kỹ sư", icon: "👷" },
      { en: "pilot", vi: "phi công", icon: "✈️" },
      { en: "police officer", vi: "cảnh sát", icon: "👮" },
    ],
    grammar: {
      title: "Is he/she a...? – Yes, he/she is./No, he/she isn't.",
      explain: "Dùng Is + he/she + a + nghề nghiệp? để hỏi xác nhận nghề nghiệp của ai đó.",
      example: "Is he a farmer? – Yes, he is.",
    },
    reading: {
      title: "My parents' jobs",
      text: "My father is a doctor. He works at a hospital. Is my mother a teacher? Yes, she is. She works at a primary school.",
      questions: [
        { q: "What is the father's job?", options: ["Doctor", "Teacher", "Farmer"], answer: 0 },
        { q: "Is the mother a teacher?", options: ["Yes", "No", "Not mentioned"], answer: 0 },
      ],
    },
    quizCore: [
      { q: "'Doctor' nghĩa là gì?", options: ["bác sĩ", "giáo viên", "y tá"], answer: 0 },
      { q: "'Teacher' nghĩa là gì?", options: ["giáo viên", "nông dân", "tài xế"], answer: 0 },
      { q: "'Singer' nghĩa là gì?", options: ["ca sĩ", "đầu bếp", "công nhân"], answer: 0 },
      { q: "'What's his job?' hỏi về điều gì?", options: ["Nghề nghiệp", "Sở thích", "Tuổi"], answer: 0 },
    ],
    quizExt: [
      { q: "'Engineer' nghĩa là gì?", options: ["kỹ sư", "phi công", "cảnh sát"], answer: 0 },
      { q: "'Police officer' nghĩa là gì?", options: ["cảnh sát", "phi công", "kỹ sư"], answer: 0 },
      { q: "'Pilot' nghĩa là gì?", options: ["phi công", "bác sĩ", "y tá"], answer: 0 },
    ],
  },

  {
    id: "u13",
    group: 3,
    icon: "🏠",
    titleEn: "Unit 13: My house",
    titleVi: "Nhà của tôi",
    core: [
      { en: "house", vi: "ngôi nhà", icon: "🏠" },
      { en: "living room", vi: "phòng khách", icon: "🛋️" },
      { en: "kitchen", vi: "nhà bếp", icon: "🍳" },
      { en: "bathroom", vi: "phòng tắm", icon: "🚿" },
      { en: "bedroom", vi: "phòng ngủ", icon: "🛏️" },
      { en: "table", vi: "cái bàn", icon: "🪑" },
      { en: "chair", vi: "cái ghế", icon: "🪑" },
      { en: "lamp", vi: "cái đèn", icon: "💡" },
    ],
    patterns: [
      { en: "Where's the chair? – It's here.", vi: "Cái ghế ở đâu? – Nó ở đây." },
      { en: "Is the lamp on the table? – Yes, it is.", vi: "Cái đèn có ở trên bàn không? – Đúng vậy." },
    ],
    ext: [
      { en: "garden", vi: "khu vườn", icon: "🌻" },
      { en: "yard", vi: "sân", icon: "🏡" },
      { en: "roof", vi: "mái nhà", icon: "🏠" },
    ],
    grammar: {
      title: "Giới từ vị trí: here, there, in, on",
      explain: "here = ở đây, there = ở đó/kia, in = trong, on = trên. Dùng để nói vị trí đồ vật trong nhà.",
      example: "The chair is here. The lamp is on the table.",
    },
    reading: {
      title: "My new house",
      text: "My new house has a living room, a kitchen and two bedrooms. Where's the table? It's in the living room. I love my new house.",
      questions: [
        { q: "How many bedrooms are there?", options: ["One", "Two", "Three"], answer: 1 },
        { q: "Where is the table?", options: ["In the kitchen", "In the living room", "In the bedroom"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'Kitchen' nghĩa là gì?", options: ["nhà bếp", "phòng ngủ", "phòng khách"], answer: 0 },
      { q: "'Bathroom' nghĩa là gì?", options: ["phòng tắm", "phòng ngủ", "sân"], answer: 0 },
      { q: "'Living room' nghĩa là gì?", options: ["phòng khách", "nhà bếp", "mái nhà"], answer: 0 },
      { q: "'Table' nghĩa là gì?", options: ["cái bàn", "cái ghế", "cái đèn"], answer: 0 },
    ],
    quizExt: [
      { q: "'Garden' nghĩa là gì?", options: ["khu vườn", "mái nhà", "sân"], answer: 0 },
      { q: "'Roof' nghĩa là gì?", options: ["mái nhà", "sân", "khu vườn"], answer: 0 },
      { q: "'Yard' nghĩa là gì?", options: ["sân", "mái nhà", "cửa"], answer: 0 },
    ],
  },

  {
    id: "u14",
    group: 3,
    icon: "🛏️",
    titleEn: "Unit 14: My bedroom",
    titleVi: "Phòng ngủ của tôi",
    core: [
      { en: "room", vi: "căn phòng", icon: "🛏️" },
      { en: "bed", vi: "giường", icon: "🛏️" },
      { en: "desk", vi: "bàn học", icon: "📚" },
      { en: "door", vi: "cửa ra vào", icon: "🚪" },
      { en: "window", vi: "cửa sổ", icon: "🪟" },
      { en: "big", vi: "to, lớn", icon: "📏" },
      { en: "small", vi: "nhỏ", icon: "📏" },
      { en: "new", vi: "mới", icon: "✨" },
      { en: "old", vi: "cũ", icon: "📦" },
    ],
    patterns: [
      { en: "There's a bed in the room. There are two windows.", vi: "Có một cái giường trong phòng. Có hai cửa sổ." },
      { en: "The desk is big. The room is small.", vi: "Cái bàn thì to. Căn phòng thì nhỏ." },
    ],
    ext: [
      { en: "wardrobe", vi: "tủ quần áo", icon: "🚪" },
      { en: "bookshelf", vi: "kệ sách", icon: "📚" },
      { en: "curtain", vi: "rèm cửa", icon: "🪟" },
    ],
    grammar: {
      title: "There's / There are trong phòng",
      explain: "There's (There is) dùng với danh từ số ít, There are dùng với danh từ số nhiều, để nói có gì trong phòng.",
      example: "There's a desk in my room. There are two chairs.",
    },
    reading: {
      title: "My tidy room",
      text: "My bedroom is small but tidy. There's a bed and a desk. There are two windows. My desk is new and my bed is old.",
      questions: [
        { q: "How many windows are there?", options: ["One", "Two", "Three"], answer: 1 },
        { q: "Is the desk new or old?", options: ["New", "Old", "Not mentioned"], answer: 0 },
      ],
    },
    quizCore: [
      { q: "'Bed' nghĩa là gì?", options: ["giường", "ghế", "bàn"], answer: 0 },
      { q: "'Window' nghĩa là gì?", options: ["cửa sổ", "cửa ra vào", "tường"], answer: 0 },
      { q: "'Big' nghĩa là gì?", options: ["to, lớn", "nhỏ", "mới"], answer: 0 },
      { q: "'Old' (trong bài) nghĩa là gì?", options: ["cũ", "mới", "to"], answer: 0 },
    ],
    quizExt: [
      { q: "'Wardrobe' nghĩa là gì?", options: ["tủ quần áo", "giá sách", "cửa sổ"], answer: 0 },
      { q: "'Curtain' nghĩa là gì?", options: ["rèm cửa", "gương", "kệ sách"], answer: 0 },
      { q: "'Bookshelf' nghĩa là gì?", options: ["kệ sách", "tủ quần áo", "giường"], answer: 0 },
    ],
  },

  {
    id: "u15",
    group: 3,
    icon: "🍽️",
    titleEn: "Unit 15: At the dining table",
    titleVi: "Trên bàn ăn",
    core: [
      { en: "chicken", vi: "thịt gà", icon: "🍗" },
      { en: "fish", vi: "cá", icon: "🐟" },
      { en: "egg", vi: "trứng", icon: "🥚" },
      { en: "bean", vi: "đậu", icon: "🫘" },
      { en: "bread", vi: "bánh mì", icon: "🍞" },
      { en: "meat", vi: "thịt", icon: "🥩" },
      { en: "juice", vi: "nước ép", icon: "🧃" },
    ],
    patterns: [
      { en: "Would you like some chicken? – Yes, please.", vi: "Bạn có muốn ăn thịt gà không? – Có, cho tớ xin." },
      { en: "Would you like some juice? – No, thanks.", vi: "Bạn có muốn uống nước ép không? – Không, cảm ơn." },
    ],
    ext: [
      { en: "rice", vi: "cơm", icon: "🍚" },
      { en: "vegetables", vi: "rau củ", icon: "🥦" },
      { en: "spoon", vi: "thìa", icon: "🥄" },
      { en: "bowl", vi: "bát", icon: "🍜" },
    ],
    grammar: {
      title: "Would you like some...? (mời ai ăn/uống gì)",
      explain: "Dùng Would you like some + đồ ăn/uống? để mời lịch sự. Trả lời Yes, please. (đồng ý) hoặc No, thanks. (từ chối).",
      example: "Would you like some bread? – Yes, please.",
    },
    reading: {
      title: "Family dinner",
      text: "It is dinner time. Would you like some chicken? Yes, please. Would you like some fish? No, thanks. The family enjoys the meal together.",
      questions: [
        { q: "Does the person want chicken?", options: ["Yes", "No", "Not mentioned"], answer: 0 },
        { q: "Does the person want fish?", options: ["Yes", "No", "Not mentioned"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'Chicken' nghĩa là gì?", options: ["thịt gà", "cá", "trứng"], answer: 0 },
      { q: "'Bread' nghĩa là gì?", options: ["bánh mì", "cơm", "thịt"], answer: 0 },
      { q: "'Egg' nghĩa là gì?", options: ["trứng", "đậu", "cá"], answer: 0 },
      { q: "'Would you like some...?' dùng để làm gì?", options: ["Mời ăn/uống", "Hỏi tên", "Hỏi tuổi"], answer: 0 },
    ],
    quizExt: [
      { q: "'Rice' nghĩa là gì?", options: ["cơm", "cá", "thịt gà"], answer: 0 },
      { q: "'Vegetables' nghĩa là gì?", options: ["rau củ", "trái cây", "thịt"], answer: 0 },
      { q: "'Bowl' nghĩa là gì?", options: ["bát", "đĩa", "thìa"], answer: 0 },
    ],
  },

  {
    id: "u16",
    group: 4,
    icon: "🐶",
    titleEn: "Unit 16: My pets",
    titleVi: "Thú cưng của tôi",
    core: [
      { en: "dog", vi: "con chó", icon: "🐶" },
      { en: "cat", vi: "con mèo", icon: "🐱" },
      { en: "bird", vi: "con chim", icon: "🐦" },
      { en: "rabbit", vi: "con thỏ", icon: "🐰" },
      { en: "goldfish", vi: "cá vàng", icon: "🐠" },
      { en: "parrot", vi: "vẹt", icon: "🦜" },
      { en: "some", vi: "một vài", icon: "🔢" },
      { en: "many", vi: "nhiều", icon: "🔢" },
    ],
    patterns: [
      { en: "Do you have any pets? – Yes, I do. / No, I don't.", vi: "Bạn có nuôi thú cưng nào không? – Có. / Không." },
      { en: "How many pets do you have? – I have two.", vi: "Bạn có bao nhiêu thú cưng? – Tớ có hai con." },
    ],
    ext: [
      { en: "hamster", vi: "chuột hamster", icon: "🐹" },
      { en: "turtle", vi: "con rùa", icon: "🐢" },
      { en: "guinea pig", vi: "chuột lang", icon: "🐹" },
    ],
    grammar: {
      title: "any / some và How many...?",
      explain: "Dùng any trong câu hỏi/phủ định (Do you have any pets?), some trong câu khẳng định. How many...? dùng để hỏi số lượng.",
      example: "Do you have any pets? – Yes, I have some fish. How many? – I have three.",
    },
    reading: {
      title: "Tom's pet",
      text: "Tom has a pet dog. Do you have any pets? Yes, I do. How many pets do you have? I have two dogs and one cat.",
      questions: [
        { q: "Does Tom have pets?", options: ["Yes", "No", "Not mentioned"], answer: 0 },
        { q: "How many pets does Tom have?", options: ["Two", "Three", "Four"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'Rabbit' nghĩa là gì?", options: ["con thỏ", "con mèo", "con chim"], answer: 0 },
      { q: "'Goldfish' nghĩa là gì?", options: ["cá vàng", "con cá", "con chuột"], answer: 0 },
      { q: "'Do you have any pets?' hỏi về điều gì?", options: ["Thú cưng", "Gia đình", "Đồ chơi"], answer: 0 },
      { q: "'Parrot' nghĩa là gì?", options: ["vẹt", "chim sẻ", "gà"], answer: 0 },
    ],
    quizExt: [
      { q: "'Hamster' nghĩa là gì?", options: ["chuột hamster", "thỏ", "vẹt"], answer: 0 },
      { q: "'Turtle' nghĩa là gì?", options: ["con rùa", "cá vàng", "chuột lang"], answer: 0 },
      { q: "'Guinea pig' nghĩa là gì?", options: ["chuột lang", "thỏ", "rùa"], answer: 0 },
    ],
  },

  {
    id: "u17",
    group: 4,
    icon: "🚗",
    titleEn: "Unit 17: Our toys",
    titleVi: "Đồ chơi của chúng ta",
    core: [
      { en: "toy", vi: "đồ chơi", icon: "🧸" },
      { en: "car", vi: "ô tô", icon: "🚗" },
      { en: "bus", vi: "xe buýt", icon: "🚌" },
      { en: "plane", vi: "máy bay", icon: "✈️" },
      { en: "ship", vi: "tàu thủy", icon: "🚢" },
      { en: "train", vi: "tàu hỏa", icon: "🚂" },
      { en: "truck", vi: "xe tải", icon: "🚚" },
      { en: "kite", vi: "diều", icon: "🪁" },
      { en: "teddy bear", vi: "gấu bông", icon: "🧸" },
    ],
    patterns: [
      { en: "He has a car.", vi: "Cậu ấy có một chiếc ô tô." },
      { en: "They have many toys.", vi: "Họ có nhiều đồ chơi." },
    ],
    ext: [
      { en: "doll", vi: "con búp bê", icon: "🪆" },
      { en: "robot", vi: "người máy", icon: "🤖" },
      { en: "blocks", vi: "khối xếp hình", icon: "🧱" },
    ],
    grammar: {
      title: "has (he/she) và have (they/we/you/I)",
      explain: "Với chủ ngữ he/she dùng has, với I/you/we/they dùng have, khi nói về việc sở hữu đồ vật.",
      example: "He has a plane. They have a train.",
    },
    reading: {
      title: "My toy box",
      text: "I have a big toy box. He has a car and a train. She has a teddy bear. They have many toys and they play together.",
      questions: [
        { q: "What does 'he' have?", options: ["A car and a train", "A teddy bear", "A kite"], answer: 0 },
        { q: "What does 'she' have?", options: ["A car", "A teddy bear", "A truck"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'Car' nghĩa là gì?", options: ["ô tô", "xe buýt", "máy bay"], answer: 0 },
      { q: "'Kite' nghĩa là gì?", options: ["diều", "gấu bông", "tàu thủy"], answer: 0 },
      { q: "'Teddy bear' nghĩa là gì?", options: ["gấu bông", "búp bê", "người máy"], answer: 0 },
      { q: "'Plane' nghĩa là gì?", options: ["máy bay", "tàu hỏa", "xe tải"], answer: 0 },
    ],
    quizExt: [
      { q: "'Doll' nghĩa là gì?", options: ["con búp bê", "gấu bông", "người máy"], answer: 0 },
      { q: "'Robot' nghĩa là gì?", options: ["người máy", "búp bê", "khối xếp hình"], answer: 0 },
      { q: "'Blocks' nghĩa là gì?", options: ["khối xếp hình", "quả bóng", "ô tô"], answer: 0 },
    ],
  },

  {
    id: "u18",
    group: 4,
    icon: "🎵",
    titleEn: "Unit 18: Playing and doing",
    titleVi: "Chơi và làm",
    core: [
      { en: "reading", vi: "đọc sách", icon: "📖" },
      { en: "writing", vi: "viết", icon: "✍️" },
      { en: "singing", vi: "hát", icon: "🎤" },
      { en: "dancing", vi: "nhảy múa", icon: "💃" },
      { en: "drawing a picture", vi: "vẽ tranh", icon: "🎨" },
      { en: "listening to music", vi: "nghe nhạc", icon: "🎧" },
      { en: "playing basketball", vi: "chơi bóng rổ", icon: "🏀" },
      { en: "watching TV", vi: "xem ti vi", icon: "📺" },
    ],
    patterns: [
      { en: "What are you doing? – I'm reading.", vi: "Bạn đang làm gì? – Tớ đang đọc sách." },
      { en: "I'm listening to music.", vi: "Tớ đang nghe nhạc." },
    ],
    ext: [
      { en: "doing exercise", vi: "tập thể dục", icon: "🤸" },
      { en: "playing the piano", vi: "chơi đàn piano", icon: "🎹" },
      { en: "cooking", vi: "nấu ăn", icon: "🍳" },
    ],
    grammar: {
      title: "Thì hiện tại tiếp diễn: am/is/are + V-ing",
      explain: "Dùng để nói về việc đang diễn ra ngay lúc nói. Với I dùng am, với he/she/it dùng is, với you/we/they dùng are.",
      example: "I am reading. She is dancing.",
    },
    reading: {
      title: "At home now",
      text: "What are you doing? I'm reading a book. My sister is drawing a picture. My brother is listening to music. We are all busy at home.",
      questions: [
        { q: "What is the sister doing?", options: ["Reading", "Drawing a picture", "Singing"], answer: 1 },
        { q: "What is the brother doing?", options: ["Watching TV", "Listening to music", "Dancing"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'Reading' nghĩa là gì?", options: ["đọc sách", "viết", "hát"], answer: 0 },
      { q: "'Watching TV' nghĩa là gì?", options: ["xem ti vi", "nghe nhạc", "vẽ tranh"], answer: 0 },
      { q: "'What are you doing?' hỏi về điều gì?", options: ["Việc đang làm", "Tên", "Sở thích"], answer: 0 },
      { q: "'Listening to music' nghĩa là gì?", options: ["nghe nhạc", "hát", "nhảy múa"], answer: 0 },
    ],
    quizExt: [
      { q: "Thì hiện tại tiếp diễn dùng động từ thêm gì?", options: ["-ing", "-ed", "-s"], answer: 0 },
      { q: "'Doing exercise' nghĩa là gì?", options: ["tập thể dục", "chơi đàn", "nấu ăn"], answer: 0 },
      { q: "'Playing the piano' nghĩa là gì?", options: ["chơi đàn piano", "chơi bóng rổ", "nghe nhạc"], answer: 0 },
    ],
  },

  {
    id: "u19",
    group: 4,
    icon: "🚴",
    titleEn: "Unit 19: Outdoor activities",
    titleVi: "Hoạt động ngoài trời",
    core: [
      { en: "cycling", vi: "đạp xe", icon: "🚴" },
      { en: "running", vi: "chạy bộ", icon: "🏃" },
      { en: "walking", vi: "đi bộ", icon: "🚶" },
      { en: "skating", vi: "trượt patin", icon: "⛸️" },
      { en: "skipping", vi: "nhảy dây", icon: "🪢" },
      { en: "flying a kite", vi: "thả diều", icon: "🪁" },
      { en: "painting", vi: "vẽ màu", icon: "🖌️" },
      { en: "playing badminton", vi: "chơi cầu lông", icon: "🏸" },
    ],
    patterns: [
      { en: "What's he doing? – He's cycling.", vi: "Cậu ấy đang làm gì? – Cậu ấy đang đạp xe." },
      { en: "What's she doing? – She's flying a kite.", vi: "Cô ấy đang làm gì? – Cô ấy đang thả diều." },
    ],
    ext: [
      { en: "camping", vi: "cắm trại", icon: "⛺" },
      { en: "fishing", vi: "câu cá", icon: "🎣" },
      { en: "picnicking", vi: "đi dã ngoại", icon: "🧺" },
    ],
    grammar: {
      title: "What's he/she doing? – He's/She's + V-ing",
      explain: "Dùng để hỏi và trả lời về hoạt động ai đó đang làm ngoài trời, với chủ ngữ he/she.",
      example: "What's he doing? – He's running.",
    },
    reading: {
      title: "Weekend fun",
      text: "It is the weekend. What's he doing? He's cycling in the park. What's she doing? She's flying a kite. Everyone is happy outdoors.",
      questions: [
        { q: "What is he doing?", options: ["Cycling", "Running", "Skating"], answer: 0 },
        { q: "What is she doing?", options: ["Painting", "Flying a kite", "Skipping"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'Cycling' nghĩa là gì?", options: ["đạp xe", "chạy bộ", "đi bộ"], answer: 0 },
      { q: "'Flying a kite' nghĩa là gì?", options: ["thả diều", "câu cá", "cắm trại"], answer: 0 },
      { q: "'Skating' nghĩa là gì?", options: ["trượt patin", "nhảy dây", "chạy bộ"], answer: 0 },
      { q: "'Walking' nghĩa là gì?", options: ["đi bộ", "chạy bộ", "đạp xe"], answer: 0 },
    ],
    quizExt: [
      { q: "'Camping' nghĩa là gì?", options: ["cắm trại", "câu cá", "dã ngoại"], answer: 0 },
      { q: "'Fishing' nghĩa là gì?", options: ["câu cá", "cắm trại", "thả diều"], answer: 0 },
      { q: "'Picnicking' nghĩa là gì?", options: ["đi dã ngoại", "cắm trại", "câu cá"], answer: 0 },
    ],
  },

  {
    id: "u20",
    group: 4,
    icon: "🦁",
    titleEn: "Unit 20: At the zoo",
    titleVi: "Ở sở thú",
    core: [
      { en: "elephant", vi: "con voi", icon: "🐘" },
      { en: "monkey", vi: "con khỉ", icon: "🐒" },
      { en: "horse", vi: "con ngựa", icon: "🐴" },
      { en: "parrot", vi: "con vẹt", icon: "🦜" },
      { en: "climbing", vi: "trèo", icon: "🧗" },
      { en: "counting", vi: "đếm", icon: "🔢" },
      { en: "dancing", vi: "nhảy múa", icon: "💃" },
    ],
    patterns: [
      { en: "What can you see? – I can see an elephant.", vi: "Bạn có thể thấy gì? – Tớ có thể thấy một con voi." },
      { en: "What's it doing? – It's climbing.", vi: "Nó đang làm gì? – Nó đang trèo." },
    ],
    ext: [
      { en: "tiger", vi: "con hổ", icon: "🐯" },
      { en: "lion", vi: "con sư tử", icon: "🦁" },
      { en: "giraffe", vi: "con hươu cao cổ", icon: "🦒" },
      { en: "zebra", vi: "con ngựa vằn", icon: "🦓" },
    ],
    grammar: {
      title: "Ôn tập: can + thì hiện tại tiếp diễn",
      explain: "Dùng can để nói khả năng nhìn thấy gì (What can you see? – I can see...), dùng am/is/are + V-ing để nói con vật đang làm gì.",
      example: "I can see a monkey. It is climbing a tree.",
    },
    reading: {
      title: "A day at the zoo",
      text: "Last Sunday, my class visited the zoo. What can you see? I can see an elephant and a monkey. The monkey is climbing a tree. It was a wonderful day.",
      questions: [
        { q: "What animals can they see?", options: ["Elephant and monkey", "Only elephant", "Fish and birds"], answer: 0 },
        { q: "What is the monkey doing?", options: ["Sleeping", "Climbing a tree", "Eating"], answer: 1 },
      ],
    },
    quizCore: [
      { q: "'Elephant' nghĩa là gì?", options: ["con voi", "con khỉ", "con ngựa"], answer: 0 },
      { q: "'Monkey' nghĩa là gì?", options: ["con khỉ", "con voi", "con vẹt"], answer: 0 },
      { q: "'Climbing' nghĩa là gì?", options: ["trèo", "đếm", "nhảy múa"], answer: 0 },
      { q: "'What can you see?' hỏi về điều gì?", options: ["Điều nhìn thấy được", "Tên con vật yêu thích", "Nơi ở"], answer: 0 },
    ],
    quizExt: [
      { q: "'Tiger' nghĩa là gì?", options: ["con hổ", "con sư tử", "con voi"], answer: 0 },
      { q: "'Giraffe' nghĩa là gì?", options: ["con hươu cao cổ", "con ngựa vằn", "con sư tử"], answer: 0 },
      { q: "'Zebra' nghĩa là gì?", options: ["con ngựa vằn", "con hổ", "con hươu cao cổ"], answer: 0 },
    ],
  },
];

// Cac chan review sau moi 5 unit
const REVIEWS = [
  { id: "r1", afterGroup: 1, titleVi: "Ôn tập 1", units: ["starter", "u1", "u2", "u3", "u4", "u5"] },
  { id: "r2", afterGroup: 2, titleVi: "Ôn tập 2", units: ["u6", "u7", "u8", "u9", "u10"] },
  { id: "r3", afterGroup: 3, titleVi: "Ôn tập 3", units: ["u11", "u12", "u13", "u14", "u15"] },
  { id: "r4", afterGroup: 4, titleVi: "Ôn tập 4", units: ["u16", "u17", "u18", "u19", "u20"] },
];

const GROUP_NAMES = {
  1: "Đảo Khởi đầu",
  2: "Đảo Trường học",
  3: "Đảo Gia đình",
  4: "Đảo Khám phá",
};
