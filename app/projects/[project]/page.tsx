import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
    params: {project: string}
}

export default async function Project({params}: Props){
    const slug = params.project;
    const project = await getProject(slug);

    return (
    <div>
        <header>
            <h1>{project.name}</h1>
            <div>
                <PortableText value={project.content}/>
            </div>
            <img src={project.image}
            width={1920}
            height={1080}
            />
            <a href={project.url} title="View Project" target="_blank" rel="noopener noreferrer">view project</a>
        </header>
    </div>
    )

}