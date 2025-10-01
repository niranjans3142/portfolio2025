window.addEventListener('scroll', () => {
  const nav = document.querySelector('.top-nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

  const goToTop = document.querySelector('#goTopBtn');
  if (window.scrollY > 450) {
    goToTop.classList.remove('display-none');
    goToTop.classList.add('display-block');
  } else {
    goToTop.classList.remove('display-block');
    goToTop.classList.add('display-none');
  }
});


const gototop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}



const companies = [
  {
    name: "Viu",
    shortName: "Viu",
    logo: "assets/images/viu.png",
    role: "Senior Software Engineer",
    years: "Sep 2022 - Present",
    domain: "OTT",
    skills: ['Javascript', 'TypeScript', 'ReactJS', 'NextJS', 'MaterialUI', 'SSR', 'CSR', 'DataDog', 'GTM', 'GIT', 'Bitmovin', 'HTML', 'CSS', 'web vitals', 'Micro Frontend'],
    short: `<span class="pointer-mark">&rarr;</span>Optimized and maintained a high-traffic web application, supporting 5M+ monthly active browser users with AVOD(Advertisement) and SVOD(Subscription) plans.<br>
<span class="pointer-mark">&rarr;</span>Deployed and maintained shift from a legacy monolith to a micro-frontend architecture using ReactJS SSR, reducing load time by 20% and improving metrics TTI to 1.2s across 5M+ users.<br>
<span class="pointer-mark">&rarr;</span>Enhanced browser AVOD ad revenue through stream tracking and placement accuracy, helping to generate revenue of 15M HKD for browser users.<br>
<span class="pointer-mark">&rarr;</span>Delivered critical features SSO, User Profiling, SVOD(Subscription and Unsubscribe flow), AVOD(VMAP, Responsive Display Ads), Search, Video Playlist Listing, OTP security, video player control, Health and Performance APP Monitoring through Sentry, User Analytics through GTags, Tracing with Datadog trace, SEO, Accessibility.
<br>
<span class="pointer-mark">&rarr;</span>Streamlined API and architecture documentation on Confluence, enhancing cross-team collaboration.<br>
<span class="pointer-mark">&rarr;</span>Developed Google Ads tracing capabilities that streamlined ad performance analysis, boosted campaign.<br>
<span class="pointer-mark">&rarr;</span>Integrated GTM for analytics and Sentry for health and performance monitoring.<br>
<span class="pointer-mark">&rarr;</span>Developed a POC to optimize login iframe caching for Huawei devices, reducing load times significantly with CDN reconfiguration and TTL refresh.`
  },
  {
    name: "Elixia Tech Soln Ltd",
    shortName: "Elixia",
    logo: "assets/images/elixia.png",
    role: "Senior Software Engineer",
    years: "April 2021 - July 2022",
    domain: "Logistics",
    skills: ['Javascript', 'ReactJS', 'MaterialUI', 'CSR', 'GTM', 'GIT', 'HTML', 'CSS', 'Formik', 'web vitals', 'Micro Frontend'],
    short: `<span class="pointer-mark">&rarr;</span>Coded and Delivered key frontend requirements during the company's successful 2022 seed funding for 2M.<br>
    <span class="pointer-mark">&rarr;</span>Architected and enabled end-to-end logistics management for loads and goods using micro-frontend architecture for India's biggest E-Commerce platform, like Flipkart, including authorization, pickup, and delivery workflows. <br>
    <span class="pointer-mark">&rarr;</span>Orchestrated by building and support of a suite of Supply Chain platform, divided into 3 major modules - Pre Transit, In Transit, & Post Transit, billed on clients' subscription submodules, like partner onboarding, tracking, fleet management, capacity optimiser, bidding, and billing.<br>
    <span class="pointer-mark">&rarr;</span>Implemented Onboarding guides for developers using Storybook, helping quick familiarity with product story.<br>
    <span class="pointer-mark">&rarr;</span>Led migration from manual deployments to setting up Jenkins CI/CD pipeline, improving integration cycle by 100%, cutting deployment time from manual efforts to under 15 mins, enabling faster release cycles and rollback.
`
  },
  {
    name: "YourMechanic",
    shortName: "YM",
    logo: "assets/images/yourmechanic.webp",
    role: "Software Engineer",
    years: "May 2020 - Feb 2021",
    domain: "Auto tech",
    skills: ['Javascript', 'ReactJS', 'Ruby on Rails', 'MaterialUI', 'SSR', 'CSR', 'Hotjar', 'GTM', 'GIT', 'Microservices', 'Figma', 'HTML', 'CSS'],
    short: `<span class="pointer-mark">&rarr;</span>Worked on ReactJS micro-frontend applications with Ruby on Rails MVC, delivering feature reviews, promotional tools, and returning customer checkout flows.<br>
<span class="pointer-mark">&rarr;</span>Led and supported returning customer quick checkout flows, resulting in a 5-15% increase in conversion rates and contributing to MRR growth.<br>
<span class="pointer-mark">&rarr;</span>Used Hotjar to debug code anomalies for quick support and fixes.
`
  },
  {
    name: "Urban Circus",
    shortName: "UrC",
    logo: "assets/images/urbancircus.jpg",
    role: "Software Engineer, Freelancing",
    years: "Jan 2019 - Feb 2020",
    domain: "Design and Technology",
    skills: ['Javascript', 'ReactJS', 'Google', 'MaterialUI', 'SSR', 'DataDog', 'GTM', 'GIT', 'JW player', 'HTML', 'CSS', 'Jest'],
    short: `<span class="pointer-mark">&rarr;</span>Built test suites using Puppeteer & Jest to validate data on Google Maps.`
  },
  {
    name: "Eventera",
    shortName: "Eventera",
    logo: "assets/images/eventera.png",
    role: "Software Engineer, Freelancing",
    years: "Sep 2019 - Dec 2019",
    domain: "Video Streaming",
    skills: ['Javascript', 'ReactJS', 'Google', 'MaterialUI', 'SSR', 'DataDog', 'GTM', 'GIT', 'JW player', 'HTML', 'CSS', 'Jest'],
    short: `<span class="pointer-mark">&rarr;</span>Build a live event streaming platform integrating JW Player.<br>
    <span class="pointer-mark">&rarr;</span>Developed enrollment dashboard for event creator.<br/>
    <a href='http://reverent-swanson-22aece.netlify.app/' target="_blank">Demo site</a>`
  },
  {
    name: "Symphony Fintech",
    shortName: "Symphony",
    logo: "assets/images/symphony.jpeg",
    role: "Software Engineer, Contract",
    years: "Jan 2019 - Aug 2019",
    domain: "Stockbroker and Finance",
    skills: ['Javascript', 'ReactJS', 'Google', 'MaterialUI', 'SSR', 'DataDog', 'GTM', 'GIT', 'JW player', 'HTML', 'CSS', 'Jest'],
    short: `<span class="pointer-mark">&rarr;</span>Developed responsive UIs and real-time trading interfaces for NSE/BSE.<br>XTS-WEB, worked as UI developer for building a trading platform, used angular as framework.<br>
    <span class="pointer-mark">&rarr;</span>HFT-VITTA, worked as a UI developer for building a fast trading platform for user, using the strategy as trading.`
  },
  {
    name: "Persistent System",
    shortName: "Persistent",
    logo: "assets/images/persistentsystems.jpg",
    role: "Software Engineer",
    years: "Dec 2017 – Jan 2019",
    domain: "Services",
    skills: ['Java', 'Javascript', 'Vuejs', 'Java Swing', 'Cucumber', 'MaterialUI', 'CSR', 'GTM', 'GIT', 'Chart.js', 'HTML', 'CSS'],
    short: `<span class="pointer-mark">&rarr;</span>Generated actionable insight reports in Excel and PDF for ThermoFisher, resulting in improved stakeholder engagement on visualizing protein anomalies from FASTA-compliant format generated from Chart.js using Java Swing, Vue.js for ThermoFisher client.<br>
<span class="pointer-mark">&rarr;</span>Improved testing efficiency by reducing manual effort by 100% with an automated Cucumber BDD test suite.`
  }
];

