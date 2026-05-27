'use client';
import dynamic from 'next/dynamic';

const ContactSlide = dynamic(() => import('./ContactSlide'), { ssr: false, loading: () => null });

export default function ContactSlideLoader() {
  return <ContactSlide />;
}
