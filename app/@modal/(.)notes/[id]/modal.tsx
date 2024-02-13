'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import { MdOutlineCancel } from "react-icons/md";


export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef(null);

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

      </dialog>
    </div>,
    document.getElementById('modal-root')!
  );
}
