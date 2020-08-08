import Button from "@material-ui/core/Button";
import { useDispatch } from 'react-redux';
import * as taskStatus from '../constants';
import Task from "models/Task";
import { removeTask, updateTask } from 'redux/actions/taskAction';

interface ActionButtonProps {
  task: Task;
}

export default (props: ActionButtonProps) => {
  const { status } = props.task;
  const dispatch = useDispatch();
  const onRemove = () => dispatch(removeTask(props.task));
  const onUpdate = (status: string) => dispatch(updateTask(props.task, status));

  const startButton = status === taskStatus.TASK_STATUS_TO_DO && (
    <Button type="button" color="primary" onClick={() => onUpdate(taskStatus.TASK_STATUS_IN_PROGRESS)}>
      Start
    </Button>
  );
  const doneButton = status === taskStatus.TASK_STATUS_IN_PROGRESS && (
    <Button type="button" color="secondary" onClick={() => onUpdate(taskStatus.TASK_STATUS_DONE)}>
      Done
    </Button>
  );
  const cancelButton = status === taskStatus.TASK_STATUS_IN_PROGRESS && (
    <Button type="button" onClick={() => onUpdate(taskStatus.TASK_STATUS_CANCELED)}>
      Cancel
    </Button>
  );
  const deleteButton = (
      status === taskStatus.TASK_STATUS_TO_DO ||
      status === taskStatus.TASK_STATUS_DONE ||
      status === taskStatus.TASK_STATUS_CANCELED
    ) && (
    <Button type="button" onClick={onRemove}>
      Delete
    </Button>
  );

  return (
    <div className="btn-group">
      {startButton}
      {doneButton}
      {cancelButton}
      {deleteButton}
    </div>
  );
};
