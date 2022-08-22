import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import CardProducSlider from './CardProducSlider';

const SliderProducts = () => {
	const [selectedPage, setSelectedPage] = useState(0);

	const DATA = [
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
			title: 'First Item',
		},
		{
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
			title: 'Second Item',
		},

	];

	const Item = ({ title }) => (
		<View style={styles.item}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);

	const renderItem = ({ item }) => (
		<Item title={item.title} />
	);

	return (

		<View>
			<View style={styles.headerSlider}>
				<Text style={styles.title}>Popular</Text>
			</View>
			<View>
				<FlatList
					data={DATA}
					horizontal={true}
					renderItem={() => (
						<CardProducSlider
							price="75.50"
							title="Air Max 270 G"
							subTitle="Top of the month"
							like={true}
						/>
					)}
					keyExtractor={item => item.id}
				/>
			</View>
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
})