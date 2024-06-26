"use client";

import Image from "next/image";
import * as styles from "./globalTheme.css";
import { style } from "@vanilla-extract/css";
import { create } from "zustand";
import { combine } from "zustand/middleware";

export default function Home() {
    const useBearStore = create(
        combine({ bears: 0 }, (set) => ({
            increase: (by: number) =>
                set((state) => ({ bears: state.bears + by })),
        }))
    );

    const BearCounter = () => {
        const bear = useBearStore((state) => state.bears);
        return <h1>Bear : {bear}</h1>;
    };

    const BearIncrease = () => {
        const increase = useBearStore((state) => state.increase);
        return <button onClick={() => increase(5)}>up</button>;
    };

    return (
        <main>
            <div>안녕하세용 i</div>
            <BearCounter />
            <BearIncrease />
        </main>
    );
}
