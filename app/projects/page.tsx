import { redirect } from 'next/navigation';
export const metadata = { title: 'Projects — Aditya Kumar' };
export default function ProjectsIndexRedirect(){ redirect('/portfolio'); }
