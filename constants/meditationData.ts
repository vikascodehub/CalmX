import { MeditationContent, MeditationType } from "@/types/meditation";

export const meditationTypes: MeditationType[] = [
  {
    id: "guided-breathing",
    title: "Guided Breathing",
    titleHindi: "श्वास ध्यान",
    duration: "10 mins",
    description: "Calm your mind through focused breathing exercises",
    gradient: ["#4CA1AF", "#2C3E50"],
    icon: "breath",
  },
  {
    id: "stress-relief",
    title: "Stress Relief",
    titleHindi: "तनाव मुक्ति",
    duration: "15 mins",
    description: "Release tension and find inner peace",
    gradient: ["#FF512F", "#DD2476"],
    icon: "meditation",
  },
  {
    id: "anxiety-relief",
    title: "Anxiety Relief",
    titleHindi: "चिंता मुक्ति",
    duration: "12 mins",
    description: "Reduce anxiety through mindful meditation",
    gradient: ["#56ab2f", "#a8e063"],
    icon: "peace",
  },
  {
    id: "sleep-better",
    title: "Sleep Better",
    titleHindi: "अच्छी नींद",
    duration: "20 mins",
    description: "Relax your mind and body for better sleep",
    gradient: ["#141E30", "#243B55"],
    icon: "moon-waning-crescent",
  },
];

