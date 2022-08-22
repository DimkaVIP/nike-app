import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const CardProducSlider = (props) => {
	return (
		<View style={styles.card}>
			<View style={styles.cardHeader}>
				<View>
					<Text style={styles.subTitle}>{props.subTitle}</Text>
					<Text style={styles.title}>{props.title}</Text>
				</View>
				<Icon name="heart" size={20} color="#000" />
			</View>
			<View style={styles.images}>
				<Image style={styles.imageMain} source={require('../assets/card-product/white.png')} />
				<Image style={styles.imageBackground} source={require('../assets/card-product/background-blue.png')} />
			</View>
			<View style={styles.cardFooter}>
				<Text style={styles.price}>$ 75.95</Text>
				<Icon name="plus-circle" size={40} color="#000" />
			</View>
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
		maxWidth: 250,
		marginRight: 16
	},
	cardHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	imageMain: {
		position: 'absolute',
		zIndex: 1,
		top: '50%',
		transform: [{ translateY: -80 }]
	},
	imageBackground: {
		padding: 0,
		left: -12,
		bottom: -16
	},
	cardFooter: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		position: 'absolute',
		bottom: 16,
		left: 12,
		width: '100%'
	},
	subTitle: {
		fontWeight: '300',
		fontSize: 12,
	},
	title: {
		fontWeight: '500',
		fontSize: 18,
	},
	price: {
		fontWeight: '700',
		fontSize: 22,
	}
})