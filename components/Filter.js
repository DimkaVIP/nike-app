import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Filter() {
	return (
		<TouchableOpacity style={styles.filter}>
			<Image
				source={require('../assets/filter/filter.png')}
			/>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	filter: {
		backgroundColor: '#FFFFFF',
		paddingHorizontal: 13,
		paddingVertical: 17,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