export const meditationContents: Record<string, MeditationContent> = {
  "guided-breathing": {
    title: "श्वास ध्यान",
    titleEnglish: "Guided Breathing",
    duration: "10 minutes",
    sections: [
      {
        id: "opening",
        title: "प्रारंभिक निर्देश",
        titleEnglish: "Opening Instructions",
        content: [
          "नमस्कार, आइए श्वास पर आधारित ध्यान का अभ्यास करें।",
          "एक शांत स्थान पर बैठ जाइए।",
          "अगले कुछ क्षणों के लिए सभी चिंताओं को एक तरफ रख दें।",
          "अपने आप को इस समय का उपहार दें।",
        ],
        pauses: [5000, 4000, 4000, 5000],
      },
      {
        id: "posture",
        title: "आसन",
        titleEnglish: "Posture",
        content: [
          "सीधी स्थिति में आराम से बैठ जाएं।",
          "कंधों को ढीला छोड़ दें।",
          "हथेलियों को गोद में या घुटनों पर रख लें।",
          "धीरे से आंखें बंद कर लें।",
        ],
        pauses: [5000, 4000, 4000, 5000],
      },
      {
        id: "breath-focus",
        title: "श्वास पर ध्यान",
        titleEnglish: "Breath Focus",
        content: [
          "अब अपना पूरा ध्यान श्वास पर ले जाएं।",
          "श्वास को स्वाभाविक रूप से आने-जाने दें।",
          "नाक से आती हुई ठंडी हवा को महसूस करें।",
          "और जाती हुई गरम हवा को महसूस करें।",
          "हर सांस को पूरी तरह से महसूस करें।",
        ],
        pauses: [5000, 4000, 4000, 4000, 5000],
      },
      {
        id: "counting-breath",
        title: "श्वास गिनना",
        titleEnglish: "Counting Breaths",
        content: [
          "अब हम श्वास को गिनना शुरू करेंगे।",
          "हर सांस लेते समय मन में एक गिनें।",
          "दस तक गिनने के बाद फिर से एक से शुरू करें।",
          "अगर मन भटके तो बिना परेशान हुए वापस श्वास पर आ जाएं।",
        ],
        pauses: [5000, 4000, 4000, 5000],
      },
      {
        id: "closing",
        title: "समापन",
        titleEnglish: "Closing",
        content: [
          "अब धीरे-धीरे गिनना बंद कर दें।",
          "कुछ क्षण बस श्वास को महसूस करें।",
          "धीरे-धीरे शरीर में हलकी गति लाएं।",
          "अपनी गति से आंखें खोलें।",
        ],
        pauses: [5000, 4000, 4000, 5000],
      },
    ],
  },

  "stress-relief": {
    title: "तनाव मुक्ति",
    titleEnglish: "Stress Relief",
    duration: "15 minutes",
    sections: [
      {
        id: "opening",
        title: "प्रारंभिक निर्देश",
        titleEnglish: "Opening Instructions",
        content: [
          "नमस्कार, आइए तनाव मुक्ति का अभ्यास करें।",
          "इस समय को पूरी तरह से अपने लिए समर्पित करें।",
          "यहाँ कुछ भी हासिल करने की जरूरत नहीं है।",
          "बस होने की अवस्था में रहें।",
        ],
        pauses: [5000, 4000, 4000, 5000],
      },
      {
        id: "tension-release",
        title: "तनाव मुक्ति",
        titleEnglish: "Tension Release",
        content: [
          "पूरे शरीर में जहां भी तनाव है, उसे पहचानें।",
          "गहरी सांस लें और सांस छोड़ते हुए तनाव को जाने दें।",
          "कंधों, गर्दन और जबड़े से तनाव को जाने दें।",
          "हाथों और पैरों से तनाव को जाने दें।",
          "पूरे शरीर को ढीला और हल्का महसूस करें।",
        ],
        pauses: [5000, 4000, 4000, 4000, 5000],
      },
      {
        id: "peaceful-place",
        title: "शांत स्थान",
        titleEnglish: "Peaceful Place",
        content: [
          "एक शांत स्थान की कल्पना करें जहां आप सुरक्षित महसूस करते हैं।",
          "वहां की हवा, प्रकाश और आवाज़ों को महसूस करें।",
          "इस शांत स्थान में पूरी तरह से विश्राम करें।",
          "यहाँ कोई चिंता नहीं है, कोई जल्दी नहीं है।",
        ],
        pauses: [5000, 4000, 4000, 5000],
      },
      {
        id: "closing",
        title: "समापन",
        titleEnglish: "Closing",
        content: [
          "धीरे-धीरे इस शांत स्थान से वापस आएं।",
          "शरीर में हलकी गति लाएं।",
          "गहरी सांस लें और छोड़ें।",
          "धीरे से आंखें खोलें।",
          "इस शांति को पूरे दिन अपने साथ रखें।",
        ],
        pauses: [5000, 4000, 4000, 4000, 5000],
      },
    ],
  },

  "anxiety-relief": {
    title: "चिंता मुक्ति",
    titleEnglish: "Anxiety Relief",
    duration: "12 minutes",
    sections: [
      {
        id: "opening",
        title: "प्रारंभिक निर्देश",
        titleEnglish: "Opening Instructions",
        content: [
          "नमस्कार, आइए चिंता से मुक्ति का अभ्यास करें।",
          "इस क्षण में पूरी तरह से उपस्थित हों।",
          "जो भी चिंताएं हैं, उन्हें अभी के लिए एक तरफ रख दें।",
          "यह समय पूरी तरह से आपका है।",
        ],
        pauses: [5000, 4000, 4000, 5000],
      },
      {
        id: "grounding",
        title: "भूमि से जुड़ाव",
        titleEnglish: "Grounding",
        content: [
          "अपने पैरों को जमीन पर महसूस करें।",
          "धरती से मिल रहे समर्थन को महसूस करें।",
          "अपने बैठने के स्थान को महसूस करें।",
          "इस क्षण में पूरी तरह से स्थिर हों।",
        ],
        pauses: [5000, 4000, 4000, 5000],
      },
      {
        id: "breath-anchor",
        title: "श्वास का लंगर",
        titleEnglish: "Breath Anchor",
        content: [
          "श्वास को अपना लंगर बनाएं।",
          "हर सांस आपको वर्तमान में लाती है।",
          "चिंताओं को बादलों की तरह आते-जाते देखें।",
          "आप श्वास के साथ सुरक्षित हैं।",
          "हर सांस के साथ और अधिक शांत होते जाएं।",
        ],
        pauses: [5000, 4000, 4000, 4000, 5000],
      },
      {
        id: "closing",
        title: "समापन",
        titleEnglish: "Closing",
        content: [
          "अब धीरे-धीरे बाहरी दुनिया में वापस आएं।",
          "शरीर में हलकी गति लाएं।",
          "इस शांति और स्थिरता को याद रखें।",
          "धीरे से आंखें खोलें।",
        ],
        pauses: [5000, 4000, 4000, 5000],
      },
    ],
  },

  "sleep-better": {
    title: "अच्छी नींद",
    titleEnglish: "Sleep Better",
    duration: "20 minutes",
    sections: [
      {
        id: "opening",
        title: "प्रारंभिक निर्देश",
        titleEnglish: "Opening Instructions",
        content: [
          "नमस्कार, आइए गहरी और शांत नींद के लिए तैयार हों।",
          "अपने बिस्तर पर आराम से लेट जाएं।",
          "दिन भर की सभी चिंताओं को जाने दें।",
          "यह समय पूरी तरह से आराम का है।",
        ],
        pauses: [5000, 4000, 4000, 5000],
      },
      {
        id: "body-relaxation",
        title: "शरीर विश्राम",
        titleEnglish: "Body Relaxation",
        content: [
          "पैर के अंगूठे से लेकर सिर तक पूरे शरीर को ढीला छोड़ें।",
          "हर सांस के साथ और गहरे विश्राम में जाएं।",
          "अपने शरीर को बिस्तर में डूबने दें।",
          "हर अंग को भारी और आरामदायक महसूस करें।",
        ],
        pauses: [5000, 4000, 4000, 5000],
      },
      {
        id: "peaceful-thoughts",
        title: "शांत विचार",
        titleEnglish: "Peaceful Thoughts",
        content: [
          "मन में शांत और सुखद दृश्य लाएं।",
          "जैसे समुद्र की लहरें या पहाड़ों की शांति।",
          "इन दृश्यों में खो जाएं।",
          "हर विचार धुंधला होता जा रहा है।",
          "नींद की गहराई में जाने दें।",
        ],
        pauses: [5000, 4000, 4000, 4000, 5000],
      },
      {
        id: "letting-go",
        title: "छोड़ना",
        titleEnglish: "Letting Go",
        content: [
          "सभी विचारों को धीरे-धीरे जाने दें।",
          "कोई प्रयास नहीं, कोई जल्दी नहीं।",
          "बस होने दें, बहने दें।",
          "गहरी और शांत नींद में जाने दें।",
        ],
        pauses: [5000, 4000, 4000, 5000],
      },
    ],
  },
};
