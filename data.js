// ============================================================
// DU LIEU HOC TAP - TIENG ANH LOP 3 (bam sat SGK Global Success)
// Nguon: Sach hoc sinh Tap 1 (Unit 1-10) va Tap 2 (Unit 11-20)
// Tu vung "core" lay dung theo Bookmap chinh thuc cua sach.
// Tu vung "ext" (mo rong/nang cao, 6 tu/unit) do Claude bien soan them.
// grammar va reading la MANG gom nhieu phan tu (2 meo ngu phap,
// 2-3 bai doc hieu nang cao moi unit).
// Tat ca tu vung co truong "ipa" la phien am IPA chuan.
// ============================================================

const UNITS = [
  {
    "id": "starter",
    "group": 1,
    "icon": "✈️",
    "titleEn": "Starter",
    "titleVi": "Làm quen",
    "core": [
      {
        "en": "one",
        "vi": "số 1",
        "icon": "1️⃣",
        "ipa": "wən"
      },
      {
        "en": "two",
        "vi": "số 2",
        "icon": "2️⃣",
        "ipa": "tu"
      },
      {
        "en": "three",
        "vi": "số 3",
        "icon": "3️⃣",
        "ipa": "θri"
      },
      {
        "en": "four",
        "vi": "số 4",
        "icon": "4️⃣",
        "ipa": "fɔr"
      },
      {
        "en": "five",
        "vi": "số 5",
        "icon": "5️⃣",
        "ipa": "faɪv"
      },
      {
        "en": "six",
        "vi": "số 6",
        "icon": "6️⃣",
        "ipa": "sɪks"
      },
      {
        "en": "seven",
        "vi": "số 7",
        "icon": "7️⃣",
        "ipa": "ˈsɛvən"
      },
      {
        "en": "eight",
        "vi": "số 8",
        "icon": "8️⃣",
        "ipa": "eɪt"
      },
      {
        "en": "nine",
        "vi": "số 9",
        "icon": "9️⃣",
        "ipa": "naɪn"
      },
      {
        "en": "ten",
        "vi": "số 10",
        "icon": "🔟",
        "ipa": "tɛn"
      }
    ],
    "patterns": [
      {
        "en": "How many apples? Five apples.",
        "vi": "Có bao nhiêu quả táo? Năm quả táo."
      },
      {
        "en": "A, B, C, D...",
        "vi": "Bảng chữ cái tiếng Anh."
      }
    ],
    "ext": [
      {
        "en": "eleven",
        "vi": "số 11",
        "icon": "🔢",
        "ipa": "ˈilɛvən"
      },
      {
        "en": "twelve",
        "vi": "số 12",
        "icon": "🔢",
        "ipa": "twɛlv"
      },
      {
        "en": "twenty",
        "vi": "số 20",
        "icon": "🔢",
        "ipa": "tˈwɛnti"
      },
      {
        "en": "alphabet",
        "vi": "bảng chữ cái",
        "icon": "🔤",
        "ipa": "ˈælfəˌbɛt"
      },
      {
        "en": "thirteen",
        "vi": "số 13",
        "icon": "🔢",
        "ipa": "ˈθərˈtin"
      },
      {
        "en": "fourteen",
        "vi": "số 14",
        "icon": "🔢",
        "ipa": "ˌfɔrˈtin"
      }
    ],
    "grammar": [
      {
        "title": "Số đếm 1-10",
        "explain": "Tiếng Anh dùng one, two, three... để đếm số lượng. Sau số đếm từ 2 trở lên, danh từ thường thêm đuôi -s.",
        "example": "one book, two books, three books"
      },
      {
        "title": "Số đếm 11-20",
        "explain": "Các số từ 11 đến 20 thường dùng để nói tuổi hoặc đếm số lượng lớn hơn 10.",
        "example": "I am eleven years old. There are twenty students."
      }
    ],
    "reading": [
      {
        "title": "My classroom",
        "text": "Look at my classroom. I can see one board, two doors and ten desks. I can count from one to ten in English!",
        "questions": [
          {
            "q": "How many doors are there?",
            "options": [
              "One",
              "Two",
              "Ten"
            ],
            "answer": 1
          },
          {
            "q": "What can the writer count?",
            "options": [
              "Numbers",
              "Colours",
              "Animals"
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Counting stars",
        "text": "Let's count! One, two, three... up to twenty! Can you count the stars in the sky tonight?",
        "questions": [
          {
            "q": "What are they counting?",
            "options": [
              "Stars",
              "Animals",
              "Cars"
            ],
            "answer": 0
          },
          {
            "q": "Up to what number?",
            "options": [
              "Ten",
              "Twenty",
              "Thirty"
            ],
            "answer": 1
          }
        ]
      }
    ],
    "quizCore": [
      {
        "q": "5 là số gì trong tiếng Anh?",
        "options": [
          "four",
          "five",
          "six"
        ],
        "answer": 1
      },
      {
        "q": "'Nine' nghĩa là số mấy?",
        "options": [
          "7",
          "8",
          "9"
        ],
        "answer": 2
      },
      {
        "q": "Chọn từ đúng cho số 10",
        "options": [
          "ten",
          "tea",
          "tenn"
        ],
        "answer": 0
      },
      {
        "q": "'Three' là số mấy?",
        "options": [
          "2",
          "3",
          "4"
        ],
        "answer": 1
      },
      {
        "q": "'one' nghĩa là gì?",
        "options": [
          "số 1",
          "số 2",
          "số 5"
        ],
        "answer": 0
      },
      {
        "q": "'số 2' tiếng Anh là gì?",
        "options": [
          "two",
          "seven",
          "three"
        ],
        "answer": 0
      },
      {
        "q": "'three' nghĩa là gì?",
        "options": [
          "số 3",
          "số 4",
          "số 5"
        ],
        "answer": 0
      },
      {
        "q": "'số 4' tiếng Anh là gì?",
        "options": [
          "four",
          "three",
          "six"
        ],
        "answer": 0
      },
      {
        "q": "'five' nghĩa là gì?",
        "options": [
          "số 5",
          "số 7",
          "số 2"
        ],
        "answer": 0
      },
      {
        "q": "'số 6' tiếng Anh là gì?",
        "options": [
          "six",
          "seven",
          "eight"
        ],
        "answer": 0
      }
    ],
    "quizExt": [
      {
        "q": "'Twelve' là số mấy?",
        "options": [
          "11",
          "12",
          "20"
        ],
        "answer": 1
      },
      {
        "q": "Bảng chữ cái tiếng Anh gọi là gì?",
        "options": [
          "alphabet",
          "number",
          "letter box"
        ],
        "answer": 0
      },
      {
        "q": "'Twenty' là số mấy?",
        "options": [
          "12",
          "20",
          "02"
        ],
        "answer": 1
      },
      {
        "q": "'Thirteen' là số mấy?",
        "options": [
          "13",
          "14",
          "30"
        ],
        "answer": 0
      },
      {
        "q": "'Fourteen' là số mấy?",
        "options": [
          "4",
          "14",
          "40"
        ],
        "answer": 1
      },
      {
        "q": "Từ A đến Z trong tiếng Anh có bao nhiêu chữ cái?",
        "options": [
          "26",
          "24",
          "20"
        ],
        "answer": 0
      },
      {
        "q": "Số nào lớn hơn: eleven hay nineteen?",
        "options": [
          "eleven",
          "nineteen",
          "bằng nhau"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": "u1",
    "group": 1,
    "icon": "👋",
    "titleEn": "Unit 1: Hello",
    "titleVi": "Xin chào",
    "core": [
      {
        "en": "hello",
        "vi": "xin chào",
        "icon": "👋",
        "ipa": "hɛˈloʊ"
      },
      {
        "en": "hi",
        "vi": "chào (thân mật)",
        "icon": "👋",
        "ipa": "haɪ"
      },
      {
        "en": "goodbye",
        "vi": "tạm biệt",
        "icon": "👋",
        "ipa": "ˌgʊdˈbaɪ"
      },
      {
        "en": "bye",
        "vi": "tạm biệt (ngắn)",
        "icon": "👋",
        "ipa": "baɪ"
      },
      {
        "en": "fine",
        "vi": "khỏe",
        "icon": "😊",
        "ipa": "faɪn"
      },
      {
        "en": "how",
        "vi": "như thế nào",
        "icon": "❓",
        "ipa": "haʊ"
      },
      {
        "en": "thank you",
        "vi": "cảm ơn",
        "icon": "🙏",
        "ipa": "θæŋk ju"
      },
      {
        "en": "you",
        "vi": "bạn",
        "icon": "🧑",
        "ipa": "ju"
      }
    ],
    "patterns": [
      {
        "en": "Hello! I'm Mai.",
        "vi": "Xin chào! Tớ là Mai."
      },
      {
        "en": "Hi. How are you? – Fine, thank you.",
        "vi": "Chào cậu. Cậu khỏe không? – Tớ khỏe, cảm ơn."
      },
      {
        "en": "Goodbye!",
        "vi": "Tạm biệt!"
      },
      {
        "en": "Bye!",
        "vi": "Tạm biệt nhé!"
      }
    ],
    "ext": [
      {
        "en": "nice to meet you",
        "vi": "rất vui được gặp bạn",
        "icon": "🤝",
        "ipa": "nis tɪ mit ju"
      },
      {
        "en": "good night",
        "vi": "chúc ngủ ngon",
        "icon": "🌙",
        "ipa": "gʊd naɪt"
      },
      {
        "en": "see you later",
        "vi": "hẹn gặp lại",
        "icon": "👋",
        "ipa": "si ju ˈleɪtər"
      },
      {
        "en": "sorry",
        "vi": "xin lỗi",
        "icon": "😔",
        "ipa": "ˈsɑri"
      },
      {
        "en": "please",
        "vi": "làm ơn",
        "icon": "🙏",
        "ipa": "pliz"
      },
      {
        "en": "excuse me",
        "vi": "xin phép/xin lỗi (để hỏi)",
        "icon": "🙋",
        "ipa": "ɪkˈskjuz mi"
      }
    ],
    "grammar": [
      {
        "title": "'I'm' là viết tắt của 'I am'",
        "explain": "Trong giao tiếp hàng ngày, người bản ngữ thường nói tắt I am thành I'm.",
        "example": "I am Nam. -> I'm Nam."
      },
      {
        "title": "Chào hỏi theo thời gian trong ngày",
        "explain": "Tiếng Anh có lời chào khác nhau tùy thời điểm: sáng, chiều, tối, trước khi ngủ.",
        "example": "Good morning! Good afternoon! Good night!"
      }
    ],
    "reading": [
      {
        "title": "A new friend",
        "text": "It is morning. Mai says: 'Hello!' to her friend. Then she asks: 'How are you?' Her friend says: 'Fine, thank you.'",
        "questions": [
          {
            "q": "What does Mai say first?",
            "options": [
              "Hello",
              "Goodbye",
              "Bye"
            ],
            "answer": 0
          },
          {
            "q": "How does the friend feel?",
            "options": [
              "Tired",
              "Fine",
              "Sad"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Polite Ben",
        "text": "Ben always says 'please' and 'thank you'. When he makes a mistake, he says 'sorry'. Everyone likes Ben.",
        "questions": [
          {
            "q": "What does Ben say when he makes a mistake?",
            "options": [
              "Sorry",
              "Please",
              "Bye"
            ],
            "answer": 0
          },
          {
            "q": "Why do people like Ben?",
            "options": [
              "He is polite",
              "He is tall",
              "He is funny"
            ],
            "answer": 0
          }
        ]
      }
    ],
    "quizCore": [
      {
        "q": "Gặp bạn buổi sáng, em có thể nói gì?",
        "options": [
          "Hello",
          "Goodbye",
          "Bye"
        ],
        "answer": 0
      },
      {
        "q": "'Goodbye' nghĩa là gì?",
        "options": [
          "Xin chào",
          "Tạm biệt",
          "Cảm ơn"
        ],
        "answer": 1
      },
      {
        "q": "'Fine' nghĩa là gì?",
        "options": [
          "Khỏe",
          "Buồn",
          "Mệt"
        ],
        "answer": 0
      },
      {
        "q": "'Thank you' nghĩa là gì?",
        "options": [
          "Cảm ơn",
          "Xin lỗi",
          "Tạm biệt"
        ],
        "answer": 0
      },
      {
        "q": "'hello' nghĩa là gì?",
        "options": [
          "xin chào",
          "như thế nào",
          "chào (thân mật)"
        ],
        "answer": 0
      },
      {
        "q": "'chào (thân mật)' tiếng Anh là gì?",
        "options": [
          "hi",
          "goodbye",
          "bye"
        ],
        "answer": 0
      },
      {
        "q": "'goodbye' nghĩa là gì?",
        "options": [
          "tạm biệt",
          "tạm biệt (ngắn)",
          "bạn"
        ],
        "answer": 0
      },
      {
        "q": "'tạm biệt (ngắn)' tiếng Anh là gì?",
        "options": [
          "bye",
          "hello",
          "hi"
        ],
        "answer": 0
      },
      {
        "q": "'fine' nghĩa là gì?",
        "options": [
          "khỏe",
          "chào (thân mật)",
          "xin chào"
        ],
        "answer": 0
      },
      {
        "q": "'như thế nào' tiếng Anh là gì?",
        "options": [
          "how",
          "bye",
          "hi"
        ],
        "answer": 0
      }
    ],
    "quizExt": [
      {
        "q": "'Nice to meet you' nghĩa là gì?",
        "options": [
          "Tạm biệt nhé",
          "Rất vui được gặp bạn",
          "Chúc ngủ ngon"
        ],
        "answer": 1
      },
      {
        "q": "Trước khi đi ngủ ta nói gì?",
        "options": [
          "Good night",
          "Hello",
          "Fine"
        ],
        "answer": 0
      },
      {
        "q": "'I'm' là viết tắt của cụm nào?",
        "options": [
          "I am",
          "I are",
          "I is"
        ],
        "answer": 0
      },
      {
        "q": "'Sorry' nghĩa là gì?",
        "options": [
          "xin lỗi",
          "cảm ơn",
          "làm ơn"
        ],
        "answer": 0
      },
      {
        "q": "'Please' nghĩa là gì?",
        "options": [
          "làm ơn",
          "xin lỗi",
          "khỏe"
        ],
        "answer": 0
      },
      {
        "q": "Khi mắc lỗi, em nên nói gì?",
        "options": [
          "Sorry",
          "Fine",
          "Bye"
        ],
        "answer": 0
      },
      {
        "q": "Khi nhờ ai giúp, em nên thêm từ gì cho lịch sự?",
        "options": [
          "please",
          "sorry",
          "no"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "u2",
    "group": 1,
    "icon": "🏷️",
    "titleEn": "Unit 2: Our names",
    "titleVi": "Tên của chúng ta",
    "core": [
      {
        "en": "name",
        "vi": "tên",
        "icon": "🏷️",
        "ipa": "neɪm"
      },
      {
        "en": "my",
        "vi": "của tôi",
        "icon": "🙋",
        "ipa": "maɪ"
      },
      {
        "en": "your",
        "vi": "của bạn",
        "icon": "🫵",
        "ipa": "jʊr"
      },
      {
        "en": "old",
        "vi": "tuổi (nhiều tuổi)",
        "icon": "🎂",
        "ipa": "oʊld"
      },
      {
        "en": "what",
        "vi": "cái gì",
        "icon": "❓",
        "ipa": "wət"
      },
      {
        "en": "how",
        "vi": "như thế nào",
        "icon": "❓",
        "ipa": "haʊ"
      }
    ],
    "patterns": [
      {
        "en": "What's your name? – My name is Linh.",
        "vi": "Tên bạn là gì? – Tên tớ là Linh."
      },
      {
        "en": "How old are you? – I'm eight years old.",
        "vi": "Bạn bao nhiêu tuổi? – Tớ tám tuổi."
      }
    ],
    "ext": [
      {
        "en": "nickname",
        "vi": "biệt danh",
        "icon": "😎",
        "ipa": "ˈnɪkˌneɪm"
      },
      {
        "en": "full name",
        "vi": "họ và tên đầy đủ",
        "icon": "📝",
        "ipa": "fʊl neɪm"
      },
      {
        "en": "classmate",
        "vi": "bạn cùng lớp",
        "icon": "🧑‍🤝‍🧑",
        "ipa": "ˈklæsˌmeɪt"
      },
      {
        "en": "young",
        "vi": "trẻ",
        "icon": "🧒",
        "ipa": "jəŋ"
      },
      {
        "en": "birthday",
        "vi": "sinh nhật",
        "icon": "🎂",
        "ipa": "ˈbərθˌdeɪ"
      },
      {
        "en": "surname",
        "vi": "họ",
        "icon": "📝",
        "ipa": "ˈsərˌneɪm"
      }
    ],
    "grammar": [
      {
        "title": "Hỏi tên và tuổi: What's...? / How old...?",
        "explain": "What's your name? dùng để hỏi tên. How old are you? dùng để hỏi tuổi, trả lời bằng I'm + số tuổi + years old.",
        "example": "What's your name? – My name is Nam. How old are you? – I'm nine years old."
      },
      {
        "title": "How old + are/is",
        "explain": "Dùng How old are you? khi hỏi trực tiếp người đối diện, How old is he/she? khi hỏi về người thứ ba.",
        "example": "How old is she? – She's ten years old."
      }
    ],
    "reading": [
      {
        "title": "Meet Phong",
        "text": "Hi, my name is Phong. I am nine years old. What's your name? How old are you?",
        "questions": [
          {
            "q": "What is the boy's name?",
            "options": [
              "Phong",
              "Nam",
              "Linh"
            ],
            "answer": 0
          },
          {
            "q": "How old is he?",
            "options": [
              "Eight",
              "Nine",
              "Ten"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "My birthday",
        "text": "My birthday is in May. I am nine years old this year. What's your name? How old are you?",
        "questions": [
          {
            "q": "When is the writer's birthday?",
            "options": [
              "May",
              "June",
              "July"
            ],
            "answer": 0
          },
          {
            "q": "How old is the writer?",
            "options": [
              "Eight",
              "Nine",
              "Ten"
            ],
            "answer": 1
          }
        ]
      }
    ],
    "quizCore": [
      {
        "q": "'What's your name?' nghĩa là gì?",
        "options": [
          "Bạn bao nhiêu tuổi?",
          "Tên bạn là gì?",
          "Bạn ở đâu?"
        ],
        "answer": 1
      },
      {
        "q": "'Old' trong 'How old are you?' liên quan đến điều gì?",
        "options": [
          "Tuổi",
          "Tên",
          "Màu sắc"
        ],
        "answer": 0
      },
      {
        "q": "'My' nghĩa là gì?",
        "options": [
          "của tôi",
          "của bạn",
          "của cậu ấy"
        ],
        "answer": 0
      },
      {
        "q": "'Your' nghĩa là gì?",
        "options": [
          "của bạn",
          "của tôi",
          "của họ"
        ],
        "answer": 0
      },
      {
        "q": "'name' nghĩa là gì?",
        "options": [
          "tên",
          "của tôi",
          "tuổi (nhiều tuổi)"
        ],
        "answer": 0
      },
      {
        "q": "'của tôi' tiếng Anh là gì?",
        "options": [
          "my",
          "old",
          "what"
        ],
        "answer": 0
      },
      {
        "q": "'your' nghĩa là gì?",
        "options": [
          "của bạn",
          "tên",
          "tuổi (nhiều tuổi)"
        ],
        "answer": 0
      },
      {
        "q": "'tuổi (nhiều tuổi)' tiếng Anh là gì?",
        "options": [
          "old",
          "my",
          "what"
        ],
        "answer": 0
      },
      {
        "q": "'what' nghĩa là gì?",
        "options": [
          "cái gì",
          "của tôi",
          "như thế nào"
        ],
        "answer": 0
      },
      {
        "q": "'như thế nào' tiếng Anh là gì?",
        "options": [
          "how",
          "what",
          "old"
        ],
        "answer": 0
      }
    ],
    "quizExt": [
      {
        "q": "'Nickname' nghĩa là gì?",
        "options": [
          "biệt danh",
          "họ",
          "lớp học"
        ],
        "answer": 0
      },
      {
        "q": "'Classmate' nghĩa là gì?",
        "options": [
          "bạn cùng lớp",
          "thầy giáo",
          "anh trai"
        ],
        "answer": 0
      },
      {
        "q": "Trả lời 'How old are you?' đúng cách là câu nào?",
        "options": [
          "I'm eight years old.",
          "My name is Nam.",
          "Fine, thank you."
        ],
        "answer": 0
      },
      {
        "q": "'Young' nghĩa là gì?",
        "options": [
          "trẻ",
          "già",
          "cao"
        ],
        "answer": 0
      },
      {
        "q": "'Birthday' nghĩa là gì?",
        "options": [
          "sinh nhật",
          "tên",
          "tuổi"
        ],
        "answer": 0
      },
      {
        "q": "'Surname' nghĩa là gì?",
        "options": [
          "họ",
          "tên gọi",
          "biệt danh"
        ],
        "answer": 0
      },
      {
        "q": "Hỏi tuổi người thứ ba (cô ấy) dùng câu nào?",
        "options": [
          "How old is she?",
          "How old are you?",
          "What's her name?"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "u3",
    "group": 1,
    "icon": "🤝",
    "titleEn": "Unit 3: Our friends",
    "titleVi": "Bạn bè của chúng ta",
    "core": [
      {
        "en": "friend",
        "vi": "bạn bè",
        "icon": "🤝",
        "ipa": "frɛnd"
      },
      {
        "en": "this",
        "vi": "đây (gần)",
        "icon": "👉",
        "ipa": "ðɪs"
      },
      {
        "en": "that",
        "vi": "kia (xa)",
        "icon": "👆",
        "ipa": "ðət"
      },
      {
        "en": "it",
        "vi": "nó",
        "icon": "🔹",
        "ipa": "ɪt"
      },
      {
        "en": "yes",
        "vi": "đúng vậy",
        "icon": "✅",
        "ipa": "jɛs"
      },
      {
        "en": "no",
        "vi": "không",
        "icon": "❌",
        "ipa": "noʊ"
      },
      {
        "en": "Mr",
        "vi": "ông/thầy (dùng trước tên nam)",
        "icon": "👨",
        "ipa": "ˈmɪstər"
      },
      {
        "en": "Ms",
        "vi": "cô/bà (dùng trước tên nữ)",
        "icon": "👩",
        "ipa": "mɪz"
      },
      {
        "en": "teacher",
        "vi": "giáo viên",
        "icon": "👩‍🏫",
        "ipa": "ˈtiʧər"
      }
    ],
    "patterns": [
      {
        "en": "This is Nam.",
        "vi": "Đây là Nam."
      },
      {
        "en": "That's my friend.",
        "vi": "Kia là bạn của tớ."
      },
      {
        "en": "Is this your teacher? – Yes, it is.",
        "vi": "Đây có phải là giáo viên của bạn không? – Đúng vậy."
      },
      {
        "en": "Is this your teacher? – No, it isn't.",
        "vi": "Đây có phải là giáo viên của bạn không? – Không phải."
      }
    ],
    "ext": [
      {
        "en": "best friend",
        "vi": "bạn thân nhất",
        "icon": "💖",
        "ipa": "bɛst frɛnd"
      },
      {
        "en": "kind",
        "vi": "tốt bụng",
        "icon": "😊",
        "ipa": "kaɪnd"
      },
      {
        "en": "funny",
        "vi": "vui tính",
        "icon": "😄",
        "ipa": "ˈfəni"
      },
      {
        "en": "smart",
        "vi": "thông minh",
        "icon": "🧠",
        "ipa": "smɑrt"
      },
      {
        "en": "handsome",
        "vi": "đẹp trai",
        "icon": "😎",
        "ipa": "ˈhænsəm"
      },
      {
        "en": "pretty",
        "vi": "xinh xắn",
        "icon": "🌸",
        "ipa": "ˈprɪti"
      }
    ],
    "grammar": [
      {
        "title": "This (ở gần) và That (ở xa)",
        "explain": "Dùng This để chỉ người/vật ở gần, That để chỉ người/vật ở xa. Is this/that...? dùng để hỏi xác nhận, trả lời Yes, it is./No, it isn't.",
        "example": "This is my friend. That's Mr Long."
      },
      {
        "title": "Is/Are trong câu hỏi giới thiệu",
        "explain": "Dùng Is đối với một người (he/she/it), dùng Are đối với nhiều người (they) khi hỏi xác nhận.",
        "example": "Are these your friends? – Yes, they are."
      }
    ],
    "reading": [
      {
        "title": "My best friend",
        "text": "This is Huy. He is my friend. Is this your teacher? No, it isn't. This is Ms Hoa, my teacher.",
        "questions": [
          {
            "q": "Who is Huy?",
            "options": [
              "The writer's friend",
              "The teacher",
              "Ms Hoa"
            ],
            "answer": 0
          },
          {
            "q": "Who is Ms Hoa?",
            "options": [
              "A friend",
              "The teacher",
              "A student"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "New classmate",
        "text": "Is this your new classmate? Yes, it is. She is smart and kind. Her name is Lucy.",
        "questions": [
          {
            "q": "Who is the new classmate?",
            "options": [
              "Lucy",
              "Ms Hoa",
              "Mai"
            ],
            "answer": 0
          },
          {
            "q": "What is she like?",
            "options": [
              "Smart and kind",
              "Tall and funny",
              "Shy and quiet"
            ],
            "answer": 0
          }
        ]
      }
    ],
    "quizCore": [
      {
        "q": "'Friend' nghĩa là gì?",
        "options": [
          "bạn bè",
          "gia đình",
          "thầy cô"
        ],
        "answer": 0
      },
      {
        "q": "Dùng từ nào cho người/vật ở gần?",
        "options": [
          "This",
          "That",
          "It"
        ],
        "answer": 0
      },
      {
        "q": "'Teacher' nghĩa là gì?",
        "options": [
          "giáo viên",
          "bạn học",
          "học sinh"
        ],
        "answer": 0
      },
      {
        "q": "'Yes, it is.' trả lời cho câu hỏi dạng nào?",
        "options": [
          "Is this/that...?",
          "What's this?",
          "How old...?"
        ],
        "answer": 0
      },
      {
        "q": "'friend' nghĩa là gì?",
        "options": [
          "bạn bè",
          "đúng vậy",
          "ông/thầy (dùng trước tên nam)"
        ],
        "answer": 0
      },
      {
        "q": "'đây (gần)' tiếng Anh là gì?",
        "options": [
          "this",
          "Ms",
          "Mr"
        ],
        "answer": 0
      },
      {
        "q": "'that' nghĩa là gì?",
        "options": [
          "kia (xa)",
          "bạn bè",
          "giáo viên"
        ],
        "answer": 0
      },
      {
        "q": "'nó' tiếng Anh là gì?",
        "options": [
          "it",
          "teacher",
          "no"
        ],
        "answer": 0
      },
      {
        "q": "'yes' nghĩa là gì?",
        "options": [
          "đúng vậy",
          "đây (gần)",
          "không"
        ],
        "answer": 0
      },
      {
        "q": "'không' tiếng Anh là gì?",
        "options": [
          "no",
          "this",
          "Mr"
        ],
        "answer": 0
      }
    ],
    "quizExt": [
      {
        "q": "'Best friend' nghĩa là gì?",
        "options": [
          "bạn thân nhất",
          "bạn cùng bàn",
          "người lạ"
        ],
        "answer": 0
      },
      {
        "q": "'Funny' nghĩa là gì?",
        "options": [
          "buồn",
          "vui tính",
          "giận dữ"
        ],
        "answer": 1
      },
      {
        "q": "Chọn câu đúng khi giới thiệu người ở xa",
        "options": [
          "That's my friend.",
          "This am my friend.",
          "That friend is."
        ],
        "answer": 0
      },
      {
        "q": "'Smart' nghĩa là gì?",
        "options": [
          "thông minh",
          "cao",
          "vui tính"
        ],
        "answer": 0
      },
      {
        "q": "'Pretty' nghĩa là gì?",
        "options": [
          "xinh xắn",
          "đẹp trai",
          "tốt bụng"
        ],
        "answer": 0
      },
      {
        "q": "'Handsome' thường dùng để khen ai?",
        "options": [
          "bạn nam",
          "bạn nữ",
          "cả hai"
        ],
        "answer": 0
      },
      {
        "q": "Hỏi xác nhận nhiều người dùng từ nào?",
        "options": [
          "Are",
          "Is",
          "Am"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "u4",
    "group": 1,
    "icon": "🧑",
    "titleEn": "Unit 4: Our bodies",
    "titleVi": "Cơ thể của chúng ta",
    "core": [
      {
        "en": "face",
        "vi": "khuôn mặt",
        "icon": "😊",
        "ipa": "feɪs"
      },
      {
        "en": "hair",
        "vi": "tóc",
        "icon": "👱",
        "ipa": "hɛr"
      },
      {
        "en": "eye",
        "vi": "mắt",
        "icon": "👀",
        "ipa": "aɪ"
      },
      {
        "en": "nose",
        "vi": "mũi",
        "icon": "👃",
        "ipa": "noʊz"
      },
      {
        "en": "mouth",
        "vi": "miệng",
        "icon": "👄",
        "ipa": "maʊθ"
      },
      {
        "en": "ear",
        "vi": "tai",
        "icon": "👂",
        "ipa": "ɪr"
      },
      {
        "en": "hand",
        "vi": "bàn tay",
        "icon": "🖐️",
        "ipa": "hænd"
      },
      {
        "en": "touch",
        "vi": "chạm vào",
        "icon": "👆",
        "ipa": "təʧ"
      },
      {
        "en": "open",
        "vi": "mở",
        "icon": "🔓",
        "ipa": "ˈoʊpən"
      }
    ],
    "patterns": [
      {
        "en": "What's this? – It's my nose.",
        "vi": "Đây là gì? – Đây là mũi của tớ."
      },
      {
        "en": "Touch your ear. Open your mouth.",
        "vi": "Chạm vào tai của bạn. Mở miệng ra."
      }
    ],
    "ext": [
      {
        "en": "shoulders",
        "vi": "vai",
        "icon": "🧑",
        "ipa": "ˈʃoʊldərz"
      },
      {
        "en": "fingers",
        "vi": "ngón tay",
        "icon": "✋",
        "ipa": "ˈfɪŋgərz"
      },
      {
        "en": "toes",
        "vi": "ngón chân",
        "icon": "🦶",
        "ipa": "toʊz"
      },
      {
        "en": "head",
        "vi": "đầu",
        "icon": "😊",
        "ipa": "hɛd"
      },
      {
        "en": "arm",
        "vi": "cánh tay",
        "icon": "💪",
        "ipa": "ɑrm"
      },
      {
        "en": "leg",
        "vi": "chân",
        "icon": "🦵",
        "ipa": "lɛg"
      }
    ],
    "grammar": [
      {
        "title": "Câu mệnh lệnh (Imperative)",
        "explain": "Dùng động từ nguyên mẫu đứng đầu câu để yêu cầu ai đó làm gì, ví dụ với touch (chạm) và open (mở).",
        "example": "Touch your nose. Open your eyes."
      },
      {
        "title": "Số nhiều của bộ phận cơ thể",
        "explain": "Bộ phận cơ thể có đôi (mắt, tai, tay, chân) thường dùng ở số nhiều, thêm đuôi -s.",
        "example": "eye -> eyes, hand -> hands, ear -> ears"
      }
    ],
    "reading": [
      {
        "title": "Simon says",
        "text": "In the game, the teacher says: 'Touch your ear! Open your mouth! Touch your nose!' The children listen and touch the right part.",
        "questions": [
          {
            "q": "Who gives the instructions?",
            "options": [
              "The teacher",
              "A friend",
              "The mother"
            ],
            "answer": 0
          },
          {
            "q": "What do the children do?",
            "options": [
              "Sing a song",
              "Touch body parts",
              "Draw pictures"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Wash your hands",
        "text": "Before eating, wash your hands. Open your eyes and look at your hands. Are they clean? Good job!",
        "questions": [
          {
            "q": "When should you wash your hands?",
            "options": [
              "Before eating",
              "Before sleeping",
              "After running"
            ],
            "answer": 0
          },
          {
            "q": "What should you look at?",
            "options": [
              "Your hands",
              "Your feet",
              "Your hair"
            ],
            "answer": 0
          }
        ]
      }
    ],
    "quizCore": [
      {
        "q": "'Eye' nghĩa là gì?",
        "options": [
          "mũi",
          "mắt",
          "tai"
        ],
        "answer": 1
      },
      {
        "q": "'Mouth' nghĩa là gì?",
        "options": [
          "miệng",
          "tay",
          "chân"
        ],
        "answer": 0
      },
      {
        "q": "'Hair' nghĩa là gì?",
        "options": [
          "tóc",
          "tai",
          "mặt"
        ],
        "answer": 0
      },
      {
        "q": "'Touch' nghĩa là gì?",
        "options": [
          "mở",
          "chạm vào",
          "nhìn"
        ],
        "answer": 1
      },
      {
        "q": "'face' nghĩa là gì?",
        "options": [
          "khuôn mặt",
          "chạm vào",
          "bàn tay"
        ],
        "answer": 0
      },
      {
        "q": "'tóc' tiếng Anh là gì?",
        "options": [
          "hair",
          "eye",
          "hand"
        ],
        "answer": 0
      },
      {
        "q": "'eye' nghĩa là gì?",
        "options": [
          "mắt",
          "miệng",
          "tai"
        ],
        "answer": 0
      },
      {
        "q": "'mũi' tiếng Anh là gì?",
        "options": [
          "nose",
          "touch",
          "eye"
        ],
        "answer": 0
      },
      {
        "q": "'mouth' nghĩa là gì?",
        "options": [
          "miệng",
          "bàn tay",
          "mũi"
        ],
        "answer": 0
      },
      {
        "q": "'tai' tiếng Anh là gì?",
        "options": [
          "ear",
          "mouth",
          "face"
        ],
        "answer": 0
      }
    ],
    "quizExt": [
      {
        "q": "'Shoulders' nghĩa là gì?",
        "options": [
          "vai",
          "ngón tay",
          "ngón chân"
        ],
        "answer": 0
      },
      {
        "q": "'Fingers' nghĩa là gì?",
        "options": [
          "ngón tay",
          "ngón chân",
          "bàn tay"
        ],
        "answer": 0
      },
      {
        "q": "Câu mệnh lệnh bắt đầu bằng gì?",
        "options": [
          "Chủ ngữ",
          "Động từ",
          "Tính từ"
        ],
        "answer": 1
      },
      {
        "q": "'Head' nghĩa là gì?",
        "options": [
          "đầu",
          "mặt",
          "tóc"
        ],
        "answer": 0
      },
      {
        "q": "'Arm' nghĩa là gì?",
        "options": [
          "cánh tay",
          "bàn tay",
          "ngón tay"
        ],
        "answer": 0
      },
      {
        "q": "'Leg' nghĩa là gì?",
        "options": [
          "chân",
          "vai",
          "lưng"
        ],
        "answer": 0
      },
      {
        "q": "Số nhiều của 'eye' là gì?",
        "options": [
          "eyes",
          "eyies",
          "eye"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "u5",
    "group": 1,
    "icon": "🎨",
    "titleEn": "Unit 5: My hobbies",
    "titleVi": "Sở thích của tôi",
    "core": [
      {
        "en": "cooking",
        "vi": "nấu ăn",
        "icon": "🍳",
        "ipa": "ˈkʊkɪŋ"
      },
      {
        "en": "dancing",
        "vi": "nhảy múa",
        "icon": "💃",
        "ipa": "ˈdænsɪŋ"
      },
      {
        "en": "drawing",
        "vi": "vẽ tranh",
        "icon": "🎨",
        "ipa": "drɔɪŋ"
      },
      {
        "en": "painting",
        "vi": "vẽ màu",
        "icon": "🖌️",
        "ipa": "ˈpeɪnɪŋ"
      },
      {
        "en": "running",
        "vi": "chạy bộ",
        "icon": "🏃",
        "ipa": "ˈrənɪŋ"
      },
      {
        "en": "singing",
        "vi": "hát",
        "icon": "🎤",
        "ipa": "ˈsɪŋɪŋ"
      },
      {
        "en": "swimming",
        "vi": "bơi lội",
        "icon": "🏊",
        "ipa": "sˈwɪmɪŋ"
      },
      {
        "en": "walking",
        "vi": "đi bộ",
        "icon": "🚶",
        "ipa": "ˈwɔkɪŋ"
      }
    ],
    "patterns": [
      {
        "en": "What's your hobby? – It's swimming.",
        "vi": "Sở thích của bạn là gì? – Đó là bơi lội."
      },
      {
        "en": "What's your hobby? – I like singing.",
        "vi": "Sở thích của bạn là gì? – Tớ thích hát."
      }
    ],
    "ext": [
      {
        "en": "collecting stamps",
        "vi": "sưu tầm tem",
        "icon": "📮",
        "ipa": "kəˈlɛktɪŋ stæmps"
      },
      {
        "en": "playing chess",
        "vi": "chơi cờ",
        "icon": "♟️",
        "ipa": "pleɪɪŋ ʧɛs"
      },
      {
        "en": "gardening",
        "vi": "làm vườn",
        "icon": "🪴",
        "ipa": "ˈgɑrdənɪŋ"
      },
      {
        "en": "reading books",
        "vi": "đọc sách",
        "icon": "📖",
        "ipa": "ˈrɛdɪŋ bʊks"
      },
      {
        "en": "playing games",
        "vi": "chơi trò chơi",
        "icon": "🎮",
        "ipa": "pleɪɪŋ geɪmz"
      },
      {
        "en": "riding a bike",
        "vi": "đạp xe đạp",
        "icon": "🚲",
        "ipa": "ˈraɪdɪŋ ə baɪk"
      }
    ],
    "grammar": [
      {
        "title": "Động từ thêm -ing khi nói về sở thích",
        "explain": "Khi nói về sở thích, động từ thường ở dạng thêm đuôi -ing (V-ing), đứng sau like hoặc làm chủ ngữ của câu.",
        "example": "I like swimming. My hobby is drawing."
      },
      {
        "title": "I don't like + V-ing (không thích)",
        "explain": "Dùng don't like + V-ing để nói về việc không thích làm gì, ngược lại với like + V-ing.",
        "example": "I don't like running. I like swimming."
      }
    ],
    "reading": [
      {
        "title": "Lan's free time",
        "text": "In her free time, Lan likes cooking. She also likes singing. On Sundays, she goes swimming with her father. She is very happy.",
        "questions": [
          {
            "q": "What does Lan like doing?",
            "options": [
              "Cooking and singing",
              "Running and walking",
              "Drawing and dancing"
            ],
            "answer": 0
          },
          {
            "q": "Who does Lan go swimming with?",
            "options": [
              "Her mother",
              "Her friend",
              "Her father"
            ],
            "answer": 2
          }
        ]
      },
      {
        "title": "Weekend hobbies",
        "text": "On weekends, Nam likes riding a bike. He doesn't like reading books. His sister likes playing games.",
        "questions": [
          {
            "q": "What does Nam like?",
            "options": [
              "Riding a bike",
              "Reading books",
              "Painting"
            ],
            "answer": 0
          },
          {
            "q": "What does his sister like?",
            "options": [
              "Cooking",
              "Playing games",
              "Dancing"
            ],
            "answer": 1
          }
        ]
      }
    ],
    "quizCore": [
      {
        "q": "'Swimming' nghĩa là gì?",
        "options": [
          "bơi lội",
          "đi bộ",
          "vẽ tranh"
        ],
        "answer": 0
      },
      {
        "q": "'Cooking' nghĩa là gì?",
        "options": [
          "nấu ăn",
          "hát",
          "nhảy múa"
        ],
        "answer": 0
      },
      {
        "q": "'What's your hobby?' hỏi về điều gì?",
        "options": [
          "Tên bạn",
          "Sở thích",
          "Tuổi"
        ],
        "answer": 1
      },
      {
        "q": "'Walking' nghĩa là gì?",
        "options": [
          "đi bộ",
          "chạy bộ",
          "bơi lội"
        ],
        "answer": 0
      },
      {
        "q": "'cooking' nghĩa là gì?",
        "options": [
          "nấu ăn",
          "nhảy múa",
          "bơi lội"
        ],
        "answer": 0
      },
      {
        "q": "'nhảy múa' tiếng Anh là gì?",
        "options": [
          "dancing",
          "cooking",
          "painting"
        ],
        "answer": 0
      },
      {
        "q": "'drawing' nghĩa là gì?",
        "options": [
          "vẽ tranh",
          "nấu ăn",
          "hát"
        ],
        "answer": 0
      },
      {
        "q": "'vẽ màu' tiếng Anh là gì?",
        "options": [
          "painting",
          "singing",
          "running"
        ],
        "answer": 0
      },
      {
        "q": "'running' nghĩa là gì?",
        "options": [
          "chạy bộ",
          "nhảy múa",
          "nấu ăn"
        ],
        "answer": 0
      },
      {
        "q": "'hát' tiếng Anh là gì?",
        "options": [
          "singing",
          "running",
          "dancing"
        ],
        "answer": 0
      }
    ],
    "quizExt": [
      {
        "q": "'Collecting stamps' nghĩa là gì?",
        "options": [
          "sưu tầm tem",
          "chơi cờ",
          "làm vườn"
        ],
        "answer": 0
      },
      {
        "q": "Sau 'like' động từ thường thêm gì?",
        "options": [
          "-s",
          "-ing",
          "-ed"
        ],
        "answer": 1
      },
      {
        "q": "'Gardening' nghĩa là gì?",
        "options": [
          "làm vườn",
          "nấu ăn",
          "may vá"
        ],
        "answer": 0
      },
      {
        "q": "'Reading books' nghĩa là gì?",
        "options": [
          "đọc sách",
          "chơi trò chơi",
          "đạp xe"
        ],
        "answer": 0
      },
      {
        "q": "'Riding a bike' nghĩa là gì?",
        "options": [
          "đạp xe đạp",
          "chạy bộ",
          "bơi lội"
        ],
        "answer": 0
      },
      {
        "q": "'I don't like' nghĩa là gì?",
        "options": [
          "Tôi không thích",
          "Tôi thích",
          "Tôi là"
        ],
        "answer": 0
      },
      {
        "q": "'Playing games' nghĩa là gì?",
        "options": [
          "chơi trò chơi",
          "đọc sách",
          "nấu ăn"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "u6",
    "group": 2,
    "icon": "🏫",
    "titleEn": "Unit 6: Our school",
    "titleVi": "Trường học của chúng ta",
    "core": [
      {
        "en": "school",
        "vi": "trường học",
        "icon": "🏫",
        "ipa": "skul"
      },
      {
        "en": "classroom",
        "vi": "phòng học",
        "icon": "🏫",
        "ipa": "ˈklæsˌrum"
      },
      {
        "en": "playground",
        "vi": "sân chơi",
        "icon": "🏞️",
        "ipa": "ˈpleɪˌgraʊnd"
      },
      {
        "en": "library",
        "vi": "thư viện",
        "icon": "📚",
        "ipa": "ˈlaɪbrɛˌri"
      },
      {
        "en": "gym",
        "vi": "phòng thể dục",
        "icon": "🏋️",
        "ipa": "ʤɪm"
      },
      {
        "en": "art room",
        "vi": "phòng mỹ thuật",
        "icon": "🎨",
        "ipa": "ɑrt rum"
      },
      {
        "en": "music room",
        "vi": "phòng âm nhạc",
        "icon": "🎵",
        "ipa": "mˈjuzɪk rum"
      },
      {
        "en": "computer room",
        "vi": "phòng vi tính",
        "icon": "💻",
        "ipa": "kəmˈpjutər rum"
      }
    ],
    "patterns": [
      {
        "en": "Is this our classroom? – Yes, it is.",
        "vi": "Đây có phải là phòng học của chúng ta không? – Đúng vậy."
      },
      {
        "en": "Is this our classroom? – No, it isn't.",
        "vi": "Đây có phải là phòng học của chúng ta không? – Không phải."
      },
      {
        "en": "Let's go to the library. – OK, let's go.",
        "vi": "Hãy đến thư viện đi. – Được, đi thôi."
      }
    ],
    "ext": [
      {
        "en": "principal's office",
        "vi": "phòng hiệu trưởng",
        "icon": "🏢",
        "ipa": "ˈprɪnsəpəlz ˈɔfəs"
      },
      {
        "en": "staff room",
        "vi": "phòng giáo viên",
        "icon": "👩‍🏫",
        "ipa": "stæf rum"
      },
      {
        "en": "canteen",
        "vi": "căng tin",
        "icon": "🍽️",
        "ipa": "kænˈtin"
      },
      {
        "en": "dining hall",
        "vi": "nhà ăn",
        "icon": "🍽️",
        "ipa": "ˈdaɪnɪŋ hɔl"
      },
      {
        "en": "school gate",
        "vi": "cổng trường",
        "icon": "🚪",
        "ipa": "skul geɪt"
      },
      {
        "en": "flag",
        "vi": "lá cờ",
        "icon": "🚩",
        "ipa": "flæg"
      }
    ],
    "grammar": [
      {
        "title": "Let's + động từ nguyên mẫu (rủ ai làm gì)",
        "explain": "Dùng Let's + động từ để rủ người khác cùng làm gì. Trả lời đồng ý bằng OK, let's go.",
        "example": "Let's go to the gym. – OK, let's go."
      },
      {
        "title": "Where is/are + địa điểm trong trường",
        "explain": "Dùng Where's...? cho một nơi (số ít), Where are...? cho nhiều nơi (số nhiều).",
        "example": "Where's the library? – It's over there."
      }
    ],
    "reading": [
      {
        "title": "My school",
        "text": "My school is big. There is a playground, a library and a gym. Let's go to the art room. It is next to the music room.",
        "questions": [
          {
            "q": "What is next to the music room?",
            "options": [
              "The library",
              "The art room",
              "The gym"
            ],
            "answer": 1
          },
          {
            "q": "How is the school?",
            "options": [
              "Small",
              "Big",
              "Old"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "School tour",
        "text": "Welcome to our school! The dining hall is next to the gym. The school gate is near the flag. Let's go to the classroom!",
        "questions": [
          {
            "q": "What is next to the gym?",
            "options": [
              "The dining hall",
              "The library",
              "The garden"
            ],
            "answer": 0
          },
          {
            "q": "What is near the flag?",
            "options": [
              "The school gate",
              "The canteen",
              "The music room"
            ],
            "answer": 0
          }
        ]
      }
    ],
    "quizCore": [
      {
        "q": "'Library' nghĩa là gì?",
        "options": [
          "thư viện",
          "căng tin",
          "sân chơi"
        ],
        "answer": 0
      },
      {
        "q": "'Playground' nghĩa là gì?",
        "options": [
          "sân chơi",
          "phòng học",
          "cổng trường"
        ],
        "answer": 0
      },
      {
        "q": "'Gym' nghĩa là gì?",
        "options": [
          "phòng thể dục",
          "thư viện",
          "vườn"
        ],
        "answer": 0
      },
      {
        "q": "'Computer room' nghĩa là gì?",
        "options": [
          "phòng vi tính",
          "phòng học",
          "sân"
        ],
        "answer": 0
      },
      {
        "q": "'school' nghĩa là gì?",
        "options": [
          "trường học",
          "phòng vi tính",
          "phòng thể dục"
        ],
        "answer": 0
      },
      {
        "q": "'phòng học' tiếng Anh là gì?",
        "options": [
          "classroom",
          "computer room",
          "playground"
        ],
        "answer": 0
      },
      {
        "q": "'playground' nghĩa là gì?",
        "options": [
          "sân chơi",
          "trường học",
          "phòng vi tính"
        ],
        "answer": 0
      },
      {
        "q": "'thư viện' tiếng Anh là gì?",
        "options": [
          "library",
          "music room",
          "art room"
        ],
        "answer": 0
      },
      {
        "q": "'gym' nghĩa là gì?",
        "options": [
          "phòng thể dục",
          "phòng học",
          "phòng âm nhạc"
        ],
        "answer": 0
      },
      {
        "q": "'phòng mỹ thuật' tiếng Anh là gì?",
        "options": [
          "art room",
          "library",
          "school"
        ],
        "answer": 0
      }
    ],
    "quizExt": [
      {
        "q": "'Principal's office' là gì?",
        "options": [
          "phòng hiệu trưởng",
          "phòng y tế",
          "thư viện"
        ],
        "answer": 0
      },
      {
        "q": "'Staff room' nghĩa là gì?",
        "options": [
          "phòng giáo viên",
          "phòng học",
          "phòng vi tính"
        ],
        "answer": 0
      },
      {
        "q": "'Canteen' nghĩa là gì?",
        "options": [
          "căng tin",
          "phòng nhạc",
          "phòng mỹ thuật"
        ],
        "answer": 0
      },
      {
        "q": "'Dining hall' nghĩa là gì?",
        "options": [
          "nhà ăn",
          "phòng học",
          "sân trường"
        ],
        "answer": 0
      },
      {
        "q": "'School gate' nghĩa là gì?",
        "options": [
          "cổng trường",
          "cửa lớp",
          "sân chơi"
        ],
        "answer": 0
      },
      {
        "q": "'Flag' nghĩa là gì?",
        "options": [
          "lá cờ",
          "bảng tên",
          "biển hiệu"
        ],
        "answer": 0
      },
      {
        "q": "Hỏi vị trí 1 nơi dùng câu nào?",
        "options": [
          "Where's...?",
          "Where are...?",
          "What's...?"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "u7",
    "group": 2,
    "icon": "📢",
    "titleEn": "Unit 7: Classroom instructions",
    "titleVi": "Mệnh lệnh trong lớp",
    "core": [
      {
        "en": "stand up",
        "vi": "đứng lên",
        "icon": "🚶",
        "ipa": "stænd əp"
      },
      {
        "en": "sit down",
        "vi": "ngồi xuống",
        "icon": "🪑",
        "ipa": "sɪt daʊn"
      },
      {
        "en": "close",
        "vi": "đóng lại",
        "icon": "📕",
        "ipa": "kloʊz"
      },
      {
        "en": "come in",
        "vi": "đi vào",
        "icon": "🚪",
        "ipa": "kəm ɪn"
      },
      {
        "en": "go out",
        "vi": "đi ra",
        "icon": "🚪",
        "ipa": "goʊ aʊt"
      },
      {
        "en": "speak",
        "vi": "nói",
        "icon": "🗣️",
        "ipa": "spik"
      }
    ],
    "patterns": [
      {
        "en": "Stand up, please!",
        "vi": "Mời em đứng lên."
      },
      {
        "en": "May I come in? – Yes, you can.",
        "vi": "Em có thể vào không ạ? – Được."
      },
      {
        "en": "May I come in? – No, you can't.",
        "vi": "Em có thể vào không ạ? – Không được."
      }
    ],
    "ext": [
      {
        "en": "work in pairs",
        "vi": "làm việc theo cặp",
        "icon": "👥",
        "ipa": "wərk ɪn pɛrz"
      },
      {
        "en": "line up",
        "vi": "xếp hàng",
        "icon": "🚶",
        "ipa": "laɪn əp"
      },
      {
        "en": "put up your hand",
        "vi": "giơ tay",
        "icon": "✋",
        "ipa": "pʊt əp jʊr hænd"
      },
      {
        "en": "be careful",
        "vi": "cẩn thận",
        "icon": "⚠️",
        "ipa": "bi ˈkɛrfəl"
      },
      {
        "en": "raise your hand",
        "vi": "giơ tay lên",
        "icon": "✋",
        "ipa": "reɪz jʊr hænd"
      },
      {
        "en": "keep quiet",
        "vi": "giữ yên lặng",
        "icon": "🤫",
        "ipa": "kip kwaɪət"
      }
    ],
    "grammar": [
      {
        "title": "May I...? (xin phép làm gì)",
        "explain": "Dùng May I + động từ để lịch sự xin phép làm việc gì đó. Trả lời Yes, you can. hoặc No, you can't.",
        "example": "May I go out? – Yes, you can."
      },
      {
        "title": "Câu mệnh lệnh phủ định: Don't...",
        "explain": "Dùng Don't + động từ để yêu cầu ai đó KHÔNG làm gì.",
        "example": "Don't talk! Don't run in the classroom!"
      }
    ],
    "reading": [
      {
        "title": "In the classroom",
        "text": "The teacher says: 'Stand up, please.' All the students stand up. Then a student asks: 'May I come in?' The teacher says: 'Yes, you can.'",
        "questions": [
          {
            "q": "What do the students do first?",
            "options": [
              "Sit down",
              "Stand up",
              "Speak"
            ],
            "answer": 1
          },
          {
            "q": "What does the student ask?",
            "options": [
              "May I come in?",
              "May I go out?",
              "May I sit down?"
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Classroom rules",
        "text": "In our classroom, we keep quiet when the teacher speaks. Raise your hand before you speak. Be careful with the scissors.",
        "questions": [
          {
            "q": "What should you do before speaking?",
            "options": [
              "Raise your hand",
              "Stand up",
              "Sing a song"
            ],
            "answer": 0
          },
          {
            "q": "What should you be careful with?",
            "options": [
              "Scissors",
              "Books",
              "Chairs"
            ],
            "answer": 0
          }
        ]
      }
    ],
    "quizCore": [
      {
        "q": "'Stand up' nghĩa là gì?",
        "options": [
          "đứng lên",
          "ngồi xuống",
          "đi ra"
        ],
        "answer": 0
      },
      {
        "q": "'Speak' nghĩa là gì?",
        "options": [
          "nhìn",
          "nói",
          "nghe"
        ],
        "answer": 1
      },
      {
        "q": "'Close' nghĩa là gì?",
        "options": [
          "đóng lại",
          "mở ra",
          "cầm lên"
        ],
        "answer": 0
      },
      {
        "q": "'Come in' nghĩa là gì?",
        "options": [
          "đi vào",
          "đi ra",
          "đứng lên"
        ],
        "answer": 0
      },
      {
        "q": "'stand up' nghĩa là gì?",
        "options": [
          "đứng lên",
          "đi vào",
          "đóng lại"
        ],
        "answer": 0
      },
      {
        "q": "'ngồi xuống' tiếng Anh là gì?",
        "options": [
          "sit down",
          "speak",
          "come in"
        ],
        "answer": 0
      },
      {
        "q": "'close' nghĩa là gì?",
        "options": [
          "đóng lại",
          "đi vào",
          "ngồi xuống"
        ],
        "answer": 0
      },
      {
        "q": "'đi vào' tiếng Anh là gì?",
        "options": [
          "come in",
          "speak",
          "close"
        ],
        "answer": 0
      },
      {
        "q": "'go out' nghĩa là gì?",
        "options": [
          "đi ra",
          "nói",
          "đứng lên"
        ],
        "answer": 0
      },
      {
        "q": "'nói' tiếng Anh là gì?",
        "options": [
          "speak",
          "go out",
          "stand up"
        ],
        "answer": 0
      }
    ],
    "quizExt": [
      {
        "q": "'Line up' nghĩa là gì?",
        "options": [
          "xếp hàng",
          "ngồi xuống",
          "giơ tay"
        ],
        "answer": 0
      },
      {
        "q": "'Put up your hand' nghĩa là gì?",
        "options": [
          "giơ tay",
          "đứng lên",
          "viết bài"
        ],
        "answer": 0
      },
      {
        "q": "Dùng cụm từ nào để xin phép lịch sự?",
        "options": [
          "May I...?",
          "What's this?",
          "How old...?"
        ],
        "answer": 0
      },
      {
        "q": "'Be careful' nghĩa là gì?",
        "options": [
          "cẩn thận",
          "im lặng",
          "vui vẻ"
        ],
        "answer": 0
      },
      {
        "q": "'Keep quiet' nghĩa là gì?",
        "options": [
          "giữ yên lặng",
          "đứng lên",
          "đi ra"
        ],
        "answer": 0
      },
      {
        "q": "'Don't run!' nghĩa là gì?",
        "options": [
          "Đừng chạy!",
          "Hãy chạy!",
          "Chạy đi!"
        ],
        "answer": 0
      },
      {
        "q": "'Raise your hand' nghĩa là gì?",
        "options": [
          "giơ tay lên",
          "đứng lên",
          "ngồi xuống"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "u8",
    "group": 2,
    "icon": "✏️",
    "titleEn": "Unit 8: My school things",
    "titleVi": "Đồ dùng học tập",
    "core": [
      {
        "en": "book",
        "vi": "sách",
        "icon": "📘",
        "ipa": "bʊk"
      },
      {
        "en": "pen",
        "vi": "bút mực",
        "icon": "🖊️",
        "ipa": "pɛn"
      },
      {
        "en": "pencil",
        "vi": "bút chì",
        "icon": "✏️",
        "ipa": "ˈpɛnsəl"
      },
      {
        "en": "ruler",
        "vi": "thước kẻ",
        "icon": "📏",
        "ipa": "ˈrulər"
      },
      {
        "en": "eraser",
        "vi": "cục tẩy",
        "icon": "🧽",
        "ipa": "ɪˈreɪsər"
      },
      {
        "en": "notebook",
        "vi": "vở ghi chép",
        "icon": "📓",
        "ipa": "ˈnoʊtˌbʊk"
      },
      {
        "en": "pencil case",
        "vi": "hộp bút",
        "icon": "👝",
        "ipa": "ˈpɛnsəl keɪs"
      },
      {
        "en": "school bag",
        "vi": "cặp sách",
        "icon": "🎒",
        "ipa": "skul bæg"
      }
    ],
    "patterns": [
      {
        "en": "I have a ruler.",
        "vi": "Tớ có một cây thước."
      },
      {
        "en": "Do you have a pencil case? – Yes, I do.",
        "vi": "Bạn có hộp bút không? – Có."
      },
      {
        "en": "Do you have a pencil case? – No, I don't.",
        "vi": "Bạn có hộp bút không? – Không."
      }
    ],
    "ext": [
      {
        "en": "glue stick",
        "vi": "keo dán",
        "icon": "🧴",
        "ipa": "glu stɪk"
      },
      {
        "en": "highlighter",
        "vi": "bút dạ quang",
        "icon": "🖍️",
        "ipa": "ˈhaɪˌlaɪtər"
      },
      {
        "en": "calculator",
        "vi": "máy tính bỏ túi",
        "icon": "🧮",
        "ipa": "ˈkælkjəˌleɪtər"
      },
      {
        "en": "sharpener",
        "vi": "gọt bút chì",
        "icon": "🔪",
        "ipa": "ˈʃɑrpənər"
      },
      {
        "en": "colour pencil",
        "vi": "bút chì màu",
        "icon": "🖍️",
        "ipa": "ˈkələr ˈpɛnsəl"
      },
      {
        "en": "textbook",
        "vi": "sách giáo khoa",
        "icon": "📚",
        "ipa": "ˈtɛkstˌbʊk"
      }
    ],
    "grammar": [
      {
        "title": "Do you have...? – Yes, I do./No, I don't.",
        "explain": "Dùng Do you have...? để hỏi ai đó có vật gì không, trả lời bằng Yes, I do. hoặc No, I don't.",
        "example": "Do you have a book? – Yes, I do."
      },
      {
        "title": "How many + danh từ số nhiều",
        "explain": "Dùng How many + danh từ số nhiều +do you have? để hỏi số lượng đồ vật.",
        "example": "How many pens do you have? – I have three."
      }
    ],
    "reading": [
      {
        "title": "My pencil case",
        "text": "This is my pencil case. I have a pen, a pencil and an eraser. Do you have a ruler? Yes, I do. I keep it very tidy.",
        "questions": [
          {
            "q": "What is in the pencil case?",
            "options": [
              "A pen, a pencil, an eraser",
              "A book and a bag",
              "A ruler only"
            ],
            "answer": 0
          },
          {
            "q": "Does the writer have a ruler?",
            "options": [
              "Yes",
              "No",
              "Not mentioned"
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "School shopping",
        "text": "Mom buys me a new textbook and a sharpener. I also have ten colour pencils. How many pens do you have?",
        "questions": [
          {
            "q": "What does Mom buy?",
            "options": [
              "A textbook and a sharpener",
              "A ruler and a bag",
              "A book and a pen"
            ],
            "answer": 0
          },
          {
            "q": "How many colour pencils does the writer have?",
            "options": [
              "Five",
              "Ten",
              "Twenty"
            ],
            "answer": 1
          }
        ]
      }
    ],
    "quizCore": [
      {
        "q": "'Ruler' nghĩa là gì?",
        "options": [
          "thước kẻ",
          "cục tẩy",
          "bút chì"
        ],
        "answer": 0
      },
      {
        "q": "'Eraser' nghĩa là gì?",
        "options": [
          "cục tẩy",
          "quyển sách",
          "cặp sách"
        ],
        "answer": 0
      },
      {
        "q": "'Pencil case' nghĩa là gì?",
        "options": [
          "hộp bút",
          "cặp sách",
          "quyển vở"
        ],
        "answer": 0
      },
      {
        "q": "'School bag' nghĩa là gì?",
        "options": [
          "cặp sách",
          "bút mực",
          "sách"
        ],
        "answer": 0
      },
      {
        "q": "'book' nghĩa là gì?",
        "options": [
          "sách",
          "cặp sách",
          "cục tẩy"
        ],
        "answer": 0
      },
      {
        "q": "'bút mực' tiếng Anh là gì?",
        "options": [
          "pen",
          "pencil",
          "eraser"
        ],
        "answer": 0
      },
      {
        "q": "'pencil' nghĩa là gì?",
        "options": [
          "bút chì",
          "cục tẩy",
          "thước kẻ"
        ],
        "answer": 0
      },
      {
        "q": "'thước kẻ' tiếng Anh là gì?",
        "options": [
          "ruler",
          "notebook",
          "eraser"
        ],
        "answer": 0
      },
      {
        "q": "'eraser' nghĩa là gì?",
        "options": [
          "cục tẩy",
          "cặp sách",
          "sách"
        ],
        "answer": 0
      },
      {
        "q": "'vở ghi chép' tiếng Anh là gì?",
        "options": [
          "notebook",
          "eraser",
          "book"
        ],
        "answer": 0
      }
    ],
    "quizExt": [
      {
        "q": "'Glue stick' nghĩa là gì?",
        "options": [
          "keo dán",
          "bút dạ",
          "cục tẩy"
        ],
        "answer": 0
      },
      {
        "q": "'Calculator' nghĩa là gì?",
        "options": [
          "máy tính bỏ túi",
          "thước kẻ",
          "vở ghi"
        ],
        "answer": 0
      },
      {
        "q": "'Highlighter' nghĩa là gì?",
        "options": [
          "bút dạ quang",
          "keo dán",
          "cục tẩy"
        ],
        "answer": 0
      },
      {
        "q": "'Sharpener' nghĩa là gì?",
        "options": [
          "gọt bút chì",
          "cục tẩy",
          "thước kẻ"
        ],
        "answer": 0
      },
      {
        "q": "'Textbook' nghĩa là gì?",
        "options": [
          "sách giáo khoa",
          "vở nháp",
          "hộp bút"
        ],
        "answer": 0
      },
      {
        "q": "'Colour pencil' nghĩa là gì?",
        "options": [
          "bút chì màu",
          "bút mực",
          "bút dạ"
        ],
        "answer": 0
      },
      {
        "q": "'How many pens do you have?' hỏi về điều gì?",
        "options": [
          "Số lượng bút",
          "Màu sắc bút",
          "Giá tiền bút"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "u9",
    "group": 2,
    "icon": "🎨",
    "titleEn": "Unit 9: Colours",
    "titleVi": "Màu sắc",
    "core": [
      {
        "en": "colour",
        "vi": "màu sắc",
        "icon": "🎨",
        "ipa": "ˈkələr"
      },
      {
        "en": "red",
        "vi": "màu đỏ",
        "icon": "🔴",
        "ipa": "rɛd"
      },
      {
        "en": "blue",
        "vi": "màu xanh dương",
        "icon": "🔵",
        "ipa": "blu"
      },
      {
        "en": "yellow",
        "vi": "màu vàng",
        "icon": "🟡",
        "ipa": "ˈjɛloʊ"
      },
      {
        "en": "green",
        "vi": "màu xanh lá",
        "icon": "🟢",
        "ipa": "grin"
      },
      {
        "en": "orange",
        "vi": "màu cam",
        "icon": "🟠",
        "ipa": "ˈɔrɪnʤ"
      },
      {
        "en": "black",
        "vi": "màu đen",
        "icon": "⚫",
        "ipa": "blæk"
      },
      {
        "en": "white",
        "vi": "màu trắng",
        "icon": "⚪",
        "ipa": "waɪt"
      }
    ],
    "patterns": [
      {
        "en": "What colour is it? – It's red.",
        "vi": "Nó màu gì? – Nó màu đỏ."
      },
      {
        "en": "What colour are they? – They're blue.",
        "vi": "Chúng màu gì? – Chúng màu xanh dương."
      }
    ],
    "ext": [
      {
        "en": "brown",
        "vi": "màu nâu",
        "icon": "🟤",
        "ipa": "braʊn"
      },
      {
        "en": "grey",
        "vi": "màu xám",
        "icon": "⚫",
        "ipa": "greɪ"
      },
      {
        "en": "pink",
        "vi": "màu hồng",
        "icon": "💗",
        "ipa": "pɪŋk"
      },
      {
        "en": "dark",
        "vi": "đậm, tối màu",
        "icon": "🌑",
        "ipa": "dɑrk"
      },
      {
        "en": "light",
        "vi": "nhạt, sáng màu",
        "icon": "🌕",
        "ipa": "laɪt"
      },
      {
        "en": "rainbow",
        "vi": "cầu vồng",
        "icon": "🌈",
        "ipa": "ˈreɪnˌboʊ"
      }
    ],
    "grammar": [
      {
        "title": "It's (một vật) và They're (nhiều vật)",
        "explain": "Dùng What colour is it? cho một vật (số ít), What colour are they? cho nhiều vật (số nhiều). Trả lời tương ứng It's.../They're...",
        "example": "What colour is it? It's green. What colour are they? They're red."
      },
      {
        "title": "Tính từ mô tả sắc độ: dark / light",
        "explain": "Dark (đậm) và light (nhạt) đứng trước tên màu để mô tả sắc độ đậm nhạt.",
        "example": "dark blue (xanh đậm), light green (xanh nhạt)"
      }
    ],
    "reading": [
      {
        "title": "My kite",
        "text": "I have a kite. What colour is it? It's yellow and orange. My friend's kite is blue and green. We fly our kites in the park.",
        "questions": [
          {
            "q": "What colour is the writer's kite?",
            "options": [
              "Yellow and orange",
              "Blue and green",
              "Black and white"
            ],
            "answer": 0
          },
          {
            "q": "Where do they fly kites?",
            "options": [
              "At school",
              "In the park",
              "At home"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "After the rain",
        "text": "After the rain, I see a rainbow. It has red, orange, yellow, green, blue and purple. It's so beautiful!",
        "questions": [
          {
            "q": "When does the writer see the rainbow?",
            "options": [
              "After the rain",
              "Before school",
              "At night"
            ],
            "answer": 0
          },
          {
            "q": "How does the writer feel?",
            "options": [
              "Bored",
              "It's beautiful",
              "Scared"
            ],
            "answer": 1
          }
        ]
      }
    ],
    "quizCore": [
      {
        "q": "'Red' nghĩa là gì?",
        "options": [
          "màu đỏ",
          "màu xanh",
          "màu vàng"
        ],
        "answer": 0
      },
      {
        "q": "'Green' nghĩa là gì?",
        "options": [
          "màu xanh lá",
          "màu đen",
          "màu trắng"
        ],
        "answer": 0
      },
      {
        "q": "'Yellow' nghĩa là gì?",
        "options": [
          "màu vàng",
          "màu tím",
          "màu cam"
        ],
        "answer": 0
      },
      {
        "q": "'Colour' nghĩa là gì?",
        "options": [
          "màu sắc",
          "hình dạng",
          "kích thước"
        ],
        "answer": 0
      },
      {
        "q": "'colour' nghĩa là gì?",
        "options": [
          "màu sắc",
          "màu vàng",
          "màu đen"
        ],
        "answer": 0
      },
      {
        "q": "'màu đỏ' tiếng Anh là gì?",
        "options": [
          "red",
          "blue",
          "green"
        ],
        "answer": 0
      },
      {
        "q": "'blue' nghĩa là gì?",
        "options": [
          "màu xanh dương",
          "màu đen",
          "màu cam"
        ],
        "answer": 0
      },
      {
        "q": "'màu vàng' tiếng Anh là gì?",
        "options": [
          "yellow",
          "green",
          "white"
        ],
        "answer": 0
      },
      {
        "q": "'green' nghĩa là gì?",
        "options": [
          "màu xanh lá",
          "màu cam",
          "màu trắng"
        ],
        "answer": 0
      },
      {
        "q": "'màu cam' tiếng Anh là gì?",
        "options": [
          "orange",
          "white",
          "red"
        ],
        "answer": 0
      }
    ],
    "quizExt": [
      {
        "q": "'Brown' nghĩa là gì?",
        "options": [
          "màu nâu",
          "màu xám",
          "màu đen"
        ],
        "answer": 0
      },
      {
        "q": "'Pink' nghĩa là gì?",
        "options": [
          "màu hồng",
          "màu tím",
          "màu cam"
        ],
        "answer": 0
      },
      {
        "q": "'Grey' nghĩa là gì?",
        "options": [
          "màu xám",
          "màu trắng",
          "màu đen"
        ],
        "answer": 0
      },
      {
        "q": "'Rainbow' nghĩa là gì?",
        "options": [
          "cầu vồng",
          "mặt trời",
          "đám mây"
        ],
        "answer": 0
      },
      {
        "q": "'Dark blue' nghĩa là gì?",
        "options": [
          "xanh đậm",
          "xanh nhạt",
          "xanh lá"
        ],
        "answer": 0
      },
      {
        "q": "'Light' (màu sắc) nghĩa là gì?",
        "options": [
          "nhạt, sáng màu",
          "đậm, tối màu",
          "rực rỡ"
        ],
        "answer": 0
      },
      {
        "q": "Cầu vồng có bao nhiêu màu chính?",
        "options": [
          "5",
          "6",
          "7"
        ],
        "answer": 2
      }
    ]
  },
  {
    "id": "u10",
    "group": 2,
    "icon": "🏸",
    "titleEn": "Unit 10: Break time activities",
    "titleVi": "Hoạt động giờ ra chơi",
    "core": [
      {
        "en": "break time",
        "vi": "giờ ra chơi",
        "icon": "⏰",
        "ipa": "breɪk taɪm"
      },
      {
        "en": "football",
        "vi": "bóng đá",
        "icon": "⚽",
        "ipa": "ˈfʊtˌbɔl"
      },
      {
        "en": "basketball",
        "vi": "bóng rổ",
        "icon": "🏀",
        "ipa": "ˈbæskətˌbɔl"
      },
      {
        "en": "badminton",
        "vi": "cầu lông",
        "icon": "🏸",
        "ipa": "ˈbædˌmɪntən"
      },
      {
        "en": "table tennis",
        "vi": "bóng bàn",
        "icon": "🏓",
        "ipa": "ˈteɪbəl ˈtɛnɪs"
      },
      {
        "en": "chess",
        "vi": "cờ vua",
        "icon": "♟️",
        "ipa": "ʧɛs"
      },
      {
        "en": "chat",
        "vi": "trò chuyện",
        "icon": "🗨️",
        "ipa": "ʧæt"
      },
      {
        "en": "word puzzles",
        "vi": "trò chơi ô chữ",
        "icon": "🧩",
        "ipa": "wərd ˈpəzəlz"
      }
    ],
    "patterns": [
      {
        "en": "I play football at break time.",
        "vi": "Tớ chơi bóng đá vào giờ ra chơi."
      },
      {
        "en": "What do you do at break time? – I play chess.",
        "vi": "Bạn làm gì vào giờ ra chơi? – Tớ chơi cờ vua."
      }
    ],
    "ext": [
      {
        "en": "playing tag",
        "vi": "chơi đuổi bắt",
        "icon": "🏃",
        "ipa": "pleɪɪŋ tæg"
      },
      {
        "en": "skipping rope",
        "vi": "nhảy dây",
        "icon": "🪢",
        "ipa": "ˈskɪpɪŋ roʊp"
      },
      {
        "en": "hide and seek",
        "vi": "trốn tìm",
        "icon": "🙈",
        "ipa": "haɪd ənd sik"
      },
      {
        "en": "marbles",
        "vi": "bi",
        "icon": "🔵",
        "ipa": "ˈmɑrbəlz"
      },
      {
        "en": "jump rope",
        "vi": "nhảy dây",
        "icon": "🪢",
        "ipa": "ʤəmp roʊp"
      },
      {
        "en": "board games",
        "vi": "trò chơi cờ bàn",
        "icon": "🎲",
        "ipa": "bɔrd geɪmz"
      }
    ],
    "grammar": [
      {
        "title": "Thì hiện tại đơn diễn tả thói quen",
        "explain": "Dùng thì hiện tại đơn để nói về việc thường làm vào giờ ra chơi. Với I/you, động từ giữ nguyên dạng.",
        "example": "I play football at break time. I chat with my friends."
      },
      {
        "title": "Let's + V (rủ chơi cùng)",
        "explain": "Dùng Let's + động từ để rủ bạn bè cùng chơi vào giờ ra chơi.",
        "example": "Let's play chess! Let's play football!"
      }
    ],
    "reading": [
      {
        "title": "At break time",
        "text": "It is break time. Nam plays football with his friends. Lan plays chess. Two girls chat near the tree. Everyone is happy.",
        "questions": [
          {
            "q": "What does Nam play?",
            "options": [
              "Football",
              "Chess",
              "Badminton"
            ],
            "answer": 0
          },
          {
            "q": "What does Lan play?",
            "options": [
              "Football",
              "Chess",
              "Table tennis"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Break time fun",
        "text": "Let's play marbles! Some friends jump rope. Others play board games. Break time is always fun.",
        "questions": [
          {
            "q": "What game is suggested first?",
            "options": [
              "Marbles",
              "Football",
              "Chess"
            ],
            "answer": 0
          },
          {
            "q": "What do some friends do?",
            "options": [
              "Jump rope",
              "Sing songs",
              "Draw pictures"
            ],
            "answer": 0
          }
        ]
      }
    ],
    "quizCore": [
      {
        "q": "'Football' nghĩa là gì?",
        "options": [
          "bóng đá",
          "bóng rổ",
          "cầu lông"
        ],
        "answer": 0
      },
      {
        "q": "'Chess' nghĩa là gì?",
        "options": [
          "cờ vua",
          "bóng bàn",
          "trò chuyện"
        ],
        "answer": 0
      },
      {
        "q": "'Chat' nghĩa là gì?",
        "options": [
          "trò chuyện",
          "chạy",
          "nhảy"
        ],
        "answer": 0
      },
      {
        "q": "'Break time' nghĩa là gì?",
        "options": [
          "giờ ra chơi",
          "giờ học",
          "giờ ăn"
        ],
        "answer": 0
      },
      {
        "q": "'break time' nghĩa là gì?",
        "options": [
          "giờ ra chơi",
          "cầu lông",
          "trò chuyện"
        ],
        "answer": 0
      },
      {
        "q": "'bóng đá' tiếng Anh là gì?",
        "options": [
          "football",
          "word puzzles",
          "chess"
        ],
        "answer": 0
      },
      {
        "q": "'basketball' nghĩa là gì?",
        "options": [
          "bóng rổ",
          "trò chơi ô chữ",
          "giờ ra chơi"
        ],
        "answer": 0
      },
      {
        "q": "'cầu lông' tiếng Anh là gì?",
        "options": [
          "badminton",
          "word puzzles",
          "chess"
        ],
        "answer": 0
      },
      {
        "q": "'table tennis' nghĩa là gì?",
        "options": [
          "bóng bàn",
          "trò chuyện",
          "trò chơi ô chữ"
        ],
        "answer": 0
      },
      {
        "q": "'cờ vua' tiếng Anh là gì?",
        "options": [
          "chess",
          "badminton",
          "chat"
        ],
        "answer": 0
      }
    ],
    "quizExt": [
      {
        "q": "'Playing tag' nghĩa là gì?",
        "options": [
          "chơi đuổi bắt",
          "chơi trốn tìm",
          "nhảy dây"
        ],
        "answer": 0
      },
      {
        "q": "'Skipping rope' nghĩa là gì?",
        "options": [
          "nhảy dây",
          "bắn bi",
          "trốn tìm"
        ],
        "answer": 0
      },
      {
        "q": "'Hide and seek' nghĩa là gì?",
        "options": [
          "trốn tìm",
          "đuổi bắt",
          "nhảy dây"
        ],
        "answer": 0
      },
      {
        "q": "'Marbles' nghĩa là gì?",
        "options": [
          "bi",
          "cờ",
          "dây"
        ],
        "answer": 0
      },
      {
        "q": "'Jump rope' nghĩa là gì?",
        "options": [
          "nhảy dây",
          "chơi bi",
          "chơi cờ"
        ],
        "answer": 0
      },
      {
        "q": "'Board games' nghĩa là gì?",
        "options": [
          "trò chơi cờ bàn",
          "trò chơi vận động",
          "trò chơi điện tử"
        ],
        "answer": 0
      },
      {
        "q": "'Let's play chess!' dùng để làm gì?",
        "options": [
          "Rủ cùng chơi",
          "Từ chối",
          "Hỏi ý kiến"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "u11",
    "group": 3,
    "icon": "👪",
    "titleEn": "Unit 11: My family",
    "titleVi": "Gia đình của tôi",
    "core": [
      {
        "en": "father",
        "vi": "bố",
        "icon": "👨",
        "ipa": "ˈfɑðər"
      },
      {
        "en": "mother",
        "vi": "mẹ",
        "icon": "👩",
        "ipa": "ˈməðər"
      },
      {
        "en": "brother",
        "vi": "anh/em trai",
        "icon": "👦",
        "ipa": "ˈbrəðər"
      },
      {
        "en": "sister",
        "vi": "chị/em gái",
        "icon": "👧",
        "ipa": "ˈsɪstər"
      },
      {
        "en": "eleven",
        "vi": "số 11",
        "icon": "🔢",
        "ipa": "ˈilɛvən"
      },
      {
        "en": "fifteen",
        "vi": "số 15",
        "icon": "🔢",
        "ipa": "ˈfɪfˈtin"
      },
      {
        "en": "twenty",
        "vi": "số 20",
        "icon": "🔢",
        "ipa": "tˈwɛnti"
      }
    ],
    "patterns": [
      {
        "en": "Who's this? – It's my brother.",
        "vi": "Đây là ai? – Đây là anh trai của tớ."
      },
      {
        "en": "How old is he? – He's twelve.",
        "vi": "Anh ấy bao nhiêu tuổi? – Anh ấy 12 tuổi."
      }
    ],
    "ext": [
      {
        "en": "grandfather",
        "vi": "ông",
        "icon": "👴",
        "ipa": "ˈgrænˌfɑðər"
      },
      {
        "en": "grandmother",
        "vi": "bà",
        "icon": "👵",
        "ipa": "ˈgrændˌməðər"
      },
      {
        "en": "uncle",
        "vi": "chú/cậu/bác trai",
        "icon": "👨",
        "ipa": "ˈəŋkəl"
      },
      {
        "en": "aunt",
        "vi": "cô/dì/bác gái",
        "icon": "👩",
        "ipa": "ɔnt"
      },
      {
        "en": "cousin",
        "vi": "anh chị em họ",
        "icon": "🧑",
        "ipa": "ˈkəzən"
      },
      {
        "en": "baby",
        "vi": "em bé",
        "icon": "👶",
        "ipa": "ˈbeɪbi"
      },
      {
        "en": "family photo",
        "vi": "ảnh gia đình",
        "icon": "🖼️",
        "ipa": "ˈfæməli ˈfoʊˌtoʊ"
      }
    ],
    "grammar": [
      {
        "title": "Số đếm 11-20 và hỏi tuổi người khác",
        "explain": "Dùng How old is he/she? để hỏi tuổi người khác, trả lời He's/She's + số tuổi (11 đến 20: eleven, twelve... twenty).",
        "example": "How old is she? – She's fifteen."
      },
      {
        "title": "How many + people (đếm số người)",
        "explain": "Dùng How many people are there in...? để hỏi số lượng thành viên trong gia đình.",
        "example": "How many people are there in your family? – There are five."
      }
    ],
    "reading": [
      {
        "title": "My big family",
        "text": "This is my brother. He is twelve. This is my sister. She is eleven. My father and mother love us very much.",
        "questions": [
          {
            "q": "How old is the brother?",
            "options": [
              "Eleven",
              "Twelve",
              "Fifteen"
            ],
            "answer": 1
          },
          {
            "q": "How old is the sister?",
            "options": [
              "Eleven",
              "Twelve",
              "Twenty"
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Family photo",
        "text": "Look at my family photo. There are five people: my parents, my brother, my sister and me. My baby cousin is here too!",
        "questions": [
          {
            "q": "How many people are in the photo?",
            "options": [
              "Four",
              "Five",
              "Six"
            ],
            "answer": 1
          },
          {
            "q": "Who else is in the photo?",
            "options": [
              "The baby cousin",
              "A friend",
              "The teacher"
            ],
            "answer": 0
          }
        ]
      }
    ],
    "quizCore": [
      {
        "q": "'Father' nghĩa là gì?",
        "options": [
          "bố",
          "mẹ",
          "anh trai"
        ],
        "answer": 0
      },
      {
        "q": "'Sister' nghĩa là gì?",
        "options": [
          "chị/em gái",
          "anh/em trai",
          "bác"
        ],
        "answer": 0
      },
      {
        "q": "'Eleven' là số mấy?",
        "options": [
          "10",
          "11",
          "12"
        ],
        "answer": 1
      },
      {
        "q": "'How old is he?' hỏi về điều gì?",
        "options": [
          "Tuổi của anh ấy",
          "Tên của anh ấy",
          "Nơi ở"
        ],
        "answer": 0
      },
      {
        "q": "'father' nghĩa là gì?",
        "options": [
          "bố",
          "số 20",
          "số 11"
        ],
        "answer": 0
      },
      {
        "q": "'mẹ' tiếng Anh là gì?",
        "options": [
          "mother",
          "sister",
          "brother"
        ],
        "answer": 0
      },
      {
        "q": "'brother' nghĩa là gì?",
        "options": [
          "anh/em trai",
          "mẹ",
          "số 15"
        ],
        "answer": 0
      },
      {
        "q": "'chị/em gái' tiếng Anh là gì?",
        "options": [
          "sister",
          "mother",
          "father"
        ],
        "answer": 0
      },
      {
        "q": "'eleven' nghĩa là gì?",
        "options": [
          "số 11",
          "bố",
          "số 20"
        ],
        "answer": 0
      },
      {
        "q": "'số 15' tiếng Anh là gì?",
        "options": [
          "fifteen",
          "twenty",
          "sister"
        ],
        "answer": 0
      }
    ],
    "quizExt": [
      {
        "q": "'Grandfather' nghĩa là gì?",
        "options": [
          "ông",
          "bà",
          "chú"
        ],
        "answer": 0
      },
      {
        "q": "'Aunt' nghĩa là gì?",
        "options": [
          "cô/dì/bác gái",
          "chú/cậu",
          "ông"
        ],
        "answer": 0
      },
      {
        "q": "'Uncle' nghĩa là gì?",
        "options": [
          "chú/cậu/bác trai",
          "bà",
          "chị gái"
        ],
        "answer": 0
      },
      {
        "q": "'Cousin' nghĩa là gì?",
        "options": [
          "anh chị em họ",
          "anh chị em ruột",
          "ông bà"
        ],
        "answer": 0
      },
      {
        "q": "'Baby' nghĩa là gì?",
        "options": [
          "em bé",
          "trẻ em",
          "thanh niên"
        ],
        "answer": 0
      },
      {
        "q": "'Family photo' nghĩa là gì?",
        "options": [
          "ảnh gia đình",
          "ảnh trường học",
          "ảnh bạn bè"
        ],
        "answer": 0
      },
      {
        "q": "'How many people are there in your family?' hỏi về gì?",
        "options": [
          "Số thành viên gia đình",
          "Tuổi các thành viên",
          "Nghề nghiệp"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "u12",
    "group": 3,
    "icon": "👩‍⚕️",
    "titleEn": "Unit 12: Jobs",
    "titleVi": "Nghề nghiệp",
    "core": [
      {
        "en": "job",
        "vi": "nghề nghiệp",
        "icon": "💼",
        "ipa": "ʤɑb"
      },
      {
        "en": "teacher",
        "vi": "giáo viên",
        "icon": "👩‍🏫",
        "ipa": "ˈtiʧər"
      },
      {
        "en": "doctor",
        "vi": "bác sĩ",
        "icon": "👩‍⚕️",
        "ipa": "ˈdɔktər"
      },
      {
        "en": "nurse",
        "vi": "y tá",
        "icon": "👩‍⚕️",
        "ipa": "nərs"
      },
      {
        "en": "farmer",
        "vi": "nông dân",
        "icon": "👨‍🌾",
        "ipa": "ˈfɑrmər"
      },
      {
        "en": "worker",
        "vi": "công nhân",
        "icon": "👷",
        "ipa": "ˈwərkər"
      },
      {
        "en": "driver",
        "vi": "tài xế",
        "icon": "🚗",
        "ipa": "ˈdraɪvər"
      },
      {
        "en": "cook",
        "vi": "đầu bếp",
        "icon": "👨‍🍳",
        "ipa": "kʊk"
      },
      {
        "en": "singer",
        "vi": "ca sĩ",
        "icon": "🎤",
        "ipa": "ˈsɪŋər"
      }
    ],
    "patterns": [
      {
        "en": "What's his job? – He's a doctor.",
        "vi": "Nghề nghiệp của anh ấy là gì? – Anh ấy là bác sĩ."
      },
      {
        "en": "Is she a nurse? – Yes, she is.",
        "vi": "Cô ấy là y tá phải không? – Đúng vậy."
      },
      {
        "en": "Is she a nurse? – No, she isn't.",
        "vi": "Cô ấy là y tá phải không? – Không phải."
      }
    ],
    "ext": [
      {
        "en": "engineer",
        "vi": "kỹ sư",
        "icon": "👷",
        "ipa": "ˈɛnʤəˈnɪr"
      },
      {
        "en": "pilot",
        "vi": "phi công",
        "icon": "✈️",
        "ipa": "ˈpaɪlət"
      },
      {
        "en": "police officer",
        "vi": "cảnh sát",
        "icon": "👮",
        "ipa": "pəˈlis ˈɔfɪsər"
      },
      {
        "en": "artist",
        "vi": "họa sĩ",
        "icon": "🎨",
        "ipa": "ˈɑrtɪst"
      },
      {
        "en": "writer",
        "vi": "nhà văn",
        "icon": "✍️",
        "ipa": "ˈraɪtər"
      },
      {
        "en": "hairdresser",
        "vi": "thợ làm tóc",
        "icon": "💇",
        "ipa": "ˈhɛrˌdrɛsər"
      }
    ],
    "grammar": [
      {
        "title": "Is he/she a...? – Yes, he/she is./No, he/she isn't.",
        "explain": "Dùng Is + he/she + a + nghề nghiệp? để hỏi xác nhận nghề nghiệp của ai đó.",
        "example": "Is he a farmer? – Yes, he is."
      },
      {
        "title": "Where does + chủ ngữ + work?",
        "explain": "Dùng Where does he/she work? để hỏi nơi làm việc, trả lời He/She works at + địa điểm.",
        "example": "Where does she work? – She works at a hospital."
      }
    ],
    "reading": [
      {
        "title": "My parents' jobs",
        "text": "My father is a doctor. He works at a hospital. Is my mother a teacher? Yes, she is. She works at a primary school.",
        "questions": [
          {
            "q": "What is the father's job?",
            "options": [
              "Doctor",
              "Teacher",
              "Farmer"
            ],
            "answer": 0
          },
          {
            "q": "Is the mother a teacher?",
            "options": [
              "Yes",
              "No",
              "Not mentioned"
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Different jobs",
        "text": "My uncle is an artist. He paints beautiful pictures. My aunt is a writer. Where does she work? She works at home.",
        "questions": [
          {
            "q": "What is the uncle's job?",
            "options": [
              "Artist",
              "Writer",
              "Farmer"
            ],
            "answer": 0
          },
          {
            "q": "Where does the aunt work?",
            "options": [
              "At a hospital",
              "At home",
              "At school"
            ],
            "answer": 1
          }
        ]
      }
    ],
    "quizCore": [
      {
        "q": "'Doctor' nghĩa là gì?",
        "options": [
          "bác sĩ",
          "giáo viên",
          "y tá"
        ],
        "answer": 0
      },
      {
        "q": "'Teacher' nghĩa là gì?",
        "options": [
          "giáo viên",
          "nông dân",
          "tài xế"
        ],
        "answer": 0
      },
      {
        "q": "'Singer' nghĩa là gì?",
        "options": [
          "ca sĩ",
          "đầu bếp",
          "công nhân"
        ],
        "answer": 0
      },
      {
        "q": "'What's his job?' hỏi về điều gì?",
        "options": [
          "Nghề nghiệp",
          "Sở thích",
          "Tuổi"
        ],
        "answer": 0
      },
      {
        "q": "'job' nghĩa là gì?",
        "options": [
          "nghề nghiệp",
          "nông dân",
          "tài xế"
        ],
        "answer": 0
      },
      {
        "q": "'giáo viên' tiếng Anh là gì?",
        "options": [
          "teacher",
          "doctor",
          "driver"
        ],
        "answer": 0
      },
      {
        "q": "'doctor' nghĩa là gì?",
        "options": [
          "bác sĩ",
          "ca sĩ",
          "tài xế"
        ],
        "answer": 0
      },
      {
        "q": "'y tá' tiếng Anh là gì?",
        "options": [
          "nurse",
          "doctor",
          "driver"
        ],
        "answer": 0
      },
      {
        "q": "'farmer' nghĩa là gì?",
        "options": [
          "nông dân",
          "bác sĩ",
          "tài xế"
        ],
        "answer": 0
      },
      {
        "q": "'công nhân' tiếng Anh là gì?",
        "options": [
          "worker",
          "cook",
          "singer"
        ],
        "answer": 0
      }
    ],
    "quizExt": [
      {
        "q": "'Engineer' nghĩa là gì?",
        "options": [
          "kỹ sư",
          "phi công",
          "cảnh sát"
        ],
        "answer": 0
      },
      {
        "q": "'Police officer' nghĩa là gì?",
        "options": [
          "cảnh sát",
          "phi công",
          "kỹ sư"
        ],
        "answer": 0
      },
      {
        "q": "'Pilot' nghĩa là gì?",
        "options": [
          "phi công",
          "bác sĩ",
          "y tá"
        ],
        "answer": 0
      },
      {
        "q": "'Artist' nghĩa là gì?",
        "options": [
          "họa sĩ",
          "nhà văn",
          "ca sĩ"
        ],
        "answer": 0
      },
      {
        "q": "'Writer' nghĩa là gì?",
        "options": [
          "nhà văn",
          "họa sĩ",
          "bác sĩ"
        ],
        "answer": 0
      },
      {
        "q": "'Hairdresser' nghĩa là gì?",
        "options": [
          "thợ làm tóc",
          "đầu bếp",
          "thợ may"
        ],
        "answer": 0
      },
      {
        "q": "'Where does he work?' hỏi về điều gì?",
        "options": [
          "Nơi làm việc",
          "Sở thích",
          "Tuổi tác"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "u13",
    "group": 3,
    "icon": "🏠",
    "titleEn": "Unit 13: My house",
    "titleVi": "Nhà của tôi",
    "core": [
      {
        "en": "house",
        "vi": "ngôi nhà",
        "icon": "🏠",
        "ipa": "haʊs"
      },
      {
        "en": "living room",
        "vi": "phòng khách",
        "icon": "🛋️",
        "ipa": "ˈlɪvɪŋ rum"
      },
      {
        "en": "kitchen",
        "vi": "nhà bếp",
        "icon": "🍳",
        "ipa": "ˈkɪʧən"
      },
      {
        "en": "bathroom",
        "vi": "phòng tắm",
        "icon": "🚿",
        "ipa": "ˈbæθˌrum"
      },
      {
        "en": "bedroom",
        "vi": "phòng ngủ",
        "icon": "🛏️",
        "ipa": "ˈbɛˌdrum"
      },
      {
        "en": "table",
        "vi": "cái bàn",
        "icon": "🪑",
        "ipa": "ˈteɪbəl"
      },
      {
        "en": "chair",
        "vi": "cái ghế",
        "icon": "🪑",
        "ipa": "ʧɛr"
      },
      {
        "en": "lamp",
        "vi": "cái đèn",
        "icon": "💡",
        "ipa": "læmp"
      }
    ],
    "patterns": [
      {
        "en": "Where's the chair? – It's here.",
        "vi": "Cái ghế ở đâu? – Nó ở đây."
      },
      {
        "en": "Is the lamp on the table? – Yes, it is.",
        "vi": "Cái đèn có ở trên bàn không? – Đúng vậy."
      }
    ],
    "ext": [
      {
        "en": "garden",
        "vi": "khu vườn",
        "icon": "🌻",
        "ipa": "ˈgɑrdən"
      },
      {
        "en": "yard",
        "vi": "sân",
        "icon": "🏡",
        "ipa": "jɑrd"
      },
      {
        "en": "roof",
        "vi": "mái nhà",
        "icon": "🏠",
        "ipa": "rʊf"
      },
      {
        "en": "sofa",
        "vi": "ghế sofa",
        "icon": "🛋️",
        "ipa": "ˈsoʊfə"
      },
      {
        "en": "TV",
        "vi": "ti vi",
        "icon": "📺",
        "ipa": "ˌtɛləˈvɪʒən"
      },
      {
        "en": "stairs",
        "vi": "cầu thang",
        "icon": "🪜",
        "ipa": "stɛrz"
      }
    ],
    "grammar": [
      {
        "title": "Giới từ vị trí: here, there, in, on",
        "explain": "here = ở đây, there = ở đó/kia, in = trong, on = trên. Dùng để nói vị trí đồ vật trong nhà.",
        "example": "The chair is here. The lamp is on the table."
      },
      {
        "title": "Is there / Are there...? (hỏi có gì đó không)",
        "explain": "Dùng Is there...? cho danh từ số ít, Are there...? cho danh từ số nhiều để hỏi sự tồn tại của đồ vật.",
        "example": "Is there a sofa in the living room? – Yes, there is."
      }
    ],
    "reading": [
      {
        "title": "My new house",
        "text": "My new house has a living room, a kitchen and two bedrooms. Where's the table? It's in the living room. I love my new house.",
        "questions": [
          {
            "q": "How many bedrooms are there?",
            "options": [
              "One",
              "Two",
              "Three"
            ],
            "answer": 1
          },
          {
            "q": "Where is the table?",
            "options": [
              "In the kitchen",
              "In the living room",
              "In the bedroom"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "A cosy living room",
        "text": "Is there a TV in the living room? Yes, there is. There is also a big sofa. We watch TV together every evening.",
        "questions": [
          {
            "q": "Is there a TV in the living room?",
            "options": [
              "Yes",
              "No",
              "Not mentioned"
            ],
            "answer": 0
          },
          {
            "q": "What do they do every evening?",
            "options": [
              "Watch TV together",
              "Read books",
              "Cook dinner"
            ],
            "answer": 0
          }
        ]
      }
    ],
    "quizCore": [
      {
        "q": "'Kitchen' nghĩa là gì?",
        "options": [
          "nhà bếp",
          "phòng ngủ",
          "phòng khách"
        ],
        "answer": 0
      },
      {
        "q": "'Bathroom' nghĩa là gì?",
        "options": [
          "phòng tắm",
          "phòng ngủ",
          "sân"
        ],
        "answer": 0
      },
      {
        "q": "'Living room' nghĩa là gì?",
        "options": [
          "phòng khách",
          "nhà bếp",
          "mái nhà"
        ],
        "answer": 0
      },
      {
        "q": "'Table' nghĩa là gì?",
        "options": [
          "cái bàn",
          "cái ghế",
          "cái đèn"
        ],
        "answer": 0
      },
      {
        "q": "'house' nghĩa là gì?",
        "options": [
          "ngôi nhà",
          "phòng khách",
          "phòng ngủ"
        ],
        "answer": 0
      },
      {
        "q": "'phòng khách' tiếng Anh là gì?",
        "options": [
          "living room",
          "bathroom",
          "chair"
        ],
        "answer": 0
      },
      {
        "q": "'kitchen' nghĩa là gì?",
        "options": [
          "nhà bếp",
          "phòng khách",
          "ngôi nhà"
        ],
        "answer": 0
      },
      {
        "q": "'phòng tắm' tiếng Anh là gì?",
        "options": [
          "bathroom",
          "living room",
          "house"
        ],
        "answer": 0
      },
      {
        "q": "'bedroom' nghĩa là gì?",
        "options": [
          "phòng ngủ",
          "phòng khách",
          "cái đèn"
        ],
        "answer": 0
      },
      {
        "q": "'cái bàn' tiếng Anh là gì?",
        "options": [
          "table",
          "bathroom",
          "lamp"
        ],
        "answer": 0
      }
    ],
    "quizExt": [
      {
        "q": "'Garden' nghĩa là gì?",
        "options": [
          "khu vườn",
          "mái nhà",
          "sân"
        ],
        "answer": 0
      },
      {
        "q": "'Roof' nghĩa là gì?",
        "options": [
          "mái nhà",
          "sân",
          "khu vườn"
        ],
        "answer": 0
      },
      {
        "q": "'Yard' nghĩa là gì?",
        "options": [
          "sân",
          "mái nhà",
          "cửa"
        ],
        "answer": 0
      },
      {
        "q": "'Sofa' nghĩa là gì?",
        "options": [
          "ghế sofa",
          "cái bàn",
          "cái giường"
        ],
        "answer": 0
      },
      {
        "q": "'Stairs' nghĩa là gì?",
        "options": [
          "cầu thang",
          "cửa sổ",
          "mái nhà"
        ],
        "answer": 0
      },
      {
        "q": "Hỏi có 1 vật gì đó dùng câu nào?",
        "options": [
          "Is there...?",
          "Are there...?",
          "Do you have...?"
        ],
        "answer": 0
      },
      {
        "q": "'TV' là viết tắt phổ biến của từ gì?",
        "options": [
          "television",
          "telephone",
          "time"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "u14",
    "group": 3,
    "icon": "🛏️",
    "titleEn": "Unit 14: My bedroom",
    "titleVi": "Phòng ngủ của tôi",
    "core": [
      {
        "en": "room",
        "vi": "căn phòng",
        "icon": "🛏️",
        "ipa": "rum"
      },
      {
        "en": "bed",
        "vi": "giường",
        "icon": "🛏️",
        "ipa": "bɛd"
      },
      {
        "en": "desk",
        "vi": "bàn học",
        "icon": "📚",
        "ipa": "dɛsk"
      },
      {
        "en": "door",
        "vi": "cửa ra vào",
        "icon": "🚪",
        "ipa": "dɔr"
      },
      {
        "en": "window",
        "vi": "cửa sổ",
        "icon": "🪟",
        "ipa": "ˈwɪndoʊ"
      },
      {
        "en": "big",
        "vi": "to, lớn",
        "icon": "📏",
        "ipa": "bɪg"
      },
      {
        "en": "small",
        "vi": "nhỏ",
        "icon": "📏",
        "ipa": "smɔl"
      },
      {
        "en": "new",
        "vi": "mới",
        "icon": "✨",
        "ipa": "nu"
      },
      {
        "en": "old",
        "vi": "cũ",
        "icon": "📦",
        "ipa": "oʊld"
      }
    ],
    "patterns": [
      {
        "en": "There's a bed in the room. There are two windows.",
        "vi": "Có một cái giường trong phòng. Có hai cửa sổ."
      },
      {
        "en": "The desk is big. The room is small.",
        "vi": "Cái bàn thì to. Căn phòng thì nhỏ."
      }
    ],
    "ext": [
      {
        "en": "wardrobe",
        "vi": "tủ quần áo",
        "icon": "🚪",
        "ipa": "ˈwɔrˌdroʊb"
      },
      {
        "en": "bookshelf",
        "vi": "kệ sách",
        "icon": "📚",
        "ipa": "ˈbʊkˌʃɛlf"
      },
      {
        "en": "curtain",
        "vi": "rèm cửa",
        "icon": "🪟",
        "ipa": "ˈkərtən"
      },
      {
        "en": "clean",
        "vi": "sạch sẽ",
        "icon": "✨",
        "ipa": "klin"
      },
      {
        "en": "messy",
        "vi": "bừa bộn",
        "icon": "🌀",
        "ipa": "ˈmɛsi"
      },
      {
        "en": "toy box",
        "vi": "hộp đồ chơi",
        "icon": "📦",
        "ipa": "tɔɪ bɑks"
      }
    ],
    "grammar": [
      {
        "title": "There's / There are trong phòng",
        "explain": "There's (There is) dùng với danh từ số ít, There are dùng với danh từ số nhiều, để nói có gì trong phòng.",
        "example": "There's a desk in my room. There are two chairs."
      },
      {
        "title": "Tính từ trái nghĩa: clean/messy, big/small, new/old",
        "explain": "Học các cặp tính từ trái nghĩa giúp mô tả căn phòng chi tiết hơn.",
        "example": "My room is clean, not messy. My desk is new, not old."
      }
    ],
    "reading": [
      {
        "title": "My tidy room",
        "text": "My bedroom is small but tidy. There's a bed and a desk. There are two windows. My desk is new and my bed is old.",
        "questions": [
          {
            "q": "How many windows are there?",
            "options": [
              "One",
              "Two",
              "Three"
            ],
            "answer": 1
          },
          {
            "q": "Is the desk new or old?",
            "options": [
              "New",
              "Old",
              "Not mentioned"
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Tidy up time",
        "text": "My room is messy today. There's a toy box on the floor. Let's clean the room! Now it is clean and tidy.",
        "questions": [
          {
            "q": "How is the room at first?",
            "options": [
              "Messy",
              "Clean",
              "Big"
            ],
            "answer": 0
          },
          {
            "q": "How is the room at the end?",
            "options": [
              "Small",
              "Clean and tidy",
              "Dark"
            ],
            "answer": 1
          }
        ]
      }
    ],
    "quizCore": [
      {
        "q": "'Bed' nghĩa là gì?",
        "options": [
          "giường",
          "ghế",
          "bàn"
        ],
        "answer": 0
      },
      {
        "q": "'Window' nghĩa là gì?",
        "options": [
          "cửa sổ",
          "cửa ra vào",
          "tường"
        ],
        "answer": 0
      },
      {
        "q": "'Big' nghĩa là gì?",
        "options": [
          "to, lớn",
          "nhỏ",
          "mới"
        ],
        "answer": 0
      },
      {
        "q": "'Old' (trong bài) nghĩa là gì?",
        "options": [
          "cũ",
          "mới",
          "to"
        ],
        "answer": 0
      },
      {
        "q": "'room' nghĩa là gì?",
        "options": [
          "căn phòng",
          "to, lớn",
          "giường"
        ],
        "answer": 0
      },
      {
        "q": "'giường' tiếng Anh là gì?",
        "options": [
          "bed",
          "old",
          "new"
        ],
        "answer": 0
      },
      {
        "q": "'desk' nghĩa là gì?",
        "options": [
          "bàn học",
          "mới",
          "to, lớn"
        ],
        "answer": 0
      },
      {
        "q": "'cửa ra vào' tiếng Anh là gì?",
        "options": [
          "door",
          "window",
          "new"
        ],
        "answer": 0
      },
      {
        "q": "'window' nghĩa là gì?",
        "options": [
          "cửa sổ",
          "giường",
          "to, lớn"
        ],
        "answer": 0
      },
      {
        "q": "'to, lớn' tiếng Anh là gì?",
        "options": [
          "big",
          "small",
          "old"
        ],
        "answer": 0
      }
    ],
    "quizExt": [
      {
        "q": "'Wardrobe' nghĩa là gì?",
        "options": [
          "tủ quần áo",
          "giá sách",
          "cửa sổ"
        ],
        "answer": 0
      },
      {
        "q": "'Curtain' nghĩa là gì?",
        "options": [
          "rèm cửa",
          "gương",
          "kệ sách"
        ],
        "answer": 0
      },
      {
        "q": "'Bookshelf' nghĩa là gì?",
        "options": [
          "kệ sách",
          "tủ quần áo",
          "giường"
        ],
        "answer": 0
      },
      {
        "q": "'Clean' nghĩa là gì?",
        "options": [
          "sạch sẽ",
          "bừa bộn",
          "tối"
        ],
        "answer": 0
      },
      {
        "q": "'Messy' nghĩa là gì?",
        "options": [
          "bừa bộn",
          "sạch sẽ",
          "sáng"
        ],
        "answer": 0
      },
      {
        "q": "'Toy box' nghĩa là gì?",
        "options": [
          "hộp đồ chơi",
          "tủ quần áo",
          "kệ sách"
        ],
        "answer": 0
      },
      {
        "q": "Trái nghĩa của 'clean' là gì?",
        "options": [
          "messy",
          "big",
          "new"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "u15",
    "group": 3,
    "icon": "🍽️",
    "titleEn": "Unit 15: At the dining table",
    "titleVi": "Trên bàn ăn",
    "core": [
      {
        "en": "chicken",
        "vi": "thịt gà",
        "icon": "🍗",
        "ipa": "ˈʧɪkən"
      },
      {
        "en": "fish",
        "vi": "cá",
        "icon": "🐟",
        "ipa": "fɪʃ"
      },
      {
        "en": "egg",
        "vi": "trứng",
        "icon": "🥚",
        "ipa": "ɛg"
      },
      {
        "en": "bean",
        "vi": "đậu",
        "icon": "🫘",
        "ipa": "bin"
      },
      {
        "en": "bread",
        "vi": "bánh mì",
        "icon": "🍞",
        "ipa": "brɛd"
      },
      {
        "en": "meat",
        "vi": "thịt",
        "icon": "🥩",
        "ipa": "mit"
      },
      {
        "en": "juice",
        "vi": "nước ép",
        "icon": "🧃",
        "ipa": "ʤus"
      }
    ],
    "patterns": [
      {
        "en": "Would you like some chicken? – Yes, please.",
        "vi": "Bạn có muốn ăn thịt gà không? – Có, cho tớ xin."
      },
      {
        "en": "Would you like some juice? – No, thanks.",
        "vi": "Bạn có muốn uống nước ép không? – Không, cảm ơn."
      }
    ],
    "ext": [
      {
        "en": "rice",
        "vi": "cơm",
        "icon": "🍚",
        "ipa": "raɪs"
      },
      {
        "en": "vegetables",
        "vi": "rau củ",
        "icon": "🥦",
        "ipa": "ˈvɛʤtəbəlz"
      },
      {
        "en": "spoon",
        "vi": "thìa",
        "icon": "🥄",
        "ipa": "spun"
      },
      {
        "en": "bowl",
        "vi": "bát",
        "icon": "🍜",
        "ipa": "boʊl"
      },
      {
        "en": "hungry",
        "vi": "đói",
        "icon": "😋",
        "ipa": "ˈhəŋgri"
      },
      {
        "en": "thirsty",
        "vi": "khát",
        "icon": "🥤",
        "ipa": "ˈθərsti"
      },
      {
        "en": "delicious",
        "vi": "ngon",
        "icon": "😋",
        "ipa": "dɪˈlɪʃəs"
      }
    ],
    "grammar": [
      {
        "title": "Would you like some...? (mời ai ăn/uống gì)",
        "explain": "Dùng Would you like some + đồ ăn/uống? để mời lịch sự. Trả lời Yes, please. (đồng ý) hoặc No, thanks. (từ chối).",
        "example": "Would you like some bread? – Yes, please."
      },
      {
        "title": "I'm hungry/thirsty (diễn tả cảm giác)",
        "explain": "Dùng I'm hungry (tôi đói) hoặc I'm thirsty (tôi khát) để diễn tả cảm giác trước bữa ăn.",
        "example": "I'm hungry. Would you like some rice?"
      }
    ],
    "reading": [
      {
        "title": "Family dinner",
        "text": "It is dinner time. Would you like some chicken? Yes, please. Would you like some fish? No, thanks. The family enjoys the meal together.",
        "questions": [
          {
            "q": "Does the person want chicken?",
            "options": [
              "Yes",
              "No",
              "Not mentioned"
            ],
            "answer": 0
          },
          {
            "q": "Does the person want fish?",
            "options": [
              "Yes",
              "No",
              "Not mentioned"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Dinner is ready",
        "text": "I'm hungry! Dinner is ready. The chicken is delicious. I'm thirsty too, so I drink some juice.",
        "questions": [
          {
            "q": "How does the writer feel before dinner?",
            "options": [
              "Hungry",
              "Tired",
              "Happy"
            ],
            "answer": 0
          },
          {
            "q": "What does the writer drink?",
            "options": [
              "Water",
              "Juice",
              "Milk"
            ],
            "answer": 1
          }
        ]
      }
    ],
    "quizCore": [
      {
        "q": "'Chicken' nghĩa là gì?",
        "options": [
          "thịt gà",
          "cá",
          "trứng"
        ],
        "answer": 0
      },
      {
        "q": "'Bread' nghĩa là gì?",
        "options": [
          "bánh mì",
          "cơm",
          "thịt"
        ],
        "answer": 0
      },
      {
        "q": "'Egg' nghĩa là gì?",
        "options": [
          "trứng",
          "đậu",
          "cá"
        ],
        "answer": 0
      },
      {
        "q": "'Would you like some...?' dùng để làm gì?",
        "options": [
          "Mời ăn/uống",
          "Hỏi tên",
          "Hỏi tuổi"
        ],
        "answer": 0
      },
      {
        "q": "'chicken' nghĩa là gì?",
        "options": [
          "thịt gà",
          "đậu",
          "nước ép"
        ],
        "answer": 0
      },
      {
        "q": "'cá' tiếng Anh là gì?",
        "options": [
          "fish",
          "bread",
          "meat"
        ],
        "answer": 0
      },
      {
        "q": "'egg' nghĩa là gì?",
        "options": [
          "trứng",
          "cá",
          "đậu"
        ],
        "answer": 0
      },
      {
        "q": "'đậu' tiếng Anh là gì?",
        "options": [
          "bean",
          "juice",
          "egg"
        ],
        "answer": 0
      },
      {
        "q": "'bread' nghĩa là gì?",
        "options": [
          "bánh mì",
          "thịt",
          "thịt gà"
        ],
        "answer": 0
      },
      {
        "q": "'thịt' tiếng Anh là gì?",
        "options": [
          "meat",
          "bread",
          "bean"
        ],
        "answer": 0
      }
    ],
    "quizExt": [
      {
        "q": "'Rice' nghĩa là gì?",
        "options": [
          "cơm",
          "cá",
          "thịt gà"
        ],
        "answer": 0
      },
      {
        "q": "'Vegetables' nghĩa là gì?",
        "options": [
          "rau củ",
          "trái cây",
          "thịt"
        ],
        "answer": 0
      },
      {
        "q": "'Bowl' nghĩa là gì?",
        "options": [
          "bát",
          "đĩa",
          "thìa"
        ],
        "answer": 0
      },
      {
        "q": "'Hungry' nghĩa là gì?",
        "options": [
          "đói",
          "khát",
          "no"
        ],
        "answer": 0
      },
      {
        "q": "'Thirsty' nghĩa là gì?",
        "options": [
          "khát",
          "đói",
          "mệt"
        ],
        "answer": 0
      },
      {
        "q": "'Delicious' nghĩa là gì?",
        "options": [
          "ngon",
          "dở",
          "mặn"
        ],
        "answer": 0
      },
      {
        "q": "Khi đói bụng, em nói gì?",
        "options": [
          "I'm hungry.",
          "I'm thirsty.",
          "I'm tired."
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "u16",
    "group": 4,
    "icon": "🐶",
    "titleEn": "Unit 16: My pets",
    "titleVi": "Thú cưng của tôi",
    "core": [
      {
        "en": "dog",
        "vi": "con chó",
        "icon": "🐶",
        "ipa": "dɔg"
      },
      {
        "en": "cat",
        "vi": "con mèo",
        "icon": "🐱",
        "ipa": "kæt"
      },
      {
        "en": "bird",
        "vi": "con chim",
        "icon": "🐦",
        "ipa": "bərd"
      },
      {
        "en": "rabbit",
        "vi": "con thỏ",
        "icon": "🐰",
        "ipa": "ˈræbɪt"
      },
      {
        "en": "goldfish",
        "vi": "cá vàng",
        "icon": "🐠",
        "ipa": "ˈgoʊldˌfɪʃ"
      },
      {
        "en": "parrot",
        "vi": "vẹt",
        "icon": "🦜",
        "ipa": "ˈpɛrət"
      },
      {
        "en": "some",
        "vi": "một vài",
        "icon": "🔢",
        "ipa": "səm"
      },
      {
        "en": "many",
        "vi": "nhiều",
        "icon": "🔢",
        "ipa": "ˈmɛni"
      }
    ],
    "patterns": [
      {
        "en": "Do you have any pets? – Yes, I do.",
        "vi": "Bạn có nuôi thú cưng nào không? – Có."
      },
      {
        "en": "Do you have any pets? – No, I don't.",
        "vi": "Bạn có nuôi thú cưng nào không? – Không."
      },
      {
        "en": "How many pets do you have? – I have two.",
        "vi": "Bạn có bao nhiêu thú cưng? – Tớ có hai con."
      }
    ],
    "ext": [
      {
        "en": "hamster",
        "vi": "chuột hamster",
        "icon": "🐹",
        "ipa": "ˈhæmstər"
      },
      {
        "en": "turtle",
        "vi": "con rùa",
        "icon": "🐢",
        "ipa": "ˈtərtəl"
      },
      {
        "en": "guinea pig",
        "vi": "chuột lang",
        "icon": "🐹",
        "ipa": "ˈgɪni pɪg"
      },
      {
        "en": "feed",
        "vi": "cho ăn",
        "icon": "🍚",
        "ipa": "fid"
      },
      {
        "en": "cage",
        "vi": "chuồng, lồng",
        "icon": "🔲",
        "ipa": "keɪʤ"
      },
      {
        "en": "pet shop",
        "vi": "cửa hàng thú cưng",
        "icon": "🏪",
        "ipa": "pɛt ʃɑp"
      }
    ],
    "grammar": [
      {
        "title": "any / some và How many...?",
        "explain": "Dùng any trong câu hỏi/phủ định (Do you have any pets?), some trong câu khẳng định. How many...? dùng để hỏi số lượng.",
        "example": "Do you have any pets? – Yes, I have some fish. How many? – I have three."
      },
      {
        "title": "Take care of + thú cưng (chăm sóc)",
        "explain": "Dùng take care of để nói về việc chăm sóc thú cưng, feed để nói về việc cho ăn.",
        "example": "I take care of my dog. I feed it every day."
      }
    ],
    "reading": [
      {
        "title": "Tom's pet",
        "text": "Tom has a pet dog. Do you have any pets? Yes, I do. How many pets do you have? I have two dogs and one cat.",
        "questions": [
          {
            "q": "Does Tom have pets?",
            "options": [
              "Yes",
              "No",
              "Not mentioned"
            ],
            "answer": 0
          },
          {
            "q": "How many pets does Tom have?",
            "options": [
              "Two",
              "Three",
              "Four"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "At the pet shop",
        "text": "We go to the pet shop. There are many rabbits in a cage. I want to feed them. My mother buys me a goldfish.",
        "questions": [
          {
            "q": "Where are the rabbits?",
            "options": [
              "In a cage",
              "In the garden",
              "In a box"
            ],
            "answer": 0
          },
          {
            "q": "What does the mother buy?",
            "options": [
              "A goldfish",
              "A rabbit",
              "A cat"
            ],
            "answer": 0
          }
        ]
      }
    ],
    "quizCore": [
      {
        "q": "'Rabbit' nghĩa là gì?",
        "options": [
          "con thỏ",
          "con mèo",
          "con chim"
        ],
        "answer": 0
      },
      {
        "q": "'Goldfish' nghĩa là gì?",
        "options": [
          "cá vàng",
          "con cá",
          "con chuột"
        ],
        "answer": 0
      },
      {
        "q": "'Do you have any pets?' hỏi về điều gì?",
        "options": [
          "Thú cưng",
          "Gia đình",
          "Đồ chơi"
        ],
        "answer": 0
      },
      {
        "q": "'Parrot' nghĩa là gì?",
        "options": [
          "vẹt",
          "chim sẻ",
          "gà"
        ],
        "answer": 0
      },
      {
        "q": "'dog' nghĩa là gì?",
        "options": [
          "con chó",
          "con mèo",
          "vẹt"
        ],
        "answer": 0
      },
      {
        "q": "'con mèo' tiếng Anh là gì?",
        "options": [
          "cat",
          "parrot",
          "some"
        ],
        "answer": 0
      },
      {
        "q": "'bird' nghĩa là gì?",
        "options": [
          "con chim",
          "con thỏ",
          "một vài"
        ],
        "answer": 0
      },
      {
        "q": "'con thỏ' tiếng Anh là gì?",
        "options": [
          "rabbit",
          "cat",
          "bird"
        ],
        "answer": 0
      },
      {
        "q": "'goldfish' nghĩa là gì?",
        "options": [
          "cá vàng",
          "con thỏ",
          "con chim"
        ],
        "answer": 0
      },
      {
        "q": "'vẹt' tiếng Anh là gì?",
        "options": [
          "parrot",
          "some",
          "bird"
        ],
        "answer": 0
      }
    ],
    "quizExt": [
      {
        "q": "'Hamster' nghĩa là gì?",
        "options": [
          "chuột hamster",
          "thỏ",
          "vẹt"
        ],
        "answer": 0
      },
      {
        "q": "'Turtle' nghĩa là gì?",
        "options": [
          "con rùa",
          "cá vàng",
          "chuột lang"
        ],
        "answer": 0
      },
      {
        "q": "'Guinea pig' nghĩa là gì?",
        "options": [
          "chuột lang",
          "thỏ",
          "rùa"
        ],
        "answer": 0
      },
      {
        "q": "'Feed' nghĩa là gì?",
        "options": [
          "cho ăn",
          "chơi đùa",
          "tắm rửa"
        ],
        "answer": 0
      },
      {
        "q": "'Cage' nghĩa là gì?",
        "options": [
          "chuồng, lồng",
          "ổ",
          "tổ"
        ],
        "answer": 0
      },
      {
        "q": "'Pet shop' nghĩa là gì?",
        "options": [
          "cửa hàng thú cưng",
          "sở thú",
          "trang trại"
        ],
        "answer": 0
      },
      {
        "q": "'Take care of' nghĩa là gì?",
        "options": [
          "chăm sóc",
          "mua bán",
          "vui chơi"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "u17",
    "group": 4,
    "icon": "🚗",
    "titleEn": "Unit 17: Our toys",
    "titleVi": "Đồ chơi của chúng ta",
    "core": [
      {
        "en": "toy",
        "vi": "đồ chơi",
        "icon": "🧸",
        "ipa": "tɔɪ"
      },
      {
        "en": "car",
        "vi": "ô tô",
        "icon": "🚗",
        "ipa": "kɑr"
      },
      {
        "en": "bus",
        "vi": "xe buýt",
        "icon": "🚌",
        "ipa": "bəs"
      },
      {
        "en": "plane",
        "vi": "máy bay",
        "icon": "✈️",
        "ipa": "pleɪn"
      },
      {
        "en": "ship",
        "vi": "tàu thủy",
        "icon": "🚢",
        "ipa": "ʃɪp"
      },
      {
        "en": "train",
        "vi": "tàu hỏa",
        "icon": "🚂",
        "ipa": "treɪn"
      },
      {
        "en": "truck",
        "vi": "xe tải",
        "icon": "🚚",
        "ipa": "trək"
      },
      {
        "en": "kite",
        "vi": "diều",
        "icon": "🪁",
        "ipa": "kaɪt"
      },
      {
        "en": "teddy bear",
        "vi": "gấu bông",
        "icon": "🧸",
        "ipa": "ˈtɛdi bɛr"
      }
    ],
    "patterns": [
      {
        "en": "He has a car.",
        "vi": "Cậu ấy có một chiếc ô tô."
      },
      {
        "en": "They have many toys.",
        "vi": "Họ có nhiều đồ chơi."
      }
    ],
    "ext": [
      {
        "en": "doll",
        "vi": "con búp bê",
        "icon": "🪆",
        "ipa": "dɑl"
      },
      {
        "en": "robot",
        "vi": "người máy",
        "icon": "🤖",
        "ipa": "ˈroʊˌbət"
      },
      {
        "en": "blocks",
        "vi": "khối xếp hình",
        "icon": "🧱",
        "ipa": "blɑks"
      },
      {
        "en": "colourful",
        "vi": "nhiều màu sắc",
        "icon": "🌈",
        "ipa": "ˈkʌlərfəl"
      },
      {
        "en": "share",
        "vi": "chia sẻ",
        "icon": "🤝",
        "ipa": "ʃɛr"
      },
      {
        "en": "favourite toy",
        "vi": "đồ chơi yêu thích",
        "icon": "⭐",
        "ipa": "ˈfeɪvərɪt tɔɪ"
      }
    ],
    "grammar": [
      {
        "title": "has (he/she) và have (they/we/you/I)",
        "explain": "Với chủ ngữ he/she dùng has, với I/you/we/they dùng have, khi nói về việc sở hữu đồ vật.",
        "example": "He has a plane. They have a train."
      },
      {
        "title": "Whose + danh từ (hỏi của ai)",
        "explain": "Dùng Whose + danh từ + is this? để hỏi đồ vật này là của ai. Trả lời It's + tên sở hữu + 's.",
        "example": "Whose car is this? – It's Nam's."
      }
    ],
    "reading": [
      {
        "title": "My toy box",
        "text": "I have a big toy box. He has a car and a train. She has a teddy bear. They have many toys and they play together.",
        "questions": [
          {
            "q": "What does 'he' have?",
            "options": [
              "A car and a train",
              "A teddy bear",
              "A kite"
            ],
            "answer": 0
          },
          {
            "q": "What does 'she' have?",
            "options": [
              "A car",
              "A teddy bear",
              "A truck"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Sharing toys",
        "text": "This colourful kite is my favourite toy. Whose car is this? It's my brother's. We share our toys and have fun together.",
        "questions": [
          {
            "q": "What is the writer's favourite toy?",
            "options": [
              "A colourful kite",
              "A car",
              "A teddy bear"
            ],
            "answer": 0
          },
          {
            "q": "Whose car is it?",
            "options": [
              "The writer's",
              "The brother's",
              "A friend's"
            ],
            "answer": 1
          }
        ]
      }
    ],
    "quizCore": [
      {
        "q": "'Car' nghĩa là gì?",
        "options": [
          "ô tô",
          "xe buýt",
          "máy bay"
        ],
        "answer": 0
      },
      {
        "q": "'Kite' nghĩa là gì?",
        "options": [
          "diều",
          "gấu bông",
          "tàu thủy"
        ],
        "answer": 0
      },
      {
        "q": "'Teddy bear' nghĩa là gì?",
        "options": [
          "gấu bông",
          "búp bê",
          "người máy"
        ],
        "answer": 0
      },
      {
        "q": "'Plane' nghĩa là gì?",
        "options": [
          "máy bay",
          "tàu hỏa",
          "xe tải"
        ],
        "answer": 0
      },
      {
        "q": "'toy' nghĩa là gì?",
        "options": [
          "đồ chơi",
          "máy bay",
          "tàu thủy"
        ],
        "answer": 0
      },
      {
        "q": "'ô tô' tiếng Anh là gì?",
        "options": [
          "car",
          "ship",
          "bus"
        ],
        "answer": 0
      },
      {
        "q": "'bus' nghĩa là gì?",
        "options": [
          "xe buýt",
          "ô tô",
          "diều"
        ],
        "answer": 0
      },
      {
        "q": "'máy bay' tiếng Anh là gì?",
        "options": [
          "plane",
          "toy",
          "car"
        ],
        "answer": 0
      },
      {
        "q": "'ship' nghĩa là gì?",
        "options": [
          "tàu thủy",
          "ô tô",
          "xe buýt"
        ],
        "answer": 0
      },
      {
        "q": "'tàu hỏa' tiếng Anh là gì?",
        "options": [
          "train",
          "teddy bear",
          "car"
        ],
        "answer": 0
      }
    ],
    "quizExt": [
      {
        "q": "'Doll' nghĩa là gì?",
        "options": [
          "con búp bê",
          "gấu bông",
          "người máy"
        ],
        "answer": 0
      },
      {
        "q": "'Robot' nghĩa là gì?",
        "options": [
          "người máy",
          "búp bê",
          "khối xếp hình"
        ],
        "answer": 0
      },
      {
        "q": "'Blocks' nghĩa là gì?",
        "options": [
          "khối xếp hình",
          "quả bóng",
          "ô tô"
        ],
        "answer": 0
      },
      {
        "q": "'Colourful' nghĩa là gì?",
        "options": [
          "nhiều màu sắc",
          "một màu",
          "tối màu"
        ],
        "answer": 0
      },
      {
        "q": "'Share' nghĩa là gì?",
        "options": [
          "chia sẻ",
          "giữ riêng",
          "cất đi"
        ],
        "answer": 0
      },
      {
        "q": "'Favourite toy' nghĩa là gì?",
        "options": [
          "đồ chơi yêu thích",
          "đồ chơi mới",
          "đồ chơi cũ"
        ],
        "answer": 0
      },
      {
        "q": "'Whose car is this?' hỏi về điều gì?",
        "options": [
          "Xe này của ai",
          "Xe màu gì",
          "Xe ở đâu"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "u18",
    "group": 4,
    "icon": "🎵",
    "titleEn": "Unit 18: Playing and doing",
    "titleVi": "Chơi và làm",
    "core": [
      {
        "en": "reading",
        "vi": "đọc sách",
        "icon": "📖",
        "ipa": "ˈrɛdɪŋ"
      },
      {
        "en": "writing",
        "vi": "viết",
        "icon": "✍️",
        "ipa": "ˈraɪtɪŋ"
      },
      {
        "en": "singing",
        "vi": "hát",
        "icon": "🎤",
        "ipa": "ˈsɪŋɪŋ"
      },
      {
        "en": "dancing",
        "vi": "nhảy múa",
        "icon": "💃",
        "ipa": "ˈdænsɪŋ"
      },
      {
        "en": "drawing a picture",
        "vi": "vẽ tranh",
        "icon": "🎨",
        "ipa": "drɔɪŋ ə ˈpɪkʧər"
      },
      {
        "en": "listening to music",
        "vi": "nghe nhạc",
        "icon": "🎧",
        "ipa": "ˈlɪsənɪŋ tɪ mˈjuzɪk"
      },
      {
        "en": "playing basketball",
        "vi": "chơi bóng rổ",
        "icon": "🏀",
        "ipa": "pleɪɪŋ ˈbæskətˌbɔl"
      },
      {
        "en": "watching TV",
        "vi": "xem ti vi",
        "icon": "📺",
        "ipa": "ˈwɑʧɪŋ ˌtɛləˈvɪʒən"
      }
    ],
    "patterns": [
      {
        "en": "What are you doing? – I'm reading.",
        "vi": "Bạn đang làm gì? – Tớ đang đọc sách."
      },
      {
        "en": "I'm listening to music.",
        "vi": "Tớ đang nghe nhạc."
      }
    ],
    "ext": [
      {
        "en": "doing exercise",
        "vi": "tập thể dục",
        "icon": "🤸",
        "ipa": "duɪŋ ˈɛksərˌsaɪz"
      },
      {
        "en": "playing the piano",
        "vi": "chơi đàn piano",
        "icon": "🎹",
        "ipa": "pleɪɪŋ ðə piˈænə"
      },
      {
        "en": "cooking",
        "vi": "nấu ăn",
        "icon": "🍳",
        "ipa": "ˈkʊkɪŋ"
      },
      {
        "en": "playing video games",
        "vi": "chơi trò chơi điện tử",
        "icon": "🎮",
        "ipa": "pleɪɪŋ ˈvɪdioʊ geɪmz"
      },
      {
        "en": "talking on the phone",
        "vi": "nói chuyện điện thoại",
        "icon": "📱",
        "ipa": "ˈtɔkɪŋ ɔn ðə foʊn"
      },
      {
        "en": "sleeping",
        "vi": "đang ngủ",
        "icon": "😴",
        "ipa": "sˈlipɪŋ"
      }
    ],
    "grammar": [
      {
        "title": "Thì hiện tại tiếp diễn: am/is/are + V-ing",
        "explain": "Dùng để nói về việc đang diễn ra ngay lúc nói. Với I dùng am, với he/she/it dùng is, với you/we/they dùng are.",
        "example": "I am reading. She is dancing."
      },
      {
        "title": "Câu phủ định hiện tại tiếp diễn: is/are + not + V-ing",
        "explain": "Thêm not sau am/is/are để nói ai đó KHÔNG đang làm việc gì.",
        "example": "I'm not sleeping. She isn't reading, she's writing."
      }
    ],
    "reading": [
      {
        "title": "At home now",
        "text": "What are you doing? I'm reading a book. My sister is drawing a picture. My brother is listening to music. We are all busy at home.",
        "questions": [
          {
            "q": "What is the sister doing?",
            "options": [
              "Reading",
              "Drawing a picture",
              "Singing"
            ],
            "answer": 1
          },
          {
            "q": "What is the brother doing?",
            "options": [
              "Watching TV",
              "Listening to music",
              "Dancing"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Sunday afternoon",
        "text": "It's Sunday afternoon. My brother is playing video games. He isn't sleeping. My mother is talking on the phone.",
        "questions": [
          {
            "q": "What is the brother doing?",
            "options": [
              "Playing video games",
              "Sleeping",
              "Reading"
            ],
            "answer": 0
          },
          {
            "q": "What is the mother doing?",
            "options": [
              "Cooking",
              "Talking on the phone",
              "Watching TV"
            ],
            "answer": 1
          }
        ]
      }
    ],
    "quizCore": [
      {
        "q": "'Reading' nghĩa là gì?",
        "options": [
          "đọc sách",
          "viết",
          "hát"
        ],
        "answer": 0
      },
      {
        "q": "'Watching TV' nghĩa là gì?",
        "options": [
          "xem ti vi",
          "nghe nhạc",
          "vẽ tranh"
        ],
        "answer": 0
      },
      {
        "q": "'What are you doing?' hỏi về điều gì?",
        "options": [
          "Việc đang làm",
          "Tên",
          "Sở thích"
        ],
        "answer": 0
      },
      {
        "q": "'Listening to music' nghĩa là gì?",
        "options": [
          "nghe nhạc",
          "hát",
          "nhảy múa"
        ],
        "answer": 0
      },
      {
        "q": "'reading' nghĩa là gì?",
        "options": [
          "đọc sách",
          "vẽ tranh",
          "viết"
        ],
        "answer": 0
      },
      {
        "q": "'viết' tiếng Anh là gì?",
        "options": [
          "writing",
          "drawing a picture",
          "dancing"
        ],
        "answer": 0
      },
      {
        "q": "'singing' nghĩa là gì?",
        "options": [
          "hát",
          "đọc sách",
          "nhảy múa"
        ],
        "answer": 0
      },
      {
        "q": "'nhảy múa' tiếng Anh là gì?",
        "options": [
          "dancing",
          "writing",
          "singing"
        ],
        "answer": 0
      },
      {
        "q": "'drawing a picture' nghĩa là gì?",
        "options": [
          "vẽ tranh",
          "nhảy múa",
          "chơi bóng rổ"
        ],
        "answer": 0
      },
      {
        "q": "'nghe nhạc' tiếng Anh là gì?",
        "options": [
          "listening to music",
          "writing",
          "playing basketball"
        ],
        "answer": 0
      }
    ],
    "quizExt": [
      {
        "q": "Thì hiện tại tiếp diễn dùng động từ thêm gì?",
        "options": [
          "-ing",
          "-ed",
          "-s"
        ],
        "answer": 0
      },
      {
        "q": "'Doing exercise' nghĩa là gì?",
        "options": [
          "tập thể dục",
          "chơi đàn",
          "nấu ăn"
        ],
        "answer": 0
      },
      {
        "q": "'Playing the piano' nghĩa là gì?",
        "options": [
          "chơi đàn piano",
          "chơi bóng rổ",
          "nghe nhạc"
        ],
        "answer": 0
      },
      {
        "q": "'Sleeping' nghĩa là gì?",
        "options": [
          "đang ngủ",
          "đang ăn",
          "đang học"
        ],
        "answer": 0
      },
      {
        "q": "'Talking on the phone' nghĩa là gì?",
        "options": [
          "nói chuyện điện thoại",
          "xem ti vi",
          "nghe nhạc"
        ],
        "answer": 0
      },
      {
        "q": "'She isn't reading.' nghĩa là gì?",
        "options": [
          "Cô ấy không đang đọc sách",
          "Cô ấy đang đọc sách",
          "Cô ấy thích đọc sách"
        ],
        "answer": 0
      },
      {
        "q": "'Playing video games' nghĩa là gì?",
        "options": [
          "chơi trò chơi điện tử",
          "chơi bóng rổ",
          "chơi cờ"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "u19",
    "group": 4,
    "icon": "🚴",
    "titleEn": "Unit 19: Outdoor activities",
    "titleVi": "Hoạt động ngoài trời",
    "core": [
      {
        "en": "cycling",
        "vi": "đạp xe",
        "icon": "🚴",
        "ipa": "ˈsaɪkəlɪŋ"
      },
      {
        "en": "running",
        "vi": "chạy bộ",
        "icon": "🏃",
        "ipa": "ˈrənɪŋ"
      },
      {
        "en": "walking",
        "vi": "đi bộ",
        "icon": "🚶",
        "ipa": "ˈwɔkɪŋ"
      },
      {
        "en": "skating",
        "vi": "trượt patin",
        "icon": "⛸️",
        "ipa": "ˈskeɪtɪŋ"
      },
      {
        "en": "skipping",
        "vi": "nhảy dây",
        "icon": "🪢",
        "ipa": "ˈskɪpɪŋ"
      },
      {
        "en": "flying a kite",
        "vi": "thả diều",
        "icon": "🪁",
        "ipa": "flaɪɪŋ ə kaɪt"
      },
      {
        "en": "painting",
        "vi": "vẽ màu",
        "icon": "🖌️",
        "ipa": "ˈpeɪnɪŋ"
      },
      {
        "en": "playing badminton",
        "vi": "chơi cầu lông",
        "icon": "🏸",
        "ipa": "pleɪɪŋ ˈbædˌmɪntən"
      }
    ],
    "patterns": [
      {
        "en": "What's he doing? – He's cycling.",
        "vi": "Cậu ấy đang làm gì? – Cậu ấy đang đạp xe."
      },
      {
        "en": "What's she doing? – She's flying a kite.",
        "vi": "Cô ấy đang làm gì? – Cô ấy đang thả diều."
      }
    ],
    "ext": [
      {
        "en": "camping",
        "vi": "cắm trại",
        "icon": "⛺",
        "ipa": "ˈkæmpɪŋ"
      },
      {
        "en": "fishing",
        "vi": "câu cá",
        "icon": "🎣",
        "ipa": "ˈfɪʃɪŋ"
      },
      {
        "en": "picnicking",
        "vi": "đi dã ngoại",
        "icon": "🧺",
        "ipa": "ˈpɪkˌnɪkɪŋ"
      },
      {
        "en": "jogging",
        "vi": "chạy bộ thể dục",
        "icon": "🏃",
        "ipa": "ˈʤɔgɪŋ"
      },
      {
        "en": "sunny",
        "vi": "trời nắng",
        "icon": "☀️",
        "ipa": "ˈsəni"
      },
      {
        "en": "playground",
        "vi": "sân chơi",
        "icon": "🏞️",
        "ipa": "ˈpleɪˌgraʊnd"
      }
    ],
    "grammar": [
      {
        "title": "What's he/she doing? – He's/She's + V-ing",
        "explain": "Dùng để hỏi và trả lời về hoạt động ai đó đang làm ngoài trời, với chủ ngữ he/she.",
        "example": "What's he doing? – He's running."
      },
      {
        "title": "Liên từ and khi nối 2 hoạt động",
        "explain": "Dùng and để nối hai hoạt động đang diễn ra cùng lúc trong câu hiện tại tiếp diễn.",
        "example": "He's running and jumping in the playground."
      }
    ],
    "reading": [
      {
        "title": "Weekend fun",
        "text": "It is the weekend. What's he doing? He's cycling in the park. What's she doing? She's flying a kite. Everyone is happy outdoors.",
        "questions": [
          {
            "q": "What is he doing?",
            "options": [
              "Cycling",
              "Running",
              "Skating"
            ],
            "answer": 0
          },
          {
            "q": "What is she doing?",
            "options": [
              "Painting",
              "Flying a kite",
              "Skipping"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "A sunny day",
        "text": "It's a sunny day! Children are jogging and cycling in the playground. What's he doing? He's flying a kite.",
        "questions": [
          {
            "q": "How is the weather?",
            "options": [
              "Sunny",
              "Rainy",
              "Cold"
            ],
            "answer": 0
          },
          {
            "q": "Where are the children playing?",
            "options": [
              "In the playground",
              "At home",
              "At school"
            ],
            "answer": 0
          }
        ]
      }
    ],
    "quizCore": [
      {
        "q": "'Cycling' nghĩa là gì?",
        "options": [
          "đạp xe",
          "chạy bộ",
          "đi bộ"
        ],
        "answer": 0
      },
      {
        "q": "'Flying a kite' nghĩa là gì?",
        "options": [
          "thả diều",
          "câu cá",
          "cắm trại"
        ],
        "answer": 0
      },
      {
        "q": "'Skating' nghĩa là gì?",
        "options": [
          "trượt patin",
          "nhảy dây",
          "chạy bộ"
        ],
        "answer": 0
      },
      {
        "q": "'Walking' nghĩa là gì?",
        "options": [
          "đi bộ",
          "chạy bộ",
          "đạp xe"
        ],
        "answer": 0
      },
      {
        "q": "'cycling' nghĩa là gì?",
        "options": [
          "đạp xe",
          "vẽ màu",
          "thả diều"
        ],
        "answer": 0
      },
      {
        "q": "'chạy bộ' tiếng Anh là gì?",
        "options": [
          "running",
          "painting",
          "skating"
        ],
        "answer": 0
      },
      {
        "q": "'walking' nghĩa là gì?",
        "options": [
          "đi bộ",
          "nhảy dây",
          "trượt patin"
        ],
        "answer": 0
      },
      {
        "q": "'trượt patin' tiếng Anh là gì?",
        "options": [
          "skating",
          "painting",
          "flying a kite"
        ],
        "answer": 0
      },
      {
        "q": "'skipping' nghĩa là gì?",
        "options": [
          "nhảy dây",
          "đạp xe",
          "đi bộ"
        ],
        "answer": 0
      },
      {
        "q": "'thả diều' tiếng Anh là gì?",
        "options": [
          "flying a kite",
          "cycling",
          "skating"
        ],
        "answer": 0
      }
    ],
    "quizExt": [
      {
        "q": "'Camping' nghĩa là gì?",
        "options": [
          "cắm trại",
          "câu cá",
          "dã ngoại"
        ],
        "answer": 0
      },
      {
        "q": "'Fishing' nghĩa là gì?",
        "options": [
          "câu cá",
          "cắm trại",
          "thả diều"
        ],
        "answer": 0
      },
      {
        "q": "'Picnicking' nghĩa là gì?",
        "options": [
          "đi dã ngoại",
          "cắm trại",
          "câu cá"
        ],
        "answer": 0
      },
      {
        "q": "'Jogging' nghĩa là gì?",
        "options": [
          "chạy bộ thể dục",
          "đạp xe",
          "bơi lội"
        ],
        "answer": 0
      },
      {
        "q": "'Sunny' nghĩa là gì?",
        "options": [
          "trời nắng",
          "trời mưa",
          "trời lạnh"
        ],
        "answer": 0
      },
      {
        "q": "'Playground' nghĩa là gì?",
        "options": [
          "sân chơi",
          "sân trường",
          "công viên"
        ],
        "answer": 0
      },
      {
        "q": "Dùng từ gì để nối 2 hoạt động cùng lúc?",
        "options": [
          "and",
          "but",
          "or"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "u20",
    "group": 4,
    "icon": "🦁",
    "titleEn": "Unit 20: At the zoo",
    "titleVi": "Ở sở thú",
    "core": [
      {
        "en": "elephant",
        "vi": "con voi",
        "icon": "🐘",
        "ipa": "ˈɛləfənt"
      },
      {
        "en": "monkey",
        "vi": "con khỉ",
        "icon": "🐒",
        "ipa": "ˈməŋki"
      },
      {
        "en": "horse",
        "vi": "con ngựa",
        "icon": "🐴",
        "ipa": "hɔrs"
      },
      {
        "en": "parrot",
        "vi": "con vẹt",
        "icon": "🦜",
        "ipa": "ˈpɛrət"
      },
      {
        "en": "climbing",
        "vi": "trèo",
        "icon": "🧗",
        "ipa": "ˈklaɪmɪŋ"
      },
      {
        "en": "counting",
        "vi": "đếm",
        "icon": "🔢",
        "ipa": "ˈkaʊntɪŋ"
      },
      {
        "en": "dancing",
        "vi": "nhảy múa",
        "icon": "💃",
        "ipa": "ˈdænsɪŋ"
      }
    ],
    "patterns": [
      {
        "en": "What can you see? – I can see an elephant.",
        "vi": "Bạn có thể thấy gì? – Tớ có thể thấy một con voi."
      },
      {
        "en": "What's it doing? – It's climbing.",
        "vi": "Nó đang làm gì? – Nó đang trèo."
      }
    ],
    "ext": [
      {
        "en": "tiger",
        "vi": "con hổ",
        "icon": "🐯",
        "ipa": "ˈtaɪgər"
      },
      {
        "en": "lion",
        "vi": "con sư tử",
        "icon": "🦁",
        "ipa": "laɪən"
      },
      {
        "en": "giraffe",
        "vi": "con hươu cao cổ",
        "icon": "🦒",
        "ipa": "ʤəræf"
      },
      {
        "en": "zebra",
        "vi": "con ngựa vằn",
        "icon": "🦓",
        "ipa": "ˈzibrə"
      },
      {
        "en": "snake",
        "vi": "con rắn",
        "icon": "🐍",
        "ipa": "sneɪk"
      },
      {
        "en": "crocodile",
        "vi": "con cá sấu",
        "icon": "🐊",
        "ipa": "ˈkrɑkəˌdaɪl"
      },
      {
        "en": "eating",
        "vi": "đang ăn",
        "icon": "🍽️",
        "ipa": "ˈitɪŋ"
      }
    ],
    "grammar": [
      {
        "title": "Ôn tập: can + thì hiện tại tiếp diễn",
        "explain": "Dùng can để nói khả năng nhìn thấy gì (What can you see? – I can see...), dùng am/is/are + V-ing để nói con vật đang làm gì.",
        "example": "I can see a monkey. It is climbing a tree."
      },
      {
        "title": "Ôn tập: câu hỏi Yes/No với can",
        "explain": "Dùng Can you see...? để hỏi có nhìn thấy con vật nào không, trả lời Yes, I can./No, I can't.",
        "example": "Can you see a snake? – Yes, I can."
      }
    ],
    "reading": [
      {
        "title": "A day at the zoo",
        "text": "Last Sunday, my class visited the zoo. What can you see? I can see an elephant and a monkey. The monkey is climbing a tree. It was a wonderful day.",
        "questions": [
          {
            "q": "What animals can they see?",
            "options": [
              "Elephant and monkey",
              "Only elephant",
              "Fish and birds"
            ],
            "answer": 0
          },
          {
            "q": "What is the monkey doing?",
            "options": [
              "Sleeping",
              "Climbing a tree",
              "Eating"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Feeding time",
        "text": "It's feeding time at the zoo. Can you see the crocodile? Yes, I can. It's eating fish. The snake is sleeping.",
        "questions": [
          {
            "q": "What is the crocodile doing?",
            "options": [
              "Eating fish",
              "Sleeping",
              "Swimming"
            ],
            "answer": 0
          },
          {
            "q": "What is the snake doing?",
            "options": [
              "Eating",
              "Sleeping",
              "Climbing"
            ],
            "answer": 1
          }
        ]
      }
    ],
    "quizCore": [
      {
        "q": "'Elephant' nghĩa là gì?",
        "options": [
          "con voi",
          "con khỉ",
          "con ngựa"
        ],
        "answer": 0
      },
      {
        "q": "'Monkey' nghĩa là gì?",
        "options": [
          "con khỉ",
          "con voi",
          "con vẹt"
        ],
        "answer": 0
      },
      {
        "q": "'Climbing' nghĩa là gì?",
        "options": [
          "trèo",
          "đếm",
          "nhảy múa"
        ],
        "answer": 0
      },
      {
        "q": "'What can you see?' hỏi về điều gì?",
        "options": [
          "Điều nhìn thấy được",
          "Tên con vật yêu thích",
          "Nơi ở"
        ],
        "answer": 0
      },
      {
        "q": "'elephant' nghĩa là gì?",
        "options": [
          "con voi",
          "nhảy múa",
          "con vẹt"
        ],
        "answer": 0
      },
      {
        "q": "'con khỉ' tiếng Anh là gì?",
        "options": [
          "monkey",
          "counting",
          "parrot"
        ],
        "answer": 0
      },
      {
        "q": "'horse' nghĩa là gì?",
        "options": [
          "con ngựa",
          "con vẹt",
          "trèo"
        ],
        "answer": 0
      },
      {
        "q": "'con vẹt' tiếng Anh là gì?",
        "options": [
          "parrot",
          "monkey",
          "dancing"
        ],
        "answer": 0
      },
      {
        "q": "'climbing' nghĩa là gì?",
        "options": [
          "trèo",
          "con voi",
          "con khỉ"
        ],
        "answer": 0
      },
      {
        "q": "'đếm' tiếng Anh là gì?",
        "options": [
          "counting",
          "horse",
          "climbing"
        ],
        "answer": 0
      }
    ],
    "quizExt": [
      {
        "q": "'Tiger' nghĩa là gì?",
        "options": [
          "con hổ",
          "con sư tử",
          "con voi"
        ],
        "answer": 0
      },
      {
        "q": "'Giraffe' nghĩa là gì?",
        "options": [
          "con hươu cao cổ",
          "con ngựa vằn",
          "con sư tử"
        ],
        "answer": 0
      },
      {
        "q": "'Zebra' nghĩa là gì?",
        "options": [
          "con ngựa vằn",
          "con hổ",
          "con hươu cao cổ"
        ],
        "answer": 0
      },
      {
        "q": "'Snake' nghĩa là gì?",
        "options": [
          "con rắn",
          "con cá sấu",
          "con voi"
        ],
        "answer": 0
      },
      {
        "q": "'Crocodile' nghĩa là gì?",
        "options": [
          "con cá sấu",
          "con rắn",
          "con khỉ"
        ],
        "answer": 0
      },
      {
        "q": "'Eating' nghĩa là gì?",
        "options": [
          "đang ăn",
          "đang ngủ",
          "đang chạy"
        ],
        "answer": 0
      },
      {
        "q": "'Can you see a snake?' trả lời đồng ý là gì?",
        "options": [
          "Yes, I can.",
          "Yes, it is.",
          "Yes, I do."
        ],
        "answer": 0
      }
    ]
  }
];

const REVIEWS = [
  {
    "id": "r1",
    "afterGroup": 1,
    "titleVi": "Ôn tập 1",
    "units": [
      "starter",
      "u1",
      "u2",
      "u3",
      "u4",
      "u5"
    ]
  },
  {
    "id": "r2",
    "afterGroup": 2,
    "titleVi": "Ôn tập 2",
    "units": [
      "u6",
      "u7",
      "u8",
      "u9",
      "u10"
    ]
  },
  {
    "id": "r3",
    "afterGroup": 3,
    "titleVi": "Ôn tập 3",
    "units": [
      "u11",
      "u12",
      "u13",
      "u14",
      "u15"
    ]
  },
  {
    "id": "r4",
    "afterGroup": 4,
    "titleVi": "Ôn tập 4",
    "units": [
      "u16",
      "u17",
      "u18",
      "u19",
      "u20"
    ]
  }
];

const GROUP_NAMES = {
  "1": "Đảo Khởi đầu",
  "2": "Đảo Trường học",
  "3": "Đảo Gia đình",
  "4": "Đảo Khám phá"
};
