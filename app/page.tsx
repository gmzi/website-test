import { getProjects } from '@/sanity/sanity-utils'
import { Project } from '@/types/Project'
import Link from 'next/link'
import Image from 'next/image'

export default async function Home() {
  const projects = await getProjects()
  return (
    <div>
      {projects.map((project: Project) => (
        <Link href={`/projects/${project.slug}`} 
        key={project._id}>
          <h2>{project.name}</h2>
          <img 
          src={project.image}
          width={250}
          height={100}
          />
        </Link>
      ))}
    </div>
  )
}
