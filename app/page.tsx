'use client';
import { Button } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [law, setLaw] = useState("");
  async function fetchLaw() {
    const baseUrl = `http://localhost:1337/api`;
    const res = await fetch(`${baseUrl}/law-firms/`)
    const data = await res.json();
    setLaw(data);
    console.log(data)
    return data;
  }
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Button variant="contained" onClick={() => fetchLaw()}>Fetch Law Firm</Button>
      </main>
    </div>
  );
}
