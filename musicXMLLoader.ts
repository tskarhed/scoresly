import { DOMParser } from "https://deno.land/x/deno_dom@v0.1.45/deno-dom-wasm.ts";

interface MusicXMLMetadata {
  title: string;
  tags: string[];
  content: string;
  arranger?: string;
  composer?: string;
  lyricist?: string;
}

export async function musicXMLLoader(path: string): Promise<MusicXMLMetadata> {
  const content = await Deno.readTextFile(path);

  const doc = new DOMParser().parseFromString(content, "text/html"); // text/xml is not implemented, but this works. linkedom lacks types, which is a bit confusing to work with

  const title = doc?.getElementsByTagName("work-title")[0].textContent;

  const creators = Array.from(
    (doc?.querySelectorAll("creator") as Iterable<Element>) || []
  );
  const tags = creators
    ?.filter((creator) => !!creator.textContent)
    .map((creator) => creator.textContent as string);

  const arranger = getCreatorByType("arranger", creators);
  const composer = getCreatorByType("composer", creators);
  const lyricist = getCreatorByType("composer", creators);

  if (!title) {
    throw new Error(
      "Could not find title in musicXML file. Make sure that it is specified correctly in your score's properties."
    );
  }

  return {
    title,
    tags,
    content,
    arranger,
    composer,
    lyricist,
  };
}

function getCreatorByType(
  type: string,
  elementList: Element[]
): string | undefined {
  return (
    elementList.find((creator) => creator.getAttribute("type") === type)
      ?.textContent || undefined
  );
}
