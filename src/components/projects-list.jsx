import { project } from "~/data"

export const ProjectsList = () => {
  return (
    <div className="flex flex-col divide-y-[1px] divide-black/10 dark:divide-white/10">
      {project.map(project => (
        <div
          key={project.title}
          className="py-8 flex justify-between items-center animate-appear-500"
        >
          <div className="flex items-center gap-3 pr-6 w-full overflow-hidden">
            <h2 className="font-bold text-lg md:text-base truncate">
              {project.title}
            </h2>
            {project.status.includes("Completed") && (
              <div className="flex items-center gap-2">
                <span className="flex">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 absolute"></span>
                </span>
                <span className="text-xs text-emerald-500 md:hidden">
                  {project.status}
                </span>
              </div>
            )}
            {project.status.includes("In Progress") && (
              <div className="flex items-center gap-2">
                <span className="flex">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-500 absolute"></span>
                </span>
                <span className="text-xs text-amber-500 md:hidden">
                  {project.status}
                </span>
              </div>
            )}
          </div>
          <div className="flex gap-6">
            {project.links.map(link =>
              link.url === "" ? (
                <span key={link.label} className="opacity-50 md:text-sm">
                  N/A
                </span>
              ) : (
                <a
                  key={link.label}
                  href={link.url}
                  className="hover:text-rose-500 dark:hover:text-indigo-500 hover:underline underline-offset-8 md:text-sm"
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
