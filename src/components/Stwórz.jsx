export const CreateAuthor = ({ onCreate }) => (
  <fieldset>
    <form onSubmit={onCreate}>
      <div>
        <label htmlFor="name">Imię autora</label>
        <input id="name" name="name" />
      </div>
      <div>
        <label htmlFor="surname">Nazwisko autora</label>
        <input id="surname" name="surname" />
      </div>
      <button>Stwórz</button>
    </form>
  </fieldset>
);
