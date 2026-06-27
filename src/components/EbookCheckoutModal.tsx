import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ChevronRight, Lock } from 'lucide-react';

interface EbookCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EbookCheckoutModal({ isOpen, onClose }: EbookCheckoutModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setStep(2);
  };

  const handleClose = () => {
    setStep(1);
    setFormData({ name: '', email: '', whatsapp: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-panel border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-6 md:p-8">
                {step === 1 ? (
                  <>
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-vibrant/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-vibrant/30">
                        <Lock className="w-8 h-8 text-vibrant" />
                      </div>
                      <h2 className="text-2xl font-black text-white uppercase tracking-tight">Garantir Meu E-book</h2>
                      <p className="text-gray-400 text-sm mt-2">Preencha os dados abaixo para receber o material exclusivo.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Nome Completo</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-vibrant transition-colors"
                          placeholder="Digite seu nome"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">E-mail</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-vibrant transition-colors"
                          placeholder="seu@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">WhatsApp</label>
                        <input
                          type="tel"
                          required
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-vibrant transition-colors"
                          placeholder="(11) 99999-9999"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-vibrant hover:bg-[#8EE626] text-dark font-black uppercase tracking-wider py-4 rounded-lg transition-colors mt-6 flex items-center justify-center gap-2"
                      >
                        Continuar para o Pagamento
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </form>
                    <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-1">
                      <Lock className="w-3 h-3" /> Seus dados estão 100% seguros.
                    </p>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="w-20 h-20 bg-vibrant/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-vibrant/30"
                    >
                      <CheckCircle2 className="w-10 h-10 text-vibrant" />
                    </motion.div>
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-2">Dados Recebidos!</h2>
                    <p className="text-gray-400 mb-8">
                      Você será redirecionado para a plataforma de pagamento segura.
                    </p>
                    <button
                      onClick={handleClose}
                      className="w-full bg-vibrant hover:bg-[#8EE626] text-dark font-black uppercase tracking-wider py-4 rounded-lg transition-colors"
                    >
                      Entendi
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
