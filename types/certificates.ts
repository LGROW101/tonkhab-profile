// components/certificates.ts
export type Certificate = {
    id: string;
    title: string;
    date: string;
    imageUrl: string;
    issuer: string;
}

export const certificates: Certificate[] = [
    {
        id: "1",
        title: "Go Software Engineering Bootcamp รุ่นที่ 2",
        date: "2024-03-24",
        imageUrl: "/golang.png",
        issuer: "KBTG"
    },
    {
        id: "2",
        title: "Amazon Simple Storage Service (Amazon S3)",
        date: "2024-09-15",
        imageUrl: "/kodekloud.png",
        issuer: "kodekloud"
    },
    {
        id: "3",
        title: "AWS EKS",
        date: "2024-08-18",
        imageUrl: "/eks.png",
        issuer: "kodekloud"
    },
    {
        id: "4",
        title: "Cyber Sec Pro : Blue Guardians: A Defensive CTF Challenge ",
        date: "2024-08-18",
        imageUrl: "/mfec.jpeg",
        issuer: "MFEC"
    },
    {
        id: "5",
        title: "STDiO2024 CTF Qualification Round from 2600 Thailand!",
        date: "2024-09-18",
        imageUrl: "/gcc.jpeg",
        issuer: "2600 Thailand"
    },
   
];