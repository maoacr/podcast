import React from 'react'

export default class extends React.Component {
	render() {
		return <div>

		<h1>Hola platzi !</h1>
		<p>Bienvenidos al curso de Next Js</p>

		<img src='./platzi-logo.png' alt='Platzi'/>

		<style jsx>{`
			h1 {
				color: red;
			}
			p {
				color: green;
			}
			img {
				max-width: 50%;
				display: block;
				margin: 0 auto;
			}
		`}</style>

		<style jsx global>{`
			body {
				background: black;
			}
		`}</style>

		</div>
	}
}