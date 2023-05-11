import { defineConfig } from "sanity";
import {deskTool} from "sanity/desk";
import schemas from './sanity/schemas/index';

const config = defineConfig({
    projectId: "ms3bty93",
    dataset: "production",
    title: "Test website",
    apiVersion: "2023-05-11",
    basePath: "/admin",
    plugins: [deskTool()], 
    schema: {types: schemas}
})

export default config;