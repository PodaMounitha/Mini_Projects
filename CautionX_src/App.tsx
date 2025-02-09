import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Moon, Sun, CheckCircle2 } from 'lucide-react';
import VerificationModal from './components/VerificationModal';
import URLChecker from './components/URLChecker';
import EmailChecker from './components/EmailChecker';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [activeTab, setActiveTab] = useState<'url' | 'email'>('url');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  if (!isVerified) {
    return <VerificationModal onVerify={() => setIsVerified(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <nav className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">PhishGuard</span>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-500" />}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            AI-Powered Phishing Detection
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Protect yourself from malicious attacks with real-time URL and email analysis
          </p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('url')}
            className={`px-6 py-2 rounded-lg transition-colors ${
              activeTab === 'url'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Check URL
          </button>
          <button
            onClick={() => setActiveTab('email')}
            className={`px-6 py-2 rounded-lg transition-colors ${
              activeTab === 'email'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Check Email
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'url' ? <URLChecker /> : <EmailChecker />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;