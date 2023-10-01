"use client";
import React from "react";
import { useRouter } from "next/navigation";

function DeleteNote({ noteId }: any) {
  const router = useRouter();

  let deleteNote = async (noteId: string) => {
    const response = await fetch(
      `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
      {
        method: "DELETE",
      }
    );

    router.refresh();
  };
  return (
    <button
      className="bg-red-600"
      onClick={() => {
        deleteNote(noteId);
      }}
    >
      DeleteNote
    </button>
  );
}

export default DeleteNote;
