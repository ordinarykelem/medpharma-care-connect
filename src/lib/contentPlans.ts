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
    "Primary palette: FulLife teal #2BB3C0, FulLife coral #F25A2B, MedPharma green #1A7F3C, charcoal #1B1B1B, soft cream #FFF6E8, accent yellow #FFD24A used as a highlighter behind black text.",
    "Headline font: heavy condensed sans (e.g., Druk / Anton / Acumin Pro Black). Body font: Inter or Helvetica Neue.",
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
        "Headline (large, white on teal): An Africa that lives longer is an Africa that takes its medication on time.\n\n" +
        "Sub-line (yellow highlighter behind black): FulLife — your daily adherence partner.\n\n" +
        "Supporting line (small, white): Built in Ghana for Ghanaians on routine medication. Refills delivered. Reminders that work. A care team that already knows you.",
      designDirection:
        "Full-bleed FulLife teal background. Subtle silhouette of the African continent watermarked at 8% opacity behind the headline. Right-side close-up portrait of a Ghanaian woman (35–55) smiling, looking off-camera. Yellow highlighter strip behind the FulLife sub-line. Bottom 120px white footer strip with full CTA lockup.",
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
        { title: "Slide 4", body: "Headline: Money that stays in your pocket.\nBody: One emergency admission costs more than a year of consistent care." },
        { title: "Slide 5", body: "Headline: Energy for the people you love.\nBody: Your grandchildren, your students, your patients — they need the version of you that took the dose." },
        { title: "Slide 6 — CTA", body: "Headline: Join the FulLife family today.\nCTA block: " + STD_CTA },
      ],
      designDirection:
        "Slide 1 cover: deep teal background, oversized condensed headline in white, single coral '5' as a graphic anchor on the right. Slides 2–5: alternate cream and teal backgrounds for rhythm; each slide has one large lifestyle photo (Ghanaian subjects) on the right, headline on the left, short body underneath. Slide 6 CTA: coral background, white headline, white CTA block with phone + QR.",
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
        "Top headline (white on coral): Don't let Sunday be the day you realise you've run out.\n\n" +
        "Middle — yellow highlighter behind black text: FulLife refills your routine medication BEFORE it finishes.\n\n" +
        "Bottom CTA strip (white): " + STD_CTA,
      designDirection:
        "Vertical 9:16. Top half: motion-blurred photo of a delivery rider at dusk (re-use the brand's existing rider photography style). Bottom half: solid coral block with the headline + yellow-highlighter sub-line stacked. Footer 220px tall white strip with full CTA lockup, phone icon, app QR.",
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
        "Three highlighted bullets (yellow strip behind black):\n" +
        "1. Monthly door-step delivery\n2. Smart reminders that learn your schedule\n3. One care team that already knows your file\n\n" +
        "CTA: " + STD_CTA,
      designDirection:
        "Cream background. Centre-right: hero shot of a FulLife-branded medication pouch being handed over (gloved pharmacist hand → patient hand). Left column: numbered bullets with coral circular numerals (1, 2, 3) and yellow highlighter behind the bold word in each bullet. Bottom 120px white footer strip with CTA lockup.",
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
        "Slide 1: deep red/maroon background (one-time exception from teal — the day calls for it), white headline. Slide 2: large red-on-cream stat '1 PINT = 3 LIVES'. Slides 3–4: shift back to FulLife teal with a single large editorial portrait of a Ghanaian subject on the right. Slide 5 CTA: coral background, white CTA block.",
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
        "Headline (large, white on teal): He never missed your school run.\n\n" +
        "Sub (yellow highlighter behind black): Make sure he never misses his dose.\n\n" +
        "Supporting line (small, white): Enroll Dad in FulLife today. Monthly delivery, smart reminders, and a care team that picks up the phone — so the man who carried everyone gets carried, gently, in return.\n\n" +
        "CTA: " + STD_CTA,
      designDirection:
        "Left 60%: warm, golden-hour portrait of a Ghanaian father (55–70) with his adult child — close, candid, hand on shoulder. Right 40%: solid teal block with stacked headline and yellow highlighter sub-line. Bottom 120px white footer strip with full CTA lockup. Add a small 'A FulLife gift for Dad' coral seal in the top-right corner of the photo.",
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
        { title: "Page 2", body: "Headline: Your highest-cost employees are not the sickest. They are the inconsistent.\nBody: Missed routine medication is the single biggest predictor of an avoidable hospital admission." },
        { title: "Page 3", body: "Headline: One admission can wipe out a year of preventive savings.\nBody: A 3-night admission for an uncontrolled hypertension event in Accra now averages over GHS 9,000 in private care." },
        { title: "Page 4", body: "Headline: FulLife is medication continuity, delivered as an employee benefit.\nBody: Monthly door-step refills · smart reminders · a named care team · in-app e-consultations." },
        { title: "Page 5", body: "Headline: Designed for the schedule of a working professional.\nBody: No queues. No half-day off to visit a pharmacy. Refills land at the office or the gate." },
        { title: "Page 6", body: "Headline: One dashboard for HR. Zero PHI exposure.\nBody: You see uptake and engagement. You never see what anyone is being treated for." },
        { title: "Page 7", body: "Headline: Three ways to deploy.\nBody: 1. Fully employer-funded · 2. Co-paid · 3. Subsidised enrollment with payroll deduction." },
        { title: "Page 8 — CTA", body: "Headline: Let's run the numbers for your team.\nBody: Reply to this post or email partnerships@medpharma.care.\nCTA block: " + STD_CTA },
      ],
      designDirection:
        "Editorial / annual-report look. Cream pages 1, 3, 5, 7. Teal pages 2, 4, 6, 8. Heavy condensed headlines, generous margins (top/bottom 120px, sides 96px). One restrained data callout per page (giant number in coral, small label underneath). Page numbers bottom-right '02 / 08' style. No lifestyle photos until page 4, then one professional portrait of a Ghanaian executive.",
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
        { title: "Frame 1", body: "Visual: phone on a kitchen table, FulLife reminder notification glowing on the lock screen, morning light, half-eaten breakfast.\nOverlay text (top, white on transparent): 7:42 AM — the reminder lands before the rush." },
        { title: "Frame 2", body: "Visual: hands receiving a FulLife-branded medication pouch at a front gate from a delivery rider.\nOverlay text: Day 28 — the next month arrives before the last pill leaves." },
        { title: "Frame 3", body: "Visual: same person from Frame 1, now mid-laugh with a child / colleague / patient — clearly back in life.\nOverlay text: The point was never the pill. It was the day you got back." },
      ],
      designDirection:
        "Three images that obviously belong together — same colour grade (warm, slightly desaturated), same overlay text style (white condensed sans, top-aligned), same small FulLife wordmark bottom-right. Shoot or composite all three with Ghanaian subjects.",
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
        "Sub (yellow highlighter behind black): Show up. Take the dose. Stay in the story.\n\n" +
        "Supporting line: Happy Republic Day from FulLife and MedPharma — proudly built in Ghana, for Ghana.",
      designDirection:
        "Background: vertical gradient from FulLife teal (top) to MedPharma green (bottom). A single subtle Black Star watermarked centre at 12% opacity. Headline left-aligned, large condensed white. Yellow highlighter sub-line directly below. Bottom 120px white footer strip with CTA lockup. No lifestyle photo on this one — let the typography carry it.",
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
        "Cream background throughout for a calm, almost editorial feel. Each slide has ONE oversized icon (drawn in coral line-work, not stock icons): calendar, prescription pad, doorstep package, smiling face. Headline below the icon, body two lines max. Slide 5: flip to teal with white type for the CTA payoff.",
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
        "Sub (yellow highlighter behind black): On World Hepatitis Day, FulLife stands with everyone managing a long-term liver condition.\n\n" +
        "Supporting line: Routine medication, delivered. Reminders that show up. A care team that already knows your history.\n\n" +
        "CTA: " + STD_CTA,
      designDirection:
        "Solid deep teal background (slightly darker than house teal for the gravity of the day). Centre: a single, restrained coral ribbon graphic (the hepatitis awareness symbol) — not a photo. Type stacked left-aligned. Bottom 120px white footer strip with CTA lockup.",
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
        "Left 55%: Headline (white on teal): Six months. One quiet promise — never run out.\nSub (yellow highlighter behind black): FulLife monthly newsletter · July 2026 edition.\n\nRight 45%: composite image of a Ghanaian pharmacist + the MedPharma app screen + a smiling older customer — the same composition language as the existing newsletter header in the brand library, just refreshed with the FulLife wordmark dominant top-right.",
      designDirection:
        "Match the existing FulLife newsletter header style (teal-to-green gradient, app phone mock, Ghanaian model on the left). Update the headline only. Keep the FulLife wordmark large in the top-right and the MedPharma 'Seamless Healthcare' lockup in the bottom-left.",
      cta: STD_CTA,
    },
  ],
};

