import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Code,
  GraduationCap,
  PlayCircle,
  Search,
  Star,
  Award,
  MessageSquare,
  ArrowRight,
  Users,
  Globe2,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

// NOTE: This is an educational, non‑commercial UI clone inspired by codingninjas.com.
// It does not include proprietary content, logos, or backend functionality.
// TailwindCSS is assumed to be available by the preview runtime.

const nav = [
  { label: "Courses" },
  { label: "Guided Paths" },
  { label: "Practice" },
  { label: "Events" },
  { label: "Bootcamps" },
  { label: "Community" },
];

const highlights = [
  { icon: GraduationCap, title: "Job‑Focused", text: "Curriculum aligned with industry roles." },
  { icon: PlayCircle, title: "Hands‑On", text: "Code along with projects and challenges." },
  { icon: Users, title: "Mentor Support", text: "1:1 guidance and doubt resolution." },
  { icon: Trophy, title: "Track Progress", text: "Quizzes, leaderboards, certificates." },
];

const courses = [
  {
    title: "Data Structures & Algorithms in C++",
    level: "Beginner to Advanced",
    tag: "Most Popular",
    meta: "120+ hours • 300+ problems",
  },
  {
    title: "Full‑Stack Web Dev (MERN)",
    level: "Beginner to Job‑Ready",
    tag: "Placement‑Ready",
    meta: "20 projects • 6 modules",
  },
  {
    title: "Python with DSA",
    level: "Beginner",
    tag: "Beginner‑Friendly",
    meta: "90+ hours • 200+ problems",
  },
  {
    title: "Machine Learning",
    level: "Intermediate",
    tag: "Hot Skill",
    meta: "15 projects • 8 capstones",
  },
];

const testimonials = [
  {
    name: "Aarav S.",
    role: "SWE @ ProductCo",
    quote:
      "The structured path and constant practice turned interviews from scary to exciting.",
  },
  {
    name: "Ishita K.",
    role: "Frontend Dev @ FinTech",
    quote:
      "Projects were realistic and mentors were quick with feedback—huge confidence boost.",
  },
  {
    name: "Rohan P.",
    role: "Data Scientist @ HealthTech",
    quote: "Clear roadmaps + practice platform = dream combo for switching careers.",
  },
];

const stats = [
  { value: "800K+", label: "Learners" },
  { value: "5K+", label: "Hiring Partners" },
  { value: "4.8/5", label: "Avg Rating" },
  { value: "100%", label: "Project‑Based" },
];

