import { MilestoneIcon, TagIcon, XIcon } from '@primer/octicons-react';
import Tabs from '../../components/buttons/Tabs';
import Button from '../../components/buttons/Button';
import FiltersInput from './FiltersInput';
import { filterParamContext, filterParamContextInterface } from './IssueList';
import { useContext } from 'react';

const buttons = [
  {
    text: 'Labels',
    icon: <TagIcon verticalAlign="middle" />,
  },
  {
    text: 'Milestones',
    icon: <MilestoneIcon verticalAlign="middle" />,
  },
];

const Subnav = () => {
  const { filterParam, setFilterParam } = useContext(
    filterParamContext
  ) as filterParamContextInterface;
  const { filters, state, labels, assignee, sort } = filterParam;
  return (
    <>
      <div className="px-4 sm:px-0 flex flex-wrap justify-between text-sm md:flex-nowrap md:h-8 md:mb-4">
        <div className="flex w-full justify-between md:flex-nowrap md:w-auto">
          <Tabs buttons={buttons} />
          <span className="ml-2 hidden md:block">
            <Button text="New issue" primary={true} />
          </span>
          <span className="inline-block ml-2 md:hidden">
            <Button text="New" primary={true} />
          </span>
        </div>
        <FiltersInput />
      </div>
      {(state !== 'open' || !!(filters || labels || assignee || sort)) && (
        <div
          className="mb-4 px-4 sm:px-0 cursor-pointer"
          onClick={() =>
            setFilterParam({
              filters: '',
              state: 'open',
              labels: '',
              assignee: '',
              sort: '',
            })
          }
        >
          <span className="inline-block w-[18px] h-[18px] rounded text-center bg-[#6e7781] mr-2">
            <XIcon fill="#fff" verticalAlign="middle" />
          </span>
          <span className="text-text font-semibold text-[15px] hover:text-emphasis">
            Clear current search query, filters, and sorts
          </span>
        </div>
      )}
    </>
  );
};

export default Subnav;
