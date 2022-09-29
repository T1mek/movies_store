import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
	<ContentLoader
		speed={0}
		width={150}
		height={280}
		viewBox="0 0 150 280"
		backgroundColor="#c2c2c2"
		foregroundColor="#c2c2c2"
	>
		<rect x="276" y="171" rx="0" ry="0" width="5" height="2" />
		<rect x="6" y="1" rx="0" ry="0" width="8" height="0" />
		<rect x="0" y="0" rx="0" ry="0" width="150" height="200" />
		<rect x="0" y="216" rx="0" ry="0" width="94" height="29" />
	</ContentLoader>
)

export default Skeleton