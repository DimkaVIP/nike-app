import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardProducSlider = (props) => {
	return (
		<View style={styles.card}>
			<Text>{props.title}</Text>
		</View>
	)
}

export default CardProducSlider

const styles = StyleSheet.create({
	card: {
		shadowColor: '#000',
		elevation: 3,
		paddingVertical: 16,
		paddingHorizontal: 12,
		borderRadius: 10,
		backgroundColor: '#FFF',
		marginBottom: 30,
		maxWidth: 250
	}
})