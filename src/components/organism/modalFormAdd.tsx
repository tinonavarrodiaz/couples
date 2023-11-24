

export function modalFormAdd() {
  return (
    <dialog id="favDialog">
      <button></button>
      <form method="dialog">
        <section>
          <p>
            <label htmlFor="favAnimal">Favorite animal:</label>
            <select id="favAnimal">
              <option></option>
              <option>Brine shrimp</option>
              <option>Red panda</option>
              <option>Spider monkey</option>
            </select>
          </p>
        </section>
        <menu>
          <button id="cancel" type="reset">Cancel</button>
          <button type="submit">Confirm</button>
        </menu>
      </form>
    </dialog>
  )
}
