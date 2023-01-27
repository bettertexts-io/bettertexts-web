"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import CopyToClipboard from "react-copy-to-clipboard";

import { Button } from "./Button";
import TabGroup from "./TabGroup";

import { logger } from "@/utils/logger";

async function submitRephrasePrompt(data: Object) {
  const res = await fetch("https://api.bettertexts.io/api/v1/paraphrase", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      access_token: process.env.NEXT_PUBLIC_API_KEY as string,
    },
  });
  const json = await res.json();
  return json["results"];
}

export function DemoApp({ className }: { className?: string }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");

  const [styleTabId, setStyleTabId] = useState<string>("professional");
  const [mediumTabId, setMediumTabId] = useState<string>("message");

  useEffect(() => {
    if (result) {
      navigator.clipboard.writeText(result);
    }
  }, [result]);

  const initialValues = {
    input: "",
  };

  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
    defaultValues: initialValues,
  });

  const styleTabs = [
    { name: "Professional", id: "professional" },
    { name: "Relaxed", id: "relaxed" },
    { name: "Colloquial", id: "colloquial" },
  ];

  const mediumTabs = [
    // { name: "E-Mail", id: "email" },
    { name: "Message", id: "message" },
    { name: "Tweet", id: "tweet" },
    { name: "Joke", id: "joke" },
  ];

  const submit = async (data: typeof initialValues) => {
    // Submit data to server
    try {
      setIsLoading(true);
      const res = await submitRephrasePrompt({
        input: data.input,
        style: styleTabId,
        medium: mediumTabId,
      });

      setResult(res[0]);
      setIsLoading(false);
    } catch (e) {
      logger.error(e);
    }
  };

  return (
    <div
      className={clsx(
        "bg-white mx-auto max-w-3xl px-4 sm:px-6 lg:px-16 py-4 shadow-md rounded-lg border border-gray-100",
        className
      )}
    >
      <form onSubmit={handleSubmit(submit)} className="space-y-4 sm:space-y-6">
        <textarea
          rows={3}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring-blue-400 sm:text-sm"
          defaultValue={""}
          placeholder="Enter your text to rephrase"
          {...register("input")}
        />

        <div className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-x-4">
          <TabGroup
            tabs={styleTabs}
            selectedId={styleTabId}
            selectTab={(tabId: string) => setStyleTabId(tabId)}
          />
          <TabGroup
            tabs={mediumTabs}
            selectedId={mediumTabId}
            selectTab={(tabId: string) => setMediumTabId(tabId)}
          />
        </div>
        <Button type="submit">
          {isLoading ? (
            <div className="flex flex-row space-x-2 items-center">
              <span>Rephrase</span>
              <div
                style={{ borderTopColor: "transparent" }}
                className="spinner w-5 h-5 border-2 border-solid rounded-full animate-spin transition-colors duration-500 border-white"
              />
            </div>
          ) : (
            <span>Rephrase ⚡️</span>
          )}
        </Button>

        {result && (
          <div className="w-full flex justify-center space-x-8 border border-gray-300 bg-blue-50 text-gray-700 rounded-md mt-5 py-5 px-6">
            <div></div>
            <span>{result}</span>
            <CopyToClipboard text={result}>
              <button type="button" className="w-6 h-6">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                  />
                </svg>
              </button>
            </CopyToClipboard>
          </div>
        )}
      </form>
    </div>
  );
}
