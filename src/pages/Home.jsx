import { usePersons } from "../hooks/usePersons";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/themeContext";
import SkeletonLoading from "../components/SkeletonLoading";

import PersonList from "../components/PersonList";
import PersonModal from "../components/PersonModal";

export default function Home() {
  const { theme, togleTheme } = useContext(ThemeContext);
  const { persons, loading } = usePersons();
  const [search, setSearch] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);
  const FilteredPersons = persons.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div className="container mt-4">
      <input
        className="form-control mb-3"
        placeholder="Buscar por nome"
        onChange={e => setSearch(e.target.value)}
      />
      <button
        onClick={togleTheme}
        className={`btn btn-${theme === "light" ? "dark" : "light"} mb-3`}
      >
        alternar tema
      </button>
      <h1 className="mb-4">Catálogo de Pessoas</h1>

      {loading ? (
        <SkeletonLoading />
      ) : (
        <PersonList
          persons={FilteredPersons}
          onSelectPerson={setSelectedPerson}
        />
      )}
      {selectedPerson && (
        <PersonModal
          person={selectedPerson}
          onClose={() => selectedPerson(setSelectedPerson(null))}
        />
      )}
    </div>
  );
}
