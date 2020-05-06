import React    from 'react'
import Calculator from './calculator'
import Button from './button'
import Display from './display'


const AppContent = ({
  label,
  value,
  double,
  triple,
  operations,
  handle,
  handleSetOperation,
  handleClear,
  handleAddDigit}) => (

  <div className="app-content">
    <h1>Calculator</h1>
    <Calculator>
      <Display value = { value } />

      <Button handle = {handleClear} label = {'AC'} triple/>
      <Button handle = {handleSetOperation} label = {'/'} operation />
      <Button handle = {handleAddDigit} label = {'7'}/>
      <Button handle = {handleAddDigit} label = {'8'}/>
      <Button handle = {handleAddDigit} label = {'9'}/>
      <Button handle = {handleSetOperation} label = {'X'} operation/>
      <Button handle = {handleAddDigit} label = {'4'}/>
      <Button handle = {handleAddDigit} label = {'5'}/>
      <Button handle = {handleAddDigit} label = {'6'}/>
      <Button handle = {handleSetOperation} label = {'-'} operation/>
      <Button handle = {handleAddDigit} label = {'1'}/>
      <Button handle = {handleAddDigit} label = {'2'}/>
      <Button handle = {handleAddDigit} label = {'3'}/>
      <Button handle = {handleSetOperation} label = {'+'} operation/>
      <Button handle = {handleAddDigit} label = {'0'} double/>
      <Button handle = {handleAddDigit} label = {'.'} />
      <Button handle = {handleSetOperation} label = {'='} operation/>
    </Calculator>
  </div>
)


export default AppContent
