const fs = require('fs');
let c = fs.readFileSync('src/lib/contentPlans.ts', 'utf8');

const CALL = '0557560448';
const APP = 'https://onelink.to/vhzcxh';
const STD_CTA = `Call ${CALL} or download the MedPharma App: ${APP}`;

const FUL_AUG_SEP = `
    // ============ AUGUST WEEK 1 - Aug 3-9 (Founders' Day Aug 4) ============
    {
      id: "fl-aug-w1",
      week: "Week of Mon 3 Aug - Sun 9 Aug",
      date: "Tue 5 Aug 2026",
      occasion: "Founders' Day Week",
      title: "Founders' Day - Building a foundation of consistency",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook"],
      audience: "Existing patients on daily medication.",
      hook: "Great nations and great health are built the same way: with consistency.",
      body: "Headline: A strong foundation requires daily work.\\n\\nSub: Happy Founders' Day. Your health is your most important asset. Protect it with consistency.\\n\\nWith FulLife, we deliver your daily medication every month, so you never miss a day.\\n\\nCTA: " + STD_CTA,
      designDirection: "Clean, patriotic but subtle. MedPharma teal with touches of gold. A confident Ghanaian elder.",
      cta: STD_CTA,
      hashtags: ["#FoundersDay", "#FulLife", "#Consistency", "#MedPharmaGH"]
    },
    // ============ AUGUST WEEK 2 - Aug 10-16 ============
    {
      id: "fl-aug-w2",
      week: "Week of Mon 10 Aug - Sun 16 Aug",
      date: "Thu 13 Aug 2026",
      title: "Young professionals and routine medication",
      assetType: "Story / WhatsApp Status",
      format: "1080 x 1920 px (9:16)",
      platforms: ["Instagram Stories", "WhatsApp Status"],
      audience: "Young professionals managing asthma, sickle cell, or hypertension.",
      hook: "You have meetings, deadlines, and a life. Let us handle your refills.",
      body: "Headline: Busy life? Don't let your health slip.\\n\\nSub: FulLife automatically delivers your routine medication every month. No pharmacy queues. No 'I forgot' moments.\\n\\nCTA: Sign up today -> " + APP,
      designDirection: "Dynamic, modern. A young Ghanaian professional looking confident.",
      cta: STD_CTA,
      hashtags: ["#FulLife", "#AccraProfessionals", "#MedPharmaGH"]
    },
    // ============ AUGUST WEEK 3 - Aug 17-23 ============
    {
      id: "fl-aug-w3",
      week: "Week of Mon 17 Aug - Sun 23 Aug",
      date: "Tue 19 Aug 2026",
      title: "Family medication management",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "LinkedIn"],
      audience: "Parents and caregivers managing prescriptions for parents/children.",
      hook: "Managing medication for your parents and yourself? We make it easy.",
      body: "Headline: One app. Your whole family's health.\\n\\nSub: With FulLife, you can manage and track medication deliveries for your parents, your children, and yourself—all from one account.\\n\\nCTA: Download the app and simplify your care -> " + APP,
      designDirection: "Warm, family-focused. A multi-generational Ghanaian family.",
      cta: STD_CTA,
      hashtags: ["#FamilyHealth", "#FulLife", "#SeamlessHealthcare"]
    },
    // ============ AUGUST WEEK 4 - Aug 24-30 ============
    {
      id: "fl-aug-w4",
      week: "Week of Mon 24 Aug - Sun 30 Aug",
      date: "Fri 28 Aug 2026",
      title: "End of month check-in",
      assetType: "Information Carousel",
      format: "1080 x 1350 px (4:5) · 3 slides",
      platforms: ["Instagram", "Facebook"],
      audience: "People considering signing up for a subscription plan.",
      hook: "Did you miss any doses this month? Here is how to fix that for September.",
      slides: [
        { title: "Slide 1 - Cover", body: "Headline: Did you miss any doses this month?" },
        { title: "Slide 2", body: "Headline: The pharmacy queue shouldn't be the reason you skip your medication.\\nBody: We bring the pharmacy to you." },
        { title: "Slide 3 - CTA", body: "Headline: Step into September with FulLife.\\nBody: Automatic monthly deliveries. " + STD_CTA }
      ],
      designDirection: "Clean typography. Bold teal background. Highly readable.",
      cta: STD_CTA,
      hashtags: ["#FulLife", "#Consistency", "#MedPharmaGH"]
    },
    // ============ SEPTEMBER WEEK 1 - Aug 31-Sep 6 ============
    {
      id: "fl-sep-w1",
      week: "Week of Mon 31 Aug - Sun 6 Sep",
      date: "Wed 2 Sep 2026",
      title: "Back to School - Managing Kids' Routine Meds",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook"],
      audience: "Parents of children with asthma or sickle cell.",
      hook: "School is back in session. Is their medication ready?",
      body: "Headline: School is back. Keep their health on track.\\n\\nSub: Ensure your children have their inhalers, routine meds, and vitamins ready for the new term. FulLife delivers directly to you.\\n\\nCTA: " + STD_CTA,
      designDirection: "Bright, reassuring. Ghanaian children in school uniforms looking healthy and happy.",
      cta: STD_CTA,
      hashtags: ["#BackToSchoolGhana", "#FulLife", "#MedPharmaGH"]
    },
    // ============ SEPTEMBER WEEK 2 - Sep 7-13 ============
    {
      id: "fl-sep-w2",
      week: "Week of Mon 7 Sep - Sun 13 Sep",
      date: "Mon 7 Sep 2026",
      title: "The cost of skipping a dose",
      assetType: "Information Carousel",
      format: "1080 x 1350 px (4:5) · 4 slides",
      platforms: ["Instagram", "Facebook"],
      audience: "Patients on hypertension or diabetes medication.",
      hook: "What actually happens when you skip your medication for three days?",
      slides: [
        { title: "Slide 1 - Cover", body: "Headline: What happens when you skip your medication for 3 days?" },
        { title: "Slide 2", body: "Headline: It's not just a break.\\nBody: Your body's baseline changes. For hypertension, blood pressure can rebound dangerously high." },
        { title: "Slide 3", body: "Headline: The solution isn't trying harder. It's building a system.\\nBody: FulLife removes the friction of going to the pharmacy." },
        { title: "Slide 4 - CTA", body: "Headline: Let us remember for you.\\nBody: " + STD_CTA }
      ],
      designDirection: "Educational, serious but empowering. Iconography showing blood pressure curves stabilizing.",
      cta: STD_CTA,
      hashtags: ["#HypertensionAwareness", "#FulLife", "#Consistency"]
    },
    // ============ SEPTEMBER WEEK 3 - Sep 14-20 ============
    {
      id: "fl-sep-w3",
      week: "Week of Mon 14 Sep - Sun 20 Sep",
      date: "Fri 18 Sep 2026",
      title: "Kwame Nkrumah Memorial Day Prep",
      assetType: "Story / WhatsApp Status",
      format: "1080 x 1920 px (9:16)",
      platforms: ["Instagram Stories", "WhatsApp Status"],
      audience: "General FulLife audience.",
      hook: "The long weekend is coming. Are your meds stocked?",
      body: "Headline: Long weekend ahead.\\nSub: Don't let the holiday disrupt your routine. Get your monthly FulLife box delivered before the Kwame Nkrumah Memorial Day weekend.\\nCTA: " + APP,
      designDirection: "Relaxed lifestyle image, weekend vibe. Clean overlay.",
      cta: STD_CTA,
      hashtags: ["#KwameNkrumahMemorialDay", "#FulLife"]
    },
    // ============ SEPTEMBER WEEK 4 - Sep 21-27 ============
    {
      id: "fl-sep-w4",
      week: "Week of Mon 21 Sep - Sun 27 Sep",
      date: "Fri 25 Sep 2026",
      occasion: "World Pharmacists Day",
      title: "World Pharmacists Day - Your pharmacist, in your pocket",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "LinkedIn"],
      audience: "Public, corporate partners.",
      hook: "Behind every FulLife delivery is a licensed Ghanaian pharmacist ensuring your safety.",
      body: "Headline: Celebrating the experts behind your health.\\n\\nSub: Happy World Pharmacists Day. With FulLife, you aren't just getting delivery. You're getting the careful review, advice, and dedication of our licensed pharmacists.\\n\\nCTA: " + STD_CTA,
      designDirection: "Professional portrait of a MedPharma pharmacist in a modern digital pharmacy setting.",
      cta: STD_CTA,
      hashtags: ["#WorldPharmacistsDay", "#FulLife", "#SeamlessHealthcare"]
    },
    // ============ SEPTEMBER WEEK 5 - Sep 28-Oct 4 ============
    {
      id: "fl-sep-w5",
      week: "Week of Mon 28 Sep - Sun 4 Oct",
      date: "Tue 29 Sep 2026",
      occasion: "World Heart Day",
      title: "World Heart Day - Consistency is cardio",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook"],
      audience: "Cardiology patients.",
      hook: "Taking your medication on time is the best gift you can give your heart.",
      body: "Headline: Protect your heart with consistency.\\n\\nSub: This World Heart Day, commit to a routine that works. FulLife delivers your hypertension and heart medications exactly when you need them.\\n\\nCTA: " + STD_CTA,
      designDirection: "Heart health motif, warm reds and MedPharma teal. A healthy, active older Ghanaian couple.",
      cta: STD_CTA,
      hashtags: ["#WorldHeartDay", "#HeartHealthGhana", "#FulLife"]
    }
`;

