import styled from '@emotion/styled'

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
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (max-width: 1066px) {
    justify-content: center;
  }
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
`
export const Input = styled.input`
  width: ${({ width }: { width?: string }) => width || '100%'};
  height: 3.8rem;
  background: #dadade;
  display: flex;
  border-radius: 2rem;
  align-items: center;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  margin-bottom: 2.2rem;
  font-family: SF Pro Display, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  -webkit-text-fill-color: black;
  line-height: 1.9rem;
  & :focus {
    box-shadow: none;
    outline: none;
    border: 0.1rem solid #0fb;
  }
`

export const TextArea = styled.textarea`
  border-radius: 1rem;
  height: 20rem;
  width: 33rem;
  background: #dadade;
  padding: 1.2rem 1.2rem;
  margin-bottom: 2.4rem;
  font-family: SF Pro Display, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  -webkit-text-fill-color: black;
  & :focus {
    box-shadow: none;
    outline: none;
    border: 0.1rem solid #0fb;
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
