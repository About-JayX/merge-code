import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export const useTheme = () => {
  const theme = useSelector((state: RootState) => state.theme.value);
  return {
    isDark: theme === 'dark'
  };
};
