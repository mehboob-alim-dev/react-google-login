"use client";
import Image from "next/image";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import Login from "@/components/Login";
const clientId = "write you client id after getting from google console";
export default function Home() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });
  return (
    <>
      <Login />
    </>
  );
}
