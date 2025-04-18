const videoSection = document.querySelector(".video-section");
const parentVideoStiky = document.querySelector(".parent-video-stiky");
const childVideoStiky = document.querySelector(".child-video-stiky");
const videoOneParent = document.querySelector(".video-one-parent");
const videoOne = document.querySelector("#video-one");
const videoTwoParent = document.querySelector(".video-two-parent");
const videoTwo = document.querySelector("#video-two");
const deviceEndParent = document.querySelector(".device-end-parent");
const deviceEnd = document.querySelector("#device-end");
const titleheading = document.querySelector(".titleheading");
const navi = document.querySelector(".navi");
const glare = document.querySelector(".glare");
const clip = document.querySelectorAll(".clip")
const sectiont = document.querySelector(".section")
const albumcolumn = document.querySelector(".album-column")
const cubes = document.querySelector(".child-cube")
const cub = document.querySelectorAll(".child-cube")
const blackwhite1 = document.querySelector(".blackwhite1")
const blackwhite2 = document.querySelector(".blackwhite2")
const timelines1 = document.querySelector(".timelines1")
const timelines2 = document.querySelector(".timelines2")
const leftx = document.querySelector(".leftx")
const rightx = document.querySelector(".rightx")
const transition = document.querySelector(".transition")
const transitione = document.querySelector(".transitione")
const tr = document.querySelector(".tr")
// =========flag======================
let scrollingDown = false;
let lastScrollTop = 0;
let videoOneDuration = 0;
let videoTwoDuration = 0;
let mouseAnimation = false
let flagheight = 5
let flagheighte = 1500
const obj = [
  {
    id: 1,
    h4: "Test your whole body and visualize all your data.",
    p: "Hormones, thyroid, heart, toxins, genetics, microbiome, cancer risk, wearables, & more.",
    img: "assets/img/baseline-1-opt-1920.webp",
  },
  {
    id: 2,
    h4: "Get an annual roadmap so you know exactly what to do.",
    p: "Go from in the dark to in control – we’ll show you how to improve every aspect of your health.",
    img: "assets/img/baseline-2-opt-1920.webp",
  },
  {
    id: 3,
    h4: "Access your private concierge clinician.",
    p: "Text your health concierge at any time, from help with orders and scheduling to questions and coaching.",
    img: "assets/img/baseline-3-opt-1920.webp",
  },
  {
    id: 4,
    h4: "Everything you need in one place.",
    p: "Save 1,000s of hours on research. Get the best health products, tests, & services at insider prices. New additions every week",
    img: "assets/img/baseline-4-opt-1920.webp",
  },
]
const cubess = [
  {
    id: "1",
    width: "",
    img: "Get exclusive access to our marketplace",
    figcaption: "unlimated tools transform your health and change youre life"
  },
  {
    id: "2",
    width: "148",
    img: "assets/img/genomic-test-kit-opt-1080.webp",
    figcaption: "Biomarker Tracking"
  },
  {
    id: "3",
    width: "300",
    img: "assets/img/cgm-charts-opt-1080.webp",
    figcaption: "VO2 Max"
  },
  {
    id: "4",
    width: "148",
    img: "assets/img/grail-cancer-test-opt-1080.webp",
    figcaption: "Full Genome Sequencing"
  },
  {
    id: "5",
    width: "148",
    img: "assets/img/dexa-scan-opt-1080.webp",
    figcaption: "Continuous Glucose Monitoring"
  },
  {
    id: "6",
    width: "148",
    img: "assets/img/prescriptions-opt-1080.webp",
    figcaption: "Grail Cancer Test"
  },
  {
    id: "7",
    width: "200",
    img: "assets/img/intestinal-permeability-panel-opt-1080.webp",
    figcaption: "DEXA Scan"
  },
  {
    id: "8",
    width: "200",
    img: "assets/img/blood-biomarker-chart-opt-1080.webp",
    figcaption: "Prescriptions"
  },
  {
    id: "9",
    width: "300",
    img: "assets/img/vo2-max-opt-1080.webp",
    figcaption: "Intestinal Permeability Panel"
  },
]
const databw = [
  {
    id: "1",
    t1: "Heart Disease",
    t2: "Cancer",
    t3: "And100s More",
    t4: "Disease Risk",
    img: "assets/img/disease-risk-opt-640.webp",
  },
  {
    id: "2",
    t1: "Gain Muscle",
    t2: "Lose Weight",
    t3: "Grip Strength",
    t4: "Body Composition",
    img: "assets/img/body-composition-opt-640.webp",
  },
  {
    id: "3",
    t1: "Focus",
    t2: "Memory",
    t3: "Mental Acuity",
    t4: "Cognitive Health",
    img: "assets/img/cognitive-health-opt-640.webp",
  },
  {
    id: "4",
    t1: "Sleep Qulity",
    t2: "Stress Level",
    t3: "Nervous System Calibration",
    t4: "Sleep Optimization",
    img: "assets/img/sleep-optimization-opt-640.webp",
  },
  {
    id: "5",
    t1: "Energy",
    t2: "HbA1c",
    t3: "VO2 Max",
    t4: "Metabolic Health",
    img: "assets/img/metabolic-health-opt-640.webp",
  },
  {
    id: "6",
    t1: "Microbiome Diversity",
    t2: "Digestion",
    t3: "Nutrient Absorption",
    t4: "Gut Health",
    img: "assets/img/gut-health-opt-640.webp",
  },
  {
    id: "7",
    t1: "Testosterone",
    t2: "Free Testosterone",
    t3: "Thyroid",
    t4: "Male Hormones",
    img: "assets/img/male-hormones-opt-640.webp",
  },
  {
    id: "8",
    t1: "Estrogen",
    t2: "Progesterone",
    t3: "Thyroid",
    t4: "Famale Hormones",
    img: "assets/img/female-hormones-opt-640.webp",
  },
  {
    id: "9",
    t1: "Epigenetics",
    t2: "Senscence",
    t3: "Mitochondria",
    t4: "Aging",
    img: "assets/img/ageing-opt-640.webp",
  },
  {
    id: "10",
    t1: "Plastics",
    t2: "Heavy Metals",
    t3: "Mold",
    t4: "Toxins",
    img: "assets/img/toxins-opt-640.webp",
  },
]
const arrDoctor = [
  {
    id: "1",
    img: "assets/img/abe-opt-256.webp",
    t1: "Dr. Abe Malkin, MD",
    t2: "Clinician Entrepreneur, Founder at Drip Hydration & Concierge MD"
  },
  {
    id: "2",
    img: "assets/img/arielle-opt-256.webp",
    t1: "Arielle Zuckerberg",
    t2: "Partner at Long Journey Ventures, formerly Coatue"
  },
  {
    id: "3",
    img: "assets/img/balaji-opt-256.webp",
    t1: "Balaji Srinivasan",
    t2: "Investor & entrepreneur, former CTO of Coinbase, former General Partner at Andreessen Horowitz"
  },
  {
    id: "4",
    img: "assets/img/cyan-opt-256.webp",
    t1: "Cyan Banister",
    t2: "Investor at Long Journey Ventures, former Partner at Founders Fund"
  },
  {
    id: "5",
    img: "assets/img/derick-opt-256.webp",
    t1: "Dr. Derick En'Wezoh, MD",
    t2: "Partner at Susa Ventures, Harvard Medical School, Stanford MBA"
  },
  {
    id: "6",
    img: "assets/img/winklevoss-opt-256.webp",
    t1: "Cameron & Tyler Winklevoss",
    t2: "Founders of Gemini, Winklevoss Capital"
  },
  {
    id: "7",
    img: "assets/img/jordan-opt-256.webp",
    t1: "Evan Moore",
    t2: "Co-Founder, DoorDash"
  },
  {
    id: "8",
    img: "assets/img/leigh-opt-256.webp",
    t1: "Dr. Leigh Erin Connealy, MD",
    t2: "Clinician & founder of The Centre for New Medicine"
  },
  {
    id: "9",
    img: "assets/img/robert-opt-256.webp",
    t1: "Dr. Robert Lufkin, MD",
    t2: "Clinician & medical school professor at UCLA & USC, author, entrepreneur"
  },
  {
    id: "10",
    img: "assets/img/shaan-opt-256.webp",
    t1: "Shaan Puri",
    t2: "6x Founder, investor, co-host of My First Million podcast"
  },
]
// =========function==================
function hightvideoSection() {
  videoOneDuration = videoTwo.duration;
  videoTwoDuration = videoOne.duration;
  videoSection.style.minHeight =
    parseInt(videoOneDuration + videoTwoDuration) * 100 + "vh";
};
function addAlbum() {
  obj.forEach((item, index) => {
    let div = document.createElement("div")
    div.classList.add("parent-album")
    div.innerHTML = `
    <div><h4>${item.h4}</h4></div>
                    <div><p>${item.p}</p></div>
                    <div class="album-img">
                        <div class="number"><span>${item.id}</span></div>
                        <div class="line-one"><span></span></div>
                        <div class="imgg"><figure><img src="${item.img}"  alt="album"></figure></div>
                        <div class="line-one"><span></span></div>
                        <div class="number"><span>${item.id}</span></div>
    
    
    `
    albumcolumn.appendChild(div)
  })
};
function cube() {
  cubess.forEach((item, index) => {
    let div = document.createElement("div")
    div.classList.add("activecube")
    if (index === 0) {
      div.innerHTML = `
                        <div>
                            <h5>${item.img}</h5>
                        </div>
                        <div>
                            <p>${item.figcaption}</p>
                        </div>

      `
    } else {
      div.innerHTML = `
                        <figure>
                            <img src=${item.img} width=${item.width} alt="">
                            <figcaption>${item.figcaption}</figcaption>
                        </figure>
      `
    }
    cubes.appendChild(div)
  })
};
function blackwhite() {
  databw.forEach(item => {
    let div = document.createElement("div")
    div.classList.add("item")
    div.innerHTML = `
    <div class="child1">
    <div class="item-child1"><span>${item.t1}</span></div>
    <div class="item-child2"><span>${item.t2}</span></div>
    </div>
    <div>
    <figure>
    <img src=${item.img} width="50" alt="item"/>
    </figure>
    </div>
    <div class="child3">
    <div class="item-child3"><span>${item.t3}</span></div>
    <div class="item-child4"><span>${item.t4}</span></div>
    </div>
    
    
    `
    if (item.id <= 5) {
      blackwhite1.appendChild(div)
    } else {
      blackwhite2.appendChild(div)
    }
  })
};
function arrDoctord() {
  arrDoctor.forEach((item, index) => {
    let div = document.createElement("div")
    div.innerHTML = `
    <div><figure><img src=${item.img} alt=${item.t1} width="100"/></figure></div>
    <div>
    <div><span>${item.t1}</span></div>
    <div><span>${item.t2}</div>
    </div>
    `;
    index < 5 ? leftx.appendChild(div) : rightx.appendChild(div)
  })
}
function stylesElement(element, value, element2, value2) {
  element.style.opacity = value
  element2.style.opacity = value2
}
// ==========================
window.addEventListener("load", () => {
  videoOne.play();
  videoTwo.play();
  setTimeout(() => {
    videoOne.pause();
    videoTwo.pause();
  }, 100);
  hightvideoSection();
});
document.addEventListener("scroll", () => {
  let time = scrollY / 800;
  let timeTow = (scrollY - 3700) / 500;
  videoOne.currentTime = time;
  videoTwo.currentTime = timeTow;
  // ==================================================================================
  let tt = videoSection.getBoundingClientRect();
  let rect = Math.abs(tt.top);
  let currentScroll = window.scrollY;
  if (currentScroll > lastScrollTop) {
    scrollingDown = true;
  } else {
    scrollingDown = false;
  }
  lastScrollTop = currentScroll;
  clip[0].style.backgroundSize = `${(rect / 20) - 100}% 100%`
  clip[1].style.backgroundSize = `${(rect / 20) - 100}% 100%`
  if (window.scrollY < 1000) {
    window.scrollTo(0, 1000)

  }
  if (rect < 3500) {
    stylesElement(videoOneParent, "1", videoTwoParent, "0")
  } else if (rect > 3500 && rect < 4900) {

    videoTwoParent.style.opacity = "0.5"
    childVideoStiky.style.transform = "scale(1)"
    videoTwo.style.transform = `translateY(0px)`
    sectiont.style.display = "flex"
  }
  if (rect > 4900 && rect < 5500) {
    stylesElement(videoOneParent, "0", videoTwoParent, "1")

    childVideoStiky.style.transform = `scale(0.5)`
    videoTwo.style.transform = `translateY(150px) scale(0.6)`
    childVideoStiky.style.backGround = `black`
    sectiont.style.display = "none"

  }
  if (rect > 5500) {
    stylesElement(videoOneParent, "0", videoTwoParent, "0")

    deviceEndParent.style.opacity = "1"
  } else {
    deviceEndParent.style.opacity = "0"
  } rect
  if (rect > 5600) {
    stylesElement(titleheading, "1", navi, "1")

    titleheading.style.padding = "50px 0 0 0"
    navi.style.padding = "0 0 50px 0"
  } else {
    stylesElement(titleheading, "0", navi, "0")
    titleheading.style.padding = "0 "
    navi.style.padding = "0"
  }
  if (rect > 5700) {
    childVideoStiky.style.background = `transparent`
    mouseAnimation = true
    childVideoStiky.style.transform = `rotateX(${20}deg) rotateY(${20}deg) scale(0.5)`;

  } else if (rect < 5600) {
    childVideoStiky.style.background = `black`
    mouseAnimation = false
  }
  if (rect > 9250 && rect < 10300 && window.innerWidth < 1400) {
    document.querySelectorAll(".child-cube>div").forEach(item => {
      item.classList.remove("activecube")
    })
  } else {
    document.querySelectorAll(".child-cube>div").forEach(item => {
      item.classList.add("activecube")
    })
  }
  if (window.innerWidth > 1900 && rect > 12800 && rect < 14500) {
    document.querySelectorAll(".child-cube>div").forEach(item => {
      item.classList.remove("activecube")
    })
  } else if (window.innerWidth > 1900 && rect < 12800 && rect > 14500) {
    document.querySelectorAll(".child-cube>div").forEach(item => {
      item.classList.add("activecube")
    })
  }
  if (rect > 11300 && rect < 12050 && window.innerWidth < 1400) {
    timelines1.style.transform = "translateX(0%)"
    timelines2.style.transform = "translateX(0%)"
  } else if (rect < 11300 || rect > 12050 && window.innerWidth < 1400) {
    timelines1.style.transform = "translateX(100%)"
    timelines2.style.transform = "translateX(-100%)"
  }
  if (window.innerWidth > 1900 && rect > 15650 && rect < 19300) {
    timelines1.style.transform = "translateX(0%)"
    timelines2.style.transform = "translateX(0%)"
  } else if (window.innerWidth > 1900 && rect > 15650 && rect < 19300) {
    timelines1.style.transform = "translateX(100%)"
    timelines2.style.transform = "translateX(-100%)"
  }
  if (rect > 12200 && rect < 13500 && scrollingDown && window.innerWidth < 1400) {
    flagheight >= 0 ? flagheight += 20 : flagheight = 0;
    transition.style.height = flagheight + "px"
  } else if (rect > 11900 && rect < 13000 && !scrollingDown && window.innerWidth < 1400) {
    flagheight >= 0 ? flagheight -= 20 : flagheight = 0;
    transition.style.height = flagheight + "px"
  } else if (rect > 13500 && window.innerWidth < 1400) {
    flagheight = 900
  }
  if (rect > 16700 && rect < 18000 && scrollingDown && window.innerWidth > 1900) {
    flagheight >= 0 ? flagheight += 20 : flagheight = 0;
    transition.style.height = flagheight + "px"
  } else if (rect > 16400 && rect < 18000 && !scrollingDown && window.innerWidth > 1900) {
    flagheight >= 0 ? flagheight -= 20 : flagheight = 0;
    transition.style.height = flagheight + "px"
  } else if (rect > 18000 && window.innerWidth > 1900) {
    flagheight = 1900
  }
  if (rect > 14100 && rect < 15200) {
    tr.style.opacity = "1"

  } else {
    tr.style.opacity = "0"

  }
  if (rect > 15600 && rect < 16900 && scrollingDown && window.innerWidth < 1400) {
    flagheighte >= 0 ? flagheighte -= 20 : flagheighte = 0;
    transitione.style.height = flagheighte + "px"
  } else if (rect > 15300 && rect < 16900 && !scrollingDown && window.innerWidth < 1400) {
    flagheighte >= 0 ? flagheighte += 20 : flagheighte = 0;
    transitione.style.height = flagheighte + "px"
  } else if (rect > 17000 && window.innerWidth < 1400) {
    flagheighte = 900
  }
  if (rect > 16700 && rect < 18000 && scrollingDown && window.innerWidth > 1900) {
    flagheighte >= 0 ? flagheighte -= 20 : flagheighte = 0;
    transitione.style.height = flagheighte + "px"
  } else if (rect > 16400 && rect < 18000 && !scrollingDown && window.innerWidth > 1900) {
    flagheighte >= 0 ? flagheighte += 20 : flagheighte = 0;
    transitione.style.height = flagheighte + "px"
  } else if (rect > 18000 && window.innerWidth > 1900) {
    flagheighte = 2000
  }
});
parentVideoStiky.addEventListener('mousemove', (event) => {
  if (mouseAnimation) {
    const rect = parentVideoStiky.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;
    const rotateX = (deltaY / rect.height) * -25;
    const rotateY = (deltaX / rect.width) * 25;
    childVideoStiky.style.transform = `
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      scale(0.5)
    `;
    const relativeX = event.clientX - rect.left;
    const relativeY = event.clientY - rect.top;
    glare.style.transform = `translate(-${relativeX}px, -${relativeY}px)`;
  }
});
addAlbum()
cube()
blackwhite()
arrDoctord()