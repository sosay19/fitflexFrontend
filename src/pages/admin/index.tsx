// pages/admin/index.tsx
import { useRouter } from 'next/router';
import dashboard from './dashboard';

const Admin: React.FC = () => {
    const router = useRouter();
    router.push('/admin/dashboard'); // Redirect to the dashboard

    return null;
};

export default Admin;
