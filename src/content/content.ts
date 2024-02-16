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
    category: z.enum(["movie", "tv"]),
    dateAdded: z.date(),
    link: z.string().optional(),
    title: z.string(),
    titleTranslated: z.string().optional(),
    yearPublished: z.number(),
  }),
});


const writing = defineCollection({
  type: 'content', 
  schema: z.object({
    blurb: z.string().optional(),
    dateAdded: z.date(),
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
