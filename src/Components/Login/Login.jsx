import { FaLanguage } from "react-icons/fa";
import React, { useState } from "react";
function Login() {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageSelect = (event) => {
    const language = event.target.value;
    setSelectedLanguage(language);
    // Perform any necessary logic with the selected language
  };

  return (
    <div>
      <select value={selectedLanguage} onChange={handleLanguageSelect}>
        <option value="">Select Language</option>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        {/* Add more language options as needed */}
      </select>
      {selectedLanguage && <FaLanguage />}
    </div>
  );
}

export default Login;