const canvas = document.getElementById('wheel');
const ctx = canvas.getContext('2d');
const numSegments = companies.length;
const angleStep = (2 * Math.PI) / numSegments;
let startAngle = 0;
let currentHighlightIndex = 0; // which segment is highlighted

function resizeCanvas() {
  const viewportWidth = window.innerWidth;
  let size = viewportWidth <= 768 ? 340 : 500;
  canvas.width = size;
  canvas.height = size;
  drawWheel(currentHighlightIndex);
}

// Draw the wheel
function drawWheel(highlightIndex = null) {
  const center = canvas.width / 2;
  const radius = center;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < numSegments; i++) {
    const angle = startAngle + i * angleStep;
    ctx.beginPath();
    ctx.moveTo(center, center);
    ctx.arc(center, center, radius, angle, angle + angleStep);
    ctx.fillStyle = (i === highlightIndex) ? 'transparent' : (i % 2 === 0 ? '#1A1A1A' : '#4A4A4A');
    ctx.fill();

    ctx.save();
    ctx.translate(center, center);
    ctx.rotate(angle + angleStep / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = (i === highlightIndex) ? "#fff" : "#fff";
    ctx.font = "bold 14px sans-serif";
    ctx.fillText(companies[i].shortName, radius - 20, 10);
    ctx.restore();
  }
}

// Show company details on right
function showDetails(index) {
  const c = companies[index];

  document.getElementById('details').innerHTML = `
    <div class="details-header" style="background-image: url('${c.logo || 'default.png'}')">
      <div class="details-overlay">
        <h3>${c.name}</h3>
        <p>${c.domain || ''}</p>
        <p>${c.role || ''}</p>
      </div>
    </div>
    <div class="details-info">
      <div class="info-item">
        <span class="label">Year</span>
        <span class="value">${c.years || ''}</span>
      </div>
      <div class="info-item display-flex flex-wrap">
        ${(c.skills || []).map(skill => `<span class='badge'>${skill}</span>`).join('')}
      </div>
      <div class="info-item">
        <span class="value">${c.short || ''}</span>
      </div>
    </div>`;

  currentHighlightIndex = index;
}


