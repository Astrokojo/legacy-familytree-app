import { motion } from 'framer-motion';
import { fadeIn } from './variants';
const Hero = () => {
    return (
        <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="hero">
            <div className="hero-mask">
                <motion.div
                    variants={fadeIn("up", 1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.7 }}
                    className="hero-content">
                    <div className="hero-text">
                        <h1 >Start With A Common Ancestor</h1>
                        <h4 >Build Your Legacy</h4>
                        {/* <a to="" className="hero-button" href="#!" role="button">Call to action</a> */}
                    </div>
                </motion.div>
            </div>
        </motion.div>


    );
}
export default Hero;