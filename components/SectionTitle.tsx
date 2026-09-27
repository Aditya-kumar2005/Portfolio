type Props={eyebrow:string,title:string,description?:string};
export default function SectionTitle({eyebrow,title,description}:Props){return <div className="max-w-3xl"><p className="eyebrow">{eyebrow}</p><h1 className="section-title mt-5">{title}</h1>{description&&<p className="body-copy mt-6 max-w-2xl text-base">{description}</p>}</div>}
