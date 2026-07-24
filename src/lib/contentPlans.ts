export type ContentBrief = {
  id: string;
  week: string;
  date: string;
  occasion?: string;
  title: string;
  assetType:
    | "Educational Carousel"
    | "Square Flyer"
    | "Story / WhatsApp Status"
    | "LinkedIn PDF Document"
    | "Newsletter Header"
    | "TikTok Photo Set";
  format: string;
  platforms: string[];
  audience: string;
  hook: string;
  slides?: { title: string; body: string }[];
  body?: string;
  designDirection: string;
  cta: string;
  caption?: string;
  hashtags?: string[];
};

export type ContentPlan = {
  brand: "FulLife" | "MedPharma";
  productNote: string;
  callLine: string;
  appLink: string;
  rules: string[];
  briefs: ContentBrief[];
};

const CALL = "0557560448";
const APP = "https://onelink.to/vhzcxh";

const STD_CTA = `Call ${CALL} or download the MedPharma App: ${APP}`;

// =================================================================
// FULLIFE PLAN — late May (W4), June, July
// =================================================================
export const FULLIFE_PLAN: ContentPlan = {
  brand: "FulLife",
  productNote:
    "FulLife is MedPharma's continuous medication & care programme for people on long-term/routine medication. Never use the word 'chronic' on creative — always say FulLife, consistency, routine medication, or daily adherence.",
  callLine: CALL,
  appLink: APP,
  rules: [
    "Use Black/African models in every lifestyle shot. No stock photos of non-African people.",
    "No emojis on the artwork — keep it clean and clinical-corporate.",
    "FulLife logo top-left on every asset. MedPharma 'Seamless Healthcare' lockup bottom-left.",
    "Every asset must show: phone line " + CALL + " + app QR/link. No exceptions.",
    "Never use the word 'chronic' on a customer-facing graphic. Use FulLife, daily adherence, routine medication, consistency.",
    "Every CTA block must contain BOTH the call line and the app link — never just one.",
  ],
  briefs: [
    // ============ WEEK OF MAY 26 — 31 ============
    {
      id: "fl-may-1",
      week: "Week of Mon 26 May – Sun 1 Jun",
      date: "Mon 26 May 2026",
      occasion: "Africa Day rollover (25 May)",
      title: "Africa Day Rollover — Health is the wealth of the continent",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "General MedPharma followers, with a soft pull toward people on routine medication.",
      hook: "An Africa that lives longer is an Africa that takes its medicine on time.",
      body:
        "Headline : An Africa that lives longer is an Africa that takes its medication on time.\n\n" +
        "Sub-line : FulLife — your daily adherence partner.\n\n" +
        "Supporting line : Built in Ghana for Ghanaians on routine medication. Refills delivered. Reminders that work. A care team that already knows you.",
      designDirection:
        "Visual: A subtle silhouette of the African continent with a close-up portrait of a smiling Ghanaian woman.",
      cta: STD_CTA,
      caption:
        "An Africa that lives longer is an Africa that takes its medicine on time. FulLife brings your routine medication, your reminders and your care team into one quiet rhythm — so you can focus on living. Join the FulLife family today.",
      hashtags: ["#FulLife", "#MedPharmaGH", "#AfricaDay", "#SeamlessHealthcare", "#HealthyGhana"],
    },
    {
      id: "fl-may-2",
      week: "Week of Mon 26 May – Sun 1 Jun",
      date: "Wed 28 May 2026",
      title: "Educational Carousel — 5 quiet wins of staying on your meds",
      assetType: "Educational Carousel",
      format: "1080 x 1350 px (4:5) · 6 slides",
      platforms: ["Instagram", "Facebook"],
      audience: "Adults 35–65 already on routine medication; their adult children.",
      hook: "The reward for taking your medicine isn't a feeling — it's the day you don't notice anything happened.",
      slides: [
        { title: "Slide 1 — Cover", body: "Headline: 5 quiet wins of staying on your meds.\nSub: Brought to you by FulLife." },
        { title: "Slide 2", body: "Headline: A morning that starts on your terms.\nBody: No frantic search for the last pill in the strip." },
        { title: "Slide 3", body: "Headline: Doctor visits that get shorter, not longer.\nBody: Steady numbers mean fewer surprises in consultation." },
        { title: "Slide 4", body: "Headline: Health that stays in your control.\nBody: One emergency admission costs more than a year of consistent care." },
        { title: "Slide 5", body: "Headline: Energy for the people you love.\nBody: Your grandchildren, your students, your patients — they need the version of you that took the dose." },
        { title: "Slide 6 — CTA", body: "Headline: Join the FulLife family today.\nCTA block: " + STD_CTA },
      ],
      designDirection:
        "Visual: Oversized typography and lifestyle photos of Ghanaian subjects.",
      cta: STD_CTA,
      caption:
        "The reward for taking your medicine isn't a feeling — it's the day you don't notice anything happened. Five quiet wins of staying on your routine medication, with FulLife. Swipe →",
      hashtags: ["#FulLife", "#DailyAdherence", "#MedPharmaGH", "#SeamlessHealthcare"],
    },
    {
      id: "fl-may-3",
      week: "Week of Mon 26 May – Sun 1 Jun",
      date: "Fri 30 May 2026",
      title: "WhatsApp Status — Refill before the weekend",
      assetType: "Story / WhatsApp Status",
      format: "1080 x 1920 px (9:16)",
      platforms: ["WhatsApp Status", "Instagram Stories", "Facebook Stories"],
      audience: "Existing customers + cold WhatsApp broadcast list.",
      hook: "Don't let Sunday be the day you realise you've run out.",
      body:
        "Top headline : Don't let Sunday be the day you realise you've run out.\n\n" +
        "Middle: FulLife refills your routine medication BEFORE it finishes.\n\n" +
        "Bottom CTA strip : " + STD_CTA,
      designDirection:
        "Visual: Motion-blurred photo of a delivery rider at dusk.",
      cta: STD_CTA,
    },

    // ============ JUNE ============
    {
      id: "fl-jun-1",
      week: "Week of Mon 1 – Sun 7 Jun",
      date: "Wed 3 Jun 2026",
      title: "FulLife Enrollment Flyer — Auto-refill is the feature",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "People newly diagnosed or just starting routine medication.",
      hook: "Set it once. Live it always.",
      body:
        "Headline: Set it once. Live it always.\n\n" +
        "Sub: Enroll once in FulLife. Your routine medication arrives every month, automatically, with reminders timed to YOUR life — not the pharmacy's hours.\n\n" +
        "Three highlighted bullets :\n" +
        "1. Monthly door-step delivery\n2. Smart reminders that learn your schedule\n3. One care team that already knows your file\n\n" +
        "CTA: " + STD_CTA,
      designDirection:
        "Visual: Hero shot of a FulLife-branded medication pouch being handed from a pharmacist to a patient.",
      cta: STD_CTA,
      caption:
        "Set it once. Live it always. FulLife is the easiest way to never run out of your routine medication again. Enroll today and let us handle the rhythm.",
      hashtags: ["#FulLife", "#AutoRefill", "#MedPharmaGH", "#SeamlessHealthcare"],
    },
    {
      id: "fl-jun-2",
      week: "Week of Mon 8 – Sun 14 Jun",
      date: "Sat 14 Jun 2026",
      occasion: "World Blood Donor Day",
      title: "World Blood Donor Day — The other thing your body donates: consistency",
      assetType: "Educational Carousel",
      format: "1080 x 1350 px (4:5) · 5 slides",
      platforms: ["Instagram", "Facebook", "LinkedIn"],
      audience: "Adults 25–55, civically engaged.",
      hook: "Today we celebrate people who give blood. Tomorrow, give your body something just as life-saving — your daily dose.",
      slides: [
        { title: "Slide 1 — Cover", body: "Headline: World Blood Donor Day.\nSub: To everyone who gives — thank you." },
        { title: "Slide 2", body: "Headline: A pint of blood saves up to 3 lives.\nBody: Generosity, measured." },
        { title: "Slide 3", body: "Headline: A daily dose, taken on time, can save your own.\nBody: Consistency is its own kind of donation — to your future self." },
        { title: "Slide 4", body: "Headline: FulLife makes that consistency effortless.\nBody: Refills. Reminders. A care team that watches the calendar so you don't have to." },
        { title: "Slide 5 — CTA", body: "Headline: Honour the donors. Honour your dose.\nCTA: " + STD_CTA },
      ],
      designDirection:
        "Visual: Large typographic stat '1 PINT = 3 LIVES' and editorial portraits of Ghanaian subjects.",
      cta: STD_CTA,
      caption:
        "Today we honour the people who give blood. Tomorrow — and every day after — give your body the other thing it asks for: your dose, on time. Happy World Blood Donor Day from FulLife and MedPharma.",
      hashtags: ["#WorldBloodDonorDay", "#FulLife", "#MedPharmaGH", "#GiveTheGiftOfLife"],
    },
    {
      id: "fl-jun-3",
      week: "Week of Mon 15 – Sun 21 Jun",
      date: "Sun 21 Jun 2026",
      occasion: "Father's Day (Ghana)",
      title: "Father's Day — The dad who never misses",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "Adult children of fathers on routine medication; fathers themselves.",
      hook: "He never missed your school run. Make sure he never misses his dose.",
      body:
        "Headline : He never missed your school run.\n\n" +
        "Sub : Make sure he never misses his dose.\n\n" +
        "Supporting line : Enroll Dad in FulLife today. Monthly delivery, smart reminders, and a care team that picks up the phone — so the man who carried everyone gets carried, gently, in return.\n\n" +
        "CTA: " + STD_CTA,
      designDirection:
        "Visual: Warm, golden-hour portrait of a Ghanaian father with his adult child.",
      cta: STD_CTA,
      caption:
        "He never missed your school run, your graduation, or that one phone call you needed at midnight. This Father's Day, make sure he never misses his dose. Enroll Dad in FulLife today. 💙",
      hashtags: ["#FathersDay", "#FulLife", "#MedPharmaGH", "#SeamlessHealthcare"],
    },
    {
      id: "fl-jun-4",
      week: "Week of Mon 22 – Sun 28 Jun",
      date: "Wed 24 Jun 2026",
      title: "LinkedIn PDF — FulLife for HR & Benefits Leaders",
      assetType: "LinkedIn PDF Document",
      format: "1080 x 1350 px (4:5) · 8 pages, exported as a single PDF",
      platforms: ["LinkedIn (Document Post)"],
      audience: "HR Directors, Heads of Benefits, CHROs at banks, insurers, telcos, and large corporates in Ghana.",
      hook: "The cheapest medical claim is the one that never gets filed.",
      slides: [
        { title: "Page 1 — Cover", body: "Headline: The cheapest medical claim is the one that never gets filed.\nSub: A 5-minute brief for HR leaders — by FulLife, from MedPharma." },
        { title: "Page 2", body: "Headline: Your most impacted employees are not always the sickest. They are the inconsistent.\nBody: Missed routine medication is the single biggest predictor of an avoidable hospital admission." },
        { title: "Page 3", body: "Headline: One admission can wipe out a year of preventive savings.\nBody: A 3-night admission for an uncontrolled hypertension event in Accra now averages over GHS 9,000 in private care." },
        { title: "Page 4", body: "Headline: FulLife is medication continuity, delivered as an employee benefit.\nBody: Monthly door-step refills · smart reminders · a named care team · in-app e-consultations." },
        { title: "Page 5", body: "Headline: Designed for the schedule of a working professional.\nBody: No queues. No half-day off to visit a pharmacy. Refills land at the office or the gate." },
        { title: "Page 6", body: "Headline: One dashboard for HR. Zero PHI exposure.\nBody: You see uptake and engagement. You never see what anyone is being treated for." },
        { title: "Page 7", body: "Headline: Three ways to deploy.\nBody: 1. Fully employer-funded · 2. Co-paid · 3. Subsidised enrollment with employer sponsorship." },
        { title: "Page 8 — CTA", body: "Headline: Let's run the numbers for your team.\nBody: Reply to this post or email partnerships@medpharma.care.\nCTA block: " + STD_CTA },
      ],
      designDirection:
        "Visual: Editorial style with data callouts and a professional portrait of a Ghanaian executive.",
      cta: STD_CTA,
    },
    {
      id: "fl-jun-5",
      week: "Week of Mon 29 Jun – Sun 5 Jul",
      date: "Tue 30 Jun 2026",
      title: "TikTok Photo Set — The 3 frames of a FulLife day",
      assetType: "TikTok Photo Set",
      format: "1080 x 1920 px (9:16) · 3 still images posted as a TikTok Photo Mode set",
      platforms: ["TikTok", "Instagram Reels (as a 3-image carousel reel)"],
      audience: "25–45, app-comfortable, caregivers of older parents.",
      hook: "Three frames. One quiet system. Zero missed doses.",
      slides: [
        { title: "Frame 1", body: "Visual: phone on a kitchen table, FulLife reminder notification glowing on the lock screen, morning light, half-eaten breakfast.\nOverlay text : 7:42 AM — the reminder lands before the rush." },
        { title: "Frame 2", body: "Visual: hands receiving a FulLife-branded medication pouch at a front gate from a delivery rider.\nOverlay text: Day 28 — the next month arrives before the last pill leaves." },
        { title: "Frame 3", body: "Visual: same person from Frame 1, now mid-laugh with a child / colleague / patient — clearly back in life.\nOverlay text: The point was never the pill. It was the day you got back." },
      ],
      designDirection:
        "Visual: 3-part sequence showing a morning routine, receiving a delivery, and enjoying life.",
      cta: STD_CTA,
      caption:
        "Three frames. One quiet system. Zero missed doses. This is what a FulLife day looks like. Tap to enroll: " + APP,
      hashtags: ["#FulLife", "#MedPharmaGH", "#AccraTikTok", "#GhanaTikTok", "#SeamlessHealthcare"],
    },

    // ============ JULY ============
    {
      id: "fl-jul-1",
      week: "Week of Mon 29 Jun – Sun 5 Jul",
      date: "Wed 1 Jul 2026",
      occasion: "Republic Day (Ghana, public holiday)",
      title: "Republic Day — A republic of citizens who take their dose",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter", "WhatsApp Status (cropped)"],
      audience: "All Ghanaian followers.",
      hook: "A nation is only as strong as the citizens who show up tomorrow.",
      body:
        "Headline: A nation is only as strong as the citizens who show up tomorrow.\n\n" +
        "Sub : Show up. Take the dose. Stay in the story.\n\n" +
        "Supporting line: Happy Republic Day from FulLife and MedPharma — proudly built in Ghana, for Ghana.",
      designDirection:
        "Visual: Typographic focus with a subtle Black Star watermark.",
      cta: STD_CTA,
      caption:
        "A nation is only as strong as the citizens who show up tomorrow. Show up. Take the dose. Stay in the story. Happy Republic Day, Ghana — from FulLife and MedPharma. 🇬🇭",
      hashtags: ["#RepublicDay", "#Ghana60", "#FulLife", "#MedPharmaGH"],
    },
    {
      id: "fl-jul-2",
      week: "Week of Mon 13 – Sun 19 Jul",
      date: "Wed 15 Jul 2026",
      title: "Educational Carousel — What 'auto-refill' actually means",
      assetType: "Educational Carousel",
      format: "1080 x 1350 px (4:5) · 5 slides",
      platforms: ["Instagram", "Facebook"],
      audience: "People who've heard about FulLife but haven't enrolled.",
      hook: "It's not a subscription. It's a relief.",
      slides: [
        { title: "Slide 1 — Cover", body: "Headline: What 'auto-refill' actually means.\nSub: A 60-second explainer from FulLife." },
        { title: "Slide 2", body: "Headline: We count the days, not you.\nBody: From the day you start, we know when month two should land." },
        { title: "Slide 3", body: "Headline: We pack what the doctor wrote — not what we have in stock.\nBody: Your prescription, same brand, same dose, every time." },
        { title: "Slide 4", body: "Headline: We deliver before the strip ends.\nBody: Day 26 of a 30-day supply, the new pack is at your gate." },
        { title: "Slide 5 — CTA", body: "Headline: Less remembering. More living.\nCTA block: " + STD_CTA },
      ],
      designDirection:
        "Visual: Clean, editorial style featuring custom line-work icons (calendar, prescription pad, package, smiling face).",
      cta: STD_CTA,
      caption:
        "It's not a subscription. It's a relief. Here's what auto-refill actually means inside FulLife — in 60 seconds. Swipe →",
      hashtags: ["#FulLife", "#AutoRefill", "#MedPharmaGH"],
    },
    {
      id: "fl-jul-3",
      week: "Week of Mon 27 Jul – Sun 2 Aug",
      date: "Tue 28 Jul 2026",
      occasion: "World Hepatitis Day",
      title: "World Hepatitis Day — The condition is silent. Your routine shouldn't be.",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "LinkedIn", "X / Twitter"],
      audience: "General adult audience; people on long-term hepatitis treatment.",
      hook: "The condition is silent. Your routine shouldn't be.",
      body:
        "Headline: The condition is silent. Your routine shouldn't be.\n\n" +
        "Sub : On World Hepatitis Day, FulLife stands with everyone managing a long-term liver condition.\n\n" +
        "Supporting line: Routine medication, delivered. Reminders that show up. A care team that already knows your history.\n\n" +
        "CTA: " + STD_CTA,
      designDirection:
        "Visual: A single, restrained coral hepatitis awareness ribbon graphic.",
      cta: STD_CTA,
      caption:
        "The condition is silent. Your routine shouldn't be. On World Hepatitis Day, FulLife stands with every Ghanaian managing a long-term liver condition — and with the families who walk it with them. You are not alone.",
      hashtags: ["#WorldHepatitisDay", "#FulLife", "#MedPharmaGH", "#NotAlone"],
    },
    {
      id: "fl-jul-4",
      week: "Week of Mon 27 Jul – Sun 2 Aug",
      date: "Thu 30 Jul 2026",
      title: "Newsletter Header — FulLife: the new standard, six months in",
      assetType: "Newsletter Header",
      format: "1200 x 600 px (Mailchimp Header)",
      platforms: ["Email (Mailchimp)", "LinkedIn cover crop (1584 x 396 — designer to re-export)"],
      audience: "Email subscribers, partners, B2B prospects.",
      hook: "Six months. One quiet promise: never run out.",
      body:
        "Left 55%: Headline : Six months. One quiet promise — never run out.\nSub : FulLife monthly newsletter · July 2026 edition.\n\nRight 45%: composite image of a Ghanaian pharmacist + the MedPharma app screen + a smiling older customer — the same composition language as the existing newsletter header in the brand library, just refreshed with the FulLife wordmark dominant top-right.",
      designDirection:
        "Visual: Composite of a Ghanaian pharmacist, the MedPharma app screen, and a smiling older customer.",
      cta: STD_CTA,
    },    {
      id: "fl-jun-1b",
      week: "Week of Mon 1 – Sun 7 Jun",
      date: "Mon 1 Jun 2026",
      title: "Square Flyer — The hidden risk of missed doses",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: [
        "Instagram",
        "Facebook",
        "X / Twitter"
      ],
      audience: "Adults 35–65 on routine medication.",
      hook: "The most dangerous medication is the one you forgot to take.",
      body: "Headline: The most dangerous medication is the one you forgot to take.\n\nSub : FulLife auto-refills mean zero missed days.\n\nSupporting line: Skipping days breaks your rhythm and risks emergencies. FulLife delivers your routine medication every month before your strip is empty.",
      designDirection: "Visual: A subtle, faded out pharmacy receipt showing a missed refill.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "The most dangerous medication is the one you forgot to take. Don't let a missed dose become an emergency admission. Enroll in FulLife today for seamless monthly delivery.",
      hashtags: [
        "#FulLife",
        "#DailyAdherence",
        "#MedPharmaGH",
        "#SeamlessHealthcare"
      ]
    },
    {
      id: "fl-jun-1c",
      week: "Week of Mon 1 – Sun 7 Jun",
      date: "Fri 5 Jun 2026",
      title: "WhatsApp Status — Doorstep relief",
      assetType: "Story / WhatsApp Status",
      format: "1080 x 1920 px (9:16)",
      platforms: [
        "WhatsApp Status",
        "Instagram Stories",
        "Facebook Stories"
      ],
      audience: "Existing customers + WhatsApp broadcast list.",
      hook: "Friday traffic vs. Doorstep delivery.",
      body: "Top headline : Friday evening Accra traffic?\n\nMiddle : Your routine medication is already at your gate.\n\nBottom CTA strip : Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      designDirection: "Visual: Motion-blurred red taillights in traffic.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh"
    },
    {
      id: "fl-jun-2a",
      week: "Week of Mon 8 – Sun 14 Jun",
      date: "Tue 10 Jun 2026",
      title: "Educational Carousel — 'I feel fine so I stopped'",
      assetType: "Educational Carousel",
      format: "1080 x 1350 px (4:5) · 4 slides",
      platforms: [
        "Instagram",
        "Facebook"
      ],
      audience: "People on routine medication who struggle with consistency.",
      hook: "The most dangerous lie we tell ourselves: 'I feel fine so I stopped taking it.'",
      slides: [
        {
          title: "Slide 1",
          body: "Headline: The most dangerous phrase in healthcare:\nSub: 'I felt fine, so I stopped taking it.'"
        },
        {
          title: "Slide 2",
          body: "Headline: Feeling fine means it's working.\nBody: Routine medication controls the condition. It doesn't always cure it."
        },
        {
          title: "Slide 3",
          body: "Headline: Don't break the streak.\nBody: FulLife delivers your refills automatically, so you never have to make the choice."
        },
        {
          title: "Slide 4 — CTA",
          body: "Headline: Let's keep the streak going.\nCTA block: Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh"
        }
      ],
      designDirection: "Visual: Typographic focus with a bold graph line showing stability.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "Feeling fine doesn't mean you're cured. It means the medication is doing its job. Keep the streak going with FulLife auto-refills.",
      hashtags: [
        "#FulLife",
        "#DailyAdherence",
        "#MedPharmaGH",
        "#SeamlessHealthcare"
      ]
    },
    {
      id: "fl-jun-2b",
      week: "Week of Mon 8 – Sun 14 Jun",
      date: "Thu 12 Jun 2026",
      title: "Square Flyer — Water & Routine",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: [
        "Instagram",
        "Facebook"
      ],
      audience: "General FulLife audience.",
      hook: "A glass of water. A single dose. A whole day won.",
      body: "Headline: A glass of water. A single dose. A whole day won.\n\nSub : FulLife keeps the rhythm simple.\n\nSupporting line: Monthly delivery and smart reminders.",
      designDirection: "Visual: Simple, elegant top-down shot of a glass of water and a small medication pouch on a wooden table.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "A glass of water. A single dose. A whole day won. Let FulLife keep your rhythm simple with automatic monthly deliveries.",
      hashtags: [
        "#FulLife",
        "#DailyAdherence",
        "#MedPharmaGH",
        "#HealthyGhana"
      ]
    },
    {
      id: "fl-jun-3a",
      week: "Week of Mon 15 – Sun 21 Jun",
      date: "Mon 15 Jun 2026",
      title: "Square Flyer — Privacy and discretion",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: [
        "Instagram",
        "Facebook"
      ],
      audience: "Professionals who value privacy in their medical care.",
      hook: "Your health is your business. Delivery is ours.",
      body: "Headline: Your health is your business. Delivery is ours.\n\nSub : FulLife delivers in discreet, secure packaging.\n\nSupporting line: To your office, your gate, or your hands. No labels on the outer package. No questions asked.",
      designDirection: "Visual: A clean, unbranded brown package being handed over.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "Your health is your business. FulLife ensures your routine medication arrives securely and discreetly, wherever you are.",
      hashtags: [
        "#FulLife",
        "#MedPharmaGH",
        "#SeamlessHealthcare"
      ]
    },
    {
      id: "fl-jun-3b",
      week: "Week of Mon 15 – Sun 21 Jun",
      date: "Wed 17 Jun 2026",
      title: "Square Flyer — Supporting the Caregiver",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: [
        "Instagram",
        "Facebook",
        "X / Twitter"
      ],
      audience: "Adult children caring for aging parents.",
      hook: "You do the caring. We'll do the counting.",
      body: "Headline: You do the caring. We'll do the counting.\n\nSub : FulLife takes the mental load off caregivers.\n\nSupporting line: We track the days, schedule the refills, and send the reminders.",
      designDirection: "Visual: Warm portrait of a Ghanaian daughter holding her elderly mother's hands.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "Taking care of someone you love is hard enough without having to count pills and chase prescriptions. Let FulLife handle the logistics.",
      hashtags: [
        "#FulLife",
        "#CaregiverSupport",
        "#MedPharmaGH",
        "#SeamlessHealthcare"
      ]
    },
    {
      id: "fl-jun-4a",
      week: "Week of Mon 22 – Sun 28 Jun",
      date: "Mon 22 Jun 2026",
      title: "WhatsApp Status — Traveling",
      assetType: "Story / WhatsApp Status",
      format: "1080 x 1920 px (9:16)",
      platforms: [
        "WhatsApp Status",
        "Instagram Stories"
      ],
      audience: "Existing customers.",
      hook: "Traveling this weekend? Let your care team know.",
      body: "Top headline : Traveling this weekend?\n\nMiddle : Let your FulLife care team know, and we'll deliver your refill early.\n\nBottom CTA strip : Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      designDirection: "Visual: Close-up of a packed suitcase with a passport.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh"
    },
    {
      id: "fl-jun-4b",
      week: "Week of Mon 22 – Sun 28 Jun",
      date: "Fri 26 Jun 2026",
      title: "Square Flyer — Counterfeit check",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: [
        "Instagram",
        "Facebook",
        "LinkedIn"
      ],
      audience: "Adults concerned about medication authenticity.",
      hook: "Consistency only works if the medication is real.",
      body: "Headline: Consistency only works if the medication is real.\n\nSub : FulLife guarantees 100% authentic sourcing.\n\nSupporting line: Direct from manufacturers and authorized distributors. No compromises.",
      designDirection: "Visual: Close-up of a pharmacist's hands inspecting a sealed medication box.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "Consistency only works if the medication is real. FulLife guarantees 100% authentic sourcing for all routine medications.",
      hashtags: [
        "#FulLife",
        "#MedPharmaGH",
        "#AuthenticMedication",
        "#SeamlessHealthcare"
      ]
    },
    {
      id: "fl-jul-0a",
      week: "Week of Mon 29 Jun – Sun 5 Jul",
      date: "Fri 3 Jul 2026",
      title: "Square Flyer — Math of prevention",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: [
        "Instagram",
        "Facebook"
      ],
      audience: "Value-conscious adults.",
      hook: "Prevention brings peace.",
      body: "Headline: Prevention brings peace.\n\nSub : The math of routine medication is simple.\n\nSupporting line: A month of consistent medication prevents the stress of a single emergency room visit. Protect your health and your peace of mind with FulLife.",
      designDirection: "Visual: Large numbers fading into the background behind bold typography.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "The math is simple: a month of consistent medication prevents the stress of a single emergency room visit. Protect your health and your peace of mind with FulLife.",
      hashtags: [
        "#FulLife",
        "#MedPharmaGH",
        "#SeamlessHealthcare"
      ]
    },
    {
      id: "fl-jul-1a",
      week: "Week of Mon 6 – Sun 12 Jul",
      date: "Tue 7 Jul 2026",
      title: "Square Flyer — In-app doctor",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: [
        "Instagram",
        "Facebook"
      ],
      audience: "People wanting more than just delivery.",
      hook: "Your care team is always awake.",
      body: "Headline: Your care team is always awake.\n\nSub : Connect with a clinician instantly in the MedPharma app.\n\nSupporting line: Have a question about your routine medication? Don't wait for your next appointment. Chat with a professional today.",
      designDirection: "Visual: A bright phone mockup showing a friendly chat interface with a doctor.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "Have a question about your routine medication? Your care team is always awake. Connect with a clinician instantly in the MedPharma app.",
      hashtags: [
        "#FulLife",
        "#MedPharmaGH",
        "#TelehealthGhana",
        "#SeamlessHealthcare"
      ]
    },
    {
      id: "fl-jul-1b",
      week: "Week of Mon 6 – Sun 12 Jul",
      date: "Thu 9 Jul 2026",
      title: "Educational Carousel — Dietary habits",
      assetType: "Educational Carousel",
      format: "1080 x 1350 px (4:5) · 3 slides",
      platforms: [
        "Instagram",
        "Facebook"
      ],
      audience: "Health-conscious individuals on medication.",
      hook: "The pill works best when the plate supports it.",
      slides: [
        {
          title: "Slide 1",
          body: "Headline: The pill works best when the plate supports it.\nSub: Nutrition and routine medication."
        },
        {
          title: "Slide 2",
          body: "Headline: Small changes, big impact.\nBody: Reducing salt and managing portions amplifies the effect of your daily dose."
        },
        {
          title: "Slide 3 — CTA",
          body: "Headline: Holistic care, delivered.\nCTA block: Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh"
        }
      ],
      designDirection: "Visual: Vibrant shot of fresh vegetables and local Ghanaian healthy foods.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "The pill works best when the plate supports it. Small dietary changes amplify the effect of your daily dose. Partner with FulLife for holistic care.",
      hashtags: [
        "#FulLife",
        "#MedPharmaGH",
        "#HealthyGhana",
        "#SeamlessHealthcare"
      ]
    },
    {
      id: "fl-jul-1c",
      week: "Week of Mon 6 – Sun 12 Jul",
      date: "Sat 11 Jul 2026",
      title: "WhatsApp Status — Q&A on auto-refill",
      assetType: "Story / WhatsApp Status",
      format: "1080 x 1920 px (9:16)",
      platforms: [
        "WhatsApp Status",
        "Instagram Stories"
      ],
      audience: "Curious followers.",
      hook: "Can I pause my auto-refill?",
      body: "Top: Q: Can I pause my auto-refill if I have extra pills?\n\nBottom: A: Yes. Your care team tracks your supply, and you can adjust or pause anytime.\n\nBottom CTA strip: Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      designDirection: "Visual: Simple Q&A typographic layout.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh"
    },
    {
      id: "fl-jul-2a",
      week: "Week of Mon 13 – Sun 19 Jul",
      date: "Mon 13 Jul 2026",
      title: "Square Flyer — Exercise safely",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: [
        "Instagram",
        "Facebook"
      ],
      audience: "Active individuals.",
      hook: "Keep moving. We'll keep the rhythm.",
      body: "Headline: Keep moving. We'll keep the rhythm.\n\nSub : FulLife auto-refills support your active lifestyle.\n\nSupporting line: Managing your condition shouldn't slow you down.",
      designDirection: "Visual: Energetic shot of a Ghanaian man jogging in the early morning.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "Managing your condition shouldn't slow you down. Keep moving. We'll keep the rhythm with FulLife auto-refills.",
      hashtags: [
        "#FulLife",
        "#MedPharmaGH",
        "#ActiveGhana",
        "#SeamlessHealthcare"
      ]
    },
    {
      id: "fl-jul-2b",
      week: "Week of Mon 13 – Sun 19 Jul",
      date: "Fri 17 Jul 2026",
      title: "Square Flyer — Consistency over intensity",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: [
        "Instagram",
        "Facebook",
        "X / Twitter"
      ],
      audience: "General FulLife audience.",
      hook: "Consistency over intensity.",
      body: "Headline: Consistency beats intensity.\n\nSub : The quiet power of showing up every day.\n\nSupporting line: Health isn't built in a day. It's built in the daily dose.",
      designDirection: "Visual: Minimalist shot of a single pill resting on a calendar.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "Health isn't built in a day. It's built in the daily dose. Experience the quiet power of consistency with FulLife.",
      hashtags: [
        "#FulLife",
        "#DailyAdherence",
        "#MedPharmaGH",
        "#SeamlessHealthcare"
      ]
    },
    {
      id: "fl-jul-3a",
      week: "Week of Mon 20 – Sun 26 Jul",
      date: "Mon 20 Jul 2026",
      title: "Square Flyer — Peace of mind",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: [
        "Instagram",
        "Facebook"
      ],
      audience: "Adults seeking stress relief from health management.",
      hook: "The feeling of one less thing to worry about.",
      body: "Headline: The feeling of one less thing to worry about.\n\nSub : That's the FulLife promise.\n\nSupporting line: Let us remember the dates, coordinate the pharmacy, and navigate the traffic.",
      designDirection: "Visual: Deeply relaxed portrait of an older Ghanaian woman sitting comfortably with a cup of tea.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "The feeling of one less thing to worry about. Let FulLife remember the dates, coordinate the pharmacy, and navigate the traffic.",
      hashtags: [
        "#FulLife",
        "#MedPharmaGH",
        "#SeamlessHealthcare"
      ]
    },
    {
      id: "fl-jul-3b",
      week: "Week of Mon 20 – Sun 26 Jul",
      date: "Wed 22 Jul 2026",
      title: "Educational Carousel — Alarms vs FulLife",
      assetType: "Educational Carousel",
      format: "1080 x 1350 px (4:5) · 3 slides",
      platforms: [
        "Instagram",
        "Facebook"
      ],
      audience: "People who rely on basic phone alarms.",
      hook: "Your alarm tells you to take it. FulLife ensures you have it.",
      slides: [
        {
          title: "Slide 1",
          body: "Headline: Your phone alarm tells you to take the dose.\nSub: FulLife ensures the dose is actually there."
        },
        {
          title: "Slide 2",
          body: "Headline: A complete system.\nBody: Smart reminders + guaranteed doorstep delivery before you run out."
        },
        {
          title: "Slide 3 — CTA",
          body: "Headline: Upgrade your routine.\nCTA block: Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh"
        }
      ],
      designDirection: "Visual: A phone lock screen showing a standard alarm vs the MedPharma app notification.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "Your phone alarm tells you to take the dose. FulLife ensures the dose is actually there. Upgrade your routine today.",
      hashtags: [
        "#FulLife",
        "#DailyAdherence",
        "#MedPharmaGH",
        "#SeamlessHealthcare"
      ]
    },
    {
      id: "fl-jul-3c",
      week: "Week of Mon 20 – Sun 26 Jul",
      date: "Fri 24 Jul 2026",
      title: "Square Flyer — Caregiver spotlight",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: [
        "Instagram",
        "Facebook"
      ],
      audience: "Caregivers.",
      hook: "Behind every consistent patient is a tired caregiver. We see you.",
      body: "Headline: Behind every consistent patient is a tired caregiver.\n\nSub : Let FulLife share the load.\n\nSupporting line: We partner with you to ensure your loved ones never miss a dose.",
      designDirection: "Visual: A candid shot of a younger person handing a glass of water to an older relative.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "Behind every consistent patient is a tired caregiver. Let FulLife share the load. Enroll your loved ones today.",
      hashtags: [
        "#FulLife",
        "#CaregiverSupport",
        "#MedPharmaGH",
        "#SeamlessHealthcare"
      ]
    },
    {
      id: "fl-jul-4a",
      week: "Week of Mon 27 Jul – Sun 2 Aug",
      date: "Sun 2 Aug 2026",
      title: "Square Flyer — Month-end reflection",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: [
        "Instagram",
        "Facebook",
        "X / Twitter"
      ],
      audience: "General FulLife audience.",
      hook: "Another month down. How many days did you remember?",
      body: "Headline: Another month down. How many days did you remember?\n\nSub : With FulLife, the answer is 'Every single one.'\n\nSupporting line: Step into August with a guaranteed routine.",
      designDirection: "Visual: Abstract graphic of a complete 30-day calendar perfectly checked off.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "Another month down. Step into August with a guaranteed routine. Join the FulLife family and never miss a day.",
      hashtags: [
        "#FulLife",
        "#DailyAdherence",
        "#MedPharmaGH",
        "#SeamlessHealthcare"
      ]
    },

    // ============ AUGUST WEEK 1 — Aug 3–9 (Founders' Day Aug 4) ============
    {
      id: "mp-aug-w1a",
      week: "Week of Mon 3 Aug – Sun 9 Aug",
      date: "Mon 4 Aug 2026",
      occasion: "Ghana Founders' Day (Public Holiday)",
      title: "Founders' Day — A healthy nation honours its founders best",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "General Ghanaian public.",
      hook: "The founders built this nation with discipline and consistency. Your health deserves the same.",
      body:
        "Headline: A healthy nation honours its founders best.\n\n" +
        "Sub: Happy Founders' Day from MedPharma. We are proud to be building a healthier Ghana — one seamless healthcare experience at a time.\n\n" +
        "Supporting: Download the MedPharma app today and join thousands of Ghanaians taking control of their health.",
      designDirection:
        "Ghana flag palette (red, gold, green, black star) woven elegantly with MedPharma teal. National pride aesthetic — bold, clean, patriotic.",
      cta: STD_CTA,
      hashtags: ["#FoundersDay", "#GhanaAt69", "#MedPharmaGH", "#HealthyGhana", "#SeamlessHealthcare"],
    },
    {
      id: "mp-aug-w1b",
      week: "Week of Mon 3 Aug – Sun 9 Aug",
      date: "Thu 7 Aug 2026",
      title: "Educational Carousel — The MedPharma app: A full tour in 5 slides",
      assetType: "Educational Carousel",
      format: "1080 x 1350 px (4:5) · 6 slides",
      platforms: ["Instagram", "Facebook"],
      audience: "App awareness — new and warm audience.",
      hook: "Most people still don't know everything MedPharma does. Let's fix that.",
      slides: [
        { title: "Slide 1 — Cover", body: "Headline: The MedPharma app.\nSub: A full tour. 5 slides. Everything you need to know." },
        { title: "Slide 2", body: "Feature 1: Medication Delivery.\nOrder any prescription or OTC medication and get it delivered to your door — anywhere in Accra." },
        { title: "Slide 3", body: "Feature 2: Virtual Doctor Consultations.\nBook a video call with a licensed Ghanaian doctor in minutes. No commute. No queue." },
        { title: "Slide 4", body: "Feature 3: Upload Your Prescription.\nTake a photo of your paper prescription. Our pharmacist verifies and dispatches your order." },
        { title: "Slide 5", body: "Feature 4: AI Health Assistant.\nAsk our 24/7 AI health companion any medical question — instantly and safely, any time of day." },
        { title: "Slide 6 — CTA", body: "Feature 5: FulLife / MCare Subscription.\nAutomatic monthly medication delivery + reminders + doctor access — all in one plan.\nCTA: " + STD_CTA },
      ],
      designDirection:
        "App UI showcase style. Clean, tech-forward. MedPharma teal. One app screenshot per slide where possible. Modern and aspirational.",
      cta: STD_CTA,
      hashtags: ["#MedPharmaGH", "#DigitalPharmacy", "#SeamlessHealthcare", "#AccraHealthTech"],
    },

    // ============ AUGUST WEEK 2 — Aug 10–16 (Youth Day Aug 12) ============
    {
      id: "mp-aug-w2a",
      week: "Week of Mon 10 Aug – Sun 16 Aug",
      date: "Wed 12 Aug 2026",
      occasion: "International Youth Day",
      title: "International Youth Day — Healthcare for the generation building tomorrow's Ghana",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "Young Ghanaians 18–35; parents of young people managing health conditions.",
      hook: "Young Ghanaians are building the future. MedPharma keeps them healthy enough to do it.",
      body:
        "Headline: Healthcare for the generation building tomorrow's Ghana.\n\n" +
        "Sub: International Youth Day is a reminder that asthma, sickle cell, anxiety, and early-onset hypertension affect young Ghanaians right now. Healthcare access cannot wait.\n\n" +
        "MedPharma: Fast, affordable, and digital healthcare — built for how young Ghanaians actually live.",
      designDirection:
        "Bold, energetic. Young Ghanaian professionals and students — diverse, vibrant. MedPharma teal. Modern typography. Urban setting.",
      cta: STD_CTA,
      hashtags: ["#InternationalYouthDay", "#YouthHealthGhana", "#MedPharmaGH", "#SeamlessHealthcare"],
    },
    {
      id: "mp-aug-w2b",
      week: "Week of Mon 10 Aug – Sun 16 Aug",
      date: "Fri 14 Aug 2026",
      title: "Story / WhatsApp Status — Sickle cell: managing it just got easier",
      assetType: "Story / WhatsApp Status",
      format: "1080 x 1920 px (9:16)",
      platforms: ["Instagram Stories", "WhatsApp Status", "Facebook Stories"],
      audience: "Young Ghanaians with sickle cell; their families and caregivers.",
      hook: "Sickle cell doesn't pause. Your medication access shouldn't either.",
      body:
        "Visual: Bold teal card. Clean typography.\nHeadline: Managing sickle cell just got easier.\nSub: MedPharma delivers your hydroxyurea, pain management meds, and supplements straight to your door — with zero pharmacy drama.\nCTA: Download MedPharma → " + APP,
      designDirection:
        "Strong, empowering. MedPharma teal on dark background. Sickle cell awareness red-cell graphic as subtle background element. Not clinical — empowering.",
      cta: STD_CTA,
      hashtags: ["#SickleCellGhana", "#MedPharmaGH", "#SeamlessHealthcare", "#YouthHealth"],
    },

    // ============ AUGUST WEEK 3 — Aug 17–23 (World Mosquito Day Aug 20) ============
    {
      id: "mp-aug-w3a",
      week: "Week of Mon 17 Aug – Sun 23 Aug",
      date: "Thu 20 Aug 2026",
      occasion: "World Mosquito Day",
      title: "World Mosquito Day — Order your malaria treatment before you need it",
      assetType: "Educational Carousel",
      format: "1080 x 1350 px (4:5) · 5 slides",
      platforms: ["Instagram", "Facebook"],
      audience: "General Ghanaian public, parents, caregivers.",
      hook: "World Mosquito Day: Malaria starts with a bite. Your response starts with MedPharma.",
      slides: [
        { title: "Slide 1 — Cover", body: "Headline: Ghana has one of the world's highest malaria burdens.\nSub: World Mosquito Day | 20 August 2026 | by MedPharma." },
        { title: "Slide 2", body: "The risk: During rainy season in Ghana, malaria transmission spikes significantly. Children under 5 and pregnant women are most at risk." },
        { title: "Slide 3", body: "What MedPharma offers:\n✓ Order antimalarial medications in the app\n✓ Get malaria test kits delivered to your door\n✓ Book a virtual consultation if you have symptoms\n✓ Upload your prescription for instant dispensing" },
        { title: "Slide 4", body: "Complete your full course:\nNever stop malaria treatment early — even when you feel better. Incomplete courses cause resistance and relapse.\nFulLife medication reminders keep you on track." },
        { title: "Slide 5 — CTA", body: "Headline: From prevention to treatment — MedPharma has you covered.\nCTA: " + STD_CTA },
      ],
      designDirection:
        "Health poster style — deep green and MedPharma teal. Mosquito net graphic. Ghanaian family — mother and child. Warm but educational.",
      cta: STD_CTA,
      hashtags: ["#WorldMosquitoDay", "#MalariaGhana", "#MedPharmaGH", "#SeamlessHealthcare"],
    },
    {
      id: "mp-aug-w3b",
      week: "Week of Mon 17 Aug – Sun 23 Aug",
      date: "Mon 18 Aug 2026",
      title: "Square Flyer — Book a lab test from the MedPharma app",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "Adults 25–60 due for routine blood work.",
      hook: "Your lab test doesn't need a waiting room. It needs a phone.",
      body:
        "Headline: Your blood work doesn't need a waiting room.\n\n" +
        "Sub: Book your malaria test, HbA1c, lipid panel, or full blood count directly in the MedPharma app. Results delivered digitally. No queues. No guessing.\n\n" +
        "Tap 'Book a Lab Test' in the MedPharma app today.",
      designDirection:
        "Clean, medical-tech. Lab tubes / test icon alongside a phone mockup of the booking flow. MedPharma teal. Confident and convenient.",
      cta: STD_CTA,
      hashtags: ["#MedPharmaGH", "#LabTests", "#SeamlessHealthcare", "#DigitalHealthGhana"],
    },

    // ============ AUGUST WEEK 4 — Aug 24–30 (Women's Equality Day Aug 26) ============
    {
      id: "mp-aug-w4a",
      week: "Week of Mon 24 Aug – Sun 30 Aug",
      date: "Wed 26 Aug 2026",
      occasion: "Women's Equality Day",
      title: "Women's Equality Day — Equal healthcare is not optional",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "LinkedIn", "X / Twitter"],
      audience: "Women 25–60; general public; advocacy-minded followers.",
      hook: "Equal rights mean equal access to healthcare — private, consistent, and dignified.",
      body:
        "Headline: Equal healthcare is not optional.\n\n" +
        "Sub: On Women's Equality Day, MedPharma stands for every woman's right to access her healthcare — without queues, stigma, or compromise.\n\n" +
        "Discreet delivery. Virtual consultations. Prescriptions managed in-app. Healthcare on your terms.",
      designDirection:
        "Bold, empowering. MedPharma teal and warm gold. Diverse Ghanaian women — different ages, different backgrounds. Strong, dignified, confident.",
      cta: STD_CTA,
      hashtags: ["#WomensEqualityDay", "#WomensHealthGhana", "#MedPharmaGH", "#SeamlessHealthcare"],
    },
    {
      id: "mp-aug-w4b",
      week: "Week of Mon 24 Aug – Sun 30 Aug",
      date: "Fri 28 Aug 2026",
      title: "LinkedIn PDF — Why Ghana's employers should include digital pharmacy in their health benefits",
      assetType: "LinkedIn PDF Document",
      format: "1920 x 1080 px (16:9) · 7 pages",
      platforms: ["LinkedIn"],
      audience: "HR Directors, CEOs, Business Owners, Corporate Health Leads.",
      hook: "Your employee's untreated hypertension is costing you far more than their sick days.",
      slides: [
        { title: "Page 1 — Cover", body: "Title: Digital Pharmacy as a Corporate Health Benefit: The Business Case for MedPharma.\nBy MedPharma Ghana." },
        { title: "Page 2", body: "The problem: 42% of working-age Ghanaians on long-term medication are non-adherent within the first 3 months. The main reason? Inconvenience of the physical pharmacy." },
        { title: "Page 3", body: "The business cost: Lost productivity, increased sick days, higher group health insurance premiums, and elevated risk of acute medical emergencies in the workplace." },
        { title: "Page 4", body: "The MedPharma corporate solution: Partner with us to include MedPharma / FulLife access in your employee health benefits package at a negotiated group rate." },
        { title: "Page 5", body: "What employees get: Medication delivered to their desk or home. 24/7 AI health assistant. Virtual doctor access. Digital health records and prescription management." },
        { title: "Page 6", body: "What the business gets: Healthier, more present team. Reduced insurance claims. Demonstrable wellbeing programme for ESG and recruitment purposes." },
        { title: "Page 7 — CTA", body: "Ready to build a healthier workforce?\nBook a corporate consultation: " + CALL + "\n" + APP },
      ],
      designDirection:
        "Premium corporate. Navy + MedPharma teal. Data charts, infographic-style layout. Boardroom-ready. Professional and authoritative.",
      cta: STD_CTA,
      hashtags: ["#MedPharmaGH", "#CorporateHealth", "#EmployeeWellbeing", "#SeamlessHealthcare", "#GhanaHR"],
    },


  ],
};

