"use client"

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { RootState } from '../../redux/store';
import { protectedRoutes } from '../../middleware/routes';

type Props = {
  children?: React.ReactNode;
};

export const AuthWrapper = ({ children }: Props) => {
  const router = useRouter();
  const token = useSelector((state: RootState) => state.auth.token);
  const pathname = usePathname();

  useEffect(() => {
    // Redirect unauthenticated users from protected routes
    if (!token && protectedRoutes.includes(pathname)) {
      router.push('/login');
    }
  }, [router, token]);

  return children;
};