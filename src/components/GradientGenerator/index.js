import {Component} from 'react'
import {
  Main,
  Heading,
  Paragraph,
  UnorderList,
  GenerateButtom,
  Mini,
  InputUser,
} from './styledComponents'
import GradientItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
class GradientGenerator extends Component {
  state = {
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
    directActive: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    userFrom: '#8ae323',
    userTo: '#014f7b',
  }

  onChangeBtn = id => {
    this.setState({directActive: id})
  }

  fromColorChnage = event => {
    this.setState({userFrom: event.target.value})
  }

  toColorChange = event => {
    this.setState({userTo: event.target.value})
  }

  GeneratorBtn = () => {
    const {directActive, userFrom, userTo} = this.state
    const directSet = `to ${directActive},${userFrom},${userTo}`
    this.setState({
      gradientValue: directSet,
      fromColorInput: userFrom,
      toColorInput: userTo,
    })
  }

  render() {
    const {
      gradientValue,
      fromColorInput,
      toColorInput,
      userFrom,
      userTo,
      directActive,
    } = this.state
    return (
      <Main data-testid="gradientGenerator" gradientValue={gradientValue}>
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <UnorderList>
          {gradientDirectionsList.map(one => (
            <GradientItem
              onChangeBtn={this.onChangeBtn}
              key={one.directionId}
              send={one}
              activeStatus={directActive === one.value}
            />
          ))}
        </UnorderList>
        <Paragraph>Pick the Colors</Paragraph>
        <Mini>
          <Paragraph>{fromColorInput}</Paragraph>
          <InputUser
            onChange={this.fromColorChnage}
            value={userFrom}
            type="color"
          />
          <InputUser
            value={userTo}
            type="color"
            onChange={this.toColorChange}
          />
          <Paragraph>{toColorInput}</Paragraph>
        </Mini>
        <GenerateButtom onClick={this.GeneratorBtn} type="button">
          Generate
        </GenerateButtom>
      </Main>
    )
  }
}

export default GradientGenerator
