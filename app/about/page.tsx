'use client'
// app/about/page.tsx
import React, { useCallback, useEffect, useState, useMemo } from 'react';
import PersonalInfo from '@/components/PersonalInfo';
import TechIcons from '@/components/TechIcons';
import { Navbar } from '@/components/Navbar';

export default function AboutPage() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState(' Chaloemrat or you can call me Tonkhab.');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = useMemo(() => [" student", " Chaloemrat or you can call me Tonkhab."], []);
  const period = 2000;

  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, text, toRotate, period]);

  useEffect(() => {
    const ticker = setInterval(tick, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [tick, delta]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Navbar />
      <PersonalInfo text={text} />
      <TechIcons />
    </div>
  );
}