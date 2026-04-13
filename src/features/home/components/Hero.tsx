"use client";
import { motion } from 'motion/react';

export default function Hero() {
    return (
        <section className="relative h-[400px] md:h-[600px] overflow-hidden">
            <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=2070"
                alt="Hero Shoes"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-start">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white space-y-4"
                >
                    <span className="text-lg font-medium uppercase tracking-widest">Up to 30% Off</span>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        EXCLUSIVE <br /> NEW SHOES
                    </h1>
                    <button className="mt-8 border-2 border-white text-white px-10 py-3 font-semibold hover:bg-white hover:text-black transition-all duration-300">
                        Shop Now
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
