import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useScrollToSection = () => {
  const navigate = useNavigate();

  const scrollToSection = useCallback((path: string) => {
    const [pagePath, sectionId] = path.split('#');
    
    if (window.location.pathname !== pagePath) {
      navigate(path);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [navigate]);

  return scrollToSection;
};

export default useScrollToSection;
