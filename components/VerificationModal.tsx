import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle2 } from 'lucide-react';

interface VerificationModalProps {
  onVerify: () => void;
}

const VerificationModal: React.FC<VerificationModalProps> = ({ onVerify }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleVerification = () => {
    if (isChecked) {
      onVerify();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 max-w-md w-full"
      >
        <div className="flex justify-center mb-6">
          <Shield className="h-16 w-16 text-blue-500" />
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Human Verification
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
          Before proceeding, please verify that you are a human user to ensure the security of our service.
        </p>
        <div className="flex items-center justify-center mb-8">
          <label className="flex items-center space-x-3 cursor-pointer">
            <div
              className="w-6 h-6 border-2 rounded flex items-center justify-center transition-colors"
              onClick={() => setIsChecked(!isChecked)}
            >
              {isChecked && <CheckCircle2 className="h-5 w-5 text-blue-500" />}
            </div>
            <span className="text-gray-700 dark:text-gray-300">I am a human</span>
          </label>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleVerification}
          className={`w-full py-3 rounded-lg text-white font-medium transition-colors ${
            isChecked ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
          }`}
          disabled={!isChecked}
        >
          Continue
        </motion.button>
      </motion.div>
    </div>
  );
};

export default VerificationModal;