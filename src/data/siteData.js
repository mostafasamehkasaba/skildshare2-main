export const services = [
  {
    icon: "bi-laptop",
    title: { en: "Shared Desks", ar: "مكاتب مشتركة" },
    desc: {
      en: "Open seating with power, comfort, and focus.",
      ar: "جلسات مفتوحة مزودة بالكهرباء والراحة للتركيز.",
    },
  },
  {
    icon: "bi-building",
    title: { en: "Private Offices", ar: "مكاتب خاصة" },
    desc: {
      en: "Lockable offices for teams that need privacy.",
      ar: "مكاتب مغلقة للفرق التي تحتاج خصوصية.",
    },
  },
  {
    icon: "bi-people",
    title: { en: "Meeting Rooms", ar: "قاعات اجتماعات" },
    desc: {
      en: "Bookable rooms with screens and whiteboards.",
      ar: "قاعات قابلة للحجز مزودة بشاشات وسبورة.",
    },
  },
  {
    icon: "bi-mortarboard",
    title: { en: "Training Hall", ar: "قاعة تدريب" },
    desc: {
      en: "Large hall for workshops and seminars.",
      ar: "قاعة كبيرة للورش والندوات.",
    },
  },
  {
    icon: "bi-camera-video",
    title: { en: "Photo & Video Studio", ar: "استوديو تصوير وفيديو" },
    desc: {
      en: "Studio with lighting, backdrops, and gear.",
      ar: "استوديو بإضاءة وخلفيات وتجهيزات.",
    },
  },
  {
    icon: "bi-cup-hot",
    title: { en: "Internal Cafe", ar: "كافيه داخلي" },
    desc: {
      en: "Coffee, juices, and snacks on site.",
      ar: "قهوة وعصائر وسناكس داخل المكان.",
    },
  },
];

export const packages = [
  {
    category: "shared",
    badge: { en: "", ar: "" },
    title: { en: "Shared — Hourly", ar: "المشترك — بالساعة" },
    price: "10",
    unit: { en: "EGP/hour", ar: "جنيه/ساعة" },
    perks: {
      en: ["Shared desk in open area", "High-speed Wi-Fi", "Comfortable seating"],
      ar: ["مكتب في المساحة المشتركة", "واي فاي سريع", "جلسة مريحة"],
    },
    cta: { en: "Choose Shared Hourly", ar: "اختر المشترك بالساعة" },
  },
  {
    category: "shared",
    badge: { en: "Best for a day", ar: "أفضل ليوم واحد" },
    title: { en: "Shared — Daily", ar: "المشترك — يومي" },
    price: "90",
    unit: { en: "EGP/day", ar: "جنيه/يوم" },
    perks: {
      en: ["All hourly benefits", "Longer stay", "Better value"],
      ar: ["كل مزايا الساعة", "مدة أطول", "قيمة أفضل"],
    },
    cta: { en: "Choose Shared Daily", ar: "اختر المشترك اليومي" },
  },
  {
    category: "shared",
    badge: { en: "", ar: "" },
    title: { en: "Shared — Weekly", ar: "المشترك — أسبوعي" },
    price: "500",
    unit: { en: "EGP/week", ar: "جنيه/أسبوع" },
    perks: {
      en: ["All daily benefits", "Priority seating (if available)"],
      ar: ["كل مزايا اليومي", "أولوية المقاعد (حسب المتاح)"],
    },
    cta: { en: "Choose Shared Weekly", ar: "اختر المشترك الأسبوعي" },
  },
  {
    category: "shared",
    badge: { en: "", ar: "" },
    title: { en: "Shared — Monthly", ar: "المشترك — شهري" },
    price: "2000",
    unit: { en: "EGP/month", ar: "جنيه/شهر" },
    perks: {
      en: ["All weekly benefits", "Best value for frequent visits"],
      ar: ["كل مزايا الأسبوعي", "أفضل قيمة للزيارات المتكررة"],
    },
    cta: { en: "Choose Shared Monthly", ar: "اختر المشترك الشهري" },
  },
  {
    category: "private",
    badge: { en: "", ar: "" },
    title: { en: "Private — Hourly", ar: "الخاص — بالساعة" },
    price: "25",
    unit: { en: "EGP/hour", ar: "جنيه/ساعة" },
    perks: {
      en: ["Private space", "More privacy", "High-speed Wi-Fi"],
      ar: ["مساحة خاصة", "خصوصية أعلى", "واي فاي سريع"],
    },
    cta: { en: "Choose Private Hourly", ar: "اختر الخاص بالساعة" },
  },
  {
    category: "private",
    badge: { en: "Most Popular", ar: "الأكثر طلبًا" },
    title: { en: "Private — Daily", ar: "الخاص — يومي" },
    price: "150",
    unit: { en: "EGP/day", ar: "جنيه/يوم" },
    perks: {
      en: ["All hourly benefits", "Full day privacy", "Better focus"],
      ar: ["كل مزايا الساعة", "خصوصية طوال اليوم", "تركيز أعلى"],
    },
    cta: { en: "Choose Private Daily", ar: "اختر الخاص اليومي" },
    featured: true,
  },
  {
    category: "private",
    badge: { en: "", ar: "" },
    title: { en: "Private — Weekly", ar: "الخاص — أسبوعي" },
    price: "800",
    unit: { en: "EGP/week", ar: "جنيه/أسبوع" },
    perks: {
      en: ["All daily benefits", "Priority booking"],
      ar: ["كل مزايا اليومي", "أولوية في الحجز"],
    },
    cta: { en: "Choose Private Weekly", ar: "اختر الخاص الأسبوعي" },
  },
  {
    category: "private",
    badge: { en: "", ar: "" },
    title: { en: "Private — Monthly", ar: "الخاص — شهري" },
    price: "3500",
    unit: { en: "EGP/month", ar: "جنيه/شهر" },
    perks: {
      en: ["All weekly benefits", "Best for teams and frequent use"],
      ar: ["كل مزايا الأسبوعي", "أفضل للفرق والاستخدام المتكرر"],
    },
    cta: { en: "Choose Private Monthly", ar: "اختر الخاص الشهري" },
  },
];

