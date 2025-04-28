const TableWidget = () => {
    const dummyData = [
      { id: 1, name: "Product A", price: "$100" },
      { id: 2, name: "Product B", price: "$150" },
      { id: 3, name: "Product C", price: "$200" },
    ];
  
    return (
      <div className="w-full bg-white rounded shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Products</h2>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map(item => (
              <tr key={item.id} className="text-center">
                <td className="border px-4 py-2">{item.id}</td>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TableWidget;
  