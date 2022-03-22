import { fireEvent, render, screen } from '@testing-library/react'
import Counter from '../Counter'

test('Description counter', () => {
  render(<Counter />)
  const counterElement = screen.getByTestId('counterId')
  expect(counterElement).toBeInTheDocument()
})

test('Description artirmali', () => {
  render(<Counter />)
  const buttonElement = screen.getByRole('button', { name: /artir/i })
  expect(buttonElement).toBeInTheDocument()
})

test('Description eksiltmeli', () => {
  render(<Counter />)
  const buttonElement = screen.getByRole('button', { name: /azalt/i })
  expect(buttonElement).toBeInTheDocument()
})

test('Description button clikleme', () => {
  render(<Counter />)
  const buttonElement = screen.getByRole('button', { name: /artir/i })

  fireEvent.click(buttonElement)
  const counterElement = screen.getByTestId('counterId')

  expect(parseInt(counterElement.textContent)).toEqual(1)
})

test('Description button cliks', () => {
  render(<Counter />)
  const buttonElementartir = screen.getByRole('button', { name: /artir/i })
  const buttonElementazalt = screen.getByRole('button', { name: /azalt/i })

  const counterElement = screen.getByTestId('counterId')

  fireEvent.click(buttonElementartir)
  fireEvent.click(buttonElementartir)
  fireEvent.click(buttonElementartir)
  fireEvent.click(buttonElementazalt)
  

  expect(parseInt(counterElement.textContent)).toEqual(2)
})
