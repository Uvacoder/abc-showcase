import { project } from "~/data"

export const ProjectsList = () => {
  return (
    <div className="flex flex-col divide-y-[1px] divide-black/10 dark:divide-white/10">
      {project.map(project => (
        <div
          key={project.title}
          className="py-8 flex justify-between items-center"
        >
          <div className="flex flex-col gap-3 pr-6 overflow-hidden">
            <h2 className="font-bold text-lg truncate">{project.title}</h2>
            <h3 className="text-rose-500 dark:text-sky-500 text-sm truncate">
              {project.path}
            </h3>
          </div>
          <div className="flex gap-6">
            {project.links.map(link => (
              <a
                key={link.label}
                href={link.url}
                className="hover:text-rose-500 dark:hover:text-sky-500 hover:underline underline-offset-8"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
