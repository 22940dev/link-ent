
import packageJson from '../package.json';

function FooterDisclaimer() {
  return (
    <div className="text-xs">
      <p className="">Built by <a href="https://github.com/22940dev" target="_blank" className="text-green-400" rel="noopener">Pieter Montoulieu</a></p>
      <p className="mb-3"><a href="https://github.com/22940dev/link-ent" target="_blank" className="text-green-400" rel="noopener">LinkEnt</a> is a free Linktree alternative built with React and Tailwind. <br className="hidden sm:block"/>
      </br>
      </p>
    </div>
  );
}

export default FooterDisclaimer;