export const offers = [
  {
    tag: { en: "New Member", ar: "عضو جديد" },
    title: { en: "First Visit Free", ar: "أول زيارة مجانًا" },
    off: { en: "100% OFF", ar: "خصم 100%" },
    desc: {
      en: "Try our workspace for 2 hours completely free on your first visit.",
      ar: "جرّب المساحة لمدة ساعتين مجانًا في أول زيارة.",
    },
    btn: { en: "Claim Free Trial", ar: "احجز التجربة" },
    icon: "bi-gift",
    tone: "primary",
  },
  {
    tag: { en: "Best Value", ar: "أفضل قيمة" },
    title: { en: "Weekly Deal", ar: "عرض الأسبوع" },
    off: { en: "20% OFF", ar: "خصم 20%" },
    desc: {
      en: "Save 20% when you book a full week in advance.",
      ar: "خصم 20% عند حجز أسبوع كامل مسبقًا.",
    },
    btn: { en: "Book Weekly", ar: "احجز أسبوعي" },
    icon: "bi-percent",
    tone: "warning",
  },
  {
    tag: { en: "Limited Time", ar: "لفترة محدودة" },
    title: { en: "Monthly Membership", ar: "اشتراك شهري" },
    off: { en: "30% OFF", ar: "خصم 30%" },
    desc: {
      en: "Get your first month at 30% off plus free meeting room credits.",
      ar: "احصل على أول شهر بخصم 30% مع رصيد قاعات اجتماعات مجاني.",
    },
    btn: { en: "Start Monthly", ar: "ابدأ الشهري" },
    icon: "bi-clock",
    tone: "info",
    foot: { en: "Offer ends in: 7 days", ar: "العرض ينتهي خلال 7 أيام" },
  },
];

