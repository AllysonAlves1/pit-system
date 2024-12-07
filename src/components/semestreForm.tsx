export default function SemestreSelector({ semestre, onChange }: any) {
    const handleSelect = (e) => onChange(e.target.value);
  
    return (
      <div className="p-4 bg-white shadow rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Selecionar Semestre</h2>
        <select
          className="border border-gray-300 rounded-md p-2 w-full"
          value={semestre}
          onChange={handleSelect}
        >
          <option value="">Selecione o semestre</option>
          <option value="2024.1">2024.1</option>
          <option value="2024.2">2024.2</option>
        </select>
      </div>
    );
  }
  