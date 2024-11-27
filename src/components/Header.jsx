import logo1 from "../assets/images/more/logo1.png";

export default function Header() {
  return (
    <div
      className={`bg-header h-28 bg-center bg-no-repeat bg-cover flex justify-center items-center gap-3 text-white`}
    >
      <img className="h-16 md:h-20" src={logo1} alt="" />
      <h1 className="text-2xl md:text-6xl ">Espresso Emporium</h1>
    </div>
  );
}
