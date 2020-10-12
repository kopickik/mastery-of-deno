import { join } from 'https://deno.land/std/path/mod.ts'

async function readFile() {
  const path = join('src', 'heeeellloo.txt')
  const data = await Deno.readTextFile(path)
  console.log(data)
}

await readFile()

async function readDir() {
  for await (const dirEntry of Deno.readDir('./')) {
    console.log(dirEntry.name, dirEntry.isSymlink)
  }
}

await readDir()
