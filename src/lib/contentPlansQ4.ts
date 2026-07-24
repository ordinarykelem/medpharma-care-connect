/**
 * Q4 2026 Content Plans — October · November · December
 * For FulLife & MedPharma
 * Tailored for the graphic designer handoff.
 * Ghana calendar events + global health observances captured.
 * Brand guide is already with the designer — not repeated here.
 */

import { ContentPlan } from "./contentPlans";

const CALL = "0557560448";
const APP  = "https://onelink.to/vhzcxh";
const STD_CTA = `Call ${CALL} or download the MedPharma App: ${APP}`;

// ====================================================================
// FULLIFE Q4 2026 PLAN
// Oct → Nov → Dec
// Key Ghana/World Health dates captured:
//  1 Oct  — World Heart Day (close proximity, high relevance)
//  2 Oct  — World Habitat Day (community / access angle)
// 10 Oct  — World Mental Health Day ★
// 14 Oct  — World Standards Day
// 16 Oct  — World Food Day ★ (nutrition + adherence angle)
// 20 Oct  — Ghana: National Farmers Day prep / Homowo season
// 31 Oct  — Halloween (light content)
//  1 Nov  — World Vegan Day (nutrition angle)
// 14 Nov  — World Diabetes Day ★★ (BIG)
// 17 Nov  — World COPD / Prematurity Day
// 18 Nov  — World Antibiotic Awareness Week (18–24 Nov) ★
// 25 Nov  — 16 Days of Activism begins (gender health)
//  1 Dec  — World AIDS Day ★
//  3 Dec  — Farmers' Day Ghana (public holiday) ★
//  5 Dec  — World Soil/Nature Day
// 10 Dec  — Human Rights Day
// 25 Dec  — Christmas Day ★
// 31 Dec  — New Year's Eve
// ====================================================================