// =================================================================
// MEDPHARMA GENERAL BRAND PLAN
// =================================================================
export const MEDPHARMA_PLAN = {
  brand: "MedPharma",
  productNote: "MedPharma is the parent brand: full-service e-pharmacy, medication delivery anywhere in Ghana, in-app doctor chat (AI + human clinicians), corporate health partnerships. Tone: warm, expert, locally rooted, action-oriented.",
  callLine: CALL,
  appLink: APP,
  rules: [
    "Lead with the MedPharma Seamless Healthcare lockup — full logo top-left.",
    "Use Black/African models exclusively in lifestyle shots.",
    "No emojis on the artwork itself. Emojis are fine in the social caption only.",
    "Every asset must show: " + CALL + " + app QR/link + the @medpharma / @medpharmagh handle row.",
    "Never make medical claims. Talk about access, delivery, reminders, doctor chat — never outcomes for a specific condition.",
    "If a graphic is for a public holiday, the holiday wish must come BEFORE the product mention. Respect first, sell second.",
  ],
  briefs: [
    // ============ WEEK OF MAY 26 ============
    {
      id: "mp-may-1",
      week: "Week of Mon 26 May – Sun 1 Jun",
      date: "Tue 27 May 2026",
      title: "Brand Carousel — 5 things MedPharma quietly does for you",
      assetType: "Educational Carousel",
      format: "1080 x 1350 px (4:5) · 6 slides",
      platforms: ["Instagram", "Facebook", "LinkedIn"],
      audience: "Anyone who's downloaded the app but hasn't ordered yet, plus warm followers.",
      hook: "You don't need a pharmacy. You need a system.",
      slides: [
        { title: "Slide 1 — Cover", body: "Headline: 5 things MedPharma quietly does for you.\nSub: Open the app. We'll do the rest." },
        { title: "Slide 2", body: "Headline: We deliver, anywhere in Ghana.\nBody: Accra, Kumasi, Tamale, your village — same app, same rider network." },
        { title: "Slide 3", body: "Headline: We talk to a doctor for you, before you commit.\nBody: Chat with Kobikuul, our in-app AI, then a real clinician if you need one." },
        { title: "Slide 4", body: "Headline: We remember your prescription so you don't have to.\nBody: One profile. Every refill. No re-uploading the same script." },
        { title: "Slide 5", body: "Headline: We work with your insurance, your employer, or your peace of mind.\nBody: Secure processing, local options, NHIA-supported items, corporate health cover." },
        { title: "Slide 6 — CTA", body: "Headline: One app. The whole pharmacy.\nCTA block: " + STD_CTA },
      ],
      designDirection:
        "Visual: Simple line illustrations (motorbike rider, chat bubble, prescription pad, peace of mind).",
      cta: STD_CTA,
      caption:
        "You don't need a pharmacy. You need a system. Five things MedPharma quietly does for you, every single day. Swipe →",
      hashtags: ["#MedPharmaGH", "#SeamlessHealthcare", "#OnlinePharmacyGhana", "#MedicationDeliveryAccra"],
    },
    {
      id: "mp-may-2",
      week: "Week of Mon 26 May – Sun 1 Jun",
      date: "Fri 30 May 2026",
      title: "WhatsApp Q&A Story — How fast is delivery, really?",
      assetType: "Story / WhatsApp Status",
      format: "1080 x 1920 px (9:16)",
      platforms: ["WhatsApp Status", "Instagram Stories", "Facebook Stories"],
      audience: "Cold audience considering ordering for the first time.",
      hook: "Same-day in Accra. Next-day across the country.",
      body:
        "Top: Question.\nHeadline : How fast is MedPharma delivery, really?\n\nBottom: Answer.\nHeadline : Same-day in Accra. Next-day everywhere else in Ghana.\n\nFooter : " + STD_CTA,
      designDirection:
        "Visual: Question/Answer typographic layout with a subtle rider silhouette.",
      cta: STD_CTA,
    },

    // ============ JUNE ============
    {
      id: "mp-jun-1",
      week: "Week of Mon 1 – Sun 7 Jun",
      date: "Wed 3 Jun 2026",
      title: "Refill Reminder Flyer — A motorbike, a city, a promise",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook"],
      audience: "General Ghanaian audience; emphasis on people in Greater Accra and Kumasi.",
      hook: "Time for a refill? We're already on the road.",
      body:
        "Headline : Time for a refill?\n\nSub : We're already on the road.\n\nSupporting line: Order on the MedPharma app or call " + CALL + " — and a rider is dispatched within the hour, anywhere in Ghana.",
      designDirection:
        "Visual: Motion-blurred night-rider photography (red tail-light).",
      cta: STD_CTA,
      caption:
        "Time for a refill? We're already on the road. Order in the MedPharma app and a rider is dispatched within the hour. 🛵💨",
      hashtags: ["#MedPharmaGH", "#MedicationDeliveryAccra", "#OnlinePharmacyGhana"],
    },
    {
      id: "mp-jun-2",
      week: "Week of Mon 8 – Sun 14 Jun",
      date: "Thu 11 Jun 2026",
      title: "Kobikuul Awareness Flyer — Talk to a clinician without leaving the couch",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "App-comfortable adults 25–45.",
      hook: "The first opinion is always free. And it's already in your phone.",
      body:
        "Headline: The first opinion is always free.\n\nSub : And it's already in your phone.\n\nSupporting line: Chat with Kobikuul, MedPharma's in-app health assistant, any time. If your case needs a human, we'll connect you to a clinician — no queue, no waiting room.\n\nCTA: " + STD_CTA,
      designDirection:
        "Visual: Doctor holding a phone with the app open, featuring the Kobikuul mascot.",
      cta: STD_CTA,
      caption:
        "The first opinion is always free. And it's already in your phone. Meet Kobikuul, MedPharma's in-app health assistant — chat any time, day or night.",
      hashtags: ["#Kobikuul", "#MedPharmaGH", "#TelehealthGhana", "#SeamlessHealthcare"],
    },
    {
      id: "mp-jun-3",
      week: "Week of Mon 15 – Sun 21 Jun",
      date: "Wed 17 Jun 2026",
      occasion: "Eid al-Adha (observed week)",
      title: "Eid Mubarak Flyer",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter", "WhatsApp Status (cropped)"],
      audience: "Muslim audience across Ghana; general followers.",
      hook: "Eid Mubarak — from the MedPharma family.",
      body:
        "Headline : Eid Mubarak.\n\nSub : May this season bring health, peace, and abundance to you and your loved ones.\n\nFooter line : The MedPharma pharmacy and delivery service is open through the holiday — call " + CALL + " any time.",
      designDirection:
        "Visual: Refined Islamic geometric tessellation pattern.",
      cta: STD_CTA,
      caption:
        "Eid Mubarak from all of us at MedPharma. May this season bring health, peace and abundance to your home. Our pharmacy and delivery service stay open through the holiday — we're here when you need us.",
      hashtags: ["#EidMubarak", "#EidAlAdha", "#MedPharmaGH", "#SeamlessHealthcare"],
    },
    {
      id: "mp-jun-4",
      week: "Week of Mon 22 – Sun 28 Jun",
      date: "Thu 25 Jun 2026",
      title: "LinkedIn PDF — The state of online pharmacy in Ghana, 2026",
      assetType: "LinkedIn PDF Document",
      format: "1080 x 1350 px (4:5) · 7 pages, exported as one PDF",
      platforms: ["LinkedIn (Document Post)"],
      audience: "Healthcare investors, policy makers, partners, journalists, B2B prospects.",
      hook: "We're past the question of whether Ghanaians will buy medicine online. The question is who they'll trust.",
      slides: [
        { title: "Page 1 — Cover", body: "Headline: The state of online pharmacy in Ghana, 2026.\nSub: A short brief from MedPharma." },
        { title: "Page 2", body: "Headline: Smartphone penetration crossed the threshold.\nBody: Digital access is universal. Telehealth is normalised. The infrastructure for digital pharmacy is no longer the bottleneck." },
        { title: "Page 3", body: "Headline: The bottleneck is trust.\nBody: Patients want to know: is the medication real, is the dose right, will it arrive, and will someone pick up the phone if it doesn't." },
        { title: "Page 4", body: "Headline: How MedPharma earns it.\nBody: Licensed pharmacists in every fulfilment centre · cold-chain handling for sensitive items · same-day in Accra, next-day nationwide · in-app clinician chat." },
        { title: "Page 5", body: "Headline: What's next: continuity, not just convenience.\nBody: With FulLife, we're moving from one-off orders to managed monthly care for people on routine medication." },
        { title: "Page 6", body: "Headline: For partners.\nBody: We work with insurers, employers, and clinics. One integration. Three checkout modalities. Real reporting." },
        { title: "Page 7 — CTA", body: "Headline: Let's talk.\nBody: partnerships@medpharma.care\nCTA: " + STD_CTA },
      ],
      designDirection:
        "Visual: Editorial report style with data callouts and professional Ghanaian portraits.",
      cta: STD_CTA,
    },

    // ============ JULY ============
    {
      id: "mp-jul-1",
      week: "Week of Mon 29 Jun – Sun 5 Jul",
      date: "Wed 1 Jul 2026",
      occasion: "Republic Day (Ghana, public holiday)",
      title: "Republic Day — Built in Ghana, for Ghana",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter", "WhatsApp Status (cropped)"],
      audience: "All Ghanaian followers.",
      hook: "Built in Ghana, for Ghana — every order, every rider, every refill.",
      body:
        "Headline : Built in Ghana, for Ghana.\n\nSub : Every order, every rider, every refill.\n\nSupporting line: Happy Republic Day from the MedPharma family. The pharmacy is open today — call " + CALL + " or order in the app.",
      designDirection:
        "Visual: Typographic focus with a subtle Black Star watermark.",
      cta: STD_CTA,
      caption:
        "Built in Ghana, for Ghana — every order, every rider, every refill. Happy Republic Day from the MedPharma family. 🇬🇭",
      hashtags: ["#RepublicDay", "#Ghana", "#MedPharmaGH", "#SeamlessHealthcare"],
    },
    {
      id: "mp-jul-2",
      week: "Week of Mon 6 – Sun 12 Jul",
      date: "Wed 8 Jul 2026",
      title: "Educational Carousel — Real medicine, real pharmacists, real receipts",
      assetType: "Educational Carousel",
      format: "1080 x 1350 px (4:5) · 5 slides",
      platforms: ["Instagram", "Facebook"],
      audience: "First-time-online buyers nervous about counterfeits.",
      hook: "Three things we do that the corner shop can't.",
      slides: [
        { title: "Slide 1 — Cover", body: "Headline: Three things we do that the corner shop can't.\nSub: Why MedPharma can be trusted with your medicine." },
        { title: "Slide 2", body: "Headline: A licensed pharmacist signs off every order.\nBody: Not a clerk. Not an algorithm alone. A real, named professional." },
        { title: "Slide 3", body: "Headline: Cold-chain handling for what needs it.\nBody: Insulin, certain antibiotics, biologics — temperature-controlled from shelf to door." },
        { title: "Slide 4", body: "Headline: A receipt with a batch number, every time.\nBody: If it doesn't look right when it arrives, we want to know — and we can trace it." },
        { title: "Slide 5 — CTA", body: "Headline: Buying medicine online should feel safer than the queue, not riskier.\nCTA: " + STD_CTA },
      ],
      designDirection:
        "Visual: Restrained line illustrations (pharmacist signature, thermometer, receipt with QR).",
      cta: STD_CTA,
      caption:
        "Buying medicine online should feel safer than the queue, not riskier. Three things MedPharma does that the corner shop can't. Swipe →",
      hashtags: ["#MedPharmaGH", "#OnlinePharmacyGhana", "#SeamlessHealthcare", "#BuyMedicineOnlineGhana"],
    },
    {
      id: "mp-jul-3",
      week: "Week of Mon 20 – Sun 26 Jul",
      date: "Wed 22 Jul 2026",
      title: "App Download Flyer — The whole pharmacy. In your pocket.",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "People who haven't downloaded the app yet.",
      hook: "The whole pharmacy. In your pocket.",
      body:
        "Headline : The whole pharmacy.\nSub : In your pocket.\n\nRight side: phone mock showing the MedPharma app home screen.\n\nBottom : Scan to download — or call " + CALL + ".",
      designDirection:
        "Visual: Realistic phone mock-up showing the MedPharma app home screen.",
      cta: STD_CTA,
      caption:
        "The whole pharmacy. In your pocket. Order medication, chat with a clinician, set refill reminders — all in one app. Scan, download, and we'll do the rest.",
      hashtags: ["#MedPharmaApp", "#MedPharmaGH", "#SeamlessHealthcare", "#OnlinePharmacyGhana"],
    },
    {
      id: "mp-jul-4",
      week: "Week of Mon 27 Jul – Sun 2 Aug",
      date: "Tue 28 Jul 2026",
      occasion: "World Hepatitis Day",
      title: "World Hepatitis Day — Get tested. Then keep going.",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "LinkedIn", "X / Twitter"],
      audience: "General adult audience.",
      hook: "Get tested. Then, if you need to, keep going — with us.",
      body:
        "Headline : Get tested. Then, if you need to, keep going.\n\nSub : MedPharma supports every Ghanaian on long-term liver care.\n\nSupporting line: Talk to a clinician in the app. Refills delivered. A care team that doesn't lose your file.\n\nCTA: " + STD_CTA,
      designDirection:
        "Visual: A single restrained awareness ribbon graphic.",
      cta: STD_CTA,
      caption:
        "On World Hepatitis Day, the most useful thing we can say is the simplest one: get tested. Then, if you need to, keep going — with us. MedPharma is here for the long road.",
      hashtags: ["#WorldHepatitisDay", "#MedPharmaGH", "#SeamlessHealthcare"],
    },
    {
      id: "mp-jul-5",
      week: "Week of Mon 27 Jul – Sun 2 Aug",
      date: "Fri 31 Jul 2026",
      title: "TikTok Photo Set — A day in 3 frames at MedPharma",
      assetType: "TikTok Photo Set",
      format: "1080 x 1920 px (9:16) · 3 still images, posted as a TikTok Photo Mode set",
      platforms: ["TikTok", "Instagram Reels (3-image carousel reel)"],
      audience: "18–35 lifestyle audience.",
      hook: "Order placed at 9:14. At your gate by 11:02. This is normal.",
      slides: [
        { title: "Frame 1", body: "Visual: phone close-up, MedPharma app order confirmation screen.\nOverlay text : 9:14 AM — order placed in 30 seconds." },
        { title: "Frame 2", body: "Visual: pharmacist in green coat checking and sealing a small MedPharma-branded paper bag.\nOverlay text: 9:46 AM — a real pharmacist signs it off." },
        { title: "Frame 3", body: "Visual: front gate / front door of a typical Accra home, rider handing the bag to the customer.\nOverlay text: 11:02 AM — at your gate. This is normal." },
      ],
      designDirection:
        "Visual: 3-part sequence showing an order confirmation screen, a pharmacist packing a bag, and a rider delivering it.",
      cta: STD_CTA,
      caption:
        "Order placed at 9:14. At your gate by 11:02. This is normal at MedPharma. Tap to download: " + APP,
      hashtags: ["#MedPharmaGH", "#OnlinePharmacyGhana", "#AccraTikTok", "#GhanaTikTok"],
    },    {
      id: "mp-may-3",
      week: "Week of Mon 26 May – Sun 1 Jun",
      date: "Thu 29 May 2026",
      title: "Square Flyer — Intro to the rider network",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: [
        "Instagram",
        "Facebook",
        "X / Twitter"
      ],
      audience: "General audience.",
      hook: "Our pharmacy doesn't end at the door. It ends at your gate.",
      body: "Headline: Our pharmacy doesn't end at the door. It ends at your gate.\n\nSub : The MedPharma rider network spans the nation.\n\nSupporting line: Trained, dedicated delivery professionals ensuring your medication arrives safely and on time.",
      designDirection: "Visual: Dynamic shot of a MedPharma rider on a motorbike, looking forward confidently.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "Our pharmacy doesn't end at the door. It ends at your gate. Experience seamless nationwide delivery with MedPharma.",
      hashtags: [
        "#MedPharmaGH",
        "#MedicationDelivery",
        "#SeamlessHealthcare"
      ]
    },
    {
      id: "mp-jun-1a",
      week: "Week of Mon 1 – Sun 7 Jun",
      date: "Mon 1 Jun 2026",
      title: "Educational Carousel — Corporate health cover",
      assetType: "Educational Carousel",
      format: "1080 x 1350 px (4:5) · 3 slides",
      platforms: [
        "LinkedIn",
        "Facebook"
      ],
      audience: "Corporate employees, HR professionals.",
      hook: "Use your company health cover without the paperwork.",
      slides: [
        {
          title: "Slide 1",
          body: "Headline: Use your company health cover without the paperwork.\nSub: Corporate health cover, simplified."
        },
        {
          title: "Slide 2",
          body: "Headline: Seamless integration.\nBody: We work directly with major insurers and corporate health plans."
        },
        {
          title: "Slide 3 — CTA",
          body: "Headline: Ask HR about MedPharma today.\nCTA block: Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh"
        }
      ],
      designDirection: "Visual: Professional Ghanaian office workers in lifestyle shots.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "Use your company health cover without the paperwork. MedPharma integrates directly with major corporate plans.",
      hashtags: [
        "#MedPharmaGH",
        "#CorporateHealth",
        "#SeamlessHealthcare"
      ]
    },
    {
      id: "mp-jun-1b",
      week: "Week of Mon 1 – Sun 7 Jun",
      date: "Fri 5 Jun 2026",
      title: "Square Flyer — Spotting real medication",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: [
        "Instagram",
        "Facebook"
      ],
      audience: "Safety-conscious consumers.",
      hook: "Don't guess with your health.",
      body: "Headline: Don't guess with your health.\n\nSub : MedPharma guarantees 100% authentic medications.\n\nSupporting line: Sourced only from FDA-approved manufacturers and authorized distributors.",
      designDirection: "Visual: A clean, well-lit shot of pristine medication boxes with a subtle seal of authenticity.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "Don't guess with your health. MedPharma guarantees 100% authentic medications, sourced only from FDA-approved partners.",
      hashtags: [
        "#MedPharmaGH",
        "#AuthenticMedication",
        "#SeamlessHealthcare"
      ]
    },
    {
      id: "mp-jun-2a",
      week: "Week of Mon 8 – Sun 14 Jun",
      date: "Mon 8 Jun 2026",
      title: "Square Flyer — Spotlight on Pharmacists",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: [
        "Instagram",
        "Facebook",
        "LinkedIn"
      ],
      audience: "General audience.",
      hook: "Meet the experts behind every order.",
      body: "Headline: Meet the experts behind every order.\n\nSub : A licensed pharmacist signs off on every MedPharma delivery.\n\nSupporting line: Real professionals ensuring safety, accuracy, and care.",
      designDirection: "Visual: High-quality portrait of a Ghanaian pharmacist in a white coat smiling.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "Behind every MedPharma order is a licensed professional. Our pharmacists ensure accuracy, safety, and expert care.",
      hashtags: [
        "#MedPharmaGH",
        "#PharmacyExperts",
        "#SeamlessHealthcare"
      ]
    },
    {
      id: "mp-jun-2b",
      week: "Week of Mon 8 – Sun 14 Jun",
      date: "Sat 13 Jun 2026",
      title: "WhatsApp Status — Cold-chain delivery",
      assetType: "Story / WhatsApp Status",
      format: "1080 x 1920 px (9:16)",
      platforms: [
        "WhatsApp Status",
        "Instagram Stories"
      ],
      audience: "Patients needing specialized medications.",
      hook: "Some medications need a jacket. We provide the cooler.",
      body: "Top headline : Temperature-sensitive medication?\n\nMiddle : Delivered safely with our cold-chain technology.\n\nBottom CTA strip: Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      designDirection: "Visual: An insulated delivery cooler bag being zipped up.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh"
    },
    {
      id: "mp-jun-3a",
      week: "Week of Mon 15 – Sun 21 Jun",
      date: "Mon 15 Jun 2026",
      title: "Educational Carousel — How Kobikuul works",
      assetType: "Educational Carousel",
      format: "1080 x 1350 px (4:5) · 3 slides",
      platforms: [
        "Instagram",
        "Facebook"
      ],
      audience: "Tech-savvy users.",
      hook: "Meet Kobikuul: Your first line of care.",
      slides: [
        {
          title: "Slide 1",
          body: "Headline: Meet Kobikuul: Your first line of care.\nSub: MedPharma's intelligent in-app health assistant."
        },
        {
          title: "Slide 2",
          body: "Headline: Instant triage.\nBody: Describe your symptoms and Kobikuul provides immediate, AI-driven guidance."
        },
        {
          title: "Slide 3 — CTA",
          body: "Headline: Seamless escalation to human doctors.\nCTA block: Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh"
        }
      ],
      designDirection: "Visual: Clean graphics showing the Kobikuul chat interface.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "Meet Kobikuul: Your first line of care. Get instant, AI-driven guidance right in the MedPharma app.",
      hashtags: [
        "#MedPharmaGH",
        "#Kobikuul",
        "#HealthTechGhana",
        "#SeamlessHealthcare"
      ]
    },
    {
      id: "mp-jun-3b",
      week: "Week of Mon 15 – Sun 21 Jun",
      date: "Fri 19 Jun 2026",
      title: "Square Flyer — Diaspora Care",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: [
        "Instagram",
        "Facebook"
      ],
      audience: "Ghanaians living abroad.",
      hook: "Care for them from an ocean away.",
      body: "Headline: Care for them from an ocean away.\n\nSub : Order for your loved ones in Ghana, from anywhere in the world.\n\nSupporting line: Secure processing, guaranteed authentic medications, and doorstep delivery.",
      designDirection: "Visual: Split screen showing a person in a snowy city and an older parent receiving a package in sunny Accra.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "Care for them from an ocean away. Order authentic medication for your loved ones back home through the MedPharma app.",
      hashtags: [
        "#MedPharmaGH",
        "#DiasporaGhana",
        "#SeamlessHealthcare"
      ]
    },
    {
      id: "mp-jun-4a",
      week: "Week of Mon 22 – Sun 28 Jun",
      date: "Mon 22 Jun 2026",
      title: "WhatsApp Status — Step-by-step app ordering",
      assetType: "Story / WhatsApp Status",
      format: "1080 x 1920 px (9:16)",
      platforms: [
        "WhatsApp Status",
        "Instagram Stories"
      ],
      audience: "New app users.",
      hook: "3 taps to delivery.",
      body: "Top: 1. Search. 2. Add to Cart. 3. Checkout.\n\nMiddle : It's that simple.\n\nBottom CTA strip: Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      designDirection: "Visual: 3 simple screenshots of the app ordering process.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh"
    },
    {
      id: "mp-jun-4b",
      week: "Week of Mon 22 – Sun 28 Jun",
      date: "Sat 27 Jun 2026",
      title: "Square Flyer — Avoiding the queue",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: [
        "Instagram",
        "Facebook",
        "X / Twitter"
      ],
      audience: "Busy professionals.",
      hook: "Your time is too valuable for the pharmacy queue.",
      body: "Headline: Your time is too valuable for the pharmacy queue.\n\nSub : Tap, order, and get back to your day.\n\nSupporting line: MedPharma delivers.",
      designDirection: "Visual: Blurry background of a long queue with a clear phone showing the MedPharma app in the foreground.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "Your time is too valuable for the pharmacy queue. Tap, order, and get back to your day with MedPharma.",
      hashtags: [
        "#MedPharmaGH",
        "#OnlinePharmacyGhana",
        "#SeamlessHealthcare"
      ]
    },
    {
      id: "mp-jul-0a",
      week: "Week of Mon 29 Jun – Sun 5 Jul",
      date: "Mon 29 Jun 2026",
      title: "Square Flyer — Same-day Accra",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: [
        "Instagram",
        "Facebook"
      ],
      audience: "Accra residents.",
      hook: "Need it today in Accra? Done.",
      body: "Headline: Need it today in Accra? Done.\n\nSub : Same-day delivery across Greater Accra.\n\nSupporting line: Fast, reliable, and secure.",
      designDirection: "Visual: Bright, sunny shot of an iconic Accra landmark.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "Need it today in Accra? Done. Enjoy same-day delivery across Greater Accra with MedPharma.",
      hashtags: [
        "#MedPharmaGH",
        "#AccraDelivery",
        "#SeamlessHealthcare"
      ]
    },
    {
      id: "mp-jul-0b",
      week: "Week of Mon 29 Jun – Sun 5 Jul",
      date: "Fri 3 Jul 2026",
      title: "Square Flyer — Next-day Nationwide",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: [
        "Instagram",
        "Facebook"
      ],
      audience: "Residents outside Accra.",
      hook: "From Kumasi to Tamale: We deliver.",
      body: "Headline: From Kumasi to Tamale: We deliver.\n\nSub : Next-day delivery everywhere else in Ghana.\n\nSupporting line: Seamless healthcare, no matter your region.",
      designDirection: "Visual: Abstract, stylized map of Ghana with delivery pins.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "From Kumasi to Tamale: We deliver. Enjoy reliable next-day delivery everywhere outside Accra with MedPharma.",
      hashtags: [
        "#MedPharmaGH",
        "#GhanaDelivery",
        "#SeamlessHealthcare"
      ]
    },
    {
      id: "mp-jul-1a",
      week: "Week of Mon 6 – Sun 12 Jul",
      date: "Mon 6 Jul 2026",
      title: "Square Flyer — The Batch Number",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: [
        "Instagram",
        "Facebook",
        "LinkedIn"
      ],
      audience: "Detail-oriented consumers.",
      hook: "Traceability is transparency.",
      body: "Headline: Traceability is transparency.\n\nSub : Every MedPharma receipt includes a manufacturer batch number.\n\nSupporting line: Because you deserve to know exactly what you're taking.",
      designDirection: "Visual: Macro shot of a clean receipt highlighting the batch number field.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "Traceability is transparency. Every MedPharma receipt includes a manufacturer batch number, so you know exactly what you're taking.",
      hashtags: [
        "#MedPharmaGH",
        "#SafeMedication",
        "#SeamlessHealthcare"
      ]
    },
    {
      id: "mp-jul-1b",
      week: "Week of Mon 6 – Sun 12 Jul",
      date: "Fri 10 Jul 2026",
      title: "WhatsApp Status — Flexible checkout",
      assetType: "Story / WhatsApp Status",
      format: "1080 x 1920 px (9:16)",
      platforms: [
        "WhatsApp Status",
        "Instagram Stories"
      ],
      audience: "Everyone.",
      hook: "Choose your method.",
      body: "Top headline: Digital Wallets, Cards, or Corporate Insurance?\n\nMiddle : Choose your method, securely in the app.\n\nBottom CTA strip: Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      designDirection: "Visual: Icons representing MoMo, Visa/Mastercard, and an insurance card.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh"
    },
    {
      id: "mp-jul-2a",
      week: "Week of Mon 13 – Sun 19 Jul",
      date: "Mon 13 Jul 2026",
      title: "Square Flyer — Customer testimonial",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: [
        "Instagram",
        "Facebook"
      ],
      audience: "Skeptical buyers.",
      hook: "Don't just take our word for it.",
      body: "Headline: 'They delivered to my office in 45 minutes.'\n\nSub : Real stories from MedPharma users.\n\nSupporting line: Experience seamless healthcare for yourself.",
      designDirection: "Visual: Smiling portrait of a professional Ghanaian woman.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "Don't just take our word for it. Experience seamless healthcare and lightning-fast delivery for yourself.",
      hashtags: [
        "#MedPharmaGH",
        "#CustomerLove",
        "#SeamlessHealthcare"
      ]
    },
    {
      id: "mp-jul-2b",
      week: "Week of Mon 13 – Sun 19 Jul",
      date: "Thu 16 Jul 2026",
      title: "Square Flyer — Authenticity guarantee",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: [
        "Instagram",
        "Facebook",
        "X / Twitter"
      ],
      audience: "General audience.",
      hook: "Zero fakes. Zero compromises.",
      body: "Headline: Zero fakes. Zero compromises.\n\nSub : The MedPharma Authenticity Guarantee.\n\nSupporting line: Direct sourcing. Rigorous checks. Unwavering standards.",
      designDirection: "Visual: A bold, gold-foiled '100% Authentic' badge graphic.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "Zero fakes. Zero compromises. With the MedPharma Authenticity Guarantee, you never have to second-guess your medication.",
      hashtags: [
        "#MedPharmaGH",
        "#SafeMedication",
        "#SeamlessHealthcare"
      ]
    },
    {
      id: "mp-jul-2c",
      week: "Week of Mon 13 – Sun 19 Jul",
      date: "Sat 18 Jul 2026",
      title: "Educational Carousel — E-consultation value",
      assetType: "Educational Carousel",
      format: "1080 x 1350 px (4:5) · 3 slides",
      platforms: [
        "Instagram",
        "Facebook"
      ],
      audience: "Busy individuals feeling unwell.",
      hook: "Skip the waiting room.",
      slides: [
        {
          title: "Slide 1",
          body: "Headline: Skip the waiting room.\nSub: See a doctor from your couch."
        },
        {
          title: "Slide 2",
          body: "Headline: Licensed clinicians, on demand.\nBody: Secure video and text consultations right in the MedPharma app."
        },
        {
          title: "Slide 3 — CTA",
          body: "Headline: Care that comes to you.\nCTA block: Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh"
        }
      ],
      designDirection: "Visual: Professional doctor looking at a webcam or phone screen.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "Skip the waiting room. See a licensed clinician directly from the MedPharma app and get your prescriptions delivered instantly.",
      hashtags: [
        "#MedPharmaGH",
        "#TelehealthGhana",
        "#SeamlessHealthcare"
      ]
    },
    {
      id: "mp-jul-3a",
      week: "Week of Mon 20 – Sun 26 Jul",
      date: "Tue 21 Jul 2026",
      title: "WhatsApp Status — Prescription upload",
      assetType: "Story / WhatsApp Status",
      format: "1080 x 1920 px (9:16)",
      platforms: [
        "WhatsApp Status",
        "Instagram Stories"
      ],
      audience: "App users with physical prescriptions.",
      hook: "Snap a picture. Get your meds.",
      body: "Top: Have a physical prescription?\n\nMiddle : Snap a picture and upload it securely in the app.\n\nBottom CTA strip: Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      designDirection: "Visual: A phone taking a photo of a handwritten doctor's prescription.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh"
    },
    {
      id: "mp-jul-3b",
      week: "Week of Mon 20 – Sun 26 Jul",
      date: "Thu 23 Jul 2026",
      title: "Square Flyer — Insurance integration",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: [
        "Instagram",
        "Facebook",
        "LinkedIn"
      ],
      audience: "Insured individuals.",
      hook: "We accept your health insurance.",
      body: "Headline: We accept your health insurance.\n\nSub : Seamless processing via NHIS and major private insurers.\n\nSupporting line: Enter your details once. We handle the claims.",
      designDirection: "Visual: A stylized grid of partner insurance logos.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "Did you know MedPharma accepts NHIS and major private health insurance? Enter your details once, and let us handle the claims.",
      hashtags: [
        "#MedPharmaGH",
        "#HealthInsuranceGhana",
        "#SeamlessHealthcare"
      ]
    },
    {
      id: "mp-jul-4a",
      week: "Week of Mon 27 Jul – Sun 2 Aug",
      date: "Sat 1 Aug 2026",
      title: "Square Flyer — Future of healthcare",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: [
        "Instagram",
        "Facebook",
        "X / Twitter"
      ],
      audience: "General audience.",
      hook: "The future of healthcare is in your pocket.",
      body: "Headline: The future of healthcare is in your pocket.\n\nSub : MedPharma: Pharmacy, Clinic, and Delivery in one app.\n\nSupporting line: Step into the new standard of care.",
      designDirection: "Visual: A futuristic, glowing phone displaying the MedPharma logo.",
      cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
      caption: "The future of healthcare is in your pocket. Experience the new standard of care with the MedPharma app.",
      hashtags: [
        "#MedPharmaGH",
        "#FutureOfHealth",
        "#SeamlessHealthcare"
      ]
    },

    // ============ AUGUST WEEK 1 — Aug 3–9 (Founders' Day Aug 4) ============
    {
      id: "mp-aug-w1a",
      week: "Week of Mon 3 Aug – Sun 9 Aug",
      date: "Mon 4 Aug 2026",
      occasion: "Ghana Founders' Day (Public Holiday)",
      title: "Founders' Day — A healthy nation honours its founders best",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "General Ghanaian public.",
      hook: "The founders built this nation with discipline and consistency. Your health deserves the same.",
      body:
        "Headline: A healthy nation honours its founders best.\n\n" +
        "Sub: Happy Founders' Day from MedPharma. We are proud to be building a healthier Ghana — one seamless healthcare experience at a time.\n\n" +
        "Supporting: Download the MedPharma app today and join thousands of Ghanaians taking control of their health.",
      designDirection:
        "Ghana flag palette (red, gold, green, black star) woven elegantly with MedPharma teal. National pride aesthetic — bold, clean, patriotic.",
      cta: STD_CTA,
      hashtags: ["#FoundersDay", "#GhanaAt69", "#MedPharmaGH", "#HealthyGhana", "#SeamlessHealthcare"],
    },
    {
      id: "mp-aug-w1b",
      week: "Week of Mon 3 Aug – Sun 9 Aug",
      date: "Thu 7 Aug 2026",
      title: "Educational Carousel — The MedPharma app: A full tour in 5 slides",
      assetType: "Educational Carousel",
      format: "1080 x 1350 px (4:5) · 6 slides",
      platforms: ["Instagram", "Facebook"],
      audience: "App awareness — new and warm audience.",
      hook: "Most people still don't know everything MedPharma does. Let's fix that.",
      slides: [
        { title: "Slide 1 — Cover", body: "Headline: The MedPharma app.\nSub: A full tour. 5 slides. Everything you need to know." },
        { title: "Slide 2", body: "Feature 1: Medication Delivery.\nOrder any prescription or OTC medication and get it delivered to your door — anywhere in Accra." },
        { title: "Slide 3", body: "Feature 2: Virtual Doctor Consultations.\nBook a video call with a licensed Ghanaian doctor in minutes. No commute. No queue." },
        { title: "Slide 4", body: "Feature 3: Upload Your Prescription.\nTake a photo of your paper prescription. Our pharmacist verifies and dispatches your order." },
        { title: "Slide 5", body: "Feature 4: AI Health Assistant.\nAsk our 24/7 AI health companion any medical question — instantly and safely, any time of day." },
        { title: "Slide 6 — CTA", body: "Feature 5: FulLife / MCare Subscription.\nAutomatic monthly medication delivery + reminders + doctor access — all in one plan.\nCTA: " + STD_CTA },
      ],
      designDirection:
        "App UI showcase style. Clean, tech-forward. MedPharma teal. One app screenshot per slide where possible. Modern and aspirational.",
      cta: STD_CTA,
      hashtags: ["#MedPharmaGH", "#DigitalPharmacy", "#SeamlessHealthcare", "#AccraHealthTech"],
    },

    // ============ AUGUST WEEK 2 — Aug 10–16 (Youth Day Aug 12) ============
    {
      id: "mp-aug-w2a",
      week: "Week of Mon 10 Aug – Sun 16 Aug",
      date: "Wed 12 Aug 2026",
      occasion: "International Youth Day",
      title: "International Youth Day — Healthcare for the generation building tomorrow's Ghana",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "Young Ghanaians 18–35; parents of young people managing health conditions.",
      hook: "Young Ghanaians are building the future. MedPharma keeps them healthy enough to do it.",
      body:
        "Headline: Healthcare for the generation building tomorrow's Ghana.\n\n" +
        "Sub: International Youth Day is a reminder that asthma, sickle cell, anxiety, and early-onset hypertension affect young Ghanaians right now. Healthcare access cannot wait.\n\n" +
        "MedPharma: Fast, affordable, and digital healthcare — built for how young Ghanaians actually live.",
      designDirection:
        "Bold, energetic. Young Ghanaian professionals and students — diverse, vibrant. MedPharma teal. Modern typography. Urban setting.",
      cta: STD_CTA,
      hashtags: ["#InternationalYouthDay", "#YouthHealthGhana", "#MedPharmaGH", "#SeamlessHealthcare"],
    },
    {
      id: "mp-aug-w2b",
      week: "Week of Mon 10 Aug – Sun 16 Aug",
      date: "Fri 14 Aug 2026",
      title: "Story / WhatsApp Status — Sickle cell: managing it just got easier",
      assetType: "Story / WhatsApp Status",
      format: "1080 x 1920 px (9:16)",
      platforms: ["Instagram Stories", "WhatsApp Status", "Facebook Stories"],
      audience: "Young Ghanaians with sickle cell; their families and caregivers.",
      hook: "Sickle cell doesn't pause. Your medication access shouldn't either.",
      body:
        "Visual: Bold teal card. Clean typography.\nHeadline: Managing sickle cell just got easier.\nSub: MedPharma delivers your hydroxyurea, pain management meds, and supplements straight to your door — with zero pharmacy drama.\nCTA: Download MedPharma → " + APP,
      designDirection:
        "Strong, empowering. MedPharma teal on dark background. Sickle cell awareness red-cell graphic as subtle background element. Not clinical — empowering.",
      cta: STD_CTA,
      hashtags: ["#SickleCellGhana", "#MedPharmaGH", "#SeamlessHealthcare", "#YouthHealth"],
    },

    // ============ AUGUST WEEK 3 — Aug 17–23 (World Mosquito Day Aug 20) ============
    {
      id: "mp-aug-w3a",
      week: "Week of Mon 17 Aug – Sun 23 Aug",
      date: "Thu 20 Aug 2026",
      occasion: "World Mosquito Day",
      title: "World Mosquito Day — Order your malaria treatment before you need it",
      assetType: "Educational Carousel",
      format: "1080 x 1350 px (4:5) · 5 slides",
      platforms: ["Instagram", "Facebook"],
      audience: "General Ghanaian public, parents, caregivers.",
      hook: "World Mosquito Day: Malaria starts with a bite. Your response starts with MedPharma.",
      slides: [
        { title: "Slide 1 — Cover", body: "Headline: Ghana has one of the world's highest malaria burdens.\nSub: World Mosquito Day | 20 August 2026 | by MedPharma." },
        { title: "Slide 2", body: "The risk: During rainy season in Ghana, malaria transmission spikes significantly. Children under 5 and pregnant women are most at risk." },
        { title: "Slide 3", body: "What MedPharma offers:\n✓ Order antimalarial medications in the app\n✓ Get malaria test kits delivered to your door\n✓ Book a virtual consultation if you have symptoms\n✓ Upload your prescription for instant dispensing" },
        { title: "Slide 4", body: "Complete your full course:\nNever stop malaria treatment early — even when you feel better. Incomplete courses cause resistance and relapse.\nFulLife medication reminders keep you on track." },
        { title: "Slide 5 — CTA", body: "Headline: From prevention to treatment — MedPharma has you covered.\nCTA: " + STD_CTA },
      ],
      designDirection:
        "Health poster style — deep green and MedPharma teal. Mosquito net graphic. Ghanaian family — mother and child. Warm but educational.",
      cta: STD_CTA,
      hashtags: ["#WorldMosquitoDay", "#MalariaGhana", "#MedPharmaGH", "#SeamlessHealthcare"],
    },
    {
      id: "mp-aug-w3b",
      week: "Week of Mon 17 Aug – Sun 23 Aug",
      date: "Mon 18 Aug 2026",
      title: "Square Flyer — Book a lab test from the MedPharma app",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "Adults 25–60 due for routine blood work.",
      hook: "Your lab test doesn't need a waiting room. It needs a phone.",
      body:
        "Headline: Your blood work doesn't need a waiting room.\n\n" +
        "Sub: Book your malaria test, HbA1c, lipid panel, or full blood count directly in the MedPharma app. Results delivered digitally. No queues. No guessing.\n\n" +
        "Tap 'Book a Lab Test' in the MedPharma app today.",
      designDirection:
        "Clean, medical-tech. Lab tubes / test icon alongside a phone mockup of the booking flow. MedPharma teal. Confident and convenient.",
      cta: STD_CTA,
      hashtags: ["#MedPharmaGH", "#LabTests", "#SeamlessHealthcare", "#DigitalHealthGhana"],
    },

    // ============ AUGUST WEEK 4 — Aug 24–30 (Women's Equality Day Aug 26) ============
    {
      id: "mp-aug-w4a",
      week: "Week of Mon 24 Aug – Sun 30 Aug",
      date: "Wed 26 Aug 2026",
      occasion: "Women's Equality Day",
      title: "Women's Equality Day — Equal healthcare is not optional",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "LinkedIn", "X / Twitter"],
      audience: "Women 25–60; general public; advocacy-minded followers.",
      hook: "Equal rights mean equal access to healthcare — private, consistent, and dignified.",
      body:
        "Headline: Equal healthcare is not optional.\n\n" +
        "Sub: On Women's Equality Day, MedPharma stands for every woman's right to access her healthcare — without queues, stigma, or compromise.\n\n" +
        "Discreet delivery. Virtual consultations. Prescriptions managed in-app. Healthcare on your terms.",
      designDirection:
        "Bold, empowering. MedPharma teal and warm gold. Diverse Ghanaian women — different ages, different backgrounds. Strong, dignified, confident.",
      cta: STD_CTA,
      hashtags: ["#WomensEqualityDay", "#WomensHealthGhana", "#MedPharmaGH", "#SeamlessHealthcare"],
    },
    {
      id: "mp-aug-w4b",
      week: "Week of Mon 24 Aug – Sun 30 Aug",
      date: "Fri 28 Aug 2026",
      title: "LinkedIn PDF — Why Ghana's employers should include digital pharmacy in their health benefits",
      assetType: "LinkedIn PDF Document",
      format: "1920 x 1080 px (16:9) · 7 pages",
      platforms: ["LinkedIn"],
      audience: "HR Directors, CEOs, Business Owners, Corporate Health Leads.",
      hook: "Your employee's untreated hypertension is costing you far more than their sick days.",
      slides: [
        { title: "Page 1 — Cover", body: "Title: Digital Pharmacy as a Corporate Health Benefit: The Business Case for MedPharma.\nBy MedPharma Ghana." },
        { title: "Page 2", body: "The problem: 42% of working-age Ghanaians on long-term medication are non-adherent within the first 3 months. The main reason? Inconvenience of the physical pharmacy." },
        { title: "Page 3", body: "The business cost: Lost productivity, increased sick days, higher group health insurance premiums, and elevated risk of acute medical emergencies in the workplace." },
        { title: "Page 4", body: "The MedPharma corporate solution: Partner with us to include MedPharma / FulLife access in your employee health benefits package at a negotiated group rate." },
        { title: "Page 5", body: "What employees get: Medication delivered to their desk or home. 24/7 AI health assistant. Virtual doctor access. Digital health records and prescription management." },
        { title: "Page 6", body: "What the business gets: Healthier, more present team. Reduced insurance claims. Demonstrable wellbeing programme for ESG and recruitment purposes." },
        { title: "Page 7 — CTA", body: "Ready to build a healthier workforce?\nBook a corporate consultation: " + CALL + "\n" + APP },
      ],
      designDirection:
        "Premium corporate. Navy + MedPharma teal. Data charts, infographic-style layout. Boardroom-ready. Professional and authoritative.",
      cta: STD_CTA,
      hashtags: ["#MedPharmaGH", "#CorporateHealth", "#EmployeeWellbeing", "#SeamlessHealthcare", "#GhanaHR"],
    },

  ],
};

import { FULLIFE_Q4_PLAN, MEDPHARMA_Q4_PLAN } from "./contentPlansQ4";

export const PLAN_BY_BRAND: Record<string, ContentPlan> = {
  fullife: FULLIFE_PLAN,
  medpharma: MEDPHARMA_PLAN,
  "fullife-q4": FULLIFE_Q4_PLAN,
  "medpharma-q4": MEDPHARMA_Q4_PLAN,
};