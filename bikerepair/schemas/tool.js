export default {
  name: "tool",
  title: "Tool",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Tool Name",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          title: "Block",
          type:"block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: []
        }
      ]
    }
  ]
}