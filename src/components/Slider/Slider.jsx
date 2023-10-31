import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import jins from '../../assets/images/slider/jins.jpg';
import laptop from '../../assets/images/slider/laptop.jpg';
import shoe from '../../assets/images/slider/shoes.jpg';
const AutoplaySlider = withAutoplay(AwesomeSlider);
const Slider = () => {
    return (
        <div>
            <AutoplaySlider animation="cubeAnimation"
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
            >
                <div data-src={shoe} />
                <div data-src={laptop} />
                <div data-src={jins} />
            </AutoplaySlider>
        </div>
    );
};

export default Slider;