import { defineCollection, z } from 'astro:content';

const photoCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const reading = defineCollection({
  type: 'content', 
  schema: z.object({
    author: z.string(),
    category: z.enum(["articles", "books"]),
    datePublished: z.date().optional(),
    dateUpdated: z.date().optional(),
    link: z.string().url().optional(),
    title: z.string(),
    titleTranslated: z.string().optional(),
  }),
});

const watching = defineCollection({
  type: 'content', 
  schema: z.object({
    category: z.enum(["Movie", "TV"]),
    date: z.date(),
    link: z.string().optional(),
    title: z.string(),
    titleTranslated: z.string().optional(),
    yearPublished: z.number(),
  }),
});


const writing = defineCollection({
  type: 'content', 
  schema: ({ image }) => z.object({
    blurb: z.string().optional(),
    date: z.date(),
    cover: image().optional(),
    coverAlt: z.string().optional(),
    dateUpdated: z.date().optional(),
    tags: z.array(z.string()).optional(),
    title: z.string(),
  }),
});

export const collections = {
  "reading": reading,
  "photoCollection": photoCollection,
  "writing": writing,
  "watching": watching,
};
