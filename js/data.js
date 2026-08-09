/* ========================================
   Kenven Service - Services Data
   Sample Services with Full Details
======================================== */

const SERVICES_DATA = [
    {
        id: 1,
        category: { en: 'Web Design', ar: 'تصميم ويب' },
        title: { en: 'Professional Website Design', ar: 'تصميم مواقع احترافية' },
        shortDesc: {
            en: 'Modern, responsive websites that convert visitors into customers',
            ar: 'مواقع عصرية ومتجاوبة تحوّل الزوار إلى عملاء'
        },
        fullDesc: {
            en: 'We create stunning, high-performance websites tailored to your brand. Our designs are mobile-first, SEO-optimized, and built to deliver exceptional user experiences that drive real business results. From landing pages to complex e-commerce platforms, we handle it all with precision and creativity.',
            ar: 'نصمم مواقع مذهلة وعالية الأداء مخصصة لعلامتك التجارية. تصاميمنا متجاوبة مع الجوال أولاً، محسنة لمحركات البحث، ومبنية لتقديم تجارب مستخدم استثنائية تحقق نتائج حقيقية لأعمالك. من صفحات الهبوط إلى منصات التجارة الإلكترونية المعقدة، نتولى كل شيء بدقة وإبداع.'
        },
        price: 299,
        oldPrice: 499,
        currency: 'USD',
        duration: { en: '7-14 days', ar: '7-14 يوم' },
        image: 'https://picsum.photos/600/400?random=1',
        featured: true,
        popular: true,
        features: {
            en: [
                'Responsive Design (Mobile, Tablet, Desktop)',
                'SEO Optimization',
                'Fast Loading Speed (< 2s)',
                'Cross-Browser Compatibility',
                'Contact Form Integration',
                'Social Media Links',
                'Google Analytics Setup',
                '3 Months Free Support'
            ],
            ar: [
                'تصميم متجاوب (جوال، تابلت، كمبيوتر)',
                'تحسين محركات البحث SEO',
                'سرعة تحميل فائقة (أقل من 2 ثانية)',
                'توافق مع جميع المتصفحات',
                'دمج نموذج التواصل',
                'روابط السوشيال ميديا',
                'إعداد Google Analytics',
                '3 أشهر دعم فني مجاني'
            ]
        },
        gallery: [
            'https://picsum.photos/800/600?random=21',
            'https://picsum.photos/800/600?random=22',
            'https://picsum.photos/800/600?random=23'
        ]
    },
    {
        id: 2,
        category: { en: 'Branding', ar: 'هوية بصرية' },
        title: { en: 'Complete Brand Identity Package', ar: 'باقة الهوية البصرية الكاملة' },
        shortDesc: {
            en: 'Professional logo design and complete brand guidelines',
            ar: 'تصميم شعار احترافي ودليل هوية بصرية كامل'
        },
        fullDesc: {
            en: 'Build a memorable brand with our comprehensive identity package. We design unique logos, choose perfect color palettes, select typography, and create complete brand guidelines that ensure consistency across all your marketing materials. Stand out from the competition with a brand that tells your story.',
            ar: 'ابنِ علامة تجارية لا تُنسى مع باقة الهوية الشاملة. نصمم شعارات فريدة، نختار لوحات ألوان مثالية، نختار الخطوط، وننشئ دليل هوية كامل يضمن التناسق عبر جميع موادك التسويقية. تميّز عن المنافسين بعلامة تجارية تروي قصتك.'
        },
        price: 199,
        oldPrice: 349,
        currency: 'USD',
        duration: { en: '5-10 days', ar: '5-10 أيام' },
        image: 'https://picsum.photos/600/400?random=2',
        featured: true,
        popular: false,
        features: {
            en: [
                '3 Unique Logo Concepts',
                'Unlimited Revisions',
                'Color Palette Selection',
                'Typography Guidelines',
                'Business Card Design',
                'Letterhead Design',
                'Brand Style Guide (PDF)',
                'All Source Files (AI, PSD, PNG, SVG)'
            ],
            ar: [
                '3 مفاهيم شعار فريدة',
                'تعديلات غير محدودة',
                'اختيار لوحة الألوان',
                'دليل الخطوط',
                'تصميم بطاقة أعمال',
                'تصميم ترويسة رسائل',
                'دليل نمط العلامة (PDF)',
                'جميع الملفات المصدر (AI, PSD, PNG, SVG)'
            ]
        },
        gallery: [
            'https://picsum.photos/800/600?random=24',
            'https://picsum.photos/800/600?random=25',
            'https://picsum.photos/800/600?random=26'
        ]
    },
    {
        id: 3,
        category: { en: 'Development', ar: 'برمجة' },
        title: { en: 'Custom Web Application', ar: 'تطبيق ويب مخصص' },
        shortDesc: {
            en: 'Powerful web applications built with modern technologies',
            ar: 'تطبيقات ويب قوية مبنية بأحدث التقنيات'
        },
        fullDesc: {
            en: 'Transform your business ideas into powerful web applications. We develop custom solutions using cutting-edge technologies like React, Node.js, and modern databases. From simple tools to complex enterprise systems, our applications are scalable, secure, and built to grow with your business.',
            ar: 'حوّل أفكار عملك إلى تطبيقات ويب قوية. نطوّر حلولاً مخصصة باستخدام أحدث التقنيات مثل React و Node.js وقواعد البيانات الحديثة. من الأدوات البسيطة إلى أنظمة المؤسسات المعقدة، تطبيقاتنا قابلة للتوسع وآمنة ومبنية لتنمو مع عملك.'
        },
        price: 799,
        oldPrice: 1299,
        currency: 'USD',
        duration: { en: '2-4 weeks', ar: '2-4 أسابيع' },
        image: 'https://picsum.photos/600/400?random=3',
        featured: false,
        popular: true,
        features: {
            en: [
                'Custom Frontend Development',
                'Backend API Development',
                'Database Design & Setup',
                'User Authentication System',
                'Admin Dashboard',
                'Payment Integration',
                'Cloud Deployment',
                '6 Months Free Support'
            ],
            ar: [
                'تطوير واجهة أمامية مخصصة',
                'تطوير واجهة برمجية خلفية',
                'تصميم وإعداد قاعدة البيانات',
                'نظام مصادقة المستخدمين',
                'لوحة تحكم المدير',
                'دمج نظام الدفع',
                'النشر على السحابة',
                '6 أشهر دعم فني مجاني'
            ]
        },
        gallery: [
            'https://picsum.photos/800/600?random=27',
            'https://picsum.photos/800/600?random=28',
            'https://picsum.photos/800/600?random=29'
        ]
    },
    {
        id: 4,
        category: { en: 'Marketing', ar: 'تسويق' },
        title: { en: 'Social Media Management', ar: 'إدارة السوشيال ميديا' },
        shortDesc: {
            en: 'Complete social media strategy and content management',
            ar: 'استراتيجية سوشيال ميديا كاملة وإدارة المحتوى'
        },
        fullDesc: {
            en: 'Grow your online presence with our comprehensive social media management service. We create engaging content, manage your accounts, run targeted ad campaigns, and provide detailed analytics reports. Let us handle your social media while you focus on running your business.',
            ar: 'طوّر حضورك الرقمي مع خدمتنا الشاملة لإدارة السوشيال ميديا. ننشئ محتوى جذاباً، ندير حساباتك، نشغل حملات إعلانية مستهدفة، ونقدم تقارير تحليلية مفصلة. دعنا نتولى سوشيال ميديا الخاصة بك بينما تركز على إدارة عملك.'
        },
        price: 149,
        oldPrice: 249,
        currency: 'USD',
        duration: { en: 'Monthly', ar: 'شهرياً' },
        image: 'https://picsum.photos/600/400?random=4',
        featured: false,
        popular: false,
        features: {
            en: [
                '30 Custom Posts Per Month',
                'Content Strategy Planning',
                'Hashtag Research & Optimization',
                'Community Management',
                'Stories & Reels Creation',
                'Monthly Analytics Report',
                'Competitor Analysis',
                'Ad Campaign Management (Budget extra)'
            ],
            ar: [
                '30 منشور مخصص شهرياً',
                'تخطيط استراتيجية المحتوى',
                'بحث وتحسين الهاشتاقات',
                'إدارة المجتمع',
                'إنشاء القصص والريلز',
                'تقرير تحليلي شهري',
                'تحليل المنافسين',
                'إدارة الحملات الإعلانية (الميزانية إضافية)'
            ]
        },
        gallery: [
            'https://picsum.photos/800/600?random=30',
            'https://picsum.photos/800/600?random=31',
            'https://picsum.photos/800/600?random=32'
        ]
    },
    {
        id: 5,
        category: { en: 'Video', ar: 'فيديو' },
        title: { en: 'Professional Video Editing', ar: 'مونتاج فيديو احترافي' },
        shortDesc: {
            en: 'High-quality video editing for YouTube, ads, and social media',
            ar: 'مونتاج فيديو عالي الجودة لليوتيوب والإعلانات والسوشيال ميديا'
        },
        fullDesc: {
            en: 'Turn your raw footage into cinematic masterpieces. Our expert video editors use professional tools like Premiere Pro and After Effects to create engaging videos that captivate your audience. From color grading to motion graphics, we deliver polished content that elevates your brand.',
            ar: 'حوّل لقطاتك الخام إلى روائع سينمائية. يستخدم محررو الفيديو المحترفون لدينا أدوات احترافية مثل Premiere Pro و After Effects لإنشاء فيديوهات جذابة تأسر جمهورك. من تعديل الألوان إلى الرسوم المتحركة، نقدم محتوى مصقولاً يرتقي بعلامتك التجارية.'
        },
        price: 99,
        oldPrice: 179,
        currency: 'USD',
        duration: { en: '3-5 days', ar: '3-5 أيام' },
        image: 'https://picsum.photos/600/400?random=5',
        featured: false,
        popular: false,
        features: {
            en: [
                'Up to 10 Minutes Final Video',
                'Professional Color Grading',
                'Sound Design & Mixing',
                'Motion Graphics & Titles',
                'Background Music Selection',
                'Subtitles/Captions',
                'Multiple Export Formats',
                '2 Revision Rounds'
            ],
            ar: [
                'فيديو نهائي حتى 10 دقائق',
                'تدرج ألوان احترافي',
                'تصميم ومكساج صوتي',
                'رسوم متحركة وعناوين',
                'اختيار موسيقى خلفية',
                'ترجمات/نصوص فرعية',
                'صيغ تصدير متعددة',
                ' جولتان من التعديلات'
            ]
        },
        gallery: [
            'https://picsum.photos/800/600?random=33',
            'https://picsum.photos/800/600?random=34',
            'https://picsum.photos/800/600?random=35'
        ]
    },
    {
        id: 6,
        category: { en: 'SEO', ar: 'تحسين محركات البحث' },
        title: { en: 'Advanced SEO Optimization', ar: 'تحسين متقدم لمحركات البحث' },
        shortDesc: {
            en: 'Boost your website ranking on Google and drive organic traffic',
            ar: 'ارفع ترتيب موقعك على جوجل واجذب زيارات عضوية'
        },
        fullDesc: {
            en: 'Dominate search engine results with our comprehensive SEO service. We perform in-depth keyword research, optimize your on-page content, build quality backlinks, and fix technical issues. Our data-driven approach ensures sustainable growth in your organic traffic and search rankings.',
            ar: 'تصدّر نتائج محركات البحث مع خدمتنا الشاملة لتحسين محركات البحث. نجري بحثاً متعمقاً للكلمات المفتاحية، نحسّن محتوى صفحاتك، نبني روابط خلفية عالية الجودة، ونصلح المشاكل التقنية. نهجنا المبني على البيانات يضمن نمواً مستداماً في زياراتك العضوية وترتيبك في البحث.'
        },
        price: 249,
        oldPrice: 399,
        currency: 'USD',
        duration: { en: 'Monthly', ar: 'شهرياً' },
        image: 'https://picsum.photos/600/400?random=6',
        featured: true,
        popular: true,
        features: {
            en: [
                'Complete SEO Audit',
                'Keyword Research & Strategy',
                'On-Page Optimization',
                'Technical SEO Fixes',
                'Content Optimization',
                'Backlink Building',
                'Monthly Ranking Reports',
                'Competitor Analysis'
            ],
            ar: [
                'تدقيق SEO كامل',
                'بحث واستراتيجية الكلمات المفتاحية',
                'تحسين الصفحات الداخلية',
                'إصلاحات SEO التقنية',
                'تحسين المحتوى',
                'بناء الروابط الخلفية',
                'تقارير ترتيب شهرية',
                'تحليل المنافسين'
            ]
        },
        gallery: [
            'https://picsum.photos/800/600?random=36',
            'https://picsum.photos/800/600?random=37',
            'https://picsum.photos/800/600?random=38'
        ]
    }
];

