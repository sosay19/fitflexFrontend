import AdminMembersManagement from '../../components/AdminMembersManagement';
import AdminClassesManagement from '../../components/AdminClassesManagement';
import AdminMembershipsManagement from '../../components/AdminMembershipsManagement';
import AdminReports from '../../components/AdminReports';
import AdminSettings from '../../components/AdminSettings';

const AdminDashboardPage = () => {
    return (
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Admin Dashboard</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AdminMembersManagement />
                        <AdminClassesManagement />
                        <AdminMembershipsManagement />
                        <AdminReports />
                        <AdminSettings />
                    </div>
                </div>
            </div>
    );
};

export default AdminDashboardPage;
