import { View, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function HeaderMain() {
	return (
		<View style={styles.header}>
			<Image
				resizeMode='contain'
				source={require('../assets/header-main/menu.png')} />
			<Image
				resizeMode='contain'
				source={require('../assets/header-main/logo.png')} />
			<Image
				style={styles.notifications}
				resizeMode='contain'
				source={require('../assets/header-main/notifications.png')} />
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginTop: '10%',
		marginBottom: 30
	},
	notifications: {
		width: 18,
		height: 20
	}
});