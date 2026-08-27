export default function PersonCard({ person, onClick }) {
  return (
    <div
      className="card p-3 mb-3 shadow-sm"
      onClick={() => onClick(person)}
      style={{ cursor: "pointer" }}
    >
      <h5>{person.name}</h5>
      <p>Email: {person.email}</p>
      <p>Telefone: {person.phone}</p>
    </div>
  );
}
