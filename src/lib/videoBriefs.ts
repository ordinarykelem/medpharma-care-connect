export type VideoBrief = {
  id: string;
  language: string;
  hook: string;
  core: string;
  visuals: string;
  aiPrompt: string;
  freepikKeywords: string;
  category: "Condition Deep-Dive" | "Myth Buster" | "Health Tip" | "Routine Adherence" | "Seasonal" | "App Feature";
};

export const VIDEO_BRIEFS: VideoBrief[] = [
  {
    id: "V-001",
    category: "Condition Deep-Dive",
    language: "Professional English (Ghanaian Accent)",
    hook: "Your heart is working too hard.",
    core: "High blood pressure is silent. It strains your heart every second. Check your numbers weekly — it's the only way to know.",
    visuals: "Close-up anatomical 3D heart beating -> Slow transition to a Ghanaian man having his BP checked.",
    aiPrompt: "Cinematic 3D animation of a human heart beating under clinical lighting. Transparent chest cavity showing arteries. 4k, medical visualization.",
    freepikKeywords: "Human heart anatomical, African man blood pressure check"
  },
  {
    id: "V-002",
    category: "Condition Deep-Dive",
    language: "Ghanaian Pidgin",
    hook: "That extra salt go cost you!",
    core: "Too much salt dey make your heart work overtime. Small change for your soup today, go save your heart for tomorrow.",
    visuals: "Person pouring salt into a bowl -> Cut to a glowing heart graphic showing pressure -> Ghanaian woman cooking in a modern kitchen.",
    aiPrompt: "A glowing 3D heart graphic showing pressure waves. Split screen with a Ghanaian woman happily cooking in a vibrant kitchen. 4k.",
    freepikKeywords: "Pouring salt, Healthy heart graphic, Ghanaian woman cooking"
  },
  {
    id: "V-004",
    category: "Condition Deep-Dive",
    language: "Professional English",
    hook: "Your body's fuel sensor.",
    core: "Diabetes means your body's sugar sensor needs a bit of help. Routine medication keeps the balance steady so you can keep moving.",
    visuals: "Stylized 3D Pancreas glowing -> Blood sugar monitor showing a steady reading -> Ghanaian woman jogging.",
    aiPrompt: "Anatomically correct 3D pancreas glowing with blue energy. Transition to a close-up of a digital blood glucose meter. 4k, medical tech.",
    freepikKeywords: "Pancreas anatomical, Blood glucose meter, African woman jogging"
  },
  {
    id: "V-005",
    category: "Condition Deep-Dive",
    language: "Ghanaian Pidgin",
    hook: "Free your breath!",
    core: "If your lungs dey tight, no wait for attack before you look for your inhaler. Daily adherence keeps the air flowing free.",
    visuals: "Animated lungs expanding and contracting -> Ghanaian man using an inhaler -> Walking through a garden.",
    aiPrompt: "3D animation of human lungs breathing deeply. Transition to a Ghanaian man using a blue inhaler in a lush garden. 4k, realistic.",
    freepikKeywords: "Lungs animation, African man using inhaler, Lush garden Ghana"
  },
  {
    id: "V-007",
    category: "Myth Buster",
    language: "Ghanaian Pidgin",
    hook: "Chilled water dey give flu?",
    core: "Lie! Cold water no be the cause. Viruses and germs be the problem. Wash your hands more, no be the ice block.",
    visuals: "Man drinking ice-cold water -> Large 'FALSE' stamp on screen -> Montage of hand washing.",
    aiPrompt: "Ghanaian man drinking a glass of ice-cold water on a hot day. Large red 'FALSE' stamp overlays the screen. 4k.",
    freepikKeywords: "Man drinking cold water, Hand washing African, False stamp graphic"
  },
  {
    id: "V-077",
    category: "App Feature",
    language: "Ghanaian Pidgin",
    hook: "How you go know say your medicine be original?",
    core: "Every receipt for MedPharma app get manufacturer batch number. Use am verify say your medicine be the real deal. No fakes here.",
    visuals: "Close-up of a medicine box batch number -> Phone scanning a QR code -> Green checkmark.",
    aiPrompt: "Close-up of a high-tech smartphone scanning a QR code on a clinical medicine box. A green hologram checkmark appears. 4k.",
    freepikKeywords: "Medicine batch number, QR code scan, Green checkmark icon"
  },
  {
    id: "V-026",
    category: "Condition Deep-Dive",
    language: "Professional English",
    hook: "Your body's master filter.",
    core: "Your kidneys filter everything you consume. High blood pressure and sugar can clog the system. Routine medication keeps the filters clear.",
    visuals: "3D glowing kidneys -> Water flowing through a clean filter -> Ghanaian man smiling and drinking water.",
    aiPrompt: "Cinematic 3D animation of human kidneys with a glowing filter effect. Water ripples and clear light beams. 4k medical visualization.",
    freepikKeywords: "Kidney anatomical, Water filter, African man drinking water"
  },
  {
    id: "V-029",
    category: "Myth Buster",
    language: "Ghanaian Pidgin",
    hook: "Sweat no be medicine o!",
    core: "People say 'sweat am out' when you get fever. Lie! You go just get dehydrated. Drink water and take your routine meds instead.",
    visuals: "Person under heavy blankets sweating -> Red 'X' -> Man drinking water and checking temperature.",
    aiPrompt: "A person shivering under many blankets. A large red 'X' mark. Transition to a man drinking a cool glass of water. 4k.",
    freepikKeywords: "Person sweating under blanket, Water glass, Thermometer African"
  },
  {
    id: "V-032",
    category: "Health Tip",
    language: "Professional English",
    hook: "Stress is a heart issue.",
    core: "Constant stress raises your blood pressure. 5 minutes of deep breathing today protects your heart for years. Breathe in.",
    visuals: "Stressful traffic scene in Accra -> Transition to calm nature -> Person breathing deeply.",
    aiPrompt: "Time-lapse of heavy traffic in Accra at dusk. Smooth transition to a peaceful forest clearing with soft sunlight. 4k.",
    freepikKeywords: "Accra traffic, Calm nature background, Deep breathing African"
  },
  {
    id: "V-051",
    category: "Routine Adherence",
    language: "Professional English",
    hook: "Feeling better isn't the finish line.",
    core: "Just because the symptoms are gone doesn't mean the condition is. Routine care is about staying better, not just getting better.",
    visuals: "Runner stopping before the finish line -> Red 'X' -> Person continuing to take medication even while smiling.",
    aiPrompt: "A runner stops just before a white finish line. A red warning icon appears. Transition to a person happily taking a vitamin/pill. 4k.",
    freepikKeywords: "Runner stopping, African man taking medicine, Victory line"
  },
  {
    id: "V-054",
    category: "Seasonal",
    language: "Ghanaian Pidgin",
    hook: "The rain dey come, mosquitoes dey follow.",
    core: "Rainy season means more mosquitoes. Use your nets, clear stagnant water, and keep your routine health strong.",
    visuals: "Rain falling on Accra streets -> Person hanging a mosquito net -> MedPharma app showing malaria test booking.",
    aiPrompt: "Heavy tropical rain falling on a street in Accra. Soft transition to a mother hanging a white mosquito net over a bed. 4k.",
    freepikKeywords: "Rain in Accra, Hanging mosquito net, African man phone app"
  },
  {
    id: "V-082",
    category: "Routine Adherence",
    language: "Ghanaian Pidgin",
    hook: "Grandma know say health be wealth.",
    core: "She no dey play with her routine meds. That's why she still dey dance with her grandkids. Be like Grandma.",
    visuals: "Elderly Ghanaian woman dancing with children -> Close-up of her smiling face -> Showing her pill organizer.",
    aiPrompt: "Vibrant footage of an elderly Ghanaian woman in Kente cloth dancing joyfully with small children. Warm sunlight. 4k.",
    freepikKeywords: "Elderly African woman dancing, Happy grandkids, Pill organizer"
  },
  {
    id: "V-003",
    category: "Routine Adherence",
    language: "English (Warm/Relatable)",
    hook: "Don't skip the rhythm.",
    core: "Routine heart medication works best when it's consistent. Missing one dose breaks the rhythm your heart depends on.",
    visuals: "Heartbeat monitor line -> Ghanaian man taking a pill with water -> Smiling family in background.",
    aiPrompt: "A glowing red heartbeat line (ECG) across a black background. Transition to a Ghanaian man taking medicine with a calm smile. 4k.",
    freepikKeywords: "ECG line, African man taking medicine, Happy African family"
  },
  {
    id: "V-006",
    category: "Condition Deep-Dive",
    language: "English (Empowering)",
    hook: "Movement is medicine.",
    core: "Joint stiffness shouldn't stop your day. Consistent routine care keeps the inflammation down and your mobility up.",
    visuals: "Close-up of a knee or hand joint graphic -> Ghanaian woman dancing at a social event -> MedPharma app logo.",
    aiPrompt: "3D animation of a knee joint showing lubrication and movement. Transition to a Ghanaian woman dancing at a party. 4k.",
    freepikKeywords: "Joint anatomical graphic, African woman dancing, Senior fitness Africa"
  },
  {
    id: "V-008",
    category: "Myth Buster",
    language: "English (Educational)",
    hook: "Is your medicine 'too heavy'?",
    core: "Taking half your dose because it's 'strong' doesn't help. It only makes the sickness stronger. Take exactly what the doctor ordered.",
    visuals: "Hand breaking a pill in half -> Red 'X' -> Pharmacist explaining a prescription.",
    aiPrompt: "Macro shot of a hand breaking a white pill in half. A large red 'X' overlays the shot. Transition to a professional pharmacist. 4k.",
    freepikKeywords: "Breaking pill in half, African pharmacist consulting, Warning icon"
  },
  {
    id: "V-009",
    category: "Health Tip",
    language: "Ghanaian Pidgin",
    hook: "You no need gym to stay fit.",
    core: "Just 20 minutes brisk walk every morning. Your heart go thank you, your joints go free. Start today!",
    visuals: "Man in sneakers walking briskly on a paved road in Accra -> Heart icon glowing.",
    aiPrompt: "Brisk morning walk on a paved street in Accra. Focus on sneakers and confident movement. A glowing heart icon in the corner. 4k.",
    freepikKeywords: "African man walking briskly, Healthy heart icon, Outdoor morning walk"
  },
  {
    id: "V-010",
    category: "Health Tip",
    language: "English (Professional)",
    hook: "Sleep is a medical necessity.",
    core: "7 hours of rest isn't a luxury. It's when your body repairs your heart and brain. Put the phone down tonight.",
    visuals: "Phone screen in the dark -> Transition to a Ghanaian woman sleeping peacefully -> Brain activity graphic.",
    aiPrompt: "A smartphone glowing in a dark room. Transition to a Ghanaian woman sleeping soundly on a white pillow. 4k.",
    freepikKeywords: "Phone in dark, African woman sleeping, Brain activity animation"
  },
  {
    id: "V-028",
    category: "Condition Deep-Dive",
    language: "English (Educational)",
    hook: "The pressure you can't feel.",
    core: "Eye pressure can steal your vision without warning. Daily eye drops aren't just for comfort — they're for keeping your world bright.",
    visuals: "Close-up of a human eye with pressure lines -> Ghanaian man using eye drops -> Sunset over Accra.",
    aiPrompt: "Extreme close-up of a human eye. Transition to a man using eye drops with a sunset view of Accra in the background. 4k.",
    freepikKeywords: "Human eye close-up, African man eye drops, Accra sunset"
  },
  {
    id: "V-030",
    category: "Myth Buster",
    language: "English (Respectful/Educational)",
    hook: "Herbs are not a replacement.",
    core: "Bitter herbs may feel natural, but they don't replace clinical medication for blood sugar. Only routine care provides safety.",
    visuals: "Fresh herbs in a bowl -> Split screen with a blister pack of pills -> African doctor nodding.",
    aiPrompt: "Split screen: Traditional green herbs in a clay bowl vs. modern pill blister pack. A doctor nods in approval of the pills. 4k.",
    freepikKeywords: "Fresh herbs bowl, Pill blister pack, African doctor smiling"
  },
  {
    id: "V-052",
    category: "Routine Adherence",
    language: "Ghanaian Pidgin",
    hook: "Medicine no dey go weekend o!",
    core: "Don't say because it's Saturday you'll skip your dose. Your heart and sugar level no dey holiday. Routine care be 24/7.",
    visuals: "Calendar showing Saturday -> Party scene blurred in background -> Clear shot of a pill box for the weekend.",
    aiPrompt: "A flip calendar showing 'Saturday'. In the background, a blurred party scene. In the foreground, a clear pill box. 4k.",
    freepikKeywords: "Calendar Saturday, African party background, Weekly pill organizer"
  },
  {
    id: "V-053",
    category: "Routine Adherence",
    language: "English (Inspiring)",
    hook: "Health that works in the background.",
    core: "FulLife is like a quiet rhythm. You live your life, and we ensure your routine care never skips a beat. Peace of mind delivered.",
    visuals: "Ghanaian woman playing with her children -> Smooth montage of a pharmacy delivery -> MedPharma logo.",
    aiPrompt: "Ghanaian mother laughing and playing with her kids in a park. Smooth transition to a MedPharma delivery package. 4k.",
    freepikKeywords: "African mother children, Pharmacy delivery bike, Peaceful smile African"
  },
  {
    id: "V-055",
    category: "Seasonal",
    language: "English (Educational)",
    hook: "Dry air, dry body.",
    core: "During Harmattan, you lose moisture faster than you think. Keep your routine medication effective by staying doubled up on water.",
    visuals: "Dusty Accra skyline -> Person with dry lips drinking water -> Water splashing in slow motion.",
    aiPrompt: "Dusty, hazy Harmattan skyline of Accra. Close-up of water splashing into a glass. 4k, cinematic.",
    freepikKeywords: "Dusty city skyline, African woman drinking water, Water splash"
  },
  {
    id: "V-056",
    category: "Seasonal",
    language: "Ghanaian Pidgin",
    hook: "The sun hot, your heart dey work!",
    core: "Heat makes your heart pump faster. If you get pressure, stay for shade and take your routine meds. No over-work your heart.",
    visuals: "Blazing sun icon -> Ghanaian man sitting under a fan -> Heart rate monitor graphic.",
    aiPrompt: "A blazing yellow sun icon. Transition to a Ghanaian man resting under a ceiling fan in a cool room. 4k.",
    freepikKeywords: "Hot sun icon, African man sitting fan, Heart rate monitor"
  },
  {
    id: "V-057",
    category: "Health Tip",
    language: "English (Relatable)",
    hook: "More than just a spice.",
    core: "Ginger is a natural anti-inflammatory. While it doesn't replace your routine meds, adding it to your tea helps soothe your system.",
    visuals: "Fresh ginger being sliced -> Steam rising from a cup of tea -> Ghanaian woman enjoying a warm drink.",
    aiPrompt: "Macro shot of fresh ginger being sliced on a wooden board. Steam rising from a porcelain cup. 4k.",
    freepikKeywords: "Slicing ginger, Tea steam, African woman drinking tea"
  },
  {
    id: "V-076",
    category: "App Feature",
    language: "Professional English",
    hook: "Got a physical prescription?",
    core: "Don't stress about the handwriting. Just snap a clear picture and upload it in the MedPharma app. We'll handle the rest.",
    visuals: "Hand holding a paper prescription -> Camera flash -> Phone screen showing successful upload.",
    aiPrompt: "Close-up of a hand holding a paper prescription. A bright camera flash. Transition to a 'Upload Successful' screen. 4k.",
    freepikKeywords: "Paper prescription, Phone camera flash, Mobile app success"
  },
  {
    id: "V-078",
    category: "App Feature",
    language: "English (Convenient)",
    hook: "Never run out again.",
    core: "Our auto-refill service tracks your routine care. We'll alert you and deliver your next batch before you even finish the last one.",
    visuals: "Empty pill bottle -> Transition to a new, full bottle being delivered -> Ghanaian man giving a thumbs up.",
    aiPrompt: "An empty plastic pill bottle. Transition to a courier handing over a fresh MedPharma package. 4k.",
    freepikKeywords: "Empty pill bottle, Delivery package African, Thumbs up African man"
  },
  {
    id: "V-079",
    category: "Health Tip",
    language: "Ghanaian Pidgin",
    hook: "Sugar dey hide for your soda!",
    core: "One small bottle of soda fit get 10 cubes of sugar. If you get sugar issues, stick to water. Your body go celebrate.",
    visuals: "Person pouring sugar cubes into a soda bottle -> Transition to a clear, cold glass of water -> Ghanaian woman smiling.",
    aiPrompt: "Slow motion shot of sugar cubes falling into a dark soda bottle. Transition to a clear, refreshing glass of water. 4k.",
    freepikKeywords: "Sugar cubes, Soda bottle, Glass of water"
  },
  {
    id: "V-080",
    category: "Health Tip",
    language: "English (Educational)",
    hook: "The 20-minute power reset.",
    core: "A short afternoon nap can lower your blood pressure and boost your focus. Keep it under 30 minutes to stay sharp.",
    visuals: "Office setting in Accra -> Ghanaian man resting his head on his desk -> Rising sun/energy icon.",
    aiPrompt: "A Ghanaian man in a professional office setting resting his head on his arms on a desk. A glowing sun icon. 4k.",
    freepikKeywords: "African man napping office, Energy icon, Sun rising graphic"
  },
  {
    id: "V-081",
    category: "Routine Adherence",
    language: "Professional English",
    hook: "Start your day with certainty.",
    core: "Your morning dose is the foundation of your day. Consistency in routine care isn't just a habit; it's a commitment to your future self.",
    visuals: "Ghanaian man waking up -> Taking a pill with a clear glass of water -> Sunlight streaming into a bedroom.",
    aiPrompt: "Cinematic shot of a Ghanaian man waking up in a bright bedroom, smiling as he reaches for water. 4k.",
    freepikKeywords: "African man morning, Drinking water, Pill morning routine"
  },
  {
    id: "V-011",
    category: "Condition Deep-Dive",
    language: "Professional English",
    hook: "The heart needs a vacation too.",
    core: "When you skip your routine heart meds, your heart never gets to rest. Consistency is how you give your heart the break it needs.",
    visuals: "Ghanaian man on a beach chair -> Close-up of a resting heart icon -> Calming blue waves.",
    aiPrompt: "A peaceful shot of a Ghanaian man in his 50s relaxing on a tropical beach in Ghana. Soft blue waves in the background. 4k.",
    freepikKeywords: "African man beach, Resting heart icon, Tropical waves"
  },
  {
    id: "V-012",
    category: "Myth Buster",
    language: "Ghanaian Pidgin",
    hook: "Garlic no be heart medicine.",
    core: "People say eat garlic and your pressure go drop. It get small health benefit, but it no replace your routine pills. Don't play with your life.",
    visuals: "Close-up of garlic cloves -> Red 'X' -> Professional medication box.",
    aiPrompt: "Macro shot of garlic cloves on a dark surface. A large red 'X' overlays. Transition to a clinical blister pack of pills. 4k.",
    freepikKeywords: "Garlic cloves, Pill blister pack, Medical warning"
  },
  {
    id: "V-015",
    category: "Health Tip",
    language: "English (Empowering)",
    hook: "Your 10,000 steps story.",
    core: "Walking isn't just about weight; it's about vascular health. Every step makes your routine medication 10% more effective.",
    visuals: "Walking app screen counting steps -> Ghanaian woman walking through a busy market -> Energetic background music.",
    aiPrompt: "POV shot of someone walking through a vibrant, colorful Ghanaian market. Focus on the rhythmic movement and bright colors. 4k.",
    freepikKeywords: "African market walking, Fitness app, Vibrant street Ghana"
  },
  {
    id: "V-020",
    category: "Routine Adherence",
    language: "Ghanaian Pidgin",
    hook: "No wait for the pain.",
    core: "If you wait for your joints to pain you before you take your meds, you already late. Routine care means you stop the pain before it start.",
    visuals: "Person grimacing and touching their knee -> Transition to them walking smoothly -> MedPharma app logo.",
    aiPrompt: "A woman touches her knee in pain, but then smiles and walks confidently across a room. Smooth, professional lighting. 4k.",
    freepikKeywords: "Joint pain African, Confident walking, Medical app"
  },
  {
    id: "V-025",
    category: "App Feature",
    language: "Professional English",
    hook: "The Lab is in your pocket.",
    core: "Book your routine blood sugar and BP checks via the MedPharma app. We come to you, so your routine stays seamless.",
    visuals: "Mobile app screen showing 'Book a Lab Test' -> Healthcare worker arriving at a home -> Smiling patient.",
    aiPrompt: "A professional healthcare worker in a clean uniform knocking on a modern door in Accra. They are carrying a medical kit. 4k.",
    freepikKeywords: "Healthcare worker Ghana, Medical home service, App booking"
  },
  {
    id: "V-035",
    category: "Condition Deep-Dive",
    language: "Ghanaian Pidgin",
    hook: "Your Lungs deserve fresh air.",
    core: "Asthma no be curse, it be condition. Use your routine care daily and you go fit run, play, and breathe easy like everybody.",
    visuals: "Child running with a kite -> Close-up of healthy lungs animation -> MedPharma logo.",
    aiPrompt: "A young Ghanaian boy running with a bright kite in a large open field under a blue sky. Transition to healthy 3D lungs. 4k.",
    freepikKeywords: "African child kite, Healthy lungs, Open field Ghana"
  },
  {
    id: "V-040",
    category: "Health Tip",
    language: "English (Professional)",
    hook: "The salt you don't see.",
    core: "Packaged foods and snacks are full of hidden salt. Read the labels to protect your heart. Fresh is always better.",
    visuals: "Magnifying glass over a food label -> Salty snacks vs. fresh vegetables -> Heart health icon.",
    aiPrompt: "A magnifying glass focusing on the 'Sodium' line of a food nutrition label. Transition to a colorful pile of fresh vegetables. 4k.",
    freepikKeywords: "Food label sodium, Fresh vegetables African, Heart icon"
  },
  {
    id: "V-045",
    category: "Myth Buster",
    language: "English (Educational)",
    hook: "Bitter isn't always better.",
    core: "There's a myth that if a medicine isn't bitter, it's not working. That's false. Effective routine care is based on science, not taste.",
    visuals: "Person tasting something bitter and making a face -> Red 'X' -> Smoothly taking a modern capsule.",
    aiPrompt: "A person makes a sour face after tasting a dark liquid. A large red 'X'. Transition to someone calmly swallowing a capsule. 4k.",
    freepikKeywords: "Bitter taste face, Red X, Taking capsule African"
  },
  {
    id: "V-060",
    category: "Condition Deep-Dive",
    language: "Professional English",
    hook: "Your arteries are a highway.",
    core: "Hypertension is like a traffic jam in your blood vessels. Routine medication keeps the lanes open and the flow smooth.",
    visuals: "3D animation of blood flowing through clear arteries -> Transition to a busy highway in Accra -> MedPharma logo.",
    aiPrompt: "3D visualization of blood cells flowing smoothly through a transparent artery. Smooth, cinematic motion. 4k.",
    freepikKeywords: "Artery blood flow, Accra highway, Medical animation"
  },
  {
    id: "V-061",
    category: "Health Tip",
    language: "Ghanaian Pidgin",
    hook: "Check your BP for house.",
    core: "You no need go hospital every time to check your pressure. Get small BP machine for house and check am weekly. Knowledge be power.",
    visuals: "Ghanaian man sitting at a table using a digital BP cuff -> Writing the number in a small notebook.",
    aiPrompt: "A Ghanaian man in his late 40s calmly sitting at a wooden dining table, using a modern digital blood pressure monitor on his arm. 4k.",
    freepikKeywords: "African man BP monitor, Home medical check, Digital cuff"
  },
  {
    id: "V-065",
    category: "Condition Deep-Dive",
    language: "Professional English",
    hook: "The Diabetes Foot Check.",
    core: "High blood sugar can affect your nerves. Check your feet daily for small cuts or blisters. Early care prevents big problems.",
    visuals: "Person inspecting their feet in a well-lit room -> Applying moisturizer -> Close-up of healthy skin.",
    aiPrompt: "A person sitting on a bed in a bright room, carefully inspecting the soles of their feet with a small mirror. 4k, health-focused.",
    freepikKeywords: "Foot care diabetes, Mirror inspection, Healthy skin African"
  },
  {
    id: "V-070",
    category: "Routine Adherence",
    language: "Ghanaian Pidgin",
    hook: "Don't let the bottle finish.",
    core: "If your meds finish before you order new one, your routine break. Use MedPharma auto-refill make sure you always get what you need.",
    visuals: "Shaking an empty pill bottle -> Worried expression -> Phone notification for refill delivery.",
    aiPrompt: "A close-up of a hand shaking an empty translucent orange pill bottle. A worried expression on a person's face in the background. 4k.",
    freepikKeywords: "Empty pill bottle, Refill notification, Delivery rider African"
  },
  {
    id: "V-085",
    category: "Health Tip",
    language: "Professional English",
    hook: "The Mediterranean Diet in Ghana.",
    core: "You don't need fancy imports. Local beans, avocado, fish, and greens are your heart's best friends. Healthy eating is local eating.",
    visuals: "Platter of avocado and beans -> Fresh fish in a market -> Smiling family eating together.",
    aiPrompt: "A beautifully arranged plate of local Ghanaian health foods: sliced avocado, boiled beans, and grilled tilapia. 4k.",
    freepikKeywords: "Ghanaian healthy food, Avocado and beans, Fresh fish market"
  },
  {
    id: "V-090",
    category: "App Feature",
    language: "Ghanaian Pidgin",
    hook: "Talk to a doctor for your phone.",
    core: "No wait for long queue for hospital. If you get question about your meds, just chat MedPharma doctor for the app. Fast and easy.",
    visuals: "Person chatting on their phone -> Video call screen with a doctor -> Relief on patient's face.",
    aiPrompt: "A smartphone screen showing a professional video call with a smiling doctor in a white coat. 4k, tech-focused.",
    freepikKeywords: "Telehealth app, Video call doctor, African patient phone"
  },
  {
    id: "V-095",
    category: "Routine Adherence",
    language: "Professional English",
    hook: "The Cost of skipping.",
    core: "One emergency room visit costs more than a year of routine care. Invest in your daily health to save your wealth later.",
    visuals: "Hand putting coins in a jar -> Hospital bed (blurred) -> Clear medication schedule on a wall.",
    aiPrompt: "Macro shot of coins being dropped into a glass jar. Transition to a clean, organized medical schedule hanging on a wall. 4k.",
    freepikKeywords: "Saving money health, Hospital bed blurred, Medical schedule"
  },
  {
    id: "V-100",
    category: "Routine Adherence",
    language: "English & Pidgin Mix",
    hook: "Your 100% is our 100%.",
    core: "You commit to your routine, we commit to your care. Together, we make health a simple, daily reality. MedPharma: 100 videos, 100% for you.",
    visuals: "Collage of diverse Ghanaian faces -> MedPharma team waving -> Final logo animation.",
    aiPrompt: "A vibrant collage of smiling Ghanaian people of all ages. Transition to a professional medical team in white coats waving warmly at the camera. 4k.",
    freepikKeywords: "Smiling Ghanaian people, Medical team waving, MedPharma logo"
  }
];
