

export const Menu = (props) => {

  const clickHandler = (event) => {
    const name = event.target.value;
    props.onSelectVideo(name);
  }

  return (
    <form >
      <input onClick={clickHandler} type="radio" name="src" value="fast" defaultChecked/> fast
      <input onClick={clickHandler} type="radio" name="src" value="slow" /> slow
      <input onClick={clickHandler} type="radio" name="src" value="cute" /> cute
      <input onClick={clickHandler} type="radio" name="src" value="eek" /> eek
    </form>
  );
}
