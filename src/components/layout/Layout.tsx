import styled, { css, down } from '@xstyled/styled-components'


export const Row = styled.div`
display: grid;
grid-gap: 16px 16px;
grid-template-columns: ${(p:any )=> p.layout ? p.layout : 'repeat(auto-fit, minmax(100px, 1fr))'} ;
  background-color: primary;
  padding: 10px;

	 ${down( 'sm' , css`
		{ 
			grid-template-columns: minmax(100%, max-content) !important;
			grid-gap: 16px 16px;
			padding: 10px;
		
		}
	`,
)}
`

export const Col = styled.div`
 background-color: warning;
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;


`
