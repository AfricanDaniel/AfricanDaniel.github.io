/* eslint-disable react/jsx-sort-props */
import {FC, memo, PropsWithChildren} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  const multiColumn = skills.length > 4;
  return (
    <div className="flex flex-col">
      <span className="text-center text-lg font-bold">{name}</span>
      <ul className={`mt-2 grid gap-y-1 ${multiColumn ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </ul>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name} = skill;
  return (
    <li className="flex items-center gap-x-2 text-sm">
      <span className="h-2 w-2 shrink-0 rounded-full bg-orange-400" />
      <span>{name}</span>
    </li>
  );
});

Skill.displayName = 'Skill';
