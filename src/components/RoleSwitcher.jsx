export default function RoleSwitcher({ role, setRole }) {
  return (
    <select 
      value={role} 
      onChange={(e) => setRole(e.target.value)}
      className="mb-4 p-2 border"
    >
      <option value="viewer">Viewer</option>
      <option value="admin">Admin</option>
    </select>
  );
}