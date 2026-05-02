export const NAV_LINKS = [
  { name: 'Produk', href: '#produk' },
  { name: 'Tentang', href: '#tentang' },
  { name: 'Manfaat', href: '#manfaat' },
  { name: 'Set-Up', href: '#setup' },
];

export const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.1 } 
    }
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  }
};

export const CORE_VALUES = [
  {
    title: 'Simplicity',
    desc: 'SANTARA dirancang sesederhana mungkin — cukup satu tap tanpa aplikasi tambahan atau proses rumit.',
    icon: '✨', // Kilauan melambangkan kemudahan/kebersihan proses
  },
  {
    title: 'Behavior-Driven',
    desc: 'Fokus utama bukan teknologi, tetapi membangun kebiasaan tidur yang konsisten dan sehat.',
    icon: '🧠', // Otak melambangkan fokus pada perilaku dan kognitif
  },
  {
    title: 'Mindful Living',
    desc: 'Mendorong pengguna untuk lebih sadar dalam mengakhiri hari, bukan sekadar ketiduran karena lelah.',
    icon: '🧘', // Meditasi melambangkan kesadaran (mindfulness)
  },
  {
    title: 'Practical & Accessible',
    desc: 'Menggunakan fitur bawaan smartphone, sehingga mudah digunakan oleh siapa saja.',
    icon: '📱', // Smartphone melambangkan aksesibilitas teknologi
  }
];

export const USER_BENEFITS = [
  {
    title: 'Stop Night Scrolling',
    desc: 'Membantu pengguna berhenti dari kebiasaan scrolling tanpa sadar sebelum tidur.',
    icon: '🚫', // Larangan melambangkan penghentian kebiasaan buruk
  },
  {
    title: 'Kualitas Tidur',
    desc: 'Menciptakan kondisi yang lebih tenang sehingga tidur lebih cepat dan nyenyak.',
    icon: '🌙', // Bulan melambangkan tidur yang nyenyak
  },
  {
    title: 'Bebas Overthinking',
    desc: 'Lingkungan yang lebih tenang membantu pikiran lebih rileks sebelum tidur.',
    icon: '🍃', // Daun berguguran melambangkan pikiran yang rileks/lepas
  },
  {
    title: 'Rutinitas Sehat',
    desc: 'Membantu pengguna memiliki pola tidur yang lebih konsisten setiap hari.',
    icon: '🔄', // Panah berputar melambangkan rutinitas/siklus
  },
  {
    title: 'Kontrol Distraksi',
    desc: 'Mengurangi notifikasi dan gangguan dari smartphone di waktu istirahat.',
    icon: '🔕', // Lonceng coret melambangkan bebas gangguan/silent
  }
];


// Bagian 1: Langkah Umum
export const STEPS = [
  {
    id: '01',
    title: 'Tempel Stiker',
    desc: 'Tempelkan stiker NFC Santara di tempat yang mudah dijangkau, seperti meja samping tempat tidur.'
  },
  {
    id: '02',
    title: 'Dekatkan HP (Tap)',
    desc: 'Cukup tempelkan bagian belakang smartphone kamu ke stiker saat kamu sudah siap untuk beristirahat.'
  },
  {
    id: '03',
    title: 'Nikmati Tidurmu',
    desc: 'Santara secara otomatis mengaktifkan mode jangan ganggu, meredupkan layar, dan memutar musik tidur.'
  }
]; // Ada tutup kurung dan titik koma di sini

// Bagian 2: Langkah Spesifik Perangkat (Gunakan Objek Baru)
export const SETUP_DETAILS = {
  android: [
    { step: "1", text: "Download aplikasi 'NFC Tools' di Play Store." },
    { step: "2", text: "Buka tab 'Write' dan pilih 'Add a record'." },
    { step: "3", text: "Pilih tugas yang diinginkan (Contoh: Mode Jangan Ganggu)." },
    { step: "4", text: "Klik 'Write' lalu tempelkan HP ke stiker Santara." }
  ],
  iphone: [
    { step: "1", text: "Buka aplikasi 'Shortcuts' (Pintasan) bawaan iOS." },
    { step: "2", text: "Pilih tab 'Automation' lalu klik 'Create Personal Automation'." },
    { step: "3", text: "Cari 'NFC' dan scan stiker Santara kamu." },
    { step: "4", text: "Tambahkan aksi seperti 'Set Focus' atau 'Brightness'." }
  ]
};

export const NFC_PRODUCTS = [
  {
    id: 1,
    name: 'Santara NFC Classic',
    images: ['/santara-lamp.jpeg', '/santara-detail1.jpeg', '/santara-detail2.jpeg'], 
    type: 'Limited Edition',
    price: 'Rp 59.000'
  },
  {
    id: 2,
    name: 'Santara NFC Midnight',
    images: ['/santara-card.jpeg', '/santara-card-back.jpeg', '/santara-card-side.jpeg'],
    type: 'Katalog Produk',
    price: 'Rp 59.000'
  },
  {
    id: 3,
    name: 'Santara NFC Custom',
    images: ['/santara3.jpeg', '/santara-custom1.jpeg', '/santara-custom2.jpeg'],
    type: 'Kustomisasi Produk',
    price: 'Rp 59.000'
  },
  {
    id: 4,
    name: 'Santara NFC Pro Edition',
    images: ['/santara-card.jpeg', '/santara-pro-detail.jpeg'], 
    type: 'Premium Series',
    price: 'Rp 59.000'
  }
];

export const SANTARA_EVENTS = [
  {
    id: 1,
    title: 'Santara Launching Promo',
    date: 'Mei 2026',
    desc: 'Dapatkan diskon khusus untuk 100 pembeli pertama melalui website.',
    status: 'Upcoming'
  },
  {
    id: 2,
    title: 'Sleep Tech Exhibition',
    date: 'Juli 2026',
    desc: 'Kunjungi booth kami di Trans Studio Mall Bali.',
    status: 'Coming Soon'
  }
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Lutfi prasetyo",
    role: "CEO",
    tagline: "Turning simple ideas into meaningful impact",
    image: "/CEO.png", // Sesuaikan path gambar
  },
  {
    id: 2,
    name: "I kadek Deana Putra",
    role: "Hipster",
    tagline: "GCreating experiences that people connect with",
    image: "/Hipster1.png",
  },
  {
    id: 3,
    name: "Heri Dameanto Marbun",
    role: "Hacker",
    tagline: "Turning ideas into working products",
    image: "/Hacker.png",
  },
  {
    id: 4,
    name: "Farrel Nazwa Diaz Ersyad",
    role: "Hipster",
    tagline: "Design that connects",
    image: "/Hipster2.png",
  },
  {
    id: 5,
    name: "Ketut Teddy Jandrawena.",
    role: "Hustler",
    tagline: "Turning attention into traction",
    image: "/Huslter.png",
  },
];


