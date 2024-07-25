import { motion } from 'framer-motion';
import { fadeIn, slideIn } from './variants';
const Hero = () => {
    return (
        <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.1 }}
            className="hero">
            <div className="hero-mask">
                <motion.div
                    variants={slideIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="hero-content">
                    <div className="hero-text">
                        <h1 >Explore the Roots of Your Family Tree</h1>
                        <h4 >Build Your Legacy</h4>
                        {/* <a to="" className="hero-button" href="#!" role="button">Call to action</a> */}
                    </div>
                </motion.div>
            </div>
        </motion.div>


    );
}
export default Hero;