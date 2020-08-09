import {memo} from 'react';
import Icon from '@material-ui/core/Icon'
import Button from '@material-ui/core/Button'
import { STATUS } from '../todo-helper'

const icons = {
  [STATUS.NEW]: 'assignment',
  [STATUS.IN_PROGRESS]: 'autorenew',
  [STATUS.DONE]: 'assignment_turned_in',
  [STATUS.DELETED]: 'delete',
  [STATUS.CANCELED]: 'cancel'
}
const colors = {
  [STATUS.NEW]: 'grey',
  [STATUS.IN_PROGRESS]: 'blue',
  [STATUS.DONE]: 'green',
  [STATUS.DELETED]: 'red',
  [STATUS.CANCELED]: 'black'
}
export default memo(function TaskListItem({ children, id, status, onUpdate }){
  const startBtnMarkup =  status === STATUS.NEW && <Button onClick={()=>{onUpdate(id,STATUS.IN_PROGRESS)}} type="button" color="primary">Start</Button>;
  const doneBtnMarkup =  status === STATUS.IN_PROGRESS && <Button onClick={()=>{onUpdate(id,STATUS.DONE)}} type="button" color="secondary">Done</Button>
  const cancelBtnMarkup =  status === STATUS.IN_PROGRESS && <Button onClick={()=>{onUpdate(id,STATUS.CANCELED)}} type="button">Cancel</Button>
  const deleteBtnMarkup =  status !== STATUS.IN_PROGRESS && status !== STATUS.DELETED && <Button onClick={()=>{onUpdate(id,STATUS.DELETED)}} type="button">Delete</Button>
  return (
    <>
      <li className="task-list__item">
        <Icon style={{ color: colors[status], margin: 'auto 4px auto 0px' }}>{icons[status]}</Icon>
        <p className="title">{children}</p>
        <div className="btn-group">
          {startBtnMarkup}
          {doneBtnMarkup}
          {cancelBtnMarkup}
          {deleteBtnMarkup}
        </div>
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
  )
})