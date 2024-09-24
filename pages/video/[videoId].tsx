import { useRouter } from "next/router";
import React from "react";

export default function Video() {
  const router = useRouter();
  return <div>Video Page {router.query.videoId}</div>;
}
