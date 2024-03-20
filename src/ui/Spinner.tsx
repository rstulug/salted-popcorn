function Spinner() {
  return (
    <div className="flex justify-center items-center w-full h-96">
      <div
        className={`inline-block w-16 animate-spin rounded-full border-8 border-solid border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] h-16`}
        role="status"
      ></div>
    </div>
  );
}

export default Spinner;
