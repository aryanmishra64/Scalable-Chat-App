import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-6 bg-gray-900 text-white">
      <div className="flex flex-col items-center text-center space-y-2">
        <div>© 2025 QuickChat. All rights reserved.</div>
        <div className="space-x-4">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
