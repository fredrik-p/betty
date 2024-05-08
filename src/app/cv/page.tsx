import Navbar from "@/components/Navbar";
import CV from "@/components/Cv";

const Curiculum = () => {
  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center mt-24">
        <CV />
      </main>
    </>
  );
};

export default Curiculum;
