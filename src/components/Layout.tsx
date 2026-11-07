import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Search, Instagram, Linkedin, Dribbble, MessageCircle } from 'lucide-react';

export function Header(){
 const [open,setOpen]=useState(false); const [compact,setCompact]=useState(false); const [search,setSearch]=useState(false); const location=useLocation();
 useEffect(()=>{setOpen(false);setSearch(false)},[location.pathname]);
 useEffect(()=>{const onScroll=()=>setCompact(window.scrollY>24);window.addEventListener('scroll',onScroll,{passive:true});return()=>window.removeEventListener('scroll',onScroll)},[]);
 const links=[['Sobre mim','/sobre-mim'],['Serviços','/servicos'],['Portfólio','/portfolio'],['Contato','/contato']];
 return <header className={`site-header ${compact?'compact':''}`}><div className="nav-wrap"><Link to="/" className="wordmark" aria-label="Lírea Design, página inicial"><span>Lírea<em>✿</em></span><small>Design</small></Link><nav className="desktop-nav">{links.map(([name,to])=><NavLink key={to} to={to} className={({isActive})=>isActive?'active':''}>{name}</NavLink>)}</nav><div className="nav-actions"><button className="icon-button" aria-label="Buscar no site" onClick={()=>setSearch(!search)}><Search size={19}/></button><button className="icon-button menu-toggle" aria-label={open?'Fechar menu':'Abrir menu'} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></div>
 {search&&<form className="search-panel" onSubmit={e=>{e.preventDefault();const q=(e.currentTarget.elements.namedItem('q') as HTMLInputElement).value;window.location.href='/portfolio?busca='+encodeURIComponent(q)}}><input name="q" placeholder="Buscar projetos e serviços…" autoFocus/><button className="pill-button">Buscar</button></form>}
 <AnimatePresence>{open&&<motion.nav className="mobile-nav" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.28}}>{links.map(([name,to],i)=><motion.div key={to} initial={{opacity:0,x:18}} animate={{opacity:1,x:0}} transition={{delay:i*.07}}><NavLink to={to}>{name}<span>↗</span></NavLink></motion.div>)}</motion.nav>}</AnimatePresence></header>
}
export function Footer(){return <footer className="site-footer"><div className="footer-top"><Link to="/" className="wordmark dark"><span>Lírea<em>✿</em></span><small>Design</small></Link><p>Ideias com essência.<br/>Design com intenção.</p><nav>{[['Sobre mim','/sobre-mim'],['Portfólio','/portfolio'],['Serviços','/servicos'],['Contato','/contato']].map(([n,u])=><Link key={u} to={u}>{n}</Link>)}</nav><div className="socials"><a href="https://instagram.com/" aria-label="Instagram"><Instagram/></a><a href="https://linkedin.com/" aria-label="LinkedIn"><Linkedin/></a><a href="https://behance.net/" aria-label="Behance"><Dribbble/></a><a href="https://wa.me/" aria-label="WhatsApp"><MessageCircle/></a></div></div><div className="footer-bottom"><span>Sarah Santos | Lírea Design © | 2026</span><span>All Rights Reserved</span></div></footer>}
export default function Layout(){return <><Header/><main><Outlet/></main><Footer/></>}
