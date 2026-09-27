export interface HymnStanza {
  number?: number;
  isRefrain?: boolean;
  lines: string[];
}

export interface Hymn {
  id: string;
  orderNumber: number;
  title: string;
  author: string;
  hymnTune?: string;
  category: string;
  stanzas: HymnStanza[];
}

export interface ProgramItem {
  id: string;
  time: string;
  duration: string;
  title: string;
  lead: string;
  roleOrAffiliation?: string;
  type: "prayer" | "hymn" | "tribute" | "sermon" | "reception" | "closing";
  hymnRefId?: string;
  notes?: string;
}

export const MEMORIAL_INFO = {
  fullName: "Prince Patrick Ekow Bondzie",
  role: "Chief Technology Officer & Lead Software Engineer",
  company: "MedPharma Ghana",
  age: 32,
  date: "Monday, 28th September 2026",
  isoDate: "2026-09-28",
  time: "10:00 AM – 11:45 AM GMT",
  doorsOpen: "10:00 AM GMT",
  serviceStarts: "10:30 AM GMT",
  venue: {
    room: "Elijah Namyela Pankah Auditorium",
    floor: "5th Floor",
    building: "Assemblies of God Head Office",
    area: "Ringway Estates",
    city: "Accra, Ghana",
    address: "23 Gamel Abdul Nasser Ave, Ringway Estates, Accra",
  },
  officiating: {
    name: "Rev. Dr. Freeman Osei-Tete",
    titles: [
      "Head of Operations, Assemblies of God Head Office",
      "Head Pastor, More Than Conquerors Assemblies of God, Santa Maria, Accra",
    ],
  },
  liveStream: {
    platform: "Google Meet",
    url: "https://meet.google.com/swi-ubgn-eri",
    roomOpens: "9:45 AM GMT",
  },
  contactRsvp: "0557560448",
  flyerImage: "/prince-memorial-flyer.png",
  memoryQuote: "A brilliant architect of code, a visionary builder of health technology, and a profoundly cherished brother and friend whose legacy lives on in every life touched by MedPharma.",
};

