import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, Check, Heart, Droplets, Wind, Brain, Moon, Apple, Bone, Flower2, Smartphone } from "Car, MessageSquare, HelpCircle, Zap } from "lucide-react";

/* ─── DATA ──────────────────────────────────────────────────────────── */
const SCRIPTS_DATA = [
  {
    theme: "Heart & BP",
    icon: Heart,
    color: "bg-red-100 text-red-700 border-red-200",
    accent: "#ef4444",
    videos: [
      { title: "The Silent Killer", s1: "Looking rushed, ignoring pill bottle. \"High blood pressure has no symptoms... so I always forget my medication until it's too late.\"", s2: "Showing phone reminder. \"With the MedPharma app, you get automated daily reminders so you never miss a dose.\"" },
      { title: "Running Out Unexpectedly", s1: "Shaking an empty pill bottle, panicked. \"There is nothing worse than discovering your BP medication is finished when you are rushing to work.\"", s2: "Pointing to delivery bag. \"Never run out again. MCare tracks your refills and delivers them straight to your door automatically.\"" },
      { title: "Insurance Queues", s1: "Waiting at a pharmacy holding an insurance card, exhausted. \"Using health insurance at physical pharmacies means waiting hours just to verify cover.\"", s2: "Tapping tablet. \"Enter your details once in the MedPharma app. We accept all major insurers and handle background checks instantly.\"" },
      { title: "Re-Explaining History", s1: "Explaining history to doctor, looking tired. \"Every time I see a new doctor, I have to explain my entire BP history from scratch.\"", s2: "Showing app profile. \"Your FulLife ID securely stores your medical history, labs, and prescriptions in one place for complete continuity.\"" },
      { title: "Uploading Prescriptions", s1: "Holding a paper prescription in a car. \"My doctor gave me this handwritten prescription. Now I have to drive around hoping a pharmacy has it.\"", s2: "Scanning phone. \"Just open the MedPharma app, scan your prescription, and we will deliver your complete order to you.\"" },
      { title: "Rising Medication Costs", s1: "Looking at a long pharmacy receipt, worried. \"Managing hypertension is a lifelong journey, and the cost of these meds every month is overwhelming.\"", s2: "Smiling confidently. \"Subscribe to MCare Plus to get guaranteed discounts on your chronic medications and free monthly delivery.\"" },
      { title: "Instant Video Consults", s1: "At desk, rubbing temples, dizzy. \"My blood pressure feels high today, but I cannot leave the office to go sit in a clinic queue.\"", s2: "Showing video call UI. \"Do not ignore warning signs. Book an instant video consultation in the MedPharma app from exactly where you are.\"" },
      { title: "Understanding Labs", s1: "Staring at printed lab results, confused. \"I got my blood work back... but I do not understand what any of these numbers mean.\"", s2: "Reassuring gesture. \"Upload your results to the MedPharma app. Our AI health assistant instantly explains your numbers in simple terms.\"" },
      { title: "Diaspora Remittance", s1: "In a cold apartment (abroad), anxious. \"Living abroad makes it so hard to know if my mother in Ghana is actually taking her BP medication.\"", s2: "Welcoming smile. \"Pay her MCare subscription securely through the MedPharma app, and we will ensure she always gets her medication.\"" },
      { title: "Tracking Vitals", s1: "Scribbling BP readings in a notebook, annoyed. \"Trying to manually track my blood pressure in this little notebook is so outdated and frustrating.\"", s2: "Tapping smartwatch. \"Your health is digital now. The MedPharma app connects with wearables to track your vitals automatically.\"" },
    ],
  },
  {
    theme: "Diabetes",
    icon: Droplets,
    color: "bg-blue-100 text-blue-700 border-blue-200",
    accent: "#3b82f6",
    videos: [
      { title: "Diet Frustration", s1: "Staring at food, confused. \"Living with Type 2 Diabetes means I am constantly stressing over what I can and cannot eat.\"", s2: "Pointing to tablet. \"With FulLife Premium, our AI companion gives you personalized, safe food and recipe recommendations daily.\"" },
      { title: "Missing a Dose", s1: "Rummaging through bag, panicked. \"Missing just one dose of my diabetes medication causes a dangerous sugar spike. But I keep forgetting.\"", s2: "Showing app notification. \"Stay in control. The MedPharma app sends you smart reminders so you never miss a dose.\"" },
      { title: "Pharmacy Queues", s1: "Waiting, checking watch. \"Every month, I waste hours sitting in pharmacy queues just to get my routine diabetes refill.\"", s2: "Holding delivery bag. \"Skip the queue completely. Subscribe to MCare, and we deliver your medication directly to your home.\"" },
      { title: "Confusing HbA1c Results", s1: "Looking at HbA1c lab report, worried. \"I just got my HbA1c results, but I have to wait weeks to see my doctor to understand them.\"", s2: "Calm gesture. \"Upload your results to the MedPharma app right now. Our AI assistant will instantly interpret them for you.\"" },
      { title: "Midnight Spikes", s1: "In bed, Googling symptoms, panicked. \"Sometimes my blood sugar drops late at night. Googling symptoms just makes me panic more.\"", s2: "Empathetic look. \"Stop guessing. The MedPharma app features a 24/7 AI health assistant for instant, safe answers.\"" },
      { title: "Explaining History to Specialists", s1: "Explaining history to doctor. \"Between the eye doctor and my GP, I am tired of re-explaining my diabetes history everywhere.\"", s2: "Tapping tablet. \"Your FulLife ID fixes that. All your lab results and prescriptions are securely stored in one app.\"" },
      { title: "Adjusting Medication", s1: "At desk, fatigued. \"I think my diabetes medication needs adjusting, but I cannot take time off work for a hospital visit.\"", s2: "Showing video call. \"Open the MedPharma app and book a virtual consultation. Speak to a licensed doctor right from your desk.\"" },
      { title: "Insurance Claims", s1: "Waiting with insurance card. \"Private health insurance is great, until you wait an hour at the pharmacy for paperwork processing.\"", s2: "Smiling warmly. \"We accept major insurers. Add your policy details to the MedPharma app once, and we handle claims seamlessly.\"" },
      { title: "Tracking Glucose", s1: "Writing glucose numbers manually. \"Tracking my daily sugar levels in this little notebook is outdated. I always forget to write them down.\"", s2: "Pointing to smartwatch. \"Upgrade your routine. The MedPharma app connects with wearables to track your vitals automatically.\"" },
      { title: "Caring for Parents", s1: "Abroad, looking anxious. \"Living outside Ghana, I worry if my dad is actually managing his diabetes and getting his medication.\"", s2: "Open hand gesture. \"Give yourself peace of mind. Pay for his MCare subscription via the MedPharma app from anywhere.\"" },
    ],
  },
  {
    theme: "Respiratory",
    icon: Wind,
    color: "bg-teal-100 text-teal-700 border-teal-200",
    accent: "#14b8a6",
    videos: [
      { title: "Empty Inhaler Panic", s1: "Shaking empty inhaler, wheezing slightly. \"There is nothing scarier than feeling your chest tighten, only to realize your inhaler is empty.\"", s2: "Pointing to delivery. \"Never run out of breath. Subscribe to MCare, and we auto-deliver your inhalers before they finish.\"" },
      { title: "Cost of Steroids", s1: "Looking at receipt, stressed. \"Between reliever inhalers and preventers, the cost of managing asthma every month is overwhelming.\"", s2: "Reassuring smile. \"With MCare Plus, you get guaranteed discounts on all your asthma medications, plus free delivery.\"" },
      { title: "Midnight Flare-ups", s1: "Sitting up in bed, worried. \"When my asthma flares up at midnight, I panic. I never know if I should rush to the emergency room.\"", s2: "Calm expression. \"You do not have to guess. Use the MedPharma app's 24/7 AI health assistant for instant, safe guidance.\"" },
      { title: "Insurance Hassles", s1: "Leaning on pharmacy counter, tired. \"I have insurance, but every time I need a new inhaler, I wait over an hour for paperwork to clear.\"", s2: "Holding up phone. \"Skip the wait. Enter your insurance details in the MedPharma app once, and we handle background checks.\"" },
      { title: "Dusty Weather Triggers", s1: "At desk, rubbing throat. \"The dusty weather is triggering my asthma today. I need a doctor, but I am stuck at the office.\"", s2: "Showing video call. \"Get care without leaving your desk. Book an instant video consultation in the MedPharma app.\"" },
      { title: "Paper Prescriptions", s1: "In car holding paper prescription. \"My doctor prescribed a new steroid. Now I have to drive around town hoping a pharmacy has it.\"", s2: "Scanning phone. \"Save your fuel. Scan your prescription in the MedPharma app, and we will deliver it directly to you.\"" },
      { title: "Repeating Allergies", s1: "Explaining history to doctor. \"Every time I visit a new clinic, I have to list all my respiratory allergies from scratch. It is exhausting.\"", s2: "Tapping tablet. \"With your FulLife ID, your entire medical history and allergies are securely stored in one place.\"" },
      { title: "Forgetting Preventers", s1: "Walking past preventer inhaler. \"When I am not wheezing, I always forget my daily preventer inhaler. That leads to my worst attacks.\"", s2: "Showing reminder. \"Stay protected. The MedPharma app sends smart reminders so you never forget your daily dose.\"" },
      { title: "Managing a Child's Asthma", s1: "At work, anxious. \"As a working mother, my biggest fear is my son running out of his asthma medication while I am at work.\"", s2: "Welcoming gesture. \"Manage your family's health through the MedPharma app, and we will ensure their medication is always delivered.\"" },
      { title: "Tracking Peak Flow", s1: "Writing peak flow numbers manually. \"Tracking my breathing tests in a notebook means I never have the numbers when my doctor asks.\"", s2: "Pointing to smartwatch. \"Your health is digital now. The MedPharma app tracks your vitals and securely stores them.\"" },
    ],
  },
  {
    theme: "Mental Health",
    icon: Brain,
    color: "bg-purple-100 text-purple-700 border-purple-200",
    accent: "#a855f7",
    videos: [
      { title: "The Stigma of Pharmacy Visits", s1: "Standing outside a pharmacy, looking anxious. \"Buying my anti-anxiety medication in person always makes me feel judged by everyone in line.\"", s2: "Pointing to a discreet package. \"Your privacy is our priority. MCare delivers your medication in discreet, unmarked packaging straight to your door.\"" },
      { title: "Late Night Anxiety", s1: "Awake in bed, staring at ceiling, stressed. \"My anxiety always peaks at 2 AM. I feel so alone with my thoughts when everyone is asleep.\"", s2: "Empathetic look. \"You are never alone. The MedPharma app's 24/7 AI companion is always there to chat and offer calming guidance.\"" },
      { title: "Finding a Therapist", s1: "Scrolling phone, frustrated. \"Trying to find a licensed therapist who actually understands me is so difficult and overwhelming.\"", s2: "Showing video call. \"Book a virtual consultation in the MedPharma app to connect with licensed mental health professionals instantly.\"" },
      { title: "Forgetting Antidepressants", s1: "Rummaging in bag, panicked. \"If I miss my antidepressant dose, my whole week is ruined. But my schedule is so chaotic.\"", s2: "Showing app notification. \"The MedPharma app sends discreet, automated reminders to ensure you always stay on track.\"" },
      { title: "The Cost of Therapy & Meds", s1: "Looking at budget on laptop, stressed. \"Between therapy sessions and monthly medications, taking care of my mental health is so expensive.\"", s2: "Smiling warmly. \"Subscribe to MCare Plus for guaranteed medication discounts and bundled virtual consultations to save money.\"" },
      { title: "Explaining Trauma Again", s1: "Sitting opposite a doctor, looking exhausted. \"Having to re-explain my mental health history to every new specialist is emotionally draining.\"", s2: "Tapping tablet. \"Your FulLife ID securely stores your digital medical record, so your care team is always on the same page.\"" },
      { title: "In-Person Therapy Anxiety", s1: "Sitting in a waiting room, shaking leg nervously. \"Sitting in a clinic waiting room for a mental health appointment just makes my anxiety worse.\"", s2: "Showing phone. \"Get care from your safe space. MedPharma's video consultations let you speak to a doctor from the comfort of home.\"" },
      { title: "Running Out of Meds", s1: "Shaking empty pill bottle. \"Running out of my mental health medication abruptly causes terrible withdrawal symptoms.\"", s2: "Holding delivery bag. \"MCare tracks your prescription and auto-delivers your refills before you take your last pill.\"" },
      { title: "Tracking Mood Swings", s1: "Looking confused at a blank journal. \"My doctor told me to track my mood swings, but keeping a daily journal is too much work.\"", s2: "Pointing to phone screen. \"Log your daily moods directly in the MedPharma app to easily share your progress with your doctor.\"" },
      { title: "Using Insurance for Therapy", s1: "Looking at insurance card. \"I want to use my health insurance for therapy, but the claims process is always so complicated.\"", s2: "Reassuring smile. \"Add your insurance to the MedPharma app once, and we handle all the billing for your consultations and meds.\"" },
    ],
  },
  {
    theme: "Sleep",
    icon: Moon,
    color: "bg-indigo-100 text-indigo-700 border-indigo-200",
    accent: "#6366f1",
    videos: [
      { title: "The Insomnia Cycle", s1: "Tossing and turning in bed at 3 AM. \"I have tried everything to fall asleep, but my insomnia just keeps getting worse every single night.\"", s2: "Showing video call. \"Stop suffering in silence. Book a virtual consultation on the MedPharma app to speak with a sleep specialist today.\"" },
      { title: "Running Out of Sleep Meds", s1: "Finding an empty pill box at bedtime. \"Discovering you are out of your prescribed sleep medication right at bedtime is a nightmare.\"", s2: "Holding delivery bag. \"MCare auto-delivers your sleep medication directly to your door, so you never miss a peaceful night.\"" },
      { title: "Tracking Sleep Quality", s1: "Waking up exhausted, rubbing eyes. \"I sleep for eight hours but still wake up exhausted. I have no idea what is wrong with my sleep quality.\"", s2: "Tapping smartwatch. \"The MedPharma app connects with your smartwatch to track your sleep cycles and identify the exact problem.\"" },
      { title: "Late Night Panic", s1: "Awake, Googling sleep disorders. \"When I cannot sleep, I start Googling my symptoms, which just gives me more anxiety.\"", s2: "Empathetic look. \"Use the MedPharma app's 24/7 AI chatbot for calming guidance and safe answers when you cannot sleep.\"" },
      { title: "Paper Prescriptions for Sedatives", s1: "Holding a paper prescription, looking tired. \"Taking this prescription to the pharmacy when I am already exhausted from no sleep is awful.\"", s2: "Scanning phone. \"Just scan your prescription in the MedPharma app, and our team will deliver it directly to you.\"" },
      { title: "Reminders for Sleep Hygiene", s1: "Looking at phone screen in bed (blue light). \"I know I should take my medication and put my phone away at 10 PM, but I always forget.\"", s2: "Showing reminder. \"The MedPharma app sends you automated evening reminders to take your meds and start your sleep routine.\"" },
      { title: "Cost of Sleep Treatments", s1: "Looking at receipts. \"Buying sleep aids and booking specialist appointments every month is getting too expensive.\"", s2: "Smiling confidently. \"Subscribe to MCare Plus to get guaranteed discounts on medications and bundled virtual consultations.\"" },
      { title: "Explaining Sleep History", s1: "Yawning in doctor's office. \"I am so tired of re-explaining my years of insomnia history to every new doctor I see.\"", s2: "Tapping tablet. \"Your FulLife ID stores your entire medical history in one secure app, giving your new doctor the full picture instantly.\"" },
      { title: "Natural Sleep Remedies", s1: "Staring at shelves of random supplements. \"There are so many sleep supplements out there, I have no idea which ones actually work safely.\"", s2: "Showing app profile. \"Our AI health companion analyzes your profile to recommend clinically safe lifestyle and supplement changes.\"" },
      { title: "Insurance for Sleep Clinics", s1: "Holding insurance card. \"Getting my insurance to cover sleep medication at the physical pharmacy is always a hassle.\"", s2: "Reassuring smile. \"Enter your details in the MedPharma app once, and we handle all the insurance claims and background checks seamlessly.\"" },
    ],
  },
  {
    theme: "Nutrition",
    icon: Apple,
    color: "bg-green-100 text-green-700 border-green-200",
    accent: "#22c55e",
    videos: [
      { title: "Confusion Over Diets", s1: "Staring at different diet foods on a counter. \"Between keto, vegan, and low-carb, trying to figure out what I should actually eat is so confusing.\"", s2: "Pointing to tablet. \"Stop guessing. The MedPharma app connects you with licensed dieticians via virtual consultation for personalized advice.\"" },
      { title: "High Cholesterol Diet", s1: "Looking sadly at a plate of fries. \"My doctor told me to lower my cholesterol through food, but I have no idea what recipes to cook.\"", s2: "Showing phone screen. \"With FulLife Premium, our AI health assistant generates safe, customized, and delicious daily recipes for your condition.\"" },
      { title: "Tracking Weight Loss", s1: "Stepping on a scale, writing in a messy notebook. \"Manually tracking my weight and meals in a notebook makes it impossible to see my real progress.\"", s2: "Tapping smartwatch. \"The MedPharma app integrates with your health wearables to track your vitals and weight automatically.\"" },
      { title: "Running Out of Supplements", s1: "Shaking empty vitamin bottle. \"I am trying to stay consistent with my iron and vitamin supplements, but I always forget to buy more.\"", s2: "Pointing to delivery bag. \"Subscribe to MCare, and we will auto-deliver your essential daily supplements right to your door.\"" },
      { title: "Affordability of Healthy Living", s1: "Looking at pharmacy receipt. \"Buying quality vitamins, supplements, and booking dietician visits is getting too expensive.\"", s2: "Smiling confidently. \"MCare Plus gives you guaranteed discounts on all your supplements and medications to make healthy living affordable.\"" },
      { title: "Understanding Lab Results (Deficiencies)", s1: "Looking at lab results, confused. \"My blood test says I have a vitamin deficiency, but I don't understand what these numbers mean.\"", s2: "Reassuring gesture. \"Upload your results to the MedPharma app. Our AI assistant interprets your labs and suggests the right nutritional changes.\"" },
      { title: "Late Night Cravings & Guilt", s1: "In kitchen at night, looking guilty. \"When I get late-night cravings, I ruin my diet and immediately feel guilty and stressed.\"", s2: "Empathetic look. \"Use the MedPharma app's 24/7 AI chatbot to get healthy alternative suggestions and stay on track anytime.\"" },
      { title: "Sharing Diet History", s1: "Explaining diet to doctor. \"Every time I see a new specialist, I have to re-explain my entire allergy and diet history.\"", s2: "Tapping tablet. \"Your FulLife ID securely stores your allergies and nutritional history in one place for total continuity of care.\"" },
      { title: "Forgetting Vitamins", s1: "Walking past vitamin bottles. \"I have all these great supplements, but my mornings are so busy I always forget to take them.\"", s2: "Showing app notification. \"The MedPharma app sends you smart, automated daily reminders so you never miss your supplements again.\"" },
      { title: "Remote Care for Parents", s1: "Abroad, looking anxious. \"Living abroad, I worry if my elderly parents in Ghana are getting the right vitamins and nutrition.\"", s2: "Welcoming gesture. \"Manage their health through the MedPharma app. Pay securely, and we deliver their supplements directly to them.\"" },
    ],
  },
  {
    theme: "Bone & Joint",
    icon: Bone,
    color: "bg-amber-100 text-amber-700 border-amber-200",
    accent: "#f59e0b",
    videos: [
      { title: "Pain Limits Mobility", s1: "Massaging knee, looking in pain. \"When my osteoarthritis flares up, just walking to the physical pharmacy feels completely impossible.\"", s2: "Holding delivery bag. \"Rest your joints. Subscribe to MCare, and we deliver all your pain management medications directly to your door.\"" },
      { title: "Forgetting Pain Meds", s1: "Rummaging in bag, wincing in pain. \"If I forget to take my arthritis medication in the morning, I am in agonizing pain by the afternoon.\"", s2: "Showing app notification. \"Stay ahead of the pain. The MedPharma app sends automated reminders so you never miss a dose.\"" },
      { title: "Too Much Pain to Travel", s1: "Sitting on couch, holding lower back. \"My back pain is so severe today, I cannot possibly sit in a car to go see my doctor.\"", s2: "Showing video call. \"Get expert care from home. Book an instant video consultation in the MedPharma app to speak with a doctor.\"" },
      { title: "Uploading X-Rays / Prescriptions", s1: "Holding a paper prescription and an X-ray envelope. \"My doctor gave me a new prescription for my joints, but I am in too much pain to drive around finding it.\"", s2: "Scanning phone. \"Save your energy. Scan your prescription in the MedPharma app, and we will deliver it directly to you.\"" },
      { title: "Cost of Chronic Pain Meds", s1: "Looking at receipt, stressed. \"Between the painkillers, anti-inflammatories, and joint supplements, managing my arthritis is too expensive.\"", s2: "Smiling confidently. \"With MCare Plus, you get guaranteed discounts on all your chronic medications, plus free delivery.\"" },
      { title: "Re-Explaining Joint History", s1: "Pointing to knee in doctor's office. \"I am so tired of re-explaining years of joint surgeries and pain history to every new specialist.\"", s2: "Tapping tablet. \"Your FulLife ID securely stores your complete medical and surgical history in one app for continuous care.\"" },
      { title: "Tracking Flare-Ups", s1: "Writing in a notebook. \"Trying to write down exactly when and where my joints hurt for my doctor is frustrating and messy.\"", s2: "Pointing to phone screen. \"Log your pain levels and flare-ups digitally in the MedPharma app to give your doctor the exact data they need.\"" },
      { title: "Midnight Joint Pain", s1: "Awake in bed, rubbing shoulder. \"When joint pain wakes me up at 2 AM, I never know if it's safe to take another painkiller.\"", s2: "Empathetic look. \"Do not guess with medications. Use the MedPharma app's 24/7 AI chatbot for safe, instant medical guidance.\"" },
      { title: "Insurance for Pain Meds", s1: "Waiting at pharmacy, looking tired. \"Waiting an hour at the pharmacy for my insurance to clear is agonizing when my joints are hurting.\"", s2: "Reassuring smile. \"Enter your details in the MedPharma app once, and we handle all insurance background checks instantly. Zero waiting.\"" },
      { title: "Caring for Elderly Parents", s1: "Looking at phone, worried. \"My dad's arthritis is getting worse in Ghana, and I feel helpless living so far away.\"", s2: "Welcoming gesture. \"Set him up on MCare through the MedPharma app. You can pay securely from abroad, and we deliver his meds to his door.\"" },
    ],
  },
  {
    theme: "Women's Health",
    icon: Flower2,
    color: "bg-pink-100 text-pink-700 border-pink-200",
    accent: "#ec4899",
    videos: [
      { title: "Privacy for Contraceptives", s1: "Standing in a busy pharmacy, looking uncomfortable. \"Buying contraceptives at a crowded pharmacy always makes me feel like everyone is watching and judging.\"", s2: "Pointing to a discreet package. \"Your privacy is guaranteed. MCare delivers your contraceptives in discreet, unmarked packaging directly to you.\"" },
      { title: "Forgetting the Pill", s1: "Looking panicked at a birth control pack. \"My schedule is so hectic, I always forget to take my pill at the exact same time every day.\"", s2: "Showing app notification. \"Stay protected. The MedPharma app sends you discreet, automated daily reminders so you never miss a dose.\"" },
      { title: "Urgent Consults (Infections)", s1: "At desk, looking uncomfortable and worried. \"I think I have an infection, but I am too embarrassed to sit in a clinic waiting room all day.\"", s2: "Showing video call. \"Get private care instantly. Book a virtual consultation in the MedPharma app and speak to a doctor from your safe space.\"" },
      { title: "Tracking Cycles & Hormones", s1: "Writing on a paper calendar, confused. \"Trying to track my menstrual cycle and hormone symptoms on a paper calendar is so inaccurate.\"", s2: "Tapping smartwatch. \"Your health is digital now. The MedPharma app integrates with wearables to track your cycles and vitals accurately.\"" },
      { title: "Running Out of Essentials", s1: "Finding an empty box in bathroom cabinet. \"There is nothing worse than starting your period and realizing you are completely out of pain meds and supplies.\"", s2: "Holding delivery bag. \"Never run out. Subscribe to MCare, and we auto-deliver your monthly women's health essentials before you need them.\"" },
      { title: "Understanding Lab Results (PCOS/Hormones)", s1: "Staring at hormone lab results, confused. \"I just got my hormone panel back, but I don't understand what any of these numbers mean for my PCOS.\"", s2: "Reassuring gesture. \"Upload your results to the MedPharma app. Our AI health assistant instantly explains your hormone levels in simple terms.\"" },
      { title: "Late Night Pregnancy/Health Worries", s1: "Awake in bed, Googling symptoms. \"When I get strange pregnancy symptoms late at night, Googling them just makes me panic.\"", s2: "Empathetic look. \"Stop guessing. The MedPharma app features a 24/7 AI health assistant that provides instant, safe guidance anytime.\"" },
      { title: "Cost of Monthly Care", s1: "Looking at pharmacy receipt. \"Between supplements, pain meds, and feminine care, managing my health every month is so expensive.\"", s2: "Smiling confidently. \"Subscribe to MCare Plus to get guaranteed discounts on your monthly medications and free delivery.\"" },
      { title: "Explaining Gynecological History", s1: "Explaining history to doctor, looking tired. \"I am so tired of re-explaining my entire gynecological history to every new specialist I see.\"", s2: "Tapping tablet. \"Your FulLife ID securely stores your entire medical history in one place, giving your doctor the full picture instantly.\"" },
      { title: "Uploading Prescriptions", s1: "In car holding paper prescription. \"My gynecologist just gave me this prescription. Now I have to drive through traffic to find a pharmacy.\"", s2: "Scanning phone. \"Save your time. Just open the MedPharma app, scan your prescription, and we will deliver it to you.\"" },
    ],
  },
  {
    theme: "How to Use the App",
    icon: Smartphone,
    color: "bg-emerald-100 text-emerald-700 border-emerald-200",
    accent: "#10b981",
    videos: [
      { title: "Downloading & Signing Up", s1: "Looking stressed holding multiple pill bottles. \"Managing my family's healthcare is so overwhelming. I wish everything was just in one place.\"", s2: "Showing phone screen. \"It is! Download the MedPharma app from the App Store or Play Store and create your free FulLife ID in 60 seconds.\"" },
      { title: "Adding Insurance Details", s1: "Waiting at a pharmacy counter with an insurance card. \"I hate waiting an hour at the pharmacy just for my insurance claims to be processed.\"", s2: "Tapping phone. \"Open the MedPharma app, go to Profile, and tap 'Add Insurance'. We process your claims instantly from then on!\"" },
      { title: "Booking a Video Consultation", s1: "Sick in bed, looking at the ceiling. \"I am too sick to drive to the hospital, but I really need to speak with a doctor.\"", s2: "Showing video call UI. \"Tap 'Consult a Doctor Today' on the MedPharma app home screen to instantly connect with a licensed professional.\"" },
      { title: "Uploading a Prescription", s1: "Holding a handwritten paper prescription. \"My doctor gave me this paper, but I don't have the time or energy to go pharmacy hunting.\"", s2: "Scanning with phone. \"Tap 'Upload a Prescription' in the MedPharma app. Just snap a photo, and our team will deliver your meds.\"" },
      { title: "Subscribing to MCare", s1: "Realizing her pill bottle is empty. \"I constantly forget to buy my chronic medication until the bottle is completely empty.\"", s2: "Showing app menu. \"Tap 'Manage Subscription' in the app and select an MCare plan. We will auto-deliver your refills every month.\"" },
      { title: "Setting Up Reminders", s1: "Looking confused, holding two different pill bottles. \"I have so many different medications to take at different times. I can never keep track.\"", s2: "Showing app notifications. \"Use the MedPharma app to set up automated, customized reminders for every single pill. Never miss a dose.\"" },
      { title: "Chatting with the AI Assistant", s1: "Anxious at night, looking at a Google search. \"Whenever I have a weird symptom at night, I Google it and immediately assume the worst.\"", s2: "Typing on phone. \"Tap the chat icon in the MedPharma app to speak with our 24/7 AI health assistant for safe, instant medical guidance.\"" },
      { title: "Viewing Medical Records & Labs", s1: "Shuffling through a messy folder of medical papers. \"Every time I visit the doctor, I have to dig through piles of paper to find my old lab results.\"", s2: "Showing app profile. \"Tap 'My Health' in the MedPharma app. Your entire medical history, labs, and prescriptions are securely stored in a digital vault.\"" },
      { title: "Adding a Delivery Address", s1: "Looking at phone, confused. \"I want my medication delivered to my office today instead of my house, but I don't know how.\"", s2: "Tapping map icon on phone. \"During checkout in the MedPharma app, simply select 'Add New Address' and use GPS to pin your exact location.\"" },
      { title: "Managing Health for Relatives", s1: "Abroad, looking worried. \"I live outside Ghana and I always struggle to pay for and track my parents' healthcare back home.\"", s2: "Open hand gesture. \"Use the MedPharma app. You can add them to your profile, pay securely with your card, and track their MCare deliveries.\"" },
    ],
  },
,
  {
    theme: "Driving Safety",
    icon: Car,
    color: "bg-yellow-100 text-yellow-700 border-yellow-200",
    accent: "#eab308",
    videos: [
      { title: "The Midnight Blur", s1: "Kikki sitting in a driver's seat, rubbing her eyes with open palms while looking forward. \"Night driving in Accra is stressful enough, but when the streetlights blur, the danger doubles. Poor vision is a silent crash risk.\"", s2: "Frederick standing confidently outdoors in a medium shot. \"Don't gamble with your eyesight on the highway. Use the MedPharma app to book an eye check-up instantly. See clearly, drive safely.\"" },
      { title: "The Heavy Eyes", s1: "Kikki stretching her neck slowly in a car seat, looking exhausted. \"You think you can push through driver fatigue with just another energy drink, but microsleeps happen in a fraction of a second.\"", s2: "Frederick holding a smartphone at chest level. \"Rest is your only true defense. But if constant fatigue is haunting you, book a quick teleconsultation on MedPharma to check for underlying health issues.\"" },
      { title: "The Hidden Drowsiness", s1: "Kikki looking at a small medicine box in her open palm. \"You popped an allergy pill before your road trip, not realizing it causes severe drowsiness. Side effects don't care about your destination.\"", s2: "Frederick gesturing slowly with one open hand. \"Always know what you are taking before you drive. Chat with a licensed MedPharma pharmacist directly through the app to verify your medication side effects.\"" },
      { title: "The Distracted Glance", s1: "Kikki holding a phone down at her side, looking briefly down then up. \"Looking at your phone for just three seconds at highway speed means driving blind for almost a hundred meters.\"", s2: "Frederick standing calmly, hands relaxed at his sides. \"Keep your eyes on the road. If you need healthcare on the go, the MedPharma app will be waiting for you safely when you park.\"" },
      { title: "The Sudden Blowout", s1: "Kikki standing by a car wheel, looking concerned. \"Tire blowouts are terrifying and often cause panic. The shock alone can trigger severe anxiety or blood pressure spikes on the highway.\"", s2: "Frederick looking directly at the camera with a reassuring posture. \"Stay calm, steer straight, and brake slowly. And remember, if the shock affects your health, a MedPharma doctor is just a video call away.\"" },
      { title: "The Highway Dehydration", s1: "Kikki wiping her forehead slowly, looking tired. \"Long drives in the hot sun drain your body of water. Dehydration causes confusion and slows your reaction time on the road.\"", s2: "Frederick holding a water bottle at waist level. \"Keep water in your car and take breaks. If you feel dizzy, pull over immediately. MedPharma delivers rehydration salts to your location if you need them.\"" },
      { title: "The Glare Blindness", s1: "Kikki shielding her eyes with a flat palm. \"The intense afternoon sun bouncing off the road can blind you for crucial seconds. Glare is a major factor in highway accidents.\"", s2: "Frederick standing in soft lighting. \"Protect your vision. Wear polarized sunglasses while driving, and use MedPharma to book an annual vision test to keep your eyes sharp.\"" },
      { title: "The Commuter's Backache", s1: "Kikki holding her lower back slowly with one hand. \"Sitting in endless traffic every single day ruins your posture. That lingering lower back pain makes driving unbearable.\"", s2: "Frederick gesturing gently with an open palm. \"Adjust your seat for proper support. If the pain persists, consult a physiotherapist virtually through the MedPharma app right from your home.\"" },
      { title: "The Rush Hour Stress", s1: "Kikki taking a deep, heavy breath, looking frustrated. \"Road rage and endless gridlock do more than ruin your mood. Chronic traffic stress slowly raises your blood pressure.\"", s2: "Frederick standing calmly, exuding peace. \"Take deep breaths and prioritize your cardiovascular health. Book routine heart check-ups with MedPharma to ensure the daily commute isn't damaging your heart.\"" },
      { title: "The Emergency Kit", s1: "Kikki looking into an empty car trunk. \"Most drivers have a spare tire, but almost nobody carries a proper first aid kit. When a roadside emergency happens, you are left stranded.\"", s2: "Frederick holding a small, neat medical box at chest level. \"Be prepared for anything. Order a fully stocked premium first aid kit directly from the MedPharma app and keep it in your trunk.\"" }
    ]
  },
  {
    theme: "MedPharma Testimonials",
    icon: MessageSquare,
    color: "bg-emerald-100 text-emerald-700 border-emerald-200",
    accent: "#10b981",
    videos: [
      { title: "The Midnight Save", s1: "Kikki looking relieved, standing in a softly lit room. \"My daughter's fever spiked at midnight. Every pharmacy in our neighborhood was closed, and I was terrified.\"", s2: "Frederick nodding with a warm smile. \"We hear this every day. That is why MedPharma delivers essential medications directly to your door, safely and securely, no matter the hour.\"" },
      { title: "The Routine Care Peace of Mind", s1: "Kikki smiling gently, holding a neatly wrapped box. \"Managing my daily hypertension medication used to be a hassle. I was always forgetting to refill until the bottle was empty.\"", s2: "Frederick standing with excellent posture. \"With FulLife, we automate your routine medications. We remember so you do not have to, delivering your refills exactly when you need them.\"" },
      { title: "The Instant Doctor", s1: "Kikki looking relaxed in a home setting. \"I was too weak to leave the house and face the clinic queues. I thought I would have to just wait out the pain.\"", s2: "Frederick holding a tablet at chest height. \"Our teleconsultation feature brings the doctor to you. A simple video call gets you a diagnosis and a prescription sent straight to your home.\"" },
      { title: "The Authentic Guarantee", s1: "Kikki holding a generic medicine box with a skeptical look. \"Buying medication from random vendors always left me worried. You hear so many stories about fake drugs on the market.\"", s2: "Frederick speaking with authority and calm. \"Your safety is our top priority. Every single drug on MedPharma is one hundred percent authentic, verified by licensed Ghanaian pharmacists.\"" },
      { title: "The Office Delivery", s1: "Kikki in an office setting, looking pleased. \"I had back-to-back meetings all week. There was absolutely no time to run to the pharmacy during my lunch break.\"", s2: "Frederick gesturing openly. \"MedPharma respects your time. We deliver your prescriptions directly to your office desk seamlessly, so you can stay focused on your work.\"" },
      { title: "The Lab Test at Home", s1: "Kikki sitting comfortably on a couch. \"I needed a routine blood test but kept postponing it because the laboratory is always so crowded in the mornings.\"", s2: "Frederick smiling confidently. \"Healthcare should fit into your schedule. MedPharma allows you to book certified lab technicians who come to your home to take samples comfortably.\"" },
      { title: "The Parent's Relief", s1: "Kikki smiling with a warm, motherly expression. \"Living in another city meant I could not check on my mother's medications easily. I was always worried she was missing doses.\"", s2: "Frederick nodding approvingly. \"Distance should never compromise care. With MedPharma, you can manage and pay for your family's routine medications from anywhere in the world.\"" },
      { title: "The Quick Upload", s1: "Kikki holding up a piece of paper, smiling. \"I left the hospital with a handwritten prescription and did not want to hunt for a pharmacy in traffic.\"", s2: "Frederick holding a smartphone. \"Just snap a photo. Upload your prescription to the MedPharma app, and our team will process, pack, and deliver it straight to your door.\"" },
      { title: "The Corporate Benefit", s1: "Kikki in business attire, looking proud. \"Since our company switched to MedPharma for our health benefits, employee satisfaction has completely skyrocketed.\"", s2: "Frederick wearing a clean blazer. \"A healthy team is a productive team. MedPharma provides seamless B2B healthcare solutions that actually add value to your employees' daily lives.\"" },
      { title: "The Privacy Priority", s1: "Kikki looking discreet and comfortable. \"I needed to buy sensitive personal care products, and I really did not want to face the awkward pharmacy counter interactions.\"", s2: "Frederick speaking with a reassuring tone. \"Your privacy matters. MedPharma delivers your health and wellness products in discreet packaging, ensuring total confidentiality every single time.\"" }
    ]
  },
  {
    theme: "MedPharma Q&A",
    icon: HelpCircle,
    color: "bg-indigo-100 text-indigo-700 border-indigo-200",
    accent: "#6366f1",
    videos: [
      { title: "How fast is delivery?", s1: "Kikki looking directly at the camera with a curious expression. \"The biggest question everyone asks is: when I order my medication on the app, how fast does it actually arrive?\"", s2: "Frederick smiling confidently. \"We move fast. We offer same-day delivery anywhere within Accra, and reliable next-day delivery for locations nationwide.\"" },
      { title: "Are the drugs real?", s1: "Kikki leaning in slightly, asking a serious question. \"With so many fake products out there, how can I be absolutely certain that the drugs from MedPharma are authentic?\"", s2: "Frederick standing firm and professional. \"We source exclusively from certified, verified distributors. Every single product is inspected by our licensed pharmacists before it ever reaches you.\"" },
      { title: "How do I book a doctor?", s1: "Kikki holding her phone in a relaxed manner. \"I need to speak to a doctor today, but I don't know how complicated the booking process is on the app.\"", s2: "Frederick holding a tablet at chest level. \"It takes less than two minutes. Open the app, select Teleconsultation, choose your preferred time, and a licensed doctor will connect with you via video.\"" },
      { title: "Do you take insurance?", s1: "Kikki looking inquisitive. \"Private healthcare can be expensive. Do you accept private health insurance to cover my medication and consultation costs?\"", s2: "Frederick nodding clearly. \"Yes, we partner with major private health insurance providers in Ghana. You can link your policy directly in the app for seamless cashless transactions.\"" },
      { title: "What are the payment methods?", s1: "Kikki holding a bank card casually at her side. \"I prefer using Mobile Money, but my husband likes using his Visa card. What payment options do you actually support?\"", s2: "Frederick gesturing with an open palm. \"We support everything you need. You can pay securely via Mobile Money, debit or credit card, or your linked health insurance policy directly in the app.\"" },
      { title: "Can I get prescription refills?", s1: "Kikki looking thoughtfully at the camera. \"I take the same blood pressure medication every single month. Do I really have to manually order it every time?\"", s2: "Frederick smiling warmly. \"Not at all. With our FulLife program, you set it up once, and we automatically process and deliver your routine refills every month.\"" },
      { title: "What if I have a question about my dose?", s1: "Kikki looking slightly confused. \"Sometimes I forget if I should take my medication before or after meals. Who can I ask if I am already at home?\"", s2: "Frederick looking reassuring. \"You are never alone. You can use the in-app chat to speak with our AI health assistant, Kobikuul, or connect directly to a human pharmacist for instant advice.\"" },
      { title: "Are lab tests accurate at home?", s1: "Kikki raising a polite question. \"I love the idea of home lab tests, but are the results just as accurate as walking into a big hospital laboratory?\"", s2: "Frederick speaking with authority. \"Absolutely. We dispatch certified phlebotomists to draw your samples, which are then processed in top-tier accredited partner laboratories for perfect accuracy.\"" },
      { title: "Can you deliver to my village?", s1: "Kikki looking hopeful. \"My grandmother lives outside the main capital city. Can MedPharma still reach her with her monthly medications?\"", s2: "Frederick nodding with a smile. \"Yes, we can. While we offer same-day delivery in Accra, our logistics network handles secure nationwide delivery to ensure everyone gets their care.\"" },
      { title: "Is my medical data safe?", s1: "Kikki looking serious. \"I am uploading my private medical prescriptions and talking to doctors on my phone. How secure is my personal health data?\"", s2: "Frederick maintaining a calm, serious posture. \"We use bank-level encryption. Your health records, consultation videos, and prescriptions are strictly confidential and protected by world-class security protocols.\"" }
    ]
  },
  {
    theme: "Youth Segments",
    icon: Zap,
    color: "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200",
    accent: "#d946ef",
    videos: [
      { title: "The Burnout Hustle", s1: "Kikki looking exhausted, rubbing her temples slowly. \"Hustle culture tells you to grind all night, but running on three hours of sleep and pure caffeine is destroying your immune system.\"", s2: "Frederick speaking warmly but firmly. \"Burnout is real. Prioritize your recovery. MedPharma delivers premium multivitamins and wellness supplements to help rebuild your energy the healthy way.\"" },
      { title: "TikTok Skincare Hacks", s1: "Kikki looking skeptically at a small unmarked jar. \"Mixing random kitchen ingredients on your face because a viral video told you to is a quick way to ruin your skin barrier.\"", s2: "Frederick gesturing calmly. \"Trust science, not trends. Book a teleconsultation with a verified dermatologist on MedPharma and get clinically approved skincare delivered to your door.\"" },
      { title: "The Screen Time Strain", s1: "Kikki rubbing her eyes gently, looking away from a screen. \"Between laptops at work and scrolling on your phone all night, eye strain is the modern headache we all ignore.\"", s2: "Frederick standing calmly. \"Protect your vision. Practice the twenty-twenty rule, and use the MedPharma app to order lubricating eye drops to keep your eyes healthy.\"" },
      { title: "The Period Cramp Paralysis", s1: "Kikki sitting quietly, looking uncomfortable. \"When severe period cramps hit, the last thing you want to do is get dressed and walk to a pharmacy in the hot sun.\"", s2: "Frederick speaking with a kind, professional tone. \"Stay in bed and get comfortable. Order your pain relief and feminine care products on MedPharma, and we will bring them right to you.\"" },
      { title: "The Fake Supplement Trap", s1: "Kikki looking closely at a flashy protein powder bottle. \"Buying fitness supplements from unverified online vendors is a huge gamble. You never really know what you are putting in your body.\"", s2: "Frederick standing confidently. \"Your fitness journey deserves safe fuel. MedPharma guarantees one hundred percent authentic sports nutrition and vitamins, sourced directly from verified manufacturers.\"" },
      { title: "The Anxiety Spiral", s1: "Kikki taking a deep, slow breath, looking overwhelmed. \"Trying to balance your career, social life, and family expectations can quietly push your mental health to the edge.\"", s2: "Frederick looking reassuring and calm. \"It is okay to ask for help. Use the MedPharma app to book a discreet teleconsultation with a mental health professional from the safety of your room.\"" },
      { title: "The Gym Injury Ignore", s1: "Kikki holding her shoulder gently, wincing slightly. \"Pushing through sharp joint pain at the gym because you think you are tough will only bench you for six months later.\"", s2: "Frederick gesturing slowly. \"Listen to your body. If the pain is sharp, stop. Order muscle relaxants and anti-inflammatories on MedPharma to start your recovery immediately.\"" },
      { title: "The Energy Drink Crash", s1: "Kikki looking drained, staring blankly ahead. \"Chugging energy drinks gives you a fast spike, but the afternoon sugar crash leaves you feeling worse than before you started.\"", s2: "Frederick holding a glass of water. \"Real energy comes from hydration and proper nutrition. Find doctor-approved daily multivitamins on MedPharma that build sustainable energy without the crash.\"" },
      { title: "The Self-Diagnosis Panic", s1: "Kikki scrolling on her phone, looking increasingly worried. \"Googling your symptoms at two in the morning will convince you that a simple headache is a rare terminal disease.\"", s2: "Frederick smiling gently. \"Step away from the search bar. Use the MedPharma app to chat with our AI health assistant, Kobikuul, for safe, rational medical guidance anytime.\"" },
      { title: "The Post-Party Dehydration", s1: "Kikki holding her head lightly, eyes closed. \"A great weekend out is fun until the Sunday morning headache hits. Severe dehydration is the real reason you feel terrible.\"", s2: "Frederick standing calmly. \"Recovery starts with hydration. MedPharma delivers oral rehydration salts and pain relief directly to your door, so you can bounce back fast.\"" }
    ]
  }
];

