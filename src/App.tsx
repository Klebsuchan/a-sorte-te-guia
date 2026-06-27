/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ShieldCheck, Zap, DollarSign, BookOpen, ChevronRight, CheckCircle2, Star, Trophy, ArrowRight, ChevronDown, Clock, Bitcoin, Lock, Lightbulb, X, PlayCircle, Users, MessageCircle } from 'lucide-react';
import { EbookCheckoutModal } from './components/EbookCheckoutModal';

const REF_LINK = "https://sortenabet.bet.br?ref=ce23ae7ac36e";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="mb-6 bg-dark/60 backdrop-blur-md border border-red-500/30 rounded-xl p-4 text-center shadow-[0_0_15px_rgba(239,68,68,0.1)]">
      <p className="text-red-400 font-bold text-xs uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
        <Clock className="w-4 h-4 animate-pulse" />
        Preço promocional expira em
      </p>
      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col items-center">
          <div className="bg-dark text-white font-mono text-3xl font-black py-2 px-3 rounded-lg border border-red-500/20 w-16 shadow-inner text-center">
            {minutes.toString().padStart(2, '0')}
          </div>
          <span className="text-[10px] text-gray-500 mt-1 uppercase font-bold tracking-wider">Min</span>
        </div>
        <span className="text-red-500 font-black text-2xl pb-4 animate-pulse">:</span>
        <div className="flex flex-col items-center">
          <div className="bg-dark text-white font-mono text-3xl font-black py-2 px-3 rounded-lg border border-red-500/20 w-16 shadow-inner text-center">
            {seconds.toString().padStart(2, '0')}
          </div>
          <span className="text-[10px] text-gray-500 mt-1 uppercase font-bold tracking-wider">Seg</span>
        </div>
      </div>
    </div>
  );
}


