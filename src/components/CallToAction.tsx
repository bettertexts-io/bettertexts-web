"use client";
/* eslint-disable @next/next/no-sync-scripts */
import Image from "next/image";
import Helmet from "react-helmet";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import backgroundImage from "@/images/background-call-to-action.jpg";

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Upgrade your writing now
          </h2>
          <div
            id="getWaitlistContainer"
            className="mt-10"
            data-waitlist_id="4994"
          ></div>

          <Helmet>
            <link
              rel="stylesheet"
              type="text/css"
              href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
            />
            <script
              async
              src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"
            ></script>
          </Helmet>
        </div>
      </Container>
    </section>
  );
}