// Testimonials Data
const TESTIMONIALS_DATA = [
    {
        name: { en: 'Sarah Johnson', ar: 'سارة جونسون' },
        role: { en: 'CEO, Tech Corp', ar: 'الرئيس التنفيذي، Tech Corp' },
        text: {
            en: 'Working with Kenven Service was an incredible experience. They delivered beyond our expectations and transformed our online presence completely. The attention to detail and creative solutions exceeded what we imagined possible.',
            ar: 'العمل مع Kenven Service كان تجربة مذهلة. قدموا ما يفوق توقعاتنا وحوّلوا حضورنا الرقمي بالكامل. الاهتمام بالتفاصيل والحلول الإبداعية فاقت ما تخيلناه ممكناً.'
        },
        image: 'https://i.pravatar.cc/100?img=11',
        rating: 5
    },
    {
        name: { en: 'Michael Chen', ar: 'مايكل تشن' },
        role: { en: 'Founder, StartupXYZ', ar: 'مؤسس، StartupXYZ' },
        text: {
            en: 'The web application they built for us has been a game-changer. Our productivity increased by 300% and our customers love the intuitive interface. Best investment we made this year!',
            ar: 'تطبيق الويب الذي بنوه لنا كان نقطة تحول. زادت إنتاجيتنا بنسبة 300% وعملاؤنا يحبون الواجهة البديهية. أفضل استثمار قمنا به هذا العام!'
        },
        image: 'https://i.pravatar.cc/100?img=12',
        rating: 5
    },
    {
        name: { en: 'Emma Williams', ar: 'إيما ويليامز' },
        role: { en: 'Marketing Director', ar: 'مديرة التسويق' },
        text: {
            en: 'Their SEO expertise helped us rank #1 for our main keywords in just 3 months. Organic traffic doubled and we are getting quality leads every day. Highly recommended!',
            ar: 'ساعدتنا خبرتهم في SEO على الوصول للمركز الأول لكلماتنا المفتاحية الرئيسية في 3 أشهر فقط. تضاعفت الزيارات العضوية ونحصل على عملاء محتملين ذوي جودة كل يوم. أنصح بهم بشدة!'
        },
        image: 'https://i.pravatar.cc/100?img=23',
        rating: 5
    }
];

// Export data
window.SERVICES_DATA = SERVICES_DATA;
window.TESTIMONIALS_DATA = TESTIMONIALS_DATA;