/* ─── COPY BUTTON ───────────────────────────────────────────────────── */
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
      title="Copy full script"
    >
      {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
    </button>
  );
}

const ANTI_GLITCH_RULES = `
⚠️ ANTI-GLITCH PRODUCTION RULES (Apply to ALL scenes):
• SHOT TYPE: Always use MEDIUM SHOT (waist up) or WIDE SHOT. NEVER extreme close-ups of hands or face.
• HANDS: Character keeps hands relaxed at sides or uses open-palm gestures only. No counting fingers, no pinching, no gripping small objects in close-up.
• FINGERS: If hands are visible, the AI must render exactly 5 fingers. If glitch appears, regenerate.
• BACKGROUND: Keep background soft and blurred (shallow depth of field). No visible text, signs, labels, or posters in background.
• FACE: Character faces camera directly. Avoid profile shots. No extreme expressions that distort facial features.
• OBJECTS: If character holds a phone or tablet, it must be held at chest height in medium shot - never close-up.
• LIGHTING: Use stable, consistent lighting throughout the scene. No flickering or colour shifts.
• MOVEMENT: Slow, deliberate, natural gestures only. No fast hand movements that cause motion blur.
• TEXT ON SCREEN: Do not render any on-screen text or UI overlays inside the AI video - add text in CapCut instead.
• FORMAT: 9:16 vertical, film grain, cinematic colour grade.
`;

