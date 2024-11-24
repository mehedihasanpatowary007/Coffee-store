const Dashboard = () => {
    return (
      <div className="p-6 flex-1 overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Welcome to the Admin Panel
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Cards or Widgets */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold">Widget 1</h3>
            <p>Details about Widget 1</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold">Widget 2</h3>
            <p>Details about Widget 2</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold">Widget 3</h3>
            <p>Details about Widget 3</p>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;