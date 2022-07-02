import {ensureDir} from "https://deno.land/std@0.145.0/fs/mod.ts";
import index from "./lesson-index.json" assert { type: "json" };

let {lessons, metadata} = index

let directoryName = Deno.args[0]

for await(let lesson of lessons){
  await ensureDir(`${lesson}/${directoryName}`)
}
