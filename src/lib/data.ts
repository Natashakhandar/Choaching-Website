// ============================================
// Quantum Academy — Centralized Content Data
// ============================================

import {
  BookOpen,
  Monitor,
  ClipboardCheck,
  BrainCircuit,
  MessageCircleQuestion,
  Users,
  type LucideIcon,
} from "lucide-react";

// ── Types ──────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Course {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
  popular?: boolean;
  accent: string;
}

export interface FacultyMember {
  name: string;
  subject: string;
  qualification: string;
  experience: string;
  image: string;
  bio: string;
}

export interface StudentResult {
  name: string;
  exam: string;
  rank: string;
  percentile: string;
  image: string;
  year: string;
}

export interface Testimonial {
  name: string;
  course: string;
  review: string;
  rating: number;
  image: string;
  year: string;
}

export interface AdmissionStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

// ── Navigation ─────────────────────────────────

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Courses", href: "#courses" },
  { label: "Faculty", href: "#faculty" },
  { label: "Results", href: "#results" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

// ── Hero Statistics ────────────────────────────

export const heroStats: Stat[] = [
  { value: 5000, suffix: "+", label: "Students Enrolled" },
  { value: 250, suffix: "+", label: "Top Selections" },
  { value: 95, suffix: "%", label: "Success Rate" },
];

// ── Features ───────────────────────────────────

export const features: Feature[] = [
  {
    icon: BookOpen,
    title: "Expert Faculty",
    description:
      "Learn from IIT & NIT alumni with 10+ years of teaching experience. Our faculty members have mentored thousands of rank holders across JEE, NEET and board exams.",
  },
  {
    icon: Monitor,
    title: "Smart Classrooms",
    description:
      "Experience learning in tech-enabled classrooms with interactive whiteboards, 4K projectors, and real-time doubt resolution systems for immersive education.",
  },
  {
    icon: ClipboardCheck,
    title: "Daily Tests",
    description:
      "Stay exam-ready with daily chapter tests, weekly full-length mocks, and monthly grand tests designed to mirror actual exam patterns with instant analytics.",
  },
  {
    icon: BrainCircuit,
    title: "AI Performance Tracking",
    description:
      "Our proprietary AI engine analyzes your performance across 200+ metrics, identifies weak areas, and creates personalized improvement plans updated in real time.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Doubt Sessions",
    description:
      "Never leave a doubt unresolved. Access unlimited one-on-one doubt sessions with subject experts available 7 days a week, both online and offline.",
  },
  {
    icon: Users,
    title: "Parent Dashboard",
    description:
      "Keep parents in the loop with a dedicated dashboard showing attendance, test scores, progress reports, and direct communication with faculty members.",
  },
];

// ── Courses ────────────────────────────────────

export const courses: Course[] = [
  {
    name: "JEE Main + Advanced",
    tagline: "For IIT Aspirants",
    description:
      "Comprehensive 2-year program designed to crack JEE Main & Advanced with a structured curriculum covering Physics, Chemistry, and Mathematics at the deepest level.",
    features: [
      "Complete PCM syllabus coverage",
      "500+ hours of live lectures",
      "Weekly full-length mock tests",
      "Personal mentor assignment",
      "Previous year paper analysis",
      "Rank improvement workshops",
    ],
    price: "₹1,20,000/year",
    duration: "2 Years",
    accent: "from-blue-500 to-blue-700",
  },
  {
    name: "NEET UG",
    tagline: "For Medical Aspirants",
    description:
      "Result-oriented program for NEET aspirants covering Physics, Chemistry, and Biology with NCERT-focused teaching and extensive practice through 10,000+ MCQs.",
    features: [
      "Complete PCB syllabus coverage",
      "NCERT line-by-line analysis",
      "Daily biology practice sets",
      "Anatomy & physiology labs",
      "AIIMS & JIPMER prep included",
      "Hospital visit exposure",
    ],
    price: "₹1,10,000/year",
    duration: "2 Years",
    popular: true,
    accent: "from-emerald-500 to-emerald-700",
  },
  {
    name: "Class 11–12 Boards",
    tagline: "Board Exam Excellence",
    description:
      "Ace your HSC/CBSE board exams with focused preparation. Perfect for students targeting 90%+ in boards alongside competitive exam preparation.",
    features: [
      "CBSE & State Board coverage",
      "Chapter-wise test series",
      "Practical exam preparation",
      "Sample paper solving",
      "Board exam writing techniques",
      "Last 10 years paper practice",
    ],
    price: "₹75,000/year",
    duration: "1 Year",
    accent: "from-violet-500 to-violet-700",
  },
  {
    name: "Foundation (8–10)",
    tagline: "Build Strong Basics",
    description:
      "Start early and build an unshakable foundation in Science and Mathematics. Designed for students in Class 8–10 preparing for future competitive exams.",
    features: [
      "Olympiad preparation",
      "NTSE & KVPY coaching",
      "Conceptual clarity focus",
      "Fun science experiments",
      "Mental ability training",
      "Scholarship test prep",
    ],
    price: "₹55,000/year",
    duration: "1–3 Years",
    accent: "from-amber-500 to-amber-700",
  },
  {
    name: "Scholarship Batch",
    tagline: "Merit-Based Free Seat",
    description:
      "Up to 100% scholarship for meritorious students. Appear for the Quantum Scholarship Test (QST) and earn your seat based on talent, not finances.",
    features: [
      "Up to 100% fee waiver",
      "Top faculty access",
      "Free study material",
      "Mentorship program",
      "Hostel fee concession",
      "Cash prizes for toppers",
    ],
    price: "Merit Based",
    duration: "Varies",
    accent: "from-rose-500 to-rose-700",
  },
];

// ── Faculty ────────────────────────────────────

export const faculty: FacultyMember[] = [
  {
    name: "Dr. Rajesh Sharma",
    subject: "Physics",
    qualification: "Ph.D. IIT Bombay",
    experience: "15+ Years",
    image: "/images/faculty_1.png",
    bio: "Former senior researcher at ISRO. Known for making complex mechanics and electrodynamics concepts intuitive with real-world analogies.",
  },
  {
    name: "Prof. Ananya Deshmukh",
    subject: "Chemistry",
    qualification: "M.Sc. IIT Delhi, NET",
    experience: "12+ Years",
    image: "/images/faculty_2.png",
    bio: "Specialist in Organic Chemistry with a track record of 50+ students securing under AIR 1000 in JEE Advanced.",
  },
  {
    name: "Dr. Vikram Kulkarni",
    subject: "Mathematics",
    qualification: "Ph.D. IISc Bangalore",
    experience: "18+ Years",
    image: "/images/faculty_3.png",
    bio: "Author of 3 bestselling math textbooks. His problem-solving techniques are legendary among JEE aspirants across Maharashtra.",
  },
  {
    name: "Dr. Priya Nair",
    subject: "Biology",
    qualification: "MBBS, M.D. AIIMS Delhi",
    experience: "10+ Years",
    image: "/images/faculty_4.png",
    bio: "Practising doctor turned educator. Makes NEET Biology preparation engaging with clinical case studies and 3D anatomy models.",
  },
];

// ── Student Results ────────────────────────────

export const studentResults: StudentResult[] = [
  {
    name: "Arjun Mehta",
    exam: "JEE Advanced 2025",
    rank: "AIR 47",
    percentile: "99.97%",
    image: "/images/student_1.png",
    year: "2025",
  },
  {
    name: "Sneha Patil",
    exam: "NEET UG 2025",
    rank: "AIR 112",
    percentile: "99.92%",
    image: "/images/student_2.png",
    year: "2025",
  },
  {
    name: "Rohan Joshi",
    exam: "JEE Main 2025",
    rank: "AIR 23",
    percentile: "99.99%",
    image: "/images/student_3.png",
    year: "2025",
  },
  {
    name: "Kavya Desai",
    exam: "NEET UG 2025",
    rank: "AIR 89",
    percentile: "99.95%",
    image: "/images/student_4.png",
    year: "2025",
  },
  {
    name: "Aditya Sawant",
    exam: "MHT-CET 2025",
    rank: "AIR 5",
    percentile: "99.99%",
    image: "/images/student_5.png",
    year: "2025",
  },
];

// ── Testimonials ───────────────────────────────

export const testimonials: Testimonial[] = [
  {
    name: "Arjun Mehta",
    course: "JEE Advanced",
    review:
      "Quantum Academy transformed my preparation completely. The structured approach, daily tests, and personal mentorship from Dr. Sharma helped me crack JEE Advanced with AIR 47. The AI tracking tool was a game-changer — it pinpointed exactly where I needed to improve.",
    rating: 5,
    image: "/images/student_1.png",
    year: "2025",
  },
  {
    name: "Sneha Patil",
    course: "NEET UG",
    review:
      "I joined Quantum Academy in Class 11 with no idea how competitive NEET actually is. Dr. Priya ma'am made Biology so interesting that it became my strongest subject. The doubt sessions saved me countless times during revision. I'm now studying at AIIMS Delhi!",
    rating: 5,
    image: "/images/student_2.png",
    year: "2025",
  },
  {
    name: "Rohan Joshi",
    course: "JEE Main",
    review:
      "The faculty at Quantum Academy is world-class. Dr. Kulkarni sir's math shortcuts helped me solve problems 3x faster. The mock tests were harder than the actual exam, which meant JEE Main felt surprisingly easy. Secured AIR 23!",
    rating: 5,
    image: "/images/student_3.png",
    year: "2025",
  },
  {
    name: "Kavya Desai",
    course: "NEET UG",
    review:
      "Coming from a small town, I was nervous about competing with city students. But Quantum Academy gave me everything I needed — great teachers, a supportive environment, and regular tests that built my confidence. My parents are so proud!",
    rating: 5,
    image: "/images/student_4.png",
    year: "2025",
  },
  {
    name: "Aditya Sawant",
    course: "MHT-CET",
    review:
      "I was preparing for both JEE and MHT-CET, and the faculty ensured I didn't have to choose. The integrated approach covered everything. I topped MHT-CET with AIR 5 and also got a great JEE score. Best institute in Maharashtra, hands down!",
    rating: 5,
    image: "/images/student_5.png",
    year: "2025",
  },
];

// ── Admission Process ──────────────────────────

export const admissionSteps: AdmissionStep[] = [
  {
    step: 1,
    title: "Register Online",
    description:
      "Fill out the online registration form with your basic details, academic history, and preferred course. It takes less than 5 minutes.",
  },
  {
    step: 2,
    title: "Free Counseling Session",
    description:
      "Attend a one-on-one counseling session with our academic advisors. We'll understand your goals and recommend the best program for you.",
  },
  {
    step: 3,
    title: "Scholarship Test",
    description:
      "Appear for the Quantum Scholarship Test (QST) to assess your current level and unlock scholarship benefits of up to 100%.",
  },
  {
    step: 4,
    title: "Confirm Admission",
    description:
      "Complete the enrollment process, access your study portal, and begin your journey towards academic excellence at Quantum Academy.",
  },
];

// ── FAQ ────────────────────────────────────────

export const faqItems: FAQItem[] = [
  {
    question: "What courses does Quantum Academy offer?",
    answer:
      "We offer comprehensive programs for JEE Main & Advanced, NEET UG, MHT-CET, Class 11-12 Board Exams, and Foundation courses for Class 8-10. We also have special scholarship batches for meritorious students.",
  },
  {
    question: "What is the admission process?",
    answer:
      "The process is simple: Register online, attend a free counseling session, take the Quantum Scholarship Test (QST), and confirm your admission. The entire process can be completed within a week.",
  },
  {
    question: "Are scholarships available?",
    answer:
      "Yes! We offer scholarships of up to 100% through the Quantum Scholarship Test (QST). Scholarships are merit-based and available for all courses. Students from economically weaker sections can also apply for additional fee concessions.",
  },
  {
    question: "What are the class timings?",
    answer:
      "Regular batches run from 7:00 AM to 1:00 PM or 2:00 PM to 8:00 PM. Weekend batches are available for Class 11-12 students. Foundation course classes are scheduled after school hours from 4:00 PM to 7:00 PM.",
  },
  {
    question: "Do you provide study materials?",
    answer:
      "Yes, we provide comprehensive printed study materials, formula sheets, practice workbooks, and previous year papers. Students also get access to our digital learning portal with video lectures and practice tests.",
  },
  {
    question: "Is hostel facility available?",
    answer:
      "Yes, we have separate hostel facilities for boys and girls within our campus. The hostels are fully furnished with AC rooms, mess facility, 24/7 security, and Wi-Fi. Hostel fee is ₹8,000/month inclusive of meals.",
  },
  {
    question: "What is the student-teacher ratio?",
    answer:
      "We maintain a student-teacher ratio of 30:1 in regular batches. For scholarship and advanced batches, the ratio is even better at 20:1, ensuring personalized attention for every student.",
  },
  {
    question: "Can I switch between batches?",
    answer:
      "Yes, batch transfers are allowed within the first month of enrollment based on availability. If you're finding a batch too easy or too difficult, our counselors will help you find the right fit.",
  },
];

// ── Gallery ────────────────────────────────────

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery_classroom.png",
    alt: "Modern smart classroom at Quantum Academy",
    category: "Infrastructure",
  },
  {
    src: "/images/gallery_lab.png",
    alt: "Well-equipped science laboratory",
    category: "Infrastructure",
  },
  {
    src: "/images/gallery_library.png",
    alt: "Spacious library and study hall",
    category: "Infrastructure",
  },
  {
    src: "/images/gallery_event.png",
    alt: "Annual awards ceremony",
    category: "Events",
  },
  {
    src: "/images/gallery_campus.png",
    alt: "Quantum Academy campus",
    category: "Campus",
  },
  {
    src: "/images/gallery_sports.png",
    alt: "Sports and recreation facilities",
    category: "Campus",
  },
];

// ── Contact Info ───────────────────────────────

export const contactInfo = {
  phone: "+91 98765 43210",
  email: "admissions@quantumacademy.in",
  address: "Quantum Tower, FC Road, Shivajinagar, Pune, Maharashtra 411005",
  whatsapp: "919876543210",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.204!2d73.8401!3d18.5196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEwLjYiTiA3M8KwNTAnMjQuNCJF!5e0!3m2!1sen!2sin!4v1",
  socialLinks: {
    facebook: "https://facebook.com/quantumacademy",
    instagram: "https://instagram.com/quantumacademy",
    youtube: "https://youtube.com/quantumacademy",
    linkedin: "https://linkedin.com/company/quantumacademy",
    twitter: "https://twitter.com/quantumacademy",
  },
};
