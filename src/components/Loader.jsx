import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050508]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          {/* Animated background orb */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600" />
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col items-center gap-8"
          >
            {/* Logo mark */}
            <div className="relative">
              <motion.div
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center shadow-[0_0_60px_rgba(124,58,237,0.6)]"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="font-display font-bold text-3xl text-white">T</span>
              </motion.div>
              {/* Orbiting dot */}
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>

            {/* Name */}
            <div className="text-center">
              <motion.p
                className="font-display text-xl font-bold gradient-text"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Thrisha Reddy
              </motion.p>
              <p className="text-slate-500 text-sm mt-1 tracking-widest uppercase">Portfolio</p>
            </div>

            {/* Loading bar */}
            <div className="w-48 h-0.5 bg-white/5 rounded-full overflow-hidden">
              <div className="loader-bar h-full bg-gradient-to-r from-violet-600 via-blue-500 to-violet-600 rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
