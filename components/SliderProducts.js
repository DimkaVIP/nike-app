import { StyleSheet, Text, View } from 'react-native'
import { PageSlider } from '@pietile-native-kit/page-slider';
import React, { useState } from 'react'
import CardProducSlider from './CardProducSlider';

const SliderProducts = () => {
	const [selectedPage, setSelectedPage] = useState(0);

	return (
		<View>
			<View style={styles.headerSlider}>
				<Text style={styles.title}>Popular</Text>
			</View>
			<CardProducSlider
				price="75.50"
				title="Air Max 270 G"
				subTitle="Top of the month"
				like={true}
			/>
			<PageSlider
				style={styles.pageSlider}
				selectedPage={selectedPage}
				onCurrentPageChange={setSelectedPage}
			>
				<View style={[styles.page, { backgroundColor: 'red' }]}>
					<Text>1</Text>
				</View>
				<View style={[styles.page, { backgroundColor: 'orange' }]}>
					<Text>2</Text>
				</View>
				<View style={[styles.page, { backgroundColor: 'yellow' }]}>
					<Text>3</Text>
				</View>
			</PageSlider>
		</View>
	)
}

export default SliderProducts

const styles = StyleSheet.create({
	headerSlider: {
		marginBottom: 30
	},
	title: {
		fontSize: 18,
		fontWeight: '600'
	},
	pageSlider: {
		width: '100%',
	},
	page: {
		alignItems: 'center',
		height: 128,
		justifyContent: 'center',
		padding: 16,
	},
})