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
  },
  // --- DAY 011 ---
  {
    day: 11,
    dayFormatted: "DAY 011",
    title: "You've crossed the line (선을 넘었어)",
    videoId: "77bvD6artIM",
    dialogues: [
      {
        id: "d11_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "나 좀 힘들게 하지 마세요.",
        en: "Please don't give me a hard time.",
        time: "03:30",
        seconds: 210,
        note: "give somebody a hard time : ~를 힘들게 하다, 괴롭히다",
        extras: [
          { en: "She always gives me a hard time.", kr: "그녀는 항상 날 힘들게 해." }
        ]
      },
      {
        id: "d11_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "내가 당신에게 결혼해 달라고 하는 것도 아니잖아요.",
        en: "It's not like I asked you to marry me or what.",
        time: "04:39",
        seconds: 279,
        note: "It's not like ~ : 딱히 ~인 것도 아니다 / ask somebody to ~ : ~해달라고 요청하다",
        extras: [
          { en: "It's not like I don't like her.", kr: "그녀가 싫은 건 아니야." }
        ]
      },
      {
        id: "d11_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "가끔 커피나 점심 먹자는 것뿐인가요?",
        en: "You just occasionally want to have coffee or lunch?",
        time: "06:33",
        seconds: 393,
        note: "occasionally : 가끔, 때때로 / have coffee or lunch : 커피를 마시거나 점심을 먹다",
        extras: []
      },
      {
        id: "d11_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "우리가 다시 시작할 수 있기를 바라요.",
        en: "I hope we can get back together again.",
        time: "07:52",
        seconds: 472,
        note: "get back together : (헤어진 연인이) 다시 만나다, 재결합하다",
        extras: [
          { en: "I don't think we will be getting back together.", kr: "우리가 다시 만날 일은 없을 것 같아." },
          { en: "We are finished.", kr: "우린 끝났어." }
        ]
      },
      {
        id: "d11_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "어떻게 그렇게 오랫동안 날 속이고 바람을 피울 수가 있죠?",
        en: "How could you cheat on me for that long?",
        time: "09:20",
        seconds: 560,
        note: "cheat on somebody : ~를 두고 바람을 피우다 / for that long : 그렇게 오랫동안",
        extras: [
          { en: "I guess your wife is cheating on you.", kr: "네 아내가 바람피우는 것 같아." },
          { en: "I think he is two-timing me.", kr: "그 사람 양다리 걸치고 있는 것 같아." }
        ]
      },
      {
        id: "d11_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "솔직히 제가 좀 심했어요.",
        en: "I must admit I've crossed the line.",
        time: "10:42",
        seconds: 642,
        note: "I must admit ~ : 솔직히 인정하는데 / cross the line : 선을 넘다, 도를 지나치다",
        extras: [
          { en: "I've gone too far.", kr: "내가 너무 지나쳤어(심했어)." },
          { en: "You're out of line.", kr: "너 선 넘었어." }
        ]
      }
    ]
  },

  // --- DAY 012 ---
  {
    day: 12,
    dayFormatted: "DAY 012",
    title: "Are you sure? (정말이야?)",
    videoId: "cLcxvVNEfeY",
    dialogues: [
      {
        id: "d12_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "내 차를 시장에 내놓으려고 해.",
        en: "I'd like to put my car on the market.",
        time: "03:27",
        seconds: 207,
        note: "put something on the market : ~을 시장에 매물로 내놓다",
        extras: [
          { en: "I put my house on the market last week.", kr: "지난주에 우리 집 내놨어." }
        ]
      },
      {
        id: "d12_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "정말이야? 대체 무슨 일인데?",
        en: "Are you sure? What's the deal?",
        time: "04:42",
        seconds: 282,
        note: "Are you sure? : 정말이야? / What's the deal? : 대체 무슨 일이야? 어찌 된 일이야?",
        extras: [
          { en: "Are you serious?", kr: "진심이야?" },
          { en: "What's going on?", kr: "무슨 일 있어?" }
        ]
      },
      {
        id: "d12_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "우린 더 이상 자동차가 2대나 필요 없잖아.",
        en: "We don't need two cars anymore.",
        time: "06:02",
        seconds: 362,
        note: "not ~ anymore : 더 이상 ~가 아니다",
        extras: []
      },
      {
        id: "d12_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "당신이 차를 쓰고 있는데 내가 쇼핑 가야 하면 어떡해?",
        en: "What if you have the car and I have to go shopping?",
        time: "06:56",
        seconds: 416,
        note: "What if ~? : ~하면 어쩌지? / go shopping : 쇼핑하러 가다",
        extras: [
          { en: "What if it rains?", kr: "비가 오면 어떡하지?" }
        ]
      },
      {
        id: "d12_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "우린 쇼핑을 좀 줄여야 해.",
        en: "We need to cut back on shopping.",
        time: "08:35",
        seconds: 515,
        note: "cut back on ~ : ~을 줄이다 (=reduce)",
        extras: [
          { en: "We should cut back on spending.", kr: "우린 지출을 줄여야 해." },
          { en: "I'll cut back on smoking.", kr: "담배를 좀 줄일 거야." }
        ]
      },
      {
        id: "d12_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "자기야, 당신 잠시 진정 좀 해야 될 것 같아.",
        en: "Honey, I think you should just calm down a little bit.",
        time: "09:49",
        seconds: 589,
        note: "calm down : 진정하다, 흥분을 가라앉히다 / a little bit : 조금",
        extras: [
          { en: "Don't panic. Just calm down.", kr: "당황하지 말고 진정해." }
        ]
      }
    ]
  },

  // --- DAY 013 ---
  {
    day: 13,
    dayFormatted: "DAY 013",
    title: "Don't tell me what to do (간섭하지 마)",
    videoId: "H5K-DZoIEew",
    dialogues: [
      {
        id: "d13_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "오늘 저녁에 친구를 집에 초대하려고요.",
        en: "I'm going to have my friend over tonight.",
        time: "03:33",
        seconds: 213,
        note: "have somebody over : ~를 집으로 초대하다",
        extras: [
          { en: "I'll have you over for dinner sometime.", kr: "조만간 저녁 식사에 초대할게요." }
        ]
      },
      {
        id: "d13_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "무슨 일인데? 학교 친구니?",
        en: "What's the occasion? Is he a friend from school?",
        time: "04:46",
        seconds: 286,
        note: "What's the occasion? : 무슨 날이야? 무슨 일 있어?",
        extras: [
          { en: "You look sharp today. What's the occasion?", kr: "오늘 옷 멋지게 입었네. 무슨 날이야?" }
        ]
      },
      {
        id: "d13_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "네, 정말 좋은 친구죠. 우린 공통점이 참 많아요.",
        en: "Yes, the real good kind. We have a lot in common.",
        time: "06:13",
        seconds: 373,
        note: "have a lot in common : 공통점이 많다",
        extras: [
          { en: "We have nothing in common.", kr: "우린 공통점이 전혀 없어." }
        ]
      },
      {
        id: "d13_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "그런 일을 그렇게 갑자기 얘기하면 안 되지.",
        en: "You can't tell me something like this on such short notice.",
        time: "07:59",
        seconds: 479,
        note: "on such short notice : 그렇게 촉박하게, 갑작스럽게",
        extras: []
      },
      {
        id: "d13_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "엄마, 제발 잔소리 좀 하지 마세요.",
        en: "Mom, please don't tell me what to do.",
        time: "09:33",
        seconds: 573,
        note: "tell somebody what to do : 이래라저래라 명령/잔소리하다",
        extras: [
          { en: "Stop bossing me around.", kr: "나한테 이래라저래라 지시하지 마." },
          { en: "Stop nagging me.", kr: "잔소리 좀 그만해." }
        ]
      },
      {
        id: "d13_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "친구는 못 온다. 내 눈에 흙이 들어가기 전엔 절대 안 돼.",
        en: "He is not coming. Over my dead body!",
        time: "11:09",
        seconds: 669,
        note: "Over my dead body! : 내 눈에 흙이 들어가기 전엔 절대 안 돼!",
        extras: [
          { en: "You can't marry him, over my dead body.", kr: "그 녀석과의 결혼은 절대 안 돼." }
        ]
      }
    ]
  },

  // --- DAY 014 ---
  {
    day: 14,
    dayFormatted: "DAY 014",
    title: "I called in sick (병가 냈어)",
    videoId: "gUrnwxxJkuU",
    dialogues: [
      {
        id: "d14_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "오늘 몸이 좀 안 좋아서 병가 냈어.",
        en: "I'm not feeling well today, so I called in sick.",
        time: "03:49",
        seconds: 229,
        note: "call in sick : 전화로 병가를 내다 / not feel well : 몸 상태가 좋지 않다",
        extras: [
          { en: "take a sick leave", kr: "병가를 내다" },
          { en: "I'm feeling under the weather.", kr: "몸 상태가 찌뿌둥하고 안 좋아." }
        ]
      },
      {
        id: "d14_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "너 며칠 쉬어야 할 것 같아.",
        en: "I think you should take a few days off.",
        time: "05:16",
        seconds: 316,
        note: "take a few days off : 며칠 쉬다 / take a day off : 하루 쉬다",
        extras: [
          { en: "Can I take a few days off next week?", kr: "다음 주에 며칠 휴가 써도 되나요?" }
        ]
      },
      {
        id: "d14_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "그러고 싶어. 걱정해 줘서 고마워.",
        en: "I'd like to. Thanks for your concern.",
        time: "06:23",
        seconds: 383,
        note: "concern : 걱정, 염려 / thanks for your concern : 걱정해 줘서 고마워",
        extras: [
          { en: "I appreciate your concern.", kr: "염려해 주셔서 감사합니다." },
          { en: "Thanks for asking.", kr: "물어봐 줘서 고마워." }
        ]
      },
      {
        id: "d14_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "너 요즘 밤낮으로 일만 하는 것 같더라.",
        en: "It's like you've been working 24/7 these days.",
        time: "07:44",
        seconds: 464,
        note: "24/7 (twenty-four seven) : 하루 24시간 일주일 내내, 연중무휴로",
        extras: []
      },
      {
        id: "d14_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "야근하고 싶지 않은데 방법이 없거든.",
        en: "I don't want to work overtime, but it's the only way.",
        time: "09:11",
        seconds: 551,
        note: "work overtime : 야근하다 / the only way : 유일한 방법",
        extras: []
      },
      {
        id: "d14_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "정말이지 아무도 널 못 말려.",
        en: "I'm telling you, nobody can stop you.",
        time: "10:44",
        seconds: 644,
        note: "I'm telling you : 정말이지, 내 말 잘 들어 / nobody can stop you : 아무도 널 못 말린다",
        extras: [
          { en: "I'm telling you, I can't trust him.", kr: "정말이지 그 사람은 못 믿겠어." }
        ]
      }
    ]
  },

  // --- DAY 015 ---
  {
    day: 15,
    dayFormatted: "DAY 015",
    title: "What's up with your hair? (머리 모양이 왜 그래?)",
    videoId: "UeMSpD6NaeI",
    dialogues: [
      {
        id: "d15_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "야, 머리가 대체 왜 그래?",
        en: "Hey, what's up with your hair?",
        time: "03:42",
        seconds: 222,
        note: "What's up with ~? : ~은 대체 왜 그래? (평소와 다를 때)",
        extras: [
          { en: "What's up with your face?", kr: "얼굴은 대체 왜 그래?" }
        ]
      },
      {
        id: "d15_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "늦잠 잤어. 사무실 회식이 자정 넘어서 끝났거든.",
        en: "I overslept. My office dinner ended after midnight.",
        time: "04:46",
        seconds: 286,
        note: "oversleep : 늦잠 자다 / office dinner : 회사 회식 / after midnight : 자정 지나",
        extras: [
          { en: "staff dinner", kr: "직원 회식" }
        ]
      },
      {
        id: "d15_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "너 내일 프레젠테이션 하기로 되어 있잖아.",
        en: "You are supposed to make a presentation tomorrow.",
        time: "06:27",
        seconds: 387,
        note: "be supposed to + 동사원형 : ~하기로 되어 있다 / make a presentation : 발표하다",
        extras: [
          { en: "We are supposed to meet at the bookstore.", kr: "우린 서점에서 만나기로 되어 있어." }
        ]
      },
      {
        id: "d15_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "내 업무 좀 도와줄 수 있어?",
        en: "Can you help me with my work a little?",
        time: "07:42",
        seconds: 462,
        note: "help somebody with ~ : ~가 ~하는 것을 돕다",
        extras: [
          { en: "Can you help me with my bags?", kr: "가방 좀 들어주실래요?" }
        ]
      },
      {
        id: "d15_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "그래, 먼저 과제물부터 검토해 보자.",
        en: "Okay, let's go over your assignment first.",
        time: "08:55",
        seconds: 535,
        note: "go over : 꼼꼼히 검토하다, 살펴보다 / assignment : 과제, 배정된 업무",
        extras: []
      },
      {
        id: "d15_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "회의실부터 미리 예약해 줘.",
        en: "Please book a meeting room in advance.",
        time: "10:18",
        seconds: 618,
        note: "book / make a reservation : 예약하다 / in advance : 미리, 사전에",
        extras: [
          { en: "beforehand", kr: "사전에" }
        ]
      }
    ]
  },

  // --- DAY 016 ---
  {
    day: 16,
    dayFormatted: "DAY 016",
    title: "Sounds good (좋은 생각이야)",
    videoId: "j1tN7xGUsNU",
    dialogues: [
      {
        id: "d16_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이번 주말에 뭐 할 거야?",
        en: "What are you going to do this weekend?",
        time: "03:25",
        seconds: 205,
        note: "What are you going to do ~? : ~에 뭐 할 예정이니?",
        extras: []
      },
      {
        id: "d16_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "애들 야외에 데리고 가서 마당에서 뛰어놀게 하려고.",
        en: "I'll take my kids outside and play in the yard.",
        time: "04:22",
        seconds: 262,
        note: "take somebody outside : ~를 밖으로 데리고 나가다 / play in the yard : 마당에서 놀다",
        extras: []
      },
      {
        id: "d16_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "내일 심야 영화 한 편 볼까?",
        en: "Why don't we go catch a late-night movie tomorrow?",
        time: "05:48",
        seconds: 348,
        note: "Why don't we ~? : 우리 ~할까? / catch a late-night movie : 심야 영화를 보다",
        extras: []
      },
      {
        id: "d16_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "좋은 생각인데, 요가 수강 신청하러 가야 해.",
        en: "Sounds good, but I'm signing up for a yoga class.",
        time: "07:04",
        seconds: 424,
        note: "Sounds good : 좋은 생각이야 / sign up for ~ : ~을 신청하다, 등록하다",
        extras: [
          { en: "I'm signing up for the gym next month.", kr: "다음 달에 헬스장 등록할 거야." }
        ]
      },
      {
        id: "d16_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "일단 결정하면 끝까지 밀고 가는구나.",
        en: "Once you make a decision, you stick to it.",
        time: "08:40",
        seconds: 520,
        note: "make a decision : 결정을 내리다 / stick to ~ : ~을 고수하다, 끝까지 밀고 가다",
        extras: [
          { en: "I stick to my diet.", kr: "난 식단을 꾸준히 지켜." }
        ]
      },
      {
        id: "d16_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "시간이 흐르잖아. 지금이 아니면 기회가 없어.",
        en: "The clock is ticking. It's now or never.",
        time: "10:02",
        seconds: 602,
        note: "The clock is ticking : 시간이 째깍째깍 흐르고 있다 / It's now or never : 지금이 아니면 기회가 없다",
        extras: []
      }
    ]
  },

  // --- DAY 017 ---
  {
    day: 17,
    dayFormatted: "DAY 017",
    title: "This is ridiculous (정말 말도 안 돼)",
    videoId: "XbazdUeTqFw",
    dialogues: [
      {
        id: "d17_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "비행기 표 가격이 두 배나 뛰었어.",
        en: "The flight ticket prices have doubled.",
        time: "00:44",
        seconds: 44,
        note: "double : 두 배가 되다 / flight ticket : 비행기 표",
        extras: []
      },
      {
        id: "d17_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "말도 안 돼! 성수기라 해도 너무하잖아.",
        en: "This is ridiculous! Even for peak season, it's too much.",
        time: "01:15",
        seconds: 75,
        note: "This is ridiculous! : 정말 말도 안 돼, 터무니없어 / peak season : 성수기",
        extras: [
          { en: "That's absurd.", kr: "터무니없네." }
        ]
      },
      {
        id: "d17_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "예약을 몇 달 전부터 미리 해뒀어야 했어.",
        en: "We should have booked months in advance.",
        time: "01:50",
        seconds: 110,
        note: "should have p.p. : ~했어야 했는데 (과거에 대한 후회) / in advance : 미리",
        extras: []
      },
      {
        id: "d17_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "다른 날짜로 조회해 보는 건 어때?",
        en: "How about checking for different dates?",
        time: "02:25",
        seconds: 145,
        note: "How about -ing? : ~하는 게 어때?",
        extras: []
      },
      {
        id: "d17_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "평일 출발로 바꾸면 좀 더 저렴할지도 몰라.",
        en: "It might be cheaper if we leave on weekdays.",
        time: "03:00",
        seconds: 180,
        note: "weekdays : 평일 / on weekdays : 평일에",
        extras: []
      },
      {
        id: "d17_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "좋은 생각이야. 일정 유연하게 조정해 보자.",
        en: "Good thinking. Let's keep our schedule flexible.",
        time: "03:35",
        seconds: 215,
        note: "flexible : 유연한, 조정 가능한",
        extras: []
      }
    ]
  },

  // --- DAY 018 ---
  {
    day: 18,
    dayFormatted: "DAY 018",
    title: "I'm booked solid (일정이 꽉 찼어)",
    videoId: "0aoZRnAqDkk",
    dialogues: [
      {
        id: "d18_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "오늘 퇴근하고 저녁 같이 먹을래?",
        en: "Do you want to grab dinner together after work?",
        time: "00:43",
        seconds: 43,
        note: "grab dinner : 저녁을 간단히 먹다 / after work : 퇴근 후",
        extras: []
      },
      {
        id: "d18_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "미안하지만 오늘 일정이 꽉 찼어.",
        en: "I'd love to, but I'm booked solid today.",
        time: "01:10",
        seconds: 70,
        note: "be booked solid : 예약이나 일정이 꽉 차 있다",
        extras: [
          { en: "I'm tied up today.", kr: "오늘 꼼짝달싹 못 하게 바빠." }
        ]
      },
      {
        id: "d18_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "무슨 약속이 그렇게 줄줄이 잡혀 있어?",
        en: "What kind of plans do you have lined up?",
        time: "01:45",
        seconds: 105,
        note: "lined up : 줄줄이 늘어선, 예정된",
        extras: []
      },
      {
        id: "d18_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "거래처 미팅 끝나고 바로 팀 회식에 가야 해.",
        en: "I have a client meeting, followed by a team dinner.",
        time: "02:18",
        seconds: 138,
        note: "followed by ~ : ~에 이어서, 뒤이어",
        extras: []
      },
      {
        id: "d18_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "몸이 열 개라도 모자라겠네. 힘내!",
        en: "You have your hands full. Hang in there!",
        time: "02:50",
        seconds: 170,
        note: "have one's hands full : 몹시 바쁘다 / Hang in there : 버텨라, 힘내라",
        extras: []
      },
      {
        id: "d18_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "고마워. 다음 주에 내가 먼저 연락할게.",
        en: "Thanks. I'll reach out to you first next week.",
        time: "03:15",
        seconds: 195,
        note: "reach out to ~ : ~에게 연락을 취하다",
        extras: []
      }
    ]
  },

  // --- DAY 019 ---
  {
    day: 19,
    dayFormatted: "DAY 019",
    title: "Time to call it a day (오늘은 이만 끝낼 시간이야)",
    videoId: "V8kMAAQDHpQ",
    dialogues: [
      {
        id: "d19_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "벌써 밤 9시가 넘었네. 슬슬 퇴근하자.",
        en: "It's already past 9 PM. Let's call it a day.",
        time: "00:44",
        seconds: 44,
        note: "call it a day : 오늘 하루 일을 끝내다, 마감하다",
        extras: [
          { en: "Let's call it a night.", kr: "오늘 밤 모임은 이만 끝내자." }
        ]
      },
      {
        id: "d19_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "동감이야. 내일 마저 이어서 해도 되잖아.",
        en: "I second that. We can pick up where we left off tomorrow.",
        time: "01:12",
        seconds: 72,
        note: "I second that : 나도 동의해, 찬성 / pick up where one left off : 중단했던 지점부터 다시 시작하다",
        extras: []
      },
      {
        id: "d19_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "너무 지쳐서 집중력이 바닥났어.",
        en: "I'm so exhausted my focus is completely shot.",
        time: "01:46",
        seconds: 106,
        note: "shot : (기능 등이) 다 떨어진, 바닥난",
        extras: []
      },
      {
        id: "d19_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "컴퓨터 끄고 짐 챙겨. 같이 나가자.",
        en: "Shut down your computer and pack your bags. Let's head out.",
        time: "02:20",
        seconds: 140,
        note: "shut down : 전원을 끄다 / head out : 출발하다, 나가다",
        extras: []
      },
      {
        id: "d19_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "오늘 야근하느라 정말 고생 많았어.",
        en: "You worked so hard working late today.",
        time: "02:52",
        seconds: 172,
        note: "work late : 늦게까지 일하다(야근하다)",
        extras: []
      },
      {
        id: "d19_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "너도 수고했어. 조심히 들어가고 내일 봐.",
        en: "You too. Get home safe and see you tomorrow.",
        time: "03:17",
        seconds: 197,
        note: "Get home safe : 조심히 귀가해",
        extras: []
      }
    ]
  },

  // --- DAY 020 ---
  {
    day: 20,
    dayFormatted: "DAY 020",
    title: "I will pay more attention (더 주의를 기울일게요)",
    videoId: "sbbfxQZgafc",
    dialogues: [
      {
        id: "d20_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "같은 실수를 자꾸 반복하면 어떡하니.",
        en: "You shouldn't keep repeating the same mistake.",
        time: "00:43",
        seconds: 43,
        note: "repeat the same mistake : 같은 실수를 반복하다",
        extras: []
      },
      {
        id: "d20_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "죄송합니다. 앞으로 더 주의를 기울일게요.",
        en: "I'm sorry. I will pay more attention from now on.",
        time: "01:10",
        seconds: 70,
        note: "pay attention : 주의를 기울이다, 집중하다 / from now on : 앞으로는, 이제부터",
        extras: []
      },
      {
        id: "d20_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "서류를 제출하기 전에 두 번 세 번 검토해 봐.",
        en: "Double-check documents before submitting them.",
        time: "01:45",
        seconds: 105,
        note: "double-check : 재확인하다 / submit : 제출하다",
        extras: []
      },
      {
        id: "d20_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "명심하겠습니다. 실수를 만회하도록 노력할게요.",
        en: "I'll keep that in mind and make up for it.",
        time: "02:18",
        seconds: 138,
        note: "keep ~ in mind : 명심하다 / make up for ~ : ~을 만회하다, 보상하다",
        extras: []
      },
      {
        id: "d20_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "실수를 통해 배우는 것도 중요한 성장의 과정이야.",
        en: "Learning from mistakes is an important part of growth.",
        time: "02:50",
        seconds: 170,
        note: "growth : 성장 / learn from mistakes : 실수를 통해 배우다",
        extras: []
      },
      {
        id: "d20_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "조언 감사합니다. 다음엔 실망시켜 드리지 않을게요.",
        en: "Thanks for the feedback. I won't let you down next time.",
        time: "03:15",
        seconds: 195,
        note: "let somebody down : ~를 실망시키다",
        extras: []
      }
    ]
  },
  // --- DAY 021 ---
  {
    day: 21,
    dayFormatted: "DAY 021",
    title: "I'm in a sticky situation (난처한 상황에 처했어)",
    videoId: "C-MMEBKvs6A",
    dialogues: [
      {
        id: "d21_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "혹시 범죄를 저지른 적 있어요?",
        en: "Have you ever committed any crimes?",
        time: "00:44",
        seconds: 44,
        note: "commit a crime : 범죄를 저지르다 / Have you ever p.p.? : ~해 본 적 있나요?",
        extras: [
          { en: "commit an error", kr: "실수를 범하다" }
        ]
      },
      {
        id: "d21_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "물론 없죠! 법을 어겨본 적이 없어요.",
        en: "Absolutely not! I've never broken the law.",
        time: "01:15",
        seconds: 75,
        note: "break the law : 법을 어기다 / Absolutely not! : 전혀(절대로) 아닙니다",
        extras: [
          { en: "obey the law", kr: "법을 준수하다" }
        ]
      },
      {
        id: "d21_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "누가 당신을 협박하면 어떻게 하실래요?",
        en: "What if someone blackmails you into something?",
        time: "01:50",
        seconds: 110,
        note: "blackmail somebody into ~ : 협박해서 ~하게 만들다 / What if ~? : ~하면 어쩌죠?",
        extras: []
      },
      {
        id: "d21_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "그럴 경우엔 경찰에 신고해야 하죠.",
        en: "In that case, I'll report it to the police.",
        time: "02:25",
        seconds: 145,
        note: "In that case : 그런 경우라면 / report to the police : 경찰에 신고하다",
        extras: []
      },
      {
        id: "d21_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "사실 제가 곤란한 상황에 처했어요.",
        en: "Actually, I'm in a real sticky situation.",
        time: "03:00",
        seconds: 180,
        note: "in a sticky situation : 난처한(곤란한) 상황에 처한",
        extras: [
          { en: "I'm in hot water.", kr: "나 곤란한 처지에 빠졌어." }
        ]
      },
      {
        id: "d21_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "걱정 마세요. 제가 지켜봐 줄게요.",
        en: "Not to worry. I'll keep an eye on you.",
        time: "03:35",
        seconds: 215,
        note: "keep an eye on ~ : ~을 지켜보다, 감시하다/보살피다 / Not to worry : 걱정 마세요",
        extras: [
          { en: "Keep an eye on my bag.", kr: "내 가방 좀 지켜봐 줘." }
        ]
      }
    ]
  },

  // --- DAY 022 ---
  {
    day: 22,
    dayFormatted: "DAY 022",
    title: "Let's go for a drive (드라이브하러 가자)",
    videoId: "wRaTwkf98tI",
    dialogues: [
      {
        id: "d22_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "영화 끝나고 드라이브하러 가자.",
        en: "Let's go for a drive after the movie.",
        time: "03:49",
        seconds: 229,
        note: "go for a drive : 드라이브하러 가다 (=take a drive)",
        extras: [
          { en: "Let's go for a walk.", kr: "산책하러 가자." }
        ]
      },
      {
        id: "d22_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "좋아. 지금 무슨 영화가 상영 중인데?",
        en: "Sure. What movies are playing now?",
        time: "04:59",
        seconds: 299,
        note: "play : (영화·연극이) 상영 중이다",
        extras: []
      },
      {
        id: "d22_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "혹시 인터뷰라는 영화 봤어?",
        en: "Have you seen 'The Interview' by any chance?",
        time: "06:10",
        seconds: 370,
        note: "by any chance : 혹시라도, 혹시",
        extras: []
      },
      {
        id: "d22_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "재미있을 줄 알았는데 광고에 속았어.",
        en: "I thought it would be good, but was taken in by the ad.",
        time: "07:26",
        seconds: 446,
        note: "be taken in by ~ : ~에 속아 넘어가다 / ad : 광고",
        extras: [
          { en: "Don't be taken in by his smooth talk.", kr: "그의 감언이설에 속지 마." }
        ]
      },
      {
        id: "d22_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "영화 줄거리 미리 말하지 마.",
        en: "You are not allowed to tell me the story.",
        time: "09:07",
        seconds: 547,
        note: "be not allowed to ~ : ~해서는 안 된다 (금지 표현)",
        extras: [
          { en: "You are not allowed to smoke here.", kr: "여기서 흡연하시면 안 됩니다." }
        ]
      },
      {
        id: "d22_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "알았어. 서둘러, 안 그러면 늦겠어.",
        en: "Got it. Hurry up, or we'll be late.",
        time: "10:31",
        seconds: 631,
        note: "Hurry up, or ~ : 서둘러, 그렇지 않으면 ~할 것이다",
        extras: [
          { en: "Hurry up, or you'll miss the flight.", kr: "서둘러, 안 그러면 비행기 놓쳐." }
        ]
      }
    ]
  },

  // --- DAY 023 ---
  {
    day: 23,
    dayFormatted: "DAY 023",
    title: "How can I get over her? (그녀를 어떻게 잊지?)",
    videoId: "4W5Isdaixrw",
    dialogues: [
      {
        id: "d23_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "그녀가 돌아오고 싶어 하는지 알고 싶어.",
        en: "I want to see if she wants to come back.",
        time: "00:16",
        seconds: 16,
        note: "see if ~ : ~인지 확인해 보다, 알아보다 / come back : 돌아오다",
        extras: []
      },
      {
        id: "d23_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "헤어진 후엔 각자 길을 가는 게 좋아.",
        en: "After a breakup, it's best to go your separate ways.",
        time: "00:46",
        seconds: 46,
        note: "breakup : 이별, 결별 / go one's separate ways : 각자의 길을 가다",
        extras: []
      },
      {
        id: "d23_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "걔가 나한테 사준 물건들을 돌려줘야 하나?",
        en: "Should I give back the things she got me?",
        time: "01:17",
        seconds: 77,
        note: "give back : 돌려주다 / get somebody something : ~에게 사주다",
        extras: []
      },
      {
        id: "d23_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "그냥 버려. 보관하는 게 무슨 소용이 있어?",
        en: "Just throw them away. What's the point of keeping them?",
        time: "01:45",
        seconds: 105,
        note: "throw away : 버리다 / What's the point of -ing? : ~하는 게 무슨 소용이야?",
        extras: []
      },
      {
        id: "d23_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "그녀를 어떻게 잊을 수 있을지 모르겠어.",
        en: "I have no idea how I can get over her.",
        time: "02:09",
        seconds: 129,
        note: "have no idea : 전혀 모르겠다 / get over somebody : ~를 잊다, 극복하다",
        extras: [
          { en: "I can't get over this cold.", kr: "이 감기가 통 낫질 않네." }
        ]
      },
      {
        id: "d23_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "우리 반에 있는 멋진 여자를 소개시켜 줄게.",
        en: "I'll set you up with a nice girl from my class.",
        time: "02:36",
        seconds: 156,
        note: "set somebody up with ~ : ~에게 소개팅을 주선해 주다",
        extras: []
      }
    ]
  },

  // --- DAY 024 ---
  {
    day: 24,
    dayFormatted: "DAY 024",
    title: "Here we go again (또 시작이야)",
    videoId: "4W5Isdaixrw",
    dialogues: [
      {
        id: "d24_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이게 정말 당신이 원하는 거예요?",
        en: "Are you sure this is what you want to do?",
        time: "03:51",
        seconds: 231,
        note: "this is what you want : 이것이 당신이 원하는 것",
        extras: []
      },
      {
        id: "d24_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "이해가 안 돼요? 난 분명히 말했다고요.",
        en: "Don't you get it? I have made it clear.",
        time: "05:04",
        seconds: 304,
        note: "Don't you get it? : 이해가 안 가? / make something clear : ~을 분명히 밝히다",
        extras: []
      },
      {
        id: "d24_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이런 말 하기 싫지만 당신이 완전히 틀렸어요.",
        en: "I hate to say this, but you're dead wrong.",
        time: "06:22",
        seconds: 382,
        note: "I hate to say this, but ~ : 이런 말 하긴 싫지만 / dead wrong : 완전히 틀린",
        extras: [
          { en: "I hate to say this, but I have to go.", kr: "이런 말 하기 싫지만 나 지금 가봐야 해." }
        ]
      },
      {
        id: "d24_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "날 믿지 못할 거라면 절 빼주세요.",
        en: "If you don't trust me, count me out.",
        time: "08:03",
        seconds: 483,
        note: "count somebody out : ~을 제외하다, 빼다 (↔ count somebody in: 끼워주다)",
        extras: [
          { en: "Please count me in.", kr: "나도 좀 끼워줘." }
        ]
      },
      {
        id: "d24_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "아이고, 또 시작이군요.",
        en: "Oh, no. Here we go again.",
        time: "09:22",
        seconds: 562,
        note: "Here we go again : 또 시작이네 (반복되는 성가신 일에 대한 한탄)",
        extras: [
          { en: "There you go again.", kr: "너 또 그러는구나." }
        ]
      },
      {
        id: "d24_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "제가 원하는 건 뭐든 조치를 취하는 거예요.",
        en: "What I want you to do is take some action.",
        time: "10:36",
        seconds: 636,
        note: "take action : 조치를 취하다, 행동으로 옮기다",
        extras: [
          { en: "It's time to take action.", kr: "행동으로 옮길 때야." }
        ]
      }
    ]
  },

  // --- DAY 025 ---
  {
    day: 25,
    dayFormatted: "DAY 025",
    title: "I have a lot on my mind (머리가 복잡해)",
    videoId: "RC5J_QDikkA",
    dialogues: [
      {
        id: "d25_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "너 오늘 멍하니 딴생각하는 것 같아.",
        en: "You seem spaced out today.",
        time: "00:44",
        seconds: 44,
        note: "spaced out : 멍때리는, 넋이 나간",
        extras: []
      },
      {
        id: "d25_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "요즘 머릿속이 너무 복잡해서 그래.",
        en: "I just have a lot on my mind these days.",
        time: "01:15",
        seconds: 75,
        note: "have a lot on one's mind : 걱정거리나 생각할 게 많다",
        extras: []
      },
      {
        id: "d25_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "무슨 고민인지 나한테 털어놔 봐.",
        en: "Tell me what's bothering you. Get it off your chest.",
        time: "01:50",
        seconds: 110,
        note: "get it off one's chest : 마음속에 담아둔 것을 속 시원히 털어놓다",
        extras: []
      },
      {
        id: "d25_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "이직을 해야 할지 말아야 할지 갈피를 못 잡겠어.",
        en: "I'm torn between changing jobs or staying.",
        time: "02:25",
        seconds: 145,
        note: "be torn between A or B : A와 B 사이에서 갈등하다",
        extras: []
      },
      {
        id: "d25_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "장단점을 꼼꼼히 따져보고 결정해.",
        en: "Weigh the pros and cons carefully before deciding.",
        time: "03:00",
        seconds: 180,
        note: "weigh the pros and cons : 장단점을 신중히 따져보다",
        extras: []
      },
      {
        id: "d25_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "조언 고마워. 마음을 좀 정리해 볼게.",
        en: "Thanks for the advice. I'll sort out my thoughts.",
        time: "03:35",
        seconds: 215,
        note: "sort out one's thoughts : 생각을 정리하다",
        extras: []
      }
    ]
  },

  // --- DAY 026 ---
  {
    day: 26,
    dayFormatted: "DAY 026",
    title: "Now you're talking (이제야 말이 통하네)",
    videoId: "-JTlN2A2bi4",
    dialogues: [
      {
        id: "d26_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "오늘 저녁에 삼겹살에 소주 한잔할래?",
        en: "How about pork belly and soju for dinner tonight?",
        time: "00:43",
        seconds: 43,
        note: "pork belly : 삼겹살 / How about ~? : ~는 어때?",
        extras: []
      },
      {
        id: "d26_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "이제야 말이 좀 통하네! 내가 바라던 바야.",
        en: "Now you're talking! That's what I'm talking about.",
        time: "01:10",
        seconds: 70,
        note: "Now you're talking : 이제야 말이 통하는군, 바로 그거야!",
        extras: []
      },
      {
        id: "d26_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "회사 근처에 진짜 맛있는 고깃집 알아.",
        en: "I know a killer barbecue place near the office.",
        time: "01:45",
        seconds: 105,
        note: "killer : 끝내주는, 대단한",
        extras: []
      },
      {
        id: "d26_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "거기 줄 서서 먹는 유명한 맛집 아니야?",
        en: "Isn't that a famous hotspot with long lines?",
        time: "02:18",
        seconds: 138,
        note: "hotspot : 명소, 핫플레이스 / long lines : 긴 대기 줄",
        extras: []
      },
      {
        id: "d26_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "퇴근하자마자 뛰어가서 자리부터 맡아야겠어.",
        en: "We should sprint there right after work to secure a table.",
        time: "02:50",
        seconds: 170,
        note: "secure a table : 자리를 확보하다",
        extras: []
      },
      {
        id: "d26_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "기대된다! 칼퇴근 준비 완벽히 해둘게.",
        en: "Can't wait! I'll be all set to leave on the dot.",
        time: "03:15",
        seconds: 195,
        note: "on the dot : 정각에, 칼퇴근으로",
        extras: []
      }
    ]
  },

  // --- DAY 027 ---
  {
    day: 27,
    dayFormatted: "DAY 027",
    title: "You're all dressed up (완전 쫙 빼입었네)",
    videoId: "YqCoEj46sy0",
    dialogues: [
      {
        id: "d27_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "오늘 완전 쫙 빼입었네! 어디 특별한 데 가?",
        en: "You're all dressed up today! Going somewhere special?",
        time: "00:44",
        seconds: 44,
        note: "be all dressed up : 멋지게 차려입다, 쫙 빼입다",
        extras: [
          { en: "dressed to kill", kr: "기막히게 멋지게 차려입은" }
        ]
      },
      {
        id: "d27_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "오늘 저녁에 소개팅이 잡혀 있거든.",
        en: "I have a blind date lined up tonight.",
        time: "01:12",
        seconds: 72,
        note: "blind date : 소개팅 / lined up : 예정된",
        extras: []
      },
      {
        id: "d27_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "누가 소개해 줬는데? 어떤 분이야?",
        en: "Who set you up? What is she like?",
        time: "01:46",
        seconds: 106,
        note: "set somebody up : 소개팅을 주선하다 / What is she like? : 그녀는 어떤 사람이야?",
        extras: []
      },
      {
        id: "d27_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "대학 선배가 소개해 준 분인데 성격이 참 좋대.",
        en: "A college senior set me up, and he said she has a great personality.",
        time: "02:20",
        seconds: 140,
        note: "senior : 선배 / personality : 성격",
        extras: []
      },
      {
        id: "d27_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "첫인상이 중요하니까 매너 있게 잘 행동해.",
        en: "First impressions matter, so mind your manners.",
        time: "02:52",
        seconds: 172,
        note: "mind one's manners : 예의를 차리다 / matter : 중요하다",
        extras: []
      },
      {
        id: "d27_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "긴장되지만 최선을 다해 좋은 인상을 남길게.",
        en: "I'm nervous, but I'll do my best to leave a good impression.",
        time: "03:17",
        seconds: 197,
        note: "leave a good impression : 좋은 인상을 남기다",
        extras: []
      }
    ]
  },

  // --- DAY 028 ---
  {
    day: 28,
    dayFormatted: "DAY 028",
    title: "Suit yourself (마음대로 해)",
    videoId: "kwzeB6rsfBk",
    dialogues: [
      {
        id: "d28_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "주말에 캠핑 가자니까 왜 안 간다는 거야?",
        en: "Why won't you come camping with us this weekend?",
        time: "00:43",
        seconds: 43,
        note: "go camping : 캠핑하러 가다",
        extras: []
      },
      {
        id: "d28_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "난 야외에서 텐트 치고 자는 거 질색이야.",
        en: "I'm not a fan of sleeping outdoors in a tent.",
        time: "01:10",
        seconds: 70,
        note: "not a fan of ~ : ~을 별로 안 좋아하다, 질색이다",
        extras: []
      },
      {
        id: "d28_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "바비큐도 구워 먹고 불멍도 때리면 재미있잖아.",
        en: "It's so fun grilling barbecue and sitting around a campfire.",
        time: "01:45",
        seconds: 105,
        note: "campfire : 모닥불 (불멍)",
        extras: []
      },
      {
        id: "d28_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "난 그냥 집에서 뒹굴거리며 쉴래.",
        en: "I'd rather just lounge around at home and rest.",
        time: "02:18",
        seconds: 138,
        note: "would rather ~ : 차라리 ~하겠다 / lounge around : 빈둥거리다",
        extras: []
      },
      {
        id: "d28_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "그래, 네 마음대로 해. 나 혼자 갈게.",
        en: "Fine, suit yourself. I'll go by myself.",
        time: "02:50",
        seconds: 170,
        note: "suit yourself : 네 마음대로 해라, 좋을 대로 해라 (약간 삐쳤을 때)",
        extras: []
      },
      {
        id: "d28_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "섭섭해하지 마. 대신 다음 주엔 맛있는 거 먹으러 가자.",
        en: "Don't be upset. We'll go somewhere nice next week instead.",
        time: "03:15",
        seconds: 195,
        note: "upset : 속상한, 삐친 / instead : 대신에",
        extras: []
      }
    ]
  },

  // --- DAY 029 ---
  {
    day: 29,
    dayFormatted: "DAY 029",
    title: "Let's get wasted (오늘 끝까지 달려보자)",
    videoId: "Y-rVtbJoRBY",
    dialogues: [
      {
        id: "d29_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "드디어 금요일 밤이다! 오늘 끝까지 달려보자.",
        en: "It's finally Friday night! Let's get wasted.",
        time: "00:44",
        seconds: 44,
        note: "get wasted : 곤드레만드레 취하다, 끝까지 달리다 (속어)",
        extras: [
          { en: "paint the town red", kr: "나가서 신나게 놀다" }
        ]
      },
      {
        id: "d29_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "내일 주말이니까 늦잠 자도 되잖아.",
        en: "Tomorrow is the weekend, so we can sleep in.",
        time: "01:12",
        seconds: 72,
        note: "sleep in : 늦잠을 푹 자다",
        extras: []
      },
      {
        id: "d29_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "1차로 치킨에 맥주 먹고 2차는 어디로 갈까?",
        en: "We'll do beer and chicken for round one, but where for round two?",
        time: "01:46",
        seconds: 106,
        note: "round one / round two : 1차 / 2차",
        extras: []
      },
      {
        id: "d29_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "분위기 좋은 칵테일 바 가서 칵테일 마시자.",
        en: "Let's hit a cozy cocktail bar for some drinks.",
        time: "02:20",
        seconds: 140,
        note: "cozy : 아늑한, 분위기 있는",
        extras: []
      },
      {
        id: "d29_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "지난주 스트레스 받은 거 오늘 싹 날려버리자.",
        en: "Let's blow off all the steam from this week.",
        time: "02:52",
        seconds: 172,
        note: "blow off steam : 스트레스를 풀다, 울분을 터뜨리다",
        extras: []
      },
      {
        id: "d29_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "좋아! 오늘 밤은 시간 가는 줄 모르고 놀아보자.",
        en: "Sounds like a plan! Let's party like there's no tomorrow.",
        time: "03:17",
        seconds: 197,
        note: "party like there's no tomorrow : 내일이 없는 것처럼 신나게 놀다",
        extras: []
      }
    ]
  },

  // --- DAY 030 ---
  {
    day: 30,
    dayFormatted: "DAY 030",
    title: "I'll fill you in (자세히 알려줄게)",
    videoId: "RC5J_QDikkA",
    dialogues: [
      {
        id: "d30_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "나 어제 회의에 참석 못 했는데 무슨 일 있었어?",
        en: "I missed the meeting yesterday. What happened?",
        time: "00:43",
        seconds: 43,
        note: "miss the meeting : 회의를 놓치다, 참석 못 하다",
        extras: []
      },
      {
        id: "d30_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "중요한 프로젝트 방향이 많이 바뀌었어.",
        en: "A lot of major changes were made to the project direction.",
        time: "01:10",
        seconds: 70,
        note: "project direction : 프로젝트 방향",
        extras: []
      },
      {
        id: "d30_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "커피 한잔하면서 자세한 내용 좀 알려줄래?",
        en: "Can you fill me in on the details over coffee?",
        time: "01:45",
        seconds: 105,
        note: "fill somebody in on ~ : ~에 대해 자세히 알려주다 / over coffee : 커피를 마시며",
        extras: [
          { en: "Keep me posted.", kr: "계속 소식 전해줘." }
        ]
      },
      {
        id: "d30_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "물론이지. 내가 필기해 둔 회의록도 공유해 줄게.",
        en: "Sure thing. I'll also share the notes I jotted down.",
        time: "02:18",
        seconds: 138,
        note: "jot down : 간략히 적다, 메모하다",
        extras: []
      },
      {
        id: "d30_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "정말 고마워. 너 아니었으면 큰일 날 뻔했어.",
        en: "Thanks a ton. I'd be completely lost without you.",
        time: "02:50",
        seconds: 170,
        note: "Thanks a ton : 너무 고마워 / be lost : 갈피를 못 잡다, 막막하다",
        extras: []
      },
      {
        id: "d30_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "동료끼리 돕는 게 당연하지. 점심 먹고 카페에서 보자.",
        en: "That's what colleagues are for. See you at the café after lunch.",
        time: "03:15",
        seconds: 195,
        note: "That's what colleagues are for : 동료 좋다는 게 그런 거지",
        extras: []
      }
    ]
  },
  // --- DAY 031 ---
  {
    day: 31,
    dayFormatted: "DAY 031",
    title: "What's wrong with it? (뭐 어때서요?)",
    videoId: "_3X-KzsdtVM",
    dialogues: [
      {
        id: "d31_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "너 치마 길이가 너무 짧아.",
        en: "Your skirt is way too short.",
        time: "03:19",
        seconds: 199,
        note: "way too + 형용사 : 너무나 ~하다 (강조 표현)",
        extras: [
          { en: "It's way too expensive.", kr: "물건값이 너무 비싸요." }
        ]
      },
      {
        id: "d31_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "그게 뭐 어쨌다는 거예요?",
        en: "What's wrong with it?",
        time: "04:24",
        seconds: 264,
        note: "What's wrong with it? : 그게 어때서요? / 무슨 문제라도 있나요?",
        extras: [
          { en: "What's wrong with me today?", kr: "나 오늘 왜 이러지?" }
        ]
      },
      {
        id: "d31_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "너 그 옷 입고 파티에 못 갈 거야.",
        en: "You're not wearing that to the party.",
        time: "05:24",
        seconds: 324,
        note: "wear something to the party : 옷을 입고 파티에 가다 (진행형으로 가까운 미래 금지)",
        extras: []
      },
      {
        id: "d31_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "엄마, 패션 감각이 너무 없으세요.",
        en: "Mom, you don't have an eye for fashion.",
        time: "06:29",
        seconds: 389,
        note: "have an eye for ~ : ~을 보는 눈(안목)이 있다",
        extras: [
          { en: "You have an eye for pictures.", kr: "당신은 그림을 보는 안목이 있군요." }
        ]
      },
      {
        id: "d31_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "못 말리겠네. 넌 아무거나 입어도 잘 어울려.",
        en: "You're impossible. You look good in everything.",
        time: "07:50",
        seconds: 470,
        note: "You're impossible : 넌 구제불능이야, 못 말리겠다 / look good in ~ : ~이 잘 어울리다",
        extras: [
          { en: "You look good in casual clothes.", kr: "넌 캐주얼 복장이 잘 어울려." },
          { en: "You look good in blue.", kr: "너 파란색이 잘 어울린다." }
        ]
      },
      {
        id: "d31_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "그만하세요. 내 편은 전혀 안 들어 주시잖아요.",
        en: "Please stop. You never take my side at all.",
        time: "09:36",
        seconds: 576,
        note: "take one's side : ~의 편을 들다 / not ~ at all : 전혀 ~아니다",
        extras: [
          { en: "Nobody took my side.", kr: "아무도 내 편을 안 들어줬어." },
          { en: "Please take my side.", kr: "내 편 좀 들어줘요." }
        ]
      }
    ]
  },

  // --- DAY 032 ---
  {
    day: 32,
    dayFormatted: "DAY 032",
    title: "I stayed up all night (밤을 꼬박 새웠어)",
    videoId: "v3vLgY0EK68",
    dialogues: [
      {
        id: "d32_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "기말고사 때문에 벼락치기 하느라 밤샜어.",
        en: "I had to stay up all night cramming for the finals.",
        time: "03:27",
        seconds: 207,
        note: "stay up all night : 밤을 꼬박 새우다 / cram for ~ : ~을 벼락치기 공부하다",
        extras: [
          { en: "I stayed up all night for my sick child.", kr: "아픈 아이 때문에 밤을 꼬박 새웠어." }
        ]
      },
      {
        id: "d32_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "이제 파티할 때야. 마음껏 즐기자고!",
        en: "Now it's party time. Live it up!",
        time: "05:09",
        seconds: 309,
        note: "It's party time : 놀 시간이다 / Live it up : 마음껏 신나게 즐기다",
        extras: [
          { en: "Tonight, let's live it up.", kr: "오늘 밤은 마음껏 즐기자." }
        ]
      },
      {
        id: "d32_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "다른 사람을 초대해도 괜찮을까?",
        en: "Is it okay if I invite someone to the party?",
        time: "06:33",
        seconds: 393,
        note: "Is it okay if ~? : ~해도 괜찮을까요? / invite someone to ~ : ~에 초대하다",
        extras: []
      },
      {
        id: "d32_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "헨리만 아니면 돼. 분위기 깨는 녀석이거든.",
        en: "As long as it's not Henry. He's such a party pooper.",
        time: "07:57",
        seconds: 477,
        note: "as long as ~ : ~하기만 한다면 / party pooper : 분위기를 망치는 사람, 불청객",
        extras: [
          { en: "wet blanket", kr: "분위기를 깨는 사람 (젖은 담요)" }
        ]
      },
      {
        id: "d32_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "좋아, 그럼 걔한테는 비밀로 하는 게 낫겠다.",
        en: "We might as well keep it a secret from him.",
        time: "09:46",
        seconds: 586,
        note: "might as well ~ : 차라리 ~하는 편이 낫다 / keep it a secret : 비밀로 하다",
        extras: [
          { en: "Promise to keep it a secret.", kr: "비밀 지키겠다고 약속해." },
          { en: "Keep it to yourself.", kr: "너만 알고 있어 (비밀로 해)." }
        ]
      },
      {
        id: "d32_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "자, 어서 서둘러야지.",
        en: "Come on, let's get a move on.",
        time: "11:30",
        seconds: 690,
        note: "get a move on : 서두르다 (=hurry up)",
        extras: [
          { en: "We're running out of time. Let's get a move on.", kr: "시간이 없어. 서두르자." }
        ]
      }
    ]
  },

  // --- DAY 033 ---
  {
    day: 33,
    dayFormatted: "DAY 033",
    title: "Watch your language (말 조심해)",
    videoId: "VzxTNWT6XQE",
    dialogues: [
      {
        id: "d33_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "왜 그녀를 속상하게 했어?",
        en: "Why did you hurt her feelings?",
        time: "03:42",
        seconds: 222,
        note: "hurt one's feelings : ~의 기분을 상하게 하다, 상처를 주다",
        extras: []
      },
      {
        id: "d33_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "일부러 그런 건 아니야.",
        en: "I didn't mean to.",
        time: "04:38",
        seconds: 278,
        note: "I didn't mean to : 일부러 그런 건 아니야 (의도치 않았을 때)",
        extras: [
          { en: "I didn't mean to offend you.", kr: "기분 상하게 하려던 건 아니었어." },
          { en: "I didn't mean to stand you up.", kr: "일부러 바람맞히려는 생각은 아니었어." }
        ]
      },
      {
        id: "d33_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "말 조심하고 다시는 욕하지 마.",
        en: "Watch your language and don't swear ever again.",
        time: "05:40",
        seconds: 340,
        note: "watch one's language : 말조심하다 / swear : 욕하다, 맹세하다",
        extras: [
          { en: "Watch your mouth. / Watch your tongue.", kr: "입조심해. 말조심해." }
        ]
      },
      {
        id: "d33_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "미안해. 명심할게.",
        en: "I'm sorry. I'll keep that in mind.",
        time: "07:14",
        seconds: 434,
        note: "keep ~ in mind : ~을 명심하다, 가슴에 담아두다",
        extras: []
      },
      {
        id: "d33_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "같은 얘기를 몇 번이나 해야겠어?",
        en: "How many times do I have to tell you the same thing?",
        time: "08:29",
        seconds: 509,
        note: "How many times do I have to ~? : 대체 몇 번이나 ~해야 하니?",
        extras: [
          { en: "How many times do I have to transfer?", kr: "몇 번 갈아타야 하나요?" }
        ]
      },
      {
        id: "d33_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "할 말이 없다.",
        en: "I don't know what to say.",
        time: "09:46",
        seconds: 586,
        note: "I don't know what to say : (미안하거나 면목이 없어) 무슨 말을 해야 할지 모르겠어",
        extras: []
      }
    ]
  },

  // --- DAY 034 ---
  {
    day: 34,
    dayFormatted: "DAY 034",
    title: "Don't even think about it (꿈도 꾸지 마)",
    videoId: "jjmkPgtzgOo",
    dialogues: [
      {
        id: "d34_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "너 그녀에게 끌리는 거야?",
        en: "Are you attracted to her?",
        time: "03:13",
        seconds: 193,
        note: "be attracted to ~ : ~에게 매력을 느끼다, 끌리다",
        extras: [
          { en: "I was attracted to her inner beauty.", kr: "그녀의 내면적인 아름다움에 끌렸어." }
        ]
      },
      {
        id: "d34_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "좀 창피하긴 한데, 그녀에게 푹 빠졌어.",
        en: "This is embarrassing, but I'm really into her.",
        time: "04:22",
        seconds: 262,
        note: "embarrassing : 쑥스러운, 창피한 / be into somebody : ~에게 푹 빠져있다",
        extras: []
      },
      {
        id: "d34_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "꿈도 꾸지 마. 너한테는 과분한 여자야.",
        en: "Don't even think about it. She's out of your league.",
        time: "06:00",
        seconds: 360,
        note: "Don't even think about it : 꿈도 꾸지 마 / out of one's league : 수준 차이가 나는, 과분한",
        extras: [
          { en: "In your dreams! / Dream on!", kr: "꿈 깨! 꿈속에서나 가능하지." },
          { en: "Get real.", kr: "정신 차려. 현실을 직시해." }
        ]
      },
      {
        id: "d34_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "그녀가 사귀는 사람이 있는 거야?",
        en: "Is she seeing someone?",
        time: "07:46",
        seconds: 466,
        note: "see someone : 누군가와 교제하다, 사귀다",
        extras: []
      },
      {
        id: "d34_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "안됐지만 그녀는 벌써 임자가 있어.",
        en: "I'm sorry to say that she's already taken.",
        time: "08:50",
        seconds: 530,
        note: "already taken : 이미 임자가 있는, 자리가 찬",
        extras: []
      },
      {
        id: "d34_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "데이트 신청이나 해볼 거야. 손해 볼 건 없잖아.",
        en: "I'm just going to ask her out. It won't hurt to try.",
        time: "10:11",
        seconds: 611,
        note: "ask somebody out : 데이트 신청을 하다 / It won't hurt to try : 시도해 봐서 밑질 건 없다",
        extras: [
          { en: "She turned me down.", kr: "그녀가 날 거절했어." },
          { en: "There is nothing to lose.", kr: "잃을 건 없잖아." }
        ]
      }
    ]
  },

  // --- DAY 035 ---
  {
    day: 35,
    dayFormatted: "DAY 035",
    title: "My back is killing me (허리 아파 죽겠어)",
    videoId: "YRRTyocOblo",
    dialogues: [
      {
        id: "d35_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "쇼핑 끝나려면 얼마나 걸려?",
        en: "How long will it take to get the shopping done?",
        time: "03:42",
        seconds: 222,
        note: "How long will it take to ~? : ~하는 데 얼마나 걸리니? / get the shopping done : 쇼핑을 마치다",
        extras: [
          { en: "I have to get my homework done.", kr: "나 숙제 끝마쳐야 해." }
        ]
      },
      {
        id: "d35_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "거의 다 됐어. 얼마 안 걸릴 거야.",
        en: "I'm almost done. It will just take a second.",
        time: "05:21",
        seconds: 321,
        note: "almost done : 거의 다 된 / take a second : 잠깐(금방) 걸리다",
        extras: []
      },
      {
        id: "d35_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "더는 못 참아. 허리 아파 죽겠어.",
        en: "I've had it. My back is killing me.",
        time: "06:50",
        seconds: 410,
        note: "I've had it : 더는 못 참겠다, 진절머리 난다 / something is killing me : ~가 아파 죽겠다",
        extras: [
          { en: "I've had it with your nonsense.", kr: "네 헛소리엔 이제 질렸어." },
          { en: "My throat is killing me.", kr: "목이 아파 죽겠어." }
        ]
      },
      {
        id: "d35_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "휴게실에 가서 좀 쉬는 게 낫겠다.",
        en: "You'd better go get some rest in the lounge.",
        time: "08:28",
        seconds: 508,
        note: "had better + 동사원형 : ~하는 편이 낫다 / get some rest : 휴식을 취하다",
        extras: [
          { en: "get some fresh air", kr: "바람 좀 쐬다" }
        ]
      },
      {
        id: "d35_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "눈 깜짝할 사이에 2시간이 지났어.",
        en: "Two hours have passed in the blink of an eye.",
        time: "09:47",
        seconds: 587,
        note: "in the blink of an eye : 눈 깜짝할 사이에 (=in a flash)",
        extras: [
          { en: "Time flies in the blink of an eye.", kr: "시간이 눈 깜짝할 사이에 흘러가네." }
        ]
      },
      {
        id: "d35_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "내 사정 좀 봐줘, 제발.",
        en: "Cut me some slack, please.",
        time: "11:15",
        seconds: 675,
        note: "cut somebody some slack : ~의 사정을 봐주다, 여유를 주다",
        extras: [
          { en: "Please give me a break.", kr: "한 번만 봐주세요." }
        ]
      }
    ]
  },

  // --- DAY 036 ---
  {
    day: 36,
    dayFormatted: "DAY 036",
    title: "Can you take out the garbage? (쓰레기 좀 버려줄래?)",
    videoId: "Vh2PT9DuyI8",
    dialogues: [
      {
        id: "d36_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "나가는 길에 쓰레기 좀 버려줄래?",
        en: "Can you take out the garbage on your way out?",
        time: "00:07",
        seconds: 7,
        note: "take out the garbage : 쓰레기를 내다 버리다 / on your way out : 나가는 길에",
        extras: [
          { en: "take out the recycling", kr: "재활용품을 내놓다" }
        ]
      },
      {
        id: "d36_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "알았어요. 제가 버릴게요.",
        en: "No problem. I'll get it.",
        time: "00:24",
        seconds: 24,
        note: "I'll get it : 내가 할게, 내가 치울게",
        extras: []
      },
      {
        id: "d36_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "방과 후에 뭐 할 계획이니?",
        en: "What are you planning to do after school?",
        time: "00:39",
        seconds: 39,
        note: "plan to ~ : ~할 계획이다 / after school : 방과 후에",
        extras: []
      },
      {
        id: "d36_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "피자 가게에서 친구들 만날 거예요.",
        en: "Hang out with my friends at the pizza place.",
        time: "00:58",
        seconds: 58,
        note: "hang out with ~ : ~와 어울려 놀다 / pizza place : 피자 가게",
        extras: []
      },
      {
        id: "d36_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "차 고장 났으니까 내일까지 수리해야 해.",
        en: "My car broke down. I need to get it fixed by tomorrow.",
        time: "01:17",
        seconds: 77,
        note: "break down : (차가) 고장 나다 / get it fixed : 수리받다",
        extras: []
      },
      {
        id: "d36_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "알아볼게요. 하지만 너무 큰 기대는 하지 마세요.",
        en: "I'll see what I can do, but don't get your hopes up.",
        time: "01:39",
        seconds: 99,
        note: "see what I can do : 어떻게 해볼 수 있는지 알아보다 / don't get your hopes up : 너무 기대하진 마라",
        extras: []
      }
    ]
  },

  // --- DAY 037 ---
  {
    day: 37,
    dayFormatted: "DAY 037",
    title: "What took you so long? (왜 이렇게 늦었어?)",
    videoId: "IydLgQd01iw",
    dialogues: [
      {
        id: "d37_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "왜 이렇게 늦었어?",
        en: "What took you so long?",
        time: "02:00",
        seconds: 120,
        note: "What took you so long? : 왜 이렇게 오래 걸렸어? 왜 이리 늦었어?",
        extras: []
      },
      {
        id: "d37_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "시청 근처에서 차가 엄청 막혔어.",
        en: "I got stuck in traffic near City Hall.",
        time: "02:16",
        seconds: 136,
        note: "get stuck in traffic : 교통 체증에 갇히다, 차가 막히다",
        extras: []
      },
      {
        id: "d37_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "하루 중 이 시간대에는 항상 차가 밀려.",
        en: "Traffic is heavy at this time of day.",
        time: "02:35",
        seconds: 155,
        note: "traffic is heavy : 차가 막힌다 / at this time of day : 하루 중 이맘때에는",
        extras: []
      },
      {
        id: "d37_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "어제는 과속 단속 카메라에 걸렸다니까.",
        en: "I got caught speeding yesterday.",
        time: "02:53",
        seconds: 173,
        note: "get caught speeding : 과속으로 적발되다, 딱지 떼이다",
        extras: []
      },
      {
        id: "d37_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "요즘 되는 일이 하나도 없구나.",
        en: "Nothing is working out for you these days.",
        time: "03:10",
        seconds: 190,
        note: "work out : 일이 잘 풀리다 / these days : 요즘",
        extras: []
      },
      {
        id: "d37_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "지난 몇 주 동안 많은 일을 겪었어.",
        en: "I've been through a lot in the past few weeks.",
        time: "03:27",
        seconds: 207,
        note: "go through a lot : 온갖 산전수전을 다 겪다, 힘든 일을 겪다",
        extras: []
      }
    ]
  },

  // --- DAY 038 ---
  {
    day: 38,
    dayFormatted: "DAY 038",
    title: "Anything good happen? (좋은 일 있어?)",
    videoId: "-spS2tu891c",
    dialogues: [
      {
        id: "d38_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "오늘 무슨 좋은 일 있어요?",
        en: "Anything good happen today?",
        time: "03:48",
        seconds: 228,
        note: "Anything good happen? : 무슨 좋은 일 있어?",
        extras: []
      },
      {
        id: "d38_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "와, 어떻게 알았어요?",
        en: "Wow, how could you tell?",
        time: "04:04",
        seconds: 244,
        note: "How could you tell? : 어떻게 알았어? (티가 나?)",
        extras: [
          { en: "Can you tell?", kr: "알아보겠어?" }
        ]
      },
      {
        id: "d38_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "얼굴에 다 쓰여 있어요.",
        en: "It's written all over your face.",
        time: "04:19",
        seconds: 259,
        note: "written all over one's face : 얼굴에 다 쓰여 있다, 티가 나다",
        extras: []
      },
      {
        id: "d38_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "우리 아들이 하버드 경영대학원에 합격했어요.",
        en: "My son got accepted to Harvard Business School.",
        time: "04:35",
        seconds: 275,
        note: "get accepted to ~ : ~에 합격하다, 입학 허가를 받다",
        extras: []
      },
      {
        id: "d38_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "좋은 소식이네요. 다 부모님 공이죠.",
        en: "Good news! You deserve to take all the credit.",
        time: "04:56",
        seconds: 296,
        note: "take all the credit : 모든 공로를 인정받다 / deserve to ~ : ~할 자격이 있다",
        extras: []
      },
      {
        id: "d38_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "고마워요. 모든 게 순조롭게 잘 진행되고 있어요.",
        en: "Thanks. Everything is under control.",
        time: "05:18",
        seconds: 318,
        note: "under control : 통제 하에 있는, 순조로운",
        extras: []
      }
    ]
  },

  // --- DAY 039 ---
  {
    day: 39,
    dayFormatted: "DAY 039",
    title: "It's coming up (출산일이 다가와)",
    videoId: "U5VNY1bkYwc",
    dialogues: [
      {
        id: "d39_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "보험 혜택 적용을 원하세요?",
        en: "Do you want insurance coverage?",
        time: "05:37",
        seconds: 337,
        note: "insurance coverage : 보험 적용 범위, 보험 보장",
        extras: []
      },
      {
        id: "d39_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "네, 큰 위험을 무릅쓰고 싶진 않거든요.",
        en: "Yes, I don't want to take a big risk.",
        time: "05:54",
        seconds: 354,
        note: "take a risk : 위험을 무릅쓰다",
        extras: []
      },
      {
        id: "d39_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "그나저나 출산 예정일이 언제예요?",
        en: "When is your baby due anyway?",
        time: "06:13",
        seconds: 373,
        note: "due : 출산 예정인, 마감인 / anyway : 그나저나",
        extras: []
      },
      {
        id: "d39_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "곧 다가와요. 세 달 정도 남았어요.",
        en: "It's coming up. It's about three months away.",
        time: "06:31",
        seconds: 391,
        note: "come up : 다가오다 / three months away : 석 달 앞둔",
        extras: []
      },
      {
        id: "d39_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "언제 만나서 점심 식사 한번 같이해요.",
        en: "Let's get together for lunch sometime.",
        time: "06:52",
        seconds: 412,
        note: "get together : 모이다, 만나다 / sometime : 언젠가",
        extras: []
      },
      {
        id: "d39_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "좋은 생각이에요.",
        en: "Sounds like a plan.",
        time: "07:07",
        seconds: 427,
        note: "Sounds like a plan : 좋은 계획이네요, 찬성이에요",
        extras: []
      }
    ]
  },

  // --- DAY 040 ---
  {
    day: 40,
    dayFormatted: "DAY 040",
    title: "Let me out over there (저기서 내려주세요)",
    videoId: "sUIZmaFXzco",
    dialogues: [
      {
        id: "d40_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이 주소로 가주세요.",
        en: "Please take me to this address.",
        time: "07:23",
        seconds: 443,
        note: "take somebody to ~ : ~로 데려다주다",
        extras: []
      },
      {
        id: "d40_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "괜찮으시면 지름길로 가도 될까요?",
        en: "Sure, if it's alright, I'd like to take a shortcut.",
        time: "07:40",
        seconds: 460,
        note: "take a shortcut : 지름길로 가다",
        extras: []
      },
      {
        id: "d40_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "좋아요, 하지만 서둘러서 밟아주세요.",
        en: "That's fine, but please step on it.",
        time: "08:02",
        seconds: 482,
        note: "step on it : 액셀을 밟다, 속력을 내다",
        extras: []
      },
      {
        id: "d40_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "지금 시간에는 20분 정도 걸릴 겁니다.",
        en: "It'll take 20 minutes at this time.",
        time: "08:20",
        seconds: 500,
        note: "take + 시간 : 시간이 걸리다",
        extras: []
      },
      {
        id: "d40_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "저기 다리 앞에서 내려주시겠어요?",
        en: "Could you let me out over there?",
        time: "08:38",
        seconds: 518,
        note: "let somebody out : (차에서) 내려주다",
        extras: []
      },
      {
        id: "d40_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "알겠습니다, 다 왔습니다. 즐거운 시간 되세요.",
        en: "All right, here we are. Enjoy your stay.",
        time: "08:54",
        seconds: 534,
        note: "Here we are : 다 도착했습니다 / Enjoy your stay : 즐거운 시간 보내세요",
        extras: []
      }
    ]
  },
  // --- DAY 041 ---
  {
    day: 41,
    dayFormatted: "DAY 041",
    title: "She was upset (그녀가 화가 났어)",
    videoId: "rZW-uSbdpSU",
    dialogues: [
      {
        id: "d41_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "그녀가 왜 저렇게 슬퍼 보이지?",
        en: "Why does she look so sad?",
        time: "03:42",
        seconds: 222,
        note: "look + 형용사 : ~해 보이다",
        extras: [
          { en: "You look happy.", kr: "너 행복해 보인다." }
        ]
      },
      {
        id: "d41_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "내가 놀려서 화가 난 것 같아.",
        en: "Probably because I made fun of her, so she was upset.",
        time: "04:37",
        seconds: 277,
        note: "make fun of somebody : ~를 놀리다 / upset : 속상한, 화가 난",
        extras: [
          { en: "I made fun of his new hairstyle.", kr: "그의 새 헤어스타일을 놀렸어." },
          { en: "I have an upset stomach.", kr: "배탈이 났어." }
        ]
      },
      {
        id: "d41_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "뭐라고 했는데?",
        en: "What did you say?",
        time: "06:34",
        seconds: 394,
        note: "What did you say? : 뭐라고 말했어?",
        extras: []
      },
      {
        id: "d41_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "돈만 밝힌다고 했지. 사람들이 다 그러던데.",
        en: "Gold digger. That's what people say.",
        time: "07:16",
        seconds: 436,
        note: "gold digger : 돈을 노리고 남자를 만나는 여자 / That's what people say : 사람들이 그러던데",
        extras: [
          { en: "That's what she said.", kr: "그녀가 그렇게 말했어." },
          { en: "That's what you think.", kr: "그건 네 생각이지." }
        ]
      },
      {
        id: "d41_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "네가 그녀를 크게 오해한 것 같아.",
        en: "I think you've got her wrong.",
        time: "08:35",
        seconds: 515,
        note: "get somebody wrong : ~를 오해하다",
        extras: [
          { en: "Don't get me wrong.", kr: "오해하지 마." },
          { en: "Don't take this the wrong way.", kr: "곡해해서 듣지 마." }
        ]
      },
      {
        id: "d41_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "그녀에게 다시 전화해서 사과해야겠다.",
        en: "I think I'm going to call her back and apologize.",
        time: "10:03",
        seconds: 603,
        note: "call somebody back : ~에게 다시 전화하다 / apologize : 사과하다",
        extras: [
          { en: "I apologize for my late response.", kr: "답장이 늦어 사과드립니다." }
        ]
      }
    ]
  },

  // --- DAY 042 ---
  {
    day: 42,
    dayFormatted: "DAY 042",
    title: "You're all talk (넌 항상 말뿐이야)",
    videoId: "S7KWFQMLK2k",
    dialogues: [
      {
        id: "d42_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "와, 너 영어 점수 많이 올랐네!",
        en: "Wow, your English score went up!",
        time: "03:41",
        seconds: 221,
        note: "go up : (점수·가격 등이) 오르다 (↔ go down)",
        extras: []
      },
      {
        id: "d42_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "몇 문제는 잘 몰라서 대충 찍었어.",
        en: "I wasn't sure about a few questions, so I took a guess.",
        time: "04:47",
        seconds: 287,
        note: "be not sure about ~ : ~에 대해 확신하지 못하다 / take a guess : 대충 짐작하다, 찍다",
        extras: [
          { en: "Take a guess.", kr: "한번 맞춰봐." }
        ]
      },
      {
        id: "d42_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "어떻게 그렇게 좋은 점수를 받았어?",
        en: "How did you get such a great score?",
        time: "06:35",
        seconds: 395,
        note: "such a + 형용사 + 명사 : 그렇게나 ~한 명사",
        extras: [
          { en: "I had such a great time.", kr: "정말 즐거운 시간을 보냈어." }
        ]
      },
      {
        id: "d42_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "비결은 만사를 제쳐두고 공부하는 거지.",
        en: "The key is to put everything aside and study.",
        time: "08:00",
        seconds: 480,
        note: "The key is to ~ : 비결은 ~하는 것이다 / put ~ aside : ~을 한쪽으로 제쳐두다",
        extras: []
      },
      {
        id: "d42_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "열심히는 했는데 결과가 안 좋았어.",
        en: "I tried everything, but nothing worked.",
        time: "09:30",
        seconds: 570,
        note: "try everything : 온갖 노력을 다하다 / work : (노력 등이) 효과가 있다, 잘 풀리다",
        extras: [
          { en: "I tried everything, but failed to get a job.", kr: "백방으로 노력했지만 취업에 실패했어." }
        ]
      },
      {
        id: "d42_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "믿을 수가 없어. 넌 항상 말뿐이잖아.",
        en: "That's hard to believe. You're all talk.",
        time: "11:03",
        seconds: 663,
        note: "hard to believe : 믿기 어려운 / be all talk : 말만 앞서다, 행동은 안 하다",
        extras: [
          { en: "You're all talk and no action.", kr: "넌 입만 살았고 행동은 안 해." },
          { en: "Easy for you to say.", kr: "말이야 쉽지." }
        ]
      }
    ]
  },

  // --- DAY 043 ---
  {
    day: 43,
    dayFormatted: "DAY 043",
    title: "I go along with that (나도 그 의견에 동의해)",
    videoId: "oT3QlZXMISc",
    dialogues: [
      {
        id: "d43_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "새 프로젝트 방향성에 대해 어떻게 생각해?",
        en: "What do you think about the new project direction?",
        time: "00:44",
        seconds: 44,
        note: "What do you think about ~? : ~에 대해 어떻게 생각하니?",
        extras: []
      },
      {
        id: "d43_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "나도 전적으로 그 의견에 동의해.",
        en: "I go along with that wholeheartedly.",
        time: "01:15",
        seconds: 75,
        note: "go along with ~ : ~에 동의하다, 찬성하다 / wholeheartedly : 전적으로, 진심으로",
        extras: [
          { en: "I agree with you 100%.", kr: "100% 동의해." }
        ]
      },
      {
        id: "d43_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "초기 비용이 조금 많이 들긴 하지만 가치가 있어.",
        en: "It costs a bit upfront, but it's worth it.",
        time: "01:50",
        seconds: 110,
        note: "upfront : 선불의, 초기의 / worth it : 가치 있는",
        extras: []
      },
      {
        id: "d43_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "장기적으로 보면 회사에 큰 이득이 될 거야.",
        en: "In the long run, it will greatly benefit our company.",
        time: "02:25",
        seconds: 145,
        note: "in the long run : 장기적으로 볼 때 / benefit : 이익을 주다",
        extras: []
      },
      {
        id: "d43_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "팀원들과 세부 실행 계획을 짜야겠네.",
        en: "We should map out detailed action plans with the team.",
        time: "03:00",
        seconds: 180,
        note: "map out : 계획을 치밀하게 세우다",
        extras: []
      },
      {
        id: "d43_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "다음 주 회의 안건으로 바로 올리자.",
        en: "Let's put it on the agenda for next week's meeting.",
        time: "03:35",
        seconds: 215,
        note: "put something on the agenda : ~을 안건으로 상정하다",
        extras: []
      }
    ]
  },

  // --- DAY 044 ---
  {
    day: 44,
    dayFormatted: "DAY 044",
    title: "I'm sick of this (이젠 지긋지긋해)",
    videoId: "O_sLNehK4uc",
    dialogues: [
      {
        id: "d44_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "매일 야근하고 주말 출근하는 거 지긋지긋해.",
        en: "I'm sick of daily overtime and working on weekends.",
        time: "00:43",
        seconds: 43,
        note: "be sick of ~ : ~에 진절머리가 나다, 지긋지긋하다",
        extras: [
          { en: "I'm fed up with this.", kr: "이젠 신물이나." }
        ]
      },
      {
        id: "d44_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "너 완전히 번아웃된 것 같아. 쉬어야 해.",
        en: "You seem totally burned out. You need a break.",
        time: "01:10",
        seconds: 70,
        note: "burned out : 완전히 탈진한, 에너지가 소진된",
        extras: []
      },
      {
        id: "d44_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "일을 줄여달라고 상사에게 면담 요청을 해볼까?",
        en: "Should I ask my supervisor for a meeting to reduce my workload?",
        time: "01:45",
        seconds: 105,
        note: "supervisor : 직속 상사 / workload : 업무량",
        extras: []
      },
      {
        id: "d44_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "혼자 끙끙 앓지 말고 솔직하게 털어놔 봐.",
        en: "Don't suffer in silence. Be open with him.",
        time: "02:18",
        seconds: 138,
        note: "suffer in silence : 혼자 속으로 삭이며 고통받다",
        extras: []
      },
      {
        id: "d44_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "건강을 해치면서까지 일하고 싶진 않거든.",
        en: "I don't want to work at the expense of my health.",
        time: "02:50",
        seconds: 170,
        note: "at the expense of ~ : ~을 희생시키며, 손해를 보며",
        extras: []
      },
      {
        id: "d44_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "네 몸과 마음을 돌보는 게 항상 최우선이야.",
        en: "Taking care of yourself should always come first.",
        time: "03:15",
        seconds: 195,
        note: "come first : 최우선이다",
        extras: []
      }
    ]
  },

  // --- DAY 045 ---
  {
    day: 45,
    dayFormatted: "DAY 045",
    title: "What brings you here? (여긴 웬일이야?)",
    videoId: "sAZPSvkbHf0",
    dialogues: [
      {
        id: "d45_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "톰! 네가 여긴 웬일이야?",
        en: "Tom! What brings you here?",
        time: "00:44",
        seconds: 44,
        note: "What brings you here? : 여긴 무슨 일로 왔어? 여긴 웬일이야?",
        extras: [
          { en: "What are you doing here?", kr: "여기서 뭐 해?" }
        ]
      },
      {
        id: "d45_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "근처 서점에 책 사러 왔다가 들렀어.",
        en: "I came to buy books nearby and dropped by.",
        time: "01:12",
        seconds: 72,
        note: "drop by : 잠깐 들르다, 불쑥 방문하다",
        extras: []
      },
      {
        id: "d45_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이 근처에 카페 새로 생겼는데 가볼래?",
        en: "A new café opened nearby. Want to check it out?",
        time: "01:46",
        seconds: 106,
        note: "check something out : ~을 확인해 보다, 가보다",
        extras: []
      },
      {
        id: "d45_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "마침 커피가 당기던 참이었는데 딱이다.",
        en: "I was actually craving coffee. That's perfect.",
        time: "02:20",
        seconds: 140,
        note: "crave : ~이 간절히 당기다, 몹시 먹고 싶다",
        extras: []
      },
      {
        id: "d45_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "디저트도 맛있다고 소문난 곳이야.",
        en: "It's famous for its delicious desserts, too.",
        time: "02:52",
        seconds: 172,
        note: "be famous for ~ : ~로 유명하다",
        extras: []
      },
      {
        id: "d45_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "우연히 널 만나서 정말 반갑네. 가자!",
        en: "What a treat running into you. Let's go!",
        time: "03:17",
        seconds: 197,
        note: "run into somebody : ~를 우연히 마주치다",
        extras: []
      }
    ]
  },

  // --- DAY 046 ---
  {
    day: 46,
    dayFormatted: "DAY 046",
    title: "When did you get a checkup? (건강검진 언제 받았어?)",
    videoId: "onkZQ2-d1SU",
    dialogues: [
      {
        id: "d46_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "마지막으로 건강검진 받은 게 언제예요?",
        en: "When was the last time you got a medical checkup?",
        time: "00:07",
        seconds: 7,
        note: "When was the last time you ~? : 마지막으로 ~한 게 언제인가요? / medical checkup : 건강검진",
        extras: []
      },
      {
        id: "d46_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "두 달 전이요. 매년 회사에서 받아요.",
        en: "Two months ago. I get it at my company every year.",
        time: "00:26",
        seconds: 26,
        note: "every year : 매년",
        extras: []
      },
      {
        id: "d46_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이번에는 결과가 어떻게 나왔어요?",
        en: "How did it go this time?",
        time: "00:47",
        seconds: 47,
        note: "How did it go? : 어떻게 되었나요? 결과가 어때요?",
        extras: []
      },
      {
        id: "d46_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "좋진 않아요. 혈압이 조금 올라갔어요.",
        en: "Not good. My blood pressure went up a bit.",
        time: "01:03",
        seconds: 63,
        note: "blood pressure : 혈압 / go up a bit : 조금 오르다",
        extras: []
      },
      {
        id: "d46_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "최근에 스트레스를 많이 받으셨나 봐요.",
        en: "You've been under a lot of stress lately.",
        time: "01:23",
        seconds: 83,
        note: "be under stress : 스트레스를 받다 / lately : 최근에",
        extras: []
      },
      {
        id: "d46_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "건강 관리에 각별히 신경 써야겠어요.",
        en: "I should take good care of my health.",
        time: "01:45",
        seconds: 105,
        note: "take good care of ~ : ~을 잘 돌보다, 관리하다",
        extras: []
      }
    ]
  },

  // --- DAY 047 ---
  {
    day: 47,
    dayFormatted: "DAY 047",
    title: "My hands are full (손이 열 개라도 모자라)",
    videoId: "onkZQ2-d1SU",
    dialogues: [
      {
        id: "d47_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "내 수학 숙제 좀 도와줄 수 있어?",
        en: "Can you help me with my math homework?",
        time: "02:05",
        seconds: 125,
        note: "help somebody with ~ : ~가 ~하는 것을 돕다",
        extras: []
      },
      {
        id: "d47_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "미안하지만 안 돼. 지금 손이 열 개라도 모자라.",
        en: "Sorry, I can't. My hands are full.",
        time: "02:24",
        seconds: 144,
        note: "my hands are full : 너무 바쁘다, 손이 부족하다",
        extras: []
      },
      {
        id: "d47_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "수학 시험이 예전 같지 않단 말이야.",
        en: "Math tests are not what they used to be.",
        time: "02:44",
        seconds: 164,
        note: "not what it used to be : 예전 같지 않다",
        extras: []
      },
      {
        id: "d47_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "어쩌겠어. 익숙해지는 수밖에 없지.",
        en: "What can I say? You have to get used to it.",
        time: "03:03",
        seconds: 183,
        note: "get used to ~ : ~에 익숙해지다 / What can I say? : 어쩌겠니?",
        extras: []
      },
      {
        id: "d47_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "수학은 내 적성에 안 맞지만 영어는 제일 좋아해.",
        en: "Math is not my thing, but English is my favorite.",
        time: "03:23",
        seconds: 203,
        note: "not my thing : 내 취향이나 적성이 아니다",
        extras: []
      },
      {
        id: "d47_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "그렇다면 네 강점을 잘 살려봐.",
        en: "If so, you should play to your strengths.",
        time: "03:46",
        seconds: 226,
        note: "play to one's strengths : 자신의 장점(강점)을 십분 발휘하다",
        extras: []
      }
    ]
  },

  // --- DAY 048 ---
  {
    day: 48,
    dayFormatted: "DAY 048",
    title: "Don't blame me (내 탓 하지 마)",
    videoId: "onkZQ2-d1SU",
    dialogues: [
      {
        id: "d48_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "소화가 안 돼서 속이 더부룩해.",
        en: "My stomach feels heavy from indigestion.",
        time: "04:07",
        seconds: 247,
        note: "feels heavy : 더부룩하다, 무겁다 / indigestion : 소화불량",
        extras: []
      },
      {
        id: "d48_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "뷔페에서 너무 많이 먹지 말았어야지.",
        en: "You shouldn't have eaten so much at the buffet.",
        time: "04:28",
        seconds: 268,
        note: "shouldn't have p.p. : ~하지 말았어야 했는데 / buffet : 뷔페",
        extras: []
      },
      {
        id: "d48_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "네가 가자고 부추겨서 간 거잖아.",
        en: "You talked me into going there.",
        time: "04:45",
        seconds: 285,
        note: "talk somebody into -ing : 설득해서 ~하게 만들다",
        extras: []
      },
      {
        id: "d48_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "많이 먹은 걸로 내 탓으로 돌리지 마.",
        en: "Don't blame me for your eating too much.",
        time: "05:02",
        seconds: 302,
        note: "blame somebody for ~ : ~에 대해 남 탓하다",
        extras: []
      },
      {
        id: "d48_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "다이어트라도 하든지 해야겠다.",
        en: "I need to go on a diet or something.",
        time: "05:21",
        seconds: 321,
        note: "go on a diet : 다이어트하다 / or something : ~라든지 그런 것",
        extras: []
      },
      {
        id: "d48_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "더 이상 못 참겠어. 너 말하는 투가 정말 싫어.",
        en: "I can't take it anymore. I hate the way you talk.",
        time: "05:40",
        seconds: 340,
        note: "can't take it anymore : 더 이상 못 참겠다 / the way you talk : 네 말버릇, 어투",
        extras: []
      }
    ]
  },

  // --- DAY 049 ---
  {
    day: 49,
    dayFormatted: "DAY 049",
    title: "I've got goosebumps (소름 돋았어)",
    videoId: "onkZQ2-d1SU",
    dialogues: [
      {
        id: "d49_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이것 좀 봐. 온몸에 소름이 돋았어.",
        en: "Look at this. I've got goosebumps all over.",
        time: "06:04",
        seconds: 364,
        note: "goosebumps : 닭살, 소름 / all over : 온몸에",
        extras: []
      },
      {
        id: "d49_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "아침저녁으로 날씨가 제법 쌀쌀해지고 있어.",
        en: "It's getting pretty chilly in the morning.",
        time: "06:25",
        seconds: 385,
        note: "chilly : 쌀쌀한 / pretty : 꽤, 제법",
        extras: []
      },
      {
        id: "d49_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "추워 죽겠네. 외출할 때 옷 단단히 입어.",
        en: "I'm freezing to death. You should bundle up when going out.",
        time: "06:43",
        seconds: 403,
        note: "freeze to death : 얼어 죽겠다 / bundle up : 옷을 두껍게 단단히 껴입다",
        extras: []
      },
      {
        id: "d49_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "졸음운전 하다가 가벼운 접촉 사고가 났어.",
        en: "I had an accident dozing off behind the wheel.",
        time: "07:07",
        seconds: 427,
        note: "doze off : 졸다, 깜빡 잠들다 / behind the wheel : 운전 중에",
        extras: []
      },
      {
        id: "d49_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "어쩌나! 다친 데는 없어?",
        en: "Oh, no! Were you hurt?",
        time: "07:25",
        seconds: 445,
        note: "hurt : 다친",
        extras: []
      },
      {
        id: "d49_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "다행히 가벼운 접촉 사고에 불과했어.",
        en: "Fortunately, it was just a fender bender.",
        time: "07:42",
        seconds: 462,
        note: "fender bender : 가벼운 접촉사고 / Fortunately : 다행스럽게도",
        extras: []
      }
    ]
  },

  // --- DAY 050 ---
  {
    day: 50,
    dayFormatted: "DAY 050",
    title: "He stepped out for a moment (잠깐 자리 비우셨어요)",
    videoId: "onkZQ2-d1SU",
    dialogues: [
      {
        id: "d50_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "안녕하세요, 고객센터 브라운입니다.",
        en: "Hello, customer service, Brown speaking.",
        time: "08:04",
        seconds: 484,
        note: "Brown speaking : 전화 통화 시 '브라운입니다'",
        extras: []
      },
      {
        id: "d50_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "톰인데요, 로빈슨 씨 통화 가능한가요?",
        en: "This is Tom. Is Mr. Robinson available?",
        time: "08:23",
        seconds: 503,
        note: "available : 통화 가능한, 시간 여유가 있는",
        extras: []
      },
      {
        id: "d50_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "잠시만요. 잠깐 자리를 비우셨네요.",
        en: "Hold on, please. He's stepped out for a moment.",
        time: "08:44",
        seconds: 524,
        note: "hold on : 잠시 기다리다 / step out for a moment : 잠깐 자리를 비우다",
        extras: []
      },
      {
        id: "d50_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "통화하기 참 힘드네요. 저번엔 출장 가셨던데.",
        en: "It's so hard to reach him. He was out of town last time.",
        time: "09:04",
        seconds: 544,
        note: "reach somebody : ~와 연락이 닿다 / out of town : 출타 중인, 출장 중인",
        extras: []
      },
      {
        id: "d50_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "들어오시면 다시 전화드리라고 전할게요.",
        en: "I'll tell him to get back to you when he gets in.",
        time: "09:27",
        seconds: 567,
        note: "get back to somebody : 다시 연락하다 / get in : 사무실에 들어오다",
        extras: []
      },
      {
        id: "d50_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "점심시간이 다 됐네요. 점심 식사하러 가셨나 봐요.",
        en: "It's almost lunchtime. Maybe he's out to lunch.",
        time: "09:49",
        seconds: 589,
        note: "out to lunch : 점심 먹으러 자리를 비운",
        extras: []
      }
    ]
  },
  // --- DAY 051 ---
  {
    day: 51,
    dayFormatted: "DAY 051",
    title: "Act your age (나잇값 좀 해)",
    videoId: "c3eT_wutlXc",
    dialogues: [
      {
        id: "d51_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "무슨 일이야? 너 엄청 지쳐 보여.",
        en: "What's up? You look exhausted.",
        time: "00:07",
        seconds: 7,
        note: "exhausted : 녹초가 된, 기진맥진한 / What's up? : 무슨 일이야?",
        extras: [
          { en: "You look worn out.", kr: "너 파김치가 됐네." }
        ]
      },
      {
        id: "d51_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "지난 며칠 동안 비디오 게임에 푹 빠져 있었어.",
        en: "I've been hooked on video games for the last few days.",
        time: "00:26",
        seconds: 26,
        note: "be hooked on ~ : ~에 푹 빠져있다, 중독되다 / for the last few days : 지난 며칠간",
        extras: [
          { en: "I'm hooked on this show.", kr: "나 이 방송에 푹 빠졌어." }
        ]
      },
      {
        id: "d51_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "너 몇 살이니? 나잇값 좀 해라.",
        en: "How old are you? You should act your age.",
        time: "00:49",
        seconds: 49,
        note: "act your age : 나잇값 좀 해라, 철 좀 들어라",
        extras: [
          { en: "Grow up!", kr: "철 좀 들어!" }
        ]
      },
      {
        id: "d51_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "사돈 남 말 하시네. 네 일이나 신경 써.",
        en: "Look who's talking! Mind your own business.",
        time: "01:09",
        seconds: 69,
        note: "Look who's talking! : 사돈 남 말 하네! (너나 잘해) / Mind your own business : 네 일에나 신경 써라",
        extras: [
          { en: "None of your business.", kr: "너 알 바 아니야." }
        ]
      },
      {
        id: "d51_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "잔소리 좀 그만해. 혼쭐이 나봐야 정신 차리지.",
        en: "Don't lecture me. I'll kick your ass.",
        time: "01:29",
        seconds: 89,
        note: "lecture : 잔소리하다, 훈계하다 / kick one's ass : 혼쭐을 내주다 (구어)",
        extras: []
      },
      {
        id: "d51_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "알았어, 우리 둘 다 진정하고 이성을 찾자.",
        en: "Okay, let's just come to our senses.",
        time: "01:46",
        seconds: 106,
        note: "come to one's senses : 이성을 되찾다, 정신을 차리다",
        extras: [
          { en: "Come to your senses!", kr: "정신 좀 차려!" }
        ]
      }
    ]
  },

  // --- DAY 052 ---
  {
    day: 52,
    dayFormatted: "DAY 052",
    title: "I keep up with trends (유행에 뒤처지지 않아)",
    videoId: "c3eT_wutlXc",
    dialogues: [
      {
        id: "d52_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "다음 달에 아이패드 5가 나온대.",
        en: "The iPad 5 is coming out next month.",
        time: "02:10",
        seconds: 130,
        note: "come out : (신제품·음반 등이) 출시되다, 나오다",
        extras: []
      },
      {
        id: "d52_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "와! 아침 일찍부터 줄 서서 기다려야겠어.",
        en: "Wow, I have to wait in line from early morning.",
        time: "02:29",
        seconds: 149,
        note: "wait in line : 줄 서서 기다리다 / from early morning : 아침 일찍부터",
        extras: []
      },
      {
        id: "d52_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "너 언제부터 최신 전자기기에 관심이 있었니?",
        en: "Since when did you get interested in the latest gadgets?",
        time: "02:48",
        seconds: 168,
        note: "Since when ~? : 언제부터 ~했다고 그래? / latest gadgets : 최신 전자기기",
        extras: []
      },
      {
        id: "d52_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "나 트렌드에 뒤처지지 않아. 세상 물정 모르는 줄 알아?",
        en: "I keep up with trends. I wasn't born yesterday.",
        time: "03:12",
        seconds: 192,
        note: "keep up with ~ : ~을 따라잡다 / I wasn't born yesterday : 나도 알 건 다 알아 (어리숙하지 않아)",
        extras: []
      },
      {
        id: "d52_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "기분 나쁘게 듣지 마, 너 스마트폰 쓸 줄도 거의 모르잖아.",
        en: "No offense, but you barely know how to use smartphones.",
        time: "03:34",
        seconds: 214,
        note: "No offense, but ~ : 악의는 없지만, 기분 나쁘게 듣진 마 / barely : 거의 ~않다",
        extras: [
          { en: "None taken.", kr: "기분 안 나빠 (괜찮아)." }
        ]
      },
      {
        id: "d52_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "그만 좀 해. 아픈 데 콕콕 찌르지 마라.",
        en: "Knock it off! You don't have to rub it in.",
        time: "03:57",
        seconds: 237,
        note: "Knock it off : 그만해 / rub it in : (아픈 곳이나 실수를) 들춰내어 괴롭히다",
        extras: []
      }
    ]
  },

  // --- DAY 053 ---
  {
    day: 53,
    dayFormatted: "DAY 053",
    title: "She plays hard to get (밀당하는 거야)",
    videoId: "c3eT_wutlXc",
    dialogues: [
      {
        id: "d53_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "어젯밤에 무슨 일 있었는지 넌 절대 짐작도 못 할걸.",
        en: "You'll never guess what happened last night.",
        time: "04:20",
        seconds: 260,
        note: "You'll never guess ~ : 너 절대 못 맞힐걸, 무슨 일 있었는지 상상도 못 할걸",
        extras: []
      },
      {
        id: "d53_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "뭐야? 그녀가 너 바람맞히기라도 했어?",
        en: "What? She stood you up or what?",
        time: "04:38",
        seconds: 278,
        note: "stand somebody up : ~를 바람맞히다",
        extras: [
          { en: "Don't stand me up.", kr: "나 바람맞히지 마." }
        ]
      },
      {
        id: "d53_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "맞아. 걔 너무 도도하게 밀당하는 거 같지 않아?",
        en: "Exactly. Don't you think she plays hard to get?",
        time: "05:02",
        seconds: 302,
        note: "play hard to get : 쉽게 맘을 주지 않다, 도도하게 굴다(밀당하다)",
        extras: []
      },
      {
        id: "d53_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "그녀는 여러 사람 두루 만나며 어장관리 하는 게 분명해.",
        en: "I'm sure she really likes to play the field.",
        time: "05:19",
        seconds: 319,
        note: "play the field : 여러 이성을 두루 만나다, 어장관리 하다",
        extras: []
      },
      {
        id: "d53_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "소문에 따르면 걔가 너한테 호감 있다던데.",
        en: "According to rumors, she has feelings for you.",
        time: "05:36",
        seconds: 336,
        note: "According to rumors : 소문에 따르면 / have feelings for ~ : ~에게 호감을 품다",
        extras: []
      },
      {
        id: "d53_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "난 안 믿어. 지금 머릿속이 너무 복잡해.",
        en: "I don't buy it. I have a lot on my mind.",
        time: "06:02",
        seconds: 362,
        note: "I don't buy it : 난 안 믿어 (받아들이지 않다) / have a lot on one's mind : 생각이 많다",
        extras: []
      }
    ]
  },

  // --- DAY 054 ---
  {
    day: 54,
    dayFormatted: "DAY 054",
    title: "How old do I look? (내가 몇 살로 보여?)",
    videoId: "c3eT_wutlXc",
    dialogues: [
      {
        id: "d54_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "나 몇 살처럼 보여요?",
        en: "How old do I look?",
        time: "06:23",
        seconds: 383,
        note: "How old do I look? : 나 몇 살로 보여?",
        extras: [
          { en: "Take a guess.", kr: "맞춰보세요." }
        ]
      },
      {
        id: "d54_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "글쎄요, 30대 중반인 줄 알았는데요.",
        en: "Well, I thought you're in your mid-30s.",
        time: "06:39",
        seconds: 399,
        note: "in one's mid-30s : 30대 중반인 (early: 초반, late: 후반)",
        extras: []
      },
      {
        id: "d54_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "사실 저 곧 마흔 살 돼요.",
        en: "Actually, I'm pushing 40.",
        time: "06:58",
        seconds: 418,
        note: "pushing 40 : 마흔에 가까워지다, 곧 마흔이다",
        extras: [
          { en: "He is pushing 50.", kr: "그 사람 곧 50이야." }
        ]
      },
      {
        id: "d54_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "정말요? 나이에 비해 훨씬 젊어 보이세요.",
        en: "Really? You look young for your age.",
        time: "07:15",
        seconds: 435,
        note: "look young for one's age : 나이에 비해 동안이다, 젊어 보이다",
        extras: []
      },
      {
        id: "d54_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "고마워요, 그런 말 자주 들어요. 뭐 드시고 싶으세요?",
        en: "Thanks, I get that a lot. What are you up for?",
        time: "07:35",
        seconds: 455,
        note: "I get that a lot : 그런 소리 자주 들어요 / What are you up for? : 뭐 먹고(하고) 싶어?",
        extras: []
      },
      {
        id: "d54_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "아무거나요. 저 음식 안 가려요.",
        en: "Anything. I'm not picky about food.",
        time: "07:56",
        seconds: 476,
        note: "picky about ~ : ~에 까다로운, 편식하는",
        extras: [
          { en: "I'm a picky eater.", kr: "나 입맛이 까다로운 편이야." }
        ]
      }
    ]
  },

  // --- DAY 055 ---
  {
    day: 55,
    dayFormatted: "DAY 055",
    title: "He is gone for the day (오늘 퇴근하셨어요)",
    videoId: "c3eT_wutlXc",
    dialogues: [
      {
        id: "d55_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "제이슨 오늘 쉬나요? 전화를 안 받네요.",
        en: "Is Jason off today? He's not answering the phone.",
        time: "08:20",
        seconds: 500,
        note: "be off : 쉬는 날이다 / answer the phone : 전화를 받다",
        extras: []
      },
      {
        id: "d55_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "집안에 급한 일 때문에 오늘 퇴근하셨어요.",
        en: "He is gone for the day for a family emergency.",
        time: "08:42",
        seconds: 522,
        note: "gone for the day : 오늘 일과를 마치고 퇴근한 / family emergency : 집안의 비상사태(급한 일)",
        extras: []
      },
      {
        id: "d55_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "알려주셔서 감사합니다.",
        en: "Thank you for the information.",
        time: "09:00",
        seconds: 540,
        note: "information : 정보, 소식",
        extras: []
      },
      {
        id: "d55_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "제가 이 프로젝트 담당자이니 저한테 말씀하셔도 돼요.",
        en: "I'm in charge of this project, so you can tell me.",
        time: "09:18",
        seconds: 558,
        note: "in charge of ~ : ~을 담당하는, 책임지는",
        extras: []
      },
      {
        id: "d55_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "귀찮게 해드려 죄송하지만 부탁 하나 들어주실 수 있나요?",
        en: "Sorry to bother you, but can you do me a favor?",
        time: "09:39",
        seconds: 579,
        note: "Sorry to bother you : 폐를 끼쳐 죄송하지만 / do me a favor : 부탁을 들어주다",
        extras: []
      },
      {
        id: "d55_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "물론이죠. 어떤 게 필요하신가요?",
        en: "Sure thing. What do you need?",
        time: "10:00",
        seconds: 600,
        note: "Sure thing : 물론이죠, 좋습니다",
        extras: []
      }
    ]
  },

  // --- DAY 056 ---
  {
    day: 56,
    dayFormatted: "DAY 056",
    title: "Wake up, sleepyhead! (잠꾸러기야, 일어나!)",
    videoId: "vL3lv10Fl70",
    dialogues: [
      {
        id: "d56_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "잠꾸러기야, 일어나! 넌 맨날 늦잠이더라.",
        en: "Wake up, sleepyhead! You sleep in every day.",
        time: "00:08",
        seconds: 8,
        note: "sleepyhead : 잠꾸러기 / sleep in : 늦잠을 자다",
        extras: []
      },
      {
        id: "d56_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "밤새 뒤척이느라 한숨도 못 잤어요.",
        en: "I tossed and turned all night. I couldn't sleep a wink.",
        time: "00:30",
        seconds: 30,
        note: "toss and turn : 뒤척이다 / not sleep a wink : 눈을 한숨도 못 붙이다",
        extras: []
      },
      {
        id: "d56_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "학교에 제시간에 갈 수나 있을지 의문이다.",
        en: "I'm wondering if you can make it on time for school.",
        time: "00:53",
        seconds: 53,
        note: "make it on time : 제시간에 맞추어 도착하다",
        extras: []
      },
      {
        id: "d56_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "벌써 머리 감고 있는 중이거든요.",
        en: "I'm in the middle of washing my hair already.",
        time: "01:12",
        seconds: 72,
        note: "in the middle of -ing : 한창 ~하는 중이다",
        extras: []
      },
      {
        id: "d56_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "넌 우리 집안의 골칫덩어리야.",
        en: "You're the black sheep of our family.",
        time: "01:30",
        seconds: 90,
        note: "the black sheep : (집안·단체의) 말썽꾼, 골칫덩어리",
        extras: []
      },
      {
        id: "d56_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "알람 맞추는 걸 깜빡했을 뿐이에요. 너무 그러지 마세요.",
        en: "I just forgot to set the alarm. Come on.",
        time: "01:48",
        seconds: 108,
        note: "set the alarm : 알람을 맞추다 / Come on : 에이, 너무 그러지 마요",
        extras: []
      }
    ]
  },

  // --- DAY 057 ---
  {
    day: 57,
    dayFormatted: "DAY 057",
    title: "Go by the book (원칙대로 해)",
    videoId: "vL3lv10Fl70",
    dialogues: [
      {
        id: "d57_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "나 몸매가 완전 망가졌어. 계속 살이 찌네.",
        en: "I'm really out of shape. I keep on gaining weight.",
        time: "02:10",
        seconds: 130,
        note: "out of shape : 몸매가 망가진, 건강 상태가 안 좋은 / gain weight : 살이 찌다",
        extras: []
      },
      {
        id: "d57_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "말 나온 김에, 나 헬스장에서 운동 시작했어.",
        en: "Speaking of which, I've started working out at the gym.",
        time: "02:34",
        seconds: 154,
        note: "Speaking of which : 말이 나온 김에 / work out : 운동하다",
        extras: []
      },
      {
        id: "d57_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "정말? 나도 벼락치기 굶기 다이어트라도 해야겠어.",
        en: "Really? Maybe I should go on a crash diet.",
        time: "02:56",
        seconds: 176,
        note: "crash diet : 단기 속성(벼락치기) 무리한 다이어트",
        extras: []
      },
      {
        id: "d57_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "굶는 건 도움 안 돼. 원칙대로 정석으로 해야 해.",
        en: "Starving is not helpful. You should go by the book.",
        time: "03:18",
        seconds: 198,
        note: "starve : 굶주리다 / go by the book : 원칙대로(정석대로) 행동하다",
        extras: []
      },
      {
        id: "d57_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "글쎄, 어디서부터 시작해야 할지 모르겠네.",
        en: "Well, I don't know where to start.",
        time: "03:42",
        seconds: 222,
        note: "where to start : 어디서부터 시작할지",
        extras: []
      },
      {
        id: "d57_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "무리하지 말고 안전하게 가. 헬스장 등록부터 시작해 봐.",
        en: "Play it safe. Start by joining the gym.",
        time: "04:00",
        seconds: 240,
        note: "play it safe : 신중을 기하다, 안전제일로 가다 / join the gym : 헬스장에 등록하다",
        extras: []
      }
    ]
  },

  // --- DAY 058 ---
  {
    day: 58,
    dayFormatted: "DAY 058",
    title: "Will you back me up? (나 좀 지지해 줄래?)",
    videoId: "vL3lv10Fl70",
    dialogues: [
      {
        id: "d58_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "걱정 있어 보이네. 무슨 일 있어?",
        en: "You look worried. What's bothering you?",
        time: "04:23",
        seconds: 263,
        note: "What's bothering you? : 무슨 걱정거리(고민)가 있어?",
        extras: []
      },
      {
        id: "d58_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "직장에서 좀 따돌림당하는 기분이 들어.",
        en: "I think I'm feeling a little left out at work.",
        time: "04:42",
        seconds: 282,
        note: "feel left out : 소외감을 느끼다, 겉돌다",
        extras: []
      },
      {
        id: "d58_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "너무 좌절하지 마. 시간이 다 해결해 줄 거야.",
        en: "Don't be frustrated. Time heals all wounds.",
        time: "05:02",
        seconds: 302,
        note: "frustrated : 좌절한 / Time heals all wounds : 시간이 모든 상처를 치유한다",
        extras: []
      },
      {
        id: "d58_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "회의 때 내가 발언하면 나 좀 지지해 줄래?",
        en: "Will you back me up when I talk in the meeting?",
        time: "05:24",
        seconds: 324,
        note: "back somebody up : ~를 지지하다, 뒤를 받쳐주다",
        extras: []
      },
      {
        id: "d58_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "걱정 마, 별것도 아닌데 뭘.",
        en: "Don't worry. It's nothing.",
        time: "05:43",
        seconds: 343,
        note: "It's nothing : 아무것도 아니야, 별일 아니야",
        extras: []
      },
      {
        id: "d58_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "얼마나 고마운지 몰라.",
        en: "I can't thank you enough.",
        time: "05:57",
        seconds: 357,
        note: "I can't thank you enough : 대단히 감사합니다, 감사의 말씀을 다 못 드릴 정도예요",
        extras: []
      }
    ]
  },

  // --- DAY 059 ---
  {
    day: 59,
    dayFormatted: "DAY 059",
    title: "How about hair of the dog? (해장술 한잔 어때?)",
    videoId: "vL3lv10Fl70",
    dialogues: [
      {
        id: "d59_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "해장술 한잔하는 거 어때?",
        en: "How about a little hair of the dog?",
        time: "06:14",
        seconds: 374,
        note: "hair of the dog : 해장술",
        extras: []
      },
      {
        id: "d59_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "미안하지만 오늘 밤은 사양할게.",
        en: "Sorry, but I think I'll pass tonight.",
        time: "06:32",
        seconds: 392,
        note: "pass : 건너뛰다, 사양하다",
        extras: []
      },
      {
        id: "d59_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이번엔 네가 쏜다고 약속했잖아. 뻔뻔하네.",
        en: "You promised to treat this time. You have a lot of nerve.",
        time: "06:51",
        seconds: 411,
        note: "treat : 한턱내다 / have a lot of nerve : 넉살이 좋다, 뻔뻔하다",
        extras: []
      },
      {
        id: "d59_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "갑자기 급한 일이 생겼단 말이야.",
        en: "Something urgent came up suddenly.",
        time: "07:13",
        seconds: 433,
        note: "urgent : 긴급한 / come up : (일이) 발생하다",
        extras: []
      },
      {
        id: "d59_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "너 진짜 짠돌이에 믿을 수가 없다.",
        en: "You're so cheap and unreliable.",
        time: "07:30",
        seconds: 450,
        note: "cheap : 인색한, 짠돌이인 / unreliable : 믿을 수 없는",
        extras: []
      },
      {
        id: "d59_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "미안, 목감기 걸려서 그래. 다음 주에 가자.",
        en: "Sorry, I have a sore throat. Let's go out next week.",
        time: "07:49",
        seconds: 469,
        note: "sore throat : 목 통증, 인후염 / go out : 놀러 나가다",
        extras: []
      }
    ]
  },

  // --- DAY 060 ---
  {
    day: 60,
    dayFormatted: "DAY 060",
    title: "I'm between jobs (나 구직 중이야)",
    videoId: "vL3lv10Fl70",
    dialogues: [
      {
        id: "d60_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "한동안 통 얼굴을 못 봤네.",
        en: "I haven't seen you around for a while.",
        time: "08:16",
        seconds: 496,
        note: "for a while : 한동안 / haven't seen you around : 통 못 봤다",
        extras: []
      },
      {
        id: "d60_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "구직 중이라 두문불출하고 조용히 지냈어.",
        en: "I'm between jobs, so I've been lying low.",
        time: "08:33",
        seconds: 513,
        note: "between jobs : 구직 중인, 실직 상태인 / lie low : 몸을 낮추고 조용히 지내다",
        extras: []
      },
      {
        id: "d60_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "너무 무리하지 말고 여유를 가져.",
        en: "Don't work too hard and take your time.",
        time: "08:54",
        seconds: 534,
        note: "take your time : 서두르지 말고 여유를 갖다",
        extras: []
      },
      {
        id: "d60_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "맨땅에 헤딩하는 기분이야.",
        en: "It's like beating my head against the wall.",
        time: "09:12",
        seconds: 552,
        note: "beat one's head against the wall : 계란으로 바위 치기다, 맨땅에 헤딩하다",
        extras: []
      },
      {
        id: "d60_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "내 생각에 넌 대기만성형인 것 같아.",
        en: "I think you're kind of a late bloomer.",
        time: "09:30",
        seconds: 570,
        note: "late bloomer : 늦깎이, 대기만성형 인간",
        extras: []
      },
      {
        id: "d60_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "고마워. 비행기 태우지 마.",
        en: "Thanks. I'm so flattered.",
        time: "09:47",
        seconds: 587,
        note: "flattered : 과찬의 말씀을 듣고 우쭐한, 칭찬에 몸 둘 바를 모르는",
        extras: []
      }
    ]
  },
  // --- DAY 061 ---
  {
    day: 61,
    dayFormatted: "DAY 061",
    title: "Christmas is just around the corner (크리스마스가 코앞이야)",
    videoId: "fA-hlXhUXxg",
    dialogues: [
      {
        id: "d61_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "크리스마스가 코앞으로 다가왔어.",
        en: "Christmas is just around the corner.",
        time: "00:07",
        seconds: 7,
        note: "just around the corner : (시간·공간적으로) 코앞에 닥친, 임박한",
        extras: [
          { en: "The final exam is just around the corner.", kr: "기말고사가 코앞이야." }
        ]
      },
      {
        id: "d61_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "벌써 연말이라니 믿기지 않아.",
        en: "I can't believe it's already the end of the year.",
        time: "00:25",
        seconds: 25,
        note: "the end of the year : 연말 / I can't believe ~ : ~라니 믿을 수 없어",
        extras: []
      },
      {
        id: "d61_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "연말이 되면 나 자신을 깊이 반성하게 돼.",
        en: "I deeply reflect on myself at this time of the year.",
        time: "00:45",
        seconds: 45,
        note: "reflect on ~ : ~을 되돌아보다, 반성하다 / at this time of the year : 연중 이맘때면",
        extras: []
      },
      {
        id: "d61_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "에이, 넌 올바른 길을 잘 가고 있어.",
        en: "Come on, you're on the right track.",
        time: "01:07",
        seconds: 67,
        note: "on the right track : 올바른 방향으로 나아가는",
        extras: [
          { en: "You're on the wrong track.", kr: "넌 방향을 잘못 잡았어." }
        ]
      },
      {
        id: "d61_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이제부터는 과거에 얽매여 살지 않으려고 해.",
        en: "From now on, I'll try not to live in the past.",
        time: "01:25",
        seconds: 85,
        note: "live in the past : 과거에 얽매여 살다 / from now on : 이제부터는",
        extras: []
      },
      {
        id: "d61_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "그래, 하지만 네 과거에 책임은 져야지.",
        en: "Okay, but you should take responsibility for your past.",
        time: "01:49",
        seconds: 109,
        note: "take responsibility for ~ : ~에 대해 책임을 지다",
        extras: []
      }
    ]
  },

  // --- DAY 062 ---
  {
    day: 62,
    dayFormatted: "DAY 062",
    title: "Dinner is ready (저녁 식사 준비됐어)",
    videoId: "fA-hlXhUXxg",
    dialogues: [
      {
        id: "d62_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "저녁 준비 다 됐어. 와서 먹으렴.",
        en: "Dinner is ready. Come and get it.",
        time: "02:13",
        seconds: 133,
        note: "Come and get it : 와서 먹어라 (음식 준비가 다 되었을 때 부르는 소리)",
        extras: []
      },
      {
        id: "d62_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "전 저녁 거를게요. 입맛이 없어요.",
        en: "I'll skip my dinner. I lost my appetite.",
        time: "02:32",
        seconds: 152,
        note: "skip : 거르다 / lose one's appetite : 입맛(식욕)을 잃다",
        extras: [
          { en: "I have no appetite.", kr: "식욕이 전혀 없어." }
        ]
      },
      {
        id: "d62_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "식사 전에 군것질하지 말았어야지.",
        en: "You shouldn't have snacked before a meal.",
        time: "02:52",
        seconds: 172,
        note: "shouldn't have p.p. : ~하지 말았어야 했는데 / snack : 간식을 먹다",
        extras: []
      },
      {
        id: "d62_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "엄마, 이 수프 맛이 좀 이상한 것 같아요.",
        en: "Mom, I think this soup tastes funny.",
        time: "03:11",
        seconds: 191,
        note: "taste funny : 맛이 이상하다, 상한 맛이 나다",
        extras: [
          { en: "It smells funny.", kr: "냄새가 좀 이상해." }
        ]
      },
      {
        id: "d62_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "알았다, 네 마음대로 해라.",
        en: "Okay, fine. Have it your way.",
        time: "03:32",
        seconds: 212,
        note: "Have it your way : 네 좋을 대로 해라, 마음대로 해라",
        extras: [
          { en: "Suit yourself.", kr: "좋을 대로 해." }
        ]
      },
      {
        id: "d62_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "먼저 일어나도 될까요?",
        en: "May I be excused?",
        time: "03:50",
        seconds: 230,
        note: "May I be excused? : (식사 도중 먼저 일어날 때) 먼저 자리에서 일어나도 될까요?",
        extras: []
      }
    ]
  },

  // --- DAY 063 ---
  {
    day: 63,
    dayFormatted: "DAY 063",
    title: "Nature calls me (화장실 좀 다녀올게)",
    videoId: "fA-hlXhUXxg",
    dialogues: [
      {
        id: "d63_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "표가 거의 다 매진되었네.",
        en: "The tickets are almost sold out.",
        time: "04:07",
        seconds: 247,
        note: "sold out : 매진된 / almost : 거의",
        extras: []
      },
      {
        id: "d63_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "난 가운데 자리가 좋아. 구석 자리는 싫어.",
        en: "I want seats in the middle. I hate sitting on the sides.",
        time: "04:25",
        seconds: 265,
        note: "in the middle : 가운데에 / on the sides : 가장자리(구석)에",
        extras: []
      },
      {
        id: "d63_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "팝콘이나 음료수 좀 먹을래?",
        en: "Do you want some popcorn or drinks?",
        time: "04:49",
        seconds: 289,
        note: "popcorn or drinks : 팝콘이나 음료",
        extras: []
      },
      {
        id: "d63_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "물론이지. 영화 시작하려고 해. 들어가자.",
        en: "Sure. The show's about to start. Let's get in.",
        time: "05:05",
        seconds: 305,
        note: "be about to ~ : 막 ~하려 하다 / get in : 입장하다",
        extras: []
      },
      {
        id: "d63_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "화장실 좀 다녀올게. 내 자리 맡아줘.",
        en: "Nature calls me. Save my seat.",
        time: "05:23",
        seconds: 323,
        note: "Nature calls : 화장실에 가고 싶다 / save one's seat : 자리를 맡아두다",
        extras: []
      },
      {
        id: "d63_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "알았어. 휴대폰 진동으로 바꿔둬야겠다.",
        en: "Okay. I need to put my phone on vibrate.",
        time: "05:41",
        seconds: 341,
        note: "put one's phone on vibrate : 휴대폰을 진동 모드로 전환하다",
        extras: [
          { en: "turn off your phone", kr: "휴대폰 전원을 끄다" }
        ]
      }
    ]
  },

  // --- DAY 064 ---
  {
    day: 64,
    dayFormatted: "DAY 064",
    title: "By word of mouth (입소문으로)",
    videoId: "fA-hlXhUXxg",
    dialogues: [
      {
        id: "d64_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "새로 오픈한 패밀리 레스토랑 가봤어?",
        en: "Have you ever been to that new family restaurant?",
        time: "06:02",
        seconds: 362,
        note: "Have you ever been to ~? : ~에 가본 적 있어?",
        extras: []
      },
      {
        id: "d64_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "아니. 가볼 만한 가치가 있다고 생각해?",
        en: "No. Do you think it's worth visiting?",
        time: "06:23",
        seconds: 383,
        note: "worth -ing : ~할 가치가 있는",
        extras: [
          { en: "It's worth a try.", kr: "시도해 볼 가치가 있어." }
        ]
      },
      {
        id: "d64_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "당연하지! 안 가보면 후회할 거야.",
        en: "Absolutely. You'll be sorry if you miss that place.",
        time: "06:41",
        seconds: 401,
        note: "You'll be sorry : 후회하게 될 거야 / miss : 놓치다",
        extras: []
      },
      {
        id: "d64_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "거긴 어떻게 알게 되었는데?",
        en: "How did you learn of it?",
        time: "07:02",
        seconds: 422,
        note: "learn of ~ : ~에 대해 듣고 알게 되다",
        extras: []
      },
      {
        id: "d64_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "입소문으로 알았지. 내 친구가 말해줬어.",
        en: "By word of mouth. A friend of mine told me.",
        time: "07:17",
        seconds: 437,
        note: "by word of mouth : 입소문으로, 구전으로",
        extras: [
          { en: "spread by word of mouth", kr: "입소문을 타고 퍼지다" }
        ]
      },
      {
        id: "d64_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "그 식당 이름이 뭐라고 했지?",
        en: "What was the name of that place?",
        time: "07:37",
        seconds: 457,
        note: "What was the name of ~? : ~의 이름이 뭐였더라?",
        extras: []
      }
    ]
  },

  // --- DAY 065 ---
  {
    day: 65,
    dayFormatted: "DAY 065",
    title: "On a winning streak (연승 행진 중이야)",
    videoId: "fA-hlXhUXxg",
    dialogues: [
      {
        id: "d65_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "나 요즘 축구에 완전 푹 빠져 있어.",
        en: "I'm really crazy about soccer lately.",
        time: "07:55",
        seconds: 475,
        note: "be crazy about ~ : ~에 미치다, 푹 빠지다 / lately : 최근에",
        extras: []
      },
      {
        id: "d65_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "어느 팀을 응원하는데?",
        en: "Which team are you rooting for?",
        time: "08:12",
        seconds: 492,
        note: "root for ~ : ~을 응원하다",
        extras: [
          { en: "I'm rooting for you.", kr: "난 널 응원해." }
        ]
      },
      {
        id: "d65_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "첼시야. 오늘 역전승으로 3대 1로 이겼어.",
        en: "Chelsea. They came from behind and won 3 to 1 today.",
        time: "08:29",
        seconds: 509,
        note: "come from behind : 역전하다, 뒤처지다 따라붙다 / 3 to 1 : 3대 1",
        extras: []
      },
      {
        id: "d65_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "네 팀이 연승 행진을 달리고 있나 보구나.",
        en: "I guess your team is on a winning streak.",
        time: "08:54",
        seconds: 534,
        note: "on a winning streak : 연승 가도를 달리는 (↔ on a losing streak: 연패 중인)",
        extras: []
      },
      {
        id: "d65_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "응, 벌써 9연승째야.",
        en: "Yeah, that's the ninth win in a row already.",
        time: "09:11",
        seconds: 551,
        note: "in a row : 잇달아, 연속으로",
        extras: [
          { en: "three days in a row", kr: "3일 연속으로" }
        ]
      },
      {
        id: "d65_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "우리 팀 경기는 무승부로 끝났어.",
        en: "My team's game ended in a tie.",
        time: "09:32",
        seconds: 572,
        note: "end in a tie : 무승부로 끝나다 (=draw)",
        extras: []
      }
    ]
  },

  // --- DAY 066 ---
  {
    day: 66,
    dayFormatted: "DAY 066",
    title: "Catch our breath (숨 좀 돌리자)",
    videoId: "WxaZjYDEcvE",
    dialogues: [
      {
        id: "d66_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "산 정상까지 가려면 얼마나 걸려요?",
        en: "How long does it take to reach the top?",
        time: "00:07",
        seconds: 7,
        note: "How long does it take to ~? : ~하는 데 얼마나 걸리나요? / reach the top : 정상에 도달하다",
        extras: []
      },
      {
        id: "d66_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "거의 다 왔어요. 조금만 더 힘내세요.",
        en: "We're almost there. Just hang in there.",
        time: "00:26",
        seconds: 26,
        note: "almost there : 거의 다 도착한 / hang in there : 버티다, 힘내다",
        extras: []
      },
      {
        id: "d66_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "더 이상 못 가겠어요. 속이 좀 메스꺼워요.",
        en: "I can't go any further. I'm feeling a little queasy.",
        time: "00:46",
        seconds: 46,
        note: "go any further : 더 앞으로 나아가다 / queasy : 메스꺼운, 울렁거리는",
        extras: []
      },
      {
        id: "d66_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "좋아요, 쉬면서 숨 좀 돌리죠.",
        en: "Okay, let's get some rest and catch our breath.",
        time: "01:11",
        seconds: 71,
        note: "get some rest : 쉬다 / catch one's breath : 숨을 고르다, 숨을 돌리다",
        extras: []
      },
      {
        id: "d66_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "잠깐만요, 신발 끈 좀 묶어야겠어요.",
        en: "Just a minute, I need to tie my shoes.",
        time: "01:33",
        seconds: 93,
        note: "tie one's shoes : 신발 끈을 묶다",
        extras: []
      },
      {
        id: "d66_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "새 신발 길들이는 중이시군요.",
        en: "You're breaking in your new shoes.",
        time: "01:53",
        seconds: 113,
        note: "break in : (신발·가죽 등을) 길들이다",
        extras: []
      }
    ]
  },

  // --- DAY 067 ---
  {
    day: 67,
    dayFormatted: "DAY 067",
    title: "Pull myself together (정신 차려야 해)",
    videoId: "WxaZjYDEcvE",
    dialogues: [
      {
        id: "d67_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "어제 길에서 전 여자친구를 마주쳤어.",
        en: "I ran into my ex-girlfriend on the street yesterday.",
        time: "02:13",
        seconds: 133,
        note: "run into ~ : ~를 우연히 마주치다 / ex-girlfriend : 전 여자친구",
        extras: []
      },
      {
        id: "d67_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "설마 겁먹고 꽁무니 뺀 건 아니겠지?",
        en: "Wow, don't tell me you chickened out.",
        time: "02:36",
        seconds: 156,
        note: "don't tell me ~ : 설마 ~한 건 아니겠지 / chicken out : 겁을 먹고 꽁무니를 빼다",
        extras: []
      },
      {
        id: "d67_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "뒷걸음질 치다가 발목을 삘 뻔했다니까.",
        en: "I almost sprained my ankle while stepping backwards.",
        time: "02:56",
        seconds: 176,
        note: "sprain one's ankle : 발목을 삐다 / step backwards : 뒷걸음질 치다",
        extras: []
      },
      {
        id: "d67_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "이제 그녀는 잊어버려.",
        en: "You should take your mind off her.",
        time: "03:16",
        seconds: 196,
        note: "take one's mind off ~ : ~에 대한 생각을 털어버리다, 잊다",
        extras: []
      },
      {
        id: "d67_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "응, 이제 정신 차려야 할 때인 것 같아.",
        en: "Yeah, I think it's time to pull myself together.",
        time: "03:34",
        seconds: 214,
        note: "pull oneself together : 마음을 추스르다, 정신 차리다",
        extras: []
      },
      {
        id: "d67_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "걱정 마. 넌 잘 해낼 수 있을 거야.",
        en: "Don't worry. I think you can manage.",
        time: "03:56",
        seconds: 236,
        note: "manage : 그럭저럭 해내다, 잘 감당하다",
        extras: []
      }
    ]
  },

  // --- DAY 068 ---
  {
    day: 68,
    dayFormatted: "DAY 068",
    title: "A pain in the neck (골칫거리야)",
    videoId: "WxaZjYDEcvE",
    dialogues: [
      {
        id: "d68_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "그녀는 입이 가벼워서 비밀을 못 지켜.",
        en: "She has a big mouth. She can't keep a secret.",
        time: "04:19",
        seconds: 259,
        note: "have a big mouth : 입이 싸다, 수다스럽다 / keep a secret : 비밀을 지키다",
        extras: []
      },
      {
        id: "d68_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "그래서 네가 그녀에게 쌀쌀맞게 대한 거구나?",
        en: "That's why you give her the cold shoulder, right?",
        time: "04:42",
        seconds: 282,
        note: "give somebody the cold shoulder : ~를 냉대하다, 쌀쌀맞게 대하다",
        extras: []
      },
      {
        id: "d68_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "네가 내 입장이라면 어떻게 하겠니?",
        en: "What would you do if you were in my shoes?",
        time: "05:03",
        seconds: 303,
        note: "if you were in my shoes : 네가 내 입장이라면",
        extras: []
      },
      {
        id: "d68_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "글쎄, 깊게 생각해보진 않았어.",
        en: "Well, I haven't given it a lot of thought.",
        time: "05:24",
        seconds: 324,
        note: "give something thought : ~에 대해 생각해 보다",
        extras: []
      },
      {
        id: "d68_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "어쨌든 걘 정말 골칫덩어리야.",
        en: "Anyway, she's kind of a pain in the neck.",
        time: "05:46",
        seconds: 346,
        note: "a pain in the neck : 눈엣가시, 골칫거리, 성가신 존재",
        extras: []
      },
      {
        id: "d68_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "안타까운 일이네.",
        en: "I'm sorry to hear that.",
        time: "06:04",
        seconds: 364,
        note: "I'm sorry to hear that : 그 말을 들으니 안타깝다",
        extras: []
      }
    ]
  },

  // --- DAY 069 ---
  {
    day: 69,
    dayFormatted: "DAY 069",
    title: "Free up some time (시간 좀 내다)",
    videoId: "WxaZjYDEcvE",
    dialogues: [
      {
        id: "d69_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "쉬는 날 방해해서 죄송해요.",
        en: "Sorry for disturbing you on your day off.",
        time: "06:23",
        seconds: 383,
        note: "disturb : 방해하다 / on one's day off : 쉬는 날에",
        extras: []
      },
      {
        id: "d69_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "간단히 용건만 말씀해 주세요. 길게 통화 못 해요.",
        en: "Please make it short. I can't talk long.",
        time: "06:43",
        seconds: 403,
        note: "make it short : 간단히 짧게 끝내다",
        extras: []
      },
      {
        id: "d69_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "조언을 구하려고 전화드렸어요. 잠깐 시간 되세요?",
        en: "I'm calling to ask you for your advice. Do you have a minute?",
        time: "07:04",
        seconds: 424,
        note: "ask for advice : 조언을 구하다 / have a minute : 잠깐 시간 되다",
        extras: []
      },
      {
        id: "d69_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "지금은 타이밍이 안 좋아요. 사실 손님이 와 계시거든요.",
        en: "It's a bad time. Actually, I have company now.",
        time: "07:27",
        seconds: 447,
        note: "bad time : 적절치 않은 시간대 / have company : 손님이 와 있다",
        extras: []
      },
      {
        id: "d69_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "알겠습니다. 시간 나실 때 알려주세요.",
        en: "Okay, please let me know if you can free up some time.",
        time: "07:49",
        seconds: 469,
        note: "free up time : 시간을 내다 / let somebody know : 알려주다",
        extras: []
      },
      {
        id: "d69_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "한 시간 뒤쯤 만나는 건 어때요?",
        en: "How about if we meet in about an hour?",
        time: "08:10",
        seconds: 490,
        note: "in about an hour : 약 한 시간 뒤에",
        extras: []
      }
    ]
  },

  // --- DAY 070 ---
  {
    day: 70,
    dayFormatted: "DAY 070",
    title: "Split the bill (각자 계산하자)",
    videoId: "WxaZjYDEcvE",
    dialogues: [
      {
        id: "d70_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "오늘 예산이 좀 빠듯한 것 같아.",
        en: "I think I'm on a tight budget today.",
        time: "08:31",
        seconds: 511,
        note: "on a tight budget : 예산이 빠듯한, 쪼들리는",
        extras: []
      },
      {
        id: "d70_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "지난번에 네가 냈으니까 이번엔 내 차례야.",
        en: "You paid last time, so it's my turn.",
        time: "08:51",
        seconds: 531,
        note: "It's my turn : 내 차례야",
        extras: []
      },
      {
        id: "d70_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "정 그렇다면 각자 나눠서 내는 게 어때?",
        en: "If you insist, why don't we split the bill?",
        time: "09:12",
        seconds: 552,
        note: "If you insist : 정 그렇게 고집한다면 / split the bill : 각자 나눠서 계산하다",
        extras: []
      },
      {
        id: "d70_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "좋아, 각자 5달러씩 갹출하자.",
        en: "Sure, let's chip in about $5 each.",
        time: "09:32",
        seconds: 572,
        note: "chip in : 돈을 십시일반 보태다, 갹출하다",
        extras: []
      },
      {
        id: "d70_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "여기 있어요. 남은 음식 포장용 용기 좀 주시겠어요?",
        en: "Okay, here you go. Can I have a doggie bag, please?",
        time: "09:56",
        seconds: 596,
        note: "here you go : 여기 있습니다 / doggie bag : (식당의) 남은 음식 포장용 봉투/용기",
        extras: []
      },
      {
        id: "d70_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "실례지만 대리운전 좀 불러주실래요?",
        en: "Excuse me, but would you call a designated driver?",
        time: "10:22",
        seconds: 622,
        note: "designated driver : 지정 운전자, 대리운전 기사",
        extras: []
      }
    ]
  },
  // --- DAY 071 ---
  {
    day: 71,
    dayFormatted: "DAY 071",
    title: "I have a crush on Kate (케이트에게 반했어)",
    videoId: "Zzek5-fwvMo",
    dialogues: [
      {
        id: "d71_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "나 케이트한테 반한 것 같아.",
        en: "I think I have a crush on Kate.",
        time: "00:07",
        seconds: 7,
        note: "have a crush on ~ : ~에게 반하다, 짝사랑하다",
        extras: [
          { en: "I had a crush on her in high school.", kr: "고등학교 때 그녀를 짝사랑했어." }
        ]
      },
      {
        id: "d71_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "임자 있다는 소문이 있던데, 그래도 한번 대시해 봐.",
        en: "Rumor has it she's taken, but why not give it a try?",
        time: "00:26",
        seconds: 26,
        note: "Rumor has it ~ : 소문에 따르면 ~라더라 / she's taken : 이미 임자가 있다 / give it a try : 시도해 보다",
        extras: []
      },
      {
        id: "d71_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "용기가 안 나. 난 말주변이 없잖아.",
        en: "I can't work up the courage. I'm not much of a talker.",
        time: "00:52",
        seconds: 52,
        note: "work up the courage : 용기를 내다 / not much of a talker : 말주변이 별로 없는 사람",
        extras: [
          { en: "He is a good talker.", kr: "그는 달변가야." }
        ]
      },
      {
        id: "d71_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "자신을 너무 깎아내리지 마. 너 괜찮은 녀석이야.",
        en: "Don't be so hard on yourself. You're a nice guy.",
        time: "01:17",
        seconds: 77,
        note: "be hard on oneself : 자신을 자책하다, 너무 가혹하게 굴다",
        extras: []
      },
      {
        id: "d71_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "우리 둘만의 비밀인데, 그녀를 한번 유혹해 볼게.",
        en: "Just between you and me, I'll try to pick her up.",
        time: "01:40",
        seconds: 100,
        note: "just between you and me : 우리끼리 이야기지만 / pick somebody up : ~를 유혹하다, 꼬시다",
        extras: []
      },
      {
        id: "d71_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "바로 그 자세야! 행운을 빌어줄게.",
        en: "That's the spirit! I'll keep my fingers crossed.",
        time: "02:01",
        seconds: 121,
        note: "That's the spirit! : 바로 그 자세야! / keep one's fingers crossed : 행운을 빌다",
        extras: []
      }
    ]
  },

  // --- DAY 072 ---
  {
    day: 72,
    dayFormatted: "DAY 072",
    title: "All the rage (대유행이야)",
    videoId: "Zzek5-fwvMo",
    dialogues: [
      {
        id: "d72_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "한국 사람들 사이에서 텔레그램이 대유행이야.",
        en: "Telegram is all the rage among Korean people.",
        time: "02:25",
        seconds: 145,
        note: "all the rage : 대유행인, 선풍적인 인기를 끄는",
        extras: []
      },
      {
        id: "d72_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "구식이라고 불러도 좋지만, 난 텔레그램 안 써.",
        en: "Call me old-fashioned, but I don't use Telegram.",
        time: "02:47",
        seconds: 167,
        note: "old-fashioned : 구식의, 고전적인",
        extras: []
      },
      {
        id: "d72_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "그러지 마. 사람들이 널 바보 취급할 거야.",
        en: "You don't want to do that. People would play you for a fool.",
        time: "03:10",
        seconds: 190,
        note: "play somebody for a fool : ~를 바보로 여기다, 놀려먹다",
        extras: []
      },
      {
        id: "d72_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "어쩐지 걔네가 내 문자에 답장을 안 하더라.",
        en: "No wonder they weren't answering my texts.",
        time: "03:30",
        seconds: 210,
        note: "No wonder ~ : 어쩐지 ~하더라 / answer one's text : 문자에 답장하다",
        extras: []
      },
      {
        id: "d72_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "온라인에서 앱 다운로드할 수 있어. 찾기 아주 쉬워.",
        en: "You can download the app online. You can't miss it.",
        time: "03:51",
        seconds: 231,
        note: "You can't miss it : (눈에 띄어서) 쉽게 찾을 수 있다",
        extras: []
      },
      {
        id: "d72_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "무슨 말인지는 알겠는데, 그게 뭐 그리 대수라고 그래?",
        en: "I see your point, but what's the big deal?",
        time: "04:13",
        seconds: 253,
        note: "I see your point : 네 말이 무슨 뜻인지 알겠다 / What's the big deal? : 그게 뭐 대수라고?",
        extras: []
      }
    ]
  },

  // --- DAY 073 ---
  {
    day: 73,
    dayFormatted: "DAY 073",
    title: "To top it off (금상첨화로 / 설상가상으로)",
    videoId: "Zzek5-fwvMo",
    dialogues: [
      {
        id: "d73_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "자고 일어났더니 목이 뻐근해. 컨디션이 영 아니야.",
        en: "I woke up with a stiff neck. I'm not feeling like myself.",
        time: "04:36",
        seconds: 276,
        note: "stiff neck : 뻐근한 목 / not feel like oneself : 제 컨디션이 아니다",
        extras: []
      },
      {
        id: "d73_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "어젯밤에 필름 끊길 때까지 마셨잖아.",
        en: "You drank till you dropped last night.",
        time: "05:01",
        seconds: 301,
        note: "drink till one drops : 쓰러질 때까지 (곤드레만드레) 마시다",
        extras: []
      },
      {
        id: "d73_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "설상가상으로 택시에 휴대폰까지 두고 내린 것 같아.",
        en: "To top it off, I think I left my phone in the taxi.",
        time: "05:22",
        seconds: 322,
        note: "to top it off : (좋든 나쁘든) 게다가, 엎친 데 덮친 격으로 / leave ~ behind : 두고 오다",
        extras: []
      },
      {
        id: "d73_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "너 보면 대학교 때 내 친구 녀석이 떠올라.",
        en: "You remind me of a friend of mine from university.",
        time: "05:45",
        seconds: 345,
        note: "remind somebody of ~ : ~에게 ~을 떠올리게 하다",
        extras: []
      },
      {
        id: "d73_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "그 친구도 완전 파티광이었나 보네.",
        en: "He must be a real party animal.",
        time: "06:04",
        seconds: 364,
        note: "party animal : 파티광, 노는 걸 몹시 좋아하는 사람",
        extras: []
      },
      {
        id: "d73_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "걘 필름 끊겨서 가끔 토하기까지 했어.",
        en: "He blacked out and even threw up sometimes.",
        time: "06:23",
        seconds: 383,
        note: "black out : 필름이 끊기다 / throw up : 토하다",
        extras: []
      }
    ]
  },

  // --- DAY 074 ---
  {
    day: 74,
    dayFormatted: "DAY 074",
    title: "Bottoms up! (원샷!)",
    videoId: "Zzek5-fwvMo",
    dialogues: [
      {
        id: "d74_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "네 성공을 위해 건배하자. 원샷!",
        en: "Let's make a toast to your success. Bottoms up!",
        time: "06:46",
        seconds: 406,
        note: "make a toast to ~ : ~을 위해 건배하다 / Bottoms up! : 잔을 비워라, 원샷!",
        extras: [
          { en: "Cheers!", kr: "건배!" }
        ]
      },
      {
        id: "d74_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "나 오늘 술 마시면 안 돼. 약 먹고 있거든.",
        en: "I must not drink today. I'm on medication.",
        time: "07:09",
        seconds: 429,
        note: "be on medication : 약을 복용 중이다",
        extras: []
      },
      {
        id: "d74_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "에이 왜 그래, 그런 핑계에 내가 속을 줄 알고?",
        en: "Come on, I'm not falling for that trick.",
        time: "07:25",
        seconds: 445,
        note: "fall for ~ : ~에 속아 넘어가다 / trick : 속임수, 핑계",
        extras: []
      },
      {
        id: "d74_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "독감 걸려서 온몸이 다 쑤신단 말이야.",
        en: "I have a bad cold and ache all over.",
        time: "07:50",
        seconds: 470,
        note: "have a bad cold : 독감(심한 감기)에 걸리다 / ache all over : 온몸이 쑤시다",
        extras: []
      },
      {
        id: "d74_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "하루 휴가 내고 푹 쉬는 게 어때?",
        en: "Why don't you take a day off and relax?",
        time: "08:10",
        seconds: 490,
        note: "take a day off : 하루 휴가를 내다 / relax : 휴식을 취하다",
        extras: []
      },
      {
        id: "d74_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "그러고 싶지만 회사 일에 얽매여 있어서 쉴 수가 없어.",
        en: "I'd love to, but I'm tied up at work.",
        time: "08:31",
        seconds: 511,
        note: "be tied up at work : 회사 일로 꼼짝달싹 못 하다",
        extras: []
      }
    ]
  },

  // --- DAY 075 ---
  {
    day: 75,
    dayFormatted: "DAY 075",
    title: "Burst into tears (눈물을 왈칵 터뜨리다)",
    videoId: "Zzek5-fwvMo",
    dialogues: [
      {
        id: "d75_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "어쩌다가 사고가 난 거야?",
        en: "How did you get into an accident?",
        time: "08:52",
        seconds: 532,
        note: "get into an accident : 사고를 당하다",
        extras: []
      },
      {
        id: "d75_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "어떤 남자가 내 차를 들이받고 뺑소니쳤어.",
        en: "A man crashed into my car and ran away.",
        time: "09:10",
        seconds: 550,
        note: "crash into ~ : ~을 들이받다 / run away : 뺑소니치다, 도망치다",
        extras: [
          { en: "hit-and-run", kr: "뺑소니" }
        ]
      },
      {
        id: "d75_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "큰일 날 뻔했네! 범인이 누군지는 알아냈어?",
        en: "That was close! Did you figure out who did that?",
        time: "09:31",
        seconds: 571,
        note: "That was close! : 십년감수했네! 큰일 날 뻔했어! / figure out : 알아내다",
        extras: []
      },
      {
        id: "d75_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "응, 그런데 그 사람이 오히려 나한테 뒤집어씌우려 하더라고.",
        en: "Yes, but he was trying to put the blame on me.",
        time: "09:53",
        seconds: 593,
        note: "put the blame on somebody : ~에게 덤터기를 씌우다, 책임을 전가하다",
        extras: []
      },
      {
        id: "d75_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "오늘 운이 없었네. 일이 잘 해결되길 바랄게.",
        en: "You're out of luck today. Hope it works out for you.",
        time: "10:16",
        seconds: 616,
        note: "out of luck : 운이 없는 / work out : 잘 해결되다",
        extras: []
      },
      {
        id: "d75_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "너무 속상해서 눈물이 왈칵 쏟아질 뻔했어.",
        en: "I was so upset I almost burst into tears.",
        time: "10:37",
        seconds: 637,
        note: "burst into tears : 눈물을 왈칵 터뜨리다",
        extras: [
          { en: "burst out laughing", kr: "웃음을 빵 터뜨리다" }
        ]
      }
    ]
  },

  // --- DAY 076 ---
  {
    day: 76,
    dayFormatted: "DAY 076",
    title: "We're in the same boat (우린 같은 처지야)",
    videoId: "14mXXooPv5s",
    dialogues: [
      {
        id: "d76_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "집 팔아서 차익은 좀 남겼어?",
        en: "Have you made a profit on your house?",
        time: "00:06",
        seconds: 6,
        note: "make a profit on ~ : ~에서 수익/차익을 내다",
        extras: []
      },
      {
        id: "d76_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "그냥 본전치기야. 겨우 손해만 면했어.",
        en: "Just getting by. I just broke even.",
        time: "00:25",
        seconds: 25,
        note: "break even : 본전치기하다, 손익분기점에 도달하다",
        extras: []
      },
      {
        id: "d76_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "은행에서 대출을 좀 받을까 생각 중이야.",
        en: "I'm thinking of taking out a loan from the bank.",
        time: "00:46",
        seconds: 46,
        note: "take out a loan : 대출을 받다",
        extras: []
      },
      {
        id: "d76_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "새로 투자할 만한 좋은 지역 좀 추천해 줄래?",
        en: "Can you recommend a new area to invest in?",
        time: "01:08",
        seconds: 68,
        note: "invest in ~ : ~에 투자하다 / recommend : 추천하다",
        extras: []
      },
      {
        id: "d76_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "내 코가 석 자야. 빚 갚느라 바빠.",
        en: "I have my own problems. I'm busy paying off a debt.",
        time: "01:30",
        seconds: 90,
        note: "pay off a debt : 빚을 갚다, 청산하다 / I have my own problems : 내 문제만으로도 벅차다",
        extras: []
      },
      {
        id: "d76_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "우린 같은 처지구나. 나도 자금 마련하느라 허덕이고 있어.",
        en: "We're in the same boat. I'm struggling to raise money.",
        time: "01:54",
        seconds: 114,
        note: "in the same boat : 같은 처지인 / raise money : 자금을 마련하다",
        extras: []
      }
    ]
  },

  // --- DAY 077 ---
  {
    day: 77,
    dayFormatted: "DAY 077",
    title: "She was taken to the ER (응급실로 실려 갔어)",
    videoId: "14mXXooPv5s",
    dialogues: [
      {
        id: "d77_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "어젯밤에 부인께서 입원하셨다고 들었어.",
        en: "I heard your wife was hospitalized last night.",
        time: "02:19",
        seconds: 139,
        note: "be hospitalized : 입원하다",
        extras: []
      },
      {
        id: "d77_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "응급실로 실려 갈 때 혼수상태였어.",
        en: "She was in a coma when she was taken to the ER.",
        time: "02:40",
        seconds: 160,
        note: "in a coma : 혼수상태인 / ER (emergency room) : 응급실",
        extras: []
      },
      {
        id: "d77_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "곧 퇴원하실 수 있기를 바라.",
        en: "I hope she'll be released from the hospital soon.",
        time: "03:02",
        seconds: 182,
        note: "be released/discharged from the hospital : 퇴원하다",
        extras: []
      },
      {
        id: "d77_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "수술받고 지금은 안정된 상태야.",
        en: "After the surgery, she is in stable condition now.",
        time: "03:22",
        seconds: 202,
        note: "surgery : 수술 / in stable condition : 안정적인 상태인",
        extras: []
      },
      {
        id: "d77_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "의사가 뭐라고 해? 괜찮으시대?",
        en: "What did the doctor say? Is she all right?",
        time: "03:45",
        seconds: 225,
        note: "all right : 괜찮은",
        extras: []
      },
      {
        id: "d77_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "콜레스테롤 수치를 낮춰야 한대.",
        en: "He said she should bring her cholesterol level down.",
        time: "04:06",
        seconds: 246,
        note: "bring ~ down : ~을 낮추다 / cholesterol level : 콜레스테롤 수치",
        extras: []
      }
    ]
  },

  // --- DAY 078 ---
  {
    day: 78,
    dayFormatted: "DAY 078",
    title: "Selling like hotcakes (불티나게 팔려)",
    videoId: "14mXXooPv5s",
    dialogues: [
      {
        id: "d78_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "축하해! 네 책이 불티나게 팔리고 있더라.",
        en: "Congratulations! Your book is selling like hotcakes.",
        time: "04:32",
        seconds: 272,
        note: "sell like hotcakes : 날개 돋친 듯 불티나게 팔리다",
        extras: []
      },
      {
        id: "d78_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "고마워. 주변에 입소문 좀 많이 내줘.",
        en: "Thanks. Please spread the word for me.",
        time: "04:55",
        seconds: 295,
        note: "spread the word : 소문을 내다, 널리 알리다",
        extras: []
      },
      {
        id: "d78_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "물론이지. 대중에게 홍보할 방법이 있니?",
        en: "Sure. Do you have a way to promote it to the public?",
        time: "05:16",
        seconds: 316,
        note: "promote : 홍보하다 / to the public : 대중에게",
        extras: []
      },
      {
        id: "d78_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "응, 내 사이트에 무료 강의를 올리고 있어.",
        en: "Yes, I've been posting free lectures on my site.",
        time: "05:38",
        seconds: 338,
        note: "post : 게시하다 / free lecture : 무료 강의",
        extras: []
      },
      {
        id: "d78_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "친구랑 아는 지인들한테 좋게 말해줄게.",
        en: "I'll put in a good word to my friends and acquaintances.",
        time: "06:01",
        seconds: 361,
        note: "put in a good word : 좋게 말해주다 / acquaintance : 지인",
        extras: []
      },
      {
        id: "d78_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "정말 고마워. 나한테 큰 힘이 돼.",
        en: "Thanks a million. That means a lot to me.",
        time: "06:24",
        seconds: 384,
        note: "Thanks a million : 백만 번 감사해 / That means a lot to me : 나에게 큰 의미가 있다",
        extras: []
      }
    ]
  },

  // --- DAY 079 ---
  {
    day: 79,
    dayFormatted: "DAY 079",
    title: "Easier said than done (말이야 쉽지)",
    videoId: "14mXXooPv5s",
    dialogues: [
      {
        id: "d79_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "골프 치는 건 나한테 너무 벅찬 것 같아.",
        en: "I think it's too much for me to play golf.",
        time: "06:44",
        seconds: 404,
        note: "too much for somebody : ~에게 너무 벅찬, 무리인",
        extras: []
      },
      {
        id: "d79_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "일단 감을 잡고 나면 그저 시간문제일 뿐이야.",
        en: "Once you get the hang of it, it's just a matter of time.",
        time: "07:05",
        seconds: 425,
        note: "get the hang of ~ : ~의 감/요령을 잡다 / a matter of time : 시간문제",
        extras: []
      },
      {
        id: "d79_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "1년 안에 널 따라잡는 게 가능할까?",
        en: "Would it be possible to catch up with you in a year?",
        time: "07:28",
        seconds: 448,
        note: "catch up with ~ : ~을 따라잡다 / in a year : 1년 만에",
        extras: []
      },
      {
        id: "d79_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "그럴걸. 우선은 기본기에 익숙해지도록 해봐.",
        en: "I guess so. For starters, try to get used to it.",
        time: "07:49",
        seconds: 469,
        note: "For starters : 우선, 첫째로 / get used to ~ : ~에 익숙해지다",
        extras: []
      },
      {
        id: "d79_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "열심히 연습하면 머지않아 결실을 볼 거야.",
        en: "All the practice will pay off in the near future.",
        time: "08:12",
        seconds: 492,
        note: "pay off : 결실을 맺다, 보답을 받다 / in the near future : 가까운 미래에",
        extras: []
      },
      {
        id: "d79_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "항상 말이 행동보다 쉬운 법이지.",
        en: "It's always easier said than done.",
        time: "08:33",
        seconds: 513,
        note: "Easier said than done : 말하기는 쉽고 행하기는 어렵다 (말이야 쉽지)",
        extras: []
      }
    ]
  },

  // --- DAY 080 ---
  {
    day: 80,
    dayFormatted: "DAY 080",
    title: "Give it to me straight (솔직하게 털어놔)",
    videoId: "14mXXooPv5s",
    dialogues: [
      {
        id: "d80_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "나 돌아왔어. 내가 뭐 놓친 거 있어?",
        en: "Hey, I'm back. What did I miss?",
        time: "08:53",
        seconds: 533,
        note: "What did I miss? : 내가 뭐 놓친 거 있어?",
        extras: []
      },
      {
        id: "d80_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "내가 방금 무슨 얘기 들었는지 한번 맞춰봐.",
        en: "Guess what I just heard. Take a guess.",
        time: "09:12",
        seconds: 552,
        note: "Guess what ~ : 맞춰봐 / Take a guess : 어서 짐작해 봐",
        extras: []
      },
      {
        id: "d80_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "뜸 들이지 말고 솔직하게 바로 말해줘.",
        en: "Don't beat around the bush. Give it to me straight.",
        time: "09:33",
        seconds: 573,
        note: "beat around the bush : 돌려 말하다 / give it to somebody straight : 솔직하게 털어놓다",
        extras: []
      },
      {
        id: "d80_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "분위기에 휩쓸려서 걔네 둘이 키스했대.",
        en: "They got carried away and kissed each other.",
        time: "09:54",
        seconds: 594,
        note: "get carried away : 분위기에 휩쓸리다, 넋을 잃다",
        extras: []
      },
      {
        id: "d80_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "그럴 줄 알았어. 술을 그렇게 많이 마셔대더니.",
        en: "I knew it! They were drinking a lot.",
        time: "10:14",
        seconds: 614,
        note: "I knew it : 그럴 줄 알았어!",
        extras: []
      },
      {
        id: "d80_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "둘이 천생연분인 것 같아.",
        en: "I think they're made for each other.",
        time: "10:32",
        seconds: 632,
        note: "made for each other : 천생연분인",
        extras: [
          { en: "a match made in heaven", kr: "하늘이 맺어준 짝" }
        ]
      }
    ]
  },
  // --- DAY 081 ---
  {
    day: 81,
    dayFormatted: "DAY 081",
    title: "You didn't come out great (사진 잘 안 나왔어)",
    videoId: "UbUdvE-40mY",
    dialogues: [
      {
        id: "d81_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이 사진에서 너 별로 잘 안 나왔어.",
        en: "You didn't come out great in this picture.",
        time: "00:07",
        seconds: 7,
        note: "come out : (사진이) 나오다 / in this picture : 이 사진에서",
        extras: [
          { en: "You came out really well.", kr: "너 사진 정말 잘 나왔다." }
        ]
      },
      {
        id: "d81_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "솔직히 말해서 나 카메라 울렁증이 좀 있어.",
        en: "To be honest, I'm a little camera-shy.",
        time: "00:26",
        seconds: 26,
        note: "camera-shy : 사진 찍히는 걸 부끄러워하는, 카메라 울렁증이 있는",
        extras: []
      },
      {
        id: "d81_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "너 사진보다 실물이 훨씬 낫다.",
        en: "You look better than your picture.",
        time: "00:46",
        seconds: 46,
        note: "look better than ~ : ~보다 더 나아 보이다 / picture : 사진 (실물이 낫다는 칭찬)",
        extras: []
      },
      {
        id: "d81_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "사람들이 다들 그렇게 말하더라고.",
        en: "That's what everybody tells me.",
        time: "01:02",
        seconds: 62,
        note: "That's what ~ tells me : 다들 나한테 그렇게 말해",
        extras: []
      },
      {
        id: "d81_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "생각을 바꾸고 자신감을 좀 가져봐.",
        en: "You'd better change your mind and have confidence.",
        time: "01:19",
        seconds: 79,
        note: "change one's mind : 생각을 바꾸다 / have confidence : 자신감을 갖다",
        extras: []
      },
      {
        id: "d81_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "다시 생각해 보니까 네 말이 일리가 있네.",
        en: "On second thought, you have a point.",
        time: "01:39",
        seconds: 99,
        note: "on second thought : 다시 생각해 보니 / have a point : 일리가 있다",
        extras: []
      }
    ]
  },

  // --- DAY 082 ---
  {
    day: 82,
    dayFormatted: "DAY 082",
    title: "Let me sleep on it (생각해 볼 시간 좀 줘)",
    videoId: "UbUdvE-40mY",
    dialogues: [
      {
        id: "d82_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "뭐 찾으시는 거 도와드릴까요?",
        en: "Can I help you find something?",
        time: "02:00",
        seconds: 120,
        note: "help somebody find ~ : ~를 찾는 것을 돕다",
        extras: []
      },
      {
        id: "d82_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "이거 혹시 할인 좀 해주실 수 있나요?",
        en: "I'm wondering if you can give me a discount on this.",
        time: "02:17",
        seconds: 137,
        note: "give a discount on ~ : ~을 할인해 주다 / I'm wondering if ~ : 혹시 ~할 수 있는지 궁금하다",
        extras: []
      },
      {
        id: "d82_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "완전 거저예요. 저희 원가에 파는 겁니다.",
        en: "That's a steal. We're selling these at cost.",
        time: "02:39",
        seconds: 159,
        note: "That's a steal : 완전 거저나 다름없다 / at cost : 원가로, 본전에",
        extras: []
      },
      {
        id: "d82_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "흥정하고 싶진 않지만 너무 비싼 것 같아요.",
        en: "I don't like to haggle, but it's way too expensive.",
        time: "02:59",
        seconds: 179,
        note: "haggle : (가격을 깎으려고) 실랑이하다, 흥정하다 / way too : 너무나",
        extras: []
      },
      {
        id: "d82_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "사이즈가 맞는지 한번 입어보시지 그래요?",
        en: "Why don't you try it on for size?",
        time: "03:24",
        seconds: 204,
        note: "try ~ on for size : 치수가 맞는지 입어보다",
        extras: []
      },
      {
        id: "d82_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "가격을 못 깎아주신다면 하룻밤 생각해 볼게요.",
        en: "If you can't come down, let me sleep on it.",
        time: "03:43",
        seconds: 223,
        note: "come down : (가격을) 내리다 / sleep on it : 하룻밤 자면서 신중히 생각해 보다",
        extras: []
      }
    ]
  },

  // --- DAY 083 ---
  {
    day: 83,
    dayFormatted: "DAY 083",
    title: "Just get to the point (본론만 말해)",
    videoId: "UbUdvE-40mY",
    dialogues: [
      {
        id: "d83_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이 일은 제 능력 밖이에요. 해낼 수 있을지 모르겠어요.",
        en: "This work is beyond my ability. I'm not sure if I can do it.",
        time: "04:07",
        seconds: 247,
        note: "beyond one's ability : 능력 밖인 / not sure if ~ : ~할 수 있을지 확신이 안 서다",
        extras: []
      },
      {
        id: "d83_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "돌려 말하지 말고 요점만 바로 말해봐.",
        en: "Stop beating around the bush. Just get to the point.",
        time: "04:34",
        seconds: 274,
        note: "beat around the bush : 변죽을 울리다, 돌려 말하다 / get to the point : 요점에 도달하다, 본론을 말하다",
        extras: []
      },
      {
        id: "d83_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "제 몫은 다하고 있어요. 월급 인상받을 자격이 있다고요.",
        en: "I'm pulling my weight. I deserve a raise.",
        time: "04:59",
        seconds: 299,
        note: "pull one's weight : 자신의 몫(역할)을 다하다 / deserve a raise : 급여 인상을 받을 자격이 있다",
        extras: []
      },
      {
        id: "d83_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "월급 인상이라고? 그 얘기 다시 꺼내지도 마.",
        en: "Pay raise? Don't start with that again.",
        time: "05:22",
        seconds: 322,
        note: "pay raise : 급여 인상 / Don't start with that again : 또 그 소리 시작하지 마라",
        extras: []
      },
      {
        id: "d83_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "다른 부서로 전근 신청할 생각이에요.",
        en: "I'm going to put in for a transfer to another division.",
        time: "05:44",
        seconds: 344,
        note: "put in for ~ : ~을 신청하다 / transfer : 부서 이동, 전근 / division : 부서",
        extras: []
      },
      {
        id: "d83_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "제발 나 좀 압박하지 마. 너 때문에 미치겠어.",
        en: "Please stop pressuring me. You're driving me crazy.",
        time: "06:07",
        seconds: 367,
        note: "pressure : 압박하다, 강요하다 / drive somebody crazy : ~를 미치게 만들다",
        extras: []
      }
    ]
  },

  // --- DAY 084 ---
  {
    day: 84,
    dayFormatted: "DAY 084",
    title: "It's pouring (비가 억수같이 쏟아져)",
    videoId: "UbUdvE-40mY",
    dialogues: [
      {
        id: "d84_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "밖을 봐. 비가 억수같이 쏟아지고 있어.",
        en: "Look outside. It's pouring.",
        time: "06:33",
        seconds: 393,
        note: "pour : (비가) 퍼붓다, 억수같이 쏟아지다",
        extras: [
          { en: "It's raining cats and dogs.", kr: "비가 억수같이 와." }
        ]
      },
      {
        id: "d84_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "요리하기 귀찮은데 중식이나 배달시켜 먹자.",
        en: "I don't feel like cooking. Let's send out for Chinese food.",
        time: "06:51",
        seconds: 411,
        note: "not feel like -ing : ~하고 싶지 않다 / send out for ~ : ~을 배달 주문하다",
        extras: []
      },
      {
        id: "d84_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "내일 날씨는 어떨 것 같아?",
        en: "What's the weather going to be like tomorrow?",
        time: "07:16",
        seconds: 436,
        note: "What is the weather going to be like? : 날씨가 어떨까?",
        extras: []
      },
      {
        id: "d84_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "오후에 비가 올 확률이 높아.",
        en: "There's a good chance it will rain in the afternoon.",
        time: "07:32",
        seconds: 452,
        note: "a good chance : 높은 가능성/확률",
        extras: []
      },
      {
        id: "d84_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "일요일에 집안에만 틀어박혀 있어야 하다니 안타깝네.",
        en: "Too bad we have to be cooped up at home on Sunday.",
        time: "07:53",
        seconds: 473,
        note: "Too bad ~ : ~라니 안타깝다 / be cooped up : (좁은 곳에) 틀어박혀 있다",
        extras: []
      },
      {
        id: "d84_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "제기랄, 내 주말 계획은 물 건너갔네.",
        en: "Dammit, there goes my weekend.",
        time: "08:14",
        seconds: 494,
        note: "There goes ~ : ~은 다 날아갔네, 물 건너갔네",
        extras: []
      }
    ]
  },

  // --- DAY 085 ---
  {
    day: 85,
    dayFormatted: "DAY 085",
    title: "Let's take a walk (산책이나 하자)",
    videoId: "UbUdvE-40mY",
    dialogues: [
      {
        id: "d85_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이번 주 토요일에 무슨 특별한 계획 있어?",
        en: "Do you have any big plans this Saturday?",
        time: "08:36",
        seconds: 516,
        note: "big plans : 특별하거나 중요한 계획",
        extras: []
      },
      {
        id: "d85_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "유감스럽게도 밀린 일들을 좀 처리해야 해.",
        en: "I'm afraid I have some work to catch up on.",
        time: "08:56",
        seconds: 536,
        note: "I'm afraid ~ : 유감스럽지만 ~ / catch up on work : 밀린 일을 처리하다",
        extras: []
      },
      {
        id: "d85_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "너 엄청 스트레스받아 보여. 무슨 일 있었어?",
        en: "You look really stressed out. What happened?",
        time: "09:17",
        seconds: 557,
        note: "stressed out : 극심한 스트레스를 받는",
        extras: []
      },
      {
        id: "d85_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "다른 사람 대타로 일하는 것만큼은 죽어도 하기 싫었거든.",
        en: "The last thing I want to do is fill in for someone.",
        time: "09:39",
        seconds: 579,
        note: "the last thing I want to do : 가장 하기 싫은 일 / fill in for somebody : ~의 대타를 뛰다",
        extras: []
      },
      {
        id: "d85_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "조금만 참고 버텨. 그리고 감당 못 할 일은 욕심내지 마.",
        en: "Stick it out, and don't bite off more than you can chew.",
        time: "10:02",
        seconds: 602,
        note: "stick it out : 끝까지 참고 버티다 / bite off more than one can chew : 힘에 부치는 일을 벌이다",
        extras: []
      },
      {
        id: "d85_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "걔 꼴도 보기 싫어. 우리 산책이나 하자.",
        en: "I can't stand the sight of him. Let's take a walk.",
        time: "10:26",
        seconds: 626,
        note: "can't stand the sight of ~ : ~의 꼴도 보기 싫다 / take a walk : 산책하다",
        extras: []
      }
    ]
  },

  // --- DAY 086 ---
  {
    day: 86,
    dayFormatted: "DAY 086",
    title: "Thanks for the tip (알려줘서 고마워)",
    videoId: "JCPAd2gvuG4",
    dialogues: [
      {
        id: "d86_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "죄송하지만 차를 뒤로 조금만 빼주시겠어요?",
        en: "Would you mind backing up a little, please?",
        time: "00:07",
        seconds: 7,
        note: "Would you mind -ing? : ~해 주시겠어요? / back up : (차를) 후진하다, 뒤로 빼다",
        extras: []
      },
      {
        id: "d86_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "무슨 일이죠? 저 항상 여기에 주차하는데요.",
        en: "What's the matter? I always park here.",
        time: "00:27",
        seconds: 27,
        note: "What's the matter? : 무슨 문제라도 있나요? / park : 주차하다",
        extras: []
      },
      {
        id: "d86_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "여긴 견인 지역이에요. 주차 딱지 떼일 수 있어요.",
        en: "This is a tow-away zone. You can get a parking ticket.",
        time: "00:49",
        seconds: 49,
        note: "tow-away zone : 견인 지역 / get a parking ticket : 주차 위반 딱지를 떼이다",
        extras: []
      },
      {
        id: "d86_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "별일도 아닌 걸 가지고 난리 치지 마세요.",
        en: "Don't make a big deal out of nothing.",
        time: "01:10",
        seconds: 70,
        note: "make a big deal out of nothing : 아무것도 아닌 일로 호들갑을 떨다",
        extras: []
      },
      {
        id: "d86_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "제가 알기로는 건물 뒤편에 주차장이 있어요.",
        en: "As far as I know, there's a parking lot behind the building.",
        time: "01:32",
        seconds: 92,
        note: "as far as I know : 내가 알기로는 / parking lot : 주차장",
        extras: []
      },
      {
        id: "d86_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "몰랐던 사실이네요. 알려줘서 고마워요.",
        en: "That's news to me. Thanks for the tip.",
        time: "01:56",
        seconds: 116,
        note: "That's news to me : 금시초문이네요 / thanks for the tip : 정보(조언) 알려줘서 고마워요",
        extras: []
      }
    ]
  },

  // --- DAY 087 ---
  {
    day: 87,
    dayFormatted: "DAY 087",
    title: "Don't tell a soul (아무에게도 말하지 마)",
    videoId: "JCPAd2gvuG4",
    dialogues: [
      {
        id: "d87_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "오늘 쫙 빼입었네! 무슨 일 있어?",
        en: "You look sharp today. What's going on?",
        time: "02:18",
        seconds: 138,
        note: "look sharp : 옷차림이 멋지다, 깔끔하게 빼입다 / What's going on? : 무슨 일이야?",
        extras: []
      },
      {
        id: "d87_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "아내 몰래 새 코트 하나 내 돈으로 질렀지.",
        en: "I treated myself to a new coat behind my wife's back.",
        time: "02:39",
        seconds: 159,
        note: "treat oneself to ~ : 스스로에게 한턱내다, 지르다 / behind one's back : ~의 등 뒤에서 몰래",
        extras: []
      },
      {
        id: "d87_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "아내가 알면 뚜껑 열리겠는데.",
        en: "She'll blow her top if she finds out.",
        time: "03:02",
        seconds: 182,
        note: "blow one's top : 몹시 화를 내다, 뚜껑이 열리다 / find out : 알아채다",
        extras: [
          { en: "hit the ceiling", kr: "격노하다, 뚜껑 열리다" }
        ]
      },
      {
        id: "d87_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "나한테 맡겨. 내가 알아서 잘 처리할 테니까.",
        en: "Leave it to me. I'll take care of it.",
        time: "03:22",
        seconds: 202,
        note: "Leave it to me : 나한테 맡겨 / take care of ~ : ~을 처리하다",
        extras: []
      },
      {
        id: "d87_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "네 아내가 불쌍하다. 넌 대체 무슨 남편이 그러니?",
        en: "I feel sorry for her. What kind of husband are you?",
        time: "03:41",
        seconds: 221,
        note: "feel sorry for ~ : ~을 안타깝게 여기다 / What kind of ~ : 대체 무슨 놈의 ~",
        extras: []
      },
      {
        id: "d87_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "목소리 좀 낮춰. 아무한테도 말하면 안 돼!",
        en: "Keep your voice down. Don't tell a soul.",
        time: "04:04",
        seconds: 244,
        note: "keep one's voice down : 목소리를 낮추다 / Don't tell a soul : 쥐도 새도 모르게 비밀로 해라",
        extras: []
      }
    ]
  },

  // --- DAY 088 ---
  {
    day: 88,
    dayFormatted: "DAY 088",
    title: "Return the favor (은혜를 갚다)",
    videoId: "JCPAd2gvuG4",
    dialogues: [
      {
        id: "d88_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "마감 시한을 못 지켜서 한소리 들었어.",
        en: "I got a lecture for failing to meet the deadline.",
        time: "04:27",
        seconds: 267,
        note: "get a lecture : 꾸중을 듣다, 훈계를 받다 / meet the deadline : 마감일을 맞추다",
        extras: []
      },
      {
        id: "d88_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "네 상사가 마감일에 얼마나 엄격한지 알잖아.",
        en: "You know how your boss is about deadlines.",
        time: "04:49",
        seconds: 289,
        note: "be about ~ : ~에 대해 엄격하다, 신경 쓰다",
        extras: []
      },
      {
        id: "d88_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "더 이상 그분을 실망시켜 드리고 싶지 않아.",
        en: "I don't want to let him down anymore.",
        time: "05:09",
        seconds: 309,
        note: "let somebody down : ~를 실망시키다",
        extras: []
      },
      {
        id: "d88_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "오늘 밤 술 한잔하면서 그 얘기 좀 하자.",
        en: "Let's talk about it over a drink tonight.",
        time: "05:29",
        seconds: 329,
        note: "over a drink : 술을 한잔 마시면서",
        extras: []
      },
      {
        id: "d88_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "나 오늘 월급 받았어. 내가 저녁 쏠게.",
        en: "I got paid today. I'll treat you to dinner.",
        time: "05:49",
        seconds: 349,
        note: "get paid : 월급을 받다 / treat somebody to ~ : ~에게 대접하다",
        extras: []
      },
      {
        id: "d88_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "신세 진 게 있잖아. 이번엔 내가 은혜를 갚을 차례야.",
        en: "I owe you one. It's my turn to return the favor.",
        time: "06:09",
        seconds: 369,
        note: "owe somebody one : 신세를 지다 / return the favor : 은혜(호의)를 갚다",
        extras: []
      }
    ]
  },

  // --- DAY 089 ---
  {
    day: 89,
    dayFormatted: "DAY 089",
    title: "Fill her up, please (가득 채워주세요)",
    videoId: "JCPAd2gvuG4",
    dialogues: [
      {
        id: "d89_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "우리 기름이 다 떨어져 가.",
        en: "We're running out of gas.",
        time: "06:32",
        seconds: 392,
        note: "run out of ~ : ~이 바닥나다, 떨어져 가다 / gas : 휘발유",
        extras: []
      },
      {
        id: "d89_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "가는 길에 주유소 하나 알아.",
        en: "I know a gas station on the way.",
        time: "06:46",
        seconds: 406,
        note: "gas station : 주유소 / on the way : 도중에, 가는 길에",
        extras: []
      },
      {
        id: "d89_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "가는 김에 세차도 좀 해야겠어.",
        en: "While we're at it, I should get my car washed.",
        time: "07:06",
        seconds: 426,
        note: "while we're at it : 말이 나온 김에, 하는 김에 / get one's car washed : 세차하다",
        extras: []
      },
      {
        id: "d89_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "다음 신호에서 좌회전해야 해.",
        en: "You have to make a left at the next light.",
        time: "07:26",
        seconds: 446,
        note: "make a left : 좌회전하다 / light : 신호등",
        extras: [
          { en: "make a right", kr: "우회전하다" }
        ]
      },
      {
        id: "d89_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "가득 채워야겠어. 갈 길이 멀잖아.",
        en: "I need to fill up the tank. We have a long way to go.",
        time: "07:47",
        seconds: 467,
        note: "fill up the tank : 연료통을 가득 채우다 / a long way to go : 갈 길이 먼",
        extras: []
      },
      {
        id: "d89_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "가득 채워주세요. 세차도 할 수 있나요?",
        en: "Fill her up, please. Can I get a car wash?",
        time: "08:10",
        seconds: 490,
        note: "Fill her up : (차량에 기름을) 가득 채워주세요 / car wash : 세차",
        extras: []
      }
    ]
  },

  // --- DAY 090 ---
  {
    day: 90,
    dayFormatted: "DAY 090",
    title: "He's in the doghouse (단단히 찍혔어)",
    videoId: "JCPAd2gvuG4",
    dialogues: [
      {
        id: "d90_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "몇 달째 제이슨이랑 연락이 끊겼어.",
        en: "I've been out of touch with Jason for months.",
        time: "08:33",
        seconds: 513,
        note: "out of touch with ~ : ~와 연락이 끊긴",
        extras: []
      },
      {
        id: "d90_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "몇 번 문자 해봤는데, 걔 아내한테 단단히 찍혔대.",
        en: "I've texted him a few times. He's in the doghouse.",
        time: "08:52",
        seconds: 532,
        note: "in the doghouse : (벌로 개집에 갇히듯) 미움을 사다, 단단히 찍히다",
        extras: []
      },
      {
        id: "d90_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "그 얘기는 그만하고 점심이나 먹으러 가자.",
        en: "Let's drop the subject and go out for lunch.",
        time: "09:18",
        seconds: 558,
        note: "drop the subject : 그 화제를 접다, 그 이야기는 그만두다",
        extras: []
      },
      {
        id: "d90_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "음식 나왔다. 어서 먹자!",
        en: "Here comes the food. Let's dig in.",
        time: "09:38",
        seconds: 578,
        note: "dig in : (음식을) 맛있게 먹기 시작하다",
        extras: []
      },
      {
        id: "d90_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "총 24달러 나왔습니다.",
        en: "The total comes to twenty-four dollars.",
        time: "09:56",
        seconds: 596,
        note: "The total comes to ~ : 총액이 ~에 달하다",
        extras: []
      },
      {
        id: "d90_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "제 장부에 달아주세요.",
        en: "Put it on my account, please.",
        time: "10:13",
        seconds: 613,
        note: "put it on my account : 내 장부에 달아두다, 외상으로 처리하다",
        extras: [
          { en: "Put it on my tab.", kr: "내 외상 장부에 달아줘." }
        ]
      }
    ]
  },
  // --- DAY 091 ---
  {
    day: 91,
    dayFormatted: "DAY 091",
    title: "Give me a wake-up call (모닝콜 부탁해요)",
    videoId: "rPQYjdAtytY",
    dialogues: [
      {
        id: "d91_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "김진수 이름으로 예약했습니다.",
        en: "I have a reservation under the name of Jinsu Kim.",
        time: "00:07",
        seconds: 7,
        note: "under the name of ~ : ~의 이름으로 / have a reservation : 예약이 되어 있다",
        extras: [
          { en: "I booked under John.", kr: "존이라는 이름으로 예약했어요." }
        ]
      },
      {
        id: "d91_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "네 손님, 이 양식을 작성해 주시겠어요?",
        en: "Yes, sir. Could you fill out this form, please?",
        time: "00:28",
        seconds: 28,
        note: "fill out this form : 이 서식/양식을 작성하다",
        extras: []
      },
      {
        id: "d91_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "가능하다면 바다 전망이 보이는 방으로 부탁드립니다.",
        en: "I'd like a room with an ocean view if possible.",
        time: "00:53",
        seconds: 53,
        note: "a room with an ocean view : 바다 전망 방 / if possible : 가능하다면",
        extras: []
      },
      {
        id: "d91_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "확인해 보겠습니다. 마침 하나 있네요. 방 번호는 902호입니다.",
        en: "Let me check. Okay, we have one. Your room number is 902.",
        time: "01:17",
        seconds: 77,
        note: "Let me check : 확인해 보겠습니다",
        extras: []
      },
      {
        id: "d91_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "좋네요. 7시에 모닝콜 좀 해주실 수 있나요?",
        en: "Great. Can you give me a wake-up call at 7 o'clock?",
        time: "01:46",
        seconds: 106,
        note: "give somebody a wake-up call : ~에게 모닝콜을 해주다 (morning call은 콩글리시)",
        extras: []
      },
      {
        id: "d91_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "물론이죠. 벨보이에게 짐을 방까지 옮기도록 하겠습니다.",
        en: "Sure, I'll have a bellboy carry your luggage to your room.",
        time: "02:11",
        seconds: 131,
        note: "have + 목적어 + 동사원형 : ~에게 ~하도록 시키다 / luggage : 짐, 수하물",
        extras: []
      }
    ]
  },

  // --- DAY 092 ---
  {
    day: 92,
    dayFormatted: "DAY 092",
    title: "I have a bad cough (기침이 심해요)",
    videoId: "rPQYjdAtytY",
    dialogues: [
      {
        id: "d92_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "방에 수건 하나만 더 갖다주실 수 있나요?",
        en: "Can I have an extra towel in my room, please?",
        time: "02:34",
        seconds: 154,
        note: "extra towel : 여분의 수건",
        extras: []
      },
      {
        id: "d92_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "오늘 어디가 불편해서 오셨나요?",
        en: "What's the problem today?",
        time: "02:56",
        seconds: 176,
        note: "What's the problem today? : (병원 진료 시) 오늘 어디가 안 좋으신가요?",
        extras: []
      },
      {
        id: "d92_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "여기 처음 진료받으러 왔는데요, 기침이 너무 심해요.",
        en: "This is my first time here. I have a bad cough.",
        time: "03:13",
        seconds: 193,
        note: "first time here : 이곳에 처음 방문함 / have a bad cough : 기침이 심하다",
        extras: []
      },
      {
        id: "d92_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "성함과 전화번호를 남겨주세요.",
        en: "Leave your name and phone number, please.",
        time: "03:36",
        seconds: 216,
        note: "leave one's name : 이름을 남기다(기재하다)",
        extras: []
      },
      {
        id: "d92_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "알겠습니다. 제 앞에 대기자가 몇 팀이나 있나요?",
        en: "Okay. How many parties are ahead of me?",
        time: "03:54",
        seconds: 234,
        note: "party : (식당·병원 등의) 일행, 대기 팀 / ahead of ~ : ~보다 앞선",
        extras: []
      },
      {
        id: "d92_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "대기 명단에 올려드릴까요? 12팀 있어요.",
        en: "Do you want me to put you on the waiting list? Twelve.",
        time: "04:18",
        seconds: 258,
        note: "put somebody on the waiting list : ~를 대기자 명단에 올리다",
        extras: []
      }
    ]
  },

  // --- DAY 093 ---
  {
    day: 93,
    dayFormatted: "DAY 093",
    title: "Take it easy on the onions (양파는 조금만 넣어줘)",
    videoId: "rPQYjdAtytY",
    dialogues: [
      {
        id: "d93_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "네, 대기 명단에 올려주세요. 얼마나 기다려야 하나요?",
        en: "Yes, please. How long is the wait?",
        time: "04:40",
        seconds: 280,
        note: "How long is the wait? : 대기 시간이 얼마나 되나요?",
        extras: []
      },
      {
        id: "d93_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "제가 보기에는 한 30분 정도 걸릴 것 같습니다.",
        en: "The way I see it, it should take 30 minutes.",
        time: "05:00",
        seconds: 300,
        note: "The way I see it : 내가 보기에는, 내 생각에는",
        extras: []
      },
      {
        id: "d93_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "주문하시겠어요? 어떤 걸로 드릴까요?",
        en: "Can I take your order? What can I get for you?",
        time: "05:22",
        seconds: 322,
        note: "take one's order : 주문을 받다 / What can I get for you? : 무엇을 드릴까요?",
        extras: []
      },
      {
        id: "d93_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "치즈버거 하나랑 감자튀김, 콜라 하나 주세요.",
        en: "I'd like a cheeseburger, french fries, and a Coke.",
        time: "05:45",
        seconds: 345,
        note: "french fries : 감자튀김",
        extras: []
      },
      {
        id: "d93_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "여기서 드시나요, 아니면 포장해 가시나요?",
        en: "For here or to go?",
        time: "06:10",
        seconds: 370,
        note: "For here or to go? : 매장 식사인가요, 테이크아웃(포장)인가요?",
        extras: []
      },
      {
        id: "d93_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "포장이요. 양파는 조금만 적게 넣어주세요.",
        en: "To go, please. Take it easy on the onions.",
        time: "06:24",
        seconds: 384,
        note: "take it easy on ~ : ~을 살살 하다, 조금만(적게) 넣다",
        extras: [
          { en: "Hold the onions, please.", kr: "양파는 완전히 빼주세요." }
        ]
      }
    ]
  },

  // --- DAY 094 ---
  {
    day: 94,
    dayFormatted: "DAY 094",
    title: "What do you say? (어떻게 생각해?)",
    videoId: "rPQYjdAtytY",
    dialogues: [
      {
        id: "d94_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "그게 전부이신가요? 7달러 50센트입니다. 맛있게 드세요.",
        en: "Will that be all? That'll be $7.50. Enjoy your meal.",
        time: "06:45",
        seconds: 405,
        note: "Will that be all? : 그게 전부인가요? / Enjoy your meal : 맛있게 드세요",
        extras: []
      },
      {
        id: "d94_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "신용카드로 계산할게요. 여기 있습니다.",
        en: "I'd like to pay by credit card. Here you go.",
        time: "07:14",
        seconds: 434,
        note: "pay by credit card : 신용카드로 결제하다",
        extras: [
          { en: "pay in cash", kr: "현금으로 내다" }
        ]
      },
      {
        id: "d94_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "예약하셨나요?",
        en: "Do you have a reservation?",
        time: "07:35",
        seconds: 455,
        note: "have a reservation : 예약이 되어 있다",
        extras: []
      },
      {
        id: "d94_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "아니요, 5명 자리 있나요?",
        en: "No. Do you have a table for five?",
        time: "07:52",
        seconds: 472,
        note: "a table for five : 5인석 테이블",
        extras: []
      },
      {
        id: "d94_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "그럼요. 일반 테이블을 원하세요, 아니면 칸막이 부스석을 원하세요?",
        en: "Certainly. Would you like a table or a booth?",
        time: "08:14",
        seconds: 494,
        note: "table : 개방형 테이블 / booth : 소파가 둘러싸인 칸막이 부스석",
        extras: []
      },
      {
        id: "d94_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "부스석에 앉고 싶어요. 여보, 당신은 어때요?",
        en: "We'd like to sit in a booth. What do you say, honey?",
        time: "08:37",
        seconds: 517,
        note: "What do you say? : 어떻게 생각해? 네 생각은 어때?",
        extras: []
      }
    ]
  },

  // --- DAY 095 ---
  {
    day: 95,
    dayFormatted: "DAY 095",
    title: "All sales are final (환불·교환 불가입니다)",
    videoId: "rPQYjdAtytY",
    dialogues: [
      {
        id: "d95_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "난 다 좋아. 당신 편한 대로 해.",
        en: "It's all the same to me. Suit yourself.",
        time: "09:00",
        seconds: 540,
        note: "It's all the same to me : 난 아무래도 상관없어 / Suit yourself : 마음대로 해",
        extras: []
      },
      {
        id: "d95_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "얘들아, 말썽 피우지 말고 얌전히 굴어라.",
        en: "Boys, please stay out of trouble and behave yourselves.",
        time: "09:19",
        seconds: 559,
        note: "stay out of trouble : 말썽부리지 마라 / behave oneself : 예의 바르게 행동하다",
        extras: []
      },
      {
        id: "d95_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "좋은 오후입니다. 무엇을 도와드릴까요?",
        en: "Good afternoon. How may I help you?",
        time: "09:44",
        seconds: 584,
        note: "How may I help you? : 어떻게 도와드릴까요?",
        extras: []
      },
      {
        id: "d95_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "이 코트 환불받을 수 있을까요?",
        en: "Can I get a refund on this coat?",
        time: "10:02",
        seconds: 602,
        note: "get a refund on ~ : ~에 대해 환불받다",
        extras: []
      },
      {
        id: "d95_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "죄송하지만 환불 불가 정책이라 어렵습니다.",
        en: "I'm afraid it's against our policy to give refunds.",
        time: "10:21",
        seconds: 621,
        note: "against our policy : 규정·방침에 위배되는",
        extras: []
      },
      {
        id: "d95_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "이거 찢어져 있어요. 다른 걸로 교환이라도 안 되나요?",
        en: "This is torn. Can I exchange it for another one?",
        time: "10:45",
        seconds: 645,
        note: "torn : 찢어진 / exchange A for B : A를 B로 교환하다",
        extras: []
      }
    ]
  },

  // --- DAY 096 ---
  {
    day: 96,
    dayFormatted: "DAY 096",
    title: "Don't ask for trouble (사서 고생하지 마)",
    videoId: "QAHqLsWU6xM",
    dialogues: [
      {
        id: "d96_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이렇게 기가 막힌 아이디어를 누가 낸 거야?",
        en: "Who came up with this brilliant idea?",
        time: "00:08",
        seconds: 8,
        note: "come up with ~ : (아이디어를) 생각해 내다 / brilliant : 기막히게 훌륭한",
        extras: []
      },
      {
        id: "d96_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "문제를 해결하려고 우리 머리를 맞댔지.",
        en: "We put our heads together to solve the problem.",
        time: "00:27",
        seconds: 27,
        note: "put our heads together : 머리를 맞대고 의논하다",
        extras: []
      },
      {
        id: "d96_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "잘했어! 우리 스스로에게 큰 박수를 보내자.",
        en: "Good job! Let's give ourselves a big hand.",
        time: "00:47",
        seconds: 47,
        note: "give someone a big hand : ~에게 큰 박수를 보내다",
        extras: []
      },
      {
        id: "d96_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "사장님께 지금 바로 보고드리는 게 어때?",
        en: "Why don't you report it to the boss right away?",
        time: "01:08",
        seconds: 68,
        note: "report : 보고하다 / right away : 즉시",
        extras: []
      },
      {
        id: "d96_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "오늘 사장님 기분 안 좋으셔. 긁어 부스럼 만들지 마.",
        en: "He's in a bad mood today. Don't ask for trouble.",
        time: "01:29",
        seconds: 89,
        note: "in a bad mood : 기분이 안 좋은 / ask for trouble : 사서 고생하다, 긁어 부스럼을 만들다",
        extras: []
      },
      {
        id: "d96_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "정말? 내가 헛다리를 짚고 있었네.",
        en: "Really? I was barking up the wrong tree.",
        time: "01:51",
        seconds: 111,
        note: "bark up the wrong tree : 헛다리를 짚다, 엉뚱한 사람을 탓하다",
        extras: []
      }
    ]
  },

  // --- DAY 097 ---
  {
    day: 97,
    dayFormatted: "DAY 097",
    title: "I'm so sorry for your loss (삼가 조의를 표합니다)",
    videoId: "QAHqLsWU6xM",
    dialogues: [
      {
        id: "d97_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "우리 아버지가 지난주에 돌아가셨어.",
        en: "My father passed away last week.",
        time: "02:15",
        seconds: 135,
        note: "pass away : 돌아가시다, 별세하다 (die의 완곡한 표현)",
        extras: []
      },
      {
        id: "d97_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "삼가 조의를 표해. 네 슬픔이 얼마나 클지 알아.",
        en: "I'm so sorry for your loss. I know how you feel.",
        time: "02:35",
        seconds: 155,
        note: "I'm so sorry for your loss : 삼가 조의를 표합니다 / I know how you feel : 마음 이해해",
        extras: []
      },
      {
        id: "d97_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "위로해 줘서 고마워.",
        en: "Thank you for your sympathy.",
        time: "02:57",
        seconds: 177,
        note: "sympathy : 위로, 조의, 공감",
        extras: []
      },
      {
        id: "d97_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "훌륭한 분이셨어. 주관이 뚜렷한 분이셨지.",
        en: "He was a great man. He had a mind of his own.",
        time: "03:15",
        seconds: 195,
        note: "have a mind of one's own : 주관이 뚜렷하다, 자기 줏대가 있다",
        extras: []
      },
      {
        id: "d97_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "온갖 고생을 겪으며 자수성가해서 크게 성공하셨어.",
        en: "He had to learn the hard way and made it big.",
        time: "03:37",
        seconds: 217,
        note: "learn the hard way : 고생하며 배우다 / make it big : 크게 성공하다",
        extras: []
      },
      {
        id: "d97_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "나도 어릴 때부터 아버님을 참 존경했었어.",
        en: "I've looked up to him since I was young.",
        time: "03:58",
        seconds: 238,
        note: "look up to ~ : ~을 우러러보다, 존경하다 (↔ look down on)",
        extras: []
      }
    ]
  },

  // --- DAY 098 ---
  {
    day: 98,
    dayFormatted: "DAY 098",
    title: "Let's face it (현실을 직시하자)",
    videoId: "QAHqLsWU6xM",
    dialogues: [
      {
        id: "d98_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "경기가 그 어느 때보다도 안 좋아.",
        en: "The economy is worse now more than ever.",
        time: "04:21",
        seconds: 261,
        note: "more than ever : 그 어느 때보다도 / economy : 경기, 경제",
        extras: []
      },
      {
        id: "d98_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "취업 시장은 아무리 좋게 말해도 끔찍한 수준이야.",
        en: "The job market is horrible, to say the least.",
        time: "04:39",
        seconds: 279,
        note: "to say the least : 과장 없이 말해도, 아무리 좋게 말해도",
        extras: []
      },
      {
        id: "d98_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "대기업들이 채용 공고를 많이 내지 않고 있어.",
        en: "Big companies don't place many ads to hire people.",
        time: "05:00",
        seconds: 300,
        note: "place an ad : 광고(채용 공고)를 내다 / hire : 채용하다",
        extras: []
      },
      {
        id: "d98_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "눈높이를 낮춰야 한다고 말하는 사람들도 있더라.",
        en: "Some say we have to lower our standards.",
        time: "05:23",
        seconds: 323,
        note: "lower one's standards : 눈높이(기준)를 낮추다",
        extras: []
      },
      {
        id: "d98_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "모든 사람에겐 성공할 수 있는 자질이 있다고 생각해.",
        en: "I think everyone has what it takes to succeed.",
        time: "05:44",
        seconds: 344,
        note: "have what it takes : 필요한 자질과 역량을 갖추다 / succeed : 성공하다",
        extras: []
      },
      {
        id: "d98_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "현실을 직시하자. 요즘은 너무 치열하고 살벌해.",
        en: "Let's face it. It's too cutthroat these days.",
        time: "06:04",
        seconds: 364,
        note: "Let's face it : 현실을 직시하자 / cutthroat : 치열한, 살벌한, 피 튀기는",
        extras: []
      }
    ]
  },

  // --- DAY 099 ---
  {
    day: 99,
    dayFormatted: "DAY 099",
    title: "I missed the boat (기회를 놓쳤어)",
    videoId: "QAHqLsWU6xM",
    dialogues: [
      {
        id: "d99_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "학창 시절에 성적 좋았어?",
        en: "Did you get good grades in school?",
        time: "06:29",
        seconds: 389,
        note: "get good grades : 좋은 성적을 받다",
        extras: []
      },
      {
        id: "d99_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "돌아보면 나 대학교 때 우등생 명단에 올랐었지.",
        en: "Looking back, I was on the dean's list during college.",
        time: "06:46",
        seconds: 406,
        note: "looking back : 돌이켜보면 / on the dean's list : 우등생 명단에 오른",
        extras: []
      },
      {
        id: "d99_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "네가 우등생이었다고? 웃기지 마.",
        en: "You were an honor student? Don't make me laugh.",
        time: "07:12",
        seconds: 432,
        note: "honor student : 우등생 / Don't make me laugh : 소가 웃겠다, 웃기지 마",
        extras: []
      },
      {
        id: "d99_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "그래, 하지만 좋은 학점이 밥 먹여주는 건 아니더라.",
        en: "Okay, but good grades don't put food on the table.",
        time: "07:37",
        seconds: 457,
        note: "put food on the table : 밥 먹고 살게 해주다, 생계를 부양하다",
        extras: []
      },
      {
        id: "d99_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "학생일 땐 열심히 공부하는 것만 한 게 없어.",
        en: "There's nothing like studying hard as a student.",
        time: "08:01",
        seconds: 481,
        note: "There is nothing like ~ : ~만 한 것이 없다",
        extras: []
      },
      {
        id: "d99_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "핵심은 내가 인생에서 버스 떠난 뒤 손을 흔들었다는 거지.",
        en: "I think the point is that I missed the boat in life.",
        time: "08:23",
        seconds: 503,
        note: "miss the boat : 기회를 놓치다, 버스 지나간 뒤 손 흔들다",
        extras: []
      }
    ]
  },

  // --- DAY 100 ---
  {
    day: 100,
    dayFormatted: "DAY 100",
    title: "Let's meet halfway (서로 양보해서 타협하자)",
    videoId: "QAHqLsWU6xM",
    dialogues: [
      {
        id: "d100_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이 계획대로 밀고 나가자. 우린 해낼 수 있어.",
        en: "Let's go ahead with this plan. We can manage.",
        time: "08:49",
        seconds: 529,
        note: "go ahead with ~ : ~을 추진하다, 밀고 나가다 / manage : 해내다",
        extras: []
      },
      {
        id: "d100_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "너의 과거 전력을 보면 성공하기 힘들 것 같아.",
        en: "With your track record, I don't think we can pull it off.",
        time: "09:06",
        seconds: 546,
        note: "track record : 과거 실적, 전력 / pull it off : (어려운 일을) 성사시키다, 해내다",
        extras: []
      },
      {
        id: "d100_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "에이 왜 그래, 그렇게 겁쟁이처럼 굴지 마.",
        en: "Come on, don't be such a chicken.",
        time: "09:32",
        seconds: 572,
        note: "chicken : 겁쟁이",
        extras: []
      },
      {
        id: "d100_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "내 말은 의지할 수 있는 확실한 대안이 필요하다는 거야.",
        en: "All I'm saying is we need something to turn to.",
        time: "09:51",
        seconds: 591,
        note: "All I'm saying is ~ : 내 말의 요지는 ~이다 / turn to ~ : ~에 의지하다",
        extras: []
      },
      {
        id: "d100_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "정 그렇게 고집한다면 중간에서 절충하자.",
        en: "Okay, if you insist, let's meet halfway.",
        time: "10:13",
        seconds: 613,
        note: "meet halfway : 타협하다, 중간에서 절충하다",
        extras: []
      },
      {
        id: "d100_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "진지하게 임해. 이건 웃어넘길 일이 아니라고.",
        en: "Be serious. It's no laughing matter.",
        time: "10:34",
        seconds: 634,
        note: "Be serious : 진지해져라 / no laughing matter : 웃을 일이 아닌 것, 진지한 사안",
        extras: []
      }
    ]
  }
];