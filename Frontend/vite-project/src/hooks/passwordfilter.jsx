import React, { useState } from 'react';
import Pwdguide from './pwdguide';
import hiddenPasswordIcon from '../assets/icons/slasheye.png';
import visiblePasswordIcon from '../assets/icons/slasheye2.jpg';
const PasswordForm = ({ setPassword, password }) => {
  const [passwordStrength, setPasswordStrength] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const calculatePasswordStrength = (password) => {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    if (
      password.length >= minLength &&
      hasUppercase &&
      hasLowercase &&
      hasDigit &&
      hasSpecialChar
    ) {
      return 'Very Strong';
    } else if (
      password.length >= minLength &&
      ((hasUppercase && hasLowercase) ||
        (hasUppercase && hasDigit) ||
        (hasLowercase && hasDigit) ||
        (hasSpecialChar && hasDigit))
    ) {
      return 'Strong';
    } else if (password.length >= minLength && (hasUppercase || hasLowercase)) {
      return 'Moderate';
    } else {
      return 'Weak';
    }
  };


  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    const newStrength = calculatePasswordStrength(newPassword);

    setPassword(newPassword);
    setPasswordStrength(newStrength);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div>
        <label
          htmlFor="password"
          className="mb-1 text-xl block text-sm font-medium text-gray-600"
        >
          Password
        </label>

        <div className="relative">
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <span
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            onClick={togglePasswordVisibility}
          >
          {showPassword ? (
              <img
                src={hiddenPasswordIcon}
                alt="Hidden Password"
                className="h-6 w-6 text-gray-400 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <img
                src={visiblePasswordIcon}
                alt="Visible Password"
                className="h-6 w-6 text-gray-400 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
          )}
    

          </span>
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <p>Password Strength: {passwordStrength}</p>
        <Pwdguide />
      </div>
    </div>
  );
};

export default PasswordForm;
