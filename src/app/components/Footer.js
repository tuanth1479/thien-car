"use client";

// next image
import Image from "next/image";

// icons
import { FaPhone, FaEnvelope } from "react-icons/fa6";

// components
import Copyright from "./Copyright";

// framer
import { motion } from "framer-motion";

// variants
import { fadeIn } from "/variants";

// link /react scroll
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="pt-20 bg-white z-20" id="contact">
      <div className="container mx-auto mb-24">
        {/* grid */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
        >
          <div className="flex flex-col flex-1 gap-y-8">
            {/* logo */}
            <Link
              to={"home"}
              smooth={true}
              spy={true}
              className="cursor-pointer"
            >
              <Image src={"/icons/logo-thien.svg"} width={300} height={200} alt="" />
            </Link>
            {/* text */}
            <div className="text-secondary">
              📍 Liên hệ tư vấn mua xe Hyundai
            </div>
            {/* phone & email */}
            <div className="flex flex-col gap-y-4 font-semibold">
              {/* phone */}
              <div className="flex items-center gap-x-[10px]">
                <FaPhone />
                <div className="font-medium">(123)456-7890</div>
              </div>
              {/* email */}
              <div className="flex items-center gap-x-[10px]">
                <FaEnvelope />
                <div className="font-medium">office@carland.com</div>
              </div>
            </div>
          </div>
          {/* links */}
          {/* <div className="flex flex-1 flex-col xl:items-center">
            <div>
              <h3 className="h3 font-bold mb-8">Company</h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                <li>
                  <a href="">New York</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Mobile</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">How we work</a>
                </li>
              </ul>
            </div>
          </div> */}
          {/* program */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Giờ làm việc</h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div className="text-secondary">Thứ Hai-Chủ Nhật:</div>
                <div className="font-semibold">7:00AM - 09:00PM</div>
              </div>
              {/* <div className="flex gap-x-2">
                <div className="text-secondary">Thứ 7:</div>
                <div className="font-semibold">9:00AM - 07:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Sun:</div>
                <div className="font-semibold">Closed</div>
              </div> */}
            </div>
          </div>
          {/* newsletter */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Để lại thông tin tư vấn</h3>
            <div className="mb-9 text-secondary">Chúng tôi sẽ liên hệ ngay trong vòng 24h.</div>
            {/* form */}
            <form className="flex flex-col gap-y-3" target="_blank" action="https://docs.google.com/forms/d/e/1FAIpQLSerIT8NOUausuXGMj638xgdvdRHdOuSUi52UJuTnJBEbWSw5w/formResponse" method="POST">
              <input
                type="text"
                name="entry.1444716707"
                id="entry.1444716707"
                placeholder="Tên"
                required
                className="outline-none w-full h-12 px-4 bg-white  border rounded-lg pl-4 focus:border-accent"
              />
              <input
                type="text"
                name="entry.1961486141"
                id="entry.1961486141"
                required
                placeholder="Số điện thoại hoặc email"
                className="outline-none w-full h-12 px-4 bg-white border rounded-lg pl-4 focus:border-accent"
              />
              <button type="submit" className="btn btn-sm h-12 btn-accent w-24">
                Gửi
              </button>
              
            </form>
          </div>
        </motion.div>
      </div>
      <Copyright />
    </footer>
  );
}
