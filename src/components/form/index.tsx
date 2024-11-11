"use client";

import { useEffect, useState } from "react";
import { Button } from "../button";
import { Question, types } from "@/api/form";
import { parseAsInteger, useQueryState } from "nuqs";
import { COMPONENT_ID } from "./form.constants";
import { X } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";

const useEscapeKey = (callback: () => void) => {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        callback();
      }
    };

    // Add event listener when the component mounts
    document.addEventListener("keydown", handleEscapeKey);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [callback]); // Re-run effect if callback changes
};

interface FormProps {
  questions: Question["questions"];
  rejectedMessage: React.ReactNode;
  successMessage: React.ReactNode;
}

export function Form({
  questions,
  rejectedMessage,
  successMessage,
}: FormProps) {
  const [open, setOpen] = useState(
    global?.window?.location.hash.slice(1) === COMPONENT_ID || false
  );
  const [isRejected, setIsRejected] = useState(false);
  const [success, setSuccess] = useState(false);
  const [questionIndex, setIndex] = useQueryState(
    "questionIndex",
    parseAsInteger.withDefault(0)
  );

  const prev = () => {
    setIndex((current) => current - 1);
  };

  const next = () => {
    setIndex((current) => current + 1);
  };

  const handleClose = () => {
    // This looks ugly
    setOpen(false);
    setIndex(0);
    setSuccess(false);
    window.location.hash = "";
  };

  useEscapeKey(handleClose);

  useEffect(() => {
    setIsRejected(false);
  }, [questionIndex]);

  useEffect(() => {
    // Listen for hash changes
    const handleHashChange = () => {
      setOpen(window.location.hash.slice(1) === COMPONENT_ID);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [open]);

  return (
    <div
      data-open={!!open}
      id="questionaire"
      className="fixed top-0 left-0 w-full h-full bg-white text-manual-teal data-[open=false]:hidden form"
    >
      <button onClick={handleClose} className="absolute top-4 right-4">
        <span className="sr-only">Close</span>
        <X />
      </button>
      <ScrollArea className="container mx-auto flex flex-col items-center justify-center h-dvh w-dvh p-4">
        {success ? (
          <p className="text-center text-xl p-8 [&a]:text-blue">
            {successMessage}
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = Object.fromEntries(
                new FormData(e.currentTarget)
              );
              console.log(formData);
              setSuccess(true);
            }}
            className="mx-auto max-w-screen-md"
          >
            {questions?.map((question, index) => (
              <div key={question.question} hidden={questionIndex !== index}>
                <p className="text-center text-xl p-8">{question.question}</p>
                {question.type === types.ChoiceType ? (
                  <div
                    className={`grid grid-cols-2 md:grid-cols-${question.options.length} mx-auto`}
                  >
                    {question.options.map((option) => (
                      <label
                        key={option.value.toString()}
                        className="m-2 block cursor-pointer"
                        onClick={() => {
                          if (option.isRejection) {
                            setIsRejected(true);
                            return;
                          }

                          setIsRejected(false);
                        }}
                      >
                        <input
                          type="radio"
                          name={question.question}
                          value={option.value.toString()}
                          className="peer"
                          hidden
                        />
                        <div
                          dangerouslySetInnerHTML={{ __html: option.display }}
                          className="ring-2 ring-manual-sage-light peer-checked:ring-manual-teal transition-all rounded p-4 text-center flex align-center justify-center"
                        />
                      </label>
                    ))}
                  </div>
                ) : null}

                <div
                  data-is-rejected={isRejected}
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4 invisible data-[is-rejected=true]:visible mb-4"
                  role="alert"
                >
                  <p className="text-center">{rejectedMessage}</p>
                </div>

                <div className="flex gap-4 justify-between">
                  <Button
                    data-index={questionIndex}
                    className="data-[index=0]:invisible"
                    onClick={prev}
                    type="button"
                  >
                    Previous
                  </Button>
                  <Button
                    data-last={questionIndex === questions.length - 1}
                    className="data-[last=true]:hidden"
                    onClick={next}
                    disabled={isRejected}
                    type="button"
                  >
                    Next
                  </Button>
                  <Button
                    data-last={questionIndex === questions.length - 1}
                    className="data-[last=false]:hidden"
                    type="submit"
                    disabled={isRejected}
                  >
                    Next
                  </Button>
                </div>
              </div>
            ))}
          </form>
        )}
      </ScrollArea>
    </div>
  );
}
