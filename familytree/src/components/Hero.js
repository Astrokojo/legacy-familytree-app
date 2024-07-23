import { Parallax, ParallaxLayer } from "@react-spring/parallax";
const Hero = () => {
    return (
        <Parallax pages={1.5}>
            <ParallaxLayer
                offset={0}
                speed={0.5}
                factor={1}
                className="hero-bg" />
            <ParallaxLayer
                offset={0}
                speed={0.8}
                factor={1.5}
                className="hero-content-layer">

                <div className="hero-content">
                    <p>Start with a common ancestor</p>
                    <h1>Build Your Family Tree</h1>
                </div>
            </ParallaxLayer>
        </Parallax>
    );
}
export default Hero;