const MP_SEP = `
    // ============ SEPTEMBER WEEK 1 - Aug 31-Sep 6 ============
    {
      id: "mp-sep-w1",
      week: "Week of Mon 31 Aug - Sun 6 Sep",
      date: "Thu 3 Sep 2026",
      title: "Upload your prescription",
      assetType: "Information Carousel",
      format: "1080 x 1350 px (4:5) · 3 slides",
      platforms: ["Instagram", "Facebook"],
      audience: "People leaving clinics with paper prescriptions.",
      hook: "Don't drive from pharmacy to pharmacy looking for your medication.",
      slides: [
        { title: "Slide 1 - Cover", body: "Headline: Don't drive around looking for your medication." },
        { title: "Slide 2", body: "Headline: Upload it instead.\\nBody: Take a photo of your prescription. We will verify it, pack it, and deliver it to your home or office." },
        { title: "Slide 3 - CTA", body: "Headline: Save time. Get well.\\nBody: " + STD_CTA }
      ],
      designDirection: "Showing a smartphone taking a photo of a prescription paper. Clean, instructional.",
      cta: STD_CTA,
      hashtags: ["#MedPharmaGH", "#DigitalPharmacy", "#SeamlessHealthcare"]
    },
    // ============ SEPTEMBER WEEK 2 - Sep 7-13 ============
    {
      id: "mp-sep-w2",
      week: "Week of Mon 7 Sep - Sun 13 Sep",
      date: "Wed 9 Sep 2026",
      title: "Corporate Health Benefit",
      assetType: "LinkedIn Post",
      format: "1080 x 1080 px (1:1)",
      platforms: ["LinkedIn"],
      audience: "HR Directors, CEOs.",
      hook: "Is your company's health benefit actually keeping your team healthy?",
      body: "Headline: The modern workplace needs modern healthcare.\\n\\nSub: MedPharma partners with forward-thinking Ghanaian companies to provide digital pharmacy access, online doctor consultations, and doorstep delivery for employees.\\n\\nCTA: Message us to set up a corporate account -> partnerships@medpharma.care",
      designDirection: "Corporate aesthetic. Modern Accra office environment. Professional.",
      cta: "Email: partnerships@medpharma.care",
      hashtags: ["#HRGhana", "#CorporateHealth", "#EmployeeBenefits", "#MedPharmaGH"]
    },
    // ============ SEPTEMBER WEEK 3 - Sep 14-20 ============
    {
      id: "mp-sep-w3",
      week: "Week of Mon 14 Sep - Sun 20 Sep",
      date: "Mon 21 Sep 2026",
      occasion: "Kwame Nkrumah Memorial Day",
      title: "Kwame Nkrumah Memorial Day - Healthcare Vision",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "X / Twitter"],
      audience: "General public.",
      hook: "A visionary nation needs visionary healthcare.",
      body: "Headline: Advancing the vision of a healthy Ghana.\\n\\nSub: Happy Kwame Nkrumah Memorial Day. We are committed to making healthcare accessible, modern, and seamless for every Ghanaian.\\n\\nCTA: " + STD_CTA,
      designDirection: "Patriotic, visionary. Classic Ghanaian elements with modern tech overlays.",
      cta: STD_CTA,
      hashtags: ["#KwameNkrumahMemorialDay", "#MedPharmaGH", "#GhanaHealthcare"]
    },
    // ============ SEPTEMBER WEEK 4 - Sep 21-27 ============
    {
      id: "mp-sep-w4",
      week: "Week of Mon 21 Sep - Sun 27 Sep",
      date: "Fri 25 Sep 2026",
      occasion: "World Pharmacists Day",
      title: "World Pharmacists Day - The heart of MedPharma",
      assetType: "Square Flyer",
      format: "1080 x 1080 px (1:1)",
      platforms: ["Instagram", "Facebook", "LinkedIn"],
      audience: "Public, corporate partners.",
      hook: "Meet the experts who review every single order before it leaves our doors.",
      body: "Headline: Safe, verified, and caring.\\n\\nSub: Happy World Pharmacists Day! Our digital platform is powered by brilliant, licensed Ghanaian pharmacists who ensure your safety every step of the way.\\n\\nCTA: " + STD_CTA,
      designDirection: "Behind-the-scenes look at a MedPharma pharmacist working with tech. Authentic, warm.",
      cta: STD_CTA,
      hashtags: ["#WorldPharmacistsDay", "#PharmacyGhana", "#MedPharmaGH"]
    },
    // ============ SEPTEMBER WEEK 5 - Sep 28-Oct 4 ============
    {
      id: "mp-sep-w5",
      week: "Week of Mon 28 Sep - Sun 4 Oct",
      date: "Tue 29 Sep 2026",
      occasion: "World Heart Day",
      title: "World Heart Day - Don't ignore the numbers",
      assetType: "Story / WhatsApp Status",
      format: "1080 x 1920 px (9:16)",
      platforms: ["Instagram Stories", "WhatsApp Status"],
      audience: "General public.",
      hook: "When was the last time you checked your blood pressure?",
      body: "Headline: World Heart Day.\\nSub: Book a lipid panel or general health check-up through the MedPharma app today. Prevention is always cheaper than cure.\\nCTA: Book Lab Test -> " + APP,
      designDirection: "Clean, urgent but not scary. Focus on lab test booking interface.",
      cta: STD_CTA,
      hashtags: ["#WorldHeartDay", "#HealthScreening", "#MedPharmaGH"]
    }
`;

// Insert FUL_AUG_SEP at the end of FULLIFE_PLAN
let flEnd = c.indexOf('  ],\n};\n\n// =================================================================\n// MEDPHARMA GENERAL BRAND PLAN');
if (flEnd === -1) flEnd = c.indexOf('  ],\r\n};\r\n\r\n// =================================================================\r\n// MEDPHARMA GENERAL BRAND PLAN');
c = c.substring(0, flEnd) + FUL_AUG_SEP + c.substring(flEnd);

// Insert MP_SEP at the end of MEDPHARMA_PLAN
let mpEnd = c.indexOf('  ],\n};\n\nimport { FULLIFE_Q4_PLAN');
if (mpEnd === -1) mpEnd = c.indexOf('  ],\r\n};\r\n\r\nimport { FULLIFE_Q4_PLAN');
c = c.substring(0, mpEnd) + MP_SEP + c.substring(mpEnd);

fs.writeFileSync('src/lib/contentPlans.ts', c, 'utf8');
console.log('Appended September');