// =================================================================
// MEDPHARMA GENERAL BRAND PLAN — late May (W4), June, July
// =================================================================
export const MEDPHARMA_PLAN: ContentPlan = {
  brand: "MedPharma",
  productNote:
    "MedPharma is the parent brand: full-service e-pharmacy, medication delivery anywhere in Ghana, in-app doctor chat (Kobikuul AI + human clinicians), corporate health partnerships. Tone: warm, expert, locally rooted, action-oriented.",
  callLine: CALL,
  appLink: APP,
  rules: [
    "Lead with the MedPharma 'Seamless Healthcare' lockup — full logo top-left.",
    "Use Black/African models exclusively in lifestyle shots.",
    "No emojis on the artwork itself. Emojis are fine in the social caption only.",
    "Every asset must show: " + CALL + " + app QR/link + the @medpharma / @medpharmagh handle row.",
    "Primary palette: MedPharma green #1A7F3C, MedPharma blue #0F4FA8, charcoal #1B1B1B, soft cream #FFF6E8, accent yellow #FFD24A as a highlighter behind black text.",
    "Headline font: heavy condensed sans. Body: Inter / Helvetica Neue.",
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
        { title: "Slide 3", body: "Headline: We talk to a doctor for you, before you pay.\nBody: Chat with Kobikuul, our in-app AI, then a real clinician if you need one." },
        { title: "Slide 4", body: "Headline: We remember your prescription so you don't have to.\nBody: One profile. Every refill. No re-uploading the same script." },
        { title: "Slide 5", body: "Headline: We work with your insurance, your employer, or your wallet.\nBody: Cash, mobile money, NHIA-supported items, corporate billing." },
        { title: "Slide 6 — CTA", body: "Headline: One app. The whole pharmacy.\nCTA block: " + STD_CTA },
      ],
      designDirection:
        "Slide 1: deep MedPharma green background, oversized white condensed headline, '5' in a yellow highlighter circle on the right. Slides 2–5: alternate cream and green for rhythm. Each slide carries ONE simple coral-and-green line illustration on the right (motorbike rider, chat bubble, prescription pad, wallet) — not photos. Slide 6: blue background, white CTA block.",
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
        "Top — yellow highlighter behind black: Question.\nHeadline (white): How fast is MedPharma delivery, really?\n\nBottom — yellow highlighter behind black: Answer.\nHeadline (white): Same-day in Accra. Next-day everywhere else in Ghana.\n\nFooter (white block): " + STD_CTA,
      designDirection:
        "Vertical 9:16. Background: deep MedPharma green. Match the visual format of the existing 'How do I ensure I never miss my medication?' WhatsApp flyer in the brand library — yellow Question/Answer chips, big white condensed headlines, white CTA block at the bottom. Add a small motion-blurred rider silhouette behind the answer block at 15% opacity for context.",
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
        "Headline (white, bottom-left): Time for a refill?\n\nSub (yellow highlighter behind black): We're already on the road.\n\nSupporting line: Order on the MedPharma app or call " + CALL + " — and a rider is dispatched within the hour, anywhere in Ghana.",
      designDirection:
        "Re-use the brand's existing motion-blurred night-rider photography style (the red-tail-light shot already in the brand library). Type stacked bottom-left in white condensed sans. Yellow highlighter sub-line directly underneath. Bottom 120px white footer strip with full CTA lockup.",
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
        "Headline: The first opinion is always free.\n\nSub (yellow highlighter behind black): And it's already in your phone.\n\nSupporting line: Chat with Kobikuul, MedPharma's in-app health assistant, any time. If your case needs a human, we'll connect you to a clinician — no queue, no waiting room.\n\nCTA: " + STD_CTA,
      designDirection:
        "Match the existing Kobikuul flyer composition (teal-to-green gradient, doctor holding the phone with the app open, Kobikuul mascot bottom-centre). Refresh only the headline. Keep the mascot, keep the doctor portrait, keep the CTA strip.",
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
        "Headline (centre, white): Eid Mubarak.\n\nSub (centre, white, lighter weight): May this season bring health, peace, and abundance to you and your loved ones.\n\nFooter line (yellow highlighter behind black): The MedPharma pharmacy and delivery service is open through the holiday — call " + CALL + " any time.",
      designDirection:
        "Background: deep MedPharma green with subtle gold/cream Islamic geometric pattern at 8% opacity (do not use crescent + star clichés — use a refined geometric tessellation instead). Centred typography. Bottom 120px white footer strip with full CTA lockup. No lifestyle photo on this one — keep it dignified.",
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
        { title: "Page 2", body: "Headline: Smartphone penetration crossed the threshold.\nBody: Mobile money is universal. Telehealth is normalised. The infrastructure for digital pharmacy is no longer the bottleneck." },
        { title: "Page 3", body: "Headline: The bottleneck is trust.\nBody: Patients want to know: is the medication real, is the dose right, will it arrive, and will someone pick up the phone if it doesn't." },
        { title: "Page 4", body: "Headline: How MedPharma earns it.\nBody: Licensed pharmacists in every fulfilment centre · cold-chain handling for sensitive items · same-day in Accra, next-day nationwide · in-app clinician chat." },
        { title: "Page 5", body: "Headline: What's next: continuity, not just convenience.\nBody: With FulLife, we're moving from one-off orders to managed monthly care for people on routine medication." },
        { title: "Page 6", body: "Headline: For partners.\nBody: We work with insurers, employers, and clinics. One integration. Three payment modalities. Real reporting." },
        { title: "Page 7 — CTA", body: "Headline: Let's talk.\nBody: partnerships@medpharma.care\nCTA: " + STD_CTA },
      ],
      designDirection:
        "Editorial / annual-report look. Cream pages 1, 3, 5, 7. Green pages 2, 4, 6. Heavy condensed headlines, generous margins. One restrained data callout per page (giant number, small label). Page numbers bottom-right '02 / 07'. Use one professional Ghanaian portrait on page 4 and one on page 6 — never more than that.",
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
        "Headline (white): Built in Ghana, for Ghana.\n\nSub (yellow highlighter behind black): Every order, every rider, every refill.\n\nSupporting line: Happy Republic Day from the MedPharma family. The pharmacy is open today — call " + CALL + " or order in the app.",
      designDirection:
        "Background: vertical gradient from MedPharma green (top) to MedPharma blue (bottom). A single restrained Black Star watermarked centre at 12% opacity. Type left-aligned, large white condensed. Yellow highlighter sub-line underneath. Bottom 120px white footer strip with CTA lockup.",
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
        "Cream backgrounds for slides 1–4 with one restrained green-and-coral line illustration per slide (pharmacist signature, thermometer, receipt with QR). Slide 5: solid green with white type for the payoff. Headlines large condensed black; body in Inter regular underneath.",
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
        "Headline (left): The whole pharmacy.\nSub (left, slightly smaller): In your pocket.\n\nRight side: phone mock showing the MedPharma app home screen.\n\nBottom (yellow highlighter behind black): Scan to download — or call " + CALL + ".",
      designDirection:
        "Background: MedPharma green-to-blue diagonal gradient. Left half: stacked condensed type in white. Right half: realistic phone mock-up (use the same phone style as the existing 'New Standard' newsletter header — same device, same shadow, same angle) showing the MedPharma app, NOT mCare branding — be precise. Bottom 120px white footer strip with the QR code enlarged 30% from default + the call line.",
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
        "Headline (white): Get tested. Then, if you need to, keep going.\n\nSub (yellow highlighter behind black): MedPharma supports every Ghanaian on long-term liver care.\n\nSupporting line: Talk to a clinician in the app. Refills delivered. A care team that doesn't lose your file.\n\nCTA: " + STD_CTA,
      designDirection:
        "Background: deep MedPharma green. Centre-left: a single restrained coral awareness ribbon graphic (not a photo). Right: stacked typography. Bottom 120px white footer strip with CTA lockup.",
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
        { title: "Frame 1", body: "Visual: phone close-up, MedPharma app order confirmation screen.\nOverlay text (top): 9:14 AM — order placed in 30 seconds." },
        { title: "Frame 2", body: "Visual: pharmacist in green coat checking and sealing a small MedPharma-branded paper bag.\nOverlay text: 9:46 AM — a real pharmacist signs it off." },
        { title: "Frame 3", body: "Visual: front gate / front door of a typical Accra home, rider handing the bag to the customer.\nOverlay text: 11:02 AM — at your gate. This is normal." },
      ],
      designDirection:
        "Three images that obviously belong together — same warm colour grade, same overlay text style (white condensed sans, top-aligned), same small MedPharma 'Seamless Healthcare' lockup bottom-right. All Ghanaian subjects. No emojis on the artwork.",
      cta: STD_CTA,
      caption:
        "Order placed at 9:14. At your gate by 11:02. This is normal at MedPharma. Tap to download: " + APP,
      hashtags: ["#MedPharmaGH", "#OnlinePharmacyGhana", "#AccraTikTok", "#GhanaTikTok"],
    },
  ],
};

export const PLAN_BY_BRAND: Record<string, ContentPlan> = {
  fullife: FULLIFE_PLAN,
  medpharma: MEDPHARMA_PLAN,
};