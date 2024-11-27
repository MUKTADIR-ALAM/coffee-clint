import mug from "../assets/images/icons/1.png";
import badge from "../assets/images/icons/2.png";
import beans from "../assets/images/icons/3.png";
import cup from "../assets/images/icons/4.png";

export default function Feature() {
  return (
    <div className="bg-[#ECEAE3]">
    <div className="p-7 md:flex justify-between items-center gap-4 w-11/12 mx-auto">
      <div>
        <img src={mug} alt="" /> 
        <h2 className="text-4xl">Awesome Aroma</h2>
        <p>You will definitely be a fan of the design & aroma of your coffee</p>
      </div>
      <div>
        <img src={badge} alt="" /> 
        <h2 className="text-4xl">High Quality</h2>
        <p>We served the coffee to you maintaining the best quality</p>
      </div>
      <div>
        <img src={beans} alt="" /> 
        <h2 className="text-4xl">Pure Grades</h2>
        <p>The coffee is made of the green coffee beans which you will love</p>
      </div>
      <div>
        <img src={cup} alt="" /> 
        <h2 className="text-4xl">Proper Roasting</h2>
        <p>Your coffee is brewed by first roasting the green coffee beans</p>
      </div>
    </div>
    </div>
  );
}