// Detect clicked segment (correctly handle scaling)
function getClickedSegment(e) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const x = ((e.clientX || e.touches[0].clientX) - rect.left) * scaleX;
  const y = ((e.clientY || e.touches[0].clientY) - rect.top) * scaleY;
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const angleClicked = Math.atan2(y - cy, x - cx);
  let adjusted = angleClicked - startAngle;
  while (adjusted < 0) adjusted += 2 * Math.PI;
  return Math.floor(adjusted / angleStep);
}

// ✅ On click/tap → directly highlight & show details
function handleClickOrTap(e) {
  const index = getClickedSegment(e);
  drawWheel(index);
  showDetails(index);
}

// Event listeners
canvas.addEventListener('click', handleClickOrTap);
canvas.addEventListener('touchstart', handleClickOrTap);

// On load & resize
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Init: highlight first company
drawWheel(0);
showDetails(0);










const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.getAttribute('data-target');
    panels.forEach(panel => {
      panel.classList.toggle('active', panel.id === target);
    });
  });
});












document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.skill-list-card');
  const contactcards = document.querySelectorAll('.service-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.15
  });

  cards.forEach(card => observer.observe(card));
  contactcards.forEach(card => observer.observe(card));
});















(() => {
  const track = document.getElementById("track");
  const wrap = track.parentElement;
  const cards = Array.from(track.children);
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const dotsBox = document.getElementById("dots");

  const isMobile = () => matchMedia("(max-width:767px)").matches;

  cards.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.onclick = () => activate(i, true);
    dotsBox.appendChild(dot);
  });
  const dots = Array.from(dotsBox.children);

  let current = 0;

  function center(i) {
    const axis = isMobile() ? "top" : "left";
    let position;
    
    if(cards.length/2 > i)
      position=132
    else
      position=710
    
    track.scrollTo({
      [axis]: position,
      behavior: "smooth"
    });
  }

  function toggleUI(i) {
    cards.forEach((c, k) => c.toggleAttribute("active", k === i));
    dots.forEach((d, k) => d.classList.toggle("active", k === i));
    prev.disabled = i === 0;
    next.disabled = i === cards.length - 1;
  }

  function activate(i, scroll) {
    if (i === current) return;
    current = i;
    toggleUI(i);
    if (scroll) center(i);
  }

  function go(step) {
    activate(Math.min(Math.max(current + step, 0), cards.length - 1), true);
  }

  prev.onclick = () => go(-1);
  next.onclick = () => go(1);

  addEventListener(
    "keydown",
    (e) => {
      if (["ArrowRight", "ArrowDown"].includes(e.key)) go(1);
      if (["ArrowLeft", "ArrowUp"].includes(e.key)) go(-1);
    },
    { passive: true }
  );

  cards.forEach((card, i) => {
    card.addEventListener(
      "mouseenter",
      () => matchMedia("(hover:hover)").matches && activate(i, true)
    );
    card.addEventListener("click", () => activate(i, true));
  });

  let sx = 0,
    sy = 0;
  track.addEventListener(
    "touchstart",
    (e) => {
      sx = e.touches[0].clientX;
      sy = e.touches[0].clientY;
    },
    { passive: true }
  );

  track.addEventListener(
    "touchend",
    (e) => {
      const dx = e.changedTouches[0].clientX - sx;
      const dy = e.changedTouches[0].clientY - sy;
      if (isMobile() ? Math.abs(dy) > 60 : Math.abs(dx) > 60)
        go((isMobile() ? dy : dx) > 0 ? -1 : 1);
    },
    { passive: true }
  );
  if (window.matchMedia("(max-width:767px)").matches) dotsBox.hidden = true;

  addEventListener("resize", () => center(current));

  toggleUI(0);
  center(0);
})();










function openModal() {
  document.getElementById('collageModal').classList.remove('hide');
  document.getElementById('collageModal').classList.add('show');
}

function closeModal() {
  document.getElementById('collageModal').classList.remove('show');
  document.getElementById('collageModal').classList.add('hide');
}

function collageModalCertificate() {
  document.getElementById('collageModalCertificate').classList.remove('hide');
  document.getElementById('collageModalCertificate').classList.add('show');
}

function closeModalCertificate() {
  document.getElementById('collageModalCertificate').classList.remove('show');
  document.getElementById('collageModalCertificate').classList.add('hide');
}

// Optional: Close modal on background click
window.onclick = function (event) {
  const modal = document.getElementById('collageModal');
  const modal2 = document.getElementById('collageModalCertificate');

  if (event.target === modal || event.target === modal2) {
    closeModal();
    closeModalCertificate();
  }
}


function downloadResume() {
const resumeUrl = "assets/doc/Niranjan_Singh_Resume.pdf"; // change this to your actual path

    // Create a hidden link and click it
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Niranjan_Singh_Resume.pdf"; // file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}