function Header() {
  return (
    <div className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-500 via-amber-400 to-yellow-300 shadow" />
          <span className="font-bold text-xl tracking-tight">Code Ninjas (Clone)</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          {nav.map((n) => (
            <a key={n.label} href="#" className="hover:text-gray-900">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden sm:inline-flex">Log in</Button>
          <Button className="rounded-2xl">Sign up</Button>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            Learn to <span className="text-orange-600">Code</span> with
            job‑ready paths
          </motion.h1>
          <p className="mt-4 text-gray-600 text-lg">
            Master DSA, Web Dev, and ML with structured courses, hands‑on projects,
            and mentor support.
          </p>
          <div className="mt-6 flex items-stretch gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                placeholder="Search courses, topics, jobs…"
                className="w-full pl-10 pr-4 py-3 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <Button className="rounded-2xl px-6">
              Explore <ArrowRight className="ml-2" />
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <Card key={s.label} className="rounded-2xl">
                <CardContent className="py-4">
                  <div className="text-2xl font-extrabold">{s.value}</div>
                  <div className="text-xs text-gray-500">{s.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
            <Star className="w-4 h-4" /> Trusted by learners worldwide
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-tr from-orange-200 via-rose-100 to-amber-200 shadow-inner" />
          <div className="absolute -bottom-6 -left-6 hidden sm:block">
            <Card className="rounded-2xl shadow-lg">
              <CardHeader className="pb-0">
                <CardTitle className="text-sm flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Live Classes
                </CardTitle>
                <CardDescription className="text-xs">
                  Join live, interactive problem‑solving sessions
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2 pb-4 flex items-center gap-3">
                <PlayCircle />
                <div>
                  <div className="text-sm font-semibold">Today, 7:00 PM IST</div>
                  <div className="text-xs text-gray-500">Binary Trees — Hard</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold">Why learn with us</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((h) => (
            <Card key={h.title} className="rounded-2xl">
              <CardContent className="pt-6">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                  <h.icon className="text-orange-600" />
                </div>
                <div className="font-semibold">{h.title}</div>
                <div className="text-sm text-gray-600 mt-1">{h.text}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseCard({ c }) {
  return (
    <Card className="rounded-2xl h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2">
          <Code className="w-4 h-4" /> {c.title}
        </CardTitle>
        <CardDescription>{c.level}</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-gray-600 flex-1">
        {c.meta}
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <span className="text-xs px-2 py-1 rounded-full bg-orange-100 text-orange-700">
          {c.tag}
        </span>
        <Button className="rounded-xl">View</Button>
      </CardFooter>
    </Card>
  );
}

function PopularCourses() {
  return (
    <section className="py-14 bg-gradient-to-b from-white to-orange-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Popular courses</h2>
            <p className="text-gray-600 mt-1">Structured paths with projects and mentorship</p>
          </div>
          <Button variant="ghost" className="rounded-xl">Browse all</Button>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {courses.map((c) => (
            <CourseCard key={c.title} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardContent className="py-8 px-6">
              <div className="flex items-center gap-3">
                <Award />
                <div className="font-semibold">Certificates</div>
              </div>
              <p className="text-gray-600 mt-3 text-sm">
                Earn shareable certificates for each course you complete. Showcase your
                skills on LinkedIn and your resume.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="py-8 px-6">
              <div className="flex items-center gap-3">
                <Globe2 />
                <div className="font-semibold">Global community</div>
              </div>
              <p className="text-gray-600 mt-3 text-sm">
                Join study groups, coding contests, and forums to learn with peers and
                get feedback.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-14 bg-orange-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <MessageSquare />
          <h2 className="text-2xl md:text-3xl font-bold">Learners love it</h2>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <Card key={t.name} className="rounded-2xl">
              <CardContent className="pt-6">
                <p className="text-gray-700">“{t.quote}”</p>
                <div className="mt-4 text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-gray-500">{t.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="rounded-3xl overflow-hidden">
          <CardContent className="p-8 md:p-12 bg-gradient-to-r from-orange-600 to-amber-500">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-white text-2xl md:text-3xl font-extrabold">
                  Start your coding journey today
                </h3>
                <p className="text-orange-50/90 mt-2">
                  Try a free lesson, explore the platform, and choose a path that fits
                  your goals.
                </p>
              </div>
              <div className="flex gap-3 md:justify-end">
                <Button className="bg-white text-orange-700 hover:bg-orange-50 rounded-2xl">
                  Try for free
                </Button>
                <Button variant="secondary" className="rounded-2xl">
                  Talk to an expert
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="font-bold">Code Ninjas (Clone)</div>
            <p className="text-gray-600 mt-2">
              Educational UI clone inspired by Coding Ninjas.
            </p>
          </div>
          <div>
            <div className="font-semibold mb-2">Explore</div>
            <ul className="space-y-1 text-gray-600">
              <li><a href="#">DSA</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Machine Learning</a></li>
              <li><a href="#">Interview Prep</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Resources</div>
            <ul className="space-y-1 text-gray-600">
              <li><a href="#">Practice</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Careers</div>
            <ul className="space-y-1 text-gray-600">
              <li><a href="#">Hiring Partners</a></li>
              <li><a href="#">Become a Mentor</a></li>
              <li><a href="#">Affiliates</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4" /> Rated 4.8/5 by learners
          </div>
          <div className="flex items-center gap-3">
            <span>Terms</span>
            <span>Privacy</span>
            <span>Contact</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function CodingNinjasClone() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <Hero />
      <Highlights />
      <PopularCourses />
      <SocialProof />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
