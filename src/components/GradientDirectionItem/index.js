import {ListItem, Button} from './styledComponents'

const GradientItem = props => {
  const {send, onChangeBtn, activeStatus} = props
  const {value} = send
  const directBtn = () => {
    onChangeBtn(value)
  }
  return (
    <ListItem value={value}>
      <Button activeStatus={activeStatus} onClick={directBtn} type="button">
        {send.displayText}
      </Button>
    </ListItem>
  )
}

export default GradientItem
