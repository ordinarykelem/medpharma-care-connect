export type ContentBrief = {
  id: string;
  week: string;
  date: string;
  occasion?: string;
  title: string;
  assetType:
    | "Information Carousel"
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
// FULLIFE PLAN - late May (W4), June, July
// =================================================================
export const FULLIFE_PLAN: ContentPlan = {
  brand: "FulLife",
  productNote:
    "FulLife is MedPharma's continuous medication & care programme for people on long-term/daily medication. Never use the word 'chronic' on creative - always say FulLife, consistency, daily medication, or daily taking medication consistently.",
  callLine: CALL,
  appLink: APP,
  rules: [
    "Use Black/African models in every lifestyle shot. No stock photos of non-African people.",
    "No emojis on the artwork - keep it clean and clinical-corporate.",
    "FulLife logo top-left on every asset. MedPharma 'Seamless Healthcare' lockup bottom-left.",
    "Every asset must show: phone line " + CALL + " + app QR/link. No exceptions.",
    "Never use the word 'chronic' on a customer-facing graphic. Use FulLife, daily taking medication consistently, daily medication, consistency.",
    "Every CTA block must contain BOTH the call line and the app link - never just one.",
  ],
  briefs: [
  {
          id: "fl-jul-1",
            week: "Week of Mon 29 Jun - Sun 5 Jul",
            date: "Tue, 30 Jun 2026",
            title: "Republic Day - A republic of citizens who take their dose",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook", "X / Twitter", "WhatsApp Status (cropped)"],
          audience: "All Ghanaian followers.",
          hook: "A nation is only as strong as the citizens who show up tomorrow.",
          body:
            "Headline: A nation is only as strong as the citizens who show up tomorrow.\n\n" +
            "Sub : Show up. Take the dose. Stay in the story.\n\n" +
            "Supporting line: Happy Republic Day from FulLife and MedPharma - proudly built in Ghana, for Ghana.",
          designDirection:
            "Background: Subtle Black Star watermark.",
          cta: STD_CTA,
          caption:
            "A nation is only as strong as the citizens who show up tomorrow. Show up. Take the dose. Stay in the story. Happy Republic Day, Ghana - from FulLife and MedPharma. 🇬🇭",
          hashtags: ["#RepublicDay", "#Ghana60", "#FulLife", "#MedPharmaGH"],
        },
  {
          id: "fl-jul-2",
            week: "Week of Mon 29 Jun - Sun 5 Jul",
            date: "Thu, 2 Jul 2026",
            title: "Information Carousel - What 'auto-refill' actually means",
          assetType: "Information Carousel",
          format: "1080 x 1350 px (4:5) · 5 slides",
          platforms: ["Instagram", "Facebook"],
          audience: "People who've heard about FulLife but haven't enrolled.",
          hook: "It's not a subscription. It's a relief.",
          slides: [
            { title: "Slide 1 - Cover", body: "Headline: What 'auto-refill' actually means.\nSub: A 60-second explainer from FulLife." },
            { title: "Slide 2", body: "Headline: We count the days, not you.\nBody: From the day you start, we know when month two should land." },
            { title: "Slide 3", body: "Headline: We pack what the doctor wrote - not what we have in stock.\nBody: Your prescription, same brand, same dose, every time." },
            { title: "Slide 4", body: "Headline: We deliver before the strip ends.\nBody: Day 26 of a 30-day supply, the new pack is at your gate." },
            { title: "Slide 5 - CTA", body: "Headline: Less remembering. More living.\nCTA block: " + STD_CTA },
          ],
          designDirection:
            "Background: Clean, editorial style featuring custom line-work icons (calendar, prescription pad, package, smiling face).",
          cta: STD_CTA,
          caption:
            "It's not a subscription. It's a relief. Here's what auto-refill actually means inside FulLife - in 60 seconds. Swipe →",
          hashtags: ["#FulLife", "#AutoRefill", "#MedPharmaGH"],
        },
  {
          id: "fl-jul-3",
            week: "Week of Mon 29 Jun - Sun 5 Jul",
            date: "Sat, 4 Jul 2026",
            title: "World Hepatitis Day - The condition is silent. Your routine shouldn't be.",
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
            "Background: A single, restrained coral hepatitis awareness ribbon graphic.",
          cta: STD_CTA,
          caption:
            "The condition is silent. Your routine shouldn't be. On World Hepatitis Day, FulLife stands with every Ghanaian managing a long-term liver condition - and with the families who walk it with them. You are not alone.",
          hashtags: ["#WorldHepatitisDay", "#FulLife", "#MedPharmaGH", "#NotAlone"],
        },
  {
          id: "fl-jul-4",
            week: "Week of Mon 6 Jul - Sun 12 Jul",
            date: "Tue, 7 Jul 2026",
            title: "Newsletter Header - FulLife: the new standard, six months in",
          assetType: "Newsletter Header",
          format: "1200 x 600 px (Mailchimp Header)",
          platforms: ["Email (Mailchimp)", "LinkedIn cover crop (1584 x 396 - designer to re-export)"],
          audience: "Email subscribers, partners, B2B prospects.",
          hook: "Six months. One quiet promise: never run out.",
          body:
            "Left 55%: Headline : Six months. One quiet promise - never run out.\nSub : FulLife monthly newsletter · July 2026 edition.\n\nRight 45%: composite image of a Ghanaian pharmacist + the MedPharma app screen + a smiling older customer - the same composition language as the existing newsletter header in the brand library, just refreshed with the FulLife wordmark dominant top-right.",
          designDirection:
            "Background: Composite of a Ghanaian pharmacist, the MedPharma app screen, and a smiling older customer.",
          cta: STD_CTA,
        },
  {
          id: "fl-jul-0a",
            week: "Week of Mon 6 Jul - Sun 12 Jul",
            date: "Sat, 11 Jul 2026",
            title: "Square Flyer - Math of prevention",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: [
            "Instagram",
            "Facebook"
          ],
          audience: "Value-conscious adults.",
          hook: "Prevention brings peace.",
          body: "Headline: Prevention brings peace.\n\nSub : The math of daily medication is simple.\n\nSupporting line: A month of consistent medication prevents the stress of a single emergency room visit. Protect your health and your peace of mind with FulLife.",
          designDirection: "Background: Faded medical or calendar imagery.",
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
            week: "Week of Mon 13 Jul - Sun 19 Jul",
            date: "Tue, 14 Jul 2026",
            title: "Square Flyer - In-app doctor",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: [
            "Instagram",
            "Facebook"
          ],
          audience: "People wanting more than just delivery.",
          hook: "Your care team is always awake.",
          body: "Headline: Your care team is always awake.\n\nSub : Connect with a clinician instantly in the MedPharma app.\n\nSupporting line: Have a question about your daily medication? Don't wait for your next appointment. Chat with a professional today.",
          designDirection: "Background: A bright phone mockup showing a friendly chat interface with a doctor.",
          cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
          caption: "Have a question about your daily medication? Your care team is always awake. Connect with a clinician instantly in the MedPharma app.",
          hashtags: [
            "#FulLife",
            "#MedPharmaGH",
            "#TelehealthGhana",
            "#SeamlessHealthcare"
          ]
        },
  {
          id: "fl-jul-1b",
            week: "Week of Mon 13 Jul - Sun 19 Jul",
            date: "Thu, 16 Jul 2026",
            title: "Information Carousel - Dietary habits",
          assetType: "Information Carousel",
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
              body: "Headline: The pill works best when the plate supports it.\nSub: Nutrition and daily medication."
            },
            {
              title: "Slide 2",
              body: "Headline: Small changes, big impact.\nBody: Reducing salt and managing portions amplifies the effect of your daily dose."
            },
            {
              title: "Slide 3 - CTA",
              body: "Headline: Holistic care, delivered.\nCTA block: Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh"
            }
          ],
          designDirection: "Background: Vibrant shot of fresh vegetables and local Ghanaian healthy foods.",
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
            week: "Week of Mon 13 Jul - Sun 19 Jul",
            date: "Sat, 18 Jul 2026",
            title: "WhatsApp Status - Q&A on auto-refill",
          assetType: "Story / WhatsApp Status",
          format: "1080 x 1920 px (9:16)",
          platforms: [
            "WhatsApp Status",
            "Instagram Stories"
          ],
          audience: "Curious followers.",
          hook: "Can I pause my auto-refill?",
          body: "Top: Q: Can I pause my auto-refill if I have extra pills?\n\nBottom: A: Yes. Your care team tracks your supply, and you can adjust or pause anytime.\n\nBottom CTA strip: Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
          designDirection: "Background: Clean, minimalist.",
          cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh"
        },
  {
          id: "fl-jul-2a",
            week: "Week of Mon 20 Jul - Sun 26 Jul",
            date: "Tue, 21 Jul 2026",
            title: "Square Flyer - Exercise safely",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: [
            "Instagram",
            "Facebook"
          ],
          audience: "Active individuals.",
          hook: "Keep moving. We'll keep the rhythm.",
          body: "Headline: Keep moving. We'll keep the rhythm.\n\nSub : FulLife auto-refills support your active lifestyle.\n\nSupporting line: Managing your condition shouldn't slow you down.",
          designDirection: "Background: Energetic shot of a Ghanaian man jogging in the early morning.",
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
            week: "Week of Mon 20 Jul - Sun 26 Jul",
            date: "Thu, 23 Jul 2026",
            title: "Square Flyer - Consistency over intensity",
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
          designDirection: "Background: Minimalist shot of a single pill resting on a calendar.",
          cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
          caption: "Health isn't built in a day. It's built in the daily dose. Experience the quiet power of consistency with FulLife.",
          hashtags: [
            "#FulLife",
            "#DailyConsistency",
            "#MedPharmaGH",
            "#SeamlessHealthcare"
          ]
        },
  {
          id: "fl-jul-3a",
            week: "Week of Mon 20 Jul - Sun 26 Jul",
            date: "Sat, 25 Jul 2026",
            title: "Square Flyer - Peace of mind",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: [
            "Instagram",
            "Facebook"
          ],
          audience: "Adults seeking stress relief from health management.",
          hook: "The feeling of one less thing to worry about.",
          body: "Headline: The feeling of one less thing to worry about.\n\nSub : That's the FulLife promise.\n\nSupporting line: Let us remember the dates, coordinate the pharmacy, and navigate the traffic.",
          designDirection: "Background: Deeply relaxed portrait of an older Ghanaian woman sitting comfortably with a cup of tea.",
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
            week: "Week of Mon 27 Jul - Sun 2 Aug",
            date: "Tue, 28 Jul 2026",
            title: "Information Carousel - Alarms vs FulLife",
          assetType: "Information Carousel",
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
              title: "Slide 3 - CTA",
              body: "Headline: Upgrade your routine.\nCTA block: Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh"
            }
          ],
          designDirection: "Background: A phone lock screen showing a standard alarm vs the MedPharma app notification.",
          cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
          caption: "Your phone alarm tells you to take the dose. FulLife ensures the dose is actually there. Upgrade your routine today.",
          hashtags: [
            "#FulLife",
            "#DailyConsistency",
            "#MedPharmaGH",
            "#SeamlessHealthcare"
          ]
        },
  {
          id: "fl-jul-3c",
            week: "Week of Mon 27 Jul - Sun 2 Aug",
            date: "Thu, 30 Jul 2026",
            title: "Square Flyer - Caregiver spotlight",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: [
            "Instagram",
            "Facebook"
          ],
          audience: "Caregivers.",
          hook: "Behind every consistent patient is a tired caregiver. We see you.",
          body: "Headline: Behind every consistent patient is a tired caregiver.\n\nSub : Let FulLife share the load.\n\nSupporting line: We partner with you to ensure your loved ones never miss a dose.",
          designDirection: "Background: A candid shot of a younger person handing a glass of water to an older relative.",
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
            week: "Week of Mon 27 Jul - Sun 2 Aug",
            date: "Sat, 1 Aug 2026",
            title: "Square Flyer - Month-end reflection",
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
          designDirection: "Background: Abstract graphic of a complete 30-day calendar perfectly checked off.",
          cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
          caption: "Another month down. Step into August with a guaranteed routine. Join the FulLife family and never miss a day.",
          hashtags: [
            "#FulLife",
            "#DailyConsistency",
            "#MedPharmaGH",
            "#SeamlessHealthcare"
          ]
        },
  {
          id: "fl-aug-w1",
            week: "Week of Mon 3 Aug - Sun 9 Aug",
            date: "Tue, 4 Aug 2026",
            title: "Founders' Day - Building a foundation of consistency",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook"],
          audience: "Existing patients on daily medication.",
          hook: "Great nations and great health are built the same way: with consistency.",
          body: "Headline: A strong foundation requires daily work.\n\nSub: Happy Founders' Day. Your health is your most important asset. Protect it with consistency.\n\nWith FulLife, we deliver your daily medication every month, so you never miss a day.",
          designDirection: "Clean, patriotic but subtle. MedPharma teal with touches of gold. A confident Ghanaian elder.",
          cta: STD_CTA,
          hashtags: ["#FoundersDay", "#FulLife", "#Consistency", "#MedPharmaGH"]
        },
  {
          id: "fl-aug-w2",
            week: "Week of Mon 3 Aug - Sun 9 Aug",
            date: "Thu, 6 Aug 2026",
            title: "Young professionals and routine medication",
          assetType: "Story / WhatsApp Status",
          format: "1080 x 1920 px (9:16)",
          platforms: ["Instagram Stories", "WhatsApp Status"],
          audience: "Young professionals managing asthma, sickle cell, or hypertension.",
          hook: "You have meetings, deadlines, and a life. Let us handle your refills.",
          body: "Headline: Busy life? Don't let your health slip.\n\nSub: FulLife automatically delivers your routine medication every month. No pharmacy queues. No 'I forgot' moments.",
          designDirection: "Dynamic, modern. A young Ghanaian professional looking confident.",
          cta: STD_CTA,
          hashtags: ["#FulLife", "#AccraProfessionals", "#MedPharmaGH"]
        },
  {
          id: "fl-jun-1b",
            week: "Week of Mon 17 Aug - Sun 23 Aug",
            date: "Tue, Aug 18 2026",
            title: "Square Flyer - The hidden risk of missed doses",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: [
            "Instagram",
            "Facebook",
            "X / Twitter"
          ],
          audience: "Adults 35-65 on daily medication.",
          hook: "The most dangerous medication is the one you forgot to take.",
          body: "Headline: The most dangerous medication is the one you forgot to take.\n\nSub : FulLife auto-refills mean zero missed days.\n\nSupporting line: Skipping days breaks your rhythm and risks emergencies. FulLife delivers your daily medication every month before your strip is empty.",
          designDirection: "Background: A subtle, faded out pharmacy receipt showing a missed refill.",
          cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
          caption: "The most dangerous medication is the one you forgot to take. Don't let a missed dose become an emergency admission. Enroll in FulLife today for seamless monthly delivery.",
          hashtags: [
            "#FulLife",
            "#DailyConsistency",
            "#MedPharmaGH",
            "#SeamlessHealthcare"
          ]
        },
  {
          id: "fl-aug-w3",
            week: "Week of Mon 17 Aug - Sun 23 Aug",
            date: "Thu, Aug 20 2026",
            title: "Family medication management",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook", "LinkedIn"],
          audience: "Parents and caregivers managing prescriptions for parents/children.",
          hook: "Managing medication for your parents and yourself? We make it easy.",
          body: "Headline: One app. Your whole family's health.\n\nSub: With FulLife, you can manage and track medication deliveries for your parents, your children, and yourself—all from one account.",
          designDirection: "Warm, family-focused. A multi-generational Ghanaian family.",
          cta: STD_CTA,
          hashtags: ["#FamilyHealth", "#FulLife", "#SeamlessHealthcare"]
        },
  {
          id: "fl-aug-w4",
            week: "Week of Mon 17 Aug - Sun 23 Aug",
            date: "Sat, Aug 22 2026",
            title: "End of month check-in",
          assetType: "Information Carousel",
          format: "1080 x 1350 px (4:5) · 3 slides",
          platforms: ["Instagram", "Facebook"],
          audience: "People considering signing up for a subscription plan.",
          hook: "Did you miss any doses this month? Here is how to fix that for September.",
          slides: [
            { title: "Slide 1 - Cover", body: "Headline: Did you miss any doses this month?" },
            { title: "Slide 2", body: "Headline: The pharmacy queue shouldn't be the reason you skip your medication.\nBody: We bring the pharmacy to you." },
            { title: "Slide 3 - CTA", body: "Headline: Step into September with FulLife.\nBody: Automatic monthly deliveries. " + STD_CTA }
          ],
          designDirection: "Background: Bright and professional.",
          cta: STD_CTA,
          hashtags: ["#FulLife", "#Consistency", "#MedPharmaGH"]
        },
  {
          id: "fl-sep-w1",
            week: "Week of Mon 24 Aug - Sun 30 Aug",
            date: "Tue, Aug 25 2026",
            title: "Back to School - Managing Kids' Routine Medications",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook"],
          audience: "Parents of children with asthma or sickle cell.",
          hook: "School is back in session. Is their medication ready?",
          body: "Headline: School is back. Keep their health on track.\n\nSub: Ensure your children have their inhalers, routine medications, and vitamins ready for the new term. FulLife delivers directly to you.",
          designDirection: "Bright, reassuring. Ghanaian children in school uniforms looking healthy and happy.",
          cta: STD_CTA,
          hashtags: ["#BackToSchoolGhana", "#FulLife", "#MedPharmaGH"]
        },
  {
          id: "fl-sep-w2",
            week: "Week of Mon 24 Aug - Sun 30 Aug",
            date: "Thu, Aug 27 2026",
            title: "The cost of skipping a dose",
          assetType: "Information Carousel",
          format: "1080 x 1350 px (4:5) · 4 slides",
          platforms: ["Instagram", "Facebook"],
          audience: "Patients on hypertension or diabetes medication.",
          hook: "What actually happens when you skip your medication for three days?",
          slides: [
            { title: "Slide 1 - Cover", body: "Headline: What happens when you skip your medication for 3 days?" },
            { title: "Slide 2", body: "Headline: It's not just a break.\nBody: Your body's baseline changes. For hypertension, blood pressure can rebound dangerously high." },
            { title: "Slide 3", body: "Headline: The solution isn't trying harder. It's building a system.\nBody: FulLife removes the friction of going to the pharmacy." },
            { title: "Slide 4 - CTA", body: "Headline: Let us remember for you.\nBody: " + STD_CTA }
          ],
          designDirection: "Educational, serious but empowering. Iconography showing blood pressure curves stabilizing.",
          cta: STD_CTA,
          hashtags: ["#HypertensionAwareness", "#FulLife", "#Consistency"]
        },
  {
              id: "fl-new-1",
              week: "Week of Mon 24 Aug - Sun 30 Aug",
              date: "Sat, Aug 29 2026",
            title: "Daily Consistency - Peace of Mind",
              assetType: "Square Flyer",
              format: "1080 x 1080 px (1:1)",
              platforms: ["Instagram", "Facebook", "LinkedIn"],
              audience: "Individuals managing long-term health conditions who want a stress-free routine.",
              hook: "Tired of the monthly rush to the pharmacy?",
              body: "Headline: Make Daily Medication Consistency Effortless\nSub: With FulLife, your essential medications arrive at your doorstep exactly when you need them. Never miss a dose, never worry about running out.",
              designDirection: "Background: A relaxed individual enjoying a peaceful morning coffee on their balcony, looking completely stress-free.",
              cta: STD_CTA,
              hashtags: ["#FulLife", "#DailyMedicationConsistency", "#HealthRoutine", "#PeaceOfMind"]
            },
  {
              id: "fl-new-2",
              week: "Week of Mon 31 Aug - Sun 6 Sept",
              date: "Tue, Sept 1 2026",
            title: "Subscription Delivery - Convenience",
              assetType: "Information Carousel",
              format: "1080 x 1350 px (4:5) · 3 slides",
              platforms: ["Instagram", "Facebook"],
              audience: "Busy professionals managing their own or their parents' continuous medication needs.",
              hook: "Imagine a world where your meds refill themselves.",
              designDirection: "Background: A sleek, user-friendly interface concept overlaid on a lifestyle image of a person confidently walking into their office building.",
              cta: STD_CTA,
              hashtags: ["#SubscriptionPharmacy", "#FulLifeCare", "#HealthcareMadeEasy", "#NeverMissADose"],
              slides: [
                                { title: "The FulLife Advantage", body: "Managing daily medications shouldn't feel like a part-time job." },
                                { title: "Subscribe Once", body: "Set up your medication schedule on the FulLife platform and let us handle the rest." },
                                { title: "Automated Deliveries", body: "Receive your medications securely at your doorstep before your current batch runs out." }
                              ]
        },
  {
              id: "fl-new-3",
              week: "Week of Mon 31 Aug - Sun 6 Sept",
              date: "Thu, Sept 3 2026",
            title: "Daily Consistency - Hypertension",
              assetType: "Square Flyer",
              format: "1080 x 1080 px (1:1)",
              platforms: ["Instagram", "Facebook", "X / Twitter"],
              audience: "Individuals managing high blood pressure and their caregivers.",
              hook: "Consistency is the key to controlling your blood pressure.",
              body: "Headline: Keep Your Heart in Check\nSub: Managing hypertension requires strict daily medication consistency. Let FulLife's subscription service ensure you always have your medications on hand to protect your heart.",
              designDirection: "Background: A vibrant, healthy middle-aged man jogging lightly in a green park in Accra, radiating vitality.",
              cta: STD_CTA,
              hashtags: ["#HeartHealth", "#HypertensionCare", "#DailyMedicationConsistency", "#FulLife"]
            },
  {
              id: "fl-new-4",
              week: "Week of Mon 31 Aug - Sun 6 Sept",
              date: "Sat, Sept 5 2026",
            title: "Subscription Delivery - Family Care",
              assetType: "Square Flyer",
              format: "1080 x 1080 px (1:1)",
              platforms: ["Instagram", "Facebook", "LinkedIn"],
              audience: "People responsible for managing healthcare for multiple family members.",
              hook: "Managing medications for the whole family?",
              body: "Headline: Simplify Your Family's Health Routine\nSub: Juggling different prescriptions and refill dates is exhausting. Consolidate your family's daily medication needs with a single, reliable FulLife subscription.",
              designDirection: "Background: A warm family portrait of three generations gathered around a dining table, laughing and enjoying a meal together.",
              cta: STD_CTA,
              hashtags: ["#FamilyHealth", "#CaregiversGhana", "#FulLifeSubscription", "#HealthManagement"]
            },
  {
              id: "fl-new-5",
              week: "Week of Mon 7 Sept - Sun 13 Sept",
              date: "Tue, Sept 8 2026",
            title: "Daily Consistency - Diabetes Care",
              assetType: "Square Flyer",
              format: "1080 x 1080 px (1:1)",
              platforms: ["Instagram", "Facebook", "X / Twitter"],
              audience: "Individuals managing diabetes.",
              hook: "Take control of your glucose levels every single day.",
              body: "Headline: Uninterrupted Diabetes Management\nSub: Daily medication consistency is vital for living well with diabetes. FulLife guarantees timely deliveries so your routine is never disrupted.",
              designDirection: "Background: A close-up of hands preparing a healthy, colorful salad, symbolizing a balanced and well-managed lifestyle.",
              cta: STD_CTA,
              hashtags: ["#DiabetesCare", "#HealthyLiving", "#DailyMedicationConsistency", "#FulLife"]
            },
  {
              id: "fl-new-6",
              week: "Week of Mon 7 Sept - Sun 13 Sept",
              date: "Thu, Sept 10 2026",
            title: "Subscription Delivery - Travel Ready",
              assetType: "Square Flyer",
              format: "1080 x 1080 px (1:1)",
              platforms: ["Instagram", "Facebook", "X / Twitter"],
              audience: "Frequent travelers who need continuous medication.",
              hook: "Planning a trip? Don't let medication logistics hold you back.",
              body: "Headline: Travel with Confidence\nSub: With FulLife, you can easily adjust your subscription to receive a sufficient supply before you travel. Focus on the journey, we'll handle the meds.",
              designDirection: "Background: A traveler's open suitcase neatly packed with clothes, a passport, and a FulLife medication pouch ready for a trip.",
              cta: STD_CTA,
              hashtags: ["#TravelHealth", "#AlwaysPrepared", "#FulLife", "#SubscriptionDelivery"]
            },
  {
              id: "fl-new-7",
              week: "Week of Mon 7 Sept - Sun 13 Sept",
              date: "Sat, Sept 12 2026",
            title: "Daily Consistency - Habit Building",
              assetType: "Information Carousel",
              format: "1080 x 1350 px (4:5) · 3 slides",
              platforms: ["Instagram", "Facebook", "LinkedIn"],
              audience: "Anyone struggling to stick to a daily medication schedule.",
              hook: "Building a healthy habit takes time and consistency.",
              designDirection: "Background: Minimalist, aesthetic workspace showing a glass of water, a daily planner, and neatly organized medication.",
              cta: STD_CTA,
              hashtags: ["#HealthyHabits", "#DailyMedicationConsistency", "#FulLifeJourney", "#WellnessGoals"],
              slides: [
                                { title: "The Challenge", body: "It's easy to forget a pill when life gets busy. But skipping doses compromises your health." },
                                { title: "The Solution", body: "FulLife removes the friction. By ensuring you always have your medication, taking it becomes a seamless part of your morning routine." },
                                { title: "The Result", body: "Achieve optimal daily medication consistency and enjoy better long-term health outcomes." }
                              ]
        },
  {
              id: "fl-new-8",
              week: "Week of Mon 14 Sept - Sun 20 Sept",
              date: "Tue, Sept 15 2026",
            title: "Subscription Delivery - Cost Savings",
              assetType: "Square Flyer",
              format: "1080 x 1080 px (1:1)",
              platforms: ["Instagram", "Facebook", "LinkedIn"],
              audience: "Cost-conscious individuals on continuous medication programs.",
              hook: "Consistent care shouldn't break the bank.",
              body: "Headline: Save Time, Save Money\nSub: Subscribing to your long-term medications through FulLife not only offers unmatched convenience but shields you from sudden price hikes and transport costs.",
              designDirection: "Background: A person looking pleasantly surprised while reviewing a digital receipt on their smartphone screen.",
              cta: STD_CTA,
              hashtags: ["#SmartSavings", "#AffordableHealth", "#FulLifeSubscription", "#HealthcareGhana"]
            },
  {
              id: "fl-new-9",
              week: "Week of Mon 14 Sept - Sun 20 Sept",
              date: "Thu, Sept 17 2026",
            title: "Daily Consistency - Automated Refills",
              assetType: "Square Flyer",
              format: "1080 x 1080 px (1:1)",
              platforms: ["Instagram", "Facebook", "X / Twitter"],
              audience: "Busy people who frequently forget to refill their prescriptions.",
              hook: "Forgot to refill again? We've got you covered.",
              body: "Headline: Say Goodbye to Refill Anxiety\nSub: Never scramble for your medications at the last minute. FulLife tracks your usage and automatically dispatches your next batch before you run out.",
              designDirection: "Background: An elegant, soft-focus image of a wall calendar with a subtle, stylized checkmark landing perfectly on today's date.",
              cta: STD_CTA,
              hashtags: ["#AutomatedRefills", "#StressFreeHealth", "#DailyMedicationConsistency", "#FulLife"]
            },
  {
          id: "fl-sep-w3",
            week: "Week of Mon 14 Sept - Sun 20 Sept",
            date: "Sat, Sept 19 2026",
            title: "Kwame Nkrumah Memorial Day Prep",
          assetType: "Story / WhatsApp Status",
          format: "1080 x 1920 px (9:16)",
          platforms: ["Instagram Stories", "WhatsApp Status"],
          audience: "General FulLife audience.",
          hook: "The long weekend is coming. Are your medications stocked?",
          body: "Headline: Long weekend ahead.\nSub: Don't let the holiday disrupt your routine. Get your monthly FulLife box delivered before the Kwame Nkrumah Memorial Day weekend.\nCTA: " + APP,
          designDirection: "Relaxed lifestyle image, weekend vibe. Clean overlay.",
          cta: STD_CTA,
          hashtags: ["#KwameNkrumahMemorialDay", "#FulLife"]
        },
  {
          id: "fl-sep-w4",
            week: "Week of Mon 21 Sept - Sun 27 Sept",
            date: "Tue, Sept 22 2026",
            title: "World Pharmacists Day - Your pharmacist, in your pocket",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook", "LinkedIn"],
          audience: "Public, corporate partners.",
          hook: "Behind every FulLife delivery is a licensed Ghanaian pharmacist ensuring your safety.",
          body: "Headline: Celebrating the experts behind your health.\n\nSub: Happy World Pharmacists Day. With FulLife, you aren't just getting delivery. You're getting the careful review, advice, and dedication of our licensed pharmacists.",
          designDirection: "Professional portrait of a MedPharma pharmacist in a modern digital pharmacy setting.",
          cta: STD_CTA,
          hashtags: ["#WorldPharmacistsDay", "#FulLife", "#SeamlessHealthcare"]
        },
  {
              id: "fl-new-10",
              week: "Week of Mon 21 Sept - Sun 27 Sept",
              date: "Thu, Sept 24 2026",
            title: "Subscription Delivery - Expert Support",
              assetType: "Square Flyer",
              format: "1080 x 1080 px (1:1)",
              platforms: ["Instagram", "Facebook", "LinkedIn"],
              audience: "Patients who need ongoing guidance for their continuous medication.",
              hook: "More than just delivery. It's dedicated care.",
              body: "Headline: Your Dedicated Health Partners\nSub: A FulLife subscription means you're never alone. Access continuous support and advice from our team of licensed pharmacists whenever you have questions about your routine.",
              designDirection: "Background: A friendly, professional Ghanaian pharmacist wearing a headset, smiling and providing virtual consultation.",
              cta: STD_CTA,
              hashtags: ["#PharmacyCare", "#ExpertSupport", "#FulLife", "#ContinuousCare"]
            },
  {
              id: "fl-new-11",
              week: "Week of Mon 21 Sept - Sun 27 Sept",
              date: "Sat, Sept 26 2026",
            title: "Daily Consistency - Long-term Health",
              assetType: "Square Flyer",
              format: "1080 x 1080 px (1:1)",
              platforms: ["Instagram", "Facebook", "LinkedIn"],
              audience: "Older adults and individuals focused on longevity.",
              hook: "Invest in your tomorrow, today.",
              body: "Headline: The Foundation of Longevity\nSub: True wellness is built day by day. Committing to daily medication consistency ensures you stay active, healthy, and ready for whatever the future holds.",
              designDirection: "Background: An active elderly couple walking hand-in-hand along a beautiful beach at sunset, looking healthy and vibrant.",
              cta: STD_CTA,
              hashtags: ["#Longevity", "#HealthyAging", "#DailyMedicationConsistency", "#FulLifeCare"]
            },
  {
          id: "fl-sep-w5",
            week: "Week of Mon 28 Sept - Sun 4 Oct",
            date: "Tue, Sept 29 2026",
            title: "World Heart Day - Consistency is cardio",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook"],
          audience: "Cardiology patients.",
          hook: "Taking your medication on time is the best gift you can give your heart.",
          body: "Headline: Protect your heart with consistency.\n\nSub: This World Heart Day, commit to a routine that works. FulLife delivers your hypertension and heart medications exactly when you need them.",
          designDirection: "Heart health motif, warm reds and MedPharma teal. A healthy, active older Ghanaian couple.",
          cta: STD_CTA,
          hashtags: ["#WorldHeartDay", "#HeartHealthGhana", "#FulLife"]
        }
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
    "Lead with the MedPharma Seamless Healthcare lockup - full logo top-left.",
    "Use Black/African models exclusively in lifestyle shots.",
    "No emojis on the artwork itself. Emojis are fine in the social caption only.",
    "Every asset must show: " + CALL + " + app QR/link + the @medpharma / @medpharmagh handle row.",
    "Never make medical claims. Talk about access, delivery, reminders, doctor chat - never outcomes for a specific condition.",
    "If a graphic is for a public holiday, the holiday wish must come BEFORE the product mention. Respect first, sell second.",
  ],
  briefs: [
  {
          id: "mp-jul-1",
            week: "Week of Mon 29 Jun - Sun 5 Jul",
            date: "Mon, 29 Jun 2026",
            title: "Republic Day - Built in Ghana, for Ghana",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook", "X / Twitter", "WhatsApp Status (cropped)"],
          audience: "All Ghanaian followers.",
          hook: "Built in Ghana, for Ghana - every order, every rider, every refill.",
          body:
            "Headline : Built in Ghana, for Ghana.\n\nSub : Every order, every rider, every refill.\n\nSupporting line: Happy Republic Day from the MedPharma family. The pharmacy is open today - call " + CALL + " or order in the app.",
          designDirection:
            "Background: Subtle Black Star watermark.",
          cta: STD_CTA,
          caption:
            "Built in Ghana, for Ghana - every order, every rider, every refill. Happy Republic Day from the MedPharma family. 🇬🇭",
          hashtags: ["#RepublicDay", "#Ghana", "#MedPharmaGH", "#SeamlessHealthcare"],
        },
  {
          id: "mp-jul-2",
            week: "Week of Mon 29 Jun - Sun 5 Jul",
            date: "Wed, 1 Jul 2026",
            title: "Information Carousel - Real medicine, real pharmacists, real receipts",
          assetType: "Information Carousel",
          format: "1080 x 1350 px (4:5) · 5 slides",
          platforms: ["Instagram", "Facebook"],
          audience: "First-time-online buyers nervous about counterfeits.",
          hook: "Three things we do that the corner shop can't.",
          slides: [
            { title: "Slide 1 - Cover", body: "Headline: Three things we do that the corner shop can't.\nSub: Why MedPharma can be trusted with your medicine." },
            { title: "Slide 2", body: "Headline: A licensed pharmacist signs off every order.\nBody: Not a clerk. Not an algorithm alone. A real, named professional." },
            { title: "Slide 3", body: "Headline: Cold-chain handling for what needs it.\nBody: Insulin, certain antibiotics, biologics - temperature-controlled from shelf to door." },
            { title: "Slide 4", body: "Headline: A receipt with a batch number, every time.\nBody: If it doesn't look right when it arrives, we want to know - and we can trace it." },
            { title: "Slide 5 - CTA", body: "Headline: Buying medicine online should feel safer than the queue, not riskier." },
          ],
          designDirection:
            "Background: Restrained line illustrations (pharmacist signature, thermometer, receipt with QR).",
          cta: STD_CTA,
          caption:
            "Buying medicine online should feel safer than the queue, not riskier. Three things MedPharma does that the corner shop can't. Swipe →",
          hashtags: ["#MedPharmaGH", "#OnlinePharmacyGhana", "#SeamlessHealthcare", "#BuyMedicineOnlineGhana"],
        },
  {
          id: "mp-jul-3",
            week: "Week of Mon 29 Jun - Sun 5 Jul",
            date: "Fri, 3 Jul 2026",
            title: "App Download Flyer - The whole pharmacy. In your pocket.",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook", "X / Twitter"],
          audience: "People who haven't downloaded the app yet.",
          hook: "The whole pharmacy. In your pocket.",
          body:
            "Headline : The whole pharmacy.\nSub : In your pocket.\n\nRight side: phone mock showing the MedPharma app home screen.\n\nBottom : Scan to download - or call " + CALL + ".",
          designDirection:
            "Background: Realistic phone mock-up showing the MedPharma app home screen.",
          cta: STD_CTA,
          caption:
            "The whole pharmacy. In your pocket. Order medication, chat with a clinician, set refill reminders - all in one app. Scan, download, and we'll do the rest.",
          hashtags: ["#MedPharmaApp", "#MedPharmaGH", "#SeamlessHealthcare", "#OnlinePharmacyGhana"],
        },
  {
          id: "mp-jul-4",
            week: "Week of Mon 6 Jul - Sun 12 Jul",
            date: "Mon, 6 Jul 2026",
            title: "World Hepatitis Day - Get tested. Then keep going.",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook", "LinkedIn", "X / Twitter"],
          audience: "General adult audience.",
          hook: "Get tested. Then, if you need to, keep going - with us.",
          body:
            "Headline : Get tested. Then, if you need to, keep going.\n\nSub : MedPharma supports every Ghanaian on long-term liver care.\n\nSupporting line: Talk to a clinician in the app. Refills delivered. A care team that doesn't lose your file.",
          designDirection:
            "Background: A single restrained awareness ribbon graphic.",
          cta: STD_CTA,
          caption:
            "On World Hepatitis Day, the most useful thing we can say is the simplest one: get tested. Then, if you need to, keep going - with us. MedPharma is here for the long road.",
          hashtags: ["#WorldHepatitisDay", "#MedPharmaGH", "#SeamlessHealthcare"],
        },
  {
          id: "mp-jul-5",
            week: "Week of Mon 6 Jul - Sun 12 Jul",
            date: "Wed, 8 Jul 2026",
            title: "TikTok Photo Set - A day in 3 frames at MedPharma",
          assetType: "TikTok Photo Set",
          format: "1080 x 1920 px (9:16) · 3 still images, posted as a TikTok Photo Mode set",
          platforms: ["TikTok", "Instagram Reels (3-image carousel reel)"],
          audience: "18-35 lifestyle audience.",
          hook: "Order placed at 9:14. At your gate by 11:02. This is normal.",
          slides: [
            { title: "Frame 1", body: "Background: phone close-up, MedPharma app order confirmation screen.\nOverlay text : 9:14 AM - order placed in 30 seconds." },
            { title: "Frame 2", body: "Background: pharmacist in green coat checking and sealing a small MedPharma-branded paper bag.\nOverlay text: 9:46 AM - a real pharmacist signs it off." },
            { title: "Frame 3", body: "Background: front gate / front door of a typical Accra home, rider handing the bag to the customer.\nOverlay text: 11:02 AM - at your gate. This is normal." },
          ],
          designDirection:
            "Background: 3-part sequence showing an order confirmation screen, a pharmacist packing a bag, and a rider delivering it.",
          cta: STD_CTA,
          caption:
            "Order placed at 9:14. At your gate by 11:02. This is normal at MedPharma. Tap to download: " + APP,
          hashtags: ["#MedPharmaGH", "#OnlinePharmacyGhana", "#AccraTikTok", "#GhanaTikTok"],
        },
  {
          id: "mp-jul-0a",
            week: "Week of Mon 13 Jul - Sun 19 Jul",
            date: "Mon, 13 Jul 2026",
            title: "Square Flyer - Same-day Accra",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: [
            "Instagram",
            "Facebook"
          ],
          audience: "Accra residents.",
          hook: "Need it today in Accra? Done.",
          body: "Headline: Need it today in Accra? Done.\n\nSub : Same-day delivery across Greater Accra.\n\nSupporting line: Fast, reliable, and secure.",
          designDirection: "Background: Bright, sunny shot of an iconic Accra landmark.",
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
            week: "Week of Mon 13 Jul - Sun 19 Jul",
            date: "Wed, 15 Jul 2026",
            title: "Square Flyer - Next-day Nationwide",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: [
            "Instagram",
            "Facebook"
          ],
          audience: "Residents outside Accra.",
          hook: "From Kumasi to Tamale: We deliver.",
          body: "Headline: From Kumasi to Tamale: We deliver.\n\nSub : Next-day delivery everywhere else in Ghana.\n\nSupporting line: Smooth healthcare, no matter your region.",
          designDirection: "Background: Abstract, stylized map of Ghana with delivery pins.",
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
            week: "Week of Mon 13 Jul - Sun 19 Jul",
            date: "Fri, 17 Jul 2026",
            title: "Square Flyer - The Batch Number",
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
          designDirection: "Background: Macro shot of a clean receipt highlighting the batch number field.",
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
            week: "Week of Mon 20 Jul - Sun 26 Jul",
            date: "Mon, 20 Jul 2026",
            title: "WhatsApp Status - Flexible checkout",
          assetType: "Story / WhatsApp Status",
          format: "1080 x 1920 px (9:16)",
          platforms: [
            "WhatsApp Status",
            "Instagram Stories"
          ],
          audience: "Everyone.",
          hook: "Choose your method.",
          body: "Top headline: Digital Wallets, Cards, or Corporate Insurance?\n\nMiddle : Choose your method, securely in the app.\n\nBottom CTA strip: Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
          designDirection: "Background: Icons representing MoMo, Visa/Mastercard, and an insurance card.",
          cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh"
        },
  {
          id: "mp-jul-2a",
            week: "Week of Mon 20 Jul - Sun 26 Jul",
            date: "Wed, 22 Jul 2026",
            title: "Square Flyer - Customer testimonial",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: [
            "Instagram",
            "Facebook"
          ],
          audience: "Skeptical buyers.",
          hook: "Don't just take our word for it.",
          body: "Headline: 'They delivered to my office in 45 minutes.'\n\nSub : Real stories from MedPharma users.\n\nSupporting line: Experience seamless healthcare for yourself.",
          designDirection: "Background: Smiling portrait of a professional Ghanaian woman.",
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
            week: "Week of Mon 20 Jul - Sun 26 Jul",
            date: "Fri, 24 Jul 2026",
            title: "Square Flyer - Authenticity guarantee",
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
          designDirection: "Background: A bold, gold-foiled '100% Authentic' badge graphic.",
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
            week: "Week of Mon 27 Jul - Sun 2 Aug",
            date: "Mon, 27 Jul 2026",
            title: "Information Carousel - E-consultation value",
          assetType: "Information Carousel",
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
              title: "Slide 3 - CTA",
              body: "Headline: Care that comes to you.\nCTA block: Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh"
            }
          ],
          designDirection: "Background: Professional doctor looking at a webcam or phone screen.",
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
            week: "Week of Mon 27 Jul - Sun 2 Aug",
            date: "Wed, 29 Jul 2026",
            title: "WhatsApp Status - Prescription upload",
          assetType: "Story / WhatsApp Status",
          format: "1080 x 1920 px (9:16)",
          platforms: [
            "WhatsApp Status",
            "Instagram Stories"
          ],
          audience: "App users with physical prescriptions.",
          hook: "Snap a picture. Get your medications.",
          body: "Top: Have a physical prescription?\n\nMiddle : Snap a picture and upload it securely in the app.\n\nBottom CTA strip: Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
          designDirection: "Background: A phone taking a photo of a handwritten doctor's prescription.",
          cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh"
        },
  {
          id: "mp-jul-3b",
            week: "Week of Mon 27 Jul - Sun 2 Aug",
            date: "Fri, 31 Jul 2026",
            title: "Square Flyer - Insurance integration",
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
          designDirection: "Background: A stylized grid of partner insurance logos.",
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
            week: "Week of Mon 3 Aug - Sun 9 Aug",
            date: "Mon, 3 Aug 2026",
            title: "Square Flyer - Future of healthcare",
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
          designDirection: "Background: A futuristic, glowing phone displaying the MedPharma logo.",
          cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
          caption: "The future of healthcare is in your pocket. Experience the new standard of care with the MedPharma app.",
          hashtags: [
            "#MedPharmaGH",
            "#FutureOfHealth",
            "#SeamlessHealthcare"
          ]
        },
  {
          id: "mp-aug-w1a",
            week: "Week of Mon 3 Aug - Sun 9 Aug",
            date: "Wed, 5 Aug 2026",
            title: "Founders' Day - A healthy nation honours its founders best",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook", "X / Twitter"],
          audience: "General Ghanaian public.",
          hook: "The founders built this nation with discipline and consistency. Your health deserves the same.",
          body:
            "Headline: A healthy nation honours its founders best.\n\n" +
            "Sub: Happy Founders' Day from MedPharma. We are proud to be building a healthier Ghana - one smooth healthcare experience at a time.\n\n" +
            "Supporting: Download the MedPharma app today and join thousands of Ghanaians taking control of their health.",
          designDirection:
            "Ghana flag palette (red, gold, green, black star) woven elegantly with MedPharma teal. National pride aesthetic - bold, clean, patriotic.",
          cta: STD_CTA,
          hashtags: ["#FoundersDay", "#GhanaAt69", "#MedPharmaGH", "#HealthyGhana", "#SeamlessHealthcare"],
        },
  {
          id: "mp-aug-w1b",
            week: "Week of Mon 3 Aug - Sun 9 Aug",
            date: "Fri, 7 Aug 2026",
            title: "Information Carousel - The MedPharma app: A full tour in 5 slides",
          assetType: "Information Carousel",
          format: "1080 x 1350 px (4:5) · 6 slides",
          platforms: ["Instagram", "Facebook"],
          audience: "People who need to know about the app.",
          hook: "Most people still don't know everything MedPharma does. Let's fix that.",
          slides: [
            { title: "Slide 1 - Cover", body: "Headline: The MedPharma app.\nSub: A full tour. 5 slides. Everything you need to know." },
            { title: "Slide 2", body: "Feature 1: Medication Delivery.\nOrder any prescription or OTC medication and get it delivered to your door - anywhere in Accra." },
            { title: "Slide 3", body: "Feature 2: Online Doctor Consultations.\nBook a video call with a licensed Ghanaian doctor in minutes. No commute. No queue." },
            { title: "Slide 4", body: "Feature 3: Upload Your Prescription.\nTake a photo of your paper prescription. Our pharmacist verifies and sends your order." },
            { title: "Slide 5", body: "Feature 4: AI Health Assistant.\nAsk our 24/7 AI health companion any medical question - instantly and safely, any time of day." },
            { title: "Slide 6 - CTA", body: "Feature 5: The FulLife Subscription.\nAutomatic monthly medication delivery + reminders + doctor access - all in one plan." },
          ],
          designDirection:
            "App UI showcase style. Clean, tech-forward. MedPharma teal. One app screenshot per slide where possible. Modern and aspirational.",
          cta: STD_CTA,
          hashtags: ["#MedPharmaGH", "#DigitalPharmacy", "#SeamlessHealthcare", "#AccraHealthTech"],
        },
  {
          id: "mp-aug-w2a",
            week: "Week of Mon 10 Aug - Sun 16 Aug",
            date: "Mon, 10 Aug 2026",
            title: "International Youth Day - Healthcare for the generation building tomorrow's Ghana",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook", "X / Twitter"],
          audience: "Young Ghanaians 18-35; parents of young people managing health conditions.",
          hook: "Young Ghanaians are building the future. MedPharma keeps them healthy enough to do it.",
          body:
            "Headline: Healthcare for the generation building tomorrow's Ghana.\n\n" +
            "Sub: International Youth Day is a reminder that asthma, sickle cell, anxiety, and early high blood pressure affect young Ghanaians right now. Healthcare access cannot wait.\n\n" +
            "MedPharma: Fast, affordable, and digital healthcare - built for how young Ghanaians actually live.",
          designDirection:
            "Bold, energetic. Young Ghanaian professionals and students - diverse, vibrant. MedPharma teal. Modern typography. Urban setting.",
          cta: STD_CTA,
          hashtags: ["#InternationalYouthDay", "#YouthHealthGhana", "#MedPharmaGH", "#SeamlessHealthcare"],
        },
  {
          id: "mp-aug-w2b",
            week: "Week of Mon 10 Aug - Sun 16 Aug",
            date: "Wed, 12 Aug 2026",
            title: "Story / WhatsApp Status - Sickle cell: managing it just got easier",
          assetType: "Story / WhatsApp Status",
          format: "1080 x 1920 px (9:16)",
          platforms: ["Instagram Stories", "WhatsApp Status", "Facebook Stories"],
          audience: "Young Ghanaians with sickle cell; their families and caregivers.",
          hook: "Sickle cell doesn't pause. Your medication access shouldn't either.",
          body:
            "Headline: Managing sickle cell just got easier.\nSub: MedPharma delivers your hydroxyurea, pain management medications, and supplements straight to your door - with zero pharmacy stress.",
          designDirection:
            "Strong, empowering. MedPharma teal on dark background. Sickle cell awareness red-cell graphic as subtle background element. Not clinical - empowering.",
          cta: STD_CTA,
          hashtags: ["#SickleCellGhana", "#MedPharmaGH", "#SeamlessHealthcare", "#YouthHealth"],
        },
  {
          id: "mp-aug-w3a",
            week: "Week of Mon 10 Aug - Sun 16 Aug",
            date: "Fri, 14 Aug 2026",
            title: "World Mosquito Day - Order your malaria treatment before you need it",
          assetType: "Information Carousel",
          format: "1080 x 1350 px (4:5) · 5 slides",
          platforms: ["Instagram", "Facebook"],
          audience: "General Ghanaian public, parents, caregivers.",
          hook: "World Mosquito Day: Malaria starts with a bite. Your response starts with MedPharma.",
          slides: [
            { title: "Slide 1 - Cover", body: "Headline: Ghana has one of the world's highest malaria burdens.\nSub: World Mosquito Day" },
            { title: "Slide 2", body: "The risk: During rainy season in Ghana, malaria malaria cases go up quickly. Children under 5 and pregnant women are most at risk." },
            { title: "Slide 3", body: "What MedPharma offers:\n✓ Order antimalarial medications in the app\n✓ Get malaria test kits delivered to your door\n✓ Book a online consultation if you have symptoms\n✓ Upload your prescription for instant dispensing" },
            { title: "Slide 4", body: "Complete your full course:\nNever stop malaria treatment early - even when you feel better. Incomplete courses cause resistance and getting sick again.\nFulLife medication reminders keep you on track." },
            { title: "Slide 5 - CTA", body: "Headline: From prevention to treatment - MedPharma has you covered." },
          ],
          designDirection:
            "Health poster style - deep green and MedPharma teal. Mosquito net graphic. Ghanaian family - mother and child. Warm but educational.",
          cta: STD_CTA,
          hashtags: ["#WorldMosquitoDay", "#MalariaGhana", "#MedPharmaGH", "#SeamlessHealthcare"],
        },
  {
          id: "mp-may-3",
            week: "Week of Mon 17 Aug - Sun 23 Aug",
            date: "Mon, Aug 17 2026",
            title: "Square Flyer - Intro to the rider network",
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
          designDirection: "Background: Dynamic shot of a MedPharma rider on a motorbike, looking forward confidently.",
          cta: "Call 0557560448 or download the MedPharma App: https://onelink.to/vhzcxh",
          caption: "Our pharmacy doesn't end at the door. It ends at your gate. Experience seamless nationwide delivery with MedPharma.",
          hashtags: [
            "#MedPharmaGH",
            "#MedicationDelivery",
            "#SeamlessHealthcare"
          ]
        },
  {
          id: "mp-aug-w3b",
            week: "Week of Mon 17 Aug - Sun 23 Aug",
            date: "Wed, Aug 19 2026",
            title: "Square Flyer - Book a lab test from the MedPharma app",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook", "X / Twitter"],
          audience: "Adults 25-60 due for routine lab tests.",
          hook: "Your lab test doesn't need a waiting room. It needs a phone.",
          body:
            "Headline: Your lab tests do not need a waiting room.\n\n" +
            "Sub: Book your malaria test, HbA1c, lipid panel, or full blood count directly in the MedPharma app. Results delivered digitally. No queues. No guessing.\n\n" +
            "Tap 'Book a Lab Test' in the MedPharma app today.",
          designDirection:
            "Clean, medical-tech. Lab tubes / test icon alongside a phone mockup of the booking flow. MedPharma teal. Confident and convenient.",
          cta: STD_CTA,
          hashtags: ["#MedPharmaGH", "#LabTests", "#SeamlessHealthcare", "#DigitalHealthGhana"],
        },
  {
          id: "mp-aug-w4b",
            week: "Week of Mon 17 Aug - Sun 23 Aug",
            date: "Fri, Aug 21 2026",
            title: "LinkedIn PDF - Why Ghana's employers should include digital pharmacy in their health benefits",
          assetType: "LinkedIn PDF Document",
          format: "1920 x 1080 px (16:9) · 7 pages",
          platforms: ["LinkedIn"],
          audience: "HR Directors, CEOs, Business Owners, Corporate Health Leads.",
          hook: "Your employee's untreated hypertension is costing you far more than their sick days.",
          slides: [
            { title: "Page 1 - Cover", body: "Title: Digital Pharmacy as a Corporate Health Benefit: The Business Case." },
            { title: "Page 2", body: "The problem: 42% of working-age Ghanaians on long-term medication are stop taking their medication within the first 3 months. The main reason? Inconvenience of the physical pharmacy." },
            { title: "Page 3", body: "The business cost: Lost productivity, increased sick days, higher group health insurance premiums, and higher risk of sudden medical emergencies in the workplace." },
            { title: "Page 4", body: "The MedPharma corporate solution: Partner with us to include FulLife access in your employee health benefits package at a negotiated group rate." },
            { title: "Page 5", body: "What employees get: Medication delivered to their desk or home. 24/7 AI health assistant. Virtual doctor access. Digital health records and prescription management." },
            { title: "Page 6", body: "What the business gets: Healthier, more present team. Reduced insurance claims. A clear health benefit that helps you attract and keep great staff." },
            { title: "Page 7 - CTA", body: "Ready to build a healthier workforce?\nBook a corporate consultation: " + CALL + "\n" + APP },
          ],
          designDirection:
            "Background: Premium corporate environment.",
          cta: STD_CTA,
          hashtags: ["#MedPharmaGH", "#CorporateHealth", "#EmployeeWellbeing", "#SeamlessHealthcare", "#GhanaHR"],
        },
  {
          id: "mp-sep-w1",
            week: "Week of Mon 24 Aug - Sun 30 Aug",
            date: "Mon, Aug 24 2026",
            title: "Upload your prescription",
          assetType: "Information Carousel",
          format: "1080 x 1350 px (4:5) · 3 slides",
          platforms: ["Instagram", "Facebook"],
          audience: "People leaving clinics with paper prescriptions.",
          hook: "Don't drive from pharmacy to pharmacy looking for your medication.",
          slides: [
            { title: "Slide 1 - Cover", body: "Headline: Don't drive around looking for your medication." },
            { title: "Slide 2", body: "Headline: Upload it instead.\nBody: Take a photo of your prescription. We will verify it, pack it, and deliver it to your home or office." },
            { title: "Slide 3 - CTA", body: "Headline: Save time. Get well.\nBody: " + STD_CTA }
          ],
          designDirection: "Showing a smartphone taking a photo of a prescription paper. Clean, instructional.",
          cta: STD_CTA,
          hashtags: ["#MedPharmaGH", "#DigitalPharmacy", "#SeamlessHealthcare"]
        },
  {
          id: "mp-aug-w4a",
            week: "Week of Mon 24 Aug - Sun 30 Aug",
            date: "Wed, Aug 26 2026",
            title: "Women's Equality Day - Equal healthcare is not optional",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook", "LinkedIn", "X / Twitter"],
          audience: "Women 25-60; general public; community-focused followers.",
          hook: "Equal rights mean equal access to healthcare - private, consistent, and dignified.",
          body:
            "Headline: Equal healthcare is not optional.\n\n" +
            "Sub: On Women's Equality Day, MedPharma stands for every woman's right to access her healthcare - without queues, stigma, or stress.\n\n" +
            "Discreet delivery. Online consultations. Prescriptions managed in-app. Healthcare on your terms.",
          designDirection:
            "Bold, empowering. MedPharma teal and warm gold. Diverse Ghanaian women - different ages, different backgrounds. Strong, dignified, confident.",
          cta: STD_CTA,
          hashtags: ["#WomensEqualityDay", "#WomensHealthGhana", "#MedPharmaGH", "#SeamlessHealthcare"],
        },
  {
          id: "mp-sep-w2",
            week: "Week of Mon 24 Aug - Sun 30 Aug",
            date: "Fri, Aug 28 2026",
            title: "Corporate Health Benefit",
          assetType: "LinkedIn Post",
          format: "1080 x 1080 px (1:1)",
          platforms: ["LinkedIn"],
          audience: "HR Directors, CEOs.",
          hook: "Is your company's health benefit actually keeping your team healthy?",
          body: "Headline: The modern workplace needs modern healthcare.\n\nSub: MedPharma partners with forward-thinking Ghanaian companies to provide digital pharmacy access, online doctor consultations, and doorstep delivery for employees.\n",
          designDirection: "Corporate aesthetic. Modern Accra office environment. Professional.",
          cta: "Email: support@medpharma.care",
          hashtags: ["#HRGhana", "#CorporateHealth", "#EmployeeBenefits", "#MedPharmaGH"]
        },
  {
          id: "mp-sep-w5",
            week: "Week of Mon 31 Aug - Sun 6 Sept",
            date: "Mon, Aug 31 2026",
            title: "World Heart Day - Don't ignore the numbers",
          assetType: "Story / WhatsApp Status",
          format: "1080 x 1920 px (9:16)",
          platforms: ["Instagram Stories", "WhatsApp Status"],
          audience: "General public.",
          hook: "When was the last time you checked your blood pressure?",
          body: "Headline: World Heart Day.\nSub: Book a lipid panel or general health check-up through the MedPharma app today. Prevention is always cheaper than cure.",
          designDirection: "Clean, urgent but not scary. Focus on lab test booking interface.",
          cta: STD_CTA,
          hashtags: ["#WorldHeartDay", "#HealthScreening", "#MedPharmaGH"]
        },
  {
              id: "mp-new-1",
              week: "Week of Mon 31 Aug - Sun 6 Sept",
              date: "Wed, Sept 2 2026",
            title: "Fast Medicine Delivery - Office",
              assetType: "Square Flyer",
              format: "1080 x 1080 px (1:1)",
              platforms: ["Instagram", "Facebook", "X / Twitter", "LinkedIn"],
              audience: "Busy professionals in Accra who cannot leave work to go to the pharmacy.",
              hook: "Stuck at the office with a splitting headache?",
              body: "Headline: Pharmacy at Your Fingertips\nSub: Don't let minor ailments slow you down. Order your medications on the MedPharma app and get them delivered straight to your desk.",
              designDirection: "Background: A busy Ghanaian professional sitting at an office desk, smiling while receiving a small MedPharma delivery package from a rider.",
              cta: STD_CTA,
              hashtags: ["#MedPharma", "#DigitalPharmacy", "#GhanaHealth", "#FastDelivery", "#CorporateHealth"]
            },
  {
              id: "mp-new-2",
              week: "Week of Mon 31 Aug - Sun 6 Sept",
              date: "Fri, Sept 4 2026",
            title: "App Features - Prescription Upload",
              assetType: "Information Carousel",
              format: "1080 x 1350 px (4:5) · 3 slides",
              platforms: ["Instagram", "Facebook", "LinkedIn"],
              audience: "Tech-savvy Ghanaians looking for convenient healthcare solutions.",
              hook: "Got a prescription but no time to wait in line?",
              designDirection: "Background: A clean, modern aesthetic with a person holding a smartphone taking a picture of a medical prescription.",
              cta: STD_CTA,
              hashtags: ["#MedPharmaApp", "#HealthTechGhana", "#DigitalPharmacy", "#PrescriptionDelivery"],
              slides: [
                                { title: "Skip the Pharmacy Queue", body: "Long lines at the pharmacy are a thing of the past." },
                                { title: "Snap & Upload", body: "Simply take a clear photo of your doctor's prescription and upload it securely on the MedPharma app." },
                                { title: "Fast Delivery", body: "Our licensed pharmacists will review it, and your medication will be on its way to your door." }
                              ]
        },
  {
              id: "mp-new-3",
              week: "Week of Mon 7 Sept - Sun 13 Sept",
              date: "Mon, Sept 7 2026",
            title: "Corporate Health - Team Wellness",
              assetType: "Square Flyer",
              format: "1080 x 1080 px (1:1)",
              platforms: ["LinkedIn", "Facebook", "X / Twitter"],
              audience: "HR Managers and Business Owners in Ghana.",
              hook: "Healthy employees are the backbone of a successful business.",
              body: "Headline: Elevate Your Team's Wellbeing\nSub: Partner with MedPharma for comprehensive corporate health solutions. From easy access to medications to wellness programs, we keep your workforce healthy and productive.",
              designDirection: "Background: A diverse group of Ghanaian corporate employees in a bright, modern boardroom looking happy and engaged.",
              cta: STD_CTA,
              hashtags: ["#CorporateHealth", "#EmployeeWellness", "#MedPharma", "#HRGhana", "#BusinessGrowth"]
            },
  {
              id: "mp-new-4",
              week: "Week of Mon 7 Sept - Sun 13 Sept",
              date: "Wed, Sept 9 2026",
            title: "General Health - Hydration Reminder",
              assetType: "Square Flyer",
              format: "1080 x 1080 px (1:1)",
              platforms: ["Instagram", "Facebook", "X / Twitter"],
              audience: "General public, focusing on health-conscious individuals.",
              hook: "Are you drinking enough water today?",
              body: "Headline: Stay Hydrated, Stay Healthy\nSub: In our sunny Ghanaian climate, staying hydrated is crucial for your kidneys, skin, and energy levels. Aim for at least 8 glasses of water a day!",
              designDirection: "Background: A crisp, refreshing glass of water with a slice of lemon on a sunlit table, with a blurred natural background.",
              cta: STD_CTA,
              hashtags: ["#HealthTips", "#Hydration", "#HealthyLivingGhana", "#MedPharmaCares"]
            },
  {
              id: "mp-new-5",
              week: "Week of Mon 7 Sept - Sun 13 Sept",
              date: "Fri, Sept 11 2026",
            title: "Late Night Delivery",
              assetType: "Square Flyer",
              format: "1080 x 1080 px (1:1)",
              platforms: ["Instagram", "Facebook", "X / Twitter"],
              audience: "Parents and individuals needing urgent medication outside normal hours.",
              hook: "Fever strikes at midnight? Don't panic.",
              body: "Headline: Reliable Late-Night Pharmacy Delivery\nSub: Illness doesn't stick to business hours. Count on MedPharma for fast, secure delivery of your essential medications, even when the local shops are closed.",
              designDirection: "Background: A concerned parent checking a child's temperature in a dimly lit bedroom, with a glowing smartphone showing the MedPharma app.",
              cta: STD_CTA,
              hashtags: ["#NightDelivery", "#MedPharma", "#EmergencyCare", "#ParentingGhana"]
            },
  {
              id: "mp-new-6",
              week: "Week of Mon 14 Sept - Sun 20 Sept",
              date: "Mon, Sept 14 2026",
            title: "Digital Pharmacy - Elderly Care",
              assetType: "Information Carousel",
              format: "1080 x 1350 px (4:5) · 3 slides",
              platforms: ["Instagram", "Facebook"],
              audience: "Adults caring for elderly parents who live far away.",
              hook: "Caring for your parents just got a whole lot easier.",
              designDirection: "Background: Warm, emotional imagery of an elderly Ghanaian couple smiling while holding a MedPharma package, standing on their porch.",
              cta: STD_CTA,
              hashtags: ["#ElderlyCare", "#FamilyHealth", "#MedPharmaApp", "#PharmacyDeliveryGhana"],
              slides: [
                                { title: "Distance Shouldn't Matter", body: "Living far from your parents makes managing their health stressful." },
                                { title: "Order on Their Behalf", body: "Use the MedPharma app to order and pay for their medications from anywhere." },
                                { title: "Direct to Their Door", body: "We deliver directly to them, ensuring they always have what they need to stay healthy." }
                              ]
        },
  {
              id: "mp-new-7",
              week: "Week of Mon 14 Sept - Sun 20 Sept",
              date: "Wed, Sept 16 2026",
            title: "App Features - Doctor Consult",
              assetType: "Square Flyer",
              format: "1080 x 1080 px (1:1)",
              platforms: ["Instagram", "Facebook", "X / Twitter", "LinkedIn"],
              audience: "Busy individuals needing quick medical advice.",
              hook: "Need medical advice but can't visit the clinic today?",
              body: "Headline: Chat with a Doctor Instantly\nSub: Get professional medical guidance right from your phone. Use the MedPharma app to consult with licensed professionals before ordering your medication.",
              designDirection: "Background: A split screen showing a patient looking relaxed at home on their phone, and a friendly doctor in a white coat looking at a tablet.",
              cta: STD_CTA,
              hashtags: ["#Telemedicine", "#DigitalHealth", "#MedPharma", "#DoctorConsult"]
            },
  {
              id: "mp-new-8",
              week: "Week of Mon 14 Sept - Sun 20 Sept",
              date: "Fri, Sept 18 2026",
            title: "General Health - Malaria Prevention",
              assetType: "Square Flyer",
              format: "1080 x 1080 px (1:1)",
              platforms: ["Instagram", "Facebook", "X / Twitter"],
              audience: "Families and general public in malaria-prone areas.",
              hook: "Don't let mosquitoes dictate your family's health.",
              body: "Headline: Protect Your Family from Malaria\nSub: Sleep under treated nets, eliminate stagnant water, and get fast access to antimalarials via the MedPharma app the moment you feel symptoms.",
              designDirection: "Background: A peaceful sleeping child safely under a mosquito net in a cozy, softly lit room.",
              cta: STD_CTA,
              hashtags: ["#MalariaPrevention", "#EndMalaria", "#HealthAwareness", "#MedPharma"]
            },
  {
          id: "mp-sep-w3",
            week: "Week of Mon 21 Sept - Sun 27 Sept",
            date: "Mon, Sept 21 2026",
            title: "Kwame Nkrumah Memorial Day - Healthcare Vision",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook", "X / Twitter"],
          audience: "General public.",
          hook: "A visionary nation needs visionary healthcare.",
          body: "Headline: Advancing the vision of a healthy Ghana.\n\nSub: Happy Kwame Nkrumah Memorial Day. We are committed to making healthcare accessible, modern, and seamless for every Ghanaian.",
          designDirection: "Patriotic, visionary. Classic Ghanaian elements with modern tech overlays.",
          cta: STD_CTA,
          hashtags: ["#KwameNkrumahMemorialDay", "#MedPharmaGH", "#GhanaHealthcare"]
        },
  {
              id: "mp-new-9",
              week: "Week of Mon 21 Sept - Sun 27 Sept",
              date: "Wed, Sept 23 2026",
            title: "Fast Delivery - Anywhere",
              assetType: "Square Flyer",
              format: "1080 x 1080 px (1:1)",
              platforms: ["Instagram", "Facebook", "X / Twitter"],
              audience: "Anyone needing medication delivery across the city.",
              hook: "At home, at work, or on the go?",
              body: "Headline: Your Pharmacy Follows You\nSub: No matter where you are in the city, MedPharma ensures your health needs are met with fast, accurate, and secure delivery.",
              designDirection: "Background: A dynamic shot of a MedPharma delivery rider on a motorbike navigating a recognizable, sunny street in Accra.",
              cta: STD_CTA,
              hashtags: ["#DeliveryService", "#PharmacyGhana", "#MedPharma", "#HealthcareOnTheGo"]
            },
  {
          id: "mp-sep-w4",
            week: "Week of Mon 21 Sept - Sun 27 Sept",
            date: "Fri, Sept 25 2026",
            title: "World Pharmacists Day - The heart of MedPharma",
          assetType: "Square Flyer",
          format: "1080 x 1080 px (1:1)",
          platforms: ["Instagram", "Facebook", "LinkedIn"],
          audience: "Public, corporate partners.",
          hook: "Meet the experts who review every single order before it leaves our doors.",
          body: "Headline: Safe, verified, and caring.\n\nSub: Happy World Pharmacists Day! Our digital platform is powered by brilliant, licensed Ghanaian pharmacists who ensure your safety every step of the way.",
          designDirection: "Behind-the-scenes look at a MedPharma pharmacist working with tech. Authentic, warm.",
          cta: STD_CTA,
          hashtags: ["#WorldPharmacistsDay", "#PharmacyGhana", "#MedPharmaGH"]
        },
  {
          id: "mp-q4-oct-w1a",
            week: "Week of Mon 28 Sept - Sun 4 Oct",
            date: "Mon, Sept 28 2026",
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
              id: "mp-new-10",
              week: "Week of Mon 28 Sept - Sun 4 Oct",
              date: "Wed, Sept 30 2026",
            title: "Digital Pharmacy - Trusted Meds",
              assetType: "Square Flyer",
              format: "1080 x 1080 px (1:1)",
              platforms: ["Instagram", "Facebook", "LinkedIn"],
              audience: "Health-conscious individuals concerned about counterfeit medications.",
              hook: "Are you sure of the quality of your medication?",
              body: "Headline: 100% Genuine Medications Guaranteed\nSub: Your health is our priority. MedPharma sources all medications directly from certified manufacturers and trusted distributors. No compromises.",
              designDirection: "Background: A close-up of a pharmacist's hands neatly packing pristine, branded medication boxes into a MedPharma delivery bag.",
              cta: STD_CTA,
              hashtags: ["#GenuineMeds", "#SafeHealthcare", "#MedPharmaQuality", "#TrustedPharmacy"]
            }
  ],
};

import { FULLIFE_Q4_PLAN, MEDPHARMA_Q4_PLAN } from "./contentPlansQ4";

// Filter out June and early July briefs (keep from Week of Mon 27 Jul onwards)
const filterPastBriefs = (briefs: ContentBrief[]) => {
  return briefs.filter(b => {
    // We want to remove weeks that contain "Jun" or "Jul", 
    // EXCEPT for the final week "27 Jul".
    if (b.week.includes("Jun")) return false;
    if (b.week.includes("Jul") && !b.week.includes("27 Jul")) return false;
    return true;
  });
};

const MERGED_FULLIFE: ContentPlan = {
  ...FULLIFE_PLAN,
  briefs: [...filterPastBriefs(FULLIFE_PLAN.briefs), ...FULLIFE_Q4_PLAN.briefs]
};

const MERGED_MEDPHARMA: ContentPlan = {
  ...MEDPHARMA_PLAN,
  briefs: [...filterPastBriefs(MEDPHARMA_PLAN.briefs), ...MEDPHARMA_Q4_PLAN.briefs]
};

export const PLAN_BY_BRAND: Record<string, ContentPlan> = {
  fullife: MERGED_FULLIFE,
  medpharma: MERGED_MEDPHARMA,
};