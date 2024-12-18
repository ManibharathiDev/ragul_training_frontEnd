import SimpleImageSlider from "react-simple-image-slider";
const Slider = () =>{
    const images = [
        { url: "image/b1.jpg" },
        { url: "image/b2.jpg" },
      ];
    return(
        <>
        <div>
        <SimpleImageSlider
        width="100%"
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
        </div>

        </>
    );
};
export default Slider;