import { DaySchedule, FlightInfo, HotelInfo, CostItem, PlaceInfo } from './types';

export const PARTICIPANTS = ["웅", "명", "다인"];

export const ITINERARY_DATA: DaySchedule[] = [
  {
    date: "1/22",
    label: "THU",
    items: [
      { time: "07:10", title: "인천 출발", detail: "아시아나 OZ743 (제1터미널)", type: "transport" },
      { time: "11:55", title: "방콕 수완나품 도착", detail: "입국 수속 및 짐 찾기", type: "transport" },
      { time: "13:00", title: "호텔 이동", detail: "아바니 스쿰빗 체크인", type: "logistics" },
      { time: "PM", title: "자유 일정", detail: "휴식 및 온눗역 주변 탐방", type: "leisure" }
    ]
  },
  {
    date: "1/23",
    label: "FRI",
    items: [
      { time: "08:00", title: "조식", detail: "호텔 조식", type: "food" },
      { time: "11:00", title: "체크아웃 & 이동", detail: "킴튼 말라이로 이동 (짐 보관)", type: "logistics" },
      { time: "12:00", title: "점심 식사", detail: "임숙 (예정)", type: "food" },
      { time: "14:00", title: "마트 장보기", detail: "간식 및 필수품 구매", type: "activity" },
      { time: "PM", title: "호텔 수영", detail: "킴튼 말라이 수영장 즐기기", type: "leisure" },
      { time: "Dinner", title: "저녁 식사", detail: "배달 또는 룸서비스", type: "food" }
    ]
  },
  {
    date: "1/24",
    label: "SAT",
    items: [
      { time: "08:00", title: "조식", detail: "호텔 조식", type: "food" },
      { time: "AM", title: "오전 수영", detail: "여유로운 오전 시간", type: "leisure" },
      { time: "11:00", title: "점심 식사", detail: "노스이스트 (Northeast)", type: "food" },
      { time: "13:00", title: "마사지", detail: "프리마 스파 (예정)", type: "relax" },
      { time: "Dinner", title: "저녁 식사", detail: "Savelberg (파인다이닝)", type: "food" }
    ]
  },
  {
    date: "1/25",
    label: "SUN",
    items: [
      { time: "08:00", title: "조식", detail: "호텔 조식", type: "food" },
      { time: "10:00", title: "키즈 카페", detail: "하버랜드 (HarborLand)", type: "activity" },
      { time: "12:00", title: "점심 식사", detail: "현지 식당", type: "food" },
      { time: "PM", title: "오후 수영", detail: "물놀이", type: "leisure" },
      { time: "Dinner", title: "저녁 식사", detail: "Bubble in the Forest", type: "food" }
    ]
  },
  {
    date: "1/26",
    label: "MON",
    items: [
      { time: "08:00", title: "조식", detail: "호텔 조식", type: "food" },
      { time: "11:00", title: "체크아웃", detail: "짐 보관", type: "logistics" },
      { time: "12:00", title: "점심 식사", detail: "마지막 현지식", type: "food" },
      { time: "PM", title: "마사지", detail: "출국 전 피로 풀기", type: "relax" },
      { time: "Evening", title: "공항 이동", detail: "수완나품 공항으로 이동", type: "transport" }
    ]
  },
  {
    date: "1/27",
    label: "TUE",
    items: [
      { time: "01:00", title: "방콕 출발", detail: "아시아나 OZ742", type: "transport" },
      { time: "08:00", title: "인천 도착", detail: "여행 종료", type: "transport" }
    ]
  }
];

export const FLIGHTS: FlightInfo[] = [
  {
    type: 'Departure',
    code: 'OZ743',
    from: 'ICN (인천)',
    fromTime: '07:10',
    to: 'BKK (방콕)',
    toTime: '11:55',
    seats: '10A, 10B, 10C'
  },
  {
    type: 'Return',
    code: 'OZ742',
    from: 'BKK (방콕)',
    fromTime: '01:00',
    to: 'ICN (인천)',
    toTime: '08:00',
    seats: '27D, 27E, 27G'
  }
];

export const HOTELS: HotelInfo[] = [
  {
    name: '아바니 스쿰빗 (Avani Sukhumvit)',
    period: '1.22 - 1.23',
    nights: 1,
    bookingId: '27619132'
  },
  {
    name: '킴튼 말라이 (Kimpton Maa-Lai)',
    period: '1.23 - 1.26',
    nights: 3,
    bookingId: '251023907357'
  }
];

export const COSTS: CostItem[] = [
  { category: '항공권 (3인)', amount: 1483000, detail: '아시아나', color: '#171717' }, // neutral-900
  { category: '숙소 (아바니)', amount: 137000, detail: '1박', color: '#525252' }, // neutral-600
  { category: '숙소 (킴튼)', amount: 887000, detail: '3박', color: '#a3a3a3' }, // neutral-400
];

export const PLACES: PlaceInfo[] = [
  {
    name: "킴튼 말라이 방콕",
    category: "Hotel",
    description: "신돈 빌리지에 위치한 럭셔리 라이프스타일 호텔. 넓은 정원과 펫 프렌들리 정책, 세련된 인테리어가 특징.",
    imageUrl: "https://images.unsplash.com/photo-1590073242678-cfe2f013f7c1?q=80&w=1600&auto=format&fit=crop",
    tags: ["수영장", "럭셔리", "신돈"],
    address: "Kimpton Maa-Lai Bangkok"
  },
  {
    name: "아바니 스쿰빗",
    category: "Hotel",
    description: "BTS 온눗역과 바로 연결되어 접근성이 뛰어난 현대적인 호텔. 가성비와 편리함을 동시에.",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop",
    tags: ["BTS온눗", "가성비", "쇼핑몰"],
    address: "Avani Sukhumvit Bangkok Hotel"
  },
  {
    name: "노스이스트 (Northeast)",
    category: "Food",
    description: "한국인 입맛에 딱 맞는 푸팟퐁커리와 땡모반 맛집. 룸피니 공원 근처에 위치.",
    imageUrl: "https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=1600&auto=format&fit=crop",
    tags: ["푸팟퐁커리", "땡모반", "룸피니"],
    address: "Northeast Restaurant Bangkok"
  },
  {
    name: "Savelberg",
    category: "Fine Dining",
    description: "미슐랭 스타 쉐프의 모던 프렌치 레스토랑. 여행의 특별한 저녁을 위한 파인 다이닝.",
    imageUrl: "https://images.unsplash.com/photo-1550966871-3ed3c6221741?q=80&w=1600&auto=format&fit=crop",
    tags: ["미슐랭", "프렌치", "기념일"],
    address: "Savelberg Thailand"
  },
  {
    name: "Bubble in the Forest",
    category: "Cafe & Dining",
    description: "방콕 근교의 '몰디브'라 불리는 수상 카페. 이국적인 분위기의 포토 스팟.",
    imageUrl: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1600&auto=format&fit=crop",
    tags: ["포토존", "수상카페", "근교"],
    address: "Bubble in the forest Cafe"
  },
  {
    name: "HarborLand",
    category: "Activity",
    description: "아이들을 위한 최고의 실내 놀이터. 안전하고 다양한 놀이 시설 완비.",
    imageUrl: "https://images.unsplash.com/photo-1596464716127-f9a165924b1c?q=80&w=1600&auto=format&fit=crop",
    tags: ["키즈카페", "에어컨", "가족"],
    address: "HarborLand Sindhorn Midtown"
  }
];

export const TOTAL_COST = COSTS.reduce((acc, curr) => acc + curr.amount, 0);