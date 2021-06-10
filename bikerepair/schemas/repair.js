export default {
  name: "repair",
  title: "Repair",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Recipe Name",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      }
    },
    {
      name: "component",
      title: "Component",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "component",
              title: "Component",
              type: "reference",
              to: [{ type: "component" }],
            }
          ],
          preview:{
            select: {
              title: "component.name",
              name: "component.name",
              media: "component.image"
            },
            prepare({
              title,
              media
            }){
              return {
                title,
                media
              }
            }
          }
        }
      ],
    },
    {
      name: "instructions",
      title: "Instructions",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "likes",
      title: "Likes",
      type: "number"
    },
    {
      name: "comments",
      title: "Comments",
      type: "array",
      of: [{ type: "string" }]
    }
  ], 
  initialValue: {
    likes: 0,
  }
}