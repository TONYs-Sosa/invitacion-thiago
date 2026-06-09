"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Clock, Calendar, MessageCircle, Music, Sparkles, MapPin, Search, Cake, Smile, Camera, Gift, Shirt } from 'lucide-react';

interface TimeLeft {
  dias: number;
  horas: number;
  min: number;
  seg: number;
}

export default function InvitacionDinoCompleta() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => console.log("Error al reproducir:", error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ dias: 0, horas: 0, min: 0, seg: 0 });

  useEffect(() => {
    // Fecha actualizada al 20 de Junio de 2026 a las 14:00 hrs
    const targetDate = new Date("2026-08-21T18:30:00").getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          dias: Math.floor(distance / (1000 * 60 * 60 * 24)),
          horas: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          min: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seg: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f9f4] text-[#2c4a22] font-sans selection:bg-green-200 overflow-x-hidden">
      
      <audio ref={audioRef} loop>
        <source src="/song.MP3" type="audio/mpeg" />
      </audio>

      {/* --- HERO --- */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[10000ms] hover:scale-110"
          style={{ 
           
            backgroundImage: "url('/fondo-hero.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-emerald-950/70 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative text-center text-white px-4 flex flex-col items-center z-10">
          <span className="uppercase tracking-[0.3em] text-xs md:text-sm mb-4 bg-amber-500/90 px-5 py-2 rounded-full font-black animate-pulse text-stone-900 shadow-lg">
            SAVE THE DATE
          </span>
          <h1 className="text-7xl md:text-9xl font-black mb-2 tracking-tight drop-shadow-2xl text-amber-300 font-serif">
            ¡THIAGO
          </h1>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight drop-shadow-2xl text-amber-300 font-serif">
            CUMPLE 2!
          </h2>
          <p className="text-xl md:text-3xl font-bold tracking-widest text-white drop-shadow-md mb-12">
            Una aventura jurásica te espera
          </p>

          <button 
            onClick={toggleAudio}
            className="flex items-center gap-3 bg-amber-400 text-stone-900 font-bold px-8 py-4 rounded-full hover:bg-amber-300 transition-all shadow-xl hover:shadow-amber-500/40 active:scale-95 cursor-pointer"
          >
            <Music className={`w-5 h-5 ${isPlaying ? 'animate-spin' : ''}`} />
            <span className="text-xs uppercase tracking-widest font-black">
              {isPlaying ? "Pausar Rugido" : "Encender Música"}
            </span>
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#f4f9f4] clip-path-wave"></div>
      </section>

      {/* --- INTRO & CUENTA REGRESIVA --- */}
      <section className="py-16 bg-white border-b-4 border-emerald-100 shadow-inner text-center">
        <h2 className="text-4xl md:text-5xl font-black text-emerald-900 mb-6 font-serif">¡Prepárate para Rugir!</h2>
        <p className="text-lg md:text-xl text-emerald-700 max-w-2xl mx-auto px-6 mb-12 font-medium">
          Acompáñanos a celebrar el segundo añito de nuestro pequeño explorador Thiago en una fiesta prehistórica.
        </p>

        <p className="text-xs md:text-sm tracking-widest font-bold uppercase text-emerald-600 mb-6 flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" /> Tiempo restante <Sparkles className="w-5 h-5 text-amber-500" />
        </p>
        <div className="flex justify-center gap-4 md:gap-10 text-center max-w-xl mx-auto px-4">
          {(Object.entries(timeLeft) as [string, number][]).map(([label, value]) => (
            <div key={label} className="bg-emerald-50/60 flex-1 py-4 rounded-2xl border border-emerald-100/80 shadow-sm">
              <div className="text-3xl md:text-5xl font-black text-emerald-900 tracking-tight">{value}</div>
              <div className="text-[10px] md:text-xs uppercase tracking-wider text-emerald-600 mt-1 font-bold">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- EL CUMPLEAÑERO --- */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-emerald-50">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-black text-emerald-900 mb-6 font-serif">El Cumpleañero</h2>
            <p className="text-lg text-emerald-700 leading-relaxed font-medium">
              Nuestro pequeño T-Rex Thiago está listo para su aventura más grande hasta ahora. ¡Dos años llenos de rugidos, risas y descubrimientos!
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img 
              src="https://img.freepik.com/vector-premium/feliz-cumpleanos-dinosaurio-pastel-fiesta-feliz-dino-clipart_43314-2503.jpg" 
              alt="Thiago Dino" 
              className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl animate-bounce"
              style={{ animationDuration: '3s' }}
            />
          </div>
        </div>
      </section>

      {/* --- AMBIENTE JURÁSICO --- */}
      <section className="py-16 bg-emerald-900/5">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://img.kwcdn.com/product/fancy/9c93ae8b-f2c0-4274-9471-d61ff9dadab5.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp" 
              alt="Decoración Globos" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="uppercase tracking-[0.2em] text-xs font-bold text-amber-600 bg-amber-100 px-3 py-1 rounded-full">Ambiente Jurásico</span>
            <h2 className="text-4xl md:text-5xl font-black text-emerald-900 mt-4 mb-6 font-serif">¡Fiesta Temática!</h2>
            <p className="text-lg text-emerald-700 leading-relaxed font-medium">
              Tendremos una decoración llena de selva, globos y por supuesto, ¡muchos dinosaurios! Ven preparado para explorar cada rincón de nuestra jungla festiva.
            </p>
          </div>
        </div>
      </section>

      {/* --- ROAR-SOME --- */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center bg-amber-50 p-8 md:p-12 rounded-[3rem] shadow-lg border border-amber-100">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-amber-600 mb-6 font-serif">¡Roar-some!</h2>
            <p className="text-lg text-amber-900 leading-relaxed font-medium">
              No te puedes perder esta celebración épica de hace millones de años. Thiago quiere que todos sus amigos estén presentes en su día especial.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="/dinocumple.png" 
              alt="T-Rex Globos" 
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-xl rotate-3"
            />
          </div>
        </div>
      </section>

      {/* --- DINO-ACTIVIDADES --- */}
      <section className="py-20 bg-emerald-900/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center text-emerald-900 mb-16 font-serif">Dino-Actividades</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-3xl shadow-md border border-emerald-50 text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-black text-emerald-900 mb-3">Cacería de Fósiles</h3>
              <p className="text-emerald-700 font-medium">¡Busca los huesos perdidos en la alberca!</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md border border-emerald-50 text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cake className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-black text-emerald-900 mb-3">Mordida de Pastel</h3>
              <p className="text-emerald-700 font-medium">Momento de cantar el cumpleaños feliz al estilo dino.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md border border-emerald-50 text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smile className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="text-2xl font-black text-emerald-900 mb-3">Lluvia de Meteoritos</h3>
              <p className="text-emerald-700 font-medium">¡Ayuda a Thiago a romper la piñata para descubrir todas las sorpresas prehistóricas!</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- CITA Y EDAD --- */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <div className="mb-20">
          <div className="text-5xl mb-6 opacity-50">❝</div>
          <p className="text-2xl md:text-4xl font-black leading-relaxed text-emerald-950 font-serif mb-6">
            "Los momentos más grandes nacen de los dinosaurios más pequeños."
          </p>
          <p className="text-amber-600 font-bold uppercase tracking-[0.2em] text-sm">— Familia Jurásica de Thiago</p>
        </div>

        <div className="bg-emerald-900 text-white rounded-[3rem] p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl -mr-20 -mt-20 opacity-50"></div>
          <h2 className="text-2xl font-bold uppercase tracking-widest text-emerald-300 mb-4 relative z-10">¿Cuántos cumple?</h2>
          <div className="text-9xl font-black text-amber-300 mb-2 relative z-10 drop-shadow-lg">2</div>
          <p className="text-3xl font-black text-white mb-6 relative z-10 font-serif">Añitos</p>
          <div className="max-w-xl mx-auto relative z-10">
            <h3 className="text-xl font-bold text-amber-100 mb-3">Dos años de Rugidos</h3>
            <p className="text-emerald-100/90 font-medium leading-relaxed">
              Setecientos treinta días de alegría infinita. Thiago ha crecido más rápido que un Brontosaurio y queremos celebrarlo contigo.
            </p>
          </div>
        </div>
      </section>

      {/* --- GUÍA DEL EXPLORADOR --- */}
      <section className="py-20 bg-white border-y border-emerald-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center text-emerald-900 mb-16 font-serif">Guía del Explorador</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-emerald-50/50 rounded-2xl">
              <Shirt className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-black text-emerald-900 mb-2">Código de Vestimenta</h4>
                <p className="text-emerald-700 font-medium"> Libre.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-amber-50/50 rounded-2xl">
              <Gift className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-black text-emerald-900 mb-2">Lluvia de Regalos</h4>
                <p className="text-emerald-700 font-medium">Thiago estará feliz con cualquier detalle para su nueva cueva.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-emerald-50/50 rounded-2xl">
              <Camera className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-black text-emerald-900 mb-2">¡Fotos Roar-some!</h4>
                <p className="text-emerald-700 font-medium">Tendremos un set especial para que saques tus mejores rugidos ante la cámara.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- DETALLES DE RECEPCIÓN --- */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-emerald-50 p-8 md:p-12 rounded-[3rem] shadow-md border border-emerald-100 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-emerald-200 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <Calendar className="w-10 h-10 text-emerald-800" />
            </div>
            <h3 className="text-3xl font-black tracking-wide text-emerald-950 mb-8 uppercase font-serif">¿Cuándo y Dónde?</h3>
            <div className="space-y-6 font-medium text-emerald-800 w-full">
              
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <p className="text-sm uppercase tracking-widest text-emerald-600 font-bold mb-2">La Fecha</p>
                <p className="text-xl font-black text-emerald-900">Viernes 21 de Agosto, 2026</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Clock className="w-5 h-5 text-amber-500" />
                  <span className="font-bold text-lg">Hora: 06:30 PM </span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <p className="text-sm uppercase tracking-widest text-emerald-600 font-bold mb-2">El Valle Dino</p>
                <p className="text-xl font-black text-emerald-900">Salón infantil de dinosaurios Dinobrije</p>
                <p className="text-md text-emerald-700/80 mt-1">Ecatepec de Morelos, Estado de México</p>
                <a 
                  href="https://maps.app.goo.gl/ARoi1rCsoYXP6SK46" 
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center px-6 py-3 bg-emerald-700 text-white font-bold text-xs tracking-widest uppercase rounded-xl hover:bg-emerald-800 transition-all shadow-md active:scale-95"
                >
                  <MapPin className="w-4 h-4 mr-2" /> Ver Mapa
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- RSVP --- */}
      <section className="py-24 text-center px-6 bg-emerald-950 text-white rounded-t-[3rem]">
        <h2 className="text-4xl md:text-5xl font-black mb-6 text-amber-300 uppercase tracking-tight font-serif">¿Nos acompañas?</h2>
        <p className="max-w-md mx-auto text-emerald-100/90 font-medium mb-12 leading-relaxed text-lg">
          Por favor, confirma tu asistencia antes del 15 de Junio para preparar suficientes suministros para exploradores.
        </p>
        
        <a 
          href="https://wa.me/525642994279?text=¡Hola!%20Confirmamos%20nuestra%20asistencia%20al%20cumpleaños%20de%20Thiago%20🦖%20¡Ahí%20nos%20vemos!" 
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 md:px-12 py-5 rounded-full font-black text-sm tracking-widest shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all hover:scale-[1.03] active:scale-95"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          CONFIRMAR ASISTENCIA
        </a>

        <div className="mt-24 opacity-50">
          <p className="uppercase tracking-[0.4em] text-[11px] font-bold text-emerald-200">www.thiago2party.vercel.app</p>
        </div>
      </section>
      
{/* --- CREADO POR: INVITACIONES LUXUS --- */}
      <section className="bg-[#111827] text-white py-12 px-6 text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-gray-900/50 p-6 md:p-8 rounded-[2rem] border border-slate-800 backdrop-blur-sm">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 font-bold tracking-widest text-xs uppercase mb-1">
              <Sparkles className="w-4 h-4 animate-pulse" /> DISEÑO EXCLUSIVO
            </div>
            <h4 className="text-2xl font-black tracking-tight text-white font-serif">
              Invitaciones Luxus
            </h4>
            <p className="text-gray-400 text-sm mt-1 font-medium max-w-md">
              ¿Te gustó esta invitación interactiva? Sorprende a tus invitados en tu próximo evento con un diseño único y moderno.
            </p>
          </div>
          <a 
            href="https://wa.me/525574948894?text=¡Hola!%20Vi%20la%20invitación%20de%20Thiago%20y%20me%20gustaría%20cotizar%20una%20invitación%20personalizada%20con%20Invitaciones%20Luxus." 
            target="_blank"
            rel="noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-amber-400 text-gray-900 px-6 py-4 rounded-xl font-black text-xs tracking-widest uppercase hover:bg-amber-300 transition-all active:scale-95 whitespace-nowrap shadow-lg shadow-amber-400/20"
          >
            <MessageCircle className="w-4 h-4 fill-gray-900" />
            CREA TU INVITACIÓN AQUÍ
          </a>
        </div>
      </section>
    </div>
  );
}
