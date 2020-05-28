import React from 'react'

export default class extends React.Component {
	render() {
		return <div>

		<img src='./platzi-logo.png' alt='Platzi'/>

		<h1>Creado por @maoacr</h1>
		<p>Bienvenidos al curso de Next Js</p>

		<style jsx>{`
			h1 {
				color: white;
				padding-top: 2em;
			}
			p {
				color: white;
			}
			img {
				max-width: 50%;
				display: block;
				margin: 0 auto;
				padding-top: 150px;
			}
		`}</style>

		<style jsx global>{`
			body {
				background: black;
				text-align: center;

			}
		`}</style>

		</div>
	}
}