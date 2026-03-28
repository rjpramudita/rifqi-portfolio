// React core import + hooks for state and memoized values
import React, { useMemo, useState } from "react";

// Framer Motion is used for simple entrance animations
import { motion } from "framer-motion";

// Icon set used across the UI
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  ChevronDown,
  ChevronRight,
  Languages,
  LayoutDashboard,
  Linkedin,
  Mail,
  MapPin,
  Minus,
  Plus,
  Settings2,
  Workflow,
  Wrench,
  X,
} from "lucide-react";

const cvPath = "/rifqi-cv.pdf";
const linkedInUrl = "https://www.linkedin.com/in/rifqijalu";
const emailAddress = "rifqijalu@gmail.com";

type Lang = "en" | "id";

type StrengthItem = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
};

type ProjectItem = {
  title: string;
  summary: string;
  problem: string;
  did: string[];
  outcome: string;
  tags: string[];
  mainImage: string;
  sideImages: string[];
};

type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  text: string;
};

type HighlightItem = {
  title: string;
  text: string;
};

type CopyShape = {
  nav: {
    about: string;
    work: string;
    experience: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    labels: string[];
    cardTitle: string;
    cardBody: string;
    cardPoints: string[];
  };
  about: {
    title: string;
    heading: string;
    body: string;
  };
  strengths: {
    title: string;
    items: StrengthItem[];
  };
  work: {
    title: string;
    subtitle: string;
    projects: ProjectItem[];
  };
  how: {
    title: string;
    subtitle: string;
    steps: [string, string, string][];
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  highlights: {
    title: string;
    items: HighlightItem[];
  };
  contact: {
    title: string;
    body: string;
    info: [string, string][];
  };
};

const images = {
  appsheetMain: "/images/projects/appsheet-schedule.jpg",
  appsheetAttendance: "/images/projects/appsheet-attendance.png",
  appsheetHome: "/images/projects/appsheet-home.jpg",
  dashboardMain: "/images/projects/dashboard-main.png",
  dashboardConversion: "/images/projects/dashboard-conversion.png",
  dashboardDailyOps: "/images/projects/dashboard-daily-ops.png",
  project3Output1: "/images/projects/project3-output-1.png",
  project3Output2: "/images/projects/project3-output-2.png",
  project3FlowDetail: "/images/projects/project3-flow-detail.jpeg"
};

const copy: Record<Lang, CopyShape> = {
  en: {
    nav: {
      about: "About",
      work: "Work",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      title: "Building clearer operations through data, dashboards, and systems.",
      subtitle:
        "I work across operations, analytics, and internal tools to make complex processes easier to track, manage, and improve.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Download CV",
      labels: ["Operational Analysis", "Dashboard & Reporting", "Workflow Design"],
      cardTitle: "Current Focus",
      cardBody:
        "Operations × Analytics × Internal Systems. I build structure where workflows are still scattered, manual, or hard to monitor.",
      cardPoints: ["Field operations", "Operational visibility", "Internal workflow systems"],
    },
    about: {
      title: "About",
      heading: "I work at the intersection of operations, analytics, and internal tools.",
      body:
        "My experience is shaped by real operational environments where visibility, coordination, and execution matter every day. I enjoy turning scattered workflows into clearer structures through dashboards, reporting, and system design. Rather than treating data as an output alone, I see it as a foundation for better processes and better decisions.",
    },
    strengths: {
      title: "Core Strengths",
      items: [
        {
          icon: BarChart3,
          title: "Operational Analysis",
          text: "Understanding how work actually happens on the ground, identifying friction points, and turning complexity into something more visible and manageable.",
        },
        {
          icon: LayoutDashboard,
          title: "Dashboard & Reporting",
          text: "Structuring data into clearer reporting flows and dashboards that support monitoring, coordination, and day-to-day decisions.",
        },
        {
          icon: Workflow,
          title: "Workflow / Internal System Design",
          text: "Designing workflows and internal tools that make processes easier to follow, track, and execute more consistently.",
        },
        {
          icon: Settings2,
          title: "Process Visibility & Improvement",
          text: "Improving operational clarity by defining the right statuses, inputs, and structures needed to support better execution.",
        },
      ],
    },
    work: {
      title: "Selected Work",
      subtitle:
        "A selection of work focused on turning operational complexity into clearer systems, better visibility, and more structured execution.",
      projects: [
        {
          title: "From Fragmented Field Updates to a Structured Field Operations Control System",
          summary:
            "Built and expanded an internal AppSheet-based field operations system used across Jakarta and partially in Surabaya to improve day-to-day control, standardize tracking, and create a more reliable operational data foundation.",
          problem:
            "Field operations were managed largely through WhatsApp updates, which made progress difficult to monitor in a consistent way. There was no clear control over technician delays in the field, no accurate record of activity duration across measurement, installation, and service work, and operational data was fragmented because different areas followed different tracking and reporting practices.",
          did: [
            "Designed a more standardized workflow structure for field operations across multiple operating areas",
            "Built the core daily-use modules for scheduling, attendance, and claims",
            "Structured the scheduling module to support technician assignment, customer visit details, arrival and completion time capture, arrival location capture, customer availability confirmation through pre-filled WhatsApp templates, and reschedule handling when customers were unavailable",
            "Built the attendance module to record check-in and check-out with technician location capture, supported by configurable lock / geofence settings through the user profile module",
            "Added leave, permit, and overtime submission flows, including date inputs and supporting document upload",
            "Consolidated operational records into one system so field activities, technician attendance, and claims could be tracked in a more consistent way across areas",
          ],
          outcome:
            "Technician activities became more trackable, KPI measurement became more practical because operational data was collected in one place, and reporting became faster through a more structured and more automatable reporting flow.",
          tags: ["AppSheet", "Field Operations", "Workflow Design", "Operations Control", "Reporting Structure"],
          mainImage: images.appsheetMain,
          sideImages: [images.appsheetAttendance, images.appsheetHome],
        },
        {
          title: "Building Operational Visibility Through Standardized Reporting and Dashboarding",
          summary:
            "Built standardized reporting and dashboard structures for operations, enabling both the operations team and other divisions up to the general manager level to gain clearer visibility into field conditions across areas through scheduled daily reporting.",
          problem:
            "Operational reporting was not standardized and was not visualized clearly enough to support fast understanding across teams. Reporting relied mainly on tables and basic Google Sheets charts, which made it harder for stakeholders outside operations to quickly understand field conditions, queue status, incoming demand, and overall area performance.",
          did: [
            "Structured a more standardized reporting flow across operational areas so information could be monitored and communicated more consistently",
            "Built dashboard views that made operational conditions easier to understand beyond the operations team itself",
            "Highlighted the most important daily monitoring metrics, including remaining service queue by area and the number of new incoming requests",
            "Supported scheduled reporting across areas so updates could be shared regularly with other divisions and management",
            "Improved how operational data was presented by moving from basic tables and spreadsheet charts into clearer dashboard-based views",
            "Created a more usable monitoring layer that helped turn operational data into shared visibility across the company",
          ],
          outcome:
            "Operational conditions across each area became easier to understand, reporting became more structured and easier to communicate, and the wider company gained a clearer picture of field operations through more consistent scheduled reporting.",
          tags: ["Dashboarding", "Reporting", "KPI Tracking", "Operational Visibility", "Management Reporting"],
          mainImage: images.dashboardMain,
          sideImages: [images.dashboardConversion, images.dashboardDailyOps],
        },
        {
          title: "Structuring Unclear Request Notes for Better Scheduling Control",
          summary:
            "Built an AI-assisted internal workflow in Google Sheets using Google Apps Script and Gemini API to turn inconsistent free-text request notes into clearer scheduling signals that admins could monitor and act on more easily.",
          problem:
            "Sales entered request notes in inconsistent free-text formats, making it difficult to detect urgency, identify date-specific requests, and maintain scheduling control. Admins had to manually review messy spreadsheet inputs one by one, which made the process slow and increased the risk of urgent or date-bound requests being missed.",
          did: [
            "Designed the workflow logic for reading request notes from Google Sheets and using a reference date as context for extraction",
            "Built the Apps Script bridge between Google Sheets and Gemini API to process free-text request notes automatically",
            "Configured the logic to extract specific request dates into the FULL DATE REQ column when date signals were detected",
            "Defined operational status categories for requests without clear dates: ASAP, KOSONG, TBA, and REVIEW",
            "Mapped structured outputs back into the sheet so AppSheet could surface clearer alerts and scheduling signals for admins",
            "Tested, refined, and updated the workflow over time based on real operational usage"
          ],
          outcome:
            "Request notes that were previously difficult to interpret became easier to categorize, track, and prioritize. Admins gained clearer visibility into urgent requests, date-specific requests, hold cases, and items requiring manual review, reducing the chance of overlooked scheduling requests.",
          tags: [
            "Google Sheets",
            "Apps Script",
            "Gemini API",
            "Workflow Automation",
            "Request Classification",
            "Scheduling Control"
          ],
          mainImage: images.project3FlowDetail,
          sideImages: [images.project3Output1, images.project3Output2],
        }, 
      ],
    },
    how: {
      title: "How I Work",
      subtitle:
        "I approach operations by understanding how work actually happens on the ground, then turning that complexity into clearer structures, better visibility, and more usable systems.",
      steps: [
        ["01", "Understand the operation", "Start from the real workflow, not just the report."],
        ["02", "Identify friction points", "Look for gaps in coordination, tracking, visibility, or process consistency."],
        ["03", "Define what needs to be captured", "Clarify the key statuses, inputs, and data points needed to support execution."],
        ["04", "Build structure and visibility", "Use workflows, dashboards, and internal tools to make the process easier to track and manage."],
        ["05", "Support better decisions", "Turn the output into something teams can use for coordination, monitoring, and improvement."],
      ],
    },
    experience: {
      title: "Experience Snapshot",
      items: [
        {
          role: "Area Operations Assistant Manager / Area Operations Supervisor",
          org: "Fabrica Indonesia",
          period: "2024 – Present",
          text: "Leading and structuring field service operations while improving visibility through internal tools, reporting, workflow design, and cross-functional coordination.",
        },
        {
          role: "Research Assistant",
          org: "ITS Logistics and Supply Chain Management Lab",
          period: "~1 year",
          text: "Worked on end-to-end research activities including literature review, modeling, simulation, analysis, and publication support.",
        },
        {
          role: "Data Collection Team Coordinator",
          org: "PT Angkasa Pura Cargo",
          period: "~9 months",
          text: "Supported warehouse operations through team coordination, daily monitoring, and reporting-related work in a multi-warehouse operational environment.",
        },
      ],
    },
    highlights: {
      title: "Additional Highlights",
      items: [
        {
          title: "Agent-Based Simulation for Evaluating Delivery Radius Decisions",
          text: "Contributed to NetLogo model development for an agent-based simulation inspired by Indonesian online food delivery operations, helping evaluate delivery radius scenarios and their operational implications.",
        },
        {
          title: "Live Field Operations App Adoption & Rollout",
          text: "Built and expanded an internal field operations system that was adopted in daily operations, fully in Jakarta and partially in Surabaya.",
        },
      ],
    },
    contact: {
      title: "Let’s connect",
      body:
        "I’m interested in opportunities where operations, data, and system thinking come together to create clearer execution and better decisions.",
      info: [
        ["Email", emailAddress],
        ["LinkedIn", "linkedin.com/in/rifqijalu"],
        ["Location", "South Jakarta, Indonesia"],
      ],
    },
  },
  id: {
    nav: {
      about: "Tentang",
      work: "Proyek",
      experience: "Pengalaman",
      contact: "Kontak",
    },
    hero: {
      title: "Merapikan operasional lewat data, dashboard, dan sistem yang lebih terstruktur.",
      subtitle:
        "Saya bekerja di irisan operasional, analitik, dan tools internal untuk membuat proses yang kompleks lebih mudah dipantau, dikelola, dan ditingkatkan.",
      ctaPrimary: "Lihat Proyek",
      ctaSecondary: "Unduh CV",
      labels: ["Analisis Operasional", "Dashboard & Pelaporan", "Desain Workflow"],
      cardTitle: "Fokus Saat Ini",
      cardBody:
        "Operasional × Analitik × Sistem Internal. Saya membangun struktur ketika workflow masih tersebar, manual, atau sulit dipantau.",
      cardPoints: ["Field operations", "Visibilitas operasional", "Sistem workflow internal"],
    },
    about: {
      title: "Tentang",
      heading: "Saya bekerja di irisan operasional, analitik, dan tools internal.",
      body:
        "Pengalaman saya terbentuk dari lingkungan operasional nyata, di mana visibilitas, koordinasi, dan eksekusi menjadi hal yang penting setiap hari. Saya menikmati proses mengubah workflow yang tersebar menjadi struktur kerja yang lebih jelas melalui dashboard, reporting, dan perancangan sistem. Bagi saya, data bukan hanya hasil akhir, tetapi fondasi untuk proses yang lebih baik dan pengambilan keputusan yang lebih tepat.",
    },
    strengths: {
      title: "Keahlian Inti",
      items: [
        {
          icon: BarChart3,
          title: "Analisis Operasional",
          text: "Memahami bagaimana proses benar-benar berjalan di lapangan, mengidentifikasi titik hambatan, lalu mengubah kompleksitas operasional menjadi sesuatu yang lebih terlihat dan lebih mudah dikelola.",
        },
        {
          icon: LayoutDashboard,
          title: "Dashboard & Pelaporan",
          text: "Menyusun alur pelaporan dan dashboard yang lebih jelas agar data bisa dipakai untuk monitoring, koordinasi, dan pengambilan keputusan sehari-hari.",
        },
        {
          icon: Workflow,
          title: "Desain Workflow / Sistem Internal",
          text: "Merancang workflow dan tools internal agar proses kerja lebih mudah diikuti, dipantau, dan dijalankan secara konsisten.",
        },
        {
          icon: Settings2,
          title: "Visibilitas & Perbaikan Proses",
          text: "Meningkatkan kejelasan dalam operasional dengan menentukan status, input, dan struktur yang tepat untuk mendukung eksekusi yang lebih baik.",
        },
      ],
    },
    work: {
      title: "Pilihan Proyek",
      subtitle:
        "Pilihan pekerjaan yang berfokus pada upaya mengubah kompleksitas operasional menjadi sistem yang lebih jelas, visibilitas yang lebih baik, dan eksekusi yang lebih terstruktur.",
      projects: [
        {
          title: "Dari Update Lapangan yang Tersebar ke Sistem Kontrol Operasional Lapangan yang Lebih Terstruktur",
          summary:
            "Membangun dan mengembangkan sistem internal berbasis AppSheet yang digunakan di area Jakarta dan sebagian di Surabaya untuk meningkatkan kontrol harian, menstandarkan tracking, dan membentuk fondasi data operasional yang lebih andal.",
          problem:
            "Operasional lapangan sebelumnya banyak dikendalikan melalui update WhatsApp, sehingga progress di lapangan sulit dipantau secara konsisten. Tidak ada kontrol yang jelas terhadap keterlambatan teknisi, tidak ada rekaman durasi aktivitas yang akurat untuk pekerjaan ukur, pasang, dan servis, dan data operasional tersebar karena tiap area memiliki cara tracking dan reporting yang berbeda.",
          did: [
            "Merancang struktur workflow operasional lapangan yang lebih terstandar untuk beberapa area operasional",
            "Membangun modul inti yang dipakai harian, yaitu jadwal, attendance, dan klaim",
            "Menyusun modul jadwal agar mendukung penugasan teknisi, detail customer, rekam jam tiba dan lokasi tiba, rekam jam selesai visit, tombol WhatsApp dengan template konfirmasi availability customer, serta tombol reschedule jika customer tidak available sesuai jadwal",
            "Membangun modul attendance untuk merekam masuk dan pulang beserta lokasi teknisi, dengan dukungan pengaturan lock / geofence melalui modul user profile",
            "Menambahkan alur pengajuan izin, cuti, dan lembur, termasuk input tanggal dan upload dokumen pendukung",
            "Mengonsolidasikan catatan operasional ke dalam satu sistem agar aktivitas teknisi, kehadiran, dan klaim dapat dipantau dengan cara yang lebih konsisten antar area",
          ],
          outcome:
            "Aktivitas teknisi menjadi lebih mudah dipantau, pengukuran KPI menjadi lebih praktis karena data operasional terkumpul dalam satu tempat, dan proses reporting menjadi lebih cepat karena alurnya lebih terstruktur dan lebih mudah diotomasi.",
          tags: ["AppSheet", "Field Operations", "Desain Workflow", "Kontrol Operasional", "Struktur Reporting"],
          mainImage: images.appsheetMain,
          sideImages: [images.appsheetAttendance, images.appsheetHome],
        },
        {
          title: "Membangun Visibilitas Operasional Melalui Reporting dan Dashboard yang Lebih Terstandar",
          summary:
            "Membangun struktur reporting dan dashboard yang lebih terstandar untuk operasional, sehingga tim operasional maupun divisi lain hingga level general manager bisa memperoleh visibilitas yang lebih jelas terhadap kondisi lapangan di setiap area melalui pelaporan harian yang terjadwal.",
          problem:
            "Reporting operasional sebelumnya tidak terstandarisasi dan tidak tervisualisasi dengan cukup baik untuk mendukung pemahaman yang cepat lintas tim. Pelaporan banyak bergantung pada tabel dan chart dasar dari Google Sheets, sehingga stakeholder di luar operasional lebih sulit memahami kondisi lapangan, status antrean, demand yang masuk, dan performa tiap area secara cepat.",
          did: [
            "Menyusun alur reporting yang lebih terstandar antar area operasional agar informasi dapat dipantau dan dikomunikasikan dengan lebih konsisten",
            "Membangun tampilan dashboard yang membuat kondisi operasional lebih mudah dipahami, tidak hanya oleh tim operasional tetapi juga oleh divisi lain",
            "Menonjolkan metrik harian yang paling penting, termasuk sisa antrean layanan per area dan jumlah request baru yang masuk",
            "Mendukung pelaporan terjadwal antar area agar update operasional dapat dibagikan secara rutin ke divisi lain dan manajemen",
            "Memperbaiki cara penyajian data operasional dengan mengubah tabel dan chart spreadsheet sederhana menjadi tampilan dashboard yang lebih jelas",
            "Menciptakan lapisan monitoring yang lebih mudah digunakan sehingga data operasional bisa menjadi visibilitas bersama di tingkat perusahaan",
          ],
          outcome:
            "Kondisi operasional di tiap area menjadi lebih mudah dipahami, reporting menjadi lebih terstruktur dan lebih mudah dikomunikasikan, dan seluruh perusahaan memperoleh gambaran yang lebih jelas mengenai kondisi operasional lapangan melalui pelaporan terjadwal yang lebih konsisten.",
          tags: ["Dashboard", "Pelaporan", "KPI Tracking", "Visibilitas Operasional", "Pelaporan Manajerial"],
          mainImage: images.dashboardMain,
          sideImages: [images.dashboardConversion, images.dashboardDailyOps],
        },
        {
          title: "Menstrukturkan Catatan Request yang Tidak Jelas agar Kontrol Penjadwalan Lebih Baik",
          summary:
            "Membangun workflow internal berbantuan AI di Google Sheets menggunakan Google Apps Script dan Gemini API untuk mengubah catatan request free-text yang tidak konsisten menjadi sinyal penjadwalan yang lebih jelas dan lebih mudah dipantau admin.",
          problem:
            "Sales mengisi catatan request dalam format free-text yang tidak konsisten, sehingga sulit mendeteksi mana yang urgent, mana yang punya tanggal spesifik, dan bagaimana menjaga kontrol penjadwalan tetap rapi. Admin harus meninjau input spreadsheet yang berantakan satu per satu, yang membuat proses lambat dan meningkatkan risiko request urgent atau request bertanggal khusus terlewat.",
          did: [
            "Merancang logika workflow untuk membaca catatan request dari Google Sheets dan menggunakan tanggal referensi sebagai konteks ekstraksi",
            "Membangun Apps Script sebagai jembatan antara Google Sheets dan Gemini API untuk memproses catatan request free-text secara otomatis",
            "Mengatur logika agar tanggal request spesifik dapat diekstrak ke kolom FULL DATE REQ ketika ada indikasi tanggal",
            "Menentukan kategori status operasional untuk request tanpa tanggal yang jelas: ASAP, KOSONG, TBA, dan REVIEW",
            "Menulis hasil yang sudah terstruktur kembali ke sheet agar AppSheet bisa menampilkan alert dan sinyal penjadwalan yang lebih jelas untuk admin",
            "Melakukan testing, penyempurnaan, dan update berkala berdasarkan penggunaan nyata di operasional"
          ],
          outcome:
            "Catatan request yang sebelumnya sulit dibaca menjadi lebih mudah dikategorikan, dipantau, dan diprioritaskan. Admin mendapat visibilitas yang lebih jelas terhadap request urgent, request bertanggal spesifik, request hold, dan item yang perlu review manual, sehingga risiko request penjadwalan terlewat bisa ditekan.",
          tags: [
            "Google Sheets",
            "Apps Script",
            "Gemini API",
            "Workflow Automation",
            "Request Classification",
            "Scheduling Control"
          ],
          mainImage: images.project3FlowDetail,
          sideImages: [images.project3Output1, images.project3Output2],
        },
      ],
    },
    how: {
      title: "Cara Saya Bekerja",
      subtitle:
        "Saya mendekati operasional dengan memahami bagaimana pekerjaan benar-benar berjalan di lapangan, lalu mengubah kompleksitas tersebut menjadi struktur yang lebih jelas, visibilitas yang lebih baik, dan sistem yang lebih mudah digunakan.",
      steps: [
        ["01", "Memahami operasional", "Mulai dari alur kerja yang benar-benar terjadi, bukan hanya dari laporan akhirnya."],
        ["02", "Mengidentifikasi titik hambatan", "Mencari celah dalam koordinasi, tracking, visibilitas, atau konsistensi proses."],
        ["03", "Menentukan apa yang perlu ditangkap", "Menjelaskan status, input, dan data point utama yang dibutuhkan untuk mendukung eksekusi."],
        ["04", "Membangun struktur dan visibilitas", "Menggunakan workflow, dashboard, dan tools internal agar proses lebih mudah dipantau dan dikelola."],
        ["05", "Mendukung keputusan yang lebih baik", "Mengubah hasil akhirnya menjadi sesuatu yang bisa dipakai tim untuk koordinasi, monitoring, dan perbaikan."],
      ],
    },
    experience: {
      title: "Ringkasan Pengalaman",
      items: [
        {
          role: "Area Operations Assistant Manager / Area Operations Supervisor",
          org: "Fabrica Indonesia",
          period: "2024 – Sekarang",
          text: "Memimpin dan merapikan operasional field service sambil meningkatkan visibilitas melalui tools internal, reporting, desain workflow, dan koordinasi lintas fungsi.",
        },
        {
          role: "Research Assistant",
          org: "ITS Logistics and Supply Chain Management Lab",
          period: "~1 tahun",
          text: "Terlibat dalam proses riset end-to-end, mulai dari literature review, modeling, simulation, analisis, hingga dukungan publikasi.",
        },
        {
          role: "Data Collection Team Coordinator",
          org: "PT Angkasa Pura Cargo",
          period: "~9 bulan",
          text: "Mendukung operasional warehouse melalui koordinasi tim, monitoring harian, dan pekerjaan terkait reporting dalam lingkungan multi-warehouse.",
        },
      ],
    },
    highlights: {
      title: "Sorotan Tambahan",
      items: [
        {
          title: "Simulasi Agent-Based untuk Mengevaluasi Keputusan Radius Pengantaran",
          text: "Berkontribusi pada pengembangan model NetLogo untuk simulasi agent-based yang terinspirasi dari operasional online food delivery di Indonesia.",
        },
        {
          title: "Adopsi dan Rollout Aplikasi Field Operations",
          text: "Membangun dan mengembangkan sistem internal field operations yang digunakan dalam operasional harian, sepenuhnya di Jakarta dan sebagian di Surabaya.",
        },
      ],
    },
    contact: {
      title: "Hubungi saya",
      body:
        "Saya tertarik pada peluang di mana operasional, data, dan system thinking bertemu untuk menciptakan eksekusi yang lebih jelas dan keputusan yang lebih baik.",
      info: [
        ["Email", emailAddress],
        ["LinkedIn", "linkedin.com/in/rifqijalu"],
        ["Lokasi", "Jakarta Selatan, Indonesia"],
      ],
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

function CardContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

function Button({
  children,
  className = "",
  type = "button",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8 md:mb-10">
      <div className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">{title}</div>
      {subtitle ? <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{subtitle}</p> : null}
    </div>
  );
}

function ScreenshotCard({
  src,
  alt,
  className = "",
  imageClassName = "",
  onClick,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)] ${onClick ? "cursor-zoom-in" : ""} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className={`block h-auto w-full object-cover object-top select-none transition duration-300 ${onClick ? "hover:scale-[1.02]" : ""} ${imageClassName}`}
      />
    </div>
  );
}

function MobileAccordionSection({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 lg:hidden">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-4 py-3 text-left"
      >
        <span className="text-sm font-semibold text-slate-900">{title}</span>
        <ChevronDown className={`h-4 w-4 text-slate-500 transition ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen ? <div className="border-t border-slate-200 px-4 pb-4 pt-2">{children}</div> : null}
    </div>
  );
}

export default function PortfolioWebsite() {
  const [lang, setLang] = useState<Lang>("en");
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [expandedProjectSections, setExpandedProjectSections] = useState<Record<string, { problem: boolean; did: boolean; outcome: boolean }>>({});
  const t = useMemo(() => copy[lang], [lang]);

  const handlePrimaryCta = () => {
    const el = document.getElementById("work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDownloadCv = () => {
    window.open(cvPath, "_blank", "noopener,noreferrer");
  };

  const openImageViewer = (src: string, alt: string) => {
    setActiveImage({ src, alt });
    setZoomLevel(1);
  };

  const closeImageViewer = () => {
    setActiveImage(null);
    setZoomLevel(1);
  };

  const zoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  const zoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 1));

  const toggleProjectSection = (projectKey: string, section: "problem" | "did" | "outcome") => {
    setExpandedProjectSections((prev) => ({
      ...prev,
      [projectKey]: {
        problem: prev[projectKey]?.problem ?? false,
        did: prev[projectKey]?.did ?? false,
        outcome: prev[projectKey]?.outcome ?? false,
        [section]: !(prev[projectKey]?.[section] ?? false),
      },
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="text-sm font-semibold tracking-tight">Rifqi Jalu Pramudita</div>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#about" className="text-slate-600 transition hover:text-slate-900">{t.nav.about}</a>
            <a href="#work" className="text-slate-600 transition hover:text-slate-900">{t.nav.work}</a>
            <a href="#experience" className="text-slate-600 transition hover:text-slate-900">{t.nav.experience}</a>
            <a href="#contact" className="text-slate-600 transition hover:text-slate-900">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-2 py-1 shadow-sm">
            <Languages className="h-4 w-4 text-slate-500" />
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${lang === "en" ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"}`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("id")}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${lang === "id" ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"}`}
            >
              ID
            </button>
          </div>
        </div>
      </header>

      {activeImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          onClick={closeImageViewer}
        >
          <div
            className="relative flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl bg-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-white md:px-6">
              <div className="truncate pr-4 text-sm font-medium md:text-base">{activeImage.alt}</div>
              <div className="flex items-center gap-2">
                <button type="button" onClick={zoomOut} className="rounded-full border border-white/15 p-2 text-white transition hover:bg-white/10">
                  <Minus className="h-4 w-4" />
                </button>
                <button type="button" onClick={zoomIn} className="rounded-full border border-white/15 p-2 text-white transition hover:bg-white/10">
                  <Plus className="h-4 w-4" />
                </button>
                <button type="button" onClick={closeImageViewer} className="rounded-full border border-white/15 p-2 text-white transition hover:bg-white/10">
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto bg-slate-950/60 p-4 md:p-6">
              <div className="flex min-h-full items-center justify-center">
                <img
                  src={activeImage.src}
                  alt={activeImage.alt}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="max-h-full max-w-full rounded-2xl shadow-2xl select-none"
                  style={{ transform: `scale(${zoomLevel})`, transformOrigin: "center center" }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <main>
        <section className="mx-auto grid max-w-6xl gap-14 px-6 pb-20 pt-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:pb-24 lg:pt-24">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.5 }} className="flex flex-col justify-center">
            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-6xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">{t.hero.subtitle}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button type="button" onClick={handlePrimaryCta} className="rounded-xl border border-slate-300 bg-white px-6 py-6 text-sm text-slate-900 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-[0_16px_40px_rgba(15,23,42,0.10)]">
                {t.hero.ctaPrimary}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button type="button" onClick={handleDownloadCv} className="rounded-xl border border-slate-300 bg-white px-6 py-6 text-sm text-slate-900 hover:bg-slate-100">
                {t.hero.ctaSecondary}
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {t.hero.labels.map((label) => (
                <span key={label} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.55, delay: 0.08 }} className="space-y-5">
            <ScreenshotCard
              src={images.dashboardMain}
              alt="Dashboard preview"
              imageClassName="h-auto w-full object-contain bg-slate-50"
              onClick={() => openImageViewer(images.dashboardMain, "Dashboard preview")}
            />
            <Card className="rounded-2xl border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
              <CardContent className="p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{t.hero.cardTitle}</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{t.hero.cardBody}</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {t.hero.cardPoints.map((point) => (
                    <div key={point} className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                      {point}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }} className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <SectionHeading title={t.about.title} />
              <h2 className="max-w-md text-3xl font-semibold tracking-tight md:text-4xl">{t.about.heading}</h2>
            </div>
            <Card className="rounded-3xl border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
              <CardContent className="p-8 md:p-10">
                <p className="text-base leading-8 text-slate-600">{t.about.body}</p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }}>
            <SectionHeading title={t.strengths.title} />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {t.strengths.items.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="rounded-3xl border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]">
                    <CardContent className="p-6">
                      <div className="inline-flex rounded-2xl bg-slate-100 p-3 text-slate-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </motion.div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }}>
            <SectionHeading title={t.work.title} subtitle={t.work.subtitle} />
          </motion.div>

          <div className="space-y-14">
            {t.work.projects.map((project, index) => {
              const reverse = index % 2 === 1;
              const projectKey = `${lang}-${index}`;
              const problemLabel = lang === "id" ? "Tantangan" : "Problem";
              const didLabel = lang === "id" ? "Yang saya lakukan" : "What I did";
              const outcomeLabel = lang === "id" ? "Hasil" : "Outcome";
              const mobileExpanded = expandedProjectSections[projectKey] ?? {
                problem: false,
                did: false,
                outcome: false,
              };

              const projectImageBlock = (
                <>
                  <ScreenshotCard
                    src={project.mainImage}
                    alt={project.title}
                    imageClassName="h-auto w-full object-contain bg-slate-50"
                    onClick={() => openImageViewer(project.mainImage, project.title)}
                  />
                  {index === 1 ? (
                    <div className="mt-4 grid gap-4">
                      <ScreenshotCard
                        src={project.sideImages[0]}
                        alt={`${project.title} detail 1`}
                        imageClassName="object-contain bg-slate-50"
                        onClick={() => openImageViewer(project.sideImages[0], `${project.title} detail 1`)}
                      />
                      <ScreenshotCard
                        src={project.sideImages[1]}
                        alt={`${project.title} detail 2`}
                        imageClassName="object-contain bg-slate-50"
                        onClick={() => openImageViewer(project.sideImages[1], `${project.title} detail 2`)}
                      />
                    </div>
                  ) : (
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <ScreenshotCard
                        src={project.sideImages[0]}
                        alt={`${project.title} detail 1`}
                        className="h-[180px]"
                        imageClassName="object-cover"
                        onClick={() => openImageViewer(project.sideImages[0], `${project.title} detail 1`)}
                      />
                      <ScreenshotCard
                        src={project.sideImages[1]}
                        alt={`${project.title} detail 2`}
                        className="h-[180px]"
                        imageClassName="object-cover"
                        onClick={() => openImageViewer(project.sideImages[1], `${project.title} detail 2`)}
                      />
                    </div>
                  )}
                </>
              );

              return (
                <motion.div
                  key={project.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className={`grid items-start gap-8 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)] md:p-6 lg:gap-10 lg:p-8 ${reverse ? "lg:grid-cols-[1.08fr_0.92fr]" : "lg:grid-cols-[0.92fr_1.08fr]"}`}
                >
                  <div className={reverse ? "lg:order-2" : ""}>
                    <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500 md:text-sm">
                      {lang === "id" ? `Proyek ${index + 1}` : `Project ${index + 1}`}
                    </div>
                    <h3 className="mt-3 text-[1.9rem] font-semibold leading-tight tracking-tight text-slate-950 sm:text-[2.1rem] md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base md:leading-8">{project.summary}</p>

                    <div className="mt-6 lg:hidden">{projectImageBlock}</div>

                    <div className="mt-6 space-y-3 lg:hidden">
                      <MobileAccordionSection
                        title={problemLabel}
                        isOpen={mobileExpanded.problem}
                        onToggle={() => toggleProjectSection(projectKey, "problem")}
                      >
                        <p className="text-sm leading-7 text-slate-600">{project.problem}</p>
                      </MobileAccordionSection>

                      <MobileAccordionSection
                        title={didLabel}
                        isOpen={mobileExpanded.did}
                        onToggle={() => toggleProjectSection(projectKey, "did")}
                      >
                        <div className="space-y-2">
                          {project.did.map((item) => (
                            <div key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-600">
                              <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-slate-400" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </MobileAccordionSection>

                      <MobileAccordionSection
                        title={outcomeLabel}
                        isOpen={mobileExpanded.outcome}
                        onToggle={() => toggleProjectSection(projectKey, "outcome")}
                      >
                        <p className="text-sm leading-7 text-slate-600">{project.outcome}</p>
                      </MobileAccordionSection>
                    </div>

                    <div className="mt-8 hidden gap-6 lg:grid">
                      <div>
                        <div className="text-sm font-semibold text-slate-900">{problemLabel}</div>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{project.problem}</p>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">{didLabel}</div>
                        <div className="mt-3 space-y-2.5">
                          {project.did.map((item) => (
                            <div key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-600">
                              <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-slate-400" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">{outcomeLabel}</div>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{project.outcome}</p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={`${reverse ? "lg:order-1" : ""} hidden lg:block`}>{projectImageBlock}</div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }}>
            <SectionHeading title={t.how.title} subtitle={t.how.subtitle} />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {t.how.steps.map(([num, title, desc]) => (
                <Card key={num} className="rounded-3xl border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]">
                  <CardContent className="p-6">
                    <div className="text-sm font-semibold text-slate-400">{num}</div>
                    <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }}>
            <SectionHeading title={t.experience.title} />
            <div className="grid gap-5">
              {t.experience.items.map((item) => (
                <Card key={`${item.org}-${item.role}`} className="rounded-3xl border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]">
                  <CardContent className="p-8">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Briefcase className="h-4 w-4" />
                          {item.period}
                        </div>
                        <h3 className="mt-3 text-xl font-semibold">{item.role}</h3>
                        <div className="mt-1 text-slate-600">{item.org}</div>
                      </div>
                      <div className="max-w-2xl text-sm leading-7 text-slate-600">{item.text}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }}>
            <SectionHeading title={t.highlights.title} />
            <div className="grid gap-5 md:grid-cols-2">
              {t.highlights.items.map((item) => (
                <Card key={item.title} className="rounded-3xl border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]">
                  <CardContent className="p-8">
                    <div className="inline-flex rounded-2xl bg-slate-100 p-3 text-slate-700">
                      <Wrench className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 pb-24 pt-20 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] md:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">{t.contact.title}</div>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">{t.contact.body}</h2>
              </div>
              <div className="grid gap-4">
                {t.contact.info.map(([label, value]) => {
                  const isEmail = label === "Email";
                  const isLinkedIn = label === "LinkedIn";
                  const isClickable = isEmail || isLinkedIn;

                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() => {
                        if (isEmail) window.location.href = `mailto:${emailAddress}`;
                        if (isLinkedIn) window.open(linkedInUrl, "_blank", "noopener,noreferrer");
                      }}
                      className={`rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-left transition duration-300 ${
                        isClickable
                          ? "cursor-pointer hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
                          : "cursor-default"
                      }`}
                    >
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        {isEmail ? (
                          <Mail className="h-4 w-4" />
                        ) : isLinkedIn ? (
                          <Linkedin className="h-4 w-4" />
                        ) : (
                          <MapPin className="h-4 w-4" />
                        )}
                        {label}
                      </div>
                      <div className="mt-2 text-sm font-medium text-slate-900">{value}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
