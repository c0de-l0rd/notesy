'use client'

import Notes from "@/components/notes";
import data from '@/components/data';
import fetchNotes from "@/utils/fetchtNotes";
import {useState } from "react";

export default function PhotoPage({
  params: { id },
}: {
  params: { id: number };
}) {

  const [data, setData] = useState<any[]>([])

  fetchNotes().then(data=> setData(data))
  const note:string = data[0]?.bodyText
  console.log(`i'm in`,data[id]?.bodyText)
  return <>
  <Notes text={'meee'}/>;
  {'meee'}
  </>
}