const faqs = [
  {
    question: "Como funciona o bônus de boas-vindas?",
    answer: "Ao realizar o seu primeiro depósito, você recebe automaticamente um bônus de 300% sobre o valor depositado, pronto para ser usado em nossos jogos."
  },
  {
    question: "O e-book ensina estratégias garantidas?",
    answer: "O e-book é um guia passo a passo com estratégias comprovadas que ajudam a maximizar suas chances e gerenciar sua banca com inteligência, reduzindo riscos ao apostar."
  },
  {
    question: "Em quanto tempo recebo o acesso ao e-book?",
    answer: "O acesso ao e-book é liberado imediatamente após a confirmação do pagamento. Você receberá o link para download no seu e-mail cadastrado de forma instantânea."
  },
  {
    question: "A plataforma é segura?",
    answer: "Sim! Utilizamos tecnologia de criptografia de ponta e processamento via PIX, garantindo total segurança para seus dados e pagamentos instantâneos."
  },
  {
    question: "Como faço para sacar meus ganhos?",
    answer: "Os saques são processados rapidamente e de forma automatizada via PIX, caindo na sua conta bancária em poucos minutos após a solicitação."
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
  key?: React.Key;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-white/10 py-4 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-2 text-left font-medium text-lg md:text-xl text-gray-200 hover:text-vibrant transition-colors focus:outline-none"
      >
        <span className="pr-4">{question}</span>
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
          <ChevronDown 
            className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-vibrant' : ''}`} 
          />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-4 pt-2 text-gray-400 leading-relaxed text-base md:text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const testimonials = [
  {
    name: "Carlos M.",
    role: "Jogador VIP",
    image: "https://i.pravatar.cc/150?img=11",
    text: "O e-book mudou completamente minha forma de jogar. Antes eu apenas contava com a sorte, agora aplico a estratégia correta e os saques via PIX são imediatos!"
  },
  {
    name: "Amanda S.",
    role: "Iniciante",
    image: "https://i.pravatar.cc/150?img=5",
    text: "Sempre tive medo de jogar, mas a plataforma é muito segura e intuitiva. O bônus de 300% fez minha banca triplicar logo no primeiro dia. Recomendo muito!"
  },
  {
    name: "Rafael T.",
    role: "Apostador Experiente",
    image: "https://i.pravatar.cc/150?img=8",
    text: "Já testei várias casas, mas a estabilidade e a rapidez nos pagamentos me conquistaram. As táticas do guia são o grande diferencial que faltava."
  }
];

function FloatingTip({ onOpenEbookModal }: { onOpenEbookModal: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-dark/90 backdrop-blur-xl border border-vibrant/30 rounded-2xl p-5 mb-4 shadow-[0_10px_40px_rgba(127,195,35,0.2)] w-72 md:w-80"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-vibrant" />
                <h4 className="font-bold text-white">Dica de Ouro!</h4>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              "Nunca tente recuperar perdas na mesma hora. Estabeleça um limite diário de stop-loss e respeite-o."
            </p>
            <button 
              onClick={() => { setIsOpen(false); onOpenEbookModal(); }}
              className="block w-full py-2 bg-vibrant/10 hover:bg-vibrant/20 border border-vibrant/50 text-vibrant text-center font-bold text-sm rounded-lg transition-colors"
            >
              Ver Mais Dicas no E-book
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-vibrant text-dark rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(127,195,35,0.4)] hover:shadow-[0_0_30px_rgba(127,195,35,0.6)] transition-shadow"
      >
        <Lightbulb className={`w-7 h-7 transition-transform duration-300 ${isOpen ? 'rotate-180 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
        <X className={`w-7 h-7 absolute transition-transform duration-300 ${isOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-0 opacity-0'}`} />
      </motion.button>
    </div>
  );
}

const recentWins = [
  { name: "João Silva", amount: "R$ 1.450,00", game: "Fortune Tiger" },
  { name: "Maria Oliveira", amount: "R$ 890,50", game: "Aviator" },
  { name: "Carlos M.", amount: "R$ 3.200,00", game: "Roleta Ao Vivo" },
  { name: "Ana P.", amount: "R$ 550,00", game: "Mines" },
  { name: "Pedro H.", amount: "R$ 2.100,00", game: "Fortune Ox" },
  { name: "Lucas F.", amount: "R$ 7.800,00", game: "Spaceman" },
];

function LiveTicker() {
  return (
    <div className="bg-vibrant/10 border-y border-vibrant/20 py-3 overflow-hidden flex relative z-20">
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-dark to-transparent z-10" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-dark to-transparent z-10" />
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap items-center"
      >
        {[...recentWins, ...recentWins, ...recentWins].map((win, i) => (
          <div key={i} className="flex items-center gap-2 mx-6">
            <div className="w-2 h-2 rounded-full bg-vibrant animate-pulse" />
            <span className="text-gray-300 font-medium text-sm">
              <span className="text-white font-bold">{win.name}</span> acabou de ganhar
              <span className="text-vibrant font-bold ml-1">{win.amount}</span> no 
              <span className="text-yellow-400 font-bold ml-1">{win.game}</span>
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const popularGames = [
  { 
    name: "Fortune Tiger", 
    provider: "PG Soft",
    rtp: "96.81%",
    type: "Slots", 
    image: "/fortune-tiger.jpg",
    color: "from-orange-500",
    hot: true
  },
  { 
    name: "Aviator", 
    provider: "Spribe",
    rtp: "97.00%",
    type: "Crash", 
    image: "/aviator.jpg",
    color: "from-red-500",
    hot: true
  },
  { 
    name: "Crash", 
    provider: "Originals",
    rtp: "99.00%",
    type: "Crash", 
    image: "/crash.jpg",
    color: "from-purple-500",
    hot: true
  },
  { 
    name: "Mines", 
    provider: "Spribe",
    rtp: "97.00%",
    type: "Crash", 
    image: "/mines.jpg",
    color: "from-blue-500",
    hot: true
  },
];

function GamesShowcase() {
  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="text-vibrant font-bold tracking-widest uppercase text-sm mb-2 flex items-center gap-2">
            <PlayCircle className="w-4 h-4" /> Jogos Mais Quentes
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Onde a Sorte <span className="text-gray-500">Acontece</span></h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularGames.map((game, i) => (
            <motion.a
              href={REF_LINK}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-xl border border-white/10 block"
            >
              <img src={game.image} alt={game.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
              <div className={`absolute inset-0 bg-gradient-to-t ${game.color}/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Top Tags */}
              <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                <span className="bg-dark/80 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-widest px-2 py-1 rounded-md border border-white/10">
                  {game.provider}
                </span>
                {game.hot && (
                  <span className="bg-red-500 text-[10px] font-bold text-white uppercase tracking-widest px-2 py-1 rounded-md shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                    HOT 🔥
                  </span>
                )}
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{game.type}</span>
                  <span className="text-[11px] font-bold text-vibrant bg-vibrant/10 px-2 py-0.5 rounded border border-vibrant/20">RTP {game.rtp}</span>
                </div>
                <h3 className="text-2xl font-black text-white group-hover:text-vibrant transition-colors leading-none tracking-tight">{game.name}</h3>
                
                {/* Play Now Button (Appears on Hover) */}
                <div className="mt-4 h-0 opacity-0 group-hover:h-10 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                  <div className="w-full h-10 bg-vibrant rounded-lg flex items-center justify-center gap-2 text-dark font-bold text-sm shadow-[0_0_20px_rgba(127,195,35,0.4)]">
                    <PlayCircle className="w-5 h-5 fill-dark text-vibrant" /> Jogar Agora
                  </div>
                </div>
              </div>
              
              {/* Play Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-vibrant/90 text-dark rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 shadow-[0_0_30px_rgba(127,195,35,0.6)] group-hover:-translate-y-8">
                <PlayCircle className="w-8 h-8 ml-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const heroRef = useRef<HTMLElement>(null);
  const ebookRef = useRef<HTMLElement>(null);
  const [isEbookModalOpen, setIsEbookModalOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress: ebookScrollYProgress } = useScroll({
    target: ebookRef,
    offset: ["start end", "end start"]
  });

  const yHeroText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scaleHero = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <div className="min-h-screen bg-dark text-white font-sans selection:bg-vibrant selection:text-black overflow-x-hidden relative">
      
      <FloatingTip onOpenEbookModal={() => setIsEbookModalOpen(true)} />

      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-vibrant/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            y: [0, 50, 0],
            x: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[100px]" 
        />
        <div className="absolute inset-0 z-0 opacity-10 bg-mesh" />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 border-b border-white/5 bg-gradient-to-r from-[#182a10] via-dark to-dark backdrop-blur-md sticky top-0 overflow-hidden">
        <div className="absolute left-0 top-0 w-[500px] h-full bg-gradient-to-r from-vibrant/10 to-transparent pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2 relative">
            <span className="text-lg sm:text-xl md:text-2xl font-black italic tracking-tighter text-white drop-shadow-[0_0_10px_rgba(127,195,35,0.5)]">
              A sorte te guia! <span className="text-vibrant">Boa sorte!</span>
            </span>
          </div>
          <a 
            href={REF_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-6 py-2 bg-vibrant text-white rounded-md hover:bg-[#8EE626] transition-colors font-bold text-xs sm:text-sm"
          >
            Acessar Conta
          </a>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section ref={heroRef} className="pt-20 pb-32 px-4 relative overflow-hidden min-h-[80vh] flex flex-col justify-center">
          
          {/* Parallax Background Video */}
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
            className="absolute inset-[-20%] w-[140%] h-[140%] -z-10"
          >
            {/* Dark gradient: solid dark on the left for text readability, clear on the right for video */}
            <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/40 z-10" />
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover opacity-90 object-right"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
          </motion.div>

          {/* Parallax Floating Elements */}
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 150]) }} 
            className="absolute top-[15%] left-[50%] text-vibrant/40 opacity-50 z-0"
          >
            <motion.div animate={{ rotate: 360, y: [0, -30, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
              <Star className="w-16 h-16 md:w-24 md:h-24" strokeWidth={1} />
            </motion.div>
          </motion.div>
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }} 
            className="absolute bottom-[20%] right-[10%] text-yellow-500/40 opacity-50 z-0"
          >
            <motion.div animate={{ rotate: -360, y: [0, 40, 0] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
              <DollarSign className="w-20 h-20 md:w-32 md:h-32" strokeWidth={1} />
            </motion.div>
          </motion.div>
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]), x: useTransform(scrollYProgress, [0, 1], [0, 50]) }} 
            className="absolute top-[40%] right-[5%] text-vibrant/20 opacity-40 blur-sm z-0"
          >
            <motion.div animate={{ rotate: 180, scale: [1, 1.2, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}>
              <Trophy className="w-24 h-24 md:w-40 md:h-40" strokeWidth={1} />
            </motion.div>
          </motion.div>

          <motion.div 
            style={{ y: yHeroText, opacity: opacityHero, scale: scaleHero }}
            className="max-w-7xl mx-auto w-full text-left flex flex-col items-start relative z-20 mt-12 lg:mt-24"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 bg-dark/60 backdrop-blur-md border border-vibrant/30 px-4 py-2 rounded-full w-fit mb-8 shadow-[0_0_15px_rgba(127,195,35,0.15)]"
            >
              <Zap className="w-4 h-4 text-vibrant" />
              <span className="text-vibrant text-xs font-bold uppercase tracking-wider">Plataforma Líder em Pagamentos via PIX</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="max-w-3xl mb-8 md:mb-12"
            >
              <h1 className="text-4xl sm:text-5xl md:text-[60px] lg:text-[75px] leading-[0.95] font-black tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-2xl">
                A SORTE ESTÁ AO SEU LADO.<br />
                <motion.span 
                  animate={{ 
                    textShadow: [
                      "0px 0px 20px rgba(127,195,35,0.4)",
                      "0px 0px 40px rgba(127,195,35,0.8)",
                      "0px 0px 20px rgba(127,195,35,0.4)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="text-vibrant inline-block mt-2"
                >
                  MULTIPLIQUE SEUS GANHOS!
                </motion.span>
              </h1>

              <p className="text-base sm:text-lg md:text-2xl text-gray-200 leading-relaxed font-medium drop-shadow-lg max-w-2xl">
                Junte-se a milhares de jogadores que já estão lucrando diariamente. 
                Cadastre-se agora, receba seu bônus de boas-vindas e comece a jogar.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center sm:items-stretch gap-6 w-full sm:w-auto"
            >
              <a 
                href={REF_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 md:px-12 py-4 md:py-6 w-full sm:w-auto bg-vibrant text-white text-lg md:text-2xl font-bold rounded-xl hover:shadow-[0_0_50px_rgba(127,195,35,0.4)] hover:bg-[#8EE626] flex items-center justify-center gap-3 transition-all"
              >
                JOGAR E GANHAR AGORA
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </a>
              <div className="flex flex-col items-center justify-center sm:items-start text-center sm:text-left bg-dark/60 backdrop-blur-md border border-white/10 px-6 py-4 rounded-xl w-full sm:w-auto">
                <span className="text-yellow-400 font-black text-xl">+300% de Bônus</span>
                <span className="text-xs text-gray-300 uppercase tracking-widest font-semibold mt-1">no primeiro depósito</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <LiveTicker />

        {/* Trust Indicators */}
        <section className="py-12 border-y border-white/5 bg-panel relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                icon: DollarSign,
                title: "Saques via PIX",
                desc: "Receba seus ganhos instantaneamente 24/7",
                color: "text-vibrant",
                bg: "bg-vibrant/10"
              },
              {
                icon: ShieldCheck,
                title: "100% Seguro e Justo",
                desc: "Plataforma certificada internacionalmente",
                color: "text-yellow-500",
                bg: "bg-yellow-500/10"
              },
              {
                icon: Star,
                title: "Suporte VIP",
                desc: "Atendimento humanizado em português",
                color: "text-blue-500",
                bg: "bg-blue-500/10"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-default"
              >
                <div className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center shrink-0`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Payment & Security Logos */}
        <section className="py-8 border-b border-white/5 bg-dark/50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">
              Certificações e Pagamentos Seguros
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 text-gray-400 opacity-60 hover:opacity-100 transition-opacity duration-500">
              {/* PIX */}
              <div className="flex items-center gap-1 font-black text-2xl tracking-tighter hover:text-[#32BCAD] transition-colors cursor-default">
                <Zap className="w-6 h-6" /> PIX
              </div>
              
              {/* Mastercard approx */}
              <div className="flex items-center gap-1 hover:text-[#EB001B] transition-colors cursor-default">
                <div className="flex -space-x-3">
                  <div className="w-6 h-6 rounded-full bg-current opacity-80" />
                  <div className="w-6 h-6 rounded-full bg-[#F79E1B] mix-blend-screen opacity-80" />
                </div>
                <span className="font-bold text-xl tracking-tight ml-2">mastercard</span>
              </div>
              
              {/* Visa approx */}
              <div className="font-black text-3xl tracking-tighter italic hover:text-[#1434CB] transition-colors cursor-default">
                VISA
              </div>
              
              {/* Crypto */}
              <div className="flex items-center gap-1 font-bold text-xl hover:text-[#F7931A] transition-colors cursor-default">
                <Bitcoin className="w-7 h-7" /> Crypto
              </div>
              
              {/* SSL */}
              <div className="flex items-center gap-2 font-bold text-sm border-2 border-current px-3 py-1.5 rounded-md hover:text-green-500 transition-colors cursor-default">
                <Lock className="w-4 h-4" /> SSL SECURE
              </div>
              
              {/* +18 */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-current font-black text-sm hover:text-red-500 transition-colors cursor-default">
                18+
              </div>
            </div>
          </div>
        </section>

        <GamesShowcase />

        {/* E-book Upsell Section */}
        <section id="comprar-ebook" ref={ebookRef} className="py-24 px-4 relative overflow-hidden">
          {/* Decorative elements */}
          <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-gradient-to-l from-yellow-500/5 to-transparent pointer-events-none" 
          />
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-panel rounded-2xl border border-white/5 p-6 md:p-12 flex flex-col lg:flex-row items-center gap-8 md:gap-12 shadow-2xl relative overflow-hidden">
              
              {/* Shine effect */}
              <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-45deg] animate-[shimmer_3s_infinite]" />

              <motion.div 
                style={{ y: useTransform(ebookScrollYProgress, [0, 1], [50, -50]) }}
                className="flex-1 w-full relative group flex justify-center"
              >
                <img src="/capa-ebook.png" alt="O Código da Sorte E-book" className="w-full max-w-[340px] drop-shadow-[0_20px_50px_rgba(127,195,35,0.4)] group-hover:scale-105 transition-transform duration-500 rounded-2xl" />
              </motion.div>

              <div className="flex-1 space-y-6 z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vibrant/10 border border-vibrant/20 text-vibrant font-bold text-[10px] uppercase tracking-wider">
                  🔥 Oferta Exclusiva
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-[0.9]">
                  Pare de depender<br/><span className="text-gray-500">apenas da sorte.</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                  Adquira o nosso manual estratégico exclusivo. Aprenda a gerenciar sua banca, identificar os melhores momentos para apostar e maximizar suas chances matemáticas de vitória nos principais jogos da plataforma.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Gestão de Banca Profissional",
                    "Estratégias validadas para Slots e Crash",
                    "Controle Emocional e Disciplina",
                    "Segredos que os cassinos não te contam"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-vibrant shrink-0" />
                      <span className="text-gray-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-end gap-4 mb-6">
                    <span className="text-gray-500 line-through text-base md:text-lg italic">R$ 97,00</span>
                    <span className="text-3xl md:text-4xl font-black text-vibrant">R$ 27,90</span>
                  </div>
                  
                  <Countdown />

                  <motion.button 
                    onClick={() => setIsEbookModalOpen(true)}
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="group block w-full py-4 rounded-lg bg-vibrant text-white font-bold text-center text-lg hover:bg-[#8EE626] transition-colors shadow-[0_0_20px_rgba(127,195,35,0.1)] hover:shadow-[0_0_40px_rgba(127,195,35,0.3)]"
                  >
                    QUERO MEU E-BOOK AGORA
                  </motion.button>
                  <p className="text-center text-xs text-gray-500 mt-4 uppercase tracking-wider">
                    Acesso imediato após a confirmação do pagamento.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 relative overflow-hidden bg-dark/30">
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase">
                Perguntas <span className="text-vibrant">Frequentes</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl">
                Tire suas dúvidas sobre a plataforma e o nosso e-book.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 border-t-white/20 border-l-white/20 rounded-3xl p-6 md:p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
          
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-vibrant/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-vibrant/5 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2 pointer-events-none" />
        </section>

        {/* Testimonials Section */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase">
                Histórias de <span className="text-vibrant">Sucesso</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                Veja o que nossos jogadores estão achando da plataforma e do nosso guia exclusivo.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-2xl border border-white/10 border-t-white/20 border-l-white/20 rounded-3xl p-8 relative group hover:bg-white/10 hover:border-vibrant/30 transition-all shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] flex flex-col"
                >
                  <div className="flex justify-center md:justify-start gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-8 leading-relaxed flex-grow text-center md:text-left">
                    "{item.text}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto justify-center md:justify-start">
                    <img src={item.image} alt={item.name} className="w-14 h-14 rounded-full border-2 border-vibrant/50 object-cover" />
                    <div className="text-left">
                      <h4 className="text-white font-bold">{item.name}</h4>
                      <span className="text-vibrant text-sm font-semibold">{item.role}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-vibrant/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
        </section>

        {/* CTA Footer */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase leading-[0.9]">Pronto para a sua <br className="hidden sm:block"/><span className="text-vibrant">próxima grande vitória?</span></h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-8 md:mb-10">O bônus de primeiro depósito está te esperando. Cadastre-se em segundos.</p>
            <a 
              href={REF_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-lg bg-vibrant text-white font-bold text-lg md:text-xl hover:shadow-[0_0_40px_rgba(127,195,35,0.3)] transition-all hover:scale-105 group w-full sm:w-auto"
            >
              CRIAR MINHA CONTA GRÁTIS
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-transparent pt-8 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-xs font-bold text-gray-700">
              18+
            </div>
            <div className="max-w-2xl text-[10px] text-gray-600 space-y-2 opacity-60">
              <p>
                Este site é destinado apenas a maiores de 18 anos. Acesse com responsabilidade.
              </p>
              <p>
                © {new Date().getFullYear()} Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <EbookCheckoutModal isOpen={isEbookModalOpen} onClose={() => setIsEbookModalOpen(false)} />
    </div>
  );
}
