"use client";
import { BtnType, Button } from "@/components/common/button";
export default function NotFound() {
  return (
    <>
      <h2>404</h2>
      <p>Sorry, the page you are looking for can&apos;t be found</p>
      <Button type={BtnType.submit}>Go back to Home</Button>
    </>
  );
}
