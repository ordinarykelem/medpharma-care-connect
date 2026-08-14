/**
 * Q4 2026 Content Plans - October · November · December
 * For FulLife & MedPharma
 * Tailored for the graphic designer handoff.
 * Ghana calendar events + global health observances captured.
 * Brand guide is already with the designer - not repeated here.
 */

import type { ContentPlan } from "./contentPlans";

const CALL = "0557560448";
const APP  = "https://onelink.to/vhzcxh";
const STD_CTA = `Call ${CALL} or download the MedPharma App: ${APP}`;

// ====================================================================
// FULLIFE Q4 2026 PLAN
// Oct → Nov → Dec
// Key Ghana/World Health dates captured:
//  1 Oct  - World Heart Day (close proximity, high relevance)
//  2 Oct  - World Habitat Day (community / access angle)
// 10 Oct  - World Mental Health Day ★
// 14 Oct  - World Standards Day
// 16 Oct  - World Food Day ★ (nutrition + taking medication consistently angle)
// 20 Oct  - Ghana: National Farmers Day prep / Homowo season
// 31 Oct  - Halloween (light content)
//  1 Nov  - World Vegan Day (nutrition angle)
// 14 Nov  - World Diabetes Day ★★ (BIG)
// 17 Nov  - World COPD / Prematurity Day
// 18 Nov  - World Antibiotic Awareness Week (18-24 Nov) ★
// 25 Nov  - 16 Days of Activism begins (gender health)
//  1 Dec  - World AIDS Day ★
//  3 Dec  - Farmers' Day Ghana (public holiday) ★
//  5 Dec  - World Soil/Nature Day
// 10 Dec  - Human Rights Day
// 25 Dec  - Christmas Day ★
// 31 Dec  - New Year's Eve
// ====================================================================

