import { assets } from "../../assets/assets";

type SkillsProps = {
  title: string;
};

export function Skills({ title }: SkillsProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-left flex items-center justify-center">
        <h1 className="pb-8 text-3xl text-black font-bold w-[1300px] text-left">{title}</h1>
      </div>
      <section className="flex justify-center items-center pb-72">
        <div className="grid grid-cols-3 gap-10 w-[1300px]">
          <div className="col-span-1 h-[450px] border border-black/10 rounded-2xl shadow-lg p-6">
            <h2 className="font-bold text-2xl mb-4 text-amber-700">Frontend</h2>
            <section className="flex items-center justify-center gap-5">
              <div className="grid grid-cols-3 gap-10 mt-4">
                <div className="flex flex-col items-center">
                  <img className="h-14 w-14" src={assets.html_icon} alt="" />
                  <p className="mt-1">HTML</p>
                </div>
                <div className="flex flex-col items-center">
                  <img className="h-14 w-14" src={assets.css_icon} alt="" />
                  <p className="mt-1">CSS</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    className="h-14 w-14"
                    src={assets.javaScript_icon}
                    alt="JavaScript icon"
                  />
                  <p className="mt-1">JavaScript</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    className="h-14 w-14"
                    src={assets.typeScript_icon}
                    alt="TypeScript icon"
                  />
                  <p className="mt-1">TypeScript</p>
                </div>
                <div className="flex flex-col items-center">
                  <img className="h-14 w-14" src={assets.react_icon} alt="React icon" />
                  <p className="mt-1">React JS</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    className="h-14 w-14"
                    src={assets.tailwind_icon}
                    alt="Tailwind icon"
                  />
                  <p className="mt-1">Tailwind CSS</p>
                </div>
              </div>
            </section>
          </div>

          <div className="col-span-1 h-[450px] border border-black/10 rounded-2xl shadow-lg p-6">
            <h2 className="font-bold text-2xl mb-4 text-amber-700">Tools</h2>
            <section className="flex items-center justify-center">
              <div className="grid grid-cols-3 gap-8 mt-4">
                <div className="flex flex-col items-center">
                  <img className="h-14 w-14" src={assets.git_icon} alt="" />
                  <p className="mt-1">Git</p>
                </div>
                <div className="flex flex-col items-center">
                  <img className="h-14 w-14" src={assets.github_icon} alt="Github icon" />
                  <p className="mt-1">GitHub</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    className="h-14 w-14"
                    src="https://images.icon-icons.com/2107/PNG/512/file_type_vscode_icon_130084.png"
                    alt="Visual Studio Code icon"
                  />
                  <p className="mt-1">Visual Studio Code</p>
                </div>
                <div className="flex flex-col items-center">
                  <img className="h-14 w-14" src={assets.figma_icon} alt="Figma icon" />
                  <p className="mt-1">Figma</p>
                </div>
                <div className="flex flex-col items-center">
                  <img className="h-14 w-14" src={assets.trello_icon} alt="Trello icon" />
                  <p className="mt-1">Trello</p>
                </div>
                <div className="flex flex-col items-center">
                  <img className="h-14 w-14" src={assets.terminal_icon} alt="Terminal icon" />
                  <p className="mt-1">Terminal</p>
                </div>
              </div>
            </section>
          </div>

          <div className="col-span-1 h-[450px] border border-black/10 rounded-2xl shadow-lg p-6">
            <h2 className="font-bold text-2xl mb-4 text-amber-700">
              Soft Skills
            </h2>
            <section className="flex items-center justify-center">
              <div className="grid grid-cols-3 gap-8 mt-4">
                <div className="flex flex-col items-center">
                  <img className="h-14 w-14" src={assets.teamwork_icon} alt="Teamwork icon" />
                  <p className="mt-1">Teamwork</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    className="h-14 w-14"
                    src={assets.comunication_icon}
                    alt="Comunication icon"
                  />
                  <p className="mt-1">Comunication</p>
                </div>
                <div className="flex flex-col items-center">
                  <img className="h-14 w-14" src={assets.analysis_icon} alt="Analysis icon"/>
                  <p className="mt-1">Analysis</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
