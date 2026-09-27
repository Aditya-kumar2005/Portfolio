import SiteHeader from "./SiteHeader";
import Footer from "./Footer";
export default function PageShell({children}:{children:React.ReactNode}){return <div className="page-wrap"><SiteHeader/>{children}<Footer/></div>}