export const FULLIFE_Q4_PLAN: ContentPlan = {
  brand: "FulLife",
  productNote:
    "FulLife is MedPharma's continuous medication & care programme for people on long-term/daily medication. Never use the word 'chronic' on creative - always say FulLife, consistency, daily medication, or daily taking medication consistently. This is the Q4 2026 (Oct-Dec) designer brief.",
  callLine: CALL,
  appLink: APP,
  rules: [
    "Use Black/African models in every lifestyle shot. No stock photos of non-African people.",
    "No emojis on the artwork - keep it clean and clinical-corporate.",
    "FulLife logo top-left on every asset. MedPharma 'Seamless Healthcare' lockup bottom-left.",
    "Every asset must show: phone line " + CALL + " + app QR/link. No exceptions.",
    "Never use the word 'chronic' on a customer-facing graphic - say FulLife, daily taking medication consistently, daily medication, consistency.",
    "Every CTA block must contain BOTH the call line and the app link - never just one.",
    "Q4 colour palette note: You may introduce warm tones (deep amber, forest green) for festive season posts - but anchor back to FulLife teal as the dominant colour.",
  ],
  briefs: [

    // ============ WEEK 1 - Oct 1-5 ============
    {
      id: "fl-q4-oct-w1a",
        week: "Week of Mon 28 Sept - Sun 4 Oct",
        date: "Tue, 29 Sept 2026",
        title: "World Heart Day - Is your heart getting what it needs every day?",
      assetType: "Information Carousel",
      format: "1080 x 1350 px (4:5) · 6 slides",
      platforms: ["Instagram", "Facebook", "LinkedIn"],
      audience: "Adults 35-65 on BP or heart medication; their adult children.",
      hook: "Your heart beats 100,000 times a day. It deserves a care partner just as consistent.",
      slides: [
        { title: "Slide 1 - Cover", body: "Headline: Your heart beats 100,000 times a day.\nSub: Is your care plan keeping up?\nBackground: Close-up of a Ghanaian man's chest, hand placed warmly on heart." },
        { title: "Slide 2 - The Problem", body: "Headline: Missing a dose doesn't feel like anything.\nBody: That's the danger of routine heart medication - the consequences are silent until they're not." },
        { title: "Slide 3 - Stat", body: "Headline: Hypertension is Ghana's leading cause of stroke.\nBody: 1 in 3 Ghanaian adults has high blood pressure. Most do not know it." },
        { title: "Slide 4 - The FulLife Angle", body: "Headline: Consistency is your best cardiologist.\nBody: FulLife delivers your heart medication to your door and sends you a reminder so it's never missed." },
        { title: "Slide 5 - Testimonial Placeholder", body: "Quote: 'Since joining FulLife, my BP is under control and I don't have to think about my refill anymore.' - [First name], Accra." },
        { title: "Slide 6 - CTA", body: "Headline: Make your heart the priority this October." },
      ],
      designDirection:
        "Deep teal + warm coral accent. Heartbeat line graphic running across slides. Lifestyle photo of a smiling Ghanaian man 50s+.",
      cta: STD_CTA,
      hashtags: ["#WorldHeartDay", "#FulLife", "#MedPharmaGH", "#HealthyHeart", "#SeamlessHealthcare"],
    },
    {
      id: "fl-q4-oct-w1b",
        week: "Week of Mon 28 Sept - Sun 4 Oct",
        date: "Thu, 1 Oct 2026",
        title: "Story / WhatsApp Status - Reminder: Did you take today's dose?",
      assetType: "Story / WhatsApp Status",
      format: "1080 x 1920 px (9:16)",
      platforms: ["Instagram Stories", "WhatsApp Status", "Facebook Stories"],
      audience: "Existing FulLife members / warm audience.",
      hook: "A quick check-in from your FulLife care team.",
      body:
        "Headline (large): Did you take today's dose?\nSub: FulLife members never have to guess - we remind you daily.\nCTA pill button: Join FulLife today → " + APP,
      designDirection:
        "Minimal. White text on FulLife teal. Soft pill graphic. No clutter. Feels like a caring nudge, not an advert.",
      cta: STD_CTA,
      hashtags: ["#FulLife", "#MedPharmaGH", "#DailyConsistency"],
    },

    // ============ WEEK 2 - Oct 6-12 ============
    {
      id: "fl-q4-oct-w2a",
        week: "Week of Mon 28 Sept - Sun 4 Oct",
        date: "Sat, 3 Oct 2026",
        title: "World Mental Health Day - Your mental health includes what you take every day",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "Adults managing both physical and mental health conditions; caregivers.",
      hook: "Mental health and physical health are not separate. Your daily medication is part of both.",
      body:
        "Headline: Mental health starts with showing up for yourself - every single day.\n\n" +
        "Sub: Skipping your daily medication doesn't just affect your body. It affects your mood, your sleep, and your mind.\n\n" +
        "Supporting line: FulLife keeps your medication routine consistent, so you can focus on the rest of your wellbeing.",
      designDirection:
        "Warm, calming palette - soft peach and FulLife teal. Portrait of a Ghanaian woman 30s, eyes closed, peaceful expression. No clinical imagery.",
      cta: STD_CTA,
      hashtags: ["#WorldMentalHealthDay", "#FulLife", "#MedPharmaGH", "#MentalWellness", "#SeamlessHealthcare"],
    },
    {
      id: "fl-q4-oct-w2b",
        week: "Week of Mon 5 Oct - Sun 11 Oct",
        date: "Tue, 6 Oct 2026",
        title: "Information Carousel - What happens to your body when you skip a dose?",
      assetType: "Information Carousel",
      format: "1080 x 1350 px (4:5) · 5 slides",
      platforms: ["Instagram", "Facebook"],
      audience: "Adults 30-65 on any daily medication.",
      hook: "One skipped dose feels harmless. Medically, it's not.",
      slides: [
        { title: "Slide 1 - Cover", body: "Headline: What actually happens when you skip a dose.\nSub: The answer might surprise you." },
        { title: "Slide 2 - BP Medications", body: "Headline: Blood pressure medication.\nBody: Skipping even one dose can cause a 'rebound' spike - elevating your risk of stroke within hours." },
        { title: "Slide 3 - Diabetes Medications", body: "Headline: Diabetes medication.\nBody: A missed dose can cause dangerous blood sugar fluctuations - felt as dizziness, fatigue, or worse." },
        { title: "Slide 4 - Mental Health Medications", body: "Headline: Antidepressants & mood stabilisers.\nBody: Missing doses can trigger discontinuation syndrome - causing flu-like symptoms and mood instability." },
        { title: "Slide 5 - CTA", body: "Headline: The solution isn't willpower. It's a system.\nBody: FulLife delivers your medication and reminds you daily - so missing a dose becomes history." },
      ],
      designDirection:
        "Data-led, clinical but warm. Use icon + text layout per slide. Soft red accent for the 'problem' slides; teal for the FulLife solution slide.",
      cta: STD_CTA,
      hashtags: ["#FulLife", "#MedPharmaGH", "#MedicationConsistency", "#HealthEducation"],
    },

    // ============ WEEK 3 - Oct 13-19 ============
    {
      id: "fl-q4-oct-w3a",
        week: "Week of Mon 5 Oct - Sun 11 Oct",
        date: "Thu, 8 Oct 2026",
        title: "World Food Day - Food and medicine: the daily duo you cannot ignore",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "Adults managing diet-sensitive conditions (diabetes, hypertension, high cholesterol).",
      hook: "Food is medicine. But some medicine needs your food to work properly.",
      body:
        "Headline: Food and medicine - the daily duo you cannot ignore.\n\n" +
        "Sub: For many daily medications to work at their full potential, timing with meals matters.\n\n" +
        "Supporting: FulLife's care team advises you on the right routine - not just the refill.",
      designDirection:
        "Rich, warm food photography - a typical Ghanaian breakfast (porridge, eggs, bread) with a pill organiser alongside. Clean teal CTA strip at bottom.",
      cta: STD_CTA,
      hashtags: ["#WorldFoodDay", "#FulLife", "#MedPharmaGH", "#NutritionAndHealth", "#SeamlessHealthcare"],
    },
    {
      id: "fl-q4-oct-w3b",
        week: "Week of Mon 5 Oct - Sun 11 Oct",
        date: "Sat, 10 Oct 2026",
        title: "Story / WhatsApp Status - The FulLife subscription: what's inside?",
      assetType: "Story / WhatsApp Status",
      format: "1080 x 1920 px (9:16)",
      platforms: ["Instagram Stories", "WhatsApp Status", "Facebook Stories"],
      audience: "Potential FulLife subscribers - warm awareness audience.",
      hook: "FulLife isn't just a delivery. It's your entire care routine simplified.",
      body:
        "Headline: What you get with FulLife:\n✓ Monthly medication delivered to your door\n✓ Daily dose reminders\n✓ Virtual doctor access\n✓ Your FulLife medical ID\n✓ Discounted refills\n\nSub: Starting from [price] / month.",
      designDirection:
        "Clean checklist layout. FulLife teal background. Each item fades in (for Reels/Motion version). Static version: bold typography.",
      cta: STD_CTA,
      hashtags: ["#FulLife", "#FulLife", "#MedPharmaGH", "#HealthSubscription"],
    },

    // ============ WEEK 4 - Oct 20-26 ============
    {
      id: "fl-q4-oct-w4a",
        week: "Week of Mon 12 Oct - Sun 18 Oct",
        date: "Tue, 13 Oct 2026",
        title: "Information Carousel - 5 signs your medication routine needs a reset",
      assetType: "Information Carousel",
      format: "1080 x 1350 px (4:5) · 6 slides",
      platforms: ["Instagram", "Facebook"],
      audience: "Adults on daily medication for 6+ months who may have lapsed.",
      hook: "If any of these feel familiar, your routine needs FulLife.",
      slides: [
        { title: "Slide 1 - Cover", body: "Headline: 5 signs your medication routine needs a reset.\nSub: Be honest with yourself." },
        { title: "Slide 2", body: "Sign 1: You have missed more than 3 doses this month.\nBody: It happens. What matters is what you do next." },
        { title: "Slide 3", body: "Sign 2: You ran out last month before the refill.\nBody: Running out isn't a discipline problem - it's a system problem." },
        { title: "Slide 4", body: "Sign 3: Your doctor's last review showed your numbers going in the wrong direction.\nBody: Inconsistency is the quiet saboteur of progress." },
        { title: "Slide 5", body: "Sign 4: You have 3 or more medications and manage them mentally.\nBody: The human brain was not designed to track multiple schedules. Systems exist for a reason." },
        { title: "Slide 6 - CTA", body: "Sign 5: You dread running to the pharmacy every month.\nHeadline: Reset your routine with FulLife.\nBody: Delivery + reminders + care - all in one subscription." },
      ],
      designDirection:
        "Bold numbered format. Warm amber and teal palette. Lifestyle imagery of Ghanaian adults looking reflective, not stressed.",
      cta: STD_CTA,
      hashtags: ["#FulLife", "#MedPharmaGH", "#MedicationRoutine", "#DailyConsistency"],
    },

    // ============ WEEK 5 - Oct 27 - Nov 2 ============
    {
      id: "fl-q4-nov-w1a",
        week: "Week of Mon 12 Oct - Sun 18 Oct",
        date: "Thu, 15 Oct 2026",
        title: "Square Flyer - End of Month: Is your refill sorted?",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "WhatsApp"],
      audience: "Existing FulLife members and warm audience.",
      hook: "The last day of the month is not the day to discover you're out of medication.",
      body:
        "Headline: End of October. Is your refill sorted?\n\n" +
        "Sub: FulLife members never have to ask this question - we deliver before you run out.\n\n" +
        "Supporting: No queues, no drives, no surprises.",
      designDirection:
        "Calendar graphic showing the last days of October. Clean, minimal. Teal dominant. Pill icon with a tick/check mark.",
      cta: STD_CTA,
      hashtags: ["#FulLife", "#MedPharmaGH", "#FulLife", "#RefillReminder"],
    },

    // ============ WEEK 6 - Nov 3-9 ============
    {
      id: "fl-q4-nov-w2a",
        week: "Week of Mon 12 Oct - Sun 18 Oct",
        date: "Sat, 17 Oct 2026",
        title: "Information Carousel - The 30-day FulLife promise: What changes in a month?",
      assetType: "Information Carousel",
      format: "1080 x 1350 px (4:5) · 5 slides",
      platforms: ["Instagram", "Facebook", "LinkedIn"],
      audience: "Adults considering signing up for FulLife.",
      hook: "30 days on FulLife. Here is what actually changes.",
      slides: [
        { title: "Slide 1 - Cover", body: "Headline: Your first 30 days on FulLife.\nSub: Here is what actually changes." },
        { title: "Slide 2", body: "Week 1: Your first delivery arrives. No pharmacy run. Your medication is at the door." },
        { title: "Slide 3", body: "Week 2: Your doctor has your full history in one place. Consultations get shorter and more useful." },
        { title: "Slide 4", body: "Week 3: You haven't missed a dose. Your daily reminder is doing the work." },
        { title: "Slide 5 - CTA", body: "Week 4: Your numbers are trending in the right direction.\nHeadline: 30 days can change a year." },
      ],
      designDirection:
        "Week-by-week progress layout. Simple, clean. Green upward trend line graphic. Ghanaian model, looking progressively more confident across slides.",
      cta: STD_CTA,
      hashtags: ["#FulLife", "#MedPharmaGH", "#30DayChallenge", "#DailyConsistency", "#SeamlessHealthcare"],
    },

    // ============ WORLD DIABETES DAY - Nov 14 ============
    {
      id: "fl-q4-nov-wdd-a",
        week: "Week of Mon 19 Oct - Sun 25 Oct",
        date: "Tue, 20 Oct 2026",
        title: "World Diabetes Day - Managing diabetes is a daily act of love",
      assetType: "Information Carousel",
      format: "1080 x 1350 px (4:5) · 6 slides",
      platforms: ["Instagram", "Facebook", "LinkedIn"],
      audience: "Adults living with diabetes; their families; general awareness.",
      hook: "Diabetes doesn't take a day off. Neither does FulLife.",
      slides: [
        { title: "Slide 1 - Cover", body: "Headline: Managing diabetes is a daily act of love.\nSub: World Diabetes Day | 14 November 2026." },
        { title: "Slide 2", body: "Stat: Ghana has over 500,000 people living with diabetes. Many go unmanaged due to access and taking medication consistently barriers." },
        { title: "Slide 3", body: "Headline: The most dangerous myth about diabetes:\nBody: 'I only need my medication when I feel sick.' Diabetes management is every single day - whether you feel it or not." },
        { title: "Slide 4", body: "Headline: FulLife was built for this exact person.\nBody: Monthly medication delivered. Daily reminders sent. Virtual doctor always available." },
        { title: "Slide 5", body: "Headline: For the person managing a parent's diabetes from abroad:\nBody: Pay for their FulLife subscription from anywhere in the world. We deliver and remind them locally." },
        { title: "Slide 6 - CTA", body: "Headline: Diabetes requires daily care. FulLife provides it." },
      ],
      designDirection:
        "Blue circle (World Diabetes Day brand colour) as a design element, blended with FulLife teal. Portrait of a Ghanaian man 50s+ looking healthy and active.",
      cta: STD_CTA,
      hashtags: ["#WorldDiabetesDay", "#FulLife", "#MedPharmaGH", "#DiabetesGhana", "#SeamlessHealthcare"],
    },
    {
      id: "fl-q4-nov-wdd-b",
        week: "Week of Mon 19 Oct - Sun 25 Oct",
        date: "Thu, 22 Oct 2026",
        title: "World Diabetes Day - Story: Are you monitoring your blood sugar today?",
      assetType: "Story / WhatsApp Status",
      format: "1080 x 1920 px (9:16)",
      platforms: ["Instagram Stories", "WhatsApp Status", "Facebook Stories"],
      audience: "Adults with diabetes and their family members.",
      hook: "World Diabetes Day: One question only.",
      body:
        "Big question (top half): Have you checked your blood sugar today?\nSub (bottom half): FulLife keeps your diabetes medication schedule and reminders on track - every day.\nCTA button: Start your free month → " + APP,
      designDirection:
        "Split-screen. Top: blue (WHO Diabetes Day brand). Bottom: FulLife teal. Bold, minimal, medical-authoritative.",
      cta: STD_CTA,
      hashtags: ["#WorldDiabetesDay", "#FulLife", "#MedPharmaGH"],
    },

    // ============ Antibiotic Awareness Week - Nov 18-24 ============
    {
      id: "fl-q4-nov-abx",
        week: "Week of Mon 19 Oct - Sun 25 Oct",
        date: "Sat, 24 Oct 2026",
        title: "Antibiotic Awareness Week - Are you finishing your antibiotics properly?",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "General public, particularly parents and adults who self-medicate.",
      hook: "Stopping your antibiotics early is more dangerous than not starting them.",
      body:
        "Headline: Are you finishing your antibiotics?\n\n" +
        "Sub: The biggest mistake in antibiotic use is stopping when you feel better - not when the course is finished.\n\n" +
        "Supporting: Your MedPharma pharmacist and the FulLife reminders system ensures you complete every course, every time.",
      designDirection:
        "Clean, bold medical graphic. Red and teal. Pill strip visual - some pills crossed off, some remaining. Strong educational tone.",
      cta: STD_CTA,
      hashtags: ["#AntibioticAwareness", "#FulLife", "#MedPharmaGH", "#ResistanceIsFutile", "#SeamlessHealthcare"],
    },

    // ============ WEEK - Nov 24-30 ============
    {
      id: "fl-q4-nov-w5a",
        week: "Week of Mon 26 Oct - Sun 1 Nov",
        date: "Tue, 27 Oct 2026",
        title: "LinkedIn PDF - Why medication taking medication consistently is a business productivity issue in Ghana",
      assetType: "LinkedIn PDF Document",
      format: "1920 x 1080 px (16:9) slides · 8 pages",
      platforms: ["LinkedIn"],
      audience: "HR managers, CEOs, business owners, corporate health leads.",
      hook: "Your employee's missed medication is costing you more than their sick days.",
      slides: [
        { title: "Page 1 - Cover", body: "Title: The Hidden Productivity Cost of Medication Non-Consistency in Ghana's Workforce." },
        { title: "Page 2", body: "The challenge: 60% of Ghanaian adults on long-term medication are stop taking their medication within 6 months." },
        { title: "Page 3", body: "The business impact: Uncontrolled hypertension and diabetes lead to cognitive fatigue, absenteeism, and higher group insurance premiums." },
        { title: "Page 4", body: "The FulLife corporate solution: Partner with MedPharma to offer your employees a subsidised FulLife subscription as part of their health benefits package." },
        { title: "Page 5", body: "What employees get: Monthly medication delivery to the office. Daily reminders. Virtual doctor access. Digital health record." },
        { title: "Page 6", body: "What the business gets: Healthier, more present workforce. Reduced health insurance claims. A demonstrable ESG/wellbeing commitment." },
        { title: "Page 7", body: "Testimonial / case study placeholder." },
        { title: "Page 8 - CTA", body: "Interested in a corporate FulLife package?\nContact us: " + CALL + "\n" + APP },
      ],
      designDirection:
        "Corporate LinkedIn aesthetic. Navy + teal. Data visualisations and infographic-style charts. Professional, boardroom-ready.",
      cta: STD_CTA,
      hashtags: ["#FulLife", "#MedPharmaGH", "#CorporateWellness", "#EmployeeHealth", "#GhanaBusinessHealth"],
    },

    // ============ WORLD AIDS DAY - Dec 1 ============
    {
      id: "fl-q4-dec-aids",
        week: "Week of Mon 26 Oct - Sun 1 Nov",
        date: "Thu, 29 Oct 2026",
        title: "World AIDS Day - Consistent care, consistent life",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "General public. Sensitive, awareness-driven tone.",
      hook: "Consistent treatment means consistent life. No exceptions, no days off.",
      body:
        "Headline: Consistent care. Consistent life.\n\n" +
        "Sub: On World AIDS Day, we stand for the dignity of every person on a treatment plan - and their right to access medication consistently, privately, and without stigma.\n\n" +
        "FulLife: Discreet delivery. Daily support. Zero judgement.",
      designDirection:
        "Red ribbon motif blended respectfully with FulLife teal. Warm, dignified portrait of a Ghanaian adult. Empathetic tone - NOT clinical or fear-based.",
      cta: STD_CTA,
      hashtags: ["#WorldAIDSDay", "#FulLife", "#MedPharmaGH", "#ConsistentCare", "#EndAIDS"],
    },

    // ============ FARMERS' DAY / Dec 5 ============
    {
      id: "fl-q4-dec-farmers",
        week: "Week of Mon 26 Oct - Sun 1 Nov",
        date: "Sat, 31 Oct 2026",
        title: "Farmers' Day - To those who feed Ghana: we keep you well",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "General Ghanaian public; rural and peri-urban audience.",
      hook: "You feed the nation. We help keep you in the field.",
      body:
        "Headline: To those who feed Ghana - we keep you well.\n\n" +
        "Sub: Happy Farmers' Day from the MedPharma family.\n\n" +
        "Supporting: No matter where you are in Ghana, FulLife delivers your medication and keeps your routine on track - so you can keep doing what you do best.",
      designDirection:
        "Warm earth tones. Ghanaian farming scene - a proud woman or man in a green field. FulLife teal ribbon or badge overlay. Festive but grounded.",
      cta: STD_CTA,
      hashtags: ["#FarmersDay", "#GhanaFarmersDay", "#FulLife", "#MedPharmaGH", "#HealthyGhana"],
    },

    // ============ MID DEC ============
    {
      id: "fl-q4-dec-w2a",
        week: "Week of Mon 2 Nov - Sun 8 Nov",
        date: "Tue, 3 Nov 2026",
        title: "Human Rights Day - Access to medication is a human right",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "LinkedIn"],
      audience: "General public; community-focused followers.",
      hook: "Access to consistent healthcare is not a privilege. It is a right.",
      body:
        "Headline: Access to medication is a human right.\n\n" +
        "Sub: On Human Rights Day, MedPharma reaffirms its mission: seamless, dignified healthcare for every Ghanaian - regardless of location or income.\n\n" +
        "FulLife: Making consistent care accessible.",
      designDirection:
        "Bold typographic poster style. FulLife teal + black. Simple, impactful. No medical imagery - make it feel like a movement.",
      cta: STD_CTA,
      hashtags: ["#HumanRightsDay", "#FulLife", "#MedPharmaGH", "#HealthIsARight", "#SeamlessHealthcare"],
    },
    {
      id: "fl-q4-dec-w2b",
        week: "Week of Mon 2 Nov - Sun 8 Nov",
        date: "Thu, 5 Nov 2026",
        title: "Information Carousel - Year-end health review: 5 things to do before 31 December",
      assetType: "Information Carousel",
      format: "1080 x 1350 px (4:5) · 6 slides",
      platforms: ["Instagram", "Facebook"],
      audience: "Adults 30-65 on daily medication.",
      hook: "Before the year ends, your health deserves a proper review.",
      slides: [
        { title: "Slide 1 - Cover", body: "Headline: 5 things to do for your health before the year ends.\nSub: A checklist from your FulLife care team." },
        { title: "Slide 2", body: "1. Book your year-end labs.\nBody: HbA1c, lipid panel, BP review - know exactly where your numbers are before January." },
        { title: "Slide 3", body: "2. Ensure your December refill is sorted.\nBody: Pharmacies get busier in December. FulLife members don't have to worry." },
        { title: "Slide 4", body: "3. Review your medication list with your doctor.\nBody: Any new prescriptions this year? Anything to stop? Do the review - not in January when it's too late." },
        { title: "Slide 5", body: "4. Set up your medication routine for January.\nBody: January is when most routines break. Set your reminder schedule now." },
        { title: "Slide 6 - CTA", body: "5. Protect your health plan for the new year.\nBody: Join FulLife before 31 December and start 2027 in control." },
      ],
      designDirection:
        "Year-end checklist aesthetic. Clean, warm tones. Tick-box graphic. Ghanaian model in smart casual attire, looking organised and confident.",
      cta: STD_CTA,
      hashtags: ["#FulLife", "#MedPharmaGH", "#YearEndHealth", "#HealthChecklist", "#SeamlessHealthcare"],
    },

    // ============ CHRISTMAS ============
    {
      id: "fl-q4-dec-xmas",
        week: "Week of Mon 2 Nov - Sun 8 Nov",
        date: "Sat, 7 Nov 2026",
        title: "Christmas - The best gift is a healthy new year",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "WhatsApp", "X / Twitter"],
      audience: "All followers - warm, broad.",
      hook: "Merry Christmas. The best present you can give yourself is showing up healthy in 2027.",
      body:
        "Headline: Merry Christmas from the MedPharma family.\n\n" +
        "Sub: May your season be filled with joy, rest, and good health.\n\n" +
        "Note: Even on Christmas Day, FulLife members' medication schedule runs. No day off for your health routine.",
      designDirection:
        "Warm festive palette - deep forest green + FulLife teal + gold. Ghanaian family scene. Festive but not overdone. Elegant, not kitsch.",
      cta: STD_CTA,
      hashtags: ["#MerryChristmas", "#FulLife", "#MedPharmaGH", "#SeamlessHealthcare", "#HealthyGhana"],
    },

    // ============ NEW YEAR'S EVE ============
    {
      id: "fl-q4-dec-nye",
        week: "Week of Mon 9 Nov - Sun 15 Nov",
        date: "Tue, 10 Nov 2026",
        title: "New Year's Eve - Start 2027 with your health sorted",
      assetType: "Story / WhatsApp Status",
      format: "1080 x 1920 px (9:16)",
      platforms: ["Instagram Stories", "WhatsApp Status", "Facebook Stories"],
      audience: "All followers.",
      hook: "Tonight is for celebration. Tomorrow is for commitment.",
      body:
        "Background: Countdown-style bold type. FulLife teal + gold.\nHeadline: Tonight is for celebration.\nSub: Tomorrow is for commitment - to your health, your routine, and your family.",
      designDirection:
        "Bold New Year countdown aesthetic. FulLife teal and gold. Celebratory but purposeful - not just a generic New Year card.",
      cta: STD_CTA,
      hashtags: ["#NewYearsEve", "#FulLife", "#MedPharmaGH", "#HealthyNewYear2027"],
    },
      {
          id: "fl-q4-new-1",
          week: "Week of Mon 9 Nov - Sun 15 Nov",
          date: "Thu, 12 Nov 2026",
        title: "Consistency is Key",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook", "X / Twitter"],
          audience: "Patients on daily medication",
          hook: "Your health depends on consistency.",
          body: "Headline: Daily Medication Consistency\nSub: Stay on track with FulLife. We deliver your daily medications right on schedule.",
          designDirection: "Background: A vibrant, uplifting image of a healthy older adult smiling confidently outdoors.",
          cta: STD_CTA,
          hashtags: ["#FulLife", "#DailyHealth", "#ConsistentCare"]
        },
      {
          id: "fl-q4-new-2",
          week: "Week of Mon 9 Nov - Sun 15 Nov",
          date: "Sat, 14 Nov 2026",
        title: "How FulLife Works",
          assetType: "Information Carousel",
          format: "1080 x 1350 px (4:5) · 3 slides",
          platforms: ["Instagram", "Facebook", "LinkedIn"],
          audience: "Potential subscribers",
          hook: "Never worry about running out of meds.",
          designDirection: "Background: Clean, minimalist background with simple, elegant icons representing subscription and delivery.",
          cta: STD_CTA,
          hashtags: ["#SubscriptionHealth", "#FulLife", "#NeverMissADose"],
          slides: [
                            {title: "Subscribe Once", body: "Upload your prescription for your daily medications."},
                            {title: "Automated Refills", body: "We prepare your medications before you even run out."},
                            {title: "Scheduled Delivery", body: "Get your meds delivered to your door every month on time."}
                          ]
    },
      {
          id: "fl-q4-new-3",
          week: "Week of Mon 16 Nov - Sun 22 Nov",
          date: "Tue, 17 Nov 2026",
        title: "Peace of Mind for Relatives",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook"],
          audience: "Adult children caring for aging parents",
          hook: "Care for your parents, even from afar.",
          body: "Headline: Total Peace of Mind\nSub: Subscribe your loved ones to FulLife and ensure they never miss their daily medication.",
          designDirection: "Background: A heartwarming photo of a daughter hugging her elderly mother.",
          cta: STD_CTA,
          hashtags: ["#ElderCare", "#FamilyHealth", "#FulLife"]
        },
      {
          id: "fl-q4-new-4",
          week: "Week of Mon 16 Nov - Sun 22 Nov",
          date: "Thu, 19 Nov 2026",
        title: "No More Pharmacy Queues",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook", "X / Twitter"],
          audience: "Busy individuals on long-term meds",
          hook: "Why wait in line every month?",
          body: "Headline: Skip the Monthly Queues\nSub: FulLife's subscription delivery brings your daily medication consistency straight to you.",
          designDirection: "Background: A blurred image of a long queue with a sharp, vibrant FulLife package in the foreground.",
          cta: STD_CTA,
          hashtags: ["#ConvenientCare", "#FulLifeDelivery", "#HealthTech"]
        },
      {
          id: "fl-q4-new-5",
          week: "Week of Mon 16 Nov - Sun 22 Nov",
          date: "Sat, 21 Nov 2026",
        title: "High Blood Pressure Management",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook"],
          audience: "Hypertensive patients",
          hook: "Keep your blood pressure in check effortlessly.",
          body: "Headline: Seamless BP Management\nSub: Maintain your daily medication consistency with automated FulLife deliveries.",
          designDirection: "Background: A calm individual checking their blood pressure at home, looking relaxed and healthy.",
          cta: STD_CTA,
          hashtags: ["#HeartHealth", "#BPManagement", "#FulLife"]
        },
      {
          id: "fl-q4-new-6",
          week: "Week of Mon 23 Nov - Sun 29 Nov",
          date: "Tue, 24 Nov 2026",
        title: "The Cost of Missing a Dose",
          assetType: "Information Carousel",
          format: "1080 x 1350 px (4:5) · 3 slides",
          platforms: ["Instagram", "Facebook"],
          audience: "Patients on daily medication",
          hook: "What happens when you miss a dose?",
          designDirection: "Background: A split background showing a calendar with missed days versus a perfect streak.",
          cta: STD_CTA,
          hashtags: ["#MedicationSafety", "#HealthConsistency", "#FulLife"],
          slides: [
                            {title: "Health Setbacks", body: "Skipping daily meds can disrupt your treatment progress."},
                            {title: "Avoid Complications", body: "Consistency is the foundation of managing your health."},
                            {title: "The Solution", body: "FulLife ensures your meds arrive before your current batch finishes."}
                          ]
    },
      {
          id: "fl-q4-new-7",
          week: "Week of Mon 23 Nov - Sun 29 Nov",
          date: "Thu, 26 Nov 2026",
        title: "Subscription Flexibility",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook"],
          audience: "Subscribers",
          hook: "Health plans that adapt to you.",
          body: "Headline: Flexible Subscriptions\nSub: Easily update your prescription or delivery address anytime with FulLife.",
          designDirection: "Background: A person comfortably using a smartphone to adjust settings on the app.",
          cta: STD_CTA,
          hashtags: ["#FlexibleCare", "#FulLifeApp", "#SubscriptionDelivery"]
        },
      {
          id: "fl-q4-new-8",
          week: "Week of Mon 23 Nov - Sun 29 Nov",
          date: "Sat, 28 Nov 2026",
        title: "Diabetes Management Support",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook", "LinkedIn"],
          audience: "Diabetic patients",
          hook: "Stay empowered in your diabetes journey.",
          body: "Headline: Uninterrupted Care\nSub: Focus on living your best life while FulLife handles your daily medication consistency.",
          designDirection: "Background: A vibrant image of an active person tying their running shoes.",
          cta: STD_CTA,
          hashtags: ["#DiabetesCare", "#ActiveLifestyle", "#FulLife"]
        },
      {
          id: "fl-q4-new-9",
          week: "Week of Mon 30 Nov - Sun 6 Dec",
          date: "Tue, 1 Dec 2026",
        title: "Quality Guaranteed",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook"],
          audience: "Health-conscious patients",
          hook: "Only the best for your daily health.",
          body: "Headline: Premium Authentic Medications\nSub: With FulLife, you are guaranteed authentic medications sourced directly from top manufacturers.",
          designDirection: "Background: A macro shot of pristine medication packaging with a subtle quality seal graphic.",
          cta: STD_CTA,
          hashtags: ["#QualityMeds", "#AuthenticCare", "#FulLife"]
        },
      {
          id: "fl-q4-new-10",
          week: "Week of Mon 30 Nov - Sun 6 Dec",
          date: "Thu, 3 Dec 2026",
        title: "Travel without Worry",
          assetType: "Information Carousel",
          format: "1080 x 1350 px (4:5) · 3 slides",
          platforms: ["Instagram", "Facebook", "X / Twitter"],
          audience: "Patients who travel",
          hook: "Going on a trip? Don't let your meds hold you back.",
          designDirection: "Background: A beautifully packed travel bag with a neat pill organizer sitting on top.",
          cta: STD_CTA,
          hashtags: ["#TravelHealthy", "#FulLife", "#ConsistentCare"],
          slides: [
                            {title: "Plan Ahead", body: "Ensure you have enough medication for your journey."},
                            {title: "Update Delivery", body: "Schedule a delivery before you travel with FulLife."},
                            {title: "Travel Safe", body: "Maintain your daily medication consistency wherever you go."}
                          ]
    },
      {
          id: "fl-q4-new-11",
          week: "Week of Mon 30 Nov - Sun 6 Dec",
          date: "Sat, 5 Dec 2026",
        title: "Affordable Care",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook"],
          audience: "Cost-conscious patients",
          hook: "Great healthcare shouldn't break the bank.",
          body: "Headline: Cost-Effective Subscriptions\nSub: Save time and money with FulLife's transparent pricing and automated delivery.",
          designDirection: "Background: A person smiling while looking at a savings jar and a wellness calendar.",
          cta: STD_CTA,
          hashtags: ["#AffordableHealth", "#SmartSavings", "#FulLife"]
        },
      {
          id: "fl-q4-new-12",
          week: "Week of Mon 7 Dec - Sun 13 Dec",
          date: "Tue, 8 Dec 2026",
        title: "Asthma Care",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook"],
          audience: "Asthma patients",
          hook: "Breathe easy every single day.",
          body: "Headline: Reliable Asthma Support\nSub: Get your inhalers and asthma medications delivered consistently with FulLife.",
          designDirection: "Background: A serene image of a person taking a deep breath of fresh air in a green park.",
          cta: STD_CTA,
          hashtags: ["#AsthmaCare", "#BreatheEasy", "#FulLife"]
        },
      {
          id: "fl-q4-new-13",
          week: "Week of Mon 7 Dec - Sun 13 Dec",
          date: "Thu, 10 Dec 2026",
        title: "Dedicated Pharmacist Support",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook", "LinkedIn"],
          audience: "Patients needing guidance",
          hook: "We're more than just delivery.",
          body: "Headline: Expert Support On Call\nSub: FulLife subscribers get access to dedicated pharmacists for all medication questions.",
          designDirection: "Background: A compassionate pharmacist on a phone call, reviewing patient notes.",
          cta: STD_CTA,
          hashtags: ["#PharmacistCare", "#ExpertSupport", "#FulLife"]
        },
      {
          id: "fl-q4-new-14",
          week: "Week of Mon 7 Dec - Sun 13 Dec",
          date: "Sat, 12 Dec 2026",
        title: "Never Miss a Dose - Testimonial",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook"],
          audience: "Potential subscribers",
          hook: "Hear from our happy subscribers.",
          body: "Headline: Real Stories, Real Health\nSub: 'Since joining FulLife, I've never missed a day of my daily medication consistency.' - Kwame A.",
          designDirection: "Background: A candid, joyful portrait of a Ghanaian man in his 50s.",
          cta: STD_CTA,
          hashtags: ["#FulLifeStories", "#CustomerSuccess", "#HealthRoutine"]
        },
      {
          id: "fl-q4-new-15",
          week: "Week of Mon 14 Dec - Sun 20 Dec",
          date: "Tue, 15 Dec 2026",
        title: "The FulLife Promise",
          assetType: "Information Carousel",
          format: "1080 x 1350 px (4:5) · 3 slides",
          platforms: ["LinkedIn", "Instagram", "Facebook"],
          audience: "General public",
          hook: "Our commitment to your daily health.",
          designDirection: "Background: Clean corporate aesthetic with soft, reassuring blue and green tones.",
          cta: STD_CTA,
          hashtags: ["#OurPromise", "#FulLifeCare", "#DependableHealth"],
          slides: [
                            {title: "Reliability", body: "We promise on-time delivery, every time."},
                            {title: "Quality", body: "Only 100% authentic medications."},
                            {title: "Care", body: "Your health journey is our top priority."}
                          ]
    },
      {
          id: "fl-q4-new-16",
          week: "Week of Mon 14 Dec - Sun 20 Dec",
          date: "Thu, 17 Dec 2026",
        title: "Seamless Refills",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook", "X / Twitter"],
          audience: "Patients on daily medication",
          hook: "Forget about remembering.",
          body: "Headline: Automated Refills\nSub: FulLife tracks your medication schedule so you don't have to.",
          designDirection: "Background: A stylish visual of a smartwatch displaying a health notification, blending technology with wellness.",
          cta: STD_CTA,
          hashtags: ["#AutoRefill", "#HealthTech", "#FulLife"]
        },
      {
          id: "fl-q4-new-17",
          week: "Week of Mon 14 Dec - Sun 20 Dec",
          date: "Sat, 19 Dec 2026",
        title: "Holistic Health Approach",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook"],
          audience: "Wellness enthusiasts",
          hook: "Medication is just one part of the puzzle.",
          body: "Headline: A Balanced Life\nSub: Combine a healthy diet and exercise with daily medication consistency through FulLife.",
          designDirection: "Background: A holistic lifestyle flat lay featuring fresh fruits, running shoes, and a neat medication package.",
          cta: STD_CTA,
          hashtags: ["#HolisticHealth", "#BalancedLife", "#FulLife"]
        },
      {
          id: "fl-q4-new-18",
          week: "Week of Mon 21 Dec - Sun 27 Dec",
          date: "Tue, 22 Dec 2026",
        title: "Gift of Health",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook"],
          audience: "People looking for meaningful gifts",
          hook: "Give the gift of consistent care.",
          body: "Headline: Sponsor a Loved One\nSub: Pay for a family member's FulLife subscription and ensure their daily health is secured.",
          designDirection: "Background: Hands warmly holding a beautifully wrapped package that resembles a health kit.",
          cta: STD_CTA,
          hashtags: ["#GiftOfHealth", "#FamilyCare", "#FulLife"]
        },
      {
          id: "fl-q4-new-19",
          week: "Week of Mon 21 Dec - Sun 27 Dec",
          date: "Thu, 24 Dec 2026",
        title: "End of Year Consistency Review",
          assetType: "Information Carousel",
          format: "1080 x 1350 px (4:5) · 3 slides",
          platforms: ["Instagram", "Facebook"],
          audience: "Patients reviewing their health",
          hook: "How did your health routine do this year?",
          designDirection: "Background: A reflective, aspirational setup with a journal and a pen on a desk.",
          cta: STD_CTA,
          hashtags: ["#YearInReview", "#HealthGoals", "#FulLife"],
          slides: [
                            {title: "Review Your Routine", body: "Did you struggle to maintain daily medication consistency?"},
                            {title: "Make a Change", body: "Don't let missed doses hold you back in the new year."},
                            {title: "Join FulLife", body: "Start the new year right with automated subscription delivery."}
                          ]
    },
      {
          id: "fl-q4-new-20",
          week: "Week of Mon 21 Dec - Sun 27 Dec",
          date: "Sat, 26 Dec 2026",
        title: "Ready for the New Year",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook", "LinkedIn"],
          audience: "Everyone setting health goals",
          hook: "Step into the new year with confidence.",
          body: "Headline: Secure Your Health in 2027\nSub: Lock in your FulLife subscription now and guarantee daily medication consistency all year round.",
          designDirection: "Background: A bright, hopeful sunrise representing a new beginning and fresh health goals.",
          cta: STD_CTA,
          hashtags: ["#NewYearGoals", "#ConsistentCare", "#FulLife2027"]
        }
],
};

