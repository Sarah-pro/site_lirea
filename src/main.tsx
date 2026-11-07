import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
import { Home, About, Services, ServiceDetail, Portfolio, ProjectDetail, Contact, NotFound } from './pages/Pages';
import './styles.css';
function AnimatedRoutes(){const location=useLocation();return <AnimatePresence mode="wait"><motion.div key={location.pathname} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-5}} transition={{duration:.22}}><Routes location={location}><Route element={<Layout/>}><Route index element={<Home/>}/><Route path="sobre-mim" element={<About/>}/><Route path="servicos" element={<Services/>}/><Route path="servicos/:slug" element={<ServiceDetail/>}/><Route path="portfolio" element={<Portfolio/>}/><Route path="portfolio/:slug" element={<ProjectDetail/>}/><Route path="contato" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Route></Routes></motion.div></AnimatePresence>}
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><BrowserRouter><AnimatedRoutes/></BrowserRouter></React.StrictMode>);
