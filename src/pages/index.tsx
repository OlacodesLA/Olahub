import AppLayout from "@/layouts/appLayout";
import Home from "@/components/home";

const HomePage = () => {
  return (
    <AppLayout>
      <div className="mt-3">
        <Home />
      </div>
    </AppLayout>
  );
};

export default HomePage;
