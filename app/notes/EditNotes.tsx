import React, { FormEvent } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

function EditNotes({ noteId }: any) {
  const [text, setText] = useState("");

  const router = useRouter();

  const edit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      const respons = await fetch(
        `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            text: text,
          }),
        }
      );

      if (!respons.ok) {
        throw new Error(`encountered an error ${respons.status}`);
      }
    } catch (e) {
      console.log(e);
    }

    setText("");
    router.refresh();
  };
  return (
    <form onSubmit={edit}>
      <textarea
        placeholder="edit your note here"
        value={text}
        onChange={(e: any) => setText(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default EditNotes;
