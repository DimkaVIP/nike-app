import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Filter from './Filter'

export default function Search() {
	return (
		<View style={styles.search}>
			<TextInput
				placeholder='Search...'
				style={styles.searchInput} />
			<Filter />
		</View>
	)
}

const styles = StyleSheet.create({
	search: {
		flexDirection: 'row',
		marginBottom: 30
	},
	searchInput: {
		backgroundColor: '#FFFFFF',
		padding: 18,
		color: '#2D294280',
		fontSize: 14,
		borderRadius: 10,
		marginRight: 18,
		width: '80%'
	}
});