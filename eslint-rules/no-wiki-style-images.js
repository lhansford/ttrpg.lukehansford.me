const regex = new RegExp(/\!\[\[.*\]\]/g);

export default {
  meta: {
    type: 'problem',
    docs: { description: 'Flag use of wiki-style images' },
    schema: [{ type: 'object', properties: {}, additionalProperties: false }],
  },
  create(context) {
    return {
      text(node) {
        const match = regex.exec(node.value);
        if (match) {
          context.report({
            node,
            message: `Do not use wiki-style images: "${match[0]}"`,
            loc: node.position,
          });
        }
      },
    };
  },
};