export const posts = [
  {
    cat: { en: "Remote Work", ar: "العمل عن بعد" },
    title: { en: "The Future of Remote Work: Trends to Watch", ar: "مستقبل العمل عن بُعد: أهم الاتجاهات" },
    date: { en: "Jan 18, 2026", ar: "18 يناير 2026" },
    read: { en: "6 min read", ar: "قراءة 6 دقائق" },
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    body: {
      en: [
        "Remote work is shifting from a perk to a default. Hybrid policies, async collaboration, and outcome-based metrics are now common across modern teams.",
        "High-performing remote teams invest in clear documentation, fewer meetings, and predictable check-ins. They design their week around deep focus blocks.",
        "Coworking spaces fill the gaps with reliable internet, ergonomic setups, and a real community, making remote work sustainable over the long term.",
      ],
      ar: [
        "العمل عن بُعد لم يعد ميزة إضافية فقط، بل أصبح أسلوب عمل أساسي. السياسات الهجينة والتعاون غير المتزامن وقياس النتائج أصبحت شائعة.",
        "الفرق الناجحة عن بُعد تعتمد على توثيق واضح واجتماعات أقل ومواعيد متابعة منتظمة، مع تنظيم الأسبوع حول فترات تركيز عميق.",
        "مساحات العمل المشتركة تسد الفجوة بإنترنت قوي وتجهيزات مريحة ومجتمع داعم يجعل العمل عن بُعد أكثر استدامة.",
      ],
    },
  },
  {
    cat: { en: "Productivity", ar: "الإنتاجية" },
    title: { en: "Productivity Habits That Actually Work", ar: "عادات إنتاجية فعّالة حقًا" },
    date: { en: "Jan 12, 2026", ar: "12 يناير 2026" },
    read: { en: "5 min read", ar: "قراءة 5 دقائق" },
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80",
    body: {
      en: [
        "Start with small, measurable goals. A short list you can finish beats a long list you won't.",
        "Protect two deep-focus blocks each day and keep shallow tasks for a dedicated window.",
        "Review your week every Friday: keep what worked, remove what didn’t, and plan the next steps.",
      ],
      ar: [
        "ابدأ بأهداف صغيرة قابلة للقياس. قائمة قصيرة تُنجزها أفضل من قائمة طويلة لا تنتهي.",
        "احمِ فترتين للعمل العميق يوميًا، واجعل المهام السريعة في وقت محدد لها.",
        "راجع أسبوعك كل يوم جمعة: احتفظ بما نجح، وتخلّص مما لم ينفع، وحدد خطوات الأسبوع القادم.",
      ],
    },
  },
  {
    cat: { en: "Entrepreneurship", ar: "ريادة الأعمال" },
    title: { en: "Building a Startup in Egypt: A Practical Guide", ar: "تأسيس شركة ناشئة في مصر: دليل عملي" },
    date: { en: "Jan 06, 2026", ar: "6 يناير 2026" },
    read: { en: "7 min read", ar: "قراءة 7 دقائق" },
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
    body: {
      en: [
        "Start with a real problem and validate fast. Talk to customers before building anything complex.",
        "Keep your first version lean: one core feature, a clear price, and a simple onboarding flow.",
        "Leverage local communities, coworking hubs, and events to find mentors, early users, and partners.",
      ],
      ar: [
        "ابدأ بمشكلة حقيقية وتحقق منها بسرعة. تحدّث مع العملاء قبل بناء أي شيء معقّد.",
        "اجعل النسخة الأولى بسيطة: ميزة واحدة أساسية، سعر واضح، وتجربة استخدام سهلة.",
        "استفد من المجتمعات المحلية ومساحات العمل والفعاليات للعثور على مرشدين ومستخدمين مبكرين وشركاء.",
      ],
    },
  },
];

