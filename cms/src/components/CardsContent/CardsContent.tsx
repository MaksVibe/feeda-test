'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { deleteProject } from '~/src/redux/projects/actions';

import { commonVariants } from '../../helpers/commonVariants';
import { deleteParticipant, ParticipantData } from '../../redux/participants/operations';
import { ProjectData } from '../../redux/projects/projects.slice';
import { Button } from '../Button/Button';
import { IconSprite, IconType } from '../IconSprite/IconSprite';
import { PopUp } from '../PopUp/PopUp';
import {
  FirstBlockWrapper,
  List,
  ListItem,
  SecondBlockWrapper,
  ThirdBlockElementsWrapper,
  ThirdBlockWrapper,
} from './CardsContent.styles';

type CardsContentType = {
  type: 'participants' | 'projects';
  data: ParticipantData[] | ProjectData[];
};
export function CardsContent({ type, data }: CardsContentType) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showPopUp, setShowPopUp] = useState<boolean | number | string>(false);

  const projectParticipantsEnding = (count: number) => {
    const countLastDigit = count.toString()[count.toString().length - 1];
    return countLastDigit === '1'
      ? 'Учасник'
      : countLastDigit >= '2' && countLastDigit <= '4'
      ? 'Учасника'
      : 'Учасників';
  };

  return (
    <>
      <List>
        {data?.map((item: ParticipantData | ProjectData) => {
          return (
            <ListItem key={item.id}>
              <Link href={type === 'participants' ? `/participants/${item.id}` : `/projects/${item.id}`}>
                <FirstBlockWrapper>
                  <Button
                    variant="icon"
                    icon="trash"
                    func={(ev) => {
                      ev.preventDefault();
                      ev.stopPropagation();
                      setShowPopUp(type === 'participants' ? item.id : item.title);
                    }}
                  />
                  <Button
                    variant="icon"
                    icon="pencil"
                    func={(ev) => {
                      ev.preventDefault();
                      ev.stopPropagation();
                      router.push(`/${type}/edit/${item.id}`);
                    }}
                  />
                  <p id={type === 'projects' ? 'project-type-participant' : ''}>
                    {item.type_participant?.title || item.type_project.project_type}
                  </p>
                </FirstBlockWrapper>
                <SecondBlockWrapper type={type}>
                  {type === 'participants' ? (
                    <>
                      <h2 title={item.last_name}>{item.last_name}</h2>
                      <h2 title={item.first_name}>{item.first_name}</h2>
                      <p title={item.stack}>{item.stack || 'None'}</p>
                    </>
                  ) : (
                    <>
                      <h2 id="project-name" title={item.title}>
                        {item.title}
                      </h2>
                      <p title={item.participants_count}>
                        {item.participants_count} {projectParticipantsEnding(item.participants_count)}
                      </p>
                    </>
                  )}
                </SecondBlockWrapper>
                <ThirdBlockWrapper>
                  {type === 'participants' ? (
                    <>
                      <ThirdBlockElementsWrapper>
                        <p id="name">Досвід</p>
                        <p id="value">{item.experience ? 'Так' : 'Ні'}</p>
                      </ThirdBlockElementsWrapper>
                      <ThirdBlockElementsWrapper>
                        <p id="name">Проєкти</p>
                        <p id="value">{item.project_count || 0}</p>
                      </ThirdBlockElementsWrapper>
                      <ThirdBlockElementsWrapper>
                        <p id="name">Роль</p>
                        <div id="icon-wrapper" className="participantIconWrapper">
                          <IconSprite
                            icon={
                              commonVariants.role.find((searchItem) => searchItem.name === item.speciality?.title)
                                ?.icon || commonVariants.role.find((item) => item.name === 'None')?.icon
                            }
                          />
                        </div>
                        <p id="value">{item.speciality?.title}</p>
                      </ThirdBlockElementsWrapper>
                    </>
                  ) : (
                    <>
                      <ThirdBlockElementsWrapper>
                        <p id="name">Складість</p>
                        <div id="complexity">
                          {commonVariants.complexity.map((complexity, idx) => (
                            <div id="complexity-icon" key={idx}>
                              <IconSprite
                                icon={
                                  complexity <= Number.parseInt((item as ProjectData).complexity.complexity)
                                    ? 'complexityActive'
                                    : 'complexityInactive'
                                }
                              />
                            </div>
                          ))}
                        </div>
                      </ThirdBlockElementsWrapper>
                      <ThirdBlockElementsWrapper>
                        <p id="name">Стан</p>
                        <div id="icon-wrapper" className="projectIconWrapper">
                          <IconSprite
                            icon={
                              commonVariants.status.find(
                                (searchItem) => searchItem.name === (item as ProjectData).project_status.status
                              )?.icon as IconType
                            }
                          />
                        </div>
                        <p id="value">{(item as ProjectData).project_status.status}</p>
                      </ThirdBlockElementsWrapper>
                    </>
                  )}
                </ThirdBlockWrapper>
              </Link>
            </ListItem>
          );
        })}
      </List>
      {showPopUp && type === 'participants' && (
        <PopUp
          type="delete"
          target={type}
          noCallback={() => setShowPopUp(false)}
          yesCallback={() => dispatch(deleteParticipant(showPopUp))}
        />
      )}
      {showPopUp && type === 'projects' && (
        <PopUp
          type="delete"
          target={type}
          noCallback={() => setShowPopUp(false)}
          yesCallback={() => dispatch(deleteProject(showPopUp))}
        />
      )}
      <></>
    </>
  );
}