export const PROGRAM_SCHEDULE: ProgramItem[] = [
  {
    id: "prog-1",
    time: "10:00 AM",
    duration: "30 min",
    title: "Arrival, Seating & Musical Prelude",
    lead: "Congregation & Guests",
    roleOrAffiliation: "Instrumentalists & Choir",
    type: "reception",
    notes: "Soft reflective hymns and instrumental music as guests and partners are seated.",
  },
  {
    id: "prog-2",
    time: "10:30 AM",
    duration: "1 min",
    title: "Opening Prayer",
    lead: "Appointed Minister",
    roleOrAffiliation: "Assemblies of God",
    type: "prayer",
    notes: "Solemn opening prayer to invite God's presence and comfort.",
  },
  {
    id: "prog-3",
    time: "10:31 AM",
    duration: "3 min",
    title: "Opening Hymn: Amazing Grace",
    lead: "Congregation",
    type: "hymn",
    hymnRefId: "hymn-1",
    notes: "Led by the choir and congregation standing.",
  },
  {
    id: "prog-4",
    time: "10:34 AM",
    duration: "2 min",
    title: "Welcome Message & Purpose of Gathering",
    lead: "Jason Prince-Agbodjan",
    roleOrAffiliation: "Head of Commercial & Business Development, MedPharma",
    type: "reception",
    notes: "Official company welcome and acknowledgment of partners, guests, and family.",
  },
  {
    id: "prog-5",
    time: "10:36 AM",
    duration: "3 min",
    title: "Hymn of Comfort: It Is Well With My Soul",
    lead: "Congregation",
    type: "hymn",
    hymnRefId: "hymn-2",
    notes: "A hymn of peace and steadfast trust in the midst of trial.",
  },
  {
    id: "prog-6",
    time: "10:39 AM",
    duration: "10 min",
    title: "Message & Tribute from the Family",
    lead: "Family Representative",
    roleOrAffiliation: "The Bondzie Family",
    type: "tribute",
    notes: "Reflections on Prince's early life, character, faith, and family devotion.",
  },
  {
    id: "prog-7",
    time: "10:49 AM",
    duration: "3 min",
    title: "Hymn of Assurance: Great Is Thy Faithfulness",
    lead: "Congregation",
    type: "hymn",
    hymnRefId: "hymn-3",
    notes: "Praising God's unfailing compassions and morning mercies.",
  },
  {
    id: "prog-8",
    time: "10:52 AM",
    duration: "10 min",
    title: "Message & Tribute from the Church",
    lead: "Church Representative",
    roleOrAffiliation: "International Central Gospel Church (ICGC)",
    type: "tribute",
    notes: "Tribute celebrating Prince's Christian walk, ministry involvement, and fellowship.",
  },
  {
    id: "prog-9",
    time: "11:02 AM",
    duration: "3 min",
    title: "Hymn of Fellowship: What A Friend We Have In Jesus",
    lead: "Congregation",
    type: "hymn",
    hymnRefId: "hymn-4",
    notes: "Reflecting on Jesus as our ever-present refuge in grief.",
  },
  {
    id: "prog-10",
    time: "11:05 AM",
    duration: "10 min",
    title: "Tributes from Corporate & Tech Partners",
    lead: "Partner Representatives",
    roleOrAffiliation: "MTN Ghana, Acacia Health Insurance & Ecosystem Partners",
    type: "tribute",
    notes: "Sharing Prince's professional brilliance, collaborative spirit, and technological impact.",
  },
  {
    id: "prog-11",
    time: "11:15 AM",
    duration: "3 min",
    title: "Hymn of Hope: Blessed Assurance",
    lead: "Congregation",
    type: "hymn",
    hymnRefId: "hymn-5",
    notes: "A jubilant song of eternal hope and praise.",
  },
  {
    id: "prog-12",
    time: "11:18 AM",
    duration: "10 min",
    title: "Message & Tribute from MedPharma",
    lead: "Yaw Asamoah & Colleagues",
    roleOrAffiliation: "Chief Executive Officer & Engineering Team, MedPharma",
    type: "tribute",
    notes: "Celebrating Prince as the technological bedrock and heartbeat of MedPharma.",
  },
  {
    id: "prog-13",
    time: "11:28 AM",
    duration: "3 min",
    title: "Hymn of Worship: Holy, Holy, Holy! Lord God Almighty",
    lead: "Congregation",
    type: "hymn",
    hymnRefId: "hymn-6",
    notes: "Reverent adoration of the Sovereign God.",
  },
  {
    id: "prog-14",
    time: "11:31 AM",
    duration: "15 min",
    title: "Exhortation & Memorial Word",
    lead: "Rev. Dr. Freeman Osei-Tete",
    roleOrAffiliation: "Head of Operations, AG Head Office / Head Pastor, More Than Conquerors AG",
    type: "sermon",
    notes: "Scriptural comfort, words of eternal perspective, and charge to the congregation.",
  },
  {
    id: "prog-15",
    time: "11:46 AM",
    duration: "3 min",
    title: "Prayer for the Bereaved Family",
    lead: "Rev. Dr. Freeman Osei-Tete",
    roleOrAffiliation: "Officiating Minister",
    type: "prayer",
    notes: "Special pastoral prayer of consolation, peace, and protection over the family.",
  },
  {
    id: "prog-16",
    time: "11:49 AM",
    duration: "3 min",
    title: "Closing Hymn: To God Be The Glory",
    lead: "Congregation",
    type: "hymn",
    hymnRefId: "hymn-7",
    notes: "Thanksgiving for a life powerfully lived and eternal redemption.",
  },
  {
    id: "prog-17",
    time: "11:52 AM",
    duration: "2 min",
    title: "Benediction & Closing",
    lead: "Rev. Dr. Freeman Osei-Tete",
    roleOrAffiliation: "Officiating Minister",
    type: "closing",
    notes: "Final apostolic blessing followed by recessional music.",
  },
];

