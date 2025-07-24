export default function Home() {
  const recommendations = [
    { useCase: "Secure Email", recommended: "CRYSTALS-Kyber + SPHINCS+" },
    { useCase: "VPN", recommended: "BIKE or Classic McEliece" },
    { useCase: "TLS Web", recommended: "Kyber + Dilithium" },
  ];

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">PQC CMI Dashboard</h1>
      <p className="text-gray-600">Compliance Matrix Index for PQC Migration</p>
      <div className="bg-white rounded-xl shadow-md p-4">
        <table className="min-w-full table-auto border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Use Case</th>
              <th className="border px-4 py-2">Recommended PQC</th>
            </tr>
          </thead>
          <tbody>
            {recommendations.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.useCase}</td>
                <td className="border px-4 py-2">{item.recommended}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
