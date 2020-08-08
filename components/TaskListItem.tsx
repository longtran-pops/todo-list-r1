import Icon from '@material-ui/core/Icon';
import Task from 'models/Task';
import ActionButtons from './ActionButtons';
import { ICONS, COLORS } from '../constants';

interface TaskListItemProps {
  task: Task;
}

export default (props: TaskListItemProps) => {
  const { title, status } = props.task;

  return (
    <>
      <li className="task-list__item">
        <Icon style={{ color: COLORS[status], margin: 'auto 4px auto 0px' }}>{ICONS[status]}</Icon>
        <p className="title">{title}</p>
        <ActionButtons task={props.task} />
      </li>

      <style jsx>{
        `
        .task-list__item {
          padding: 4px 8px;
          margin: 2px 0px;
          display: flex;
          background: #fff;
        }
        .title {
          flex: 1;
          margin: auto 0;
        }
        .btn-group {
          display: flex;
        }
        `
      }</style>
    </>
  );
}