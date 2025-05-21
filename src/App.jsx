import React from "react";
import { motion } from "framer-motion";
import "./index.css";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-4 py-10 font-sans">
      <section className="text-center space-y-6">
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          VENDIKATTU NAVEEN
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-xl text-gray-300">
          BACKEND DEVELOPER • DATA SCIENCE ENTHUSIAST
        </motion.p>
        <motion.a
          href="/B2(cv)_compressed.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-2 border border-purple-500 text-purple-300 rounded-full hover:bg-purple-600 hover:text-white transition"
        >
          Download Resume
        </motion.a>
      </section>

      <section className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {[
          {
            title: "nCare Project",
            time: "Nov 2024 – Present",
            desc: "Backend for cross-platform healthcare app using Node.js, Express.js, MongoDB. Secure APIs and Postman testing."
          },
          {
            title: "Credit Score Classification",
            time: "Jan 2024 – May 2024",
            desc: "ML model with EDA and classification for financial risk prediction. Data preprocessing and model interpretation."
          },
          {
            title: "Bitcoin Price Prediction",
            time: "Apr 2023 – Sep 2023",
            desc: "Time-series forecasting model for BTC prices using real-world financial datasets and ML pipelines."
          },
          {
            title: "COVID-19 Data Analysis",
            time: "Jul 2022 – Dec 2022",
            desc: "Analyzed global pandemic data for insights using Python. Trends, demographics, vaccination stats and impact."
          }
        ].map((proj, i) => (
          <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md border border-white/20">
            <h2 className="text-xl font-semibold text-purple-300">{proj.title}</h2>
            <p className="text-sm text-gray-400 mb-2">{proj.time}</p>
            <p className="text-gray-200 text-sm">{proj.desc}</p>
          </motion.div>
        ))}
      </section>

      <footer className="mt-20 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Vendikattu Naveen. All rights reserved.
      </footer>
    </main>
  );
}
