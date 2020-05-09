import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

export const hp = (h: number): number => {
  const {height} = Dimensions.get('window');
  return height * (h / 100);
};

export const wp = (w: number): number => {
  const {width} = Dimensions.get('window');
  return width * (w / 100);
};

export const fp = (f: number): number => {
  const {width} = Dimensions.get('window');
  const tempHeight = (16 / 9) * width;
  return Math.sqrt(Math.pow(tempHeight, 2) + Math.pow(width, 2)) * (f / 100);
};

export const useHp = (h: number): number => {
  const [calculatedHeight, setCalculatedHeight] = useState(hp(h));

  useEffect(() => {
    function handleDimensionChange() {
      setCalculatedHeight(hp(h));
    }

    Dimensions.addEventListener('change', handleDimensionChange);
    return () => {
      Dimensions.removeEventListener('change', handleDimensionChange);
    };
  });

  return calculatedHeight;
};

export const useWp = (w: number): number => {
  const [calculatedWidth, setCalculatedWidth] = useState(wp(w));

  useEffect(() => {
    function handleDimensionChange() {
      setCalculatedWidth(wp(w));
    }

    Dimensions.addEventListener('change', handleDimensionChange);
    return () => {
      Dimensions.removeEventListener('change', handleDimensionChange);
    };
  });

  return calculatedWidth;
};

export const useFp = (f: number): number => {
  const [calculatedFontSize, setCalculatedFontSize] = useState(fp(f));

  useEffect(() => {
    function handleDimensionChange() {
      setCalculatedFontSize(fp(f));
    }

    Dimensions.addEventListener('change', handleDimensionChange);
    return () => {
      Dimensions.removeEventListener('change', handleDimensionChange);
    };
  });

  return calculatedFontSize;
};
