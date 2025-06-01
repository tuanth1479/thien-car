"use client";

// image
import Image from "next/image";

// framer
import { motion } from "framer-motion";

// variants
import { fadeIn } from "/variants";

export default function Brands() {
  return (
    <section className="py-8 bg-white grid place-items-center">
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="mx-auto"
      >
        {/* brand wrapper */}
        <div className=" flex justify-center items-center grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between">
          
          <div>
            <Image src={"icons/brands/hyundai-motor-company-2.svg"} width={160} height={80} alt="" />
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}