// ====================================================================
// MEDPHARMA Q4 2026 PLAN
// Oct → Nov → Dec
// ====================================================================
export const MEDPHARMA_Q4_PLAN: ContentPlan = {
  brand: "MedPharma",
  productNote:
    "MedPharma is Ghana's premier digital pharmacy and healthcare platform - pharmacy delivery, online consultations, lab diagnostics, and prescription management in one app. Q4 2026 (Oct-Dec) designer brief. The brand guide is already with you.",
  callLine: CALL,
  appLink: APP,
  rules: [
    "Use Black/African models in every lifestyle shot. No stock photos of non-African people.",
    "No emojis on the artwork - keep it clean and clinical-corporate.",
    "MedPharma 'Seamless Healthcare' lockup bottom-left on every asset.",
    "Every asset must show: phone line " + CALL + " + app QR/link. No exceptions.",
    "Product photography must show the actual MedPharma app interface where relevant - screenshots from the design team.",
    "Q4 colour palette note: MedPharma teal stays dominant. You may introduce warm gold accents for Christmas/New Year posts only.",
  ],
  briefs: [

    // ============ WEEK 1 - Oct 1-5 ============
    {
      id: "mp-q4-oct-w1a",
        week: "Week of Mon 28 Sept - Sun 4 Oct",
        date: "Mon, 28 Sept 2026",
        title: "World Heart Day - Your heart is in good hands with MedPharma",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "General Ghanaian public, adults 30+.",
      hook: "A healthy heart needs a reliable healthcare partner.",
      body:
        "Headline: Your heart is in good hands.\n\n" +
        "Sub: From BP medication delivery to virtual cardiologist consultations - MedPharma is your complete heart health partner.\n\n" +
        "On World Heart Day: Download the MedPharma app and take the first step.",
      designDirection:
        "Heartbeat ECG line graphic in MedPharma teal. Warm lifestyle shot of a healthy Ghanaian couple. Clean, confident, authoritative.",
      cta: STD_CTA,
      hashtags: ["#WorldHeartDay", "#MedPharmaGH", "#HeartHealth", "#SeamlessHealthcare"],
    },
    {
      id: "mp-q4-oct-w1b",
        week: "Week of Mon 28 Sept - Sun 4 Oct",
        date: "Wed, 30 Sept 2026",
        title: "Information Carousel - 5 services you didn't know MedPharma offered",
      assetType: "Information Carousel",
      format: "1080 x 1350 px (4:5) · 6 slides",
      platforms: ["Instagram", "Facebook"],
      audience: "New and warm audience - app awareness drive.",
      hook: "Most people only know us for delivery. Here's the full picture.",
      slides: [
        { title: "Slide 1 - Cover", body: "Headline: 5 things MedPharma does that most people don't know about.\nSub: You've been sleeping on a full healthcare platform." },
        { title: "Slide 2", body: "1. Online Doctor Consultations.\nBook a video call with a licensed Ghanaian doctor in under 2 minutes - no commute, no queue." },
        { title: "Slide 3", body: "2. Lab Diagnostics Booking.\nBook your blood work, cholesterol panel, or HbA1c from the app. Results delivered digitally." },
        { title: "Slide 4", body: "3. Upload & Dispense Prescriptions.\nTake a photo of your handwritten prescription in the app. Our pharmacists verify and deliver." },
        { title: "Slide 5", body: "4. Your Digital Health Vault.\nAll your prescriptions, lab results, and medical history - stored securely in one place." },
        { title: "Slide 6 - CTA", body: "5. GPS-Pinned Door Delivery.\nMedication delivered to your exact address - office, home, or wherever you are in Accra." },
      ],
      designDirection:
        "Feature-by-feature reveal layout. MedPharma teal icons. Clean, app-screenshot style for one or two slides. Modern and tech-forward.",
      cta: STD_CTA,
      hashtags: ["#MedPharmaGH", "#SeamlessHealthcare", "#DigitalPharmacy", "#AccraHealthTech"],
    },

    // ============ WEEK 2 - Oct 6-12 ============
    {
      id: "mp-q4-oct-w2a",
        week: "Week of Mon 28 Sept - Sun 4 Oct",
        date: "Fri, 2 Oct 2026",
        title: "World Mental Health Day - Mental health prescriptions deserve the same care as any other",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "Adults managing mental health conditions; caregivers; general awareness.",
      hook: "Your mental health prescription deserves the same privacy, dignity, and consistency as any other.",
      body:
        "Headline: Your mental health prescription matters.\n\n" +
        "Sub: MedPharma delivers all medication in discreet, unmarked packaging - with zero judgement and complete privacy.\n\n" +
        "Supporting: Book a virtual mental health consultation directly in the app.",
      designDirection:
        "Warm peach + MedPharma teal. Calm Ghanaian woman 30s, peaceful expression. No clinical imagery. Dignified and empathetic. Mind/brain icon in soft line art.",
      cta: STD_CTA,
      hashtags: ["#WorldMentalHealthDay", "#MedPharmaGH", "#MentalHealthGhana", "#SeamlessHealthcare"],
    },

    // ============ WEEK 3 - Oct 13-19 ============
    {
      id: "mp-q4-oct-w3a",
        week: "Week of Mon 5 Oct - Sun 11 Oct",
        date: "Mon, 5 Oct 2026",
        title: "World Food Day - Nutrition is the first prescription",
      assetType: "Information Carousel",
      format: "1080 x 1350 px (4:5) · 5 slides",
      platforms: ["Instagram", "Facebook"],
      audience: "Health-conscious adults; people managing diet-sensitive conditions.",
      hook: "Before the pharmacy, there is the kitchen. Nutrition is your first prescription.",
      slides: [
        { title: "Slide 1 - Cover", body: "Headline: Nutrition is your first prescription.\nSub: World Food Day" },
        { title: "Slide 2", body: "Headline: Food and medication work together - or against each other.\nBody: Some medications must be taken with food. Others on an empty stomach. Getting this wrong reduces effectiveness." },
        { title: "Slide 3", body: "Headline: The foods that silently interfere with your medications:\n• Grapefruit and BP medication\n• High-fat meals and certain antibiotics\n• High-sodium foods and diuretics" },
        { title: "Slide 4", body: "Headline: Ask your MedPharma pharmacist - it's free.\nBody: Every prescription dispensed through the MedPharma app includes pharmacist counselling on food interactions." },
        { title: "Slide 5 - CTA", body: "Headline: Your prescription is only half the picture. Food is the other half." },
      ],
      designDirection:
        "Rich food photography mixed with clean infographic slides. Ghanaian food staples (kenkey, kontomire, fish, fruits) styled beautifully alongside medication imagery.",
      cta: STD_CTA,
      hashtags: ["#WorldFoodDay", "#MedPharmaGH", "#NutritionGhana", "#SeamlessHealthcare"],
    },

    // ============ WEEK 4 - Oct 20-26 ============
    {
      id: "mp-q4-oct-w4a",
        week: "Week of Mon 5 Oct - Sun 11 Oct",
        date: "Wed, 7 Oct 2026",
        title: "Story / WhatsApp Status - Upload your prescription in 3 taps",
      assetType: "Story / WhatsApp Status",
      format: "1080 x 1920 px (9:16)",
      platforms: ["Instagram Stories", "WhatsApp Status", "Facebook Stories"],
      audience: "App download conversion audience.",
      hook: "Paper prescription? 3 taps and it's sorted.",
      body:
        "Background: Screen-recording style mockup - showing the upload flow.\nStep 1: Open MedPharma app.\nStep 2: Tap 'Upload Prescription'.\nStep 3: Photo → pharmacist review → delivery confirmed.\nHeadline: Your paper prescription just became a doorstep delivery.",
      designDirection:
        "App UI mockup style. Phone frame showing the 3-step flow. Clean, tech-forward. MedPharma teal UI. No cluttered text.",
      cta: STD_CTA,
      hashtags: ["#MedPharmaGH", "#DigitalPharmacy", "#PrescriptionDelivery", "#SeamlessHealthcare"],
    },
    {
      id: "mp-q4-oct-w4b",
        week: "Week of Mon 5 Oct - Sun 11 Oct",
        date: "Fri, 9 Oct 2026",
        title: "Square Flyer - Insurance? MedPharma handles it",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "Private health insurance holders.",
      hook: "The day you stop dreading the insurance queue is the day you download MedPharma.",
      body:
        "Headline: Your health insurance should work for you, not the other way around.\n\n" +
        "Sub: MedPharma accepts major private health insurance. Enter your details once in the app - we handle the rest. No queues. No forms. No waiting.\n\n" +
        "Supporting: NHIS also accepted at participating pharmacy points.",
      designDirection:
        "Clean, minimal. Insurance card graphic + MedPharma phone mockup. MedPharma teal. Confident, professional tone.",
      cta: STD_CTA,
      hashtags: ["#MedPharmaGH", "#HealthInsuranceGhana", "#SeamlessHealthcare", "#DigitalPharmacy"],
    },

    // ============ WORLD DIABETES DAY - Nov 14 ============
    {
      id: "mp-q4-nov-wdd",
        week: "Week of Mon 12 Oct - Sun 18 Oct",
        date: "Mon, 12 Oct 2026",
        title: "World Diabetes Day - Managing diabetes shouldn't be a full-time job",
      assetType: "Information Carousel",
      format: "1080 x 1350 px (4:5) · 5 slides",
      platforms: ["Instagram", "Facebook", "LinkedIn"],
      audience: "Adults with diabetes; their families; healthcare workers.",
      hook: "Managing diabetes shouldn't feel like a full-time job. MedPharma makes it effortless.",
      slides: [
        { title: "Slide 1 - Cover", body: "Headline: Managing diabetes shouldn't be a full-time job.\nSub: World Diabetes Day | 14 November 2026." },
        { title: "Slide 2", body: "The reality: Monthly pharmacy runs. Tracking blood sugar. Managing diet. Remembering multiple medications. Booking lab tests. It adds up." },
        { title: "Slide 3", body: "What MedPharma takes off your plate:\n✓ Monthly medication delivered\n✓ HbA1c labs booked from the app\n✓ Virtual doctor for prescription reviews\n✓ Daily reminders included" },
        { title: "Slide 4", body: "For the Ghanaian diabetic living abroad or sending for parents:\nPay for their care in the app. We deliver locally and keep them on track." },
        { title: "Slide 5 - CTA", body: "Headline: Your diabetes management just got a digital upgrade." },
      ],
      designDirection:
        "Blue circle (World Diabetes Day brand colour) blended with MedPharma teal. Checklist graphic. Ghanaian adult 50s+ looking empowered, not sick.",
      cta: STD_CTA,
      hashtags: ["#WorldDiabetesDay", "#MedPharmaGH", "#DiabetesGhana", "#SeamlessHealthcare"],
    },

    // ============ ANTIBIOTIC AWARENESS WEEK ============
    {
      id: "mp-q4-nov-abx",
        week: "Week of Mon 12 Oct - Sun 18 Oct",
        date: "Wed, 14 Oct 2026",
        title: "Antibiotic Awareness Week - Your pharmacist matters more than Google",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "General public; parents; adults who self-medicate with antibiotics.",
      hook: "Google cannot check your kidney function. Your pharmacist can.",
      body:
        "Headline: Before you self-prescribe antibiotics - talk to a pharmacist.\n\n" +
        "Sub: Antibiotic resistance is one of the world's most urgent health crises. It starts with the wrong antibiotic, at the wrong dose, stopped too early.\n\n" +
        "MedPharma: Pharmacist consultation included with every prescription order.",
      designDirection:
        "Bold, slightly alarming (in a good way). Red and teal. 'Stop' iconography - but empowering, not scary. Pharmacist in MedPharma scrubs graphic or photo.",
      cta: STD_CTA,
      hashtags: ["#AntibioticResistance", "#MedPharmaGH", "#WorldAntibioticWeek", "#SeamlessHealthcare"],
    },

    // ============ WORLD AIDS DAY ============
    {
      id: "mp-q4-dec-aids",
        week: "Week of Mon 12 Oct - Sun 18 Oct",
        date: "Fri, 16 Oct 2026",
        title: "World AIDS Day - Private delivery. Zero stigma.",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "General public. Sensitive, awareness-driven tone.",
      hook: "Your treatment. Your privacy. Our commitment.",
      body:
        "Headline: Private delivery. Zero stigma.\n\n" +
        "Sub: On World AIDS Day, MedPharma reaffirms that every patient deserves access to their medication - privately, consistently, and with dignity.\n\n" +
        "All MedPharma deliveries are in discreet, unmarked packaging. No questions. No judgement.",
      designDirection:
        "Red ribbon motif - subtle, respectful. MedPharma teal + deep charcoal. Empathetic, warm photography. NOT clinical.",
      cta: STD_CTA,
      hashtags: ["#WorldAIDSDay", "#MedPharmaGH", "#PrivateCare", "#SeamlessHealthcare", "#EndAIDS"],
    },

    // ============ FARMERS' DAY ============
    {
      id: "mp-q4-dec-farmers",
        week: "Week of Mon 19 Oct - Sun 25 Oct",
        date: "Mon, 19 Oct 2026",
        title: "Farmers' Day - Happy Farmers' Day from MedPharma",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "General Ghanaian public.",
      hook: "To every hand that feeds Ghana - we keep you in good health.",
      body:
        "Headline: Happy Farmers' Day from MedPharma.\n\n" +
        "Sub: To the farmers, the harvesters, the market women, and everyone who keeps Ghana fed - thank you.\n\n" +
        "Note: We deliver your medication wherever you are - no matter how far from the city.",
      designDirection:
        "Warm earth tones + MedPharma teal. Rural Ghanaian scene. Proud, celebratory, community-focused. Not health-heavy - this is a celebration post.",
      cta: STD_CTA,
      hashtags: ["#GhanaFarmersDay", "#MedPharmaGH", "#SeamlessHealthcare", "#HealthyGhana"],
    },

    // ============ MID DEC ============
    {
      id: "mp-q4-dec-w2a",
        week: "Week of Mon 19 Oct - Sun 25 Oct",
        date: "Wed, 21 Oct 2026",
        title: "Information Carousel - Your December health checklist",
      assetType: "Information Carousel",
      format: "1080 x 1350 px (4:5) · 5 slides",
      platforms: ["Instagram", "Facebook"],
      audience: "Adults 30+ managing ongoing health conditions.",
      hook: "December is the month most routines break. Don't let yours be one of them.",
      slides: [
        { title: "Slide 1 - Cover", body: "Headline: Your December health checklist.\nSub: From MedPharma. For people who take their health seriously." },
        { title: "Slide 2", body: "✓ Refill your medication before the Christmas rush.\nPharmacies across Accra will be packed by 20 December. Sort it now." },
        { title: "Slide 3", body: "✓ Book your year-end lab tests.\nWait until January and you'll be behind everyone else. Book now through the MedPharma app." },
        { title: "Slide 4", body: "✓ Set a medication reminder for the holiday period.\nFestivities disrupt schedules. Your pills don't take Christmas Day off." },
        { title: "Slide 5 - CTA", body: "✓ Download the MedPharma app before 15 December.\nEnsure your December delivery is sorted before the holiday shutdown." },
      ],
      designDirection:
        "Checklist poster style. Warm December palette - teal + gold. Slight festive feel but still clinical-professional. Tick icons in MedPharma teal.",
      cta: STD_CTA,
      hashtags: ["#MedPharmaGH", "#DecemberHealth", "#SeamlessHealthcare", "#HealthChecklist"],
    },
    {
      id: "mp-q4-dec-w2b",
        week: "Week of Mon 19 Oct - Sun 25 Oct",
        date: "Fri, 23 Oct 2026",
        title: "LinkedIn PDF - MedPharma Year in Review 2026",
      assetType: "LinkedIn PDF Document",
      format: "1920 x 1080 px (16:9) · 8 pages",
      platforms: ["LinkedIn"],
      audience: "Investors, partners, healthcare professionals, corporate audience.",
      hook: "2026 was the year seamless healthcare became real in Ghana.",
      slides: [
        { title: "Page 1 - Cover", body: "MedPharma: Year in Review 2026.\nSeamless Healthcare. Delivered." },
        { title: "Page 2", body: "Milestone: [X] prescriptions dispensed. [X] online consultations completed. [X] cities reached." },
        { title: "Page 3", body: "FulLife Growth: [X] active FulLife subscribers. Average medication taking medication consistently rate: [X%]." },
        { title: "Page 4", body: "Technology milestones: AI Health Assistant launched. Wearable integrations added. Insurance portal expanded." },
        { title: "Page 5", body: "Community impact: Partnerships with [X] corporate employers. [X] health awareness campaigns run." },
        { title: "Page 6", body: "2027 Preview: Expansion to [cities]. New features: [feature 1], [feature 2]. Partnership announcements." },
        { title: "Page 7", body: "What our patients say: [Testimonials placeholder]." },
        { title: "Page 8 - CTA", body: "Partner with MedPharma in 2027.\n" + CALL + " | " + APP },
      ],
      designDirection:
        "Premium corporate annual report aesthetic. Navy + MedPharma teal + gold. Data visualisations, clean typography. Boardroom-ready.",
      cta: STD_CTA,
      hashtags: ["#MedPharmaGH", "#YearInReview", "#SeamlessHealthcare", "#GhanaHealthTech"],
    },

    // ============ CHRISTMAS ============
    {
      id: "mp-q4-dec-xmas",
        week: "Week of Mon 26 Oct - Sun 1 Nov",
        date: "Mon, 26 Oct 2026",
        title: "Christmas - Season's greetings from MedPharma",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "WhatsApp", "X / Twitter"],
      audience: "All followers - broad, warm.",
      hook: "Wishing you a joyful, healthy Christmas from the MedPharma family.",
      body:
        "Headline: Merry Christmas from MedPharma.\n\n" +
        "Sub: Wishing you a season of good health, warmth, and joy.\n\n" +
        "Note: Our app and delivery service operates through the holidays - because health doesn't take a break.",
      designDirection:
        "Warm festive. Deep green + MedPharma teal + gold. Ghanaian family scene, Christmas setting. Elegant. Not kitsch. Logo prominent.",
      cta: STD_CTA,
      hashtags: ["#MerryChristmas", "#MedPharmaGH", "#SeamlessHealthcare", "#HealthyGhana"],
    },

    // ============ NEW YEAR'S EVE ============
    {
      id: "mp-q4-dec-nye",
        week: "Week of Mon 26 Oct - Sun 1 Nov",
        date: "Wed, 28 Oct 2026",
        title: "New Year's Eve - Start 2027 with MedPharma",
      assetType: "Story / WhatsApp Status",
      format: "1080 x 1920 px (9:16)",
      platforms: ["Instagram Stories", "WhatsApp Status", "Facebook Stories"],
      audience: "All followers.",
      hook: "Your 2027 health resolution starts tonight.",
      body:
        "Background: Bold countdown. MedPharma teal + gold.\nHeadline: 2027 resolution: Put your health first.\nSub: Download MedPharma. Keep your medication consistent. Book your first online consultation. Start the year in control.",
      designDirection:
        "New Year countdown aesthetic. MedPharma teal and gold. Bold, aspirational, motivating. Feels like a health promise - not just a greeting card.",
      cta: STD_CTA,
      hashtags: ["#NewYear2027", "#MedPharmaGH", "#SeamlessHealthcare", "#HealthyNewYear"],
    },
      {
          id: "mp-q4-new-1",
          week: "Week of Mon 26 Oct - Sun 1 Nov",
          date: "Fri, 30 Oct 2026",
        title: "Fast Medicine Delivery",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook", "X / Twitter", "LinkedIn"],
          audience: "Busy professionals and parents in Ghana",
          hook: "Sick and can't leave the house? We've got you covered.",
          body: "Headline: Fast Medicine Delivery\nSub: Get your prescriptions delivered to your doorstep in minutes with MedPharma.",
          designDirection: "Background: A smiling delivery rider handing a neat package to a relieved customer at their door.",
          cta: STD_CTA,
          hashtags: ["#MedPharma", "#HealthTechGhana", "#FastDelivery", "#DigitalPharmacy"]
        },
      {
          id: "mp-q4-new-2",
          week: "Week of Mon 2 Nov - Sun 8 Nov",
          date: "Mon, 2 Nov 2026",
        title: "Corporate Health Plans",
          assetType: "Information Carousel",
          format: "1080 x 1350 px (4:5) · 3 slides",
          platforms: ["LinkedIn", "Facebook"],
          audience: "HR Managers and Business Owners",
          hook: "A healthy team is a productive team.",
          designDirection: "Background: Modern office setting with diverse, healthy-looking professionals collaborating.",
          cta: STD_CTA,
          hashtags: ["#CorporateHealth", "#EmployeeWellness", "#MedPharma", "#HRGhana"],
          slides: [
                            {title: "Corporate Health Simplified", body: "Keep your employees healthy and happy."},
                            {title: "Tailored Packages", body: "Custom healthcare solutions for businesses of all sizes."},
                            {title: "Easy Management", body: "Track and manage employee health benefits effortlessly."}
                          ]
    },
      {
          id: "mp-q4-new-3",
          week: "Week of Mon 2 Nov - Sun 8 Nov",
          date: "Wed, 4 Nov 2026",
        title: "App Feature - Prescription Upload",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook", "X / Twitter"],
          audience: "Smartphone users needing medication",
          hook: "Skip the pharmacy queue.",
          body: "Headline: Upload Your Prescription\nSub: Snap a photo of your prescription, upload it on the MedPharma app, and we'll do the rest.",
          designDirection: "Background: Close-up of a hand holding a smartphone, taking a picture of a medical prescription.",
          cta: STD_CTA,
          hashtags: ["#DigitalPharmacy", "#MedPharmaApp", "#HealthcareGhana"]
        },
      {
          id: "mp-q4-new-4",
          week: "Week of Mon 2 Nov - Sun 8 Nov",
          date: "Fri, 6 Nov 2026",
        title: "General Health - Hydration",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook"],
          audience: "General public",
          hook: "Are you drinking enough water?",
          body: "Headline: Stay Hydrated!\nSub: Proper hydration boosts your immune system and keeps your skin glowing. Drink at least 8 glasses a day.",
          designDirection: "Background: Crisp, refreshing glass of water with a slice of lemon against a bright background.",
          cta: STD_CTA,
          hashtags: ["#HealthTips", "#WellnessGhana", "#MedPharma", "#StayHydrated"]
        },
      {
          id: "mp-q4-new-5",
          week: "Week of Mon 9 Nov - Sun 15 Nov",
          date: "Mon, 9 Nov 2026",
        title: "24/7 Access",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook", "X / Twitter"],
          audience: "Anyone needing after-hours healthcare",
          hook: "Healthcare that never sleeps.",
          body: "Headline: 24/7 Pharmacy Access\nSub: Day or night, MedPharma is ready to serve your healthcare needs.",
          designDirection: "Background: A glowing smartphone screen showing the MedPharma app in a dimly lit room.",
          cta: STD_CTA,
          hashtags: ["#AlwaysOpen", "#MedPharma", "#DigitalHealth", "#GhanaHealthcare"]
        },
      {
          id: "mp-q4-new-6",
          week: "Week of Mon 9 Nov - Sun 15 Nov",
          date: "Wed, 11 Nov 2026",
        title: "App Feature - Doctor Consult",
          assetType: "Information Carousel",
          format: "1080 x 1350 px (4:5) · 3 slides",
          platforms: ["Instagram", "Facebook", "LinkedIn"],
          audience: "People needing medical advice from home",
          hook: "Speak to a doctor without leaving your couch.",
          designDirection: "Background: A person relaxing on a couch, having a video call with a friendly doctor on their tablet.",
          cta: STD_CTA,
          hashtags: ["#Telemedicine", "#VirtualDoctor", "#MedPharma", "#DigitalPharmacy"],
          slides: [
                            {title: "Telemedicine Made Easy", body: "Connect with certified doctors instantly."},
                            {title: "Secure & Private", body: "Your health information is strictly confidential."},
                            {title: "Get Prescriptions", body: "Receive digital prescriptions directly after your consult."}
                          ]
    },
      {
          id: "mp-q4-new-7",
          week: "Week of Mon 9 Nov - Sun 15 Nov",
          date: "Fri, 13 Nov 2026",
        title: "OTC Medicines",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook"],
          audience: "General public",
          hook: "Headache? Cold? We have what you need.",
          body: "Headline: Over-The-Counter Essentials\nSub: Order your everyday health essentials and get them delivered fast.",
          designDirection: "Background: A neatly arranged flat lay of common OTC medicines and vitamins.",
          cta: STD_CTA,
          hashtags: ["#OTCMedicine", "#PharmacyDelivery", "#MedPharma"]
        },
      {
          id: "mp-q4-new-8",
          week: "Week of Mon 16 Nov - Sun 22 Nov",
          date: "Mon, 16 Nov 2026",
        title: "Corporate Health - Annual Checkups",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["LinkedIn", "Facebook"],
          audience: "Corporate leaders",
          hook: "Preventive care saves time and money.",
          body: "Headline: Annual Corporate Checkups\nSub: Partner with MedPharma for comprehensive employee health screenings.",
          designDirection: "Background: A medical professional checking an employee's blood pressure in a modern corporate wellness room.",
          cta: STD_CTA,
          hashtags: ["#CorporateWellness", "#HealthScreening", "#MedPharma"]
        },
      {
          id: "mp-q4-new-9",
          week: "Week of Mon 16 Nov - Sun 22 Nov",
          date: "Wed, 18 Nov 2026",
        title: "Health Awareness - Malaria",
          assetType: "Information Carousel",
          format: "1080 x 1350 px (4:5) · 3 slides",
          platforms: ["Instagram", "Facebook", "X / Twitter"],
          audience: "General public in Ghana",
          hook: "Protect your family from Malaria.",
          designDirection: "Background: A family sleeping peacefully under a mosquito net in a warm, cozy room.",
          cta: STD_CTA,
          hashtags: ["#EndMalaria", "#HealthAwareness", "#MedPharma", "#HealthyGhana"],
          slides: [
                            {title: "Malaria Prevention", body: "Use treated nets and clear stagnant water."},
                            {title: "Know the Symptoms", body: "Fever, chills, and body aches? Get tested."},
                            {title: "Fast Treatment", body: "Order malaria test kits and medication via MedPharma."}
                          ]
    },
      {
          id: "mp-q4-new-10",
          week: "Week of Mon 16 Nov - Sun 22 Nov",
          date: "Fri, 20 Nov 2026",
        title: "App Feature - Medication Reminders",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook"],
          audience: "Patients on medication",
          hook: "Never forget your meds again.",
          body: "Headline: Smart Medication Reminders\nSub: Set custom alerts on the MedPharma app and stay on top of your health.",
          designDirection: "Background: A smartphone displaying a friendly notification reminder next to a glass of water and pills.",
          cta: STD_CTA,
          hashtags: ["#MedReminder", "#MedPharmaApp", "#HealthTech"]
        },
      {
          id: "mp-q4-new-11",
          week: "Week of Mon 23 Nov - Sun 29 Nov",
          date: "Mon, 23 Nov 2026",
        title: "Digital Pharmacy Convenience",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook", "LinkedIn"],
          audience: "Tech-savvy individuals",
          hook: "The pharmacy is now in your pocket.",
          body: "Headline: Your Digital Pharmacy\nSub: Browse, order, and track your medication delivery all from your phone.",
          designDirection: "Background: A dynamic abstract background featuring digital health icons and a sleek smartphone.",
          cta: STD_CTA,
          hashtags: ["#DigitalPharmacy", "#Convenience", "#MedPharma"]
        },
      {
          id: "mp-q4-new-12",
          week: "Week of Mon 23 Nov - Sun 29 Nov",
          date: "Wed, 25 Nov 2026",
        title: "Health Awareness - Heart Health",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook", "LinkedIn"],
          audience: "Adults 30+",
          hook: "Listen to your heart.",
          body: "Headline: Prioritize Heart Health\nSub: Eat right, exercise, and get your heart medications delivered reliably by MedPharma.",
          designDirection: "Background: A person jogging outdoors at sunrise, promoting a healthy, active lifestyle.",
          cta: STD_CTA,
          hashtags: ["#HeartHealth", "#HealthyLiving", "#MedPharma"]
        },
      {
          id: "mp-q4-new-13",
          week: "Week of Mon 23 Nov - Sun 29 Nov",
          date: "Fri, 27 Nov 2026",
        title: "App Feature - Secure Payments",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook", "X / Twitter"],
          audience: "Mobile money users",
          hook: "Pay the way you want, securely.",
          body: "Headline: Seamless & Secure Payments\nSub: Pay for your medication easily using Mobile Money or Card on the MedPharma app.",
          designDirection: "Background: A close-up of a person confidently using mobile money on their phone to complete a transaction.",
          cta: STD_CTA,
          hashtags: ["#SecurePayment", "#MobileMoneyGhana", "#MedPharma"]
        },
      {
          id: "mp-q4-new-14",
          week: "Week of Mon 30 Nov - Sun 6 Dec",
          date: "Mon, 30 Nov 2026",
        title: "Corporate Health - Mental Wellness",
          assetType: "Information Carousel",
          format: "1080 x 1350 px (4:5) · 3 slides",
          platforms: ["LinkedIn"],
          audience: "HR Managers and Business Leaders",
          hook: "Mental health is as important as physical health.",
          designDirection: "Background: A calm, well-lit office space with a person looking relaxed and focused.",
          cta: STD_CTA,
          hashtags: ["#MentalHealthAtWork", "#CorporateWellness", "#MedPharma"],
          slides: [
                            {title: "Support Your Team", body: "Mental wellness programs improve overall productivity."},
                            {title: "Confidential Consultations", body: "MedPharma offers private access to mental health professionals."},
                            {title: "Build a Better Workplace", body: "Invest in a comprehensive corporate health plan today."}
                          ]
    },
      {
          id: "mp-q4-new-15",
          week: "Week of Mon 30 Nov - Sun 6 Dec",
          date: "Wed, 2 Dec 2026",
        title: "Fast Delivery - Anywhere",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook", "X / Twitter"],
          audience: "Urban residents in Ghana",
          hook: "Wherever you are, health comes to you.",
          body: "Headline: Nationwide Coverage\nSub: From Accra to Kumasi, experience fast and reliable medication delivery.",
          designDirection: "Background: A stylized map of Ghana with delivery route lines connecting major cities.",
          cta: STD_CTA,
          hashtags: ["#DeliveryEverywhere", "#MedPharmaGhana", "#DigitalPharmacy"]
        },
      {
          id: "mp-q4-new-16",
          week: "Week of Mon 30 Nov - Sun 6 Dec",
          date: "Fri, 4 Dec 2026",
        title: "App Feature - Family Accounts",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook"],
          audience: "Parents and heads of households",
          hook: "Manage health for the whole family.",
          body: "Headline: Family Health Profiles\nSub: Order prescriptions and track medical records for your loved ones from a single account.",
          designDirection: "Background: A happy, multi-generational Ghanaian family laughing together in their living room.",
          cta: STD_CTA,
          hashtags: ["#FamilyHealth", "#MedPharmaApp", "#HealthyFamilies"]
        },
      {
          id: "mp-q4-new-17",
          week: "Week of Mon 7 Dec - Sun 13 Dec",
          date: "Mon, 7 Dec 2026",
        title: "Health Awareness - Flu Season",
          assetType: "Information Carousel",
          format: "1080 x 1350 px (4:5) · 3 slides",
          platforms: ["Instagram", "Facebook"],
          audience: "General public",
          hook: "Don't let the flu get you down.",
          designDirection: "Background: A cozy image of someone holding a warm mug of tea, wrapped in a blanket.",
          cta: STD_CTA,
          hashtags: ["#FluSeason", "#ImmuneBoost", "#MedPharma"],
          slides: [
                            {title: "Flu Season is Here", body: "Take precautions to protect yourself and your family."},
                            {title: "Boost Immunity", body: "Stock up on Vitamin C and immune boosters."},
                            {title: "Fast Relief", body: "Get cold and flu meds delivered fast with MedPharma."}
                          ]
    },
      {
          id: "mp-q4-new-18",
          week: "Week of Mon 7 Dec - Sun 13 Dec",
          date: "Wed, 9 Dec 2026",
        title: "Quality Assured Medications",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook", "LinkedIn"],
          audience: "Health-conscious consumers",
          hook: "Never compromise on drug quality.",
          body: "Headline: 100% Genuine Medications\nSub: We source directly from trusted manufacturers to guarantee your safety.",
          designDirection: "Background: A clean, professional pharmacy setting with a pharmacist carefully inspecting a medication box.",
          cta: STD_CTA,
          hashtags: ["#QualityHealthcare", "#SafeMedication", "#MedPharma"]
        },
      {
          id: "mp-q4-new-19",
          week: "Week of Mon 7 Dec - Sun 13 Dec",
          date: "Fri, 11 Dec 2026",
        title: "Corporate Health - Quick Onboarding",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["LinkedIn"],
          audience: "HR Managers",
          hook: "Upgrade your company's health benefits in minutes.",
          body: "Headline: Effortless Corporate Onboarding\nSub: Sign up your business with MedPharma and give your team premium health access instantly.",
          designDirection: "Background: An HR manager happily reviewing information on a tablet in a bright office.",
          cta: STD_CTA,
          hashtags: ["#HRBenefits", "#CorporateHealth", "#MedPharmaB2B"]
        },
      {
          id: "mp-q4-new-20",
          week: "Week of Mon 14 Dec - Sun 20 Dec",
          date: "Mon, 14 Dec 2026",
        title: "App Feature - Chat with Pharmacist",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook", "X / Twitter"],
          audience: "Patients with medication questions",
          hook: "Have a question about your medication?",
          body: "Headline: Ask A Pharmacist\nSub: Use our in-app chat to get expert advice from certified pharmacists instantly.",
          designDirection: "Background: A friendly pharmacist typing on a computer, providing virtual support.",
          cta: STD_CTA,
          hashtags: ["#PharmacistAdvice", "#MedPharmaApp", "#HealthSupport"]
        },
      {
          id: "mp-q4-new-21",
          week: "Week of Mon 14 Dec - Sun 20 Dec",
          date: "Wed, 16 Dec 2026",
        title: "Health Awareness - Diabetes Care",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook"],
          audience: "Diabetic patients and caregivers",
          hook: "Managing diabetes doesn't have to be hard.",
          body: "Headline: Complete Diabetes Care\nSub: From test strips to insulin, get all your diabetes essentials delivered reliably.",
          designDirection: "Background: A neat arrangement of a blood glucose monitor and healthy foods like apples and leafy greens.",
          cta: STD_CTA,
          hashtags: ["#DiabetesCare", "#HealthTech", "#MedPharma"]
        },
      {
          id: "mp-q4-new-22",
          week: "Week of Mon 14 Dec - Sun 20 Dec",
          date: "Fri, 18 Dec 2026",
        title: "Festive Season Readiness",
          assetType: "Information Carousel",
          format: "1080 x 1350 px (4:5) · 3 slides",
          platforms: ["Instagram", "Facebook", "X / Twitter"],
          audience: "General public preparing for holidays",
          hook: "Stay healthy through the holidays.",
          designDirection: "Background: Subtle festive elements, like warm lights and a joyful family gathering around a table.",
          cta: STD_CTA,
          hashtags: ["#HealthyHolidays", "#FestiveSeasonGhana", "#MedPharma"],
          slides: [
                            {title: "Festive Joy", body: "The holidays are for family, not for falling sick."},
                            {title: "Stock Up", body: "Order your essential medications before the holiday rush."},
                            {title: "We're Open", body: "MedPharma delivers even during the festive season."}
                          ]
    },
      {
          id: "mp-q4-new-23",
          week: "Week of Mon 21 Dec - Sun 27 Dec",
          date: "Mon, 21 Dec 2026",
        title: "App Feature - Order Tracking",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook"],
          audience: "App users",
          hook: "Know exactly when your medicine arrives.",
          body: "Headline: Live Order Tracking\nSub: Track your medication delivery in real-time on the MedPharma app.",
          designDirection: "Background: A stylized phone displaying a map interface with a delivery pin approaching the user's location.",
          cta: STD_CTA,
          hashtags: ["#DeliveryTracking", "#MedPharmaApp", "#Convenience"]
        },
      {
          id: "mp-q4-new-24",
          week: "Week of Mon 21 Dec - Sun 27 Dec",
          date: "Wed, 23 Dec 2026",
        title: "Corporate Health - Testimonials",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["LinkedIn", "Facebook"],
          audience: "Business Owners",
          hook: "See why top companies trust us.",
          body: "Headline: Trusted by Ghanaian Businesses\nSub: Join hundreds of companies providing top-tier healthcare to their employees with MedPharma.",
          designDirection: "Background: A professional portrait of a satisfied business executive in front of their office building.",
          cta: STD_CTA,
          hashtags: ["#CorporateTrust", "#MedPharma", "#BusinessWellness"]
        },
      {
          id: "mp-q4-new-25",
          week: "Week of Mon 21 Dec - Sun 27 Dec",
          date: "Fri, 25 Dec 2026",
        title: "End of Year Health Check",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook", "LinkedIn"],
          audience: "General public",
          hook: "Finish the year strong and healthy.",
          body: "Headline: End of Year Check-Up\nSub: It's the perfect time for a health screening. Book tests and get meds via MedPharma.",
          designDirection: "Background: A calendar showing December, with a stethoscope creatively forming a checkmark over the month.",
          cta: STD_CTA,
          hashtags: ["#HealthCheck", "#YearEndWellness", "#MedPharma"]
        }
],
};