export const events = [
  {
    type: { en: "Workshop", ar: "ورشة" },
    title: { en: "Networking Workshop", ar: "ورشة التواصل المهني" },
    date: { en: "March 12, 2026", ar: "12 مارس 2026" },
    time: { en: "6:00 PM - 8:00 PM", ar: "6:00 - 8:00 مساءً" },
    tone: "primary",
    desc: {
      en: "Connect with fellow professionals and learn effective networking strategies.",
      ar: "تواصل مع محترفين وتعلّم استراتيجيات تواصل فعّالة.",
    },
  },
  {
    type: { en: "Pitch Night", ar: "عرض مشاريع" },
    title: { en: "Startup Pitch Night", ar: "ليلة عرض الشركات الناشئة" },
    date: { en: "April 3, 2026", ar: "3 أبريل 2026" },
    time: { en: "5:00 PM - 8:00 PM", ar: "5:00 - 8:00 مساءً" },
    tone: "purple",
    desc: {
      en: "Present your startup ideas to mentors, investors, and peers.",
      ar: "اعرض أفكارك أمام مرشدين ومستثمرين وزملاء.",
    },
  },
  {
    type: { en: "Meetup", ar: "لقاء" },
    title: { en: "Coffee & Code", ar: "قهوة وكود" },
    date: { en: "Every Thursday", ar: "كل خميس" },
    time: { en: "4:00 PM - 6:00 PM", ar: "4:00 - 6:00 مساءً" },
    tone: "warning",
    desc: {
      en: "Weekly casual meetup for developers to share knowledge and collaborate.",
      ar: "لقاء أسبوعي للمطورين لمشاركة المعرفة والتعاون.",
    },
  },
  {
    type: { en: "Masterclass", ar: "ماستر كلاس" },
    title: { en: "Digital Marketing Masterclass", ar: "ماستر كلاس التسويق الرقمي" },
    date: { en: "May 8, 2026", ar: "8 مايو 2026" },
    time: { en: "10:00 AM - 1:00 PM", ar: "10:00 ص - 1:00 م" },
    tone: "success",
    desc: {
      en: "Learn the latest marketing trends and practical growth tactics.",
      ar: "تعلّم أحدث الاتجاهات وخطط النمو العملية.",
    },
  },
];

export const testimonials = [
  {
    name: { en: "Ahmed Hassan", ar: "أحمد حسن" },
    role: { en: "Freelance Developer", ar: "مطور مستقل" },
    msg: {
      en: "Skild Share boosted my productivity. Perfect focused atmosphere.",
      ar: "المكان زوّد إنتاجيتي جدًا وجو التركيز ممتاز.",
    },
    stars: 5,
  },
  {
    name: { en: "Sara Mohamed", ar: "سارة محمد" },
    role: { en: "Marketing Consultant", ar: "استشارية تسويق" },
    msg: {
      en: "Flexible packages and great meeting rooms.",
      ar: "الباقات مرنة وقاعات الاجتماعات ممتازة.",
    },
    stars: 5,
  },
  {
    name: { en: "Omar Ali", ar: "عمر علي" },
    role: { en: "Startup Founder", ar: "مؤسس شركة ناشئة" },
    msg: {
      en: "Amazing networking opportunities. Found partners here.",
      ar: "فرص تواصل رائعة وقدرت ألاقي شركاء هنا.",
    },
    stars: 5,
  },
  {
    name: { en: "Nada Ibrahim", ar: "ندى إبراهيم" },
    role: { en: "Graphic Designer", ar: "مصممة جرافيك" },
    msg: {
      en: "Modern facilities and a creative vibe.",
      ar: "تجهيزات حديثة وجو إبداعي جميل.",
    },
    stars: 5,
  },
  {
    name: { en: "Karim Farouk", ar: "كريم فاروق" },
    role: { en: "Remote Employee", ar: "موظف عن بُعد" },
    msg: {
      en: "Fast internet and comfortable seating.",
      ar: "إنترنت سريع وكراسي مريحة جدًا.",
    },
    stars: 5,
  },
  {
    name: { en: "Yasmin Tarek", ar: "ياسمين طارق" },
    role: { en: "Content Creator", ar: "صانعة محتوى" },
    msg: {
      en: "The studio is fantastic for content creation.",
      ar: "الاستوديو ممتاز لصناعة المحتوى.",
    },
    stars: 5,
  },
];
