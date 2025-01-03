import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";

import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import { ClassType } from "@/shared/types";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Every New Year, fitness clubs see a HUGE increase in enrollment. Motivated by the desire to get fit or lose weight, thousands of people flock to gyms. According to statistics, 80 percent of these people will quit within the first five months… Unless gym owners can do something about it.",
    image: image1,
  },
  {
    name: " Yoga Classes",

    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Every New Year, fitness clubs see a HUGE increase in enrollment. Motivated by the desire to get fit or lose weight, thousands of people flock to gyms. According to statistics, 80 percent of these people will quit within the first five months… Unless gym owners can do something about it.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Every New Year, fitness clubs see a HUGE increase in enrollment. Motivated by the desire to get fit or lose weight, thousands of people flock to gyms. According to statistics, 80 percent of these people will quit within the first five months… Unless gym owners can do something about it.",
    image: image4,
  },
  {
    name: "Fitness Classes",

    image: image5,
  },
  {
    name: " Training Classes",
    description:
      "Every New Year, fitness clubs see a HUGE increase in enrollment. Motivated by the desire to get fit or lose weight, thousands of people flock to gyms. According to statistics, 80 percent of these people will quit within the first five months… Unless gym owners can do something about it.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="bg-primary-100 w-full">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Class proceeds to target every area with a full body workout
              engaging entire abdominal core, legs (inner, outer thigh), arms
              (triceps, rotator cuff, trapezius) including building strength
              through lower lumber. Exercises also include various uses of
              apparatus varying from 'magic circle', 'weights', 'stretch bands'
              and of course our own body...there are always many options to
              teach effective classes.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
