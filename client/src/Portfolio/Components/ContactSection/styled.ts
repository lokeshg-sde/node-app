import styled from '@emotion/styled'
import { TextField } from '@mui/material'
import type { TextFieldProps } from '@mui/material'

type CardProps = {
  width: number
  height: number
  padding?: string
}

export const Card = styled.div`
  width: ${({ width }: CardProps) => width}rem !important;
  height: ${({ height }: CardProps) => height}rem;
  border-radius: 0.8rem;
  background: #2b2b2b;
  padding: ${({ padding }: CardProps) => padding || '0.8rem 0.5rem 0.8rem'};
  margin-bottom: 2.4rem;
`

export const HeaderText = styled.div`
  margin: 0 auto 4rem;
  width: 46rem;
  max-width: 100%;
`

export const TextWrapper = styled.p`
  color: #fff;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-family: SF Pro Display, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2rem;
  letter-spacing: 0.02em;
`

export const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`

export const InfoText = styled.p`
  font-family: SF Pro Display, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  text-align: center;
  color: #fff;
  text-decoration: none;
  @media (max-width: 303px) {
    font-size: 1.3rem;
  }
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  & div[id='container'] {
    flex-direction: row;
    display: flex;
    width: 100%;
    gap: 1rem;
    justify-content: space-between;
    max-width: 1140px;
  }
  @media (max-width: 760px) {
    & div[id='infoCards'] {
      display: none;
    }
  }
`

export const Button = styled.button`
  height: 4.8rem;
  width: 18.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0fb;
  box-shadow: 0 1.6rem 1.6rem rgba(51, 51, 51, 0.25);
  border-radius: 3rem;
  font-family: SF Pro Display, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  text-align: center;
  color: #303030;
  border: none;
  & :active,
  :visited {
    outline: none;
    border: none;
    box-shadow: none;
  }
  @media (max-width: 1066px) {
    margin: 0 auto;
  }
`

export const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    background-color: whitesmoke;
    max-height: ${({ id }) => (id === 'message' ? '' : '200px !important')};
    border-radius: 2rem;
    border-width: 0.5rem;
    padding: 0.5rem;
    padding-left: ${({ InputProps }: TextFieldProps) =>
      InputProps?.startAdornment ? '0px' : '1rem'};
    margin-bottom: 2.2rem;
    font-family: SF Pro Display, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    -webkit-text-fill-color: black;
    line-height: 1.9rem;
  }
`
