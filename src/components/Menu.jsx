

export const Menu = (props) => {
  return (
    <form>
      <input type="radio" name="src" value="fast"/> fast
      <input type="radio" name="src" value="slow" /> slow
      <input type="radio" name="src" value="cute" /> cute
      <input type="radio" name="src" value="eek" /> eek
    </form>
  );
}
