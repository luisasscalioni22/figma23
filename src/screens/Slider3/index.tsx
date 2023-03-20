import { FlatList, ImageBackground, View } from 'react-native';
import { IPage } from '../../../App';
import React from 'react'
import {
    ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider
} from '../../components';
import { styles } from './styles';
export function Slider3({ setPageI }: IPage) {
    const slide1 = require("../../assets/slide1.png")
    const slide1Texts = [
        { id: '1', text: 'Sincronize seus contatos.'},
        { id: '2', text: 'Tenha a opão de privar sua conta ou suas pastas.'},
        { id: '3', text: 'Oculte seu perfiç em mecanismos de pesquisa.'},
    ]
    return (
        <ImageBackground source={slide1} style={styles.container} >
            <View style={styles.panel}>
                <ComponentTitleSlider titleI='Privacidade e Segurança' />
                <FlatList
                    data={slide1Texts}
                    renderItem={({ item }) =>
                        <ComponentListMarker key={item.id} textMarker={item.text} />
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.buttonSlider}>
                <ComponentButtonSlider onPressI={() => setPageI(1)} />
                <ComponentButtonSlider onPressI={() => setPageI(2)} />
                <ComponentButtonSlider onPressI={() => setPageI(3)} />
                <ComponentButtonSlider onPressI={() => setPageI(4)} />
            </View>
        </ImageBackground>
    );

}