export const HYMNS: Hymn[] = [
  {
    id: "hymn-1",
    orderNumber: 1,
    title: "Amazing Grace",
    author: "John Newton (1725–1807)",
    hymnTune: "New Britain",
    category: "Grace & Assurance",
    stanzas: [
      {
        number: 1,
        lines: [
          "Amazing grace! how sweet the sound,",
          "That saved a wretch like me!",
          "I once was lost, but now am found,",
          "Was blind, but now I see.",
        ],
      },
      {
        number: 2,
        lines: [
          "'Twas grace that taught my heart to fear,",
          "And grace my fears relieved;",
          "How precious did that grace appear",
          "The hour I first believed!",
        ],
      },
      {
        number: 3,
        lines: [
          "Through many dangers, toils, and snares,",
          "I have already come;",
          "'Tis grace hath brought me safe thus far,",
          "And grace will lead me home.",
        ],
      },
      {
        number: 4,
        lines: [
          "When we've been there ten thousand years,",
          "Bright shining as the sun,",
          "We've no less days to sing God's praise",
          "Than when we first begun.",
        ],
      },
    ],
  },
  {
    id: "hymn-2",
    orderNumber: 2,
    title: "It Is Well With My Soul",
    author: "Horatio G. Spafford (1828–1888)",
    hymnTune: "Ville du Havre (Philip P. Bliss)",
    category: "Peace & Consolation",
    stanzas: [
      {
        number: 1,
        lines: [
          "When peace, like a river, attendeth my way,",
          "When sorrows like sea billows roll;",
          "Whatever my lot, Thou hast taught me to say,",
          "It is well, it is well with my soul.",
        ],
      },
      {
        isRefrain: true,
        lines: [
          "It is well with my soul,",
          "It is well, it is well with my soul.",
        ],
      },
      {
        number: 2,
        lines: [
          "Though Satan should buffet, though trials should come,",
          "Let this blest assurance control,",
          "That Christ has regarded my helpless estate,",
          "And hath shed His own blood for my soul.",
        ],
      },
      {
        isRefrain: true,
        lines: [
          "It is well with my soul,",
          "It is well, it is well with my soul.",
        ],
      },
      {
        number: 3,
        lines: [
          "My sin—oh, the bliss of this glorious thought!—",
          "My sin, not in part but the whole,",
          "Is nailed to the cross, and I bear it no more,",
          "Praise the Lord, praise the Lord, O my soul!",
        ],
      },
      {
        isRefrain: true,
        lines: [
          "It is well with my soul,",
          "It is well, it is well with my soul.",
        ],
      },
      {
        number: 4,
        lines: [
          "And Lord, haste the day when my faith shall be sight,",
          "The clouds be rolled back as a scroll;",
          "The trump shall resound, and the Lord shall descend,",
          "Even so, it is well with my soul.",
        ],
      },
      {
        isRefrain: true,
        lines: [
          "It is well with my soul,",
          "It is well, it is well with my soul.",
        ],
      },
    ],
  },
  {
    id: "hymn-3",
    orderNumber: 3,
    title: "Great Is Thy Faithfulness",
    author: "Thomas O. Chisholm (1866–1960)",
    hymnTune: "Faithfulness (William M. Runyan)",
    category: "Faithfulness & Hope",
    stanzas: [
      {
        number: 1,
        lines: [
          "Great is Thy faithfulness, O God my Father,",
          "There is no shadow of turning with Thee;",
          "Thou changest not, Thy compassions, they fail not;",
          "As Thou hast been Thou forever wilt be.",
        ],
      },
      {
        isRefrain: true,
        lines: [
          "Great is Thy faithfulness! Great is Thy faithfulness!",
          "Morning by morning new mercies I see;",
          "All I have needed Thy hand hath provided—",
          "Great is Thy faithfulness, Lord, unto me!",
        ],
      },
      {
        number: 2,
        lines: [
          "Summer and winter, and springtime and harvest,",
          "Sun, moon and stars in their courses above,",
          "Join with all nature in manifold witness",
          "To Thy great faithfulness, mercy and love.",
        ],
      },
      {
        isRefrain: true,
        lines: [
          "Great is Thy faithfulness! Great is Thy faithfulness!",
          "Morning by morning new mercies I see;",
          "All I have needed Thy hand hath provided—",
          "Great is Thy faithfulness, Lord, unto me!",
        ],
      },
      {
        number: 3,
        lines: [
          "Pardon for sin and a peace that endureth,",
          "Thine own dear presence to cheer and to guide;",
          "Strength for today and bright hope for tomorrow,",
          "Blessings all mine, with ten thousand beside!",
        ],
      },
      {
        isRefrain: true,
        lines: [
          "Great is Thy faithfulness! Great is Thy faithfulness!",
          "Morning by morning new mercies I see;",
          "All I have needed Thy hand hath provided—",
          "Great is Thy faithfulness, Lord, unto me!",
        ],
      },
    ],
  },
  {
    id: "hymn-4",
    orderNumber: 4,
    title: "What A Friend We Have In Jesus",
    author: "Joseph M. Scriven (1819–1886)",
    hymnTune: "Converse (Charles C. Converse)",
    category: "Comfort in Prayer",
    stanzas: [
      {
        number: 1,
        lines: [
          "What a friend we have in Jesus,",
          "All our sins and griefs to bear!",
          "What a privilege to carry",
          "Everything to God in prayer!",
          "O what peace we often forfeit,",
          "O what needless pain we bear,",
          "All because we do not carry",
          "Everything to God in prayer.",
        ],
      },
      {
        number: 2,
        lines: [
          "Have we trials and temptations?",
          "Is there trouble anywhere?",
          "We should never be discouraged;",
          "Take it to the Lord in prayer.",
          "Can we find a friend so faithful",
          "Who will all our sorrows share?",
          "Jesus knows our every weakness;",
          "Take it to the Lord in prayer.",
        ],
      },
      {
        number: 3,
        lines: [
          "Are we weak and heavy laden,",
          "Cumbered with a load of care?",
          "Precious Savior, still our refuge,",
          "Take it to the Lord in prayer.",
          "Do thy friends despise, forsake thee?",
          "Take it to the Lord in prayer;",
          "In His arms He'll take and shield thee,",
          "Thou wilt find a solace there.",
        ],
      },
    ],
  },
  {
    id: "hymn-5",
    orderNumber: 5,
    title: "Blessed Assurance",
    author: "Fanny J. Crosby (1820–1915)",
    hymnTune: "Assurance (Phoebe P. Knapp)",
    category: "Praise & Assurance",
    stanzas: [
      {
        number: 1,
        lines: [
          "Blessed assurance, Jesus is mine!",
          "O what a foretaste of glory divine!",
          "Heir of salvation, purchase of God,",
          "Born of His Spirit, washed in His blood.",
        ],
      },
      {
        isRefrain: true,
        lines: [
          "This is my story, this is my song,",
          "Praising my Savior all the day long;",
          "This is my story, this is my song,",
          "Praising my Savior all the day long.",
        ],
      },
      {
        number: 2,
        lines: [
          "Perfect submission, perfect delight,",
          "Visions of rapture now burst on my sight;",
          "Angels descending, bring from above",
          "Echoes of mercy, whispers of love.",
        ],
      },
      {
        isRefrain: true,
        lines: [
          "This is my story, this is my song,",
          "Praising my Savior all the day long;",
          "This is my story, this is my song,",
          "Praising my Savior all the day long.",
        ],
      },
      {
        number: 3,
        lines: [
          "Perfect submission, all is at rest,",
          "I in my Savior am happy and blest,",
          "Watching and waiting, looking above,",
          "Filled with His goodness, lost in His love.",
        ],
      },
      {
        isRefrain: true,
        lines: [
          "This is my story, this is my song,",
          "Praising my Savior all the day long;",
          "This is my story, this is my song,",
          "Praising my Savior all the day long.",
        ],
      },
    ],
  },
  {
    id: "hymn-6",
    orderNumber: 6,
    title: "Holy, Holy, Holy! Lord God Almighty",
    author: "Reginald Heber (1783–1826)",
    hymnTune: "Nicaea (John B. Dykes)",
    category: "Adoration & Majesty",
    stanzas: [
      {
        number: 1,
        lines: [
          "Holy, holy, holy! Lord God Almighty!",
          "Early in the morning our song shall rise to Thee;",
          "Holy, holy, holy, merciful and mighty!",
          "God in three Persons, blessed Trinity!",
        ],
      },
      {
        number: 2,
        lines: [
          "Holy, holy, holy! All the saints adore Thee,",
          "Casting down their golden crowns around the glassy sea;",
          "Cherubim and seraphim falling down before Thee,",
          "Which wert, and art, and evermore shalt be.",
        ],
      },
      {
        number: 3,
        lines: [
          "Holy, holy, holy! Though the darkness hide Thee,",
          "Though the eye of sinful man Thy glory may not see;",
          "Only Thou art holy; there is none beside Thee,",
          "Perfect in power, in love, and purity.",
        ],
      },
      {
        number: 4,
        lines: [
          "Holy, holy, holy! Lord God Almighty!",
          "All Thy works shall praise Thy Name, in earth, and sky, and sea;",
          "Holy, holy, holy; merciful and mighty!",
          "God in three Persons, blessed Trinity!",
        ],
      },
    ],
  },
  {
    id: "hymn-7",
    orderNumber: 7,
    title: "To God Be The Glory",
    author: "Fanny J. Crosby (1820–1915)",
    hymnTune: "To God Be the Glory (William H. Doane)",
    category: "Praise & Victory",
    stanzas: [
      {
        number: 1,
        lines: [
          "To God be the glory, great things He hath done;",
          "So loved He the world that He gave us His Son,",
          "Who yielded His life an atonement for sin,",
          "And opened the life gate that all may go in.",
        ],
      },
      {
        isRefrain: true,
        lines: [
          "Praise the Lord, praise the Lord,",
          "Let the earth hear His voice!",
          "Praise the Lord, praise the Lord,",
          "Let the people rejoice!",
          "O come to the Father, through Jesus the Son,",
          "And give Him the glory, great things He hath done.",
        ],
      },
      {
        number: 2,
        lines: [
          "O perfect redemption, the purchase of blood,",
          "To every believer the promise of God;",
          "The vilest offender who truly believes,",
          "That moment from Jesus a pardon receives.",
        ],
      },
      {
        isRefrain: true,
        lines: [
          "Praise the Lord, praise the Lord,",
          "Let the earth hear His voice!",
          "Praise the Lord, praise the Lord,",
          "Let the people rejoice!",
          "O come to the Father, through Jesus the Son,",
          "And give Him the glory, great things He hath done.",
        ],
      },
      {
        number: 3,
        lines: [
          "Great things He hath taught us, great things He hath done,",
          "And great our rejoicing through Jesus the Son;",
          "But purer, and higher, and greater will be",
          "Our wonder, our transport, when Jesus we see.",
        ],
      },
      {
        isRefrain: true,
        lines: [
          "Praise the Lord, praise the Lord,",
          "Let the earth hear His voice!",
          "Praise the Lord, praise the Lord,",
          "Let the people rejoice!",
          "O come to the Father, through Jesus the Son,",
          "And give Him the glory, great things He hath done.",
        ],
      },
    ],
  },
];
