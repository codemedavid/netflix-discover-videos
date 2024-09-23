import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Magic } from "magic-sdk";
import { magic } from "@/lib/magic.client";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleComplete = () => {
      setIsLoading(false);
    };
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);
  useEffect(() => {
    const checkLogin = async () => {
      const isLoggedIn = await (magic as Magic).user.isLoggedIn();
      if (isLoggedIn) {
        router.push("/");
      } else {
        router.push("/login");
      }
    };

    checkLogin();
  }, [router]);
  return isLoading ? <div>Loading..</div> : <Component {...pageProps} />;
}
