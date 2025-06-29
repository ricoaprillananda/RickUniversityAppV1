import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-base-200 p-8">
        <h1 className="text-3xl font-bold">Selamat Datang di Dashboard!</h1>
      </div>
    </>
  );
}

export default Dashboard;
