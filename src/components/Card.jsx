import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Card({ data, reference }) {
  return (
    <motion.div
      drag
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.2}
      dragConstraints={reference}
      dragTransition={{bounceStiffness: 100, bounceDamping: 30}}
      className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0  w-full left-0 ">
        <div className="flex items-center justify-between py-3 px-8 mb-3">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 rounded-full flex items-center justify-center bg-zinc-600">
            {data.close ? (
              <IoClose />
            ) : (
              <LuDownload size="0.8em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen ? (
          <div
            style={{ background: `${data.tag.tagColor}` }}
            className={`tag w-full py-4 flex justify-center items-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}
