import { useContext, useState } from 'react';
import { ThemeContext } from '../helpers/themeProvider';

const CustomThemeCreator = () => {
  const { customColors, setCustomColors } = useContext(ThemeContext);
  const [primary, setPrimary] = useState(customColors.primary);
  const [secondary, setSecondary] = useState(customColors.secondary);

  const handleSave = () => {
    setCustomColors({ primary, secondary });
    window.location.reload();
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-lg font-bold">Create Custom Theme</h2>
      <div className="my-4">
        <label className="block mb-2 text-sm">Primary Color:</label>
        <input
          type="color"
          value={primary}
          onChange={(e) => setPrimary(e.target.value)}
          className="w-16 h-8 p-0 border"
        />
      </div>
      <div className="my-4">
        <label className="block mb-2 text-sm">Secondary Color:</label>
        <input
          type="color"
          value={secondary}
          onChange={(e) => setSecondary(e.target.value)}
          className="w-16 h-8 p-0 border"
        />
      </div>
      <button
        onClick={handleSave}
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Save Theme
      </button>
    </div>
  );
};

export default CustomThemeCreator;