/* ─── SCRIPT CARD ───────────────────────────────────────────────────── */
function ScriptCard({ video, index }: { video: { title: string; s1: string; s2: string }; index: number }) {
  const fullScript = `Video ${index + 1}: ${video.title}\n\nSCENE 1 (Kikki - The Problem):\n${video.s1}\n\nSCENE 2 (Frederick - The Solution):\n${video.s2}\n\n${ANTI_GLITCH_RULES}`;
  return (
    <Card className="border shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
      <CardHeader className="pb-3 flex flex-row items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
            #{index + 1}
          </span>
          <CardTitle className="text-sm font-semibold leading-tight">{video.title}</CardTitle>
        </div>
        <CopyButton text={fullScript} />
      </CardHeader>
      <CardContent className="space-y-3 pt-0">
        <div className="bg-red-50 border border-red-100 rounded-lg p-3 space-y-1">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
            <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider">Scene 1 · Kikki (Problem)</span>
          </div>
          <p className="text-xs leading-relaxed text-foreground">{video.s1}</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3 space-y-1">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">Scene 2 · Frederick (Solution)</span>
          </div>
          <p className="text-xs leading-relaxed text-foreground">{video.s2}</p>
        </div>
        {/* Anti-Glitch Shield */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-2.5">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-amber-500 text-xs">🛡️</span>
            <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">Anti-Glitch Shield Active</span>
          </div>
          <ul className="text-[10px] text-amber-800 space-y-0.5 leading-relaxed">
            <li>• <strong>Shot:</strong> Medium/wide only - no extreme close-ups</li>
            <li>• <strong>Hands:</strong> Open-palm or relaxed at sides - never counting fingers</li>
            <li>• <strong>Background:</strong> Soft blur - no visible text or signs</li>
            <li>• <strong>Objects:</strong> Phone/tablet held at chest in medium shot only</li>
            <li>• <strong>Movement:</strong> Slow, deliberate gestures - no fast hand motions</li>
            <li>• <strong>Text:</strong> Add all captions in CapCut - not inside AI video</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

/* ─── MAIN PAGE ─────────────────────────────────────────────────────── */
export default function MarketingScripts() {
  const [activeTab, setActiveTab] = useState(0);
  const current = SCRIPTS_DATA[activeTab];
  const Icon = current.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/80 backdrop-blur sticky top-0 z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-display font-bold tracking-tight">Master Video Scripts</h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              90 scripts · 9 themes · 2 scenes per video - ready for Google Flow & CapCut
            </p>
          </div>
          <Badge variant="secondary" className="shrink-0 text-xs font-semibold">
            {SCRIPTS_DATA.length} Themes · {SCRIPTS_DATA.reduce((a, c) => a + c.videos.length, 0)} Videos
          </Badge>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">
        {/* Theme tabs */}
        <div className="flex flex-wrap gap-2">
          {SCRIPTS_DATA.map((cat, i) => {
            const TabIcon = cat.icon;
            const isActive = i === activeTab;
            return (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-150 ${
                  isActive
                    ? cat.color + " shadow-sm scale-105"
                    : "bg-muted/40 text-muted-foreground border-border hover:bg-muted"
                }`}
              >
                <TabIcon className="h-3.5 w-3.5" />
                {cat.theme}
                <span className={`text-[10px] rounded-full px-1.5 py-0.5 font-bold ${isActive ? "bg-white/50" : "bg-muted"}`}>
                  {cat.videos.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Theme Header */}
        <div
          className="rounded-xl p-5 border flex items-center gap-4"
          style={{ borderColor: current.accent + "33", backgroundColor: current.accent + "0d" }}
        >
          <div
            className="h-12 w-12 rounded-xl grid place-items-center shrink-0"
            style={{ backgroundColor: current.accent + "22" }}
          >
            <Icon className="h-6 w-6" style={{ color: current.accent }} />
          </div>
          <div>
            <h2 className="text-xl font-bold">{current.theme}</h2>
            <p className="text-sm text-muted-foreground">
              {current.videos.length} videos · Each has 2 scenes (10 seconds each)
            </p>
          </div>
        </div>

        {/* Script Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {current.videos.map((video, i) => (
            <ScriptCard key={i} video={video} index={i} />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-4 border-t">
          <Button
            variant="outline"
            onClick={() => setActiveTab((p) => Math.max(0, p - 1))}
            disabled={activeTab === 0}
          >
            ← Previous Theme
          </Button>
          <span className="text-sm text-muted-foreground">
            {activeTab + 1} / {SCRIPTS_DATA.length}
          </span>
          <Button
            variant="outline"
            onClick={() => setActiveTab((p) => Math.min(SCRIPTS_DATA.length - 1, p + 1))}
            disabled={activeTab === SCRIPTS_DATA.length - 1}
          >
            Next Theme →
          </Button>
        </div>
      </div>
    </div>
  );
}
