import DashboardLayout from "@/pages/Layouts/DashboardLayout";
const admin = () => {
  return (
    <div>
      <h1>This is Admin Dashboard</h1>
    </div>
  );
};

export default admin;

// for layout connect
admin.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
