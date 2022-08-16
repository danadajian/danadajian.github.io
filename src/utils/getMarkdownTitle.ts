const headerMatch = /^#+(.*)$/;
export function getTitleFromMarkdown(text?: string) {
  if (!text) {
    return;
  }
  const lines = text.split("\n");
  const noEmptyLines = lines.filter(function (line) {
    return line.length > 0;
  });
  if (noEmptyLines.length === 0) {
    throw new Error("no content");
  }
  const firstLine = noEmptyLines[0];
  const match = firstLine.match(headerMatch);
  if (!match) {
    return;
  }
  const title = match && match[1];
  return title.trim();
}
