import { BlogPost } from "./blog";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title:
      "ประสบการณ์เข้าร่วม Go Software Engineering Bootcamp รุ่นที่ 2 กับ KBTG",
    slug: "go-bootcamp-kbtg-2",
    date: "2024-03-24",
    excerpt: "เรียนรู้และฝึกฝนการพัฒนา Software ด้วย Go ใน Bootcamp กับ KBTG",
    content: `
    <div class="max-w-4xl mx-auto leading-relaxed text-gray-800 dark:text-gray-200 space-y-12">
  <header class="mb-12">
  <h1 class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">Go Software Engineering Bootcamp รุ่นที่ 2 กับ KBTG</h1>
  <p class="text-lg mb-6">
    เมื่อเร็ว ๆ นี้ ผมได้มีโอกาสเข้าร่วม <span class="font-semibold text-blue-600 dark:text-blue-400">Go Software Engineering Bootcamp รุ่นที่ 2</span> ซึ่งจัดโดย KBTG (Kasikorn Business-Technology Group)
    จะมีเนื้อหาให้เรียน และ Meeting ทุกสัปดาห์ ก่อนจะได้เข้าร่วม Workshop ทาง KBTG จะมีข้อสอบ Post Test ให้ทำถ้าใครผ่านเกณฑ์จะคัดจาก 200 คน เหลือ 70 คน จะได้เข้าร่วม Workshop Onsite และ มีโอกาส สัมภาษณ์ทำงานที่ KBTG ด้วย
  </p>
  
  <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
    <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">เรียนผ่าน Klix.kmitl</h2>
    <p class="mb-4">
     Bootcamp นี้เรียนผ่าน platform Klix ของสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง (KMITL)
    </p>
    <a href="https://v2.klix.kmitl.ac.th/" target="_blank" rel="noopener noreferrer" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 mb-4">
      เยี่ยมชม Klix.kmitl
    </a>
    <div class="mt-4">
      <img src="/go2.png" alt="ภาพหน้าจอ Klix.kmitl" class="w-full rounded-lg shadow-lg"/>
    </div>
  </div>
</header>

  <div>
    <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 pb-2 border-b-2 border-blue-500 dark:border-blue-400">
      เนื้อหาที่เรียน 📚
    </h2>
    <ol class="space-y-6 mb-6 text-gray-800 dark:text-gray-200">
      <li class="flex items-start">
        <span class="text-2xl font-bold text-blue-500 dark:text-blue-400 mr-4">1.</span>
        <div>
          <span class="font-semibold text-lg">Git and Collaboration</span>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">การใช้ Git ในการทำงานร่วมกันและการจัดการ version control</p>
        </div>
      </li>
      <li class="flex items-start">
        <span class="text-2xl font-bold text-blue-500 dark:text-blue-400 mr-4">2.</span>
        <div>
          <span class="font-semibold text-lg">Software Design</span>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">หลักการออกแบบซอฟต์แวร์และการเขียนโค้ดที่มีคุณภาพ</p>
        </div>
      </li>
      <li class="flex items-start">
        <span class="text-2xl font-bold text-blue-500 dark:text-blue-400 mr-4">3.</span>
        <div>
          <span class="font-semibold text-lg">Software Testing</span>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">เทคนิคการทดสอบซอฟต์แวร์และการเขียน unit tests</p>
        </div>
      </li>
      <li class="flex items-start">
        <span class="text-2xl font-bold text-blue-500 dark:text-blue-400 mr-4">4.</span>
        <div>
          <span class="font-semibold text-lg">API Design & API Security</span>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">การออกแบบ API ที่มีประสิทธิภาพและการรักษาความปลอดภัย</p>
        </div>
      </li>
      <li class="flex items-start">
        <span class="text-2xl font-bold text-blue-500 dark:text-blue-400 mr-4">5.</span>
        <div>
          <span class="font-semibold text-lg">DevOps</span>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">การใช้เครื่องมือและแนวคิด DevOps ในการพัฒนาซอฟต์แวร์</p>
        </div>
      </li>
      <li class="flex items-start">
        <span class="text-2xl font-bold text-blue-500 dark:text-blue-400 mr-4">6.</span>
        <div>
          <span class="font-semibold text-lg">Refactoring with Go</span>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">เทคนิคการ refactor โค้ด Go เพื่อปรับปรุงคุณภาพและประสิทธิภาพ</p>
        </div>
     
    </ol>
  </div>

<div class="space-y-12">
  <section>
    <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 pb-2 border-b-2 border-blue-500 dark:border-blue-400">สิ่งที่ได้จาก WorkShop #1</h2>
    <div class="mb-6">
      <img src="/go3.png" alt="ภาพประกอบการเรียนรู้จาก Bootcamp" class="w-full rounded-lg shadow-lg"/>
    </div>
    <p class="mb-4">
     การเข้าร่วม Workshop นี้เป็นประสบการณ์ที่ท้าทายและน่าตื่นเต้นมาก ผมได้เรียนรู้เทคนิคการเขียนโค้ด Golang และได้ฝึกทำงานร่วมกับทีมที่มีความสามารถ ต้องยอมรับว่าตอนเริ่ม Workshop ผมเพิ่งเริ่มศึกษา Golang มาได้เพียง 3-4 เดือน และยังไม่เข้าใจอะไรมากนัก โดยเฉพาะในช่วงออกแบบ API ผมแทบไม่รู้เรื่องเลยครับ ได้แต่มองพี่ๆ เขาออกแบบ เหมือนมาศึกษาดูงานเลย 5555+ 

  หลังจากออกแบบ API เสร็จ เราได้มีโอกาสไปดูกลุ่มอื่นๆ ว่าเขาออกแบบ API แบบไหนบ้าง ซึ่งเป็นประสบการณ์ที่ดีมากในการเรียนรู้แนวคิดที่หลากหลาย จากนั้นก็กลับมาแบ่งงานกันทำ 

  
    </p>
     <div class="mb-6">
      <img src="/go4.jpeg" alt="ภาพประกอบการเรียนรู้จาก Bootcamp" class="w-full rounded-lg shadow-lg"/>
    </div>

    <p class="mb-4">
     จบท้ายด้วยกลับบ้านครับ ได้ความรู้จาก  Bootcamp & WorkShop นี้มากๆๆๆเลยครับ  ในชีวิตมหาลัยไม่มีสอน  
     ไม่เก่งแต่ต้องลอง   <span class="font-semibold text-blue-600 dark:text-blue-400">#เรียนเพิ่ม</span> 

  
    </p>
  </section>

  

  <section>
    <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 pb-2 border-b-2 border-blue-500 dark:border-blue-400">ข้อคิดทิ้งท้าย</h2>
    <p class="mb-4"> <span class="font-semibold text-blue-600 dark:text-blue-400">"ก่อนอื่นเลยครับผมก็ยังไม่เก่งครับ"</span> สำหรับใครที่กำลังมองหาโอกาสในการพัฒนาตัวเองด้าน Software Engineering ลองมองหา Bootcamp แบบนี้ดูครับ เพราะนอกจากจะได้ความรู้แล้ว ยังได้เรียนรู้ เทคนิคต่างๆจาก พี่ๆที่มาด้วยครับ 
    บางครั้งพี่เขาโครตเก่งเลยครับแต่ยังมาเรียนเพิ่ม แต่เรายังอยู่มหาลัยเลยทำอะไรอยู่น้อ 555* <span class="font-semibold text-blue-600 dark:text-blue-400">#อย่าลืมหาโอกาสให้ตัวเอง</span> 
    </p>
  </section>
</div>

</div>
    `,
    tags: [
      "Golang",
      "Microservices",
      "Docker",
      "Kubernetes",
      "AWS",
      "ArgoCD",
      "CI/CD",
      "Cloud-native",
    ],
    imageUrl: "/go.svg",
    imageUrl2: "/go1.jpg",
    category: "tech",
  },
  {
    id: "2",
    title: "NCSA CTF Boot Camp 2024",
    slug: "ncsa-ctf-boot-camp-2024",
    date: "2024-09-15",
    excerpt: "ประสบการณ์เข้าร่วม NCSA CTF Boot Camp 2024",
    content: `<span class="text-red-600 text-xl font-bold">เร็วๆนี้</span>`,
    tags: [
      "CTF",
      "Web application",
      "Digital Forensic",
      "Pwnable & Reverse Engineering",
      "Network Security",
      "Mobile Security",
      "Programming",
    ],
    imageUrl: "/ncsa.jpg",
    category: "tech",
  },
  {
    id: "3",
    title: "Blue Guardians: A Defensive CTF Challenge 2024",
    slug: "blue-guardians-defensive-ctf-challenge-2024",
    date: "2024-08-18",
    excerpt: "Competed in the Blue Guardians Defensive CTF Challenge...",
    content: `<span class="text-red-600 text-xl font-bold">เร็วๆนี้</span>`
    ,
    tags: ["CTF", "Competition", "Blue Team", "Defensive Security"],
    imageUrl: "/mfec.jpg",
    category: "tech",
  },
  {
    id: "4",
    title: "Cyber Range Thailand 2024",
    slug: "cyber-range-thailand-2024",
    date: "2024-09-21",
    excerpt: "Joined Cyber Range Thailand 2024...",
    content: `<span class="text-red-600 text-xl font-bold">เร็วๆนี้</span>`
    ,
    tags: ["Cyber Range", "CTF", "Threat Hunting"],
    imageUrl: "/crt.jpg",
    category: "tech",
  },
  {
    id: "5",
    title: "Thailand Cyber Top Talent 2024",
    slug: "thailand-cyber-top-talent-2024",
    date: "2024-09-28",
    excerpt: "Competed in Thailand Cyber Top Talent 2024...",
    content: `<span class="text-red-600 text-xl font-bold">เร็วๆนี้</span>`
    ,
    tags: [
      "Web Application",
      "Digital Forensics",
      "Reverse Engineering & Pwnable",
      "Network Security",
      "Mobile Security",
      "Programming",
      "Cryptography",
    ],
    imageUrl: "/ctt.png",
    category: "tech",
  },
  {
    id: "6",
    title: "Axie Infinity Scholarship Program",
    slug: "axie-infinity-scholarship-program",
    date: "25/02/2022",
    excerpt:
      "I worked in the GameFi sector, managing Axie Infinity Scholarships...",
    content: `<span class="text-red-600 text-xl font-bold">เร็วๆนี้</span>`
    ,
    tags: ["GameFi", "Blockchain", "Management"],
    imageUrl: "/axie.jpg",
    category: "non-tech",
  },
  {
    id: "7",
    title: "Selling authentic second-hand clothing and driving for Grab",
    slug: "selling-second-hand-clothing-and-driving-grab",
    date: "2024-10-15",
    excerpt:
      "I sell authentic second-hand clothing while driving for Grab concurrently",
    content: `<span class="text-red-600 text-xl font-bold">เร็วๆนี้</span>`
    ,
    tags: ["Leadership", "Soft Skills", "Event Management"],
    imageUrl: "/clr.png",
    category: "non-tech",
  },
  {
    id: "8",
    title: "Part-time Barista, Starbucks",
    slug: "part-time-barista-starbucks",
    date: "2024-10-15",
    excerpt: "I have worked as a Part-time Barista at Starbucks for 1 year",
    content:
     `<span class="text-red-600 text-xl font-bold">เร็วๆนี้</span>`,
    tags: ["Leadership", "Soft Skills", "Event Management"],
    imageUrl: "/bar.jpeg",
    category: "non-tech",
  },
];
