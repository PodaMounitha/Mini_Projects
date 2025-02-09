import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Shield, AlertTriangle, Loader2 } from 'lucide-react';

const EmailChecker: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<'safe' | 'phishing' | null>(null);

  const handleCheck = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setResult(Math.random() > 0.5 ? 'safe' : 'phishing');
    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
    >
      <div className="flex items-center mb-6">
        <Mail className="h-6 w-6 text-blue-500 mr-2" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Email Content Checker</h2>
      </div>

      <div className="mb-6">
        <textarea
          placeholder="Paste email content here..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-48 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleCheck}
        disabled={!email || loading}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center"
      >
        {loading ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <>
            <Shield className="h-5 w-5 mr-2" />
            Analyze Email
          </>
        )}
      </motion.button>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-6 p-4 rounded-lg ${
            result === 'safe'
              ? 'bg-green-100 dark:bg-green-900/30'
              : 'bg-red-100 dark:bg-red-900/30'
          }`}
        >
          <div className="flex items-center">
            {result === 'safe' ? (
              <Shield className="h-6 w-6 text-green-500" />
            ) : (
              <AlertTriangle className="h-6 w-6 text-red-500" />
            )}
            <span
              className={`ml-2 font-medium ${
                result === 'safe'
                  ? 'text-green-700 dark:text-green-300'
                  : 'text-red-700 dark:text-red-300'
              }`}
            >
              {result === 'safe'
                ? 'This email content appears to be safe'
                : 'Warning: Potential phishing email detected'}
            </span>
          </div>
          {result === 'phishing' && (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 ml-8 list-disc text-red-700 dark:text-red-300"
            >
              <li>Contains suspicious links</li>
              <li>Uses urgent or threatening language</li>
              <li>Requests sensitive information</li>
            </motion.ul>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default EmailChecker;