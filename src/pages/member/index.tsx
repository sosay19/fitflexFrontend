// pages/member/index.tsx
import { useRouter } from 'next/router';
import dashboard from './dashboard';

const Member: React.FC = () => {
    const router = useRouter();
    router.push('/member/dashboard'); // Redirect to the dashboard

    return null;
};

export default Member;
