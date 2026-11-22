'use client';

import { useState, useEffect } from 'react';

export type DeviceTier = 'high' | 'mid' | 'low';

interface NavigatorWithDeviceInfo extends Navigator {
  deviceMemory?: number;
}

export function useDeviceTier(): DeviceTier {
  const [tier, setTier] = useState<DeviceTier>('high');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTier('low');
      return;
    }

    if (!/iPhone|iPad|Android/i.test(navigator.userAgent)) {
      setTier('high');
      return;
    }

    const nav = navigator as NavigatorWithDeviceInfo;
    const memory = nav.deviceMemory ?? 4;
    const cores = nav.hardwareConcurrency ?? 4;
    setTier(memory >= 4 && cores >= 6 ? 'mid' : 'low');
  }, []);

  return tier;
}
