const excludedTags = ["archived", "featured"];
export default (items: Array<object>) => (
  [...new Set(
    items.flatMap(item => item.data.tags)
    .filter(Boolean)
    .filter(tag => !excludedTags.includes(tag))
  )]
);
