import styles from "./SearchForm.module.css";

function SearchForm({ inputRef, onSearch }) {
  const handleChange = () => {
    console.log("Current input value:", inputRef.current.value);
  };

  return (
    <form className={styles.form} onSubmit={onSearch}>
      <input
        ref={inputRef}
        type="text"
        onChange={handleChange}
        placeholder="Search news by keyword"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        검색
      </button>
    </form>
  );
}

export default SearchForm;
