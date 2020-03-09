import React from 'react';
import { Row, Col } from './components/layout/Layout';
import styled, { ThemeProvider } from '@xstyled/styled-components'
import { theme } from './theme';
import { GlobalStyle } from './GlobalStyle';
// import { Container } from './styles';
import { SketchPicker } from 'react-color'
import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live'

const App = () => {
	const headerProps = { text: 'I\'m styled!' };
	return <>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{AppLive()}
			<SketchPicker size='' />
		</ThemeProvider>
	</>
};

const AppLive = () => {
	const scope = { React, styled, Row, Col, ThemeProvider, theme, GlobalStyle };
	const code = `
<div className="container">
<h1>Rows and Cols</h1>
	<Row layout='300px 1fr' breakpoint='sm' >
		<Col>
			<div className="col"> Fixed</div>
		</Col>
		<Col>
			<div className="col"> Dynamic</div>
		</Col>
	</Row>
	
	,<Row layout='1fr' >
		<Col>
			<div className="col"> Fixed</div>
		</Col>
		<Col>
			<div className="col"> Dynamic</div>
		</Col>
	</Row>
</div>
	`

	
return <LiveProvider code={code} scope={scope} >
	<LivePreview />
	<LiveEditor />
	<LiveError />
</LiveProvider>
}

export default App;