export const FULLIFE_Q4_PLAN: ContentPlan = {
  brand: "FulLife",
  productNote:
    "FulLife is MedPharma's continuous medication & care programme for people on long-term/routine medication. Never use the word 'chronic' on creative — always say FulLife, consistency, routine medication, or daily adherence. This is the Q4 2026 (Oct–Dec) designer brief.",
  callLine: CALL,
  appLink: APP,
  rules: [
    "Use Black/African models in every lifestyle shot. No stock photos of non-African people.",
    "No emojis on the artwork — keep it clean and clinical-corporate.",
    "FulLife logo top-left on every asset. MedPharma 'Seamless Healthcare' lockup bottom-left.",
    "Every asset must show: phone line " + CALL + " + app QR/link. No exceptions.",
    "Never use the word 'chronic' on a customer-facing graphic — say FulLife, daily adherence, routine medication, consistency.",
    "Every CTA block must contain BOTH the call line and the app link — never just one.",
    "Q4 colour palette note: You may introduce warm tones (deep amber, forest green) for festive season posts — but anchor back to FulLife teal as the dominant colour.",
  ],
  briefs: [

    // ============ WEEK 1 — Oct 1–5 ============
    {
      id: "fl-q4-oct-w1a",
      week: "Week of Wed 1 Oct – Sun 5 Oct",
      date: "Wed 1 Oct 2026",
      occasion: "World Heart Day (29 Sep rollover)",
      title: "World Heart Day — Is your heart getting what it needs every day?",
      assetType: "Educational Carousel",
      format: "1080 x 1350 px (4:5) · 6 slides",
      platforms: ["Instagram", "Facebook", "LinkedIn"],
      audience: "Adults 35–65 on BP or heart medication; their adult children.",
      hook: "Your heart beats 100,000 times a day. It deserves a care partner just as consistent.",
      slides: [
        { title: "Slide 1 — Cover", body: "Headline: Your heart beats 100,000 times a day.\nSub: Is your care plan keeping up?\nVisual: Close-up of a Ghanaian man's chest, hand placed warmly on heart." },
        { title: "Slide 2 — The Problem", body: "Headline: Missing a dose doesn't feel like anything.\nBody: That's the danger of routine heart medication — the consequences are silent until they're not." },
        { title: "Slide 3 — Stat", body: "Headline: Hypertension is Ghana's leading cause of stroke.\nBody: 1 in 3 Ghanaian adults has high blood pressure. Most do not know it." },
        { title: "Slide 4 — The FulLife Angle", body: "Headline: Consistency is your best cardiologist.\nBody: FulLife delivers your heart medication to your door and sends you a reminder so it's never missed." },
        { title: "Slide 5 — Testimonial Placeholder", body: "Quote: 'Since joining FulLife, my BP is under control and I don't have to think about my refill anymore.' — [First name], Accra." },
        { title: "Slide 6 — CTA", body: "Headline: Make your heart the priority this October.\nCTA: " + STD_CTA },
      ],
      designDirection:
        "Deep teal + warm coral accent. Heartbeat line graphic running across slides. Lifestyle photo of a smiling Ghanaian man 50s+.",
      cta: STD_CTA,
      hashtags: ["#WorldHeartDay", "#FulLife", "#MedPharmaGH", "#HealthyHeart", "#SeamlessHealthcare"],
    },
    {
      id: "fl-q4-oct-w1b",
      week: "Week of Wed 1 Oct – Sun 5 Oct",
      date: "Fri 3 Oct 2026",
      title: "Story / WhatsApp Status — Reminder: Did you take today's dose?",
      assetType: "Story / WhatsApp Status",
      format: "1080 x 1920 px (9:16)",
      platforms: ["Instagram Stories", "WhatsApp Status", "Facebook Stories"],
      audience: "Existing FulLife members / warm audience.",
      hook: "A quick check-in from your FulLife care team.",
      body:
        "Visual: A clean, calming teal card. Pill icon at top.\nHeadline (large): Did you take today's dose?\nSub: FulLife members never have to guess — we remind you daily.\nCTA pill button: Join FulLife today → " + APP,
      designDirection:
        "Minimal. White text on FulLife teal. Soft pill graphic. No clutter. Feels like a caring nudge, not an advert.",
      cta: STD_CTA,
      hashtags: ["#FulLife", "#MedPharmaGH", "#DailyAdherence"],
    },

    // ============ WEEK 2 — Oct 6–12 ============
    {
      id: "fl-q4-oct-w2a",
      week: "Week of Mon 6 Oct – Sun 12 Oct",
      date: "Fri 10 Oct 2026",
      occasion: "World Mental Health Day",
      title: "World Mental Health Day — Your mental health includes what you take every day",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "Adults managing both physical and mental health conditions; caregivers.",
      hook: "Mental health and physical health are not separate. Your routine medication is part of both.",
      body:
        "Headline: Mental health starts with showing up for yourself — every single day.\n\n" +
        "Sub: Skipping your routine medication doesn't just affect your body. It affects your mood, your sleep, and your mind.\n\n" +
        "Supporting line: FulLife keeps your medication routine consistent, so you can focus on the rest of your wellbeing.",
      designDirection:
        "Warm, calming palette — soft peach and FulLife teal. Portrait of a Ghanaian woman 30s, eyes closed, peaceful expression. No clinical imagery.",
      cta: STD_CTA,
      hashtags: ["#WorldMentalHealthDay", "#FulLife", "#MedPharmaGH", "#MentalWellness", "#SeamlessHealthcare"],
    },
    {
      id: "fl-q4-oct-w2b",
      week: "Week of Mon 6 Oct – Sun 12 Oct",
      date: "Wed 8 Oct 2026",
      title: "Educational Carousel — What happens to your body when you skip a dose?",
      assetType: "Educational Carousel",
      format: "1080 x 1350 px (4:5) · 5 slides",
      platforms: ["Instagram", "Facebook"],
      audience: "Adults 30–65 on any routine medication.",
      hook: "One skipped dose feels harmless. Medically, it's not.",
      slides: [
        { title: "Slide 1 — Cover", body: "Headline: What actually happens when you skip a dose.\nSub: The answer might surprise you." },
        { title: "Slide 2 — BP Meds", body: "Headline: Blood pressure medication.\nBody: Skipping even one dose can cause a 'rebound' spike — elevating your risk of stroke within hours." },
        { title: "Slide 3 — Diabetes Meds", body: "Headline: Diabetes medication.\nBody: A missed dose can cause dangerous blood sugar fluctuations — felt as dizziness, fatigue, or worse." },
        { title: "Slide 4 — Mental Health Meds", body: "Headline: Antidepressants & mood stabilisers.\nBody: Missing doses can trigger discontinuation syndrome — causing flu-like symptoms and mood instability." },
        { title: "Slide 5 — CTA", body: "Headline: The solution isn't willpower. It's a system.\nBody: FulLife delivers your medication and reminds you daily — so missing a dose becomes history.\nCTA: " + STD_CTA },
      ],
      designDirection:
        "Data-led, clinical but warm. Use icon + text layout per slide. Soft red accent for the 'problem' slides; teal for the FulLife solution slide.",
      cta: STD_CTA,
      hashtags: ["#FulLife", "#MedPharmaGH", "#MedicationAdherence", "#HealthEducation"],
    },

    // ============ WEEK 3 — Oct 13–19 ============
    {
      id: "fl-q4-oct-w3a",
      week: "Week of Mon 13 Oct – Sun 19 Oct",
      date: "Thu 16 Oct 2026",
      occasion: "World Food Day",
      title: "World Food Day — Food and medicine: the daily duo you cannot ignore",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "Adults managing diet-sensitive conditions (diabetes, hypertension, high cholesterol).",
      hook: "Food is medicine. But some medicine needs your food to work properly.",
      body:
        "Headline: Food and medicine — the daily duo you cannot ignore.\n\n" +
        "Sub: For many routine medications to work at their full potential, timing with meals matters.\n\n" +
        "Supporting: FulLife's care team advises you on the right routine — not just the refill.",
      designDirection:
        "Rich, warm food photography — a typical Ghanaian breakfast (porridge, eggs, bread) with a pill organiser alongside. Clean teal CTA strip at bottom.",
      cta: STD_CTA,
      hashtags: ["#WorldFoodDay", "#FulLife", "#MedPharmaGH", "#NutritionAndHealth", "#SeamlessHealthcare"],
    },
    {
      id: "fl-q4-oct-w3b",
      week: "Week of Mon 13 Oct – Sun 19 Oct",
      date: "Tue 14 Oct 2026",
      title: "Story / WhatsApp Status — The MCare subscription: what's inside?",
      assetType: "Story / WhatsApp Status",
      format: "1080 x 1920 px (9:16)",
      platforms: ["Instagram Stories", "WhatsApp Status", "Facebook Stories"],
      audience: "Potential FulLife subscribers — warm awareness audience.",
      hook: "MCare isn't just a delivery. It's your entire care routine simplified.",
      body:
        "Visual: A vertical list-style card.\nHeadline: What you get with MCare:\n✓ Monthly medication delivered to your door\n✓ Daily dose reminders\n✓ Virtual doctor access\n✓ Your FulLife medical ID\n✓ Discounted refills\n\nSub: Starting from [price] / month.\nCTA: Join today → " + APP,
      designDirection:
        "Clean checklist layout. FulLife teal background. Each item fades in (for Reels/Motion version). Static version: bold typography.",
      cta: STD_CTA,
      hashtags: ["#MCare", "#FulLife", "#MedPharmaGH", "#HealthSubscription"],
    },

    // ============ WEEK 4 — Oct 20–26 ============
    {
      id: "fl-q4-oct-w4a",
      week: "Week of Mon 20 Oct – Sun 26 Oct",
      date: "Mon 20 Oct 2026",
      title: "Educational Carousel — 5 signs your medication routine needs a reset",
      assetType: "Educational Carousel",
      format: "1080 x 1350 px (4:5) · 6 slides",
      platforms: ["Instagram", "Facebook"],
      audience: "Adults on routine medication for 6+ months who may have lapsed.",
      hook: "If any of these feel familiar, your routine needs FulLife.",
      slides: [
        { title: "Slide 1 — Cover", body: "Headline: 5 signs your medication routine needs a reset.\nSub: Be honest with yourself." },
        { title: "Slide 2", body: "Sign 1: You have missed more than 3 doses this month.\nBody: It happens. What matters is what you do next." },
        { title: "Slide 3", body: "Sign 2: You ran out last month before the refill.\nBody: Running out isn't a discipline problem — it's a system problem." },
        { title: "Slide 4", body: "Sign 3: Your doctor's last review showed your numbers going in the wrong direction.\nBody: Inconsistency is the quiet saboteur of progress." },
        { title: "Slide 5", body: "Sign 4: You have 3 or more medications and manage them mentally.\nBody: The human brain was not designed to track multiple schedules. Systems exist for a reason." },
        { title: "Slide 6 — CTA", body: "Sign 5: You dread running to the pharmacy every month.\nHeadline: Reset your routine with FulLife.\nBody: Delivery + reminders + care — all in one subscription.\nCTA: " + STD_CTA },
      ],
      designDirection:
        "Bold numbered format. Warm amber and teal palette. Lifestyle imagery of Ghanaian adults looking reflective, not stressed.",
      cta: STD_CTA,
      hashtags: ["#FulLife", "#MedPharmaGH", "#MedicationRoutine", "#DailyAdherence"],
    },

    // ============ WEEK 5 — Oct 27 – Nov 2 ============
    {
      id: "fl-q4-nov-w1a",
      week: "Week of Mon 27 Oct – Sun 2 Nov",
      date: "Thu 30 Oct 2026",
      title: "Square Flyer — End of Month: Is your refill sorted?",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "WhatsApp"],
      audience: "Existing FulLife members and warm audience.",
      hook: "The last day of the month is not the day to discover you're out of medication.",
      body:
        "Headline: End of October. Is your refill sorted?\n\n" +
        "Sub: MCare members never have to ask this question — we deliver before you run out.\n\n" +
        "Supporting: No queues, no drives, no surprises.",
      designDirection:
        "Calendar graphic showing the last days of October. Clean, minimal. Teal dominant. Pill icon with a tick/check mark.",
      cta: STD_CTA,
      hashtags: ["#FulLife", "#MedPharmaGH", "#MCare", "#RefillReminder"],
    },

    // ============ WEEK 6 — Nov 3–9 ============
    {
      id: "fl-q4-nov-w2a",
      week: "Week of Mon 3 Nov – Sun 9 Nov",
      date: "Wed 5 Nov 2026",
      title: "Educational Carousel — The 30-day FulLife promise: What changes in a month?",
      assetType: "Educational Carousel",
      format: "1080 x 1350 px (4:5) · 5 slides",
      platforms: ["Instagram", "Facebook", "LinkedIn"],
      audience: "Adults considering signing up for FulLife / MCare.",
      hook: "30 days on FulLife. Here is what actually changes.",
      slides: [
        { title: "Slide 1 — Cover", body: "Headline: Your first 30 days on FulLife.\nSub: Here is what actually changes." },
        { title: "Slide 2", body: "Week 1: Your first delivery arrives. No pharmacy run. Your medication is at the door." },
        { title: "Slide 3", body: "Week 2: Your doctor has your full history in one place. Consultations get shorter and more useful." },
        { title: "Slide 4", body: "Week 3: You haven't missed a dose. Your daily reminder is doing the work." },
        { title: "Slide 5 — CTA", body: "Week 4: Your numbers are trending in the right direction.\nHeadline: 30 days can change a year.\nCTA: " + STD_CTA },
      ],
      designDirection:
        "Week-by-week progress layout. Simple, clean. Green upward trend line graphic. Ghanaian model, looking progressively more confident across slides.",
      cta: STD_CTA,
      hashtags: ["#FulLife", "#MedPharmaGH", "#30DayChallenge", "#DailyAdherence", "#SeamlessHealthcare"],
    },

    // ============ WORLD DIABETES DAY — Nov 14 ============
    {
      id: "fl-q4-nov-wdd-a",
      week: "Week of Mon 10 Nov – Sun 16 Nov",
      date: "Fri 14 Nov 2026",
      occasion: "World Diabetes Day ★★",
      title: "World Diabetes Day — Managing diabetes is a daily act of love",
      assetType: "Educational Carousel",
      format: "1080 x 1350 px (4:5) · 6 slides",
      platforms: ["Instagram", "Facebook", "LinkedIn"],
      audience: "Adults living with diabetes; their families; general awareness.",
      hook: "Diabetes doesn't take a day off. Neither does FulLife.",
      slides: [
        { title: "Slide 1 — Cover", body: "Headline: Managing diabetes is a daily act of love.\nSub: World Diabetes Day | 14 November 2026." },
        { title: "Slide 2", body: "Stat: Ghana has over 500,000 people living with diabetes. Many go unmanaged due to access and adherence barriers." },
        { title: "Slide 3", body: "Headline: The most dangerous myth about diabetes:\nBody: 'I only need my medication when I feel sick.' Diabetes management is every single day — whether you feel it or not." },
        { title: "Slide 4", body: "Headline: FulLife was built for this exact person.\nBody: Monthly medication delivered. Daily reminders sent. Virtual doctor always available." },
        { title: "Slide 5", body: "Headline: For the person managing a parent's diabetes from abroad:\nBody: Pay for their MCare subscription from anywhere in the world. We deliver and remind them locally." },
        { title: "Slide 6 — CTA", body: "Headline: Diabetes requires daily care. FulLife provides it.\nCTA: " + STD_CTA },
      ],
      designDirection:
        "Blue circle (World Diabetes Day brand colour) as a design element, blended with FulLife teal. Portrait of a Ghanaian man 50s+ looking healthy and active.",
      cta: STD_CTA,
      hashtags: ["#WorldDiabetesDay", "#FulLife", "#MedPharmaGH", "#DiabetesGhana", "#SeamlessHealthcare"],
    },
    {
      id: "fl-q4-nov-wdd-b",
      week: "Week of Mon 10 Nov – Sun 16 Nov",
      date: "Fri 14 Nov 2026",
      occasion: "World Diabetes Day ★★ — WhatsApp Push",
      title: "World Diabetes Day — Story: Are you monitoring your blood sugar today?",
      assetType: "Story / WhatsApp Status",
      format: "1080 x 1920 px (9:16)",
      platforms: ["Instagram Stories", "WhatsApp Status", "Facebook Stories"],
      audience: "Adults with diabetes and their family members.",
      hook: "World Diabetes Day: One question only.",
      body:
        "Visual: Bold type on a clean blue/teal split screen.\nBig question (top half): Have you checked your blood sugar today?\nSub (bottom half): FulLife keeps your diabetes medication schedule and reminders on track — every day.\nCTA button: Start your free month → " + APP,
      designDirection:
        "Split-screen. Top: blue (WHO Diabetes Day brand). Bottom: FulLife teal. Bold, minimal, medical-authoritative.",
      cta: STD_CTA,
      hashtags: ["#WorldDiabetesDay", "#FulLife", "#MedPharmaGH"],
    },

    // ============ Antibiotic Awareness Week — Nov 18–24 ============
    {
      id: "fl-q4-nov-abx",
      week: "Week of Mon 17 Nov – Sun 23 Nov",
      date: "Tue 18 Nov 2026",
      occasion: "World Antibiotic Awareness Week",
      title: "Antibiotic Awareness Week — Are you finishing your antibiotics properly?",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "General public, particularly parents and adults who self-medicate.",
      hook: "Stopping your antibiotics early is more dangerous than not starting them.",
      body:
        "Headline: Are you finishing your antibiotics?\n\n" +
        "Sub: The biggest mistake in antibiotic use is stopping when you feel better — not when the course is finished.\n\n" +
        "Supporting: Your MedPharma pharmacist and the FulLife reminders system ensures you complete every course, every time.",
      designDirection:
        "Clean, bold medical graphic. Red and teal. Pill strip visual — some pills crossed off, some remaining. Strong educational tone.",
      cta: STD_CTA,
      hashtags: ["#AntibioticAwareness", "#FulLife", "#MedPharmaGH", "#ResistanceIsFutile", "#SeamlessHealthcare"],
    },

    // ============ WEEK — Nov 24–30 ============
    {
      id: "fl-q4-nov-w5a",
      week: "Week of Mon 24 Nov – Sun 30 Nov",
      date: "Wed 26 Nov 2026",
      title: "LinkedIn PDF — Why medication adherence is a business productivity issue in Ghana",
      assetType: "LinkedIn PDF Document",
      format: "1920 x 1080 px (16:9) slides · 8 pages",
      platforms: ["LinkedIn"],
      audience: "HR managers, CEOs, business owners, corporate health leads.",
      hook: "Your employee's missed medication is costing you more than their sick days.",
      slides: [
        { title: "Page 1 — Cover", body: "Title: The Hidden Productivity Cost of Medication Non-Adherence in Ghana's Workforce.\nBy MedPharma / FulLife." },
        { title: "Page 2", body: "The challenge: 60% of Ghanaian adults on long-term medication are non-adherent within 6 months." },
        { title: "Page 3", body: "The business impact: Uncontrolled hypertension and diabetes lead to cognitive fatigue, absenteeism, and higher group insurance premiums." },
        { title: "Page 4", body: "The FulLife corporate solution: Partner with MedPharma to offer your employees a subsidised MCare subscription as part of their health benefits package." },
        { title: "Page 5", body: "What employees get: Monthly medication delivery to the office. Daily reminders. Virtual doctor access. Digital health record." },
        { title: "Page 6", body: "What the business gets: Healthier, more present workforce. Reduced health insurance claims. A demonstrable ESG/wellbeing commitment." },
        { title: "Page 7", body: "Testimonial / case study placeholder." },
        { title: "Page 8 — CTA", body: "Interested in a corporate FulLife package?\nContact us: " + CALL + "\n" + APP },
      ],
      designDirection:
        "Corporate LinkedIn aesthetic. Navy + teal. Data visualisations and infographic-style charts. Professional, boardroom-ready.",
      cta: STD_CTA,
      hashtags: ["#FulLife", "#MedPharmaGH", "#CorporateWellness", "#EmployeeHealth", "#GhanaBusinessHealth"],
    },

    // ============ WORLD AIDS DAY — Dec 1 ============
    {
      id: "fl-q4-dec-aids",
      week: "Week of Mon 1 Dec – Sun 7 Dec",
      date: "Mon 1 Dec 2026",
      occasion: "World AIDS Day ★",
      title: "World AIDS Day — Consistent care, consistent life",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "General public. Sensitive, awareness-driven tone.",
      hook: "Consistent treatment means consistent life. No exceptions, no days off.",
      body:
        "Headline: Consistent care. Consistent life.\n\n" +
        "Sub: On World AIDS Day, we stand for the dignity of every person on a treatment plan — and their right to access medication consistently, privately, and without stigma.\n\n" +
        "FulLife: Discreet delivery. Daily support. Zero judgement.",
      designDirection:
        "Red ribbon motif blended respectfully with FulLife teal. Warm, dignified portrait of a Ghanaian adult. Empathetic tone — NOT clinical or fear-based.",
      cta: STD_CTA,
      hashtags: ["#WorldAIDSDay", "#FulLife", "#MedPharmaGH", "#ConsistentCare", "#EndAIDS"],
    },

    // ============ FARMERS' DAY / Dec 5 ============
    {
      id: "fl-q4-dec-farmers",
      week: "Week of Mon 1 Dec – Sun 7 Dec",
      date: "Fri 5 Dec 2026",
      occasion: "Ghana Farmers' Day (Public Holiday)",
      title: "Farmers' Day — To those who feed Ghana: we keep you well",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "General Ghanaian public; rural and peri-urban audience.",
      hook: "You feed the nation. We help keep you in the field.",
      body:
        "Headline: To those who feed Ghana — we keep you well.\n\n" +
        "Sub: Happy Farmers' Day from the MedPharma family.\n\n" +
        "Supporting: No matter where you are in Ghana, FulLife delivers your medication and keeps your routine on track — so you can keep doing what you do best.",
      designDirection:
        "Warm earth tones. Ghanaian farming scene — a proud woman or man in a green field. FulLife teal ribbon or badge overlay. Festive but grounded.",
      cta: STD_CTA,
      hashtags: ["#FarmersDay", "#GhanaFarmersDay", "#FulLife", "#MedPharmaGH", "#HealthyGhana"],
    },

    // ============ MID DEC ============
    {
      id: "fl-q4-dec-w2a",
      week: "Week of Mon 8 Dec – Sun 14 Dec",
      date: "Wed 10 Dec 2026",
      occasion: "Human Rights Day",
      title: "Human Rights Day — Access to medication is a human right",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "LinkedIn"],
      audience: "General public; advocacy-minded followers.",
      hook: "Access to consistent healthcare is not a privilege. It is a right.",
      body:
        "Headline: Access to medication is a human right.\n\n" +
        "Sub: On Human Rights Day, MedPharma reaffirms its mission: seamless, dignified healthcare for every Ghanaian — regardless of location or income.\n\n" +
        "FulLife: Making consistent care accessible.",
      designDirection:
        "Bold typographic poster style. FulLife teal + black. Simple, impactful. No medical imagery — make it feel like a movement.",
      cta: STD_CTA,
      hashtags: ["#HumanRightsDay", "#FulLife", "#MedPharmaGH", "#HealthIsARight", "#SeamlessHealthcare"],
    },
    {
      id: "fl-q4-dec-w2b",
      week: "Week of Mon 8 Dec – Sun 14 Dec",
      date: "Fri 12 Dec 2026",
      title: "Educational Carousel — Year-end health review: 5 things to do before 31 December",
      assetType: "Educational Carousel",
      format: "1080 x 1350 px (4:5) · 6 slides",
      platforms: ["Instagram", "Facebook"],
      audience: "Adults 30–65 on routine medication.",
      hook: "Before the year ends, your health deserves a proper review.",
      slides: [
        { title: "Slide 1 — Cover", body: "Headline: 5 things to do for your health before the year ends.\nSub: A checklist from your FulLife care team." },
        { title: "Slide 2", body: "1. Book your year-end labs.\nBody: HbA1c, lipid panel, BP review — know exactly where your numbers are before January." },
        { title: "Slide 3", body: "2. Ensure your December refill is sorted.\nBody: Pharmacies get busier in December. MCare members don't have to worry." },
        { title: "Slide 4", body: "3. Review your medication list with your doctor.\nBody: Any new prescriptions this year? Anything to stop? Do the review — not in January when it's too late." },
        { title: "Slide 5", body: "4. Set up your medication routine for January.\nBody: January is when most routines break. Set your reminder schedule now." },
        { title: "Slide 6 — CTA", body: "5. Protect your health plan for the new year.\nBody: Join FulLife before 31 December and start 2027 in control.\nCTA: " + STD_CTA },
      ],
      designDirection:
        "Year-end checklist aesthetic. Clean, warm tones. Tick-box graphic. Ghanaian model in smart casual attire, looking organised and confident.",
      cta: STD_CTA,
      hashtags: ["#FulLife", "#MedPharmaGH", "#YearEndHealth", "#HealthChecklist", "#SeamlessHealthcare"],
    },

    // ============ CHRISTMAS ============
    {
      id: "fl-q4-dec-xmas",
      week: "Week of Mon 22 Dec – Thu 25 Dec",
      date: "Thu 25 Dec 2026",
      occasion: "Christmas Day",
      title: "Christmas — The best gift is a healthy new year",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "WhatsApp", "X / Twitter"],
      audience: "All followers — warm, broad.",
      hook: "Merry Christmas. The best present you can give yourself is showing up healthy in 2027.",
      body:
        "Headline: Merry Christmas from the MedPharma family.\n\n" +
        "Sub: May your season be filled with joy, rest, and good health.\n\n" +
        "Note: Even on Christmas Day, FulLife members' medication schedule runs. No day off for your health routine.",
      designDirection:
        "Warm festive palette — deep forest green + FulLife teal + gold. Ghanaian family scene. Festive but not overdone. Elegant, not kitsch.",
      cta: STD_CTA,
      hashtags: ["#MerryChristmas", "#FulLife", "#MedPharmaGH", "#SeamlessHealthcare", "#HealthyGhana"],
    },

    // ============ NEW YEAR'S EVE ============
    {
      id: "fl-q4-dec-nye",
      week: "Week of Mon 28 Dec – Thu 31 Dec",
      date: "Wed 31 Dec 2026",
      occasion: "New Year's Eve",
      title: "New Year's Eve — Start 2027 with your health sorted",
      assetType: "Story / WhatsApp Status",
      format: "1080 x 1920 px (9:16)",
      platforms: ["Instagram Stories", "WhatsApp Status", "Facebook Stories"],
      audience: "All followers.",
      hook: "Tonight is for celebration. Tomorrow is for commitment.",
      body:
        "Visual: Countdown-style bold type. FulLife teal + gold.\nHeadline: Tonight is for celebration.\nSub: Tomorrow is for commitment — to your health, your routine, and your family.\nCTA: Start 2027 as a FulLife member → " + APP,
      designDirection:
        "Bold New Year countdown aesthetic. FulLife teal and gold. Celebratory but purposeful — not just a generic New Year card.",
      cta: STD_CTA,
      hashtags: ["#NewYearsEve", "#FulLife", "#MedPharmaGH", "#HealthyNewYear2027"],
    },
  ],
};

