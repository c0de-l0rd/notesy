"use client";
import next from "next";
import React from "react";
import EditNotes from "../EditNotes";
async function getNote(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

async function NotePage({ params }: any) {
  const note = await getNote(params.id);
  return (
    <div className="">
      <h1>{`Note/${params.id}`}</h1>
      <div className="bg-yellow-600">
        <h1>branch-2 0ne NotePage</h1>
        <h2>{note.title}</h2>
        <h5>{note.text}</h5>
        <p>{note.created}</p>
      </div>
      <EditNotes noteId={params.id} />
    </div>
  );
}

export default NotePage;
