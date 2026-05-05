import React from "react";
import { Link } from "react-router-dom";

import { teamMembers } from "../data/team";

export default function EachMember(){
return <>
<aside className="w-52 shrink-0 bg-white border-r border-slate-200 p-5">
        <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Team</h2>
        <ul className="space-y-3">
          {teamMembers.map(member => ( <Link  key={member.id} to={`/${member.id}`}>
            <li className="flex items-center gap-2.5">
              <img src={member.avatar} alt={member.name} className="w-7 h-7 rounded-full" />
              <div>
                <p className="text-sm font-medium text-slate-700">{member.name.split(' ')[0]}</p>
                <p className="text-xs text-slate-400">{member.role}</p>
              </div>
            </li>
         </Link> ))}
        </ul>
      </aside>
</>
}