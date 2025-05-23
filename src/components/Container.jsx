const Container = ({ children, className="" }) => {
  return (
    <section className={`w-full flex gap-8 flex-col ${className}`}>
      {children}
    </section>
  );
};
export default Container;
