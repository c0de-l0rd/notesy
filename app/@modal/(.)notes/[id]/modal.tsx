'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import { MdOutlineCancel } from "react-icons/md";

interface apiProps {
  id: string,
  bodytext: string,
  children: React.ReactNode 
}

export function Modal({id, bodytext,children}:apiProps) {
  const router = useRouter();
  const dialogRef = useRef(null);

  console.log(id)

  useEffect(() => {
    // @ts-ignore
    if (!dialogRef.current?.open) {
      // @ts-ignore
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="modal-backdrop">
      <dialog ref={dialogRef} className="" onClose={onDismiss}>
        <div className='close-button right-1 top-1'>
      <MdOutlineCancel onClick={onDismiss} className="h-7 w-7"/>
        </div>

        {children}
        <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <button onClick={()=>{
      console.log("going into update api")
      fetch('/api/updateNote', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          docId:id,
          bodyText: bodytext,
          // other key-value pairs
        }),
      })
    }}>Save</button>
      </dialog>
      
    </div>,
    document.getElementById('modal-root')!
  );
}
