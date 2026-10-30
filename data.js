/**
 * 영어회화 100일의 기적 1권(시즌 1) 학습 데이터베이스
 * DAY 001 ~ DAY 010
 */
const lectures = [
  {
    day: 1,
    dayFormatted: "DAY 001",
    title: "Look who's here (이게 대체 누구야)",
    videoId: "KPjA3VOwluM",
    dialogues: [
      {
        id: "d1_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "라이언, 이게 대체 누구야!",
        en: "Ryan! Look who's here.",
        time: "01:13",
        seconds: 73,
        note: "Look who's here : 이게 대체 누구야! (뜻밖의 장소에서 반가운 사람을 만났을 때)",
        extras: [
          { en: "Fancy seeing you here.", kr: "여기서 널 만나다니 뜻밖이다." },
          { en: "What a surprise!", kr: "이게 웬일이야!" }
        ]
      },
      {
        id: "d1_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "만나서 반가워. 세상 참 좁다.",
        en: "Good to see you. What a small world.",
        time: "02:26",
        seconds: 146,
        note: "Good to see you : (구면인 사이에) 만나서 반가워 / What a small world : 세상 참 좁다",
        extras: [
          { en: "Nice to see you. / Great to see you.", kr: "만나서 반가워." },
          { en: "It's a small world.", kr: "세상 참 좁네." }
        ]
      },
      {
        id: "d1_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "정말 오랜만이야. 그동안 어떻게 지냈어?",
        en: "Long time no see. How have you been?",
        time: "04:12",
        seconds: 252,
        note: "Long time no see : 오랜만이야 / How have you been? : 그동안 어떻게 지냈어?",
        extras: [
          { en: "Long time no talk.", kr: "오랜만에 통화하네." },
          { en: "How are you doing?", kr: "어떻게 지내?" }
        ]
      },
      {
        id: "d1_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "잘 지내고 있지. 넌 하나도 안 변했구나.",
        en: "I'm doing great. You haven't changed a bit.",
        time: "05:48",
        seconds: 348,
        note: "I'm doing great : 아주 잘 지내 / haven't changed a bit : 조금도 변하지 않았다",
        extras: [
          { en: "Same old, same old.", kr: "늘 똑같지 뭐." },
          { en: "Can't complain.", kr: "그럭저럭 잘 지내 (불만 없어)." }
        ]
      },
      {
        id: "d1_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "대화 즐거웠어. 아내분께 안부 전해줘.",
        en: "Nice talking to you. Say hello to your wife.",
        time: "07:37",
        seconds: 457,
        note: "Nice talking to you : 대화 즐거웠어 / say hello to ~ : ~에게 안부를 전하다",
        extras: [
          { en: "Give my regards to your father.", kr: "아버지께 안부 전해드려." }
        ]
      },
      {
        id: "d1_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "나중에 보자. 내가 연락할게.",
        en: "Catch you later. I'll keep in touch.",
        time: "09:22",
        seconds: 562,
        note: "Catch you later : 나중에 봐 / keep in touch : 연락하고 지내다",
        extras: [
          { en: "Don't be a stranger.", kr: "연락 끊고 살지 마 (자주 연락해)." },
          { en: "Stay in touch.", kr: "연락 유지해." }
        ]
      }
    ]
  },
  {
    day: 2,
    dayFormatted: "DAY 002",
    title: "Don't mention it (별말씀을요)",
    videoId: "TVlWM_5SZpA",
    dialogues: [
      {
        id: "d2_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "도와줘서 정말 고마워.",
        en: "Thank you so much for your help.",
        time: "00:45",
        seconds: 45,
        note: "thank somebody for ~ : ~에 대해 고마워하다",
        extras: [
          { en: "I can't thank you enough.", kr: "얼마나 고마운지 몰라요." }
        ]
      },
      {
        id: "d2_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "별말씀을요. 언제든 말씀하세요.",
        en: "Don't mention it. Don't hesitate to ask anytime.",
        time: "01:20",
        seconds: 80,
        note: "Don't mention it : 별말씀을요, 천만에요 / hesitate to ~ : ~하는 것을 주저하다",
        extras: [
          { en: "You're very welcome.", kr: "천만에요." }
        ]
      },
      {
        id: "d2_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "너한테 큰 빚을 졌네.",
        en: "I owe you big time.",
        time: "02:10",
        seconds: 130,
        note: "owe somebody big time : ~에게 큰 빚을 지다, 큰 신세를 지다",
        extras: [
          { en: "I owe you one.", kr: "신세 한번 졌어." }
        ]
      },
      {
        id: "d2_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "친구 사이에 빚은 무슨 빚이야.",
        en: "What are friends for? Don't worry about it.",
        time: "02:50",
        seconds: 170,
        note: "What are friends for? : 친구 좋다는 게 뭐야?",
        extras: []
      },
      {
        id: "d2_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "내가 다음에 꼭 맛있는 식사 대접할게.",
        en: "I'll treat you to a nice meal next time.",
        time: "03:30",
        seconds: 210,
        note: "treat somebody to ~ : ~에게 ~을 대접하다",
        extras: [
          { en: "Dinner is on me.", kr: "저녁은 내가 살게." }
        ]
      },
      {
        id: "d2_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "그 말 잊지 마. 기대하고 있을게.",
        en: "I'll hold you to that. I'm looking forward to it.",
        time: "04:10",
        seconds: 250,
        note: "hold somebody to that : (그 약속) 꼭 지켜야 해, 말 지켜라",
        extras: []
      }
    ]
  },
  {
    day: 3,
    dayFormatted: "DAY 003",
    title: "What's the weather like? (날씨가 어때?)",
    videoId: "c2p8EwOTcD4",
    dialogues: [
      {
        id: "d3_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "오늘 바깥 날씨가 어때?",
        en: "What's the weather like outside today?",
        time: "00:42",
        seconds: 42,
        note: "What's the weather like? : 날씨가 어때?",
        extras: [
          { en: "How is the weather?", kr: "날씨 어때?" }
        ]
      },
      {
        id: "d3_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "하늘이 잔뜩 찌푸린 게 비가 올 것 같아.",
        en: "It's overcast and looks like rain.",
        time: "01:15",
        seconds: 75,
        note: "overcast : (하늘이) 잔뜩 흐린, 구름 낀 / look like rain : 비가 올 것 같다",
        extras: []
      },
      {
        id: "d3_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "일기예보 확인해 봤어?",
        en: "Did you check the weather forecast?",
        time: "01:50",
        seconds: 110,
        note: "weather forecast : 일기예보",
        extras: []
      },
      {
        id: "d3_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "오후에 소나기가 내릴 확률이 높대.",
        en: "There's a high chance of showers in the afternoon.",
        time: "02:30",
        seconds: 150,
        note: "a high chance of ~ : ~할 확률이 높음 / showers : 소나기",
        extras: []
      },
      {
        id: "d3_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "외출할 때 우산 챙겨가는 거 잊지 마.",
        en: "Don't forget to take an umbrella when you go out.",
        time: "03:05",
        seconds: 185,
        note: "Don't forget to ~ : ~하는 것을 잊지 마라",
        extras: []
      },
      {
        id: "d3_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "알려줘서 고마워. 접이식 우산 챙길게.",
        en: "Thanks for the heads-up. I'll grab a folding umbrella.",
        time: "03:40",
        seconds: 220,
        note: "heads-up : 미리 알려줌, 귀띔 / folding umbrella : 접이식 우산",
        extras: []
      }
    ]
  },
  {
    day: 4,
    dayFormatted: "DAY 004",
    title: "I feel like going out (놀러 나가고 싶어)",
    videoId: "ska_7WI5Zz0",
    dialogues: [
      {
        id: "d4_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "날씨도 화창한데 어디 놀러 나가고 싶다.",
        en: "The weather is gorgeous. I feel like going out.",
        time: "00:44",
        seconds: 44,
        note: "gorgeous : 화창하고 멋진 / feel like -ing : ~하고 싶다",
        extras: [
          { en: "I don't feel like doing anything.", kr: "아무것도 하고 싶지 않아." }
        ]
      },
      {
        id: "d4_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "근교로 드라이브하러 갈까?",
        en: "Why don't we go for a drive in the suburbs?",
        time: "01:20",
        seconds: 80,
        note: "go for a drive : 드라이브하러 가다 / suburbs : 교외, 근교",
        extras: []
      },
      {
        id: "d4_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "좋은 생각이야! 바람 쐬고 싶었어.",
        en: "Sounds like a plan! I needed some fresh air.",
        time: "01:55",
        seconds: 115,
        note: "Sounds like a plan : 좋은 계획이야, 찬성! / fresh air : 신선한 공기",
        extras: []
      },
      {
        id: "d4_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "강변 따라서 전망 좋은 카페에 가자.",
        en: "Let's go to a scenic café along the riverside.",
        time: "02:35",
        seconds: 155,
        note: "scenic : 경치 좋은, 전망 좋은",
        extras: []
      },
      {
        id: "d4_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "준비하고 10분 뒤에 현관에서 만나.",
        en: "I'll get ready and meet you at the door in 10 minutes.",
        time: "03:10",
        seconds: 190,
        note: "get ready : 준비하다 / in 10 minutes : 10분 후에",
        extras: []
      },
      {
        id: "d4_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "천천히 준비해. 차 시동 걸어둘게.",
        en: "Take your time. I'll warm up the car.",
        time: "03:45",
        seconds: 225,
        note: "Take your time : 천천히 해 / warm up the car : 차 시동을 걸어두다",
        extras: []
      }
    ]
  },
  {
    day: 5,
    dayFormatted: "DAY 005",
    title: "Care for some coffee? (커피 한잔할래?)",
    videoId: "GV32HKszycc",
    dialogues: [
      {
        id: "d5_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "커피 한잔하시겠어요?",
        en: "Care for some coffee?",
        time: "00:43",
        seconds: 43,
        note: "Care for ~? : ~ 드시겠어요? (Would you like ~?의 자연스러운 구어 표현)",
        extras: [
          { en: "Care for a drink?", kr: "술 한잔할래?" }
        ]
      },
      {
        id: "d5_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "고마워요. 시원한 아메리카노 한 잔 부탁해요.",
        en: "Thanks. An iced Americano would hit the spot.",
        time: "01:15",
        seconds: 75,
        note: "hit the spot : 딱 좋다, 안성맞춤이다",
        extras: []
      },
      {
        id: "d5_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "설탕이나 시럽 넣어드릴까요?",
        en: "Do you take sugar or syrup?",
        time: "01:50",
        seconds: 110,
        note: "take sugar : (커피 등에) 설탕을 넣다",
        extras: []
      },
      {
        id: "d5_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "아니요, 그냥 블랙으로 마실게요.",
        en: "No, thanks. I take it black.",
        time: "02:25",
        seconds: 145,
        note: "take it black : 블랙으로 마시다",
        extras: []
      },
      {
        id: "d5_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "디저트로 쿠키도 좀 드릴까요?",
        en: "Would you like some cookies to go with it?",
        time: "03:00",
        seconds: 180,
        note: "go with ~ : ~와 어울리다, 곁들이다",
        extras: []
      },
      {
        id: "d5_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "사양하지 않고 감사히 먹겠습니다.",
        en: "I won't say no to that. Thank you.",
        time: "03:35",
        seconds: 215,
        note: "won't say no to ~ : 마다하지 않다, 기꺼이 받다",
        extras: []
      }
    ]
  },
  {
    day: 6,
    dayFormatted: "DAY 006",
    title: "Look on the bright side (긍정적으로 생각해)",
    videoId: "7MF15xJOwBE",
    dialogues: [
      {
        id: "d6_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "면접에서 떨어진 것 같아서 너무 우울해.",
        en: "I think I blew the interview. I'm so bummed out.",
        time: "00:44",
        seconds: 44,
        note: "blow : (기회 등을) 날리다, 망치다 / bummed out : 낙담한, 속상한",
        extras: []
      },
      {
        id: "d6_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "긍정적으로 생각해. 좋은 경험이었잖아.",
        en: "Look on the bright side. It was a good experience.",
        time: "01:20",
        seconds: 80,
        note: "Look on the bright side : 긍정적인 면을 봐라, 좋게 생각해라",
        extras: []
      },
      {
        id: "d6_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "정말 열심히 준비했는데 너무 아쉬워.",
        en: "I prepared so hard, which makes it more disappointing.",
        time: "01:55",
        seconds: 115,
        note: "disappointing : 실망스러운",
        extras: []
      },
      {
        id: "d6_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "모든 일에는 다 이유가 있는 법이야.",
        en: "Everything happens for a reason.",
        time: "02:30",
        seconds: 150,
        note: "Everything happens for a reason : 모든 일엔 다 뜻/이유가 있다",
        extras: []
      },
      {
        id: "d6_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "더 좋은 기회가 찾아올까?",
        en: "Do you think a better opportunity will come along?",
        time: "03:05",
        seconds: 185,
        note: "come along : (기회 등이) 찾아오다",
        extras: []
      },
      {
        id: "d6_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "당연하지! 털어버리고 다시 힘내.",
        en: "Absolutely! Shake it off and keep your chin up.",
        time: "03:40",
        seconds: 220,
        note: "shake it off : 훌훌 털어버리다 / keep one's chin up : 기운을 내다",
        extras: []
      }
    ]
  },
  {
    day: 7,
    dayFormatted: "DAY 007",
    title: "What do you mean? (무슨 뜻이야?)",
    videoId: "xnrAa7JjqeY",
    dialogues: [
      {
        id: "d7_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "우리 이번 프로젝트 일정을 조정해야 할 것 같아.",
        en: "I think we need to push back the project schedule.",
        time: "00:43",
        seconds: 43,
        note: "push back : (일정을) 뒤로 미루다, 연기하다",
        extras: []
      },
      {
        id: "d7_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "그게 무슨 뜻이야? 마감이 코앞인데.",
        en: "What do you mean? The deadline is right around the corner.",
        time: "01:15",
        seconds: 75,
        note: "What do you mean? : 무슨 뜻이야? / right around the corner : 코앞에 닥친",
        extras: []
      },
      {
        id: "d7_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "디자인 시안에 예상치 못한 문제가 생겼어.",
        en: "We hit an unexpected snag with the design draft.",
        time: "01:50",
        seconds: 110,
        note: "hit a snag : 뜻밖의 난관/문제에 부딪히다",
        extras: []
      },
      {
        id: "d7_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "고객사 쪽에 미리 양해를 구해야겠네.",
        en: "We'll have to ask the client for their understanding in advance.",
        time: "02:30",
        seconds: 150,
        note: "in advance : 미리, 사전에",
        extras: []
      },
      {
        id: "d7_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "내가 회의록 정리해서 메일 보낼게.",
        en: "I'll summarize the meeting minutes and shoot them an email.",
        time: "03:05",
        seconds: 185,
        note: "meeting minutes : 회의록 / shoot an email : 이메일을 보내다",
        extras: []
      },
      {
        id: "d7_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "빨리 해결될 수 있도록 나도 거들게.",
        en: "I'll chip in so we can sort this out quickly.",
        time: "03:40",
        seconds: 220,
        note: "chip in : 돕다, 힘을 보태다 / sort out : 해결하다",
        extras: []
      }
    ]
  },
  {
    day: 8,
    dayFormatted: "DAY 008",
    title: "Can you give me a hand? (손 좀 빌려줄래?)",
    videoId: "1FYq1GHgSBE",
    dialogues: [
      {
        id: "d8_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이 무거운 상자 옮기는 것 좀 도와줄래?",
        en: "Can you give me a hand moving this heavy box?",
        time: "00:44",
        seconds: 44,
        note: "give somebody a hand : ~을 돕다, 손을 빌려주다",
        extras: [
          { en: "Lend me a hand.", kr: "손 좀 빌려줘." }
        ]
      },
      {
        id: "d8_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "물론이지. 어디로 옮겨놓을까?",
        en: "Sure thing. Where do you want me to put it?",
        time: "01:15",
        seconds: 75,
        note: "Sure thing : 물론이지, 기꺼이",
        extras: []
      },
      {
        id: "d8_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "거실 구석 소파 옆에 놓아줘.",
        en: "Just place it in the corner next to the couch.",
        time: "01:50",
        seconds: 110,
        note: "in the corner : 구석에 / next to ~ : ~ 옆에",
        extras: []
      },
      {
        id: "d8_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "생각보다 꽤 묵직하네. 조심해.",
        en: "It's heavier than it looks. Watch out.",
        time: "02:25",
        seconds: 145,
        note: "Watch out : 조심해",
        extras: []
      },
      {
        id: "d8_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "허리 다치지 않게 조심히 들어.",
        en: "Lift with your knees so you don't hurt your back.",
        time: "03:00",
        seconds: 180,
        note: "hurt one's back : 허리를 다치다",
        extras: []
      },
      {
        id: "d8_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "다 날랐어. 다른 심부름할 건 없어?",
        en: "All done. Is there anything else you need done?",
        time: "03:35",
        seconds: 215,
        note: "All done : 다 끝났어",
        extras: []
      }
    ]
  },
  {
    day: 9,
    dayFormatted: "DAY 009",
    title: "I'm on a diet (다이어트 중이야)",
    videoId: "H5K-DZoIEew",
    dialogues: [
      {
        id: "d9_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "피자 한 조각 더 먹을래?",
        en: "Would you like another slice of pizza?",
        time: "00:43",
        seconds: 43,
        note: "another slice of ~ : ~ 한 조각 더",
        extras: []
      },
      {
        id: "d9_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "고맙지만 사양할게. 나 다이어트 중이거든.",
        en: "I'll pass, thanks. I'm on a diet.",
        time: "01:10",
        seconds: 70,
        note: "I'll pass : 난 패스할게(사양할게) / be on a diet : 다이어트 중이다",
        extras: []
      },
      {
        id: "d9_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "오늘 하루 정도는 치팅데이로 삼아도 되잖아.",
        en: "You can make today your cheat day just for once.",
        time: "01:45",
        seconds: 105,
        note: "cheat day : 치팅데이 / just for once : 이번 딱 한 번만",
        extras: []
      },
      {
        id: "d9_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "한 번 무너지면 다시 걷잡을 수 없어.",
        en: "Once I give in, there's no turning back.",
        time: "02:20",
        seconds: 140,
        note: "give in : 굴복하다 / no turning back : 되돌릴 수 없다",
        extras: []
      },
      {
        id: "d9_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "의지가 정말 대단하다. 존경스러워.",
        en: "You have incredible willpower. I admire you.",
        time: "02:50",
        seconds: 170,
        note: "willpower : 의지력 / admire : 존경하다",
        extras: []
      },
      {
        id: "d9_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "목표 체중을 달성할 때까지 독하게 버텨야지.",
        en: "I must hang in there until I reach my target weight.",
        time: "03:15",
        seconds: 195,
        note: "hang in there : 끈기 있게 버티다 / target weight : 목표 체중",
        extras: []
      }
    ]
  },
  {
    day: 10,
    dayFormatted: "DAY 010",
    title: "Keep your word (약속 지켜라)",
    videoId: "UeMSpD6NaeI",
    dialogues: [
      {
        id: "d10_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "주말에 나랑 놀이공원 가기로 약속했잖아.",
        en: "You promised to go to the amusement park with me this weekend.",
        time: "00:44",
        seconds: 44,
        note: "promise to ~ : ~하기로 약속하다 / amusement park : 놀이공원",
        extras: []
      },
      {
        id: "d10_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "미안해. 갑자기 회사에 급한 일이 생겼어.",
        en: "I'm so sorry. Something urgent came up at work.",
        time: "01:12",
        seconds: 72,
        note: "Something urgent came up : 급한 일이 생겼다",
        extras: []
      },
      {
        id: "d10_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "매번 그런 식으로 약속을 어기면 어떡해.",
        en: "You can't just break your promise like that every time.",
        time: "01:46",
        seconds: 106,
        note: "break one's promise : 약속을 어기다",
        extras: []
      },
      {
        id: "d10_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "일부러 그러는 게 아니야. 이해 좀 해줘.",
        en: "I didn't do it on purpose. Please cut me some slack.",
        time: "02:18",
        seconds: 138,
        note: "on purpose : 고의로, 일부러 / cut somebody some slack : 사정을 봐주다",
        extras: []
      },
      {
        id: "d10_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "약속했으면 약속을 지켜야지.",
        en: "If you made a promise, you should keep your word.",
        time: "02:50",
        seconds: 170,
        note: "keep one's word : 약속을 지키다",
        extras: []
      },
      {
        id: "d10_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "다음 주말에는 무조건 시간 비워둘게. 정말 미안해.",
        en: "I'll clear my schedule next weekend without fail. I'm really sorry.",
        time: "03:15",
        seconds: 195,
        note: "clear one's schedule : 일정을 비우다 / without fail : 틀림없이, 꼭",
        extras: []
      }
    ]
  }
];