// ====================================================================
// MEDPHARMA Q4 2026 PLAN
// Oct → Nov → Dec
// ====================================================================
export const MEDPHARMA_Q4_PLAN: ContentPlan = {
  brand: "MedPharma",
  productNote:
    "MedPharma is Ghana's premier digital pharmacy and healthcare platform — pharmacy delivery, virtual consultations, lab diagnostics, and prescription management in one app. Q4 2026 (Oct–Dec) designer brief. The brand guide is already with you.",
  callLine: CALL,
  appLink: APP,
  rules: [
    "Use Black/African models in every lifestyle shot. No stock photos of non-African people.",
    "No emojis on the artwork — keep it clean and clinical-corporate.",
    "MedPharma 'Seamless Healthcare' lockup bottom-left on every asset.",
    "Every asset must show: phone line " + CALL + " + app QR/link. No exceptions.",
    "Product photography must show the actual MedPharma app interface where relevant — screenshots from the design team.",
    "Q4 colour palette note: MedPharma teal stays dominant. You may introduce warm gold accents for Christmas/New Year posts only.",
  ],
  briefs: [

    // ============ WEEK 1 — Oct 1–5 ============
    {
      id: "mp-q4-oct-w1a",
      week: "Week of Wed 1 Oct – Sun 5 Oct",
      date: "Wed 1 Oct 2026",
      occasion: "World Heart Day Rollover",
      title: "World Heart Day — Your heart is in good hands with MedPharma",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "General Ghanaian public, adults 30+.",
      hook: "A healthy heart needs a reliable healthcare partner.",
      body:
        "Headline: Your heart is in good hands.\n\n" +
        "Sub: From BP medication delivery to virtual cardiologist consultations — MedPharma is your complete heart health partner.\n\n" +
        "On World Heart Day: Download the MedPharma app and take the first step.",
      designDirection:
        "Heartbeat ECG line graphic in MedPharma teal. Warm lifestyle shot of a healthy Ghanaian couple. Clean, confident, authoritative.",
      cta: STD_CTA,
      hashtags: ["#WorldHeartDay", "#MedPharmaGH", "#HeartHealth", "#SeamlessHealthcare"],
    },
    {
      id: "mp-q4-oct-w1b",
      week: "Week of Wed 1 Oct – Sun 5 Oct",
      date: "Fri 3 Oct 2026",
      title: "Educational Carousel — 5 services you didn't know MedPharma offered",
      assetType: "Educational Carousel",
      format: "1080 x 1350 px (4:5) · 6 slides",
      platforms: ["Instagram", "Facebook"],
      audience: "New and warm audience — app awareness drive.",
      hook: "Most people only know us for delivery. Here's the full picture.",
      slides: [
        { title: "Slide 1 — Cover", body: "Headline: 5 things MedPharma does that most people don't know about.\nSub: You've been sleeping on a full healthcare platform." },
        { title: "Slide 2", body: "1. Virtual Doctor Consultations.\nBook a video call with a licensed Ghanaian doctor in under 2 minutes — no commute, no queue." },
        { title: "Slide 3", body: "2. Lab Diagnostics Booking.\nBook your blood work, cholesterol panel, or HbA1c from the app. Results delivered digitally." },
        { title: "Slide 4", body: "3. Upload & Dispense Prescriptions.\nTake a photo of your handwritten prescription in the app. Our pharmacists verify and deliver." },
        { title: "Slide 5", body: "4. Your Digital Health Vault.\nAll your prescriptions, lab results, and medical history — stored securely in one place." },
        { title: "Slide 6 — CTA", body: "5. GPS-Pinned Door Delivery.\nMedication delivered to your exact address — office, home, or wherever you are in Accra.\nCTA: " + STD_CTA },
      ],
      designDirection:
        "Feature-by-feature reveal layout. MedPharma teal icons. Clean, app-screenshot style for one or two slides. Modern and tech-forward.",
      cta: STD_CTA,
      hashtags: ["#MedPharmaGH", "#SeamlessHealthcare", "#DigitalPharmacy", "#AccraHealthTech"],
    },

    // ============ WEEK 2 — Oct 6–12 ============
    {
      id: "mp-q4-oct-w2a",
      week: "Week of Mon 6 Oct – Sun 12 Oct",
      date: "Fri 10 Oct 2026",
      occasion: "World Mental Health Day",
      title: "World Mental Health Day — Mental health prescriptions deserve the same care as any other",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "Adults managing mental health conditions; caregivers; general awareness.",
      hook: "Your mental health prescription deserves the same privacy, dignity, and consistency as any other.",
      body:
        "Headline: Your mental health prescription matters.\n\n" +
        "Sub: MedPharma delivers all medication in discreet, unmarked packaging — with zero judgement and complete privacy.\n\n" +
        "Supporting: Book a virtual mental health consultation directly in the app.",
      designDirection:
        "Warm peach + MedPharma teal. Calm Ghanaian woman 30s, peaceful expression. No clinical imagery. Dignified and empathetic. Mind/brain icon in soft line art.",
      cta: STD_CTA,
      hashtags: ["#WorldMentalHealthDay", "#MedPharmaGH", "#MentalHealthGhana", "#SeamlessHealthcare"],
    },

    // ============ WEEK 3 — Oct 13–19 ============
    {
      id: "mp-q4-oct-w3a",
      week: "Week of Mon 13 Oct – Sun 19 Oct",
      date: "Thu 16 Oct 2026",
      occasion: "World Food Day",
      title: "World Food Day — Nutrition is the first prescription",
      assetType: "Educational Carousel",
      format: "1080 x 1350 px (4:5) · 5 slides",
      platforms: ["Instagram", "Facebook"],
      audience: "Health-conscious adults; people managing diet-sensitive conditions.",
      hook: "Before the pharmacy, there is the kitchen. Nutrition is your first prescription.",
      slides: [
        { title: "Slide 1 — Cover", body: "Headline: Nutrition is your first prescription.\nSub: World Food Day | 16 October 2026 | by MedPharma." },
        { title: "Slide 2", body: "Headline: Food and medication work together — or against each other.\nBody: Some medications must be taken with food. Others on an empty stomach. Getting this wrong reduces effectiveness." },
        { title: "Slide 3", body: "Headline: The foods that silently interfere with your meds:\n• Grapefruit and BP medication\n• High-fat meals and certain antibiotics\n• High-sodium foods and diuretics" },
        { title: "Slide 4", body: "Headline: Ask your MedPharma pharmacist — it's free.\nBody: Every prescription dispensed through the MedPharma app includes pharmacist counselling on food interactions." },
        { title: "Slide 5 — CTA", body: "Headline: Your prescription is only half the picture. Food is the other half.\nCTA: " + STD_CTA },
      ],
      designDirection:
        "Rich food photography mixed with clean infographic slides. Ghanaian food staples (kenkey, kontomire, fish, fruits) styled beautifully alongside medication imagery.",
      cta: STD_CTA,
      hashtags: ["#WorldFoodDay", "#MedPharmaGH", "#NutritionGhana", "#SeamlessHealthcare"],
    },

    // ============ WEEK 4 — Oct 20–26 ============
    {
      id: "mp-q4-oct-w4a",
      week: "Week of Mon 20 Oct – Sun 26 Oct",
      date: "Mon 20 Oct 2026",
      title: "Story / WhatsApp Status — Upload your prescription in 3 taps",
      assetType: "Story / WhatsApp Status",
      format: "1080 x 1920 px (9:16)",
      platforms: ["Instagram Stories", "WhatsApp Status", "Facebook Stories"],
      audience: "App download conversion audience.",
      hook: "Paper prescription? 3 taps and it's sorted.",
      body:
        "Visual: Screen-recording style mockup — showing the upload flow.\nStep 1: Open MedPharma app.\nStep 2: Tap 'Upload Prescription'.\nStep 3: Photo → pharmacist review → delivery confirmed.\nHeadline: Your paper prescription just became a doorstep delivery.\nCTA: Download → " + APP,
      designDirection:
        "App UI mockup style. Phone frame showing the 3-step flow. Clean, tech-forward. MedPharma teal UI. No cluttered text.",
      cta: STD_CTA,
      hashtags: ["#MedPharmaGH", "#DigitalPharmacy", "#PrescriptionDelivery", "#SeamlessHealthcare"],
    },
    {
      id: "mp-q4-oct-w4b",
      week: "Week of Mon 20 Oct – Sun 26 Oct",
      date: "Thu 23 Oct 2026",
      title: "Square Flyer — Insurance? MedPharma handles it",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "Private health insurance holders.",
      hook: "The day you stop dreading the insurance queue is the day you download MedPharma.",
      body:
        "Headline: Your health insurance should work for you, not the other way around.\n\n" +
        "Sub: MedPharma accepts major private health insurance. Enter your details once in the app — we handle the rest. No queues. No forms. No waiting.\n\n" +
        "Supporting: NHIS also accepted at participating pharmacy points.",
      designDirection:
        "Clean, minimal. Insurance card graphic + MedPharma phone mockup. MedPharma teal. Confident, professional tone.",
      cta: STD_CTA,
      hashtags: ["#MedPharmaGH", "#HealthInsuranceGhana", "#SeamlessHealthcare", "#DigitalPharmacy"],
    },

    // ============ WORLD DIABETES DAY — Nov 14 ============
    {
      id: "mp-q4-nov-wdd",
      week: "Week of Mon 10 Nov – Sun 16 Nov",
      date: "Fri 14 Nov 2026",
      occasion: "World Diabetes Day ★★",
      title: "World Diabetes Day — Managing diabetes shouldn't be a full-time job",
      assetType: "Educational Carousel",
      format: "1080 x 1350 px (4:5) · 5 slides",
      platforms: ["Instagram", "Facebook", "LinkedIn"],
      audience: "Adults with diabetes; their families; healthcare workers.",
      hook: "Managing diabetes shouldn't feel like a full-time job. MedPharma makes it effortless.",
      slides: [
        { title: "Slide 1 — Cover", body: "Headline: Managing diabetes shouldn't be a full-time job.\nSub: World Diabetes Day | 14 November 2026." },
        { title: "Slide 2", body: "The reality: Monthly pharmacy runs. Tracking blood sugar. Managing diet. Remembering multiple medications. Booking lab tests. It adds up." },
        { title: "Slide 3", body: "What MedPharma takes off your plate:\n✓ Monthly medication delivered\n✓ HbA1c labs booked from the app\n✓ Virtual doctor for prescription reviews\n✓ Daily reminders included" },
        { title: "Slide 4", body: "For the Ghanaian diabetic living abroad or sending for parents:\nPay for their care in the app. We deliver locally and keep them on track." },
        { title: "Slide 5 — CTA", body: "Headline: Your diabetes management just got a digital upgrade.\nCTA: " + STD_CTA },
      ],
      designDirection:
        "Blue circle (World Diabetes Day brand colour) blended with MedPharma teal. Checklist graphic. Ghanaian adult 50s+ looking empowered, not sick.",
      cta: STD_CTA,
      hashtags: ["#WorldDiabetesDay", "#MedPharmaGH", "#DiabetesGhana", "#SeamlessHealthcare"],
    },

    // ============ ANTIBIOTIC AWARENESS WEEK ============
    {
      id: "mp-q4-nov-abx",
      week: "Week of Mon 17 Nov – Sun 23 Nov",
      date: "Tue 18 Nov 2026",
      occasion: "World Antibiotic Awareness Week",
      title: "Antibiotic Awareness Week — Your pharmacist matters more than Google",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "General public; parents; adults who self-medicate with antibiotics.",
      hook: "Google cannot check your kidney function. Your pharmacist can.",
      body:
        "Headline: Before you self-prescribe antibiotics — talk to a pharmacist.\n\n" +
        "Sub: Antibiotic resistance is one of the world's most urgent health crises. It starts with the wrong antibiotic, at the wrong dose, stopped too early.\n\n" +
        "MedPharma: Pharmacist consultation included with every prescription order.",
      designDirection:
        "Bold, slightly alarming (in a good way). Red and teal. 'Stop' iconography — but empowering, not scary. Pharmacist in MedPharma scrubs graphic or photo.",
      cta: STD_CTA,
      hashtags: ["#AntibioticResistance", "#MedPharmaGH", "#WorldAntibioticWeek", "#SeamlessHealthcare"],
    },

    // ============ WORLD AIDS DAY ============
    {
      id: "mp-q4-dec-aids",
      week: "Week of Mon 1 Dec – Sun 7 Dec",
      date: "Mon 1 Dec 2026",
      occasion: "World AIDS Day ★",
      title: "World AIDS Day — Private delivery. Zero stigma.",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "General public. Sensitive, awareness-driven tone.",
      hook: "Your treatment. Your privacy. Our commitment.",
      body:
        "Headline: Private delivery. Zero stigma.\n\n" +
        "Sub: On World AIDS Day, MedPharma reaffirms that every patient deserves access to their medication — privately, consistently, and with dignity.\n\n" +
        "All MedPharma deliveries are in discreet, unmarked packaging. No questions. No judgement.",
      designDirection:
        "Red ribbon motif — subtle, respectful. MedPharma teal + deep charcoal. Empathetic, warm photography. NOT clinical.",
      cta: STD_CTA,
      hashtags: ["#WorldAIDSDay", "#MedPharmaGH", "#PrivateCare", "#SeamlessHealthcare", "#EndAIDS"],
    },

    // ============ FARMERS' DAY ============
    {
      id: "mp-q4-dec-farmers",
      week: "Week of Mon 1 Dec – Sun 7 Dec",
      date: "Fri 5 Dec 2026",
      occasion: "Ghana Farmers' Day (Public Holiday)",
      title: "Farmers' Day — Happy Farmers' Day from MedPharma",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "General Ghanaian public.",
      hook: "To every hand that feeds Ghana — we keep you in good health.",
      body:
        "Headline: Happy Farmers' Day from MedPharma.\n\n" +
        "Sub: To the farmers, the harvesters, the market women, and everyone who keeps Ghana fed — thank you.\n\n" +
        "Note: We deliver your medication wherever you are — no matter how far from the city.",
      designDirection:
        "Warm earth tones + MedPharma teal. Rural Ghanaian scene. Proud, celebratory, community-focused. Not health-heavy — this is a celebration post.",
      cta: STD_CTA,
      hashtags: ["#GhanaFarmersDay", "#MedPharmaGH", "#SeamlessHealthcare", "#HealthyGhana"],
    },

    // ============ MID DEC ============
    {
      id: "mp-q4-dec-w2a",
      week: "Week of Mon 8 Dec – Sun 14 Dec",
      date: "Wed 10 Dec 2026",
      title: "Educational Carousel — Your December health checklist",
      assetType: "Educational Carousel",
      format: "1080 x 1350 px (4:5) · 5 slides",
      platforms: ["Instagram", "Facebook"],
      audience: "Adults 30+ managing ongoing health conditions.",
      hook: "December is the month most routines break. Don't let yours be one of them.",
      slides: [
        { title: "Slide 1 — Cover", body: "Headline: Your December health checklist.\nSub: From MedPharma. For people who take their health seriously." },
        { title: "Slide 2", body: "✓ Refill your medication before the Christmas rush.\nPharmacies across Accra will be packed by 20 December. Sort it now." },
        { title: "Slide 3", body: "✓ Book your year-end lab tests.\nWait until January and you'll be behind everyone else. Book now through the MedPharma app." },
        { title: "Slide 4", body: "✓ Set a medication reminder for the holiday period.\nFestivities disrupt schedules. Your pills don't take Christmas Day off." },
        { title: "Slide 5 — CTA", body: "✓ Download the MedPharma app before 15 December.\nEnsure your December delivery is sorted before the holiday shutdown.\nCTA: " + STD_CTA },
      ],
      designDirection:
        "Checklist poster style. Warm December palette — teal + gold. Slight festive feel but still clinical-professional. Tick icons in MedPharma teal.",
      cta: STD_CTA,
      hashtags: ["#MedPharmaGH", "#DecemberHealth", "#SeamlessHealthcare", "#HealthChecklist"],
    },
    {
      id: "mp-q4-dec-w2b",
      week: "Week of Mon 8 Dec – Sun 14 Dec",
      date: "Fri 12 Dec 2026",
      title: "LinkedIn PDF — MedPharma Year in Review 2026",
      assetType: "LinkedIn PDF Document",
      format: "1920 x 1080 px (16:9) · 8 pages",
      platforms: ["LinkedIn"],
      audience: "Investors, partners, healthcare professionals, corporate audience.",
      hook: "2026 was the year seamless healthcare became real in Ghana.",
      slides: [
        { title: "Page 1 — Cover", body: "MedPharma: Year in Review 2026.\nSeamless Healthcare. Delivered." },
        { title: "Page 2", body: "Milestone: [X] prescriptions dispensed. [X] virtual consultations completed. [X] cities reached." },
        { title: "Page 3", body: "FulLife Growth: [X] active MCare subscribers. Average medication adherence rate: [X%]." },
        { title: "Page 4", body: "Technology milestones: AI Health Assistant launched. Wearable integrations added. Insurance portal expanded." },
        { title: "Page 5", body: "Community impact: Partnerships with [X] corporate employers. [X] health awareness campaigns run." },
        { title: "Page 6", body: "2027 Preview: Expansion to [cities]. New features: [feature 1], [feature 2]. Partnership announcements." },
        { title: "Page 7", body: "What our patients say: [Testimonials placeholder]." },
        { title: "Page 8 — CTA", body: "Partner with MedPharma in 2027.\n" + CALL + " | " + APP },
      ],
      designDirection:
        "Premium corporate annual report aesthetic. Navy + MedPharma teal + gold. Data visualisations, clean typography. Boardroom-ready.",
      cta: STD_CTA,
      hashtags: ["#MedPharmaGH", "#YearInReview", "#SeamlessHealthcare", "#GhanaHealthTech"],
    },

    // ============ CHRISTMAS ============
    {
      id: "mp-q4-dec-xmas",
      week: "Week of Mon 22 Dec – Thu 25 Dec",
      date: "Thu 25 Dec 2026",
      occasion: "Christmas Day",
      title: "Christmas — Season's greetings from MedPharma",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "WhatsApp", "X / Twitter"],
      audience: "All followers — broad, warm.",
      hook: "Wishing you a joyful, healthy Christmas from the MedPharma family.",
      body:
        "Headline: Merry Christmas from MedPharma.\n\n" +
        "Sub: Wishing you a season of good health, warmth, and joy.\n\n" +
        "Note: Our app and delivery service operates through the holidays — because health doesn't take a break.",
      designDirection:
        "Warm festive. Deep green + MedPharma teal + gold. Ghanaian family scene, Christmas setting. Elegant. Not kitsch. Logo prominent.",
      cta: STD_CTA,
      hashtags: ["#MerryChristmas", "#MedPharmaGH", "#SeamlessHealthcare", "#HealthyGhana"],
    },

    // ============ NEW YEAR'S EVE ============
    {
      id: "mp-q4-dec-nye",
      week: "Week of Mon 28 Dec – Thu 31 Dec",
      date: "Wed 31 Dec 2026",
      occasion: "New Year's Eve",
      title: "New Year's Eve — Start 2027 with MedPharma",
      assetType: "Story / WhatsApp Status",
      format: "1080 x 1920 px (9:16)",
      platforms: ["Instagram Stories", "WhatsApp Status", "Facebook Stories"],
      audience: "All followers.",
      hook: "Your 2027 health resolution starts tonight.",
      body:
        "Visual: Bold countdown. MedPharma teal + gold.\nHeadline: 2027 resolution: Put your health first.\nSub: Download MedPharma. Keep your medication consistent. Book your first virtual consultation. Start the year in control.\nCTA: Download now → " + APP,
      designDirection:
        "New Year countdown aesthetic. MedPharma teal and gold. Bold, aspirational, motivating. Feels like a health promise — not just a greeting card.",
      cta: STD_CTA,
      hashtags: ["#NewYear2027", "#MedPharmaGH", "#SeamlessHealthcare", "#HealthyNewYear"],
    },
  ],
};
