import { cookies } from "next/headers";
import { ThemeProvider } from "./themeProvider";
import { ConfigProvider } from "antd";

const AppLayout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = await cookies();
  let initialColors: { primary: string; secondary: string } = { primary: '', secondary: '' };

  try {
    const colorsCookie = cookieStore.get('customColors');
    if (colorsCookie) {
      initialColors = JSON.parse(colorsCookie.value);
    }
  } catch (error) {
    console.error('Error parsing custom colors cookie:', error);
  }

  return (
    <ConfigProvider theme={{
      token: {
        colorPrimary: initialColors.primary
      },
      components: {
        DatePicker: {
          colorPrimary: initialColors.primary
        },
        Button: {
          colorPrimary: initialColors.primary
        }
      }
    }}>
      <ThemeProvider initialColors={initialColors}>
        {children}
      </ThemeProvider>
    </ConfigProvider>
  )
}

export default